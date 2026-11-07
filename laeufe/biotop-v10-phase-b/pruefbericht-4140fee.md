| Prüfung | Ergebnis | Gegenstand | Dauer | Regel |
|---|---|---|---|---|
| typen | BESTANDEN | 286 | 15.3 s | Typprüfung ohne Fehler |
| lint | BESTANDEN | 289 | 40.5 s | Linter: 0 Fehler, 0 Warnungen (any, Länge, Parameter, Komplexität, Architektur-Literale) |
| format | BESTANDEN | 286 | 17 s | Formatierer: 0 Abweichungen |
| doppelungen | BESTANDEN | 35018 | 0.6 s | Doppelungen höchstens 2 % |
| architektur | BESTANDEN | 303 | 3.7 s | 0 Zyklen, Modulgrenzen |
| ungenutzt | BESTANDEN | 286 | 3.2 s | 0 ungenutzte Dateien, Exporte, Abhängigkeiten |
| tests | BESTANDEN | 1632 | 37.9 s | Tests grün; Kern ≥ 90 % Zeilen, ≥ 85 % Zweige |
| mutation | BESTANDEN | 9169 | 740.9 s | Kern: Mutationswert ≥ 70 % |
| audit | BESTANDEN | 510 | 5.1 s | 0 hohe oder kritische Sicherheitsbefunde |
| geheimnisse | BESTANDEN | 286 | 0.8 s | 0 Geheimnisse im Inhalt |

### typen – bestanden
286 Dateien, 0 Typfehler


### lint – bestanden
289 Dateien, 0 Fehler, 0 Warnungen


### format – bestanden
Checking formatting...
All matched files use Prettier code style!

### doppelungen – bestanden
35018 Zeilen, Doppelungen 0 %, 0 Klone
[90mNo duplicates found.[39m
[90m┌────────────┬────────────────┬─────────────┬──────────────┬──────────────┬──────────────────┬───────────────────┐[39m
[90m│[39m[31m Format     [39m[90m│[39m[31m Files analyzed [39m[90m│[39m[31m Total lines [39m[90m│[39m[31m Total tokens [39m[90m│[39m[31m Clones found [39m[90m│[39m[31m Duplicated lines [39m[90m│[39m[31m Duplicated tokens [39m[90m│[39m
[90m├────────────┼────────────────┼─────────────┼──────────────┼──────────────┼──────────────────┼───────────────────┤[39m
[90m│[39m javascript [90m│[39m 1              [90m│[39m 53          [90m│[39m 234          [90m│[39m 0            [90m│[39m 0 (0.00%)        [90m│[39m 0 (0.00%)         [90m│[39m
[90m├────────────┼────────────────┼─────────────┼──────────────┼──────────────┼──────────────────┼───────────────────┤[39m
[90m│[39m typescript [90m│[39m 281            [90m│[39m 34965       [90m│[39m 265578       [90m│[39m 0            [90m│[39m 0 (0.00%)        [90m│[39m 0 (0.00%)         [90m│[39m
[90m├────────────┼────────────────┼─────────────┼──────────────┼──────────────┼──────────────────┼───────────────────┤[39m
[90m│[39m [1mTotal:[22m     [90m│[39m 282            [90m│[39m 35018       [90m│[39m 265812       [90m│[39m 0            [90m│[39m 0 (0.00%)        [90m│[39m 0 (0.00%)         [90m│[39m
[90m└────────────┴────────────────┴─────────────┴──────────────┴──────────────┴──────────────────┴───────────────────┘[39m
[90mFound 0 clones.[39m
[32mJSON report saved to reports/jscpd/jscpd-report.json[39m
[90mtime: 265.625ms[39m

### architektur – bestanden
303 Module, 0 Verstöße


### ungenutzt – bestanden


### tests – bestanden
1632 Tests, 0 fehlgeschlagen; Abdeckung Zeilen 99.94 %, Zweige 99.42 %
 ✓ test/examiner/contract-diff.test.ts (12 tests) 34ms
 ✓ test/examiner/calibration.test.ts (9 tests) 19ms
 ✓ test/infra/env.test.ts (7 tests) 12ms
 ✓ test/examiner/harness/bedien-aktion.test.ts (14 tests) 17ms
 ✓ test/builder/prompt.test.ts (8 tests) 16ms
 ✓ test/infra/places.test.ts (1 test) 10ms
 ✓ test/compose/makers.test.ts (4 tests) 22ms

 Test Files  122 passed (122)
      Tests  1632 passed (1632)
   Start at  20:25:22
   Duration  35.57s (tests 44%, transform 26%, import 19%, worker 10%)

    Isolate  122 workers spawned · ~429ms startup each (spawn + environment, per file)
             at least ~10.04s faster with isolate: false — reuses workers across files instead of one per file

JSON report written to /tmp/biotop-pruefen-wO57AB/reports/vitest.json
[34m % [39m[2mCoverage report from [22m[33mv8[39m

=============================== Coverage summary ===============================
Statements   : 99.82% ( 4087/4094 )
Branches     : 99.42% ( 1891/1902 )
Functions    : 99.6% ( 1248/1253 )
Lines        : 99.94% ( 3602/3604 )
================================================================================

### mutation – bestanden
9169 Mutanten, Mutationswert 99.01 % (Grenze 70 % gesamt und je Datei)


### audit – bestanden
510 Abhängigkeiten, hoch 0, kritisch 0

### geheimnisse – bestanden

