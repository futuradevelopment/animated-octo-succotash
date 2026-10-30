#!/usr/bin/env node
/** Deterministic, offline import of the pinned MIT community dataset. */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const vendor = path.join(root, 'vendor/wal33d-dtc-database');
const manifest = JSON.parse(fs.readFileSync(path.join(vendor, 'manifest.json'), 'utf8'));
const sourceId = 'wal33d-dtc-database';
const commit = manifest.ref;
const codePattern = /^[PBCU][0-3][0-9A-F]{3}$/;
const system = { P: 'powertrain', B: 'body', C: 'chassis', U: 'network' };
// URL ownership only: select from actual source labels, never infer applicability.
const canonicalMakePriority = [
  'chevrolet', 'honda', 'ford', 'toyota', 'volkswagen', 'bmw', 'mercedes-benz',
  'nissan', 'hyundai', 'kia', 'jeep', 'ram', 'gmc', 'subaru', 'mazda', 'lexus', 'acura',
];
const canonicalMakeRank = new Map(canonicalMakePriority.map((id, index) => [id, index]));
// Region is the marque's origin, never a statement of vehicle/code applicability.
const makesByLabel = {
  GENERIC: ['generic', 'Generic OBD-II', 'International'],
  ACURA: ['acura', 'Acura', 'Japan'], BMW: ['bmw', 'BMW', 'Germany'],
  BUICK: ['buick', 'Buick', 'United States'], CADILLAC: ['cadillac', 'Cadillac', 'United States'],
  CHEVY: ['chevrolet', 'Chevrolet', 'United States'], CHRYSLER: ['chrysler', 'Chrysler', 'United States'],
  DODGE: ['dodge', 'Dodge', 'United States'], FORD: ['ford', 'Ford', 'United States'],
  GEO: ['geo', 'Geo', 'United States'], GMC: ['gmc', 'GMC', 'United States'],
  HONDA: ['honda', 'Honda', 'Japan'], JAGUAR: ['jaguar', 'Jaguar', 'United Kingdom'],
  JEEP: ['jeep', 'Jeep', 'United States'], KIA: ['kia', 'Kia', 'South Korea'],
  LEXUS: ['lexus', 'Lexus', 'Japan'], LINCOLN: ['lincoln', 'Lincoln', 'United States'],
  MAZDA: ['mazda', 'Mazda', 'Japan'], MERCEDES: ['mercedes-benz', 'Mercedes-Benz', 'Germany'],
  MERCURY: ['mercury', 'Mercury', 'United States'], MITSUBISHI: ['mitsubishi', 'Mitsubishi', 'Japan'],
  NISSAN: ['nissan', 'Nissan', 'Japan'], OLDSMOBILE: ['oldsmobile', 'Oldsmobile', 'United States'],
  PLYMOUTH: ['plymouth', 'Plymouth', 'United States'], PONTIAC: ['pontiac', 'Pontiac', 'United States'],
  SATURN: ['saturn', 'Saturn', 'United States'], SUBARU: ['subaru', 'Subaru', 'Japan'],
  SUZUKI: ['suzuki', 'Suzuki', 'Japan'], TOYOTA: ['toyota', 'Toyota', 'Japan'],
  VOLKSWAGEN: ['volkswagen', 'Volkswagen', 'Germany'],
};
// Allocation screening does not verify individual assignments against SAE/OEM data.
function genericAllocation(code) {
  return /^(?:P[02]|B0|C0|U[03])/.test(code)
    || (code.startsWith('P3') && parseInt(code.slice(2), 16) >= 0x400);
}
function manufacturerAllocation(code) {
  return /^(?:P1|[BCU][12])/.test(code)
    || (code.startsWith('P3') && parseInt(code.slice(2), 16) < 0x400);
}
const normalizeTitle = value => value.toLowerCase().replace(/\(-\)/g, 'negative').replace(/\+/g, 'positive').replace(/[^a-z0-9]/g, '');
const excluded = [];
const candidateRows = [];
let inputNonemptyRows = 0;
const fileCounts = [];
function reject(row, reason) { excluded.push({ ...row, reason }); }

for (const file of [...manifest.files].sort((a, b) => a.path.localeCompare(b.path))) {
  const bytes = fs.readFileSync(path.join(vendor, file.path));
  const actualBlob = crypto.createHash('sha1').update(`blob ${bytes.length}\0`).update(bytes).digest('hex');
  if (actualBlob !== file.sha) throw new Error(`Pinned Git blob mismatch: ${file.path}`);
  const label = path.basename(file.path, '_codes.txt').toUpperCase();
  const manufacturer = /^[PBCU]$/.test(label) ? 'GENERIC' : label;
  let fileRows = 0;
  bytes.toString('utf8').split(/\r?\n/).forEach((raw, index) => {
    if (!raw.trim()) return;
    inputNonemptyRows++; fileRows++;
    const match = raw.trim().match(/^([A-Z0-9]+)\s*-\s*(.+)$/);
    const row = { path: file.path, line: index + 1, blobSha: file.sha, manufacturer,
      code: match?.[1] ?? '', originalTitle: match?.[2]?.trim() ?? raw };
    if (!match || !codePattern.test(row.code)) return reject(row, 'malformed_code_or_row');
    if (manufacturer === 'OTHER') return reject(row, 'unscoped_other_label');
    if (manufacturer === 'INFINITI') return reject(row, 'infiniti_file_copies_honda');
    if (manufacturer === 'GM') return reject(row, 'gm_file_duplicates_gmc');
    if (manufacturer === 'AUDI') return reject(row, 'audi_file_contains_causes_not_definitions');
    if (/^[PBCU][0-3][0-9A-F]{3}(?:\s*[-–—]\s*[PBCU]?[0-3]?[0-9A-F]{3})?$/.test(row.originalTitle))
      return reject(row, 'code_range_header_not_definition');
    if (/reserved|manufacturer[ -]?(?:controlled|specific)|not used|not assigned|unassigned|to be determined|undefined|^unknown$|^n\/?a$/i.test(row.originalTitle))
      return reject(row, 'reserved_unassigned_or_placeholder');
    if (row.originalTitle.split(/\s+/).length < 2 || /^(?:Driver\s*\d+|CID\s*(?:High|Low))$/i.test(row.originalTitle))
      return reject(row, 'ambiguous_title_fragment');
    if (/^Transmission system problems$/i.test(row.originalTitle))
      return reject(row, 'non_specific_system_problem_placeholder');
    // These source lines concatenate unrelated alternative definitions without scope.
    if (/Dual Alternator .*Manifold Absolute|Engine Coolant Temperature.* IAT [ -]*B|IAT [ -]*B.*Exhaust Gas Recirculation/i.test(row.originalTitle))
      return reject(row, 'concatenated_unscoped_definitions');
    if (manufacturer === 'GENERIC' && !genericAllocation(row.code))
      return reject(row, 'generic_bucket_outside_standard_allocation');
    if (manufacturer !== 'GENERIC' && !manufacturerAllocation(row.code))
      return reject(row, 'brand_row_in_standard_or_reserved_allocation');
    if (!makesByLabel[manufacturer]) throw new Error(`Unmapped manufacturer: ${manufacturer}`);
    candidateRows.push(row);
  });
  fileCounts.push({ path: file.path, blobSha: file.sha, nonemptyRows: fileRows });
}

// Do not reproduce upstream's first-wins behavior for differing same-brand meanings.
const byBrandCode = new Map();
for (const row of candidateRows) {
  const key = `${row.manufacturer}:${row.code}`;
  if (!byBrandCode.has(key)) byBrandCode.set(key, []);
  byBrandCode.get(key).push(row);
}
const retainedRows = [];
const conflicts = [];
for (const [key, rows] of byBrandCode) {
  if (new Set(rows.map(row => normalizeTitle(row.originalTitle))).size > 1) {
    conflicts.push({ key, rows });
    rows.forEach(row => reject(row, 'conflicting_same_brand_code_definitions'));
  } else retainedRows.push(...rows);
}

// Identical code/definition facts shared by source labels have ONE canonical page.
const groups = new Map();
for (const row of retainedRows) {
  const scope = row.manufacturer === 'GENERIC' ? 'generic' : 'manufacturer';
  const key = `${scope}:${row.code}:${normalizeTitle(row.originalTitle)}`;
  if (!groups.has(key)) groups.set(key, []);
  groups.get(key).push(row);
}
const entries = [...groups.values()].map(rows => {
  rows.sort((a, b) => a.path.localeCompare(b.path) || a.line - b.line);
  const makeIds = [...new Set(rows.map(row => makesByLabel[row.manufacturer][0]))].sort();
  const makeId = [...makeIds].sort((a, b) =>
    (canonicalMakeRank.get(a) ?? canonicalMakePriority.length) - (canonicalMakeRank.get(b) ?? canonicalMakePriority.length)
      || a.localeCompare(b))[0];
  const first = rows.find(row => makesByLabel[row.manufacturer][0] === makeId);
  const entry = {
    id: `${makeId}-${first.code.toLowerCase()}`,
    code: first.code, makeId, title: first.originalTitle, system: system[first.code[0]],
    sourceId, scope: makeId === 'generic' ? 'generic' : 'manufacturer',
    status: 'published_indexable', verification: 'community-reference',
    ...(makeIds.length > 1 ? { makeIds } : {}),
    sourceRows: rows.map(({ code, ...row }) => row),
  };
  return entry;
}).sort((a, b) => a.makeId.localeCompare(b.makeId) || a.code.localeCompare(b.code));

const routes = new Set();
const aliases = new Set();
for (const entry of entries) {
  const key = `${entry.makeId}:${entry.code}`;
  if (routes.has(key)) throw new Error(`Duplicate canonical route: ${key}`);
  routes.add(key);
  for (const makeId of entry.makeIds ?? [entry.makeId]) {
    const aliasKey = `${makeId}:${entry.code}`;
    if (aliases.has(aliasKey)) throw new Error(`Conflicting discovery alias: ${aliasKey}`);
    aliases.add(aliasKey);
  }
}
const aliasesByMake = { chevrolet: ['Chevy'], 'mercedes-benz': ['Mercedes'] };
const makes = Object.values(makesByLabel).map(([id, name, region]) => ({ id, name, region,
  ...(aliasesByMake[id] ? { aliases: aliasesByMake[id] } : {}),
}));
// These marques have separately sourced model/bulletin hubs, not dataset code rows.
makes.push(
  { id: 'audi', name: 'Audi', region: 'Germany' },
  { id: 'hyundai', name: 'Hyundai', region: 'South Korea' },
  { id: 'porsche', name: 'Porsche', region: 'Germany' },
  { id: 'ram', name: 'Ram', region: 'United States' },
);
makes.sort((a, b) => a.id.localeCompare(b.id));
const sources = [{
  id: sourceId, title: 'DTC Database: pinned community code definitions', publisher: 'Wal33D (Waleed Judah)',
  url: `https://github.com/${manifest.repository}/tree/${commit}`,
  license: 'MIT', checkedOn: manifest.retrievedOn, kind: 'dataset', commit,
  scope: 'Community reference labels only; no vehicle, model, year, engine or market applicability is established.',
  licenseUrl: `https://github.com/${manifest.repository}/blob/${commit}/LICENSE`,
}];
const exclusionsByReason = Object.fromEntries([...new Set(excluded.map(row => row.reason))].sort().map(reason => [reason, excluded.filter(row => row.reason === reason).length]));
const countBy = key => Object.fromEntries([...new Set(entries.map(entry => entry[key]))].sort().map(value => [value, entries.filter(entry => entry[key] === value).length]));
const ledger = {
  dataset: manifest.repository, commit, checkedOn: manifest.retrievedOn,
  canonicalMakePriority,
  inputFiles: manifest.files.length, inputNonemptyRows,
  excludedRows: excluded.length, retainedSourceRows: retainedRows.length,
  canonicalEntries: entries.length, distinctDisplayCodes: new Set(entries.map(entry => entry.code)).size,
  sharedDefinitionEntries: entries.filter(entry => entry.makeIds?.length > 1).length,
  rowsCollapsedIntoCanonicalDefinitions: retainedRows.length - entries.length,
  uniqueMakeCodeDiscoveryPairs: aliases.size,
  byScope: countBy('scope'), bySystem: countBy('system'), byCanonicalMake: countBy('makeId'),
  discoveryByMake: Object.fromEntries(makes.map(make => [make.id, entries.filter(entry => (entry.makeIds ?? [entry.makeId]).includes(make.id)).length])),
  exclusionsByReason, conflictGroups: conflicts, inputFileCounts: fileCounts, exclusions: excluded,
};
if (ledger.excludedRows + ledger.retainedSourceRows !== ledger.inputNonemptyRows) throw new Error('Row ledger does not balance');
function write(relative, value) {
  const target = path.join(root, relative);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, `${JSON.stringify(value, null, 2)}\n`);
}
write('src/data/dtc.json', entries);
write('src/data/makes.json', makes);
write('src/data/dataset-sources.json', sources);
write('docs/data-import-ledger.json', ledger);
console.log(JSON.stringify({ inputRows: inputNonemptyRows, excludedRows: excluded.length, canonicalEntries: entries.length, byScope: ledger.byScope, sharedDefinitionEntries: ledger.sharedDefinitionEntries, exclusionsByReason }, null, 2));
