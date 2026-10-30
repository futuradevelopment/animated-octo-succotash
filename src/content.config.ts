import {defineCollection} from 'astro:content';
import {glob} from 'astro/loaders';
import {z} from 'astro/zod';
// Authored editorial material complements normalized diagnostic JSON records.
// Validation and draft/date rules are adapted from the ECL collection.
const editorial=defineCollection({loader:glob({pattern:'**/*.md',base:'./src/content/editorial'}),schema:z.object({title:z.string(),description:z.string(),updatedOn:z.string(),draft:z.boolean()})});
export const collections={editorial};
