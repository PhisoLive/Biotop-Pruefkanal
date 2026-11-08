# D-3, D-5, D-7 – Gegenprobe (eingebaute Fehler müssen scheitern)

- Stand: 2026-11-08T01:11:30.397Z (Beginn 2026-11-08T01:08:21.216Z)
- Befehl: `node scripts/cockpit-ablaeufe.ts --gegenprobe --groesse=390x844`
- Browser: Chromium 156.0.8078.4 über Playwright 1.64.0, deviceScaleFactor 2, isMobile und hasTouch; axe-core 4.14.0
- Server: Testbetrieb auf 127.0.0.1, Port 0; Wegwerf-Datenbank mit den echten Migrationen in einem mkdtemp-Ordner, je Größe neu; Probedaten über die Repositories (scripts/cockpit-probedaten.ts)

## Ergebnis

| Prüfung | Gegenstand | Fehlschläge |
| --- | --- | --- |
| D-3 Schritte | 29 von 29 (1 Größen × 29) | 29 |
| Belege der Schritte | 108 | – |
| Konsolen- und Seitenfehler | 29 Schritte | 29 |
| Waagrechter Bildlauf | 29 Schritte | 29 |
| D-7 axe-core serious/critical | 29 Bildschirmzustände, 1041 Regelprüfungen, 11482 Knoten | 29 |
| D-7 Regler: aria-valuetext mit Zahl und Wort | 35 Reglerprüfungen | 35 |
| D-5 Schätzung vor dem Start gekennzeichnet | 6 Anzeigen | 0 |
| D-5 Ist neben der Schätzung (beendetes Werk) | 1 Größen | 1 |
| Bildschirmfotos | 29 | 0 |

**Gesamt: NICHT BESTANDEN**

## D-3: Größe × Schritt × Ergebnis

| Größe | Nr | Schritt | Bildschirm | Ergebnis | Belege | Konsolenfehler | Bildlauf px | axe s/c | Bild |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Handy | 01 | einrichten | Einrichten | NICHT bestanden | 2 | 1 | 2610 | 0/1 | `bilder/390x844/01-einrichten.png` |
| Handy | 02 | anmelden | Anmelden | NICHT bestanden | 3 | 1 | 2610 | 0/1 | `bilder/390x844/02-anmelden.png` |
| Handy | 03 | start | Start | NICHT bestanden | 9 | 1 | 2610 | 0/1 | `bilder/390x844/03-start.png` |
| Handy | 04 | modus-weiterentwickeln | Start (Weiterentwickeln) | NICHT bestanden | 6 | 1 | 2610 | 0/1 | `bilder/390x844/04-modus-weiterentwickeln.png` |
| Handy | 05 | regler-tastatur | Start (Weiterentwickeln) | NICHT bestanden | 0 | 1 | 2610 | 0/1 | `bilder/390x844/05-regler-tastatur.png` |
| Handy | 06 | regler-ziehen | Start (Weiterentwickeln) | NICHT bestanden | 10 | 1 | 2610 | 0/1 | `bilder/390x844/06-regler-ziehen.png` |
| Handy | 07 | repo-link-einwerfen | Werk (wartet, Weiterentwickeln) | NICHT bestanden | 0 | 1 | 2610 | 0/1 | `bilder/390x844/07-repo-link-einwerfen.png` |
| Handy | 08 | modus-zu-ende | Start | NICHT bestanden | 7 | 1 | 2610 | 0/1 | `bilder/390x844/08-modus-zu-ende.png` |
| Handy | 09 | idee-einwerfen | Werk (wartet) | NICHT bestanden | 0 | 1 | 2610 | 0/1 | `bilder/390x844/09-idee-einwerfen.png` |
| Handy | 10 | prototyp-zip-einwerfen | Werk (wartet, ZIP) | NICHT bestanden | 10 | 1 | 2610 | 0/1 | `bilder/390x844/10-prototyp-zip-einwerfen.png` |
| Handy | 11 | werkbank | Werkbank | NICHT bestanden | 0 | 1 | 2610 | 0/1 | `bilder/390x844/11-werkbank.png` |
| Handy | 12 | rueckfragen-antippen | Werk: Rückfragen | NICHT bestanden | 10 | 1 | 2610 | 0/1 | `bilder/390x844/12-rueckfragen-antippen.png` |
| Handy | 13 | rueckfragen-senden | Werk: Rückfragen beantwortet | NICHT bestanden | 0 | 1 | 2610 | 0/1 | `bilder/390x844/13-rueckfragen-senden.png` |
| Handy | 14 | entwuerfe-ansehen | Werk: Entwurfswahl | NICHT bestanden | 4 | 1 | 2610 | 0/1 | `bilder/390x844/14-entwuerfe-ansehen.png` |
| Handy | 15 | entwurf-waehlen | Werk: Entwurf gewählt | NICHT bestanden | 1 | 1 | 2610 | 0/1 | `bilder/390x844/15-entwurf-waehlen.png` |
| Handy | 16 | richtungen-ansehen | Werk: Richtungswahl | NICHT bestanden | 2 | 1 | 2610 | 0/1 | `bilder/390x844/16-richtungen-ansehen.png` |
| Handy | 17 | richtung-waehlen | Werk: Richtung gewählt | NICHT bestanden | 0 | 1 | 2610 | 0/1 | `bilder/390x844/17-richtung-waehlen.png` |
| Handy | 18 | generationen-zeitleiste | Werk: beendet | NICHT bestanden | 4 | 1 | 2610 | 0/1 | `bilder/390x844/18-generationen-zeitleiste.png` |
| Handy | 19 | karte-zehn-kacheln | Werk: beendet | NICHT bestanden | 4 | 1 | 2610 | 0/1 | `bilder/390x844/19-karte-zehn-kacheln.png` |
| Handy | 20 | schaetzung-und-ist | Werk: beendet | NICHT bestanden | 5 | 1 | 2610 | 0/1 | `bilder/390x844/20-schaetzung-und-ist.png` |
| Handy | 21 | ergebnis-oeffnen | Werk: beendet | NICHT bestanden | 2 | 1 | 2610 | 0/1 | `bilder/390x844/21-ergebnis-oeffnen.png` |
| Handy | 22 | blinde-wahl-vorher | Blinde Wahl (offen) | NICHT bestanden | 8 | 1 | 2610 | 0/1 | `bilder/390x844/22-blinde-wahl-vorher.png` |
| Handy | 23 | blinde-wahl-nachher | Blinde Wahl (getroffen) | NICHT bestanden | 1 | 1 | 2610 | 0/1 | `bilder/390x844/23-blinde-wahl-nachher.png` |
| Handy | 24 | gedaechtnis | Gedächtnis | NICHT bestanden | 3 | 1 | 2610 | 0/1 | `bilder/390x844/24-gedaechtnis.png` |
| Handy | 25 | pruefstand | Prüfstand | NICHT bestanden | 2 | 1 | 2610 | 0/1 | `bilder/390x844/25-pruefstand.png` |
| Handy | 26 | werk-null | Werk Null | NICHT bestanden | 3 | 1 | 2610 | 0/1 | `bilder/390x844/26-werk-null.png` |
| Handy | 27 | kasse | Kasse | NICHT bestanden | 3 | 1 | 2610 | 0/1 | `bilder/390x844/27-kasse.png` |
| Handy | 28 | einstellungen | Einstellungen | NICHT bestanden | 7 | 1 | 2610 | 0/1 | `bilder/390x844/28-einstellungen.png` |
| Handy | 29 | begriffe | Begriffe | NICHT bestanden | 2 | 1 | 2610 | 0/1 | `bilder/390x844/29-begriffe.png` |

## D-7: Zugänglichkeit je Bildschirm (axe-core, Verstöße serious / critical)

| Bildschirm | 390x844 |
| --- | --- |
| Einrichten | 0 s / 1 c (1 Zustände, 25 Regeln, 56 Knoten) |
| Anmelden | 0 s / 1 c (1 Zustände, 25 Regeln, 36 Knoten) |
| Start | 0 s / 2 c (2 Zustände, 88 Regeln, 881 Knoten) |
| Start (Weiterentwickeln) | 0 s / 3 c (3 Zustände, 132 Regeln, 1473 Knoten) |
| Werk (wartet, Weiterentwickeln) | 0 s / 1 c (1 Zustände, 44 Regeln, 501 Knoten) |
| Werk (wartet) | 0 s / 1 c (1 Zustände, 44 Regeln, 449 Knoten) |
| Werk (wartet, ZIP) | 0 s / 1 c (1 Zustände, 35 Regeln, 503 Knoten) |
| Werkbank | 0 s / 1 c (1 Zustände, 33 Regeln, 147 Knoten) |
| Werk: Rückfragen | 0 s / 1 c (1 Zustände, 35 Regeln, 611 Knoten) |
| Werk: Rückfragen beantwortet | 0 s / 1 c (1 Zustände, 35 Regeln, 616 Knoten) |
| Werk: Entwurfswahl | 0 s / 1 c (1 Zustände, 37 Regeln, 597 Knoten) |
| Werk: Entwurf gewählt | 0 s / 1 c (1 Zustände, 37 Regeln, 602 Knoten) |
| Werk: Richtungswahl | 0 s / 1 c (1 Zustände, 36 Regeln, 572 Knoten) |
| Werk: Richtung gewählt | 0 s / 1 c (1 Zustände, 36 Regeln, 577 Knoten) |
| Werk: beendet | 0 s / 4 c (4 Zustände, 140 Regeln, 2444 Knoten) |
| Blinde Wahl (offen) | 0 s / 1 c (1 Zustände, 33 Regeln, 140 Knoten) |
| Blinde Wahl (getroffen) | 0 s / 1 c (1 Zustände, 33 Regeln, 140 Knoten) |
| Gedächtnis | 0 s / 1 c (1 Zustände, 31 Regeln, 126 Knoten) |
| Prüfstand | 0 s / 1 c (1 Zustände, 31 Regeln, 127 Knoten) |
| Werk Null | 0 s / 1 c (1 Zustände, 31 Regeln, 168 Knoten) |
| Kasse | 0 s / 1 c (1 Zustände, 31 Regeln, 158 Knoten) |
| Einstellungen | 0 s / 1 c (1 Zustände, 39 Regeln, 228 Knoten) |
| Begriffe | 0 s / 1 c (1 Zustände, 30 Regeln, 330 Knoten) |

## D-7: Regler mit Zahl und Wort (aria-valuetext und Mitte des Rings)

| Größe | Schritte mit Reglern | Regler geprüft | ohne Zahl und Wort | Befund |
| --- | --- | --- | --- | --- |
| 390x844 | 5 | 25 | 25 | Zeit: aria-valuetext „“, Mitte „1 Stunde“; Tempo: aria-valuetext „“, Mitte „2 Ausgewogen“; Modell: aria-valuetext „“, Mitte „2 Stark“; Größe: aria-valuetext „“, Mitte „2 Ausbau“; Kasse: aria-valuetext „“, Mitte „5 Euro“; Zeit: aria-valuetext „“, Mitte „1 Stunde“; Tempo: aria-valuetext „“, Mitte „2 Ausgewogen“; Modell: aria-valuetext „“, Mitte „2 Stark“; Größe: aria-valuetext „“, Mitte „2 Ausbau“; Kasse: aria-valuetext „“, Mitte „5 Euro“; Zeit: aria-valuetext „“, Mitte „1 Stunde“; Tempo: aria-valuetext „“, Mitte „2 Ausgewogen“; Modell: aria-valuetext „“, Mitte „2 Stark“; Größe: aria-valuetext „“, Mitte „2 Ausbau“; Kasse: aria-valuetext „“, Mitte „5 Euro“; Zeit: aria-valuetext „“, Mitte „4 Stunden“; Tempo: aria-valuetext „“, Mitte „3 Gründlich“; Modell: aria-valuetext „“, Mitte „3 Höchstes“; Größe: aria-valuetext „“, Mitte „1 Feinschliff“; Kasse: aria-valuetext „“, Mitte „10 Euro“; Zeit: aria-valuetext „“, Mitte „1 Stunde“; Tempo: aria-valuetext „“, Mitte „2 Ausgewogen“; Modell: aria-valuetext „“, Mitte „2 Stark“; Größe: aria-valuetext „“, Mitte „2 Ausbau“; Kasse: aria-valuetext „“, Mitte „5 Euro“ |

## Belege je Schritt

```
390x844 · 01 einrichten · NICHT bestanden
  ✗ Konsolenfehler: Gegenprobe: eingebauter Konsolenfehler ()
  ✗ Waagrechter Bildlauf: 2610 px
  ✗ axe: image-alt (critical, 1 Knoten): Images must have alternative text | region (moderate, 1 Knoten): All page content should be contained by landmarks
  · Überschrift: "Cockpit einrichten"
  · Felder: Code, Passwort und Wiederholung: [1,2]
  axe: 25 Regeln, 56 Knoten, 0 serious, 1 critical, 1 leichter
  Regler: 0 · Bildlauf: 2610 px · Konsolenfehler: 1
  Bild: /srv/biotop/belege/phase-d/gegenprobe/bilder/390x844/01-einrichten.png
```
```
390x844 · 02 anmelden · NICHT bestanden
  ✗ Konsolenfehler: Gegenprobe: eingebauter Konsolenfehler ()
  ✗ Waagrechter Bildlauf: 2610 px
  ✗ axe: image-alt (critical, 1 Knoten): Images must have alternative text | region (moderate, 1 Knoten): All page content should be contained by landmarks
  · Einrichtungscode eingelöst, weiter auf: "/anmelden"
  · Überschrift: "Anmelden"
  · Passwortfeld: 1
  axe: 25 Regeln, 36 Knoten, 0 serious, 1 critical, 1 leichter
  Regler: 0 · Bildlauf: 2610 px · Konsolenfehler: 1
  Bild: /srv/biotop/belege/phase-d/gegenprobe/bilder/390x844/02-anmelden.png
```
```
390x844 · 03 start · NICHT bestanden
  ✗ Konsolenfehler: Gegenprobe: eingebauter Konsolenfehler ()
  ✗ Waagrechter Bildlauf: 2610 px
  ✗ axe: image-alt (critical, 1 Knoten): Images must have alternative text | region (moderate, 1 Knoten): All page content should be contained by landmarks
  ✗ Regler ohne Zahl und Wort: Zeit: aria-valuetext „“, Mitte „1 Stunde“ | Tempo: aria-valuetext „“, Mitte „2 Ausgewogen“ | Modell: aria-valuetext „“, Mitte „2 Stark“ | Größe: aria-valuetext „“, Mitte „2 Ausbau“ | Kasse: aria-valuetext „“, Mitte „5 Euro“
  · Angemeldet auf: "/"
  · Sitzungs-Cookie: ["__Host-biotop"]
  · Leitsatz: [4,"Jede Idee wird vollendet."]
  · Regler im Ring (alle fünf, Größe verborgen): 5
  · Gewählter Modus: ["Zu Ende entwickeln"]
  · Sichtbare Regler: ["Zeit","Tempo","Modell","Kasse"]
  · Quellen zum Einwerfen: ["Nur Text","Bild","Prototyp als ZIP"]
  · Schätzung für „Zu Ende entwickeln“: Schätzung (Kennzeichnung, Zeit/Kosten/Generationen): [true,3]
  · Schätzung für „Zu Ende entwickeln“: „Schätzung“ 1 h · 2,37 € · 3
  axe: 44 Regeln, 437 Knoten, 0 serious, 1 critical, 1 leichter
  Regler: 5 · Bildlauf: 2610 px · Konsolenfehler: 1
  Bild: /srv/biotop/belege/phase-d/gegenprobe/bilder/390x844/03-start.png
```
```
390x844 · 04 modus-weiterentwickeln · NICHT bestanden
  ✗ Konsolenfehler: Gegenprobe: eingebauter Konsolenfehler ()
  ✗ Waagrechter Bildlauf: 2610 px
  ✗ axe: image-alt (critical, 2 Knoten): Images must have alternative text | region (moderate, 2 Knoten): All page content should be contained by landmarks
  ✗ Regler ohne Zahl und Wort: Zeit: aria-valuetext „“, Mitte „1 Stunde“ | Tempo: aria-valuetext „“, Mitte „2 Ausgewogen“ | Modell: aria-valuetext „“, Mitte „2 Stark“ | Größe: aria-valuetext „“, Mitte „2 Ausbau“ | Kasse: aria-valuetext „“, Mitte „5 Euro“
  · Anfrage /api/schaetzung: modus: "evolve"
  · Gewählter Modus: ["Weiterentwickeln"]
  · Sichtbare Regler: ["Zeit","Tempo","Modell","Größe","Kasse"]
  · Quellen zum Einwerfen: ["Prototyp als ZIP","Repo-Link","Bestehendes Werk"]
  · Schätzung für „Weiterentwickeln“: Schätzung (Kennzeichnung, Zeit/Kosten/Generationen): [true,3]
  · Schätzung für „Weiterentwickeln“: „Schätzung“ 1 h · 3,00 € · 4
  axe: 44 Regeln, 486 Knoten, 0 serious, 1 critical, 1 leichter
  Regler: 5 · Bildlauf: 2610 px · Konsolenfehler: 1
  Bild: /srv/biotop/belege/phase-d/gegenprobe/bilder/390x844/04-modus-weiterentwickeln.png
```
```
390x844 · 05 regler-tastatur · NICHT bestanden
  ✗ Ablauf: Zeit: Ausgangsstellung: erwartet "1 Stunde", gefunden null
  ✗ Schritt ohne Beleg: nichts geprüft (G3).
  ✗ Konsolenfehler: Gegenprobe: eingebauter Konsolenfehler ()
  ✗ Waagrechter Bildlauf: 2610 px
  ✗ axe: image-alt (critical, 3 Knoten): Images must have alternative text | region (moderate, 3 Knoten): All page content should be contained by landmarks
  ✗ Regler ohne Zahl und Wort: Zeit: aria-valuetext „“, Mitte „1 Stunde“ | Tempo: aria-valuetext „“, Mitte „2 Ausgewogen“ | Modell: aria-valuetext „“, Mitte „2 Stark“ | Größe: aria-valuetext „“, Mitte „2 Ausbau“ | Kasse: aria-valuetext „“, Mitte „5 Euro“
  axe: 44 Regeln, 491 Knoten, 0 serious, 1 critical, 1 leichter
  Regler: 5 · Bildlauf: 2610 px · Konsolenfehler: 1
  Bild: /srv/biotop/belege/phase-d/gegenprobe/bilder/390x844/05-regler-tastatur.png
```
```
390x844 · 06 regler-ziehen · NICHT bestanden
  ✗ Konsolenfehler: Gegenprobe: eingebauter Konsolenfehler ()
  ✗ Waagrechter Bildlauf: 2610 px
  ✗ axe: image-alt (critical, 4 Knoten): Images must have alternative text | region (moderate, 4 Knoten): All page content should be contained by landmarks
  ✗ Regler ohne Zahl und Wort: Zeit: aria-valuetext „“, Mitte „4 Stunden“ | Tempo: aria-valuetext „“, Mitte „3 Gründlich“ | Modell: aria-valuetext „“, Mitte „3 Höchstes“ | Größe: aria-valuetext „“, Mitte „1 Feinschliff“ | Kasse: aria-valuetext „“, Mitte „10 Euro“
  · Zeit: Ziehen von Stufe 3 auf 5 → aria-valuetext: "4 Stunden"
  · Zeit: Anfrage minuten: "240"
  · Tempo: Ziehen von Stufe 2 auf 3 → aria-valuetext: "3 von 3: Gründlich"
  · Tempo: Anfrage tempo: "thorough"
  · Modell: Ziehen von Stufe 2 auf 3 → aria-valuetext: "3 von 3: Höchstes"
  · Modell: Anfrage modell: "maximum"
  · Größe: Ziehen von Stufe 2 auf 1 → aria-valuetext: "1 von 4: Feinschliff"
  · Kasse: Ziehen von Stufe 5 auf 10 → aria-valuetext: "10 Euro"
  · Kasse: Anfrage kasse: "10"
  · Anzeige = letzte Antwort von /api/schaetzung (Generationen): "6"
  axe: 44 Regeln, 496 Knoten, 0 serious, 1 critical, 1 leichter
  Regler: 5 · Bildlauf: 2610 px · Konsolenfehler: 1
  Bild: /srv/biotop/belege/phase-d/gegenprobe/bilder/390x844/06-regler-ziehen.png
```
```
390x844 · 07 repo-link-einwerfen · NICHT bestanden
  ✗ Ablauf: locator.tap: Timeout 10000ms exceeded.
  ✗ Schritt ohne Beleg: nichts geprüft (G3).
  ✗ Konsolenfehler: Gegenprobe: eingebauter Konsolenfehler ()
  ✗ Waagrechter Bildlauf: 2610 px
  ✗ axe: image-alt (critical, 5 Knoten): Images must have alternative text | region (moderate, 5 Knoten): All page content should be contained by landmarks
  ✗ Regler: 5 statt 0
  axe: 44 Regeln, 501 Knoten, 0 serious, 1 critical, 1 leichter
  Regler: 5 · Bildlauf: 2610 px · Konsolenfehler: 1
  Bild: /srv/biotop/belege/phase-d/gegenprobe/bilder/390x844/07-repo-link-einwerfen.png
```
```
390x844 · 08 modus-zu-ende · NICHT bestanden
  ✗ Konsolenfehler: Gegenprobe: eingebauter Konsolenfehler ()
  ✗ Waagrechter Bildlauf: 2610 px
  ✗ axe: image-alt (critical, 1 Knoten): Images must have alternative text | region (moderate, 1 Knoten): All page content should be contained by landmarks
  ✗ Regler ohne Zahl und Wort: Zeit: aria-valuetext „“, Mitte „1 Stunde“ | Tempo: aria-valuetext „“, Mitte „2 Ausgewogen“ | Modell: aria-valuetext „“, Mitte „2 Stark“ | Größe: aria-valuetext „“, Mitte „2 Ausbau“ | Kasse: aria-valuetext „“, Mitte „5 Euro“
  · Anfrage /api/schaetzung: modus: "evolve"
  · Anfrage /api/schaetzung: modus: "complete"
  · Gewählter Modus: ["Zu Ende entwickeln"]
  · Sichtbare Regler: ["Zeit","Tempo","Modell","Kasse"]
  · Quellen zum Einwerfen: ["Nur Text","Bild","Prototyp als ZIP"]
  · Schätzung für „Zu Ende entwickeln“: Schätzung (Kennzeichnung, Zeit/Kosten/Generationen): [true,3]
  · Schätzung für „Zu Ende entwickeln“: „Schätzung“ 1 h · 2,37 € · 3
  axe: 44 Regeln, 444 Knoten, 0 serious, 1 critical, 1 leichter
  Regler: 5 · Bildlauf: 2610 px · Konsolenfehler: 1
  Bild: /srv/biotop/belege/phase-d/gegenprobe/bilder/390x844/08-modus-zu-ende.png
```
```
390x844 · 09 idee-einwerfen · NICHT bestanden
  ✗ Ablauf: locator.tap: Timeout 10000ms exceeded.
  ✗ Schritt ohne Beleg: nichts geprüft (G3).
  ✗ Konsolenfehler: Gegenprobe: eingebauter Konsolenfehler ()
  ✗ Waagrechter Bildlauf: 2610 px
  ✗ axe: image-alt (critical, 2 Knoten): Images must have alternative text | region (moderate, 2 Knoten): All page content should be contained by landmarks
  ✗ Regler: 5 statt 0
  axe: 44 Regeln, 449 Knoten, 0 serious, 1 critical, 1 leichter
  Regler: 5 · Bildlauf: 2610 px · Konsolenfehler: 1
  Bild: /srv/biotop/belege/phase-d/gegenprobe/bilder/390x844/09-idee-einwerfen.png
```
```
390x844 · 10 prototyp-zip-einwerfen · NICHT bestanden
  ✗ Konsolenfehler: Gegenprobe: eingebauter Konsolenfehler ()
  ✗ Waagrechter Bildlauf: 2610 px
  ✗ axe: image-alt (critical, 1 Knoten): Images must have alternative text | region (moderate, 1 Knoten): All page content should be contained by landmarks
  · Vor dem Start: Schätzung (Kennzeichnung, Zeit/Kosten/Generationen): [true,3]
  · Vor dem Start: „Schätzung“ 1 h · 2,37 € · 3
  · Neues Werk angelegt und geöffnet: w-202611080109-84234f
  · API: Modus und Zustand: ["complete","queued"]
  · Werkseite: Platz in der Werkbank: true
  · Werkseite vor dem Lauf: Schätzung (Kennzeichnung, Zeit/Kosten/Generationen): [true,3]
  · Werkseite vor dem Lauf: „Schätzung“ 1 h · 2,37 € · 3
  · Ist vor dem Lauf: "Noch kein Ist: Das Werk läuft oder wartet."
  · Warteschlange: Quelle: {"kind":"zip","path":"/tmp/biotop-d3-5JeRQL/eingang/w-202611080109-84234f/ue3-prototyp.zip"}
  · ZIP im Eingang (2445 Bytes), SHA-256 gleich: "9d081b7967f82ba7d829713b77195ced436b09efadc40cf2a564cea552b5ff10"
  axe: 35 Regeln, 503 Knoten, 0 serious, 1 critical, 1 leichter
  Regler: 0 · Bildlauf: 2610 px · Konsolenfehler: 1
  Bild: /srv/biotop/belege/phase-d/gegenprobe/bilder/390x844/10-prototyp-zip-einwerfen.png
```
```
390x844 · 11 werkbank · NICHT bestanden
  ✗ Ablauf: Werkbank: 4 laufende, dann 3 wartende in Reihenfolge: erwartet ["repo","idee","w-202611080109-84234f"], gefunden ["w-202611080109-84234f"]
  ✗ Schritt ohne Beleg: nichts geprüft (G3).
  ✗ Konsolenfehler: Gegenprobe: eingebauter Konsolenfehler ()
  ✗ Waagrechter Bildlauf: 2610 px
  ✗ axe: image-alt (critical, 1 Knoten): Images must have alternative text | region (moderate, 1 Knoten): All page content should be contained by landmarks
  axe: 33 Regeln, 147 Knoten, 0 serious, 1 critical, 1 leichter
  Regler: 0 · Bildlauf: 2610 px · Konsolenfehler: 1
  Bild: /srv/biotop/belege/phase-d/gegenprobe/bilder/390x844/11-werkbank.png
```
```
390x844 · 12 rueckfragen-antippen · NICHT bestanden
  ✗ Konsolenfehler: Gegenprobe: eingebauter Konsolenfehler ()
  ✗ Waagrechter Bildlauf: 2610 px
  ✗ axe: image-alt (critical, 1 Knoten): Images must have alternative text | region (moderate, 1 Knoten): All page content should be contained by landmarks
  · Rückfragen als Karten: 2
  · Karte 1: Frage: "Wer trägt Ausgaben ein?"
  · Karte 1: Antworten: ["Nur ich","Alle in der WG","Alle und Gäste"]
  · Absenden gesperrt, solange eine Antwort fehlt: true
  · Karte 1: angetippt (aria-pressed): ["false","true","false"]
  · Karte 2: Frage: "Wie wird abgerechnet?"
  · Karte 2: Antworten: ["Monatlich","Je Einkauf","Auf Zuruf"]
  · Absenden gesperrt, solange eine Antwort fehlt: true
  · Karte 2: angetippt (aria-pressed): ["false","false","true"]
  · Absenden frei nach zwei Antworten: false
  axe: 35 Regeln, 611 Knoten, 0 serious, 1 critical, 1 leichter
  Regler: 0 · Bildlauf: 2610 px · Konsolenfehler: 1
  Bild: /srv/biotop/belege/phase-d/gegenprobe/bilder/390x844/12-rueckfragen-antippen.png
```
```
390x844 · 13 rueckfragen-senden · NICHT bestanden
  ✗ Ablauf: page.waitForResponse: Timeout 10000ms exceeded while waiting for event "response"
  ✗ Schritt ohne Beleg: nichts geprüft (G3).
  ✗ Konsolenfehler: Gegenprobe: eingebauter Konsolenfehler ()
  ✗ Waagrechter Bildlauf: 2610 px
  ✗ axe: image-alt (critical, 2 Knoten): Images must have alternative text | region (moderate, 2 Knoten): All page content should be contained by landmarks
  axe: 35 Regeln, 616 Knoten, 0 serious, 1 critical, 1 leichter
  Regler: 0 · Bildlauf: 2610 px · Konsolenfehler: 1
  Bild: /srv/biotop/belege/phase-d/gegenprobe/bilder/390x844/13-rueckfragen-senden.png
```
```
390x844 · 14 entwuerfe-ansehen · NICHT bestanden
  ✗ Konsolenfehler: Gegenprobe: eingebauter Konsolenfehler ()
  ✗ Waagrechter Bildlauf: 2610 px
  ✗ axe: image-alt (critical, 1 Knoten): Images must have alternative text | region (moderate, 1 Knoten): All page content should be contained by landmarks
  · Karten: 3
  · 3 Bilder aus /api/entwurf geladen: /api/entwurf/w-probe-entwuerfe/entwurf-ruhig.png (480 px), /api/entwurf/w-probe-entwuerfe/entwurf-kraeftig.png (480 px), /api/entwurf/w-probe-entwuerfe/entwurf-verspielt.png (480 px)
  · Nebeneinander: oben 432/432/432 px, links 32/146/260 px
  · Titel der Entwürfe: ["Ruhig","Kräftig","Verspielt"]
  axe: 37 Regeln, 597 Knoten, 0 serious, 1 critical, 1 leichter
  Regler: 0 · Bildlauf: 2610 px · Konsolenfehler: 1
  Bild: /srv/biotop/belege/phase-d/gegenprobe/bilder/390x844/14-entwuerfe-ansehen.png
```
```
390x844 · 15 entwurf-waehlen · NICHT bestanden
  ✗ Ablauf: Entscheidung 2: keine Antwort gespeichert.
  ✗ Konsolenfehler: Gegenprobe: eingebauter Konsolenfehler ()
  ✗ Waagrechter Bildlauf: 2610 px
  ✗ axe: image-alt (critical, 2 Knoten): Images must have alternative text | region (moderate, 2 Knoten): All page content should be contained by landmarks
  · Antwort gesendet: Status: 204
  axe: 37 Regeln, 602 Knoten, 0 serious, 1 critical, 1 leichter
  Regler: 0 · Bildlauf: 2610 px · Konsolenfehler: 1
  Bild: /srv/biotop/belege/phase-d/gegenprobe/bilder/390x844/15-entwurf-waehlen.png
```
```
390x844 · 16 richtungen-ansehen · NICHT bestanden
  ✗ Konsolenfehler: Gegenprobe: eingebauter Konsolenfehler ()
  ✗ Waagrechter Bildlauf: 2610 px
  ✗ axe: image-alt (critical, 1 Knoten): Images must have alternative text | region (moderate, 1 Knoten): All page content should be contained by landmarks
  · Richtungen als Karten: ["Teilen per Link","Offline zuerst","Vorlagen"]
  · Nutzen und Aufwand: ["Nutzen: hoch · Aufwand: 2 Generationen","Nutzen: mittel · Aufwand: 3 Generationen","Nutzen: mittel · Aufwand: 1 Generation"]
  axe: 36 Regeln, 572 Knoten, 0 serious, 1 critical, 1 leichter
  Regler: 0 · Bildlauf: 2610 px · Konsolenfehler: 1
  Bild: /srv/biotop/belege/phase-d/gegenprobe/bilder/390x844/16-richtungen-ansehen.png
```
```
390x844 · 17 richtung-waehlen · NICHT bestanden
  ✗ Ablauf: page.waitForResponse: Timeout 10000ms exceeded while waiting for event "response"
  ✗ Schritt ohne Beleg: nichts geprüft (G3).
  ✗ Konsolenfehler: Gegenprobe: eingebauter Konsolenfehler ()
  ✗ Waagrechter Bildlauf: 2610 px
  ✗ axe: image-alt (critical, 2 Knoten): Images must have alternative text | region (moderate, 2 Knoten): All page content should be contained by landmarks
  axe: 36 Regeln, 577 Knoten, 0 serious, 1 critical, 1 leichter
  Regler: 0 · Bildlauf: 2610 px · Konsolenfehler: 1
  Bild: /srv/biotop/belege/phase-d/gegenprobe/bilder/390x844/17-richtung-waehlen.png
```
```
390x844 · 18 generationen-zeitleiste · NICHT bestanden
  ✗ Konsolenfehler: Gegenprobe: eingebauter Konsolenfehler ()
  ✗ Waagrechter Bildlauf: 2610 px
  ✗ axe: image-alt (critical, 1 Knoten): Images must have alternative text | region (moderate, 1 Knoten): All page content should be contained by landmarks
  · Zeitleiste: Generationen: 3
  · Generation 1: Generation 1 · 2026-11-05 01:42 · Commit be2950b · Kartenpunkte: 1, 4, 9 (3 von 10)
  · Generation 2: Generation 2 · 2026-11-05 02:02 · Commit a6ec2da · Kartenpunkte: 1, 3, 4, 5, 9 (5 von 10)
  · Generation 3: Generation 3 · 2026-11-05 02:22 · Commit 6b96b7c · Kartenpunkte: 1, 3, 4, 5, 7, 8, 9 (7 von 10)
  axe: 35 Regeln, 611 Knoten, 0 serious, 1 critical, 1 leichter
  Regler: 0 · Bildlauf: 2610 px · Konsolenfehler: 1
  Bild: /srv/biotop/belege/phase-d/gegenprobe/bilder/390x844/18-generationen-zeitleiste.png
```
```
390x844 · 19 karte-zehn-kacheln · NICHT bestanden
  ✗ Konsolenfehler: Gegenprobe: eingebauter Konsolenfehler ()
  ✗ Waagrechter Bildlauf: 2610 px
  ✗ axe: image-alt (critical, 1 Knoten): Images must have alternative text | region (moderate, 1 Knoten): All page content should be contained by landmarks
  · Zehn Kacheln: ["Punkt 1","Punkt 2","Punkt 3","Punkt 4","Punkt 5","Punkt 6","Punkt 7","Punkt 8","Punkt 9","Punkt 10"]
  · Zustände: ["erfuellt","erfuellt","erfuellt","erfuellt","erfuellt","offen","erfuellt","erfuellt","erfuellt","ausstehend"]
  · Namen der Kartenpunkte (4.4): ["Funktion","Schlussprüfung","Robustheit","Sicherheit","Tempo","Bedienung","Zugänglichkeit","Geräte","Saubere Bauweise","Philipps Urteil"]
  · Zustand auch als Zeichen und Wort: ["✓ erfüllt","✗ offen","… ausstehend"]
  axe: 35 Regeln, 611 Knoten, 0 serious, 1 critical, 1 leichter
  Regler: 0 · Bildlauf: 2610 px · Konsolenfehler: 1
  Bild: /srv/biotop/belege/phase-d/gegenprobe/bilder/390x844/19-karte-zehn-kacheln.png
```
```
390x844 · 20 schaetzung-und-ist · NICHT bestanden
  ✗ Konsolenfehler: Gegenprobe: eingebauter Konsolenfehler ()
  ✗ Waagrechter Bildlauf: 2610 px
  ✗ axe: image-alt (critical, 1 Knoten): Images must have alternative text | region (moderate, 1 Knoten): All page content should be contained by landmarks
  · Beendetes Werk: Schätzung (Kennzeichnung, Zeit/Kosten/Generationen): [true,3]
  · Beendetes Werk: „Schätzung“ 1 h 30 min · 3,00 € · 4
  · Schätzung (gespeichert vor dem Start): ["1 h 30 min","3,00 €","4"]
  · Ist: ["Ist","1 h 35 min","2,37 €","3"]
  · Ist neben der Schätzung: Schätzung bei x=32, y=1054.25; Ist bei x=203, y=1054.25
  axe: 35 Regeln, 611 Knoten, 0 serious, 1 critical, 1 leichter
  Regler: 0 · Bildlauf: 2610 px · Konsolenfehler: 1
  Bild: /srv/biotop/belege/phase-d/gegenprobe/bilder/390x844/20-schaetzung-und-ist.png
```
```
390x844 · 21 ergebnis-oeffnen · NICHT bestanden
  ✗ Ablauf: Inhalt gzip (9 Bytes): Kennung: erwartet "1f8b", gefunden "6b65"
  ✗ Konsolenfehler: Gegenprobe: eingebauter Konsolenfehler ()
  ✗ Waagrechter Bildlauf: 2610 px
  ✗ axe: image-alt (critical, 1 Knoten): Images must have alternative text | region (moderate, 1 Knoten): All page content should be contained by landmarks
  · Verweis: "/api/werke/w-probe-beendet/ergebnis"
  · Datei: "w-probe-beendet.tar.gz"
  axe: 35 Regeln, 611 Knoten, 0 serious, 1 critical, 1 leichter
  Regler: 0 · Bildlauf: 2610 px · Konsolenfehler: 1
  Bild: /srv/biotop/belege/phase-d/gegenprobe/bilder/390x844/21-ergebnis-oeffnen.png
```
```
390x844 · 22 blinde-wahl-vorher · NICHT bestanden
  ✗ Konsolenfehler: Gegenprobe: eingebauter Konsolenfehler ()
  ✗ Waagrechter Bildlauf: 2610 px
  ✗ axe: image-alt (critical, 1 Knoten): Images must have alternative text | region (moderate, 1 Knoten): All page content should be contained by landmarks
  · Werkseite: Kacheln, Generationen, Bericht vor der Wahl: [0,0,0]
  · Werkseite: Kartenpunkte im Text vor der Wahl: 0
  · Fassungen: ["Fassung A","Fassung B"]
  · Karten: 2
  · 2 Bilder aus /api/entwurf geladen: /api/entwurf/w-probe-blinde-wahl/fassung-a.png (480 px), /api/entwurf/w-probe-blinde-wahl/fassung-b.png (480 px)
  · Nebeneinander: oben 407/407 px, links 16/203 px
  · Blinde Wahl: Kacheln, Generationen, Bericht vor der Wahl: [0,0,0]
  · Blinde Wahl: Kartenpunkte im Text vor der Wahl: 0
  axe: 33 Regeln, 140 Knoten, 0 serious, 1 critical, 1 leichter
  Regler: 0 · Bildlauf: 2610 px · Konsolenfehler: 1
  Bild: /srv/biotop/belege/phase-d/gegenprobe/bilder/390x844/22-blinde-wahl-vorher.png
```
```
390x844 · 23 blinde-wahl-nachher · NICHT bestanden
  ✗ Ablauf: Entscheidung 4: keine Antwort gespeichert.
  ✗ Konsolenfehler: Gegenprobe: eingebauter Konsolenfehler ()
  ✗ Waagrechter Bildlauf: 2610 px
  ✗ axe: image-alt (critical, 1 Knoten): Images must have alternative text | region (moderate, 1 Knoten): All page content should be contained by landmarks
  · Antwort gesendet: Status: 204
  axe: 33 Regeln, 140 Knoten, 0 serious, 1 critical, 1 leichter
  Regler: 0 · Bildlauf: 2610 px · Konsolenfehler: 1
  Bild: /srv/biotop/belege/phase-d/gegenprobe/bilder/390x844/23-blinde-wahl-nachher.png
```
```
390x844 · 24 gedaechtnis · NICHT bestanden
  ✗ Konsolenfehler: Gegenprobe: eingebauter Konsolenfehler ()
  ✗ Waagrechter Bildlauf: 2610 px
  ✗ axe: image-alt (critical, 1 Knoten): Images must have alternative text | region (moderate, 1 Knoten): All page content should be contained by landmarks
  · Muster: ["Erst die Schnittstelle festlegen, dann bauen.","Kleine Schritte mit je einem Test halten den Kreislauf in Bewegung."]
  · Geschmacksgedächtnis: „Die letzten 1 von 1 Wahlen, neueste zuerst: - Entwurf: „Ruhig“ gewählt; nicht gewählt: „Kräftig“, „Verspielt“.“
  · API: Muster: 2
  axe: 31 Regeln, 126 Knoten, 0 serious, 1 critical, 1 leichter
  Regler: 0 · Bildlauf: 2610 px · Konsolenfehler: 1
  Bild: /srv/biotop/belege/phase-d/gegenprobe/bilder/390x844/24-gedaechtnis.png
```
```
390x844 · 25 pruefstand · NICHT bestanden
  ✗ Konsolenfehler: Gegenprobe: eingebauter Konsolenfehler ()
  ✗ Waagrechter Bildlauf: 2610 px
  ✗ axe: image-alt (critical, 1 Knoten): Images must have alternative text | region (moderate, 1 Knoten): All page content should be contained by landmarks
  · Versiegelte Aufgaben (Seite, API): ["Versiegelte Aufgaben: 0",0]
  · Ehrlicher Leerstand mit Grund: "Der Prüfstand entsteht in Phase F: versiegelte Aufgaben gemischter Art mit ihren Karten, für den Baumeister unlesbar. Bis dahin gibt es 0 Aufgaben und keine Messwerte."
  axe: 31 Regeln, 127 Knoten, 0 serious, 1 critical, 1 leichter
  Regler: 0 · Bildlauf: 2610 px · Konsolenfehler: 1
  Bild: /srv/biotop/belege/phase-d/gegenprobe/bilder/390x844/25-pruefstand.png
```
```
390x844 · 26 werk-null · NICHT bestanden
  ✗ Konsolenfehler: Gegenprobe: eingebauter Konsolenfehler ()
  ✗ Waagrechter Bildlauf: 2610 px
  ✗ axe: image-alt (critical, 1 Knoten): Images must have alternative text | region (moderate, 1 Knoten): All page content should be contained by landmarks
  · API: Fassungen und Messungen: [0,0]
  · Überschrift: "Werk Null"
  · Leerstand in Klartext: Noch keine Messung: Die Evolutionskurveⓘ entsteht, sobald Werk Null auf dem Prüfstandⓘ läuft (Phase F). | Werk Null beginnt in Phase F: Das Biotop verbessert sich dann auf einer Kopie, gemessen auf dem Prüfstand, und übernimmt eine neue Fassung nur mit Philipps Ja. Bis dahin gibt es keine Fassung zum Vergleichen und keine Evolutionskurve. | Den Rückwegⓘ auf eine frühere Fassung gibt es ab Phase F; eine Übernahmeⓘ geschieht nie ohne dein Ja. | Noch keine Fassung erfasst.
  axe: 31 Regeln, 168 Knoten, 0 serious, 1 critical, 1 leichter
  Regler: 0 · Bildlauf: 2610 px · Konsolenfehler: 1
  Bild: /srv/biotop/belege/phase-d/gegenprobe/bilder/390x844/26-werk-null.png
```
```
390x844 · 27 kasse · NICHT bestanden
  ✗ Konsolenfehler: Gegenprobe: eingebauter Konsolenfehler ()
  ✗ Waagrechter Bildlauf: 2610 px
  ✗ axe: image-alt (critical, 1 Knoten): Images must have alternative text | region (moderate, 1 Knoten): All page content should be contained by landmarks
  · Kassenzeilen (Buchungen der Probedaten): ["Phase A: 1,84 € von 3,00 €","Phase B: 11,20 € von 30,00 €","Phase C: 4,65 € von 15,00 €","Phase D: 2,37 € von 5,00 €","Phase F: 0,00 € von 25,00 €"]
  · Balken (value): [1.84,11.2,4.65,2.37,0]
  · Kontingent: "nicht ablesbar"
  axe: 31 Regeln, 158 Knoten, 0 serious, 1 critical, 1 leichter
  Regler: 0 · Bildlauf: 2610 px · Konsolenfehler: 1
  Bild: /srv/biotop/belege/phase-d/gegenprobe/bilder/390x844/27-kasse.png
```
```
390x844 · 28 einstellungen · NICHT bestanden
  ✗ Konsolenfehler: Gegenprobe: eingebauter Konsolenfehler ()
  ✗ Waagrechter Bildlauf: 2610 px
  ✗ axe: image-alt (critical, 1 Knoten): Images must have alternative text | region (moderate, 1 Knoten): All page content should be contained by landmarks
  · Feineinstellung: ein leeres Feld je Organ: ["","","",""]
  · Push einschalten angeboten: true
  · Werke gleichzeitig (Ausgang): "1"
  · Speichern: Status: 200
  · Datenbank: parallel und Feineinstellung: ["2","{\"sealmaster\":\"anthropic/claude-sonnet-5.5\"}"]
  · Hinweis zum Herstellergebot je Stufe des Modell-Reglers: 3
  · API danach: 3
  axe: 39 Regeln, 228 Knoten, 0 serious, 1 critical, 1 leichter
  Regler: 0 · Bildlauf: 2610 px · Konsolenfehler: 1
  Bild: /srv/biotop/belege/phase-d/gegenprobe/bilder/390x844/28-einstellungen.png
```
```
390x844 · 29 begriffe · NICHT bestanden
  ✗ Konsolenfehler: Gegenprobe: eingebauter Konsolenfehler ()
  ✗ Waagrechter Bildlauf: 2610 px
  ✗ axe: image-alt (critical, 1 Knoten): Images must have alternative text | region (moderate, 1 Knoten): All page content should be contained by landmarks
  · Begriffe mit Klartext (Tafel src/cockpit/klartext.ts): ["Werk","Probewerk","Werk Null","Generation","Schwarm","Siegel","Siegelmeister","Kammer","Gedächtnis","Geschmacksgedächtnis","Prüfstand","Singularität","Ehrliche Grenze","überangepasst","Karte","Kartenpunkt","Eichung","Schlussprüfung","Bestandsschutz","Bestandstest","Stufe","Richtung","Landkarte","Denker","Baumeister","Prüfer","Ankläger","Kasse","Evolutionskurve","Übernahme","Rückweg","Blinde Wahl","Grundlinie","Herstellergebot","Werkbank","Kontingent"]
  · Jeder Begriff hat einen Satz: 36 Sätze
  axe: 30 Regeln, 330 Knoten, 0 serious, 1 critical, 1 leichter
  Regler: 0 · Bildlauf: 2610 px · Konsolenfehler: 1
  Bild: /srv/biotop/belege/phase-d/gegenprobe/bilder/390x844/29-begriffe.png
```
