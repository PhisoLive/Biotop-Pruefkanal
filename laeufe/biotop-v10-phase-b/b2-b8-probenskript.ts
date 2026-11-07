// Probenführer: B-2 (Eichprobe mit Gegenprobe) und B-8 (Leerprobe) mit echter Kammer, echtem Siegel, echtem Prüfer.
// Kein Modellaufruf: Eichung und Schlussprüfung brauchen keinen.
import { chmod, chown } from 'node:fs/promises';
import { setTimeout as delay } from 'node:timers/promises';
import { DockerChamber } from '/srv/werkstatt/projekte/biotop-system/src/chamber/docker-chamber.ts';
import { ensureNetworks } from '/srv/werkstatt/projekte/biotop-system/src/chamber/networks.ts';
import { ChamberExaminer } from '/srv/werkstatt/projekte/biotop-system/src/examiner/examiner.ts';
import { createMeasurers } from '/srv/werkstatt/projekte/biotop-system/src/examiner/measure/index.ts';
import { run } from '/srv/werkstatt/projekte/biotop-system/src/infra/process.ts';
import { FileSealStore } from '/srv/werkstatt/projekte/biotop-system/src/seal/file-seal-store.ts';
import { commitWork } from '/srv/werkstatt/projekte/biotop-system/src/builder/work-commit.ts';

const REPO = '/srv/werkstatt/projekte/biotop-system';
const HARNESS = `${REPO}/src/examiner/harness`;
const stamp = new Date().toISOString().replace(/[-:.TZ]/g, '').slice(0, 14);
const work = `eichprobe-${stamp}`;
const head = "import { verhalten, werk } from '/pruefhilfe/werk.ts';\nimport assert from 'node:assert/strict';\n";
const suites = [
  { kind: 'card' as const, files: {
    'B1-start.test.mjs': `${head}verhalten('B1', 'Startseite antwortet mit 200', async () => {\n  const r = await werk.http('GET', '/');\n  assert.equal(r.status, 200);\n});\n`,
    'B1-immer.test.mjs': `${head}verhalten('B1', 'besteht immer', async () => {\n  assert.ok(true);\n});\n`,
  } },
  { kind: 'attack' as const, files: {
    'A-unbekannt.test.mjs': `${head}verhalten('A', 'unbekannter Pfad ohne Absturz', async () => {\n  const r = await werk.http('GET', '/gibt-es-nicht');\n  assert.ok(r.status < 500);\n});\n`,
  } },
  { kind: 'final' as const, files: {
    'B1-ohne.test.mjs': `${head}// Diese Datei enthält absichtlich keinen Test (Leerprobe B-8).\n`,
  } },
];
const plan = {
  title: 'Eichprobe', behaviors: [{ id: 'B1', text: 'Die Startseite antwortet mit Status 200.' }],
  contract: { kind: 'web' as const, install: 'npm install', start: 'npm start', port: 8080, cli: '', routes: ['/'], elements: [], text: 'Startseite unter /' },
  devices: ['Desktop'],
};
const card = { responseMs: 2000, usabilitySteps: 5, coreTasks: ['Startseite öffnen'], tempoProbe: '/' };
const own = async (path: string, user: 'werk' | 'pruefer') => {
  const r = await run('chown', ['-R', user === 'werk' ? '65534:65534' : '1004:1004', path]);
  if (r.code !== 0) throw new Error(r.stderr);
};
const models = { complete: () => Promise.reject(new Error('Modellaufruf in dieser Probe nicht vorgesehen.')) };

const chamber = new DockerChamber({ starter: run, worksRoot: '/srv/biotop/werke' });
await ensureNetworks(run, REPO);
const seal = new FileSealStore({ chown, chmod });
const workspace = await chamber.prepare(work);
await seal.write(work, card, suites);
const context = { work, workspace, plan, draft: { id: 'E1', title: 'Probe', summary: '', image: null }, isTrial: true, scope: { phase: 'B', work } };
const examiner = new ChamberExaminer({
  context, chamber, seal, starter: run, own, runRoot: '/srv/biotop/kammer', harnessDir: HARNESS,
  now: () => Date.now(), sleep: (ms, signal) => delay(ms, undefined, { signal }),
  measurers: createMeasurers({ harnessDir: HARNESS }), models, ids: () => `lauf-${String(Date.now())}`,
});
console.log(`Werk ${work} (Probewerk des Probenführers, ohne Modell)\n`);
console.log('## B-2 Eichprobe: Kartentests und Angriffstest am leeren Werk');
const cal = await examiner.calibrate(AbortSignal.timeout(600_000));
console.log(`Tests: ${String(cal.tests)} · am leeren Werk fehlgeschlagen: ${String(cal.failingOnEmpty)} · abgewiesen: ${JSON.stringify(cal.rejected)} · Rauschbreite ${cal.noiseMs.toFixed(1)} ms`);
const b2 = cal.rejected.length === 1 && cal.rejected[0] === 'B1 :: besteht immer' && cal.failingOnEmpty === 2;
console.log(`B-2 Gegenprobe (immer bestehender Test abgewiesen, echte Tests fallen am leeren Werk): ${b2 ? 'bestanden' : 'NICHT bestanden'}\n`);
console.log('## B-8 Leerprobe: Schlussprüfung mit einer Testdatei ohne Test');
await chamber.run({ image: 'werk', user: 'baumeister', network: 'none', workdir: '/werk', env: {},
  mounts: [{ source: workspace.repoDir, target: '/werk', readOnly: false }],
  command: ['sh', '-c', 'printf \'{"name":"p","scripts":{"start":"node s.js"}}\' > package.json && printf "require(\'http\').createServer((q,r)=>r.end(\'ok\')).listen(process.env.PORT)" > s.js'] }, AbortSignal.timeout(60_000));
const commit = await commitWork(chamber, workspace.repoDir, 'Probenführer: minimales Werk', AbortSignal.timeout(60_000));
const passed = await examiner.finalExam(commit, AbortSignal.timeout(600_000));
const marker = await run('cat', [`/srv/biotop/kammer/${work}/schlusspruefung.json`]);
console.log(`Schlussprüfung bestanden: ${String(passed)}\nMarke: ${marker.stdout.trim()}`);
const b8 = !passed && marker.stdout.includes('Prüfung ohne Gegenstand');
console.log(`B-8 Leerprobe (meldet „Prüfung ohne Gegenstand“ statt zu bestehen): ${b8 ? 'bestanden' : 'NICHT bestanden'}`);
await chamber.dispose(workspace);
process.exitCode = b2 && b8 ? 0 : 1;
