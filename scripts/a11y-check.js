const fs = require('fs');
const puppeteer = require('puppeteer');
const { Source } = require('axe-core');
(async () => {
  const url = 'https://tdah-simples.vercel.app';
  const browser = await puppeteer.launch({headless: 'new'});
  const page = await browser.newPage();
  await page.goto(url, {waitUntil: 'networkidle0'});
  await page.addScriptTag({content: Source});
  const results = await page.evaluate(async () => await axe.run());
  fs.mkdirSync('reports', {recursive: true});
  fs.writeFileSync('reports/axe.json', JSON.stringify(results, null, 2));
  await browser.close();
  console.log('A11y report salvo em reports/axe.json');
})();
