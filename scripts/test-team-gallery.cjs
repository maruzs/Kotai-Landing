const {chromium} = require('playwright');
const assert = require('node:assert/strict');
const {mkdirSync, existsSync, readdirSync, writeFileSync} = require('node:fs');
const {homedir} = require('node:os');
const path = require('node:path');

const target = process.env.TARGET_URL || 'http://127.0.0.1:5173';
const output = process.env.PW_ARTIFACT_DIR || path.join(__dirname, '../videos/kotai-mejorando-juntos/review/web');
const cache = path.join(homedir(), '.cache/puppeteer/chrome');
const executablePath = existsSync(cache) ? readdirSync(cache).sort().reverse()
  .map(v => path.join(cache, v, 'chrome-win64/chrome.exe')).find(existsSync) : undefined;
const expected = ['equipo', 'coordinacion', 'orientacion', 'compromiso', 'acompanamiento', 'oficinas'].map(n => `${n}-kotai.webp`);

(async () => {
  mkdirSync(output, {recursive: true});
  const browser = await chromium.launch({headless: false, executablePath});
  const results = [];
  try {
    const page = await browser.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    for (const width of [1440, 700, 390]) {
      await page.setViewportSize({width, height: 900});
      await page.goto(target, {waitUntil: 'domcontentloaded'});
      const gallery = page.getByRole('region', {name: 'Nuestro Equipo, Siempre Junto a Ti'});
      await gallery.waitFor();
      const cards = gallery.getByRole('button');
      assert.equal(await cards.count(), 6);
      const positions = [];
      for (let i = 0; i < 6; i++) {
        const card = cards.nth(i);
        await card.scrollIntoViewIfNeeded();
        const image = card.getByRole('img');
        await image.evaluate(el => el.decode());
        assert((await image.getAttribute('src')).endsWith(expected[i]));
        assert(await image.evaluate(el => el.naturalWidth === 1280));
        positions.push((await card.boundingBox()).x);
        const title = await card.getByRole('heading').innerText();
        await card.click();
        const dialog = page.getByRole('dialog');
        await dialog.waitFor();
        assert.equal(await dialog.getByRole('heading').innerText(), title);
        await dialog.getByRole('img', {name: title, exact: true}).evaluate(el => el.decode());
        await page.keyboard.press('ArrowRight');
        assert.notEqual(await dialog.getByRole('heading').innerText(), title);
        await page.keyboard.press('ArrowLeft');
        assert.equal(await dialog.getByRole('heading').innerText(), title);
        await page.keyboard.press('Escape');
        await dialog.waitFor({state: 'detached'});
        assert(await card.evaluate(el => el === document.activeElement));
      }
      assert.equal(new Set(positions.map(Math.round)).size, width < 768 ? 1 : 3);
      assert(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth));
      await gallery.screenshot({path: path.join(output, `equipo-${width}.png`)});
      results.push({width, images: 6, columns: width < 768 ? 1 : 3, imageLoading: 'passed', lightbox: 'passed', arrowNavigation: 'passed', escapeAndFocus: 'passed', horizontalOverflow: false});
    }
    assert.deepEqual(errors, []);
    writeFileSync(path.join(output, 'results.json'), JSON.stringify(results, null, 2));
    console.log(JSON.stringify(results, null, 2));
  } finally {
    await browser.close();
  }
})().catch(error => {console.error(error); process.exitCode = 1;});
