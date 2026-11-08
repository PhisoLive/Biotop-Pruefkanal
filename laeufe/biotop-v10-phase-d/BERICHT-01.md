# BERICHT-01 – Phase D „Das Cockpit“ (Zwischenbericht)

- Phase: D · Datum: 08.11.2026, 04:30 MEZ · Systemrepo-Stand: Commit `fefcdd9`
- Status: **Zwischenbericht.** Das Cockpit ist gebaut (Server, Oberfläche, Werkbank, Push) und am lokalen Testserver mit Probedaten belegt. Was Tailscale, den Denker oder Philipp braucht, wartet auf die Halte **H3**, **H1** (für H5) und auf Philipps Durchgang (D-10).

## Tor-Tafel

| Zeile | Soll | Ist | Beleg |
|---|---|---|---|
| D-1 | Philipp wählt einen von drei Cockpit-Entwürfen (H5); gebaut ist der gewählte | offen: Die drei Entwürfe erzeugt der Denker, er braucht den OpenRouter-Schlüssel (H1). Bis zur Wahl gilt ein neutrales Grundaussehen mit CSS-Variablen für das Thema | `bilder/820x1180/03-start.png` (Grundaussehen) |
| D-2 | Lauscht nur auf der Tailscale-Adresse; öffentliche Adresse scheitert; ohne Anmeldung jede Route 401/303 | teilweise: Routenschutz über die ganze Routentafel lokal belegt (40 Routen, 44 Aufrufe ohne Anmeldung, 0 Befunde; Gegenprobe mit falsch markierter Route erkannt). Bindung an die Tailscale-Adresse und Portprobe warten auf H3 | `d2-routenschutz-lokal.md` |
| D-3 | Browser-Tests in zwei Tablet-Größen und einer Handy-Größe für alle Abläufe, Bildschirmfoto je Schritt | **bestanden** am Testserver mit Probedaten: 87 von 87 Schritten (820×1180, 1180×820, 390×844 × 29 Schritte), 0 Konsolenfehler, 0 waagrechter Bildlauf; Gegenprobe mit eingebauten Fehlern: 29 von 29 Schritten rot | `d3-d5-d7-ablaeufe.md`, `d3-ablaeufe.log`, `bilder/`, `gegenprobe/` |
| D-4 | Jeder Regler wirkt, je mit Gegenprobe | teilweise: Regler setzen nachweislich die Werkparameter (D-3, Schritt „Repo-Link einwerfen“: gezogene Stellungen stehen am Werk); Zeitgrenze, Modellprotokoll, Kassenabbruch und Tempo-Wirkung brauchen echte Läufe (H1/H2) | `d3-ablaeufe.log` |
| D-5 | Vor jedem Start Schätzung, nach jedem Lauf Ist daneben | **bestanden** am Testserver: 30 Anzeigen „Schätzung“ vor dem Start, Ist neben der Schätzung in allen 3 Größen | `d3-d5-d7-ablaeufe.md` |
| D-6 | Jedes Bedienelement mit belegter Wirkung, ein Test je Element; Gegenprobe mit Attrappenknopf | **bestanden**: 367 Bedienelemente auf 20 Bildschirmen, 0 ohne Kennung, 0 ohne Wirkung; Gegenprobe: 3 von 3 Attrappen erkannt | `d6-wirkung.md`, `d6-wirkung.log`, `d6-wirkung-gegenprobe.log` |
| D-7 | 0 schwere Verstöße in der Zugänglichkeitsprüfung; Regler zeigen Zahl und Wort | **bestanden**: 87 Bildschirmzustände, 2 796 Regelprüfungen, 0 serious/critical; 75 Reglerprüfungen mit Zahl und Wort | `d3-d5-d7-ablaeufe.md` |
| D-8 | Jeder Evolutionsbegriff mit Klartextsatz, per Skript gelistet, 0 ohne | **bestanden**: 36 Begriffe, 0 ohne Satz; Gegenprobe erkannt | `d8-klartext.log` |
| D-9 | Jeder Halt erreicht das Tablet als Push-Meldung (Zustellprotokoll); ohne Halt keine Meldung | offen (H3: installierte App und Abo nötig). Gebaut: Web Push nach RFC 8291/8292, geprüft am Testvektor aus RFC 8291; Unit-Gegenprobe „ohne Halt kein Protokolleintrag“ | – |
| D-10 | Philipps Durchgang je Modus | offen (Philipp) | – |
| D-11 | Kasse Phase D ≤ 5 € | 0,00 € | – |

## Befunde der Belegläufe (behoben, mit Gegenprobe)
1. „Ergebnis öffnen“ legte das tar.gz als Offline-Startseite in den Speicher des Service Workers.
2. Die Werkseite zeigte bei offener blinder Wahl schon Kartenergebnisse (Verstoß gegen E-3).
3. Die Modell-Feineinstellung je Organ war in der Oberfläche nicht anlegbar.
4. Auf dem Handy stand das Ist unter statt neben der Schätzung.
5. Die Werkbank zeigte gesperrte Knöpfe ohne Wirkung (G10).

Lauf 1 von D-3 lief vor Befund 5; Lauf 2 nach allen Korrekturen bestand ebenfalls 87 von 87 (`d3-ablaeufe-lauf1.log` und `d3-d5-d7-ablaeufe-lauf1.md` bleiben als Beleg; die Fotos von Lauf 1 sind nicht im Prüfkanal).

## Kasse
Phase D: 0,00 € von 5 €.

## Entscheidungsliste (Fortsetzung)
- **E25** Zwei Dienste: Cockpit als eigener Benutzer `biotop-cockpit` (nur HTTPS an der Tailscale-Adresse), Werkbank als root (braucht Docker und Benutzerwechsel).
- **E26** Oberfläche zeichnet clientseitig aus JSON-Schnittstellen; der Server liefert TypeScript mit entfernten Typen aus, ohne Bauschritt.
- **E27** Erste Anmeldung über einen einmaligen Einrichtungscode statt eines Passworts im Chat.
- **E28** Web Push ohne Fremdpaket, gegen RFC-Testvektor geprüft.
- **E29** Echte Werke aus dem Cockpit buchen in Phase E: kein Phasendeckel, aber höchstens 10 € und 6 Stunden je Lauf (Abschnitt 6).
- **E30** Die Siegelpfad-Regel des Linters wurde an den Wortlaut von Entscheidung 0003 angeglichen: verboten sind Pfad-Literale mit „siegel/“ oder Endung „/siegel“, nicht das Wort „Siegel“. Gegenprobe im Beleg; ein eigener Escaping-Fehler beim ersten Versuch wurde von der Gegenprobe aufgedeckt.

## Halte
- **H1 offen** (Schlüssel) – nötig für die Cockpit-Entwürfe (H5) und alle echten Läufe.
- **H3 offen** (Tailscale) – nötig für D-2 (Adresse), D-9 und den Betrieb.
- **H5** folgt nach H1; **D-10** nach H3.

## Geheimnisscan vor diesem Push (A-2, Abschnitt 8)
Scan des ganzen Prüfkanals mit Prüfkanal-Filter: 158 Dateien, 0 Befunde. Gegenprobe mit eingepflanzten Testschlüsseln in einer Kopie: 2 von 2 Dateien erkannt. Der pre-push-Hook wiederholt den Scan über Inhalt und Verlauf.
