import {defineConfig} from 'astro/config';
import {satteri} from '@astrojs/markdown-satteri';
// ErrHive static infrastructure, isolated automotive deployment. Shared CSS avoids
// repeating the complete stylesheet in more than ten thousand generated pages.
export default defineConfig({site:'https://cars.errhive.com',output:'static',trailingSlash:'always',markdown:{processor:satteri()},build:{inlineStylesheets:'never'}});
