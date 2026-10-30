import {defineConfig,devices} from '@playwright/test';
export default defineConfig({
 testDir:'./tests/browser',timeout:30000,fullyParallel:true,retries:process.env.CI?1:0,
 reporter:[['list'],['html',{outputFolder:'reports/browser-report',open:'never'}]],
 outputDir:'reports/browser-results',use:{baseURL:'http://127.0.0.1:4321',trace:'retain-on-failure'},
 projects:[{name:'desktop',use:{...devices['Desktop Chrome'],viewport:{width:1440,height:1000}}},{name:'mobile',use:{...devices['iPhone 13'],defaultBrowserType:'chromium'}}],
 webServer:{command:'npm run preview -- --host 127.0.0.1 --port 4321',url:'http://127.0.0.1:4321',reuseExistingServer:!process.env.CI,timeout:30000},
});
