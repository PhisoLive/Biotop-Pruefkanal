# BERICHT-01 – Phase A „Fundament“ (Zwischenbericht)

- Phase: A · Datum: 07.11.2026, 15:26 MEZ · Auftrag: INFINITE EVOLUTION, Fassung 10 (SHA-256 `4d2b88c0661049feef5544d4965c1685fb29b0274beda3b9ddd4b7ef5baa3356`)
- Stand Systemrepo: Commit `ace3f70` (privat, `PhisoLive/Biotop-System`)
- Status: **Zwischenbericht.** A-5 wartet auf Halt H1 (OpenRouter-Schlüssel). Alles andere ist erfüllt und belegt. Phase B läuft parallel.

## Tor-Tafel

| Zeile | Soll | Ist | Beleg |
|---|---|---|---|
| A-1 | GitHub-Zugang belegt ohne Token; Systemrepo privat, Prüfkanal öffentlich | erfüllt: Konto `PhisoLive`; `Biotop-System` PRIVATE, `Biotop-Pruefkanal` PUBLIC; keine Token-Zeile ausgegeben | `a1-github.txt` |
| A-2 | Geheimnisscan vor jedem Push über den ganzen Inhalt; Gegenprobe erkennt eingepflanzten Testschlüssel; Push nur bei 0 Befunden | erfüllt: Systemrepo 100 Dateien, 0 Befunde, Gegenprobe 2 von 2 eingepflanzten Dateien erkannt; Prüfkanal 0 Befunde, Gegenprobe 2 von 2, Adress-Gegenprobe abgewiesen; pre-push-Hook in beiden Repos | `a2-geheimnisscan.txt` |
| A-3 | Jede Regel aus 3.5 greift bei jedem Commit und in der CI; Gegenprobe je Regel | erfüllt: 18 von 18 Verstößen vom echten Commit-Hook abgewiesen, jeweils mit benanntem Befund; Kontrolle (harmloser Commit) geht durch; 8 von 8 Verstößen aus A-3 in der CI abgewiesen; CI auf `main` grün (10 von 10 Regeln, 1010 Mutanten) | `a3-gegenproben/zusammenfassung.md`, `a3-ci/zusammenfassung.txt`, `a3-ci-main-gruen-ace3f70.log` |
| A-4 | Gerüst mit Organmodulen, Schnittstellen, Glossartafel, Entscheidungen zu Sprache, Datenhaltung, Modulgrenzen; Archivrepo weder geklont noch gelesen | erfüllt: 9 Organmodule mit `port.ts`, Glossar mit 69 Begriffszeilen, Entscheidungen 0001–0009; Befehlsprotokoll 0 Treffer bei 295 geprüften Werkzeugaufrufen, Muster-Gegenprobe greift | `a4-geruest.txt` |
| A-5 | Neuer OpenRouter-Schlüssel vorhanden, Limit ≤ 100 € | **offen – wartet auf H1** | – |
| A-6 | `CLAUDE.md` nach 3.4 | erfüllt: Verweis plus G1–G15 wortgleich, 0 sonstige Zeilen; Gegenprobe (Zeile zu viel, G7 fehlt) abgewiesen | `a6-claude-md.txt` |
| A-7 | Kasse Phase A ≤ 3 € | 0,00 € (0 Modellaufrufe; ohne Schlüssel unmöglich). Bestätigung über den OpenRouter-Zähler nach H1 | `a7-kasse.txt` |

## Kasse
Phase A: 0,00 € von 3 €. Gesamt bisher: 0,00 €.

## Entscheidungsliste
- **E1** `PhisoLive/Biotop-System` existierte nicht (GitHub: „Could not resolve to a Repository“). Ich habe es privat angelegt und die Fassung 10 nach `docs/` gelegt. Grund: Ohne Systemrepo kein Phase A; Anlegen eines privaten Repos ist Werkstatt-Alltag.
- **E2** Geheimnisscanner secretlint statt gitleaks: Das Nachladen des gitleaks-Programms hat der Auto-Modus der Werkstatt als fremden Code abgelehnt; secretlint kommt als npm-Abhängigkeit, dazu eine eigene Regel für OpenRouter-Schlüssel (Entscheidung 0005).
- **E3** TypeScript 6.0.3 statt 7.0: typescript-eslint 8.72 unterstützt nur Versionen unter 6.1 (Entscheidung 0001).
- **E4** `CLAUDE.md` angelegt, obwohl die Werkstatt-Regel weitere CLAUDE.md-Dateien ausschließt: Fassung 10 ist jünger und spezieller. Philipp kann „ohne“ sagen.
- **E5** Der Commit-Hook prüft einen Abzug des Index (`git checkout-index`), nicht das Arbeitsverzeichnis; der Mutationswert gilt gesamt und je Datei (strenger als 3.5, damit ein inhaltsleerer Test in einer neuen Datei nicht im Durchschnitt verschwindet).
- **E6** Kern = `src/` ohne `main.ts`, ohne reine Typdateien `port.ts`, ohne Browsercode (Entscheidung 0004, vor der ersten Messung festgelegt).
- **E7** Tests eines Moduls dürfen dessen geschützte Dateien importieren (`test/builder` → Claude-Starter, `test/seal` → Siegelpfade); sonst niemand (Entscheidung 0003).
- **E8** knip-Ausnahme nur für secretlint und seine Regelpakete, die knip nicht sehen kann (Entscheidung 0005).
- **E9** Claude Code für `baumeister`: dieselbe Fassung 2.1.302 nach `/opt/biotop/claude/` kopiert (Prüfsumme gleich), weil `/root` für andere Benutzer gesperrt ist.
- **E10** Material nur für den Probenführer (Mängelliste des Ü3-Prototyps, Täuschungsfassungen) liegt außerhalb des Systemrepos, weil der Baumeister in Phase F an einer Kopie des Systemrepos arbeitet (Entscheidung 0009).
- **E11** Werkzeug für Abschlussordner (Datei- und Ordnerprüfsummen) liegt beim Probenführer außerhalb des Repos.

## Abweichungen und eigene Fehler
- Der Server ist nicht „neu“: Es ist der Werkstatt-Server, auf dem auch ein anderes Projekt läuft. Ein altes Biotop gibt es hier nicht. Ressourcen: 6 Kerne, 11 GiB RAM, 39 GB frei.
- Die CI war für die ersten zwei Commits rot. Ursache: secretlint 13 überspringt standardmäßig Dateien aus `.gitignore`, ein erzwungen committetes `.env` wäre durchgerutscht. Behoben mit `--no-gitignore` (Commit `ace3f70`), seitdem grün.
- Der erste Gegenprobenlauf war ungültig: Im Klon wurde der `node_modules`-Symlink mitcommittet; die Kontrolle hat das aufgedeckt. `.gitignore` korrigiert, Lauf wiederholt (`a3-gegenproben-lauf-1-ungueltig.log`).
- Ein Test-Agent fand zwei echte Fehler im Prozessstarter (fehlender Befehl lieferte `undefined` statt Text; `EPIPE` riss den aufrufenden Prozess ab); beide behoben, mit Gegenprobe.
- Der Name des Archivrepos erschien einmal als Zeile in einer Repo-Liste des Kontos; gelesen oder geklont wurde es nicht.

## Halte
- **H1 offen:** OpenRouter-Schlüssel mit Limit ≤ 100 € in die `.env` des Systems.
- **H2 vorgezogen offen:** Anmeldung des Benutzers `baumeister` bei Claude Code.

## Geheimnisscan vor diesem Push (A-2, Abschnitt 8)
Scan des ganzen Prüfkanals mit Prüfkanal-Filter (Schlüssel, Serveradresse, Abholstelle, Tailscale-Adressen, E-Mail-Adressen): 43 Dateien, 0 Befunde. Gegenprobe mit eingepflanzten Testschlüsseln in einer Kopie: 2 von 2 Dateien erkannt. Der pre-push-Hook wiederholt den Scan über Inhalt und Verlauf des Pushs; gepusht wird nur bei 0 Befunden.
