import { readFile } from 'node:fs/promises';

const SHA = /^[0-9a-f]{40}$/;

export async function loadSourcePins(
  location = new URL('../source-pins.json', import.meta.url),
) {
  return JSON.parse(await readFile(location, 'utf8'));
}

export function validateSourcePins(pins) {
  if (pins?.schema !== 'happy-wakey-test.source-pins.v1') {
    throw new Error('source pin schema must remain versioned');
  }
  for (const name of ['flutter', 'desktop', 'e2e']) {
    const app = pins.apps?.[name];
    if (!SHA.test(app?.revision ?? '')) {
      throw new Error(`source pin is not immutable: ${name}`);
    }
    if (!app.repository?.startsWith('happy-wakey/')) {
      throw new Error(`source pin repository is not in happy-wakey: ${name}`);
    }
  }
  return pins;
}

if (process.argv[1]?.endsWith('assert-source-pins.mjs')) {
  const pins = validateSourcePins(await loadSourcePins());
  for (const [name, app] of Object.entries(pins.apps)) {
    process.stdout.write(`${name} ${app.repository}@${app.revision}\n`);
  }
}
