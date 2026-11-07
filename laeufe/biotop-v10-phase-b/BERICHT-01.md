# BERICHT-01 – Phase B „Der Kern“ (Zwischenbericht)

- Phase: B · Datum: 07.11.2026, 21:50 MEZ · Systemrepo-Stand: Commit `4140fee` (Phase B gebaut in `fbe19ee`, Befund-Behebung `faf3282`)
- Status: **Zwischenbericht.** Alle Organe sind gebaut, geprüft (Hook 10 von 10) und mit echter Kammer erprobt, soweit das ohne Modell- und Baumeisterläufe geht. Die Probewerke Ü1–Ü3 und alle Proben, die echte Läufe brauchen, warten auf die Halte **H1** (OpenRouter-Schlüssel) und **H2** (Anmeldung des Benutzers `baumeister`).

## Tor-Tafel

| Zeile | Soll | Ist | Beleg |
|---|---|---|---|
| B-1 | Leseversuch als `baumeister` auf das Siegel verweigert; Siegel-Prüfsumme bei Versiegelung = am Werkende, für alle drei Probewerke | teilweise: Leseverweigerung echt belegt (`ls`/`cat` als `baumeister` → „Permission denied“, als `pruefer` lesbar; Siegelordner `pruefer:pruefer 700`, Dateien 600). Prüfsummenvergleich je Probewerk offen (wartet auf H1/H2) | `b1-siegelprobe-eichprobe.txt` |
| B-2 | Alle Kartentests schlagen am leeren Werk fehl; Gegenprobe: immer bestehender Test wird abgewiesen | Gegenprobe echt bestanden (Kammer, Siegel, Prüfer echt): 3 Tests, 2 fielen am leeren Werk, abgewiesen genau „B1 :: besteht immer“. Für Ü1–Ü3 offen (H1/H2) | `b2-b8-lauf-2.log`, `b2-b8-probenskript.ts` |
| B-3 | Eingebauter Fehler kostet ≥ 1 Kartenpunkt; Gegenprobe | offen (H1/H2) | – |
| B-4 | Drei Täuschungsfassungen → überangepasst, kein 10/10; ehrliche Fassung besteht | offen (H1/H2) | – |
| B-5 | Widersprüchliche Anforderung → „Ehrliche Grenze“ nach ≤ 3 Generationen ohne neuen Punkt; Gegenprobe | offen (H1/H2); Probedateien liegen bereit (`proben/grenzprobe-*.json`) | – |
| B-6 | 0,05 €-Werk bricht vor dem überschreitenden Aufruf ab; Verbrauch vorher/nachher aus Kasse und OpenRouter | offen (H1). Mechanik getestet: Rücklage vor dem Senden; Gegenprobe (Rücklage hinter den Aufruf verschoben) macht 3 Tests rot | – |
| B-7 | 2-Minuten-Werk endet ≤ 1 min nach Ablauf mit „Zeit abgelaufen“ | offen (H1). Abbruch der Kammer echt belegt (Kammerprobe f: Container per `docker kill` beendet, nichts bleibt liegen) | `b-kammerprobe.txt` |
| B-8 | Prüfung ohne Tests meldet „Prüfung ohne Gegenstand“ | **bestanden** im 2. echten Lauf. Lauf 1 deckte einen Mangel auf (Node zählt eine Testdatei ohne Test als bestanden); behoben in `faf3282` mit Gegenprobe | `b2-b8-lauf-1-mangel-gefunden.log`, `b2-b8-lauf-2.log` |
| B-9 | Ü1–Ü3 je mit Endzustand und vollständigem Werkbericht | offen (H1/H2) | – |
| B-10 | Mängelberichte ohne Testnamen, Testcode, Erwartungswerte (Skript über alle Berichte); Gegenprobe | Skript `scripts/mangelbericht-pruefen.ts` gebaut und an Wegwerfdaten erprobt (sauber: 0 Funde; Leck: 2 Funde; Gegenprobe greift). Echte Berichte fehlen noch (H1/H2) | – |
| B-11 | Grundlinie „Claude Code allein“ für Ü1; A/B-Zuordnung vor Anzeige versiegelt; gleiche Karte | offen (H2); Grundlinie gebaut (`src/builder/control-build.ts`) | – |
| B-12 | Alle Regeln aus 3.5 erfüllt, Mutationswert Kern ≥ 70 % | **erfüllt** zum Stand `4140fee`: 10 von 10 Regeln, 1 632 Tests, Abdeckung 99,94 % Zeilen / 99,42 % Zweige, 9 169 Mutanten, Mutationswert 99,01 % (gesamt und je Datei ≥ 70 %) | `pruefbericht-4140fee.md` |
| B-13 | Kasse Phase B ≤ 30 € | 0,00 € (kein Modellaufruf ohne Schlüssel) | – |

## Was gebaut ist (Systemcode, privat)
Datenhaltung (SQLite), Kasse mit Buchführung und Rücklage vor jedem Modellaufruf, Modellzugang über OpenRouter mit Modellstufen und Herstellergebot, Kammer (Docker, interne Netze, Erlaubnis-Proxys; Kammerprobe 17 von 17 bestanden), Siegel (Benutzer `pruefer`, 700/600), Siegelmeister, Ankläger, Gedächtnis, Baumeister (Claude Code als `baumeister` in der Kammer) mit Grundlinie und Prototyp-Einspielung, Prüfer (von außen, Eichung, Schlussprüfung genau einmal, Messgeräte für die Kartenpunkte 4–9 mit Schutz gegen werkeigene Ignore-Dateien und Inline-Abschaltungen), Denker (Rückfragen, gerenderte Entwürfe, Bauplan und Karte), Kern-Ablauf mit Werkbericht.

## Kasse
Phase B: 0,00 € von 30 €.

## Entscheidungsliste (Fortsetzung von Phase A)
- **E12** Kammer als Docker mit internen Netzen und eigenem Erlaubnis-Proxy; der Baumeister braucht zusätzlich die Claude-Code-Endpunkte (Entscheidung 0006).
- **E13** Prüfung von außen mit Schnittstellenvertrag im Bauplan; Tests als `node:test`-Dateien mit fester Prüfhilfe; Werk und Prüfer in getrennten Containern (Entscheidung 0007).
- **E14** Die Versiegelung schließt mit der Eichung ab; erst danach zählt die Prüfsumme (Entscheidung 0008).
- **E15** Probenführer-Material liegt außerhalb des Systemrepos (Entscheidung 0009).
- **E16** Mutationswert gilt je Datei (strenger als 3.5).
- **E17** Mängelbericht-Prüfung (B-10): Bruchstücke, die wörtlich im Bauplan stehen, sind ausgenommen – den Bauplan kennt der Baumeister ohnehin.
- **E18** Ü3: Der Prototyp wird nach der Eichung am leeren Werk als eigener Commit eingespielt.
- **E19** Modellvoreinstellungen nach Leistung und Preis aus dem OpenRouter-Katalog vom 07.11.2026 (Stark: Denker `anthropic/claude-sonnet-5.5`, Siegelmeister `openai/gpt-6.1-terra`, Ankläger `google/gemini-4-argon`, Prüfagent `openai/gpt-6-luna`; Baumeister `opus` mit Aufwand `high`); Siegelmeister und Ankläger nie von Anthropic (Herstellergebot).
- **E20** Web Push in Phase D ohne Fremdpaket (`web-push` 4.0 ohne passende Typen); eigene Umsetzung gegen den Testvektor aus RFC 8291.

## Abweichungen und eigene Fehler
- Mängelliste mit 15 Einträgen, davon 12 behoben (`maengelliste.md`). Offen: M10 (Code in committetem `node_modules` ungemessen), M14 (Aufräum-Label für aufgenommene Stufenwerke), M15 (zwei doppelte Konstanten).
- Die Leerprobe B-8 fiel im ersten echten Lauf durch: Ein Fehler im Prüfer hätte eine Schlussprüfung ohne Gegenstand bestehen lassen. Die Probe hat ihn gefunden; behoben mit Gegenprobe.

## Halte
- **H1 offen:** OpenRouter-Schlüssel (Limit ≤ 100 €) in `/srv/biotop/.env`.
- **H2 offen:** Anmeldung des Benutzers `baumeister` (Anmeldelink in der ersten Nachricht).

## Geheimnisscan vor diesem Push (A-2, Abschnitt 8)
Scan des ganzen Prüfkanals mit Prüfkanal-Filter: 52 Dateien, 0 Befunde. Gegenprobe mit eingepflanzten Testschlüsseln in einer Kopie: 2 von 2 Dateien erkannt. Der pre-push-Hook wiederholt den Scan über Inhalt und Verlauf.
