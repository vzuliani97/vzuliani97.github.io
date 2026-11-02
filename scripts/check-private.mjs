// Fails the build if private contact data or credentials end up in the published site.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';

const root = process.argv[2] ?? 'dist';
const patterns = [
  [/[A-Za-z0-9._%+-]+@gmail\.com/, 'personal email address'],
  // Standalone numbers only: SVG coordinates are long decimals that would otherwise match by accident.
  [/(?<![\d.])\+?57[\s-]?3\d{2}[\s-]?\d{3}[\s-]?\d{4}(?![\d.])/, 'Colombian mobile number'],
  [/(?:api[_-]?key|secret|password)\s*[:=]\s*["'][^"']{8,}["']/i, 'credential-like assignment'],
];
const files = (dir) => readdirSync(dir).flatMap((name) => {
  const full = path.join(dir, name);
  return statSync(full).isDirectory() ? files(full) : [full];
});
const problems = [];
for (const file of files(root).filter((f) => /\.(html|js|css|txt|xml|svg|json)$/.test(f))) {
  const text = readFileSync(file, 'utf8');
  for (const [pattern, label] of patterns) if (pattern.test(text)) problems.push(`${file}: ${label}`);
}
if (problems.length) {
  console.error(problems.join('\n'));
  process.exit(1);
}
console.log(`no private data in ${root}`);
