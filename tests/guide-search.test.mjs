import test from 'node:test';
import assert from 'node:assert/strict';
import {matchesGuide,normalizeGuideQuery} from '../src/lib/guide-search.ts';

const audi={makeIds:['audi'],codes:['P0299','P029900'],text:'Audi A4 P0299: CAEB wastegate diagnosis. Check intake leaks before replacing a turbocharger.'};
const gm={makeIds:['chevrolet','gmc'],codes:['P0171','P0174'],text:'Chevrolet Colorado and GMC Canyon: paired lean codes and calibration.'};

test('guide filters combine all query words with any explicitly covered make',()=>{
 assert.equal(matchesGuide(gm,'canyon lean','gmc'),true);
 assert.equal(matchesGuide(gm,'canyon lean','chevrolet'),true);
 assert.equal(matchesGuide(gm,'canyon lean','ford'),false);
 assert.equal(matchesGuide(gm,'canyon misfire','gmc'),false);
 assert.equal(matchesGuide(audi,'A4 intake'),true);
});

test('full code and suffix searches do not broaden to another scanner display',()=>{
 assert.equal(matchesGuide(audi,'p 0299'),true);
 assert.equal(matchesGuide(audi,'P0299:00 A4'),true);
 assert.equal(matchesGuide(audi,'P0299-00'),true);
 assert.equal(matchesGuide(audi,'P029901'),false);
 assert.equal(matchesGuide({...audi,codes:['P0299']},'P029900'),false);
 assert.equal(matchesGuide(audi,'P0234'),false);
});

test('model punctuation and letter case do not hide relevant guides',()=>{
 const honda={makeIds:['honda'],codes:['P0300'],text:'Honda CR-V misfire after earlier updates'};
 assert.equal(matchesGuide(honda,'crv MISFIRE','honda'),true);
 assert.equal(matchesGuide(honda,'CR-V misfire'),true);
 assert.equal(normalizeGuideQuery('  P0299:00  ·  A4 '),'p029900 a4');
});

test('clearing filters returns every guide, while an unknown make returns none',()=>{
 assert.equal(matchesGuide(audi,''),true);
 assert.equal(matchesGuide(gm,'  '),true);
 assert.equal(matchesGuide(gm,'','gmc'),true);
 assert.equal(matchesGuide(gm,'','unknown'),false);
});
