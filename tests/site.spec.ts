import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const ROUTES = ['/', '/work/yamesi/', '/work/opscircuit/', '/work/nekobet/', '/resume/'];

for (const route of ROUTES) {
  test(`${route}: renders, no serious accessibility violations, no horizontal overflow, no errors`, async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    page.on('console', (message) => {
      if (message.type() === 'error') errors.push(message.text());
    });

    const response = await page.goto(route);

    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
    const results = await new AxeBuilder({ page }).analyze();
    const serious = results.violations.filter((violation) => violation.impact === 'critical' || violation.impact === 'serious');
    expect(serious.map((violation) => `${violation.id} (${violation.nodes.length})`)).toEqual([]);
    expect(await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)).toBeLessThanOrEqual(0);
    expect(errors).toEqual([]);
  });
}

test('switches to Spanish and remembers the choice on the next page', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'ES' }).click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'es');
  await expect(page.getByRole('heading', { name: 'Proyectos destacados' })).toBeVisible();

  await page.goto('/work/yamesi/');
  await expect(page.getByRole('tab', { name: 'Vista rápida' })).toBeVisible();
});

test('case study: the deep dive and the architecture explorer switch views and load real diagrams', async ({ page }) => {
  await page.goto('/work/opscircuit/');
  await page.getByRole('tab', { name: 'Engineering deep dive' }).click();
  await expect(page.locator('#panel-deep')).toBeVisible();
  await expect(page).toHaveURL(/#deep-dive$/);

  await page.getByRole('tab', { name: 'Alert lifecycle' }).click();
  const diagram = page.locator('#diagram-panel img');
  await expect(diagram).toHaveAttribute('src', '/diagrams/opscircuit-flow.svg');
  await diagram.scrollIntoViewIfNeeded();
  await expect.poll(() => diagram.evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth)).toBeGreaterThan(0);
});

test('every internal link on every page resolves', async ({ page, request }) => {
  const links = new Set<string>();
  for (const route of ROUTES) {
    await page.goto(route);
    for (const href of await page.locator('a[href^="/"]').evaluateAll((anchors) => anchors.map((a) => a.getAttribute('href')!))) {
      links.add(href.split('#')[0] || '/');
    }
    const deepDive = page.getByRole('tab', { name: 'Engineering deep dive' });
    if (await deepDive.count()) await deepDive.click();
    for (const src of await page.locator('img[src^="/"]').evaluateAll((images) => images.map((img) => img.getAttribute('src')!))) {
      links.add(src);
    }
  }
  for (const link of links) {
    expect((await request.get(link)).status(), link).toBe(200);
  }
});

test('external links: every link to GitHub answers 200 (LinkedIn blocks bots with 999)', async ({ page, request }) => {
  test.skip(test.info().project.name !== 'desktop-light', 'one project is enough for network checks');
  const links = new Set<string>();
  for (const route of ROUTES) {
    await page.goto(route);
    const deepDive = page.getByRole('tab', { name: 'Engineering deep dive' });
    if (await deepDive.count()) await deepDive.click();
    for (const href of await page.locator('a[href^="https://"]').evaluateAll((anchors) => anchors.map((a) => a.getAttribute('href')!))) {
      links.add(href);
    }
  }
  const failures: string[] = [];
  for (const link of links) {
    const status = (await request.get(link, { maxRedirects: 5 })).status();
    if (status !== 200 && !(link.includes('linkedin.com') && status === 999)) failures.push(`${status} ${link}`);
  }
  expect(failures).toEqual([]);
  expect(links.size).toBeGreaterThanOrEqual(15); // guards against a collector that silently finds nothing
});
