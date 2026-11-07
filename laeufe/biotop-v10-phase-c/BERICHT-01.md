# BERICHT-01 – Phase C „Weiterentwickeln“ (Zwischenbericht)

- Phase: C · Datum: 07.11.2026, 21:55 MEZ · Systemrepo-Stand: Commit `4140fee`
- Status: **Zwischenbericht.** Aufnahme, Bestandsaufnahme, Richtungen, Stufenplan, Bestandsschutz und Größen-Regler sind gebaut und nach den Regeln aus 3.5 geprüft. Die Probestufen brauchen Ü1 aus Phase B, also echte Läufe; diese warten auf **H1** und **H2**.

## Tor-Tafel

| Zeile | Soll | Ist | Beleg |
|---|---|---|---|
| C-1 | An der unveränderten Fassung bestehen alle Bestandstests; Gegenprobe: beschädigte Fassung fällt durch | gebaut: Eichung an der Vorfassung (Bestandstests müssen dort bestehen, Stufentests fallen), ein an der Vorfassung scheiternder Bestandstest wird abgewiesen (Unit-Test mit Gegenprobe). Echter Lauf offen (H1/H2) | – |
| C-2 | Eine Generation, die ein nicht ausdrücklich geändertes Verhalten bricht, bekommt Punkt 1 nicht; Gegenprobe | gebaut: Kartenpunkt 1 verlangt alle Bestandstests grün außer den Nummern in `changedLegacy`; Unit-Tests mit absichtlichem und erlaubtem Bruch. Echter Lauf offen | – |
| C-3 | Mindestens drei gereihte Richtungen mit Nutzen und Aufwand (Schätzung) | gebaut: Prüfung erzwingt 3–6 Richtungen in Rangfolge, Aufwand beginnt wörtlich mit „Schätzung:“. Echter Lauf offen (H1) | – |
| C-4 | Gemessene Änderungsgröße in der Grenze; Gegenprobe: Feinschliff mit erzwungenem Umbau abgewiesen | gebaut: Messung nach Entscheidung 0010 (geänderte Zeilen in % der Vorfassung, neue Module, geänderte Exporte, Vertragsänderungen) mit echtem git; Urteil `judgeStageSize`; Größenverstoß kostet Punkt 1 (Unit-Test). Echter Lauf offen | – |
| C-5 | Beide Probestufen enden mit Endzustand und vollständigem Stufenbericht | offen (H1/H2) | – |
| C-6 | Kasse Phase C ≤ 15 € | 0,00 € | – |

## Kasse
Phase C: 0,00 € von 15 €.

## Entscheidungsliste (Fortsetzung)
- **E21** Messung der Stufengröße nach Entscheidung 0010, festgelegt vor jeder Messung: geänderte Zeilen = hinzugefügte + entfernte Zeilen laut `git diff --numstat`, Bezugsgröße Zeilen der Vorfassung, ohne Tests und `node_modules`.
- **E22** Geänderte Verhaltensweisen behalten im Stufenplan ihre Nummer, neue zählen weiter; nur so ist „ausdrücklich geändert (mit Verhaltensnummer)“ maschinell prüfbar.
- **E23** Angriffstests werden beim Weiterentwickeln nicht an der Vorfassung geeicht: Sie prüfen die Robustheit des Ganzen, und die Vorfassung darf schon robust sein.
- **E24** Nach jeder Stufe wird der zusammengeführte Gesamtbauplan gespeichert, damit die nächste Stufe auf dem vollständigen bisherigen Verhalten aufsetzt.

## Halte
H1 und H2 offen (siehe Phase A und B).

## Geheimnisscan vor diesem Push (A-2, Abschnitt 8)
Scan des ganzen Prüfkanals mit Prüfkanal-Filter: 52 Dateien, 0 Befunde. Gegenprobe mit eingepflanzten Testschlüsseln in einer Kopie: 2 von 2 Dateien erkannt. Der pre-push-Hook wiederholt den Scan über Inhalt und Verlauf.
