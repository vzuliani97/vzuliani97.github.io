// Renders every diagrams/*.mmd to public/diagrams/*.svg with Mermaid CLI and the system Chrome,
// so the architecture shown on the site is generated from versioned source, never redrawn by hand.
import { execFileSync } from 'node:child_process';
import { mkdirSync, readdirSync, writeFileSync } from 'node:fs';
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
}
console.log(`rendered ${sources.length} diagrams`);
