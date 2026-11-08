# BERICHT-02 – Phase B „Der Kern“ (Zwischenbericht, Berichtigung und Nachtrag)

- Phase: B · Datum: 08.11.2026, 06:30 MEZ · Systemrepo-Stand: Commit `96388fc`
- Ersetzt nichts aus BERICHT-01; ergänzt und berichtigt ihn.

## Berichtigung zu B-12
BERICHT-01 nannte B-12 „erfüllt zum Stand `4140fee`“. Belegt war das durch den lokalen Commit-Hook (als root). Die CI war für `4140fee`, `8edcc10` und `fefcdd9` **rot**: Einige Tests setzten root voraus (echtes `chown`, git-Fremdbesitz) und scheiterten in der CI als normaler Benutzer. Ich habe die CI-Ergebnisse nach `4140fee` zu spät geprüft (Mangel M16).

Behebung: Die Tests sind benutzerunabhängig (`c432d37`, `3972106`); die ganze Testsuite lief zusätzlich als Benutzer `nobody` (2 252 von 2 252 grün). Die CI ist für `3972106` grün: alle 10 Regeln bestanden, 2 252 Tests, 14 158 Mutanten (`ci-gruen-3972106.log`). Der volle Mutationstest braucht in der CI 77 Minuten; die Laufzeitgrenze des CI-Jobs steht deshalb jetzt auf 300 statt 90 Minuten (`96388fc`; eine Betriebsgrenze, kein Qualitätsmaßstab).

## Tor-Tafel (nur geänderte Zeilen)

| Zeile | Soll | Ist | Beleg |
|---|---|---|---|
| B-12 | Alle Regeln aus 3.5 erfüllt, Mutationswert Kern ≥ 70 % | **erfüllt** im Hook (`c432d37`: 10 von 10, 2 252 Tests, 14 158 Mutanten) und in der CI (`3972106`: 10 von 10) | `ci-gruen-3972106.log` |

Alle übrigen Zeilen unverändert gegenüber BERICHT-01; die echten Probewerke warten weiter auf H1 und H2.

## Mängelliste
Alle 16 Einträge sind behoben, 0 offen (`maengelliste.md`). Neu seit BERICHT-01:
- M10: Code in committetem `node_modules` → Kartenpunkt 9 fällt (vorher ungemessen).
- M12: Liste der committeten Pfade steht in der Belegliste jedes Prüflaufs.
- M14: Prüfcontainer und Prüfnetze tragen das richtige Werk-Label, `dispose` räumt sie.
- M15: doppelte Konstanten zusammengeführt.
- M16: siehe Berichtigung oben.

## Vorbereitet für die echten Läufe
Probedateien: `proben/ue1-terminbuch.json`, `ue2-csv-bereiniger.json`, `ue3-einkaufsliste.json` (mit Prototyp-ZIP), `grenzprobe-widerspruch.json` und `grenzprobe-gegenprobe.json` (B-5); für Phase C `ue1-stufe-ausbau.json` und `ue1-stufe-feinschliff.json`.

## Kasse
Phase B: 0,00 € von 30 €.

## Geheimnisscan vor diesem Push (A-2, Abschnitt 8)
Scan des ganzen Prüfkanals mit Prüfkanal-Filter: 163 Dateien, 0 Befunde. Gegenprobe mit eingepflanzten Testschlüsseln in einer Kopie: 2 von 2 Dateien erkannt.
