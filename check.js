import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));

  await page.goto('http://localhost:4173/Portfolio/', { waitUntil: 'networkidle0' });
  const content = await page.content();
  console.log("Has content:", content.length > 500);
  console.log("Root div HTML:", await page.$eval('#root', el => el.innerHTML));
  await browser.close();
})();
