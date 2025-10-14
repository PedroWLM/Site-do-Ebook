import { chromium } from 'playwright';
import { AxeBuilder } from '@axe-core/playwright';
import fs from 'fs';

const URL = 'https://tdah-simples.vercel.app'; // mude se quiser testar outra URL

const main = async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto(URL, { waitUntil: 'networkidle' });

  // roda a verificação de acessibilidade com axe-core
  const results = await new AxeBuilder({ page }).analyze();

  // salva o relatório
  fs.mkdirSync('reports', { recursive: true });
  fs.writeFileSync('reports/axe.json', JSON.stringify(results, null, 2));

  await browser.close();
  console.log('✅ Relatório salvo em reports/axe.json');
  console.log(`Violations: ${results.violations?.length || 0}`);
};

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
