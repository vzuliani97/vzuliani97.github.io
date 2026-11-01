// Renders every diagrams/*.mmd to public/diagrams/*.svg with Mermaid CLI and the system Chrome,
// so the architecture shown on the site is generated from versioned source, never redrawn by hand.
import { execFileSync } from 'node:child_process';
import { mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';

const chrome =
  process.env.CHROME_PATH ??
  (process.platform === 'darwin' ? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' : '/usr/bin/google-chrome');
const puppeteerConfig = path.join(tmpdir(), 'mermaid-puppeteer.json');
writeFileSync(puppeteerConfig, JSON.stringify({ executablePath: chrome, args: ['--no-sandbox'] }));
mkdirSync('public/diagrams', { recursive: true });

const sources = readdirSync('diagrams').filter((file) => file.endsWith('.mmd'));
for (const file of sources) {
  const output = path.join('public/diagrams', file.replace(/\.mmd$/, '.svg'));
  execFileSync(
    'npx',
    ['mmdc', '--quiet', '-p', puppeteerConfig, '-c', 'diagrams/mermaid-config.json', '-b', 'white', '-i', path.join('diagrams', file), '-o', output],
    { stdio: 'inherit' },
  );
  // Mermaid writes width="100%" and no height, so an <img> shrinks the diagram to fit and the text becomes
  // unreadable. Give the SVG its natural size from the viewBox; the page scrolls it inside its frame instead.
  const svg = readFileSync(output, 'utf8');
  const [, , , width, height] = /viewBox="([-\d.]+) ([-\d.]+) ([\d.]+) ([\d.]+)"/.exec(svg) ?? [];
  if (width && height) {
    const sized = svg.replace(/<svg([^>]*?) width="100%"([^>]*?) style="[^"]*"/, `<svg$1 width="${Math.ceil(width)}" height="${Math.ceil(height)}"$2`);
    writeFileSync(output, sized);
  }
}
console.log(`rendered ${sources.length} diagrams`);
