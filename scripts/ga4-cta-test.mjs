import { chromium } from 'playwright';

const URL = 'https://tdah-simples.vercel.app';
const ids = ['cta-hero','cta-final'];

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(URL, { waitUntil: 'networkidle' });

  for (const id of ids) {
    const el = await page.$(`#${id}`);
    if (el) {
      console.log(`Clicking #${id}…`);
      await el.click();
      await page.waitForTimeout(1500);
    } else {
      console.log(`Elemento #${id} não encontrado`);
    }
  }

  await browser.close();
  console.log('✅ Cliques simulados (best-effort). Confirme no GA4 DebugView.');
})();
