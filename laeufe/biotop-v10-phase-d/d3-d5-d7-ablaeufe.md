# D-3, D-5, D-7 – Abläufe des Cockpits im Browser

- Stand: 2026-11-08T02:57:28.230Z (Beginn 2026-11-08T02:51:42.321Z)
- Befehl: `node scripts/cockpit-ablaeufe.ts`
- Browser: Chromium 156.0.8078.4 über Playwright 1.64.0, deviceScaleFactor 2, isMobile und hasTouch; axe-core 4.14.0
- Server: Testbetrieb auf 127.0.0.1, Port 0; Wegwerf-Datenbank mit den echten Migrationen in einem mkdtemp-Ordner, je Größe neu; Probedaten über die Repositories (scripts/cockpit-probedaten.ts)

## Ergebnis

| Prüfung | Gegenstand | Fehlschläge |
| --- | --- | --- |
| D-3 Schritte | 87 von 87 (3 Größen × 29) | 0 |
| Belege der Schritte | 543 | – |
| Konsolen- und Seitenfehler | 87 Schritte | 0 |
| Waagrechter Bildlauf | 87 Schritte | 0 |
| D-7 axe-core serious/critical | 87 Bildschirmzustände, 2796 Regelprüfungen, 33621 Knoten | 0 |
| D-7 Regler: aria-valuetext mit Zahl und Wort | 75 Reglerprüfungen | 0 |
| D-5 Schätzung vor dem Start gekennzeichnet | 30 Anzeigen | 0 |
| D-5 Ist neben der Schätzung (beendetes Werk) | 3 Größen | 0 |
| Bildschirmfotos | 87 | 0 |

**Gesamt: BESTANDEN**

## D-3: Größe × Schritt × Ergebnis

| Größe | Nr | Schritt | Bildschirm | Ergebnis | Belege | Konsolenfehler | Bildlauf px | axe s/c | Bild |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Tablet hoch | 01 | einrichten | Einrichten | bestanden | 2 | 0 | 0 | 0/0 | `bilder/820x1180/01-einrichten.png` |
| Tablet hoch | 02 | anmelden | Anmelden | bestanden | 3 | 0 | 0 | 0/0 | `bilder/820x1180/02-anmelden.png` |
| Tablet hoch | 03 | start | Start | bestanden | 9 | 0 | 0 | 0/0 | `bilder/820x1180/03-start.png` |
| Tablet hoch | 04 | modus-weiterentwickeln | Start (Weiterentwickeln) | bestanden | 6 | 0 | 0 | 0/0 | `bilder/820x1180/04-modus-weiterentwickeln.png` |
| Tablet hoch | 05 | regler-tastatur | Start (Weiterentwickeln) | bestanden | 33 | 0 | 0 | 0/0 | `bilder/820x1180/05-regler-tastatur.png` |
| Tablet hoch | 06 | regler-ziehen | Start (Weiterentwickeln) | bestanden | 10 | 0 | 0 | 0/0 | `bilder/820x1180/06-regler-ziehen.png` |
| Tablet hoch | 07 | repo-link-einwerfen | Werk (wartet, Weiterentwickeln) | bestanden | 10 | 0 | 0 | 0/0 | `bilder/820x1180/07-repo-link-einwerfen.png` |
| Tablet hoch | 08 | modus-zu-ende | Start | bestanden | 7 | 0 | 0 | 0/0 | `bilder/820x1180/08-modus-zu-ende.png` |
| Tablet hoch | 09 | idee-einwerfen | Werk (wartet) | bestanden | 11 | 0 | 0 | 0/0 | `bilder/820x1180/09-idee-einwerfen.png` |
| Tablet hoch | 10 | prototyp-zip-einwerfen | Werk (wartet, ZIP) | bestanden | 10 | 0 | 0 | 0/0 | `bilder/820x1180/10-prototyp-zip-einwerfen.png` |
| Tablet hoch | 11 | werkbank | Werkbank | bestanden | 4 | 0 | 0 | 0/0 | `bilder/820x1180/11-werkbank.png` |
| Tablet hoch | 12 | rueckfragen-antippen | Werk: Rückfragen | bestanden | 10 | 0 | 0 | 0/0 | `bilder/820x1180/12-rueckfragen-antippen.png` |
| Tablet hoch | 13 | rueckfragen-senden | Werk: Rückfragen beantwortet | bestanden | 4 | 0 | 0 | 0/0 | `bilder/820x1180/13-rueckfragen-senden.png` |
| Tablet hoch | 14 | entwuerfe-ansehen | Werk: Entwurfswahl | bestanden | 4 | 0 | 0 | 0/0 | `bilder/820x1180/14-entwuerfe-ansehen.png` |
| Tablet hoch | 15 | entwurf-waehlen | Werk: Entwurf gewählt | bestanden | 3 | 0 | 0 | 0/0 | `bilder/820x1180/15-entwurf-waehlen.png` |
| Tablet hoch | 16 | richtungen-ansehen | Werk: Richtungswahl | bestanden | 2 | 0 | 0 | 0/0 | `bilder/820x1180/16-richtungen-ansehen.png` |
| Tablet hoch | 17 | richtung-waehlen | Werk: Richtung gewählt | bestanden | 3 | 0 | 0 | 0/0 | `bilder/820x1180/17-richtung-waehlen.png` |
| Tablet hoch | 18 | generationen-zeitleiste | Werk: beendet | bestanden | 4 | 0 | 0 | 0/0 | `bilder/820x1180/18-generationen-zeitleiste.png` |
| Tablet hoch | 19 | karte-zehn-kacheln | Werk: beendet | bestanden | 4 | 0 | 0 | 0/0 | `bilder/820x1180/19-karte-zehn-kacheln.png` |
| Tablet hoch | 20 | schaetzung-und-ist | Werk: beendet | bestanden | 5 | 0 | 0 | 0/0 | `bilder/820x1180/20-schaetzung-und-ist.png` |
| Tablet hoch | 21 | ergebnis-oeffnen | Werk: beendet | bestanden | 5 | 0 | 0 | 0/0 | `bilder/820x1180/21-ergebnis-oeffnen.png` |
| Tablet hoch | 22 | blinde-wahl-vorher | Blinde Wahl (offen) | bestanden | 8 | 0 | 0 | 0/0 | `bilder/820x1180/22-blinde-wahl-vorher.png` |
| Tablet hoch | 23 | blinde-wahl-nachher | Blinde Wahl (getroffen) | bestanden | 4 | 0 | 0 | 0/0 | `bilder/820x1180/23-blinde-wahl-nachher.png` |
| Tablet hoch | 24 | gedaechtnis | Gedächtnis | bestanden | 3 | 0 | 0 | 0/0 | `bilder/820x1180/24-gedaechtnis.png` |
| Tablet hoch | 25 | pruefstand | Prüfstand | bestanden | 2 | 0 | 0 | 0/0 | `bilder/820x1180/25-pruefstand.png` |
| Tablet hoch | 26 | werk-null | Werk Null | bestanden | 3 | 0 | 0 | 0/0 | `bilder/820x1180/26-werk-null.png` |
| Tablet hoch | 27 | kasse | Kasse | bestanden | 3 | 0 | 0 | 0/0 | `bilder/820x1180/27-kasse.png` |
| Tablet hoch | 28 | einstellungen | Einstellungen | bestanden | 7 | 0 | 0 | 0/0 | `bilder/820x1180/28-einstellungen.png` |
| Tablet hoch | 29 | begriffe | Begriffe | bestanden | 2 | 0 | 0 | 0/0 | `bilder/820x1180/29-begriffe.png` |
| Tablet quer | 01 | einrichten | Einrichten | bestanden | 2 | 0 | 0 | 0/0 | `bilder/1180x820/01-einrichten.png` |
| Tablet quer | 02 | anmelden | Anmelden | bestanden | 3 | 0 | 0 | 0/0 | `bilder/1180x820/02-anmelden.png` |
| Tablet quer | 03 | start | Start | bestanden | 9 | 0 | 0 | 0/0 | `bilder/1180x820/03-start.png` |
| Tablet quer | 04 | modus-weiterentwickeln | Start (Weiterentwickeln) | bestanden | 6 | 0 | 0 | 0/0 | `bilder/1180x820/04-modus-weiterentwickeln.png` |
| Tablet quer | 05 | regler-tastatur | Start (Weiterentwickeln) | bestanden | 33 | 0 | 0 | 0/0 | `bilder/1180x820/05-regler-tastatur.png` |
| Tablet quer | 06 | regler-ziehen | Start (Weiterentwickeln) | bestanden | 10 | 0 | 0 | 0/0 | `bilder/1180x820/06-regler-ziehen.png` |
| Tablet quer | 07 | repo-link-einwerfen | Werk (wartet, Weiterentwickeln) | bestanden | 10 | 0 | 0 | 0/0 | `bilder/1180x820/07-repo-link-einwerfen.png` |
| Tablet quer | 08 | modus-zu-ende | Start | bestanden | 7 | 0 | 0 | 0/0 | `bilder/1180x820/08-modus-zu-ende.png` |
| Tablet quer | 09 | idee-einwerfen | Werk (wartet) | bestanden | 11 | 0 | 0 | 0/0 | `bilder/1180x820/09-idee-einwerfen.png` |
| Tablet quer | 10 | prototyp-zip-einwerfen | Werk (wartet, ZIP) | bestanden | 10 | 0 | 0 | 0/0 | `bilder/1180x820/10-prototyp-zip-einwerfen.png` |
| Tablet quer | 11 | werkbank | Werkbank | bestanden | 4 | 0 | 0 | 0/0 | `bilder/1180x820/11-werkbank.png` |
| Tablet quer | 12 | rueckfragen-antippen | Werk: Rückfragen | bestanden | 10 | 0 | 0 | 0/0 | `bilder/1180x820/12-rueckfragen-antippen.png` |
| Tablet quer | 13 | rueckfragen-senden | Werk: Rückfragen beantwortet | bestanden | 4 | 0 | 0 | 0/0 | `bilder/1180x820/13-rueckfragen-senden.png` |
| Tablet quer | 14 | entwuerfe-ansehen | Werk: Entwurfswahl | bestanden | 4 | 0 | 0 | 0/0 | `bilder/1180x820/14-entwuerfe-ansehen.png` |
| Tablet quer | 15 | entwurf-waehlen | Werk: Entwurf gewählt | bestanden | 3 | 0 | 0 | 0/0 | `bilder/1180x820/15-entwurf-waehlen.png` |
| Tablet quer | 16 | richtungen-ansehen | Werk: Richtungswahl | bestanden | 2 | 0 | 0 | 0/0 | `bilder/1180x820/16-richtungen-ansehen.png` |
| Tablet quer | 17 | richtung-waehlen | Werk: Richtung gewählt | bestanden | 3 | 0 | 0 | 0/0 | `bilder/1180x820/17-richtung-waehlen.png` |
| Tablet quer | 18 | generationen-zeitleiste | Werk: beendet | bestanden | 4 | 0 | 0 | 0/0 | `bilder/1180x820/18-generationen-zeitleiste.png` |
| Tablet quer | 19 | karte-zehn-kacheln | Werk: beendet | bestanden | 4 | 0 | 0 | 0/0 | `bilder/1180x820/19-karte-zehn-kacheln.png` |
| Tablet quer | 20 | schaetzung-und-ist | Werk: beendet | bestanden | 5 | 0 | 0 | 0/0 | `bilder/1180x820/20-schaetzung-und-ist.png` |
| Tablet quer | 21 | ergebnis-oeffnen | Werk: beendet | bestanden | 5 | 0 | 0 | 0/0 | `bilder/1180x820/21-ergebnis-oeffnen.png` |
| Tablet quer | 22 | blinde-wahl-vorher | Blinde Wahl (offen) | bestanden | 8 | 0 | 0 | 0/0 | `bilder/1180x820/22-blinde-wahl-vorher.png` |
| Tablet quer | 23 | blinde-wahl-nachher | Blinde Wahl (getroffen) | bestanden | 4 | 0 | 0 | 0/0 | `bilder/1180x820/23-blinde-wahl-nachher.png` |
| Tablet quer | 24 | gedaechtnis | Gedächtnis | bestanden | 3 | 0 | 0 | 0/0 | `bilder/1180x820/24-gedaechtnis.png` |
| Tablet quer | 25 | pruefstand | Prüfstand | bestanden | 2 | 0 | 0 | 0/0 | `bilder/1180x820/25-pruefstand.png` |
| Tablet quer | 26 | werk-null | Werk Null | bestanden | 3 | 0 | 0 | 0/0 | `bilder/1180x820/26-werk-null.png` |
| Tablet quer | 27 | kasse | Kasse | bestanden | 3 | 0 | 0 | 0/0 | `bilder/1180x820/27-kasse.png` |
| Tablet quer | 28 | einstellungen | Einstellungen | bestanden | 7 | 0 | 0 | 0/0 | `bilder/1180x820/28-einstellungen.png` |
| Tablet quer | 29 | begriffe | Begriffe | bestanden | 2 | 0 | 0 | 0/0 | `bilder/1180x820/29-begriffe.png` |
| Handy | 01 | einrichten | Einrichten | bestanden | 2 | 0 | 0 | 0/0 | `bilder/390x844/01-einrichten.png` |
| Handy | 02 | anmelden | Anmelden | bestanden | 3 | 0 | 0 | 0/0 | `bilder/390x844/02-anmelden.png` |
| Handy | 03 | start | Start | bestanden | 9 | 0 | 0 | 0/0 | `bilder/390x844/03-start.png` |
| Handy | 04 | modus-weiterentwickeln | Start (Weiterentwickeln) | bestanden | 6 | 0 | 0 | 0/0 | `bilder/390x844/04-modus-weiterentwickeln.png` |
| Handy | 05 | regler-tastatur | Start (Weiterentwickeln) | bestanden | 33 | 0 | 0 | 0/0 | `bilder/390x844/05-regler-tastatur.png` |
| Handy | 06 | regler-ziehen | Start (Weiterentwickeln) | bestanden | 10 | 0 | 0 | 0/0 | `bilder/390x844/06-regler-ziehen.png` |
| Handy | 07 | repo-link-einwerfen | Werk (wartet, Weiterentwickeln) | bestanden | 10 | 0 | 0 | 0/0 | `bilder/390x844/07-repo-link-einwerfen.png` |
| Handy | 08 | modus-zu-ende | Start | bestanden | 7 | 0 | 0 | 0/0 | `bilder/390x844/08-modus-zu-ende.png` |
| Handy | 09 | idee-einwerfen | Werk (wartet) | bestanden | 11 | 0 | 0 | 0/0 | `bilder/390x844/09-idee-einwerfen.png` |
| Handy | 10 | prototyp-zip-einwerfen | Werk (wartet, ZIP) | bestanden | 10 | 0 | 0 | 0/0 | `bilder/390x844/10-prototyp-zip-einwerfen.png` |
| Handy | 11 | werkbank | Werkbank | bestanden | 4 | 0 | 0 | 0/0 | `bilder/390x844/11-werkbank.png` |
| Handy | 12 | rueckfragen-antippen | Werk: Rückfragen | bestanden | 10 | 0 | 0 | 0/0 | `bilder/390x844/12-rueckfragen-antippen.png` |
| Handy | 13 | rueckfragen-senden | Werk: Rückfragen beantwortet | bestanden | 4 | 0 | 0 | 0/0 | `bilder/390x844/13-rueckfragen-senden.png` |
| Handy | 14 | entwuerfe-ansehen | Werk: Entwurfswahl | bestanden | 4 | 0 | 0 | 0/0 | `bilder/390x844/14-entwuerfe-ansehen.png` |
| Handy | 15 | entwurf-waehlen | Werk: Entwurf gewählt | bestanden | 3 | 0 | 0 | 0/0 | `bilder/390x844/15-entwurf-waehlen.png` |
| Handy | 16 | richtungen-ansehen | Werk: Richtungswahl | bestanden | 2 | 0 | 0 | 0/0 | `bilder/390x844/16-richtungen-ansehen.png` |
| Handy | 17 | richtung-waehlen | Werk: Richtung gewählt | bestanden | 3 | 0 | 0 | 0/0 | `bilder/390x844/17-richtung-waehlen.png` |
| Handy | 18 | generationen-zeitleiste | Werk: beendet | bestanden | 4 | 0 | 0 | 0/0 | `bilder/390x844/18-generationen-zeitleiste.png` |
| Handy | 19 | karte-zehn-kacheln | Werk: beendet | bestanden | 4 | 0 | 0 | 0/0 | `bilder/390x844/19-karte-zehn-kacheln.png` |
| Handy | 20 | schaetzung-und-ist | Werk: beendet | bestanden | 5 | 0 | 0 | 0/0 | `bilder/390x844/20-schaetzung-und-ist.png` |
| Handy | 21 | ergebnis-oeffnen | Werk: beendet | bestanden | 5 | 0 | 0 | 0/0 | `bilder/390x844/21-ergebnis-oeffnen.png` |
| Handy | 22 | blinde-wahl-vorher | Blinde Wahl (offen) | bestanden | 8 | 0 | 0 | 0/0 | `bilder/390x844/22-blinde-wahl-vorher.png` |
| Handy | 23 | blinde-wahl-nachher | Blinde Wahl (getroffen) | bestanden | 4 | 0 | 0 | 0/0 | `bilder/390x844/23-blinde-wahl-nachher.png` |
| Handy | 24 | gedaechtnis | Gedächtnis | bestanden | 3 | 0 | 0 | 0/0 | `bilder/390x844/24-gedaechtnis.png` |
| Handy | 25 | pruefstand | Prüfstand | bestanden | 2 | 0 | 0 | 0/0 | `bilder/390x844/25-pruefstand.png` |
| Handy | 26 | werk-null | Werk Null | bestanden | 3 | 0 | 0 | 0/0 | `bilder/390x844/26-werk-null.png` |
| Handy | 27 | kasse | Kasse | bestanden | 3 | 0 | 0 | 0/0 | `bilder/390x844/27-kasse.png` |
| Handy | 28 | einstellungen | Einstellungen | bestanden | 7 | 0 | 0 | 0/0 | `bilder/390x844/28-einstellungen.png` |
| Handy | 29 | begriffe | Begriffe | bestanden | 2 | 0 | 0 | 0/0 | `bilder/390x844/29-begriffe.png` |

## D-7: Zugänglichkeit je Bildschirm (axe-core, Verstöße serious / critical)

| Bildschirm | 820x1180 | 1180x820 | 390x844 |
| --- | --- | --- | --- |
| Einrichten | 0 s / 0 c (1 Zustände, 22 Regelprüfungen, 51 Knoten) | 0 s / 0 c (1 Zustände, 22 Regelprüfungen, 51 Knoten) | 0 s / 0 c (1 Zustände, 22 Regelprüfungen, 51 Knoten) |
| Anmelden | 0 s / 0 c (1 Zustände, 22 Regelprüfungen, 31 Knoten) | 0 s / 0 c (1 Zustände, 22 Regelprüfungen, 31 Knoten) | 0 s / 0 c (1 Zustände, 22 Regelprüfungen, 31 Knoten) |
| Start | 0 s / 0 c (2 Zustände, 82 Regelprüfungen, 879 Knoten) | 0 s / 0 c (2 Zustände, 82 Regelprüfungen, 879 Knoten) | 0 s / 0 c (2 Zustände, 82 Regelprüfungen, 879 Knoten) |
| Start (Weiterentwickeln) | 0 s / 0 c (3 Zustände, 123 Regelprüfungen, 1428 Knoten) | 0 s / 0 c (3 Zustände, 123 Regelprüfungen, 1428 Knoten) | 0 s / 0 c (3 Zustände, 123 Regelprüfungen, 1428 Knoten) |
| Werk (wartet, Weiterentwickeln) | 0 s / 0 c (1 Zustände, 32 Regelprüfungen, 457 Knoten) | 0 s / 0 c (1 Zustände, 32 Regelprüfungen, 457 Knoten) | 0 s / 0 c (1 Zustände, 32 Regelprüfungen, 457 Knoten) |
| Werk (wartet) | 0 s / 0 c (1 Zustände, 32 Regelprüfungen, 498 Knoten) | 0 s / 0 c (1 Zustände, 32 Regelprüfungen, 498 Knoten) | 0 s / 0 c (1 Zustände, 32 Regelprüfungen, 498 Knoten) |
| Werk (wartet, ZIP) | 0 s / 0 c (1 Zustände, 32 Regelprüfungen, 498 Knoten) | 0 s / 0 c (1 Zustände, 32 Regelprüfungen, 498 Knoten) | 0 s / 0 c (1 Zustände, 32 Regelprüfungen, 498 Knoten) |
| Werkbank | 0 s / 0 c (1 Zustände, 30 Regelprüfungen, 180 Knoten) | 0 s / 0 c (1 Zustände, 30 Regelprüfungen, 180 Knoten) | 0 s / 0 c (1 Zustände, 30 Regelprüfungen, 180 Knoten) |
| Werk: Rückfragen | 0 s / 0 c (1 Zustände, 32 Regelprüfungen, 606 Knoten) | 0 s / 0 c (1 Zustände, 32 Regelprüfungen, 606 Knoten) | 0 s / 0 c (1 Zustände, 32 Regelprüfungen, 606 Knoten) |
| Werk: Rückfragen beantwortet | 0 s / 0 c (1 Zustände, 32 Regelprüfungen, 510 Knoten) | 0 s / 0 c (1 Zustände, 32 Regelprüfungen, 510 Knoten) | 0 s / 0 c (1 Zustände, 32 Regelprüfungen, 510 Knoten) |
| Werk: Entwurfswahl | 0 s / 0 c (1 Zustände, 35 Regelprüfungen, 592 Knoten) | 0 s / 0 c (1 Zustände, 35 Regelprüfungen, 592 Knoten) | 0 s / 0 c (1 Zustände, 35 Regelprüfungen, 592 Knoten) |
| Werk: Entwurf gewählt | 0 s / 0 c (1 Zustände, 32 Regelprüfungen, 515 Knoten) | 0 s / 0 c (1 Zustände, 32 Regelprüfungen, 515 Knoten) | 0 s / 0 c (1 Zustände, 32 Regelprüfungen, 515 Knoten) |
| Werk: Richtungswahl | 0 s / 0 c (1 Zustände, 33 Regelprüfungen, 567 Knoten) | 0 s / 0 c (1 Zustände, 33 Regelprüfungen, 567 Knoten) | 0 s / 0 c (1 Zustände, 33 Regelprüfungen, 567 Knoten) |
| Werk: Richtung gewählt | 0 s / 0 c (1 Zustände, 32 Regelprüfungen, 474 Knoten) | 0 s / 0 c (1 Zustände, 32 Regelprüfungen, 474 Knoten) | 0 s / 0 c (1 Zustände, 32 Regelprüfungen, 474 Knoten) |
| Werk: beendet | 0 s / 0 c (4 Zustände, 128 Regelprüfungen, 2424 Knoten) | 0 s / 0 c (4 Zustände, 128 Regelprüfungen, 2424 Knoten) | 0 s / 0 c (4 Zustände, 128 Regelprüfungen, 2424 Knoten) |
| Blinde Wahl (offen) | 0 s / 0 c (1 Zustände, 31 Regelprüfungen, 135 Knoten) | 0 s / 0 c (1 Zustände, 31 Regelprüfungen, 135 Knoten) | 0 s / 0 c (1 Zustände, 31 Regelprüfungen, 135 Knoten) |
| Blinde Wahl (getroffen) | 0 s / 0 c (1 Zustände, 28 Regelprüfungen, 255 Knoten) | 0 s / 0 c (1 Zustände, 28 Regelprüfungen, 255 Knoten) | 0 s / 0 c (1 Zustände, 28 Regelprüfungen, 255 Knoten) |
| Gedächtnis | 0 s / 0 c (1 Zustände, 28 Regelprüfungen, 121 Knoten) | 0 s / 0 c (1 Zustände, 28 Regelprüfungen, 121 Knoten) | 0 s / 0 c (1 Zustände, 28 Regelprüfungen, 121 Knoten) |
| Prüfstand | 0 s / 0 c (1 Zustände, 28 Regelprüfungen, 122 Knoten) | 0 s / 0 c (1 Zustände, 28 Regelprüfungen, 122 Knoten) | 0 s / 0 c (1 Zustände, 28 Regelprüfungen, 122 Knoten) |
| Werk Null | 0 s / 0 c (1 Zustände, 28 Regelprüfungen, 163 Knoten) | 0 s / 0 c (1 Zustände, 28 Regelprüfungen, 163 Knoten) | 0 s / 0 c (1 Zustände, 28 Regelprüfungen, 163 Knoten) |
| Kasse | 0 s / 0 c (1 Zustände, 28 Regelprüfungen, 153 Knoten) | 0 s / 0 c (1 Zustände, 28 Regelprüfungen, 153 Knoten) | 0 s / 0 c (1 Zustände, 28 Regelprüfungen, 153 Knoten) |
| Einstellungen | 0 s / 0 c (1 Zustände, 36 Regelprüfungen, 223 Knoten) | 0 s / 0 c (1 Zustände, 36 Regelprüfungen, 223 Knoten) | 0 s / 0 c (1 Zustände, 36 Regelprüfungen, 223 Knoten) |
| Begriffe | 0 s / 0 c (1 Zustände, 26 Regelprüfungen, 325 Knoten) | 0 s / 0 c (1 Zustände, 26 Regelprüfungen, 325 Knoten) | 0 s / 0 c (1 Zustände, 26 Regelprüfungen, 325 Knoten) |

## D-7: Regler mit Zahl und Wort (aria-valuetext und Mitte des Rings)

| Größe | Schritte mit Reglern | Regler geprüft | ohne Zahl und Wort | Befund |
| --- | --- | --- | --- | --- |
| 820x1180 | 5 | 25 | 0 | – |
| 1180x820 | 5 | 25 | 0 | – |
| 390x844 | 5 | 25 | 0 | – |

## Belege je Schritt

```
820x1180 · 01 einrichten · bestanden
  · Überschrift: "Cockpit einrichten"
  · Felder: Code, Passwort und Wiederholung: [1,2]
  axe: 22 Regeln, 51 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/820x1180/01-einrichten.png
```
```
820x1180 · 02 anmelden · bestanden
  · Einrichtungscode eingelöst, weiter auf: "/anmelden"
  · Überschrift: "Anmelden"
  · Passwortfeld: 1
  axe: 22 Regeln, 31 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/820x1180/02-anmelden.png
```
```
820x1180 · 03 start · bestanden
  · Angemeldet auf: "/"
  · Sitzungs-Cookie: ["__Host-biotop"]
  · Leitsatz: [4,"Jede Idee wird vollendet."]
  · Regler im Ring (alle fünf, Größe verborgen): 5
  · Gewählter Modus: ["Zu Ende entwickeln"]
  · Sichtbare Regler: ["Zeit","Tempo","Modell","Kasse"]
  · Quellen zum Einwerfen: ["Nur Text","Bild","Prototyp als ZIP"]
  · Schätzung für „Zu Ende entwickeln“: Schätzung (Kennzeichnung, Zeit/Kosten/Generationen): [true,3]
  · Schätzung für „Zu Ende entwickeln“: „Schätzung“ 1 h · 2,37 € · 3
  axe: 41 Regeln, 432 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 5 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/820x1180/03-start.png
```
```
820x1180 · 04 modus-weiterentwickeln · bestanden
  · Anfrage /api/schaetzung: modus: "evolve"
  · Gewählter Modus: ["Weiterentwickeln"]
  · Sichtbare Regler: ["Zeit","Tempo","Modell","Größe","Kasse"]
  · Quellen zum Einwerfen: ["Prototyp als ZIP","Repo-Link","Bestehendes Werk"]
  · Schätzung für „Weiterentwickeln“: Schätzung (Kennzeichnung, Zeit/Kosten/Generationen): [true,3]
  · Schätzung für „Weiterentwickeln“: „Schätzung“ 1 h · 3,00 € · 4
  axe: 41 Regeln, 476 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 5 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/820x1180/04-modus-weiterentwickeln.png
```
```
820x1180 · 05 regler-tastatur · bestanden
  · Zeit: Ausgangsstellung: "1 Stunde"
  · Zeit: ArrowRight → aria-valuetext: "2 Stunden"
  · Zeit: Anfrage minuten: "120"
  · Zeit: End → aria-valuetext: "72 Stunden"
  · Zeit: Anfrage minuten: "4320"
  · Zeit: Home → aria-valuetext: "15 Minuten"
  · Zeit: Anfrage minuten: "15"
  · Zeit: ArrowUp → aria-valuetext: "30 Minuten"
  · Zeit: Anfrage minuten: "30"
  · Tempo: Ausgangsstellung: "2 von 3: Ausgewogen"
  · Tempo: ArrowLeft → aria-valuetext: "1 von 3: Blitz"
  · Tempo: Anfrage tempo: "flash"
  · Tempo: End → aria-valuetext: "3 von 3: Gründlich"
  · Tempo: Anfrage tempo: "thorough"
  · Tempo: ArrowDown → aria-valuetext: "2 von 3: Ausgewogen"
  · Tempo: Anfrage tempo: "balanced"
  · Modell: Ausgangsstellung: "2 von 3: Stark"
  · Modell: ArrowRight → aria-valuetext: "3 von 3: Höchstes"
  · Modell: Anfrage modell: "maximum"
  · Modell: Home → aria-valuetext: "1 von 3: Leicht"
  · Modell: Anfrage modell: "light"
  · Größe: Ausgangsstellung: "2 von 4: Ausbau"
  · Größe: ArrowRight → aria-valuetext: "3 von 4: Umbau"
  · Größe: End → aria-valuetext: "4 von 4: Neuerfindung"
  · Größe: ArrowLeft → aria-valuetext: "3 von 4: Umbau"
  · Kasse: Ausgangsstellung: "5 Euro"
  · Kasse: ArrowRight → aria-valuetext: "6 Euro"
  · Kasse: Anfrage kasse: "6"
  · Kasse: End → aria-valuetext: "100 Euro"
  · Kasse: Anfrage kasse: "100"
  · Kasse: Home → aria-valuetext: "1 Euro"
  · Kasse: Anfrage kasse: "1"
  · Anzeige = letzte Antwort von /api/schaetzung (Generationen): "4"
  axe: 41 Regeln, 476 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 5 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/820x1180/05-regler-tastatur.png
```
```
820x1180 · 06 regler-ziehen · bestanden
  · Zeit: Ziehen von Stufe 2 auf 5 → aria-valuetext: "4 Stunden"
  · Zeit: Anfrage minuten: "240"
  · Tempo: Ziehen von Stufe 2 auf 3 → aria-valuetext: "3 von 3: Gründlich"
  · Tempo: Anfrage tempo: "thorough"
  · Modell: Ziehen von Stufe 1 auf 3 → aria-valuetext: "3 von 3: Höchstes"
  · Modell: Anfrage modell: "maximum"
  · Größe: Ziehen von Stufe 3 auf 1 → aria-valuetext: "1 von 4: Feinschliff"
  · Kasse: Ziehen von Stufe 1 auf 10 → aria-valuetext: "10 Euro"
  · Kasse: Anfrage kasse: "10"
  · Anzeige = letzte Antwort von /api/schaetzung (Generationen): "6"
  axe: 41 Regeln, 476 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 5 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/820x1180/06-regler-ziehen.png
```
```
820x1180 · 07 repo-link-einwerfen · bestanden
  · Vor dem Start: Schätzung (Kennzeichnung, Zeit/Kosten/Generationen): [true,3]
  · Vor dem Start: „Schätzung“ 3 h · 6,00 € · 6
  · Neues Werk angelegt und geöffnet: w-202611080252-1ecb78
  · API: Modus und Zustand: ["evolve","queued"]
  · Werkseite: Platz in der Werkbank: true
  · Werkseite vor dem Lauf: Schätzung (Kennzeichnung, Zeit/Kosten/Generationen): [true,3]
  · Werkseite vor dem Lauf: „Schätzung“ 3 h · 6,00 € · 6
  · Ist vor dem Lauf: "Noch kein Ist: Das Werk läuft oder wartet."
  · API: Reglerstellung am Werk (wie gezogen): {"minutes":240,"pace":"thorough","tier":"maximum","size":"polish","budgetEur":10}
  · Warteschlange: Quelle: {"kind":"git","url":"https://github.com/beispiel/einkaufsliste"}
  axe: 32 Regeln, 457 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/820x1180/07-repo-link-einwerfen.png
```
```
820x1180 · 08 modus-zu-ende · bestanden
  · Anfrage /api/schaetzung: modus: "evolve"
  · Anfrage /api/schaetzung: modus: "complete"
  · Gewählter Modus: ["Zu Ende entwickeln"]
  · Sichtbare Regler: ["Zeit","Tempo","Modell","Kasse"]
  · Quellen zum Einwerfen: ["Nur Text","Bild","Prototyp als ZIP"]
  · Schätzung für „Zu Ende entwickeln“: Schätzung (Kennzeichnung, Zeit/Kosten/Generationen): [true,3]
  · Schätzung für „Zu Ende entwickeln“: „Schätzung“ 1 h · 2,37 € · 3
  axe: 41 Regeln, 447 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 5 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/820x1180/08-modus-zu-ende.png
```
```
820x1180 · 09 idee-einwerfen · bestanden
  · Vor dem Start: Schätzung (Kennzeichnung, Zeit/Kosten/Generationen): [true,3]
  · Vor dem Start: „Schätzung“ 1 h · 2,37 € · 3
  · Neues Werk angelegt und geöffnet: w-202611080252-7b4a27
  · API: Modus und Zustand: ["complete","queued"]
  · Werkseite: Platz in der Werkbank: true
  · Werkseite vor dem Lauf: Schätzung (Kennzeichnung, Zeit/Kosten/Generationen): [true,3]
  · Werkseite vor dem Lauf: „Schätzung“ 1 h · 2,37 € · 3
  · Ist vor dem Lauf: "Noch kein Ist: Das Werk läuft oder wartet."
  · API: Idee: "Rezeptsammlung mit Wochenplan\nEinkaufszettel aus dem Plan."
  · API: Reglerstellung (Ausgangsstellung): {"minutes":60,"pace":"balanced","tier":"strong","size":null,"budgetEur":5}
  · Warteschlange: Quelle: {"kind":"text"}
  axe: 32 Regeln, 498 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/820x1180/09-idee-einwerfen.png
```
```
820x1180 · 10 prototyp-zip-einwerfen · bestanden
  · Vor dem Start: Schätzung (Kennzeichnung, Zeit/Kosten/Generationen): [true,3]
  · Vor dem Start: „Schätzung“ 1 h · 2,37 € · 3
  · Neues Werk angelegt und geöffnet: w-202611080252-890c53
  · API: Modus und Zustand: ["complete","queued"]
  · Werkseite: Platz in der Werkbank: true
  · Werkseite vor dem Lauf: Schätzung (Kennzeichnung, Zeit/Kosten/Generationen): [true,3]
  · Werkseite vor dem Lauf: „Schätzung“ 1 h · 2,37 € · 3
  · Ist vor dem Lauf: "Noch kein Ist: Das Werk läuft oder wartet."
  · Warteschlange: Quelle: {"kind":"zip","path":"/tmp/biotop-d3-Os3Kfm/eingang/w-202611080252-890c53/ue3-prototyp.zip"}
  · ZIP im Eingang (2445 Bytes), SHA-256 gleich: "9d081b7967f82ba7d829713b77195ced436b09efadc40cf2a564cea552b5ff10"
  axe: 32 Regeln, 498 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/820x1180/10-prototyp-zip-einwerfen.png
```
```
820x1180 · 11 werkbank · bestanden
  · Werkbank: 4 laufende, dann 3 wartende in Reihenfolge: ["w-202611080252-1ecb78","w-202611080252-7b4a27","w-202611080252-890c53"]
  · Umreihen: Status: 204
  · Datenbank: neue Reihenfolge: ["w-202611080252-7b4a27","w-202611080252-1ecb78","w-202611080252-890c53"]
  · Werkbank zeigt sie: ["w-202611080252-7b4a27","w-202611080252-1ecb78","w-202611080252-890c53"]
  axe: 30 Regeln, 180 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/820x1180/11-werkbank.png
```
```
820x1180 · 12 rueckfragen-antippen · bestanden
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
  axe: 32 Regeln, 606 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/820x1180/12-rueckfragen-antippen.png
```
```
820x1180 · 13 rueckfragen-senden · bestanden
  · Antwort gesendet: Status: 204
  · API: Entscheidung danach offen: null
  · Datenbank: Antworten: {"q1":"Alle in der WG","q2":"Auf Zuruf"}
  · Rückfragen-Karten nach dem Absenden verschwunden
  axe: 32 Regeln, 510 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/820x1180/13-rueckfragen-senden.png
```
```
820x1180 · 14 entwuerfe-ansehen · bestanden
  · Karten: 3
  · 3 Bilder aus /api/entwurf geladen: /api/entwurf/w-probe-entwuerfe/entwurf-ruhig.png (480 px), /api/entwurf/w-probe-entwuerfe/entwurf-kraeftig.png (480 px), /api/entwurf/w-probe-entwuerfe/entwurf-verspielt.png (480 px)
  · Nebeneinander: oben 326/326/326 px, links 32/289/547 px
  · Titel der Entwürfe: ["Ruhig","Kräftig","Verspielt"]
  axe: 35 Regeln, 592 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/820x1180/14-entwuerfe-ansehen.png
```
```
820x1180 · 15 entwurf-waehlen · bestanden
  · Antwort gesendet: Status: 204
  · API: Entscheidung danach offen: null
  · Datenbank: gewählt: "d2"
  axe: 32 Regeln, 515 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/820x1180/15-entwurf-waehlen.png
```
```
820x1180 · 16 richtungen-ansehen · bestanden
  · Richtungen als Karten: ["Teilen per Link","Offline zuerst","Vorlagen"]
  · Nutzen und Aufwand: ["Nutzen: hoch · Aufwand: 2 Generationen","Nutzen: mittel · Aufwand: 3 Generationen","Nutzen: mittel · Aufwand: 1 Generation"]
  axe: 33 Regeln, 567 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/820x1180/16-richtungen-ansehen.png
```
```
820x1180 · 17 richtung-waehlen · bestanden
  · Antwort gesendet: Status: 204
  · API: Entscheidung danach offen: null
  · Datenbank: gewählt: "r2"
  axe: 32 Regeln, 474 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/820x1180/17-richtung-waehlen.png
```
```
820x1180 · 18 generationen-zeitleiste · bestanden
  · Zeitleiste: Generationen: 3
  · Generation 1: Generation 1 · 2026-11-05 03:25 · Commit c5ddfc3 · Kartenpunkte: 1, 4, 9 (3 von 10)
  · Generation 2: Generation 2 · 2026-11-05 03:45 · Commit 92b67dc · Kartenpunkte: 1, 3, 4, 5, 9 (5 von 10)
  · Generation 3: Generation 3 · 2026-11-05 04:05 · Commit a2218ed · Kartenpunkte: 1, 3, 4, 5, 7, 8, 9 (7 von 10)
  axe: 32 Regeln, 606 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/820x1180/18-generationen-zeitleiste.png
```
```
820x1180 · 19 karte-zehn-kacheln · bestanden
  · Zehn Kacheln: ["Punkt 1","Punkt 2","Punkt 3","Punkt 4","Punkt 5","Punkt 6","Punkt 7","Punkt 8","Punkt 9","Punkt 10"]
  · Zustände: ["erfuellt","erfuellt","erfuellt","erfuellt","erfuellt","offen","erfuellt","erfuellt","erfuellt","ausstehend"]
  · Namen der Kartenpunkte (4.4): ["Funktion","Schlussprüfung","Robustheit","Sicherheit","Tempo","Bedienung","Zugänglichkeit","Geräte","Saubere Bauweise","Philipps Urteil"]
  · Zustand auch als Zeichen und Wort: ["✓ erfüllt","✗ offen","… ausstehend"]
  axe: 32 Regeln, 606 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/820x1180/19-karte-zehn-kacheln.png
```
```
820x1180 · 20 schaetzung-und-ist · bestanden
  · Beendetes Werk: Schätzung (Kennzeichnung, Zeit/Kosten/Generationen): [true,3]
  · Beendetes Werk: „Schätzung“ 1 h 30 min · 3,00 € · 4
  · Schätzung (gespeichert vor dem Start): ["1 h 30 min","3,00 €","4"]
  · Ist: ["Ist","1 h 35 min","2,37 €","3"]
  · Ist neben der Schätzung: Schätzung bei x=32, y=712.25; Ist bei x=418, y=712.25
  axe: 32 Regeln, 606 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/820x1180/20-schaetzung-und-ist.png
```
```
820x1180 · 21 ergebnis-oeffnen · bestanden
  · Verweis: "/api/werke/w-probe-beendet/ergebnis"
  · Datei: "w-probe-beendet.tar.gz"
  · Inhalt gzip (427 Bytes): Kennung: "1f8b"
  · tar enthält das Werk-Repo (HEAD): ["w-probe-beendet/README.md","w-probe-beendet/app.js","w-probe-beendet/index.html","w-probe-beendet/style.css"]
  · Offline-Startseite des Service Workers bleibt HTML: "text/html; charset=utf-8"
  axe: 32 Regeln, 606 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/820x1180/21-ergebnis-oeffnen.png
```
```
820x1180 · 22 blinde-wahl-vorher · bestanden
  · Werkseite: Kacheln, Generationen, Bericht vor der Wahl: [0,0,0]
  · Werkseite: Kartenpunkte im Text vor der Wahl: 0
  · Fassungen: ["Fassung A","Fassung B"]
  · Karten: 2
  · 2 Bilder aus /api/entwurf geladen: /api/entwurf/w-probe-blinde-wahl/fassung-a.png (480 px), /api/entwurf/w-probe-blinde-wahl/fassung-b.png (480 px)
  · Nebeneinander: oben 308/308 px, links 16/418 px
  · Blinde Wahl: Kacheln, Generationen, Bericht vor der Wahl: [0,0,0]
  · Blinde Wahl: Kartenpunkte im Text vor der Wahl: 0
  axe: 31 Regeln, 135 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/820x1180/22-blinde-wahl-vorher.png
```
```
820x1180 · 23 blinde-wahl-nachher · bestanden
  · Antwort gesendet: Status: 204
  · API: Entscheidung danach offen: null
  · Datenbank: gewählt: "B"
  · Ergebnisse erst jetzt sichtbar: Kacheln: 10
  axe: 28 Regeln, 255 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/820x1180/23-blinde-wahl-nachher.png
```
```
820x1180 · 24 gedaechtnis · bestanden
  · Muster: ["Erst die Schnittstelle festlegen, dann bauen.","Kleine Schritte mit je einem Test halten den Kreislauf in Bewegung."]
  · Geschmacksgedächtnis: „Die letzten 1 von 1 Wahlen, neueste zuerst: - Entwurf: „Ruhig“ gewählt; nicht gewählt: „Kräftig“, „Verspielt“.“
  · API: Muster: 2
  axe: 28 Regeln, 121 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/820x1180/24-gedaechtnis.png
```
```
820x1180 · 25 pruefstand · bestanden
  · Versiegelte Aufgaben (Seite, API): ["Versiegelte Aufgaben: 0",0]
  · Ehrlicher Leerstand mit Grund: "Der Prüfstand entsteht in Phase F: versiegelte Aufgaben gemischter Art mit ihren Karten, für den Baumeister unlesbar. Bis dahin gibt es 0 Aufgaben und keine Messwerte."
  axe: 28 Regeln, 122 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/820x1180/25-pruefstand.png
```
```
820x1180 · 26 werk-null · bestanden
  · API: Fassungen und Messungen: [0,0]
  · Überschrift: "Werk Null"
  · Leerstand in Klartext: Noch keine Messung: Die Evolutionskurveⓘ entsteht, sobald Werk Null auf dem Prüfstandⓘ läuft (Phase F). | Werk Null beginnt in Phase F: Das Biotop verbessert sich dann auf einer Kopie, gemessen auf dem Prüfstand, und übernimmt eine neue Fassung nur mit Philipps Ja. Bis dahin gibt es keine Fassung zum Vergleichen und keine Evolutionskurve. | Den Rückwegⓘ auf eine frühere Fassung gibt es ab Phase F; eine Übernahmeⓘ geschieht nie ohne dein Ja. | Noch keine Fassung erfasst.
  axe: 28 Regeln, 163 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/820x1180/26-werk-null.png
```
```
820x1180 · 27 kasse · bestanden
  · Kassenzeilen (Buchungen der Probedaten): ["Phase A: 1,84 € von 3,00 €","Phase B: 11,20 € von 30,00 €","Phase C: 4,65 € von 15,00 €","Phase D: 2,37 € von 5,00 €","Phase F: 0,00 € von 25,00 €"]
  · Balken (value): [1.84,11.2,4.65,2.37,0]
  · Kontingent: "nicht ablesbar"
  axe: 28 Regeln, 153 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/820x1180/27-kasse.png
```
```
820x1180 · 28 einstellungen · bestanden
  · Feineinstellung: ein leeres Feld je Organ: ["","","",""]
  · Push einschalten angeboten: true
  · Werke gleichzeitig (Ausgang): "1"
  · Speichern: Status: 200
  · Datenbank: parallel und Feineinstellung: ["2","{\"sealmaster\":\"anthropic/claude-sonnet-5.5\"}"]
  · Hinweis zum Herstellergebot je Stufe des Modell-Reglers: 3
  · API danach: 3
  axe: 36 Regeln, 223 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/820x1180/28-einstellungen.png
```
```
820x1180 · 29 begriffe · bestanden
  · Begriffe mit Klartext (Tafel src/cockpit/klartext.ts): ["Werk","Probewerk","Werk Null","Generation","Schwarm","Siegel","Siegelmeister","Kammer","Gedächtnis","Geschmacksgedächtnis","Prüfstand","Singularität","Ehrliche Grenze","überangepasst","Karte","Kartenpunkt","Eichung","Schlussprüfung","Bestandsschutz","Bestandstest","Stufe","Richtung","Landkarte","Denker","Baumeister","Prüfer","Ankläger","Kasse","Evolutionskurve","Übernahme","Rückweg","Blinde Wahl","Grundlinie","Herstellergebot","Werkbank","Kontingent"]
  · Jeder Begriff hat einen Satz: 36 Sätze
  axe: 26 Regeln, 325 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/820x1180/29-begriffe.png
```
```
1180x820 · 01 einrichten · bestanden
  · Überschrift: "Cockpit einrichten"
  · Felder: Code, Passwort und Wiederholung: [1,2]
  axe: 22 Regeln, 51 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/1180x820/01-einrichten.png
```
```
1180x820 · 02 anmelden · bestanden
  · Einrichtungscode eingelöst, weiter auf: "/anmelden"
  · Überschrift: "Anmelden"
  · Passwortfeld: 1
  axe: 22 Regeln, 31 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/1180x820/02-anmelden.png
```
```
1180x820 · 03 start · bestanden
  · Angemeldet auf: "/"
  · Sitzungs-Cookie: ["__Host-biotop"]
  · Leitsatz: [4,"Jede Idee wird vollendet."]
  · Regler im Ring (alle fünf, Größe verborgen): 5
  · Gewählter Modus: ["Zu Ende entwickeln"]
  · Sichtbare Regler: ["Zeit","Tempo","Modell","Kasse"]
  · Quellen zum Einwerfen: ["Nur Text","Bild","Prototyp als ZIP"]
  · Schätzung für „Zu Ende entwickeln“: Schätzung (Kennzeichnung, Zeit/Kosten/Generationen): [true,3]
  · Schätzung für „Zu Ende entwickeln“: „Schätzung“ 1 h · 2,37 € · 3
  axe: 41 Regeln, 432 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 5 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/1180x820/03-start.png
```
```
1180x820 · 04 modus-weiterentwickeln · bestanden
  · Anfrage /api/schaetzung: modus: "evolve"
  · Gewählter Modus: ["Weiterentwickeln"]
  · Sichtbare Regler: ["Zeit","Tempo","Modell","Größe","Kasse"]
  · Quellen zum Einwerfen: ["Prototyp als ZIP","Repo-Link","Bestehendes Werk"]
  · Schätzung für „Weiterentwickeln“: Schätzung (Kennzeichnung, Zeit/Kosten/Generationen): [true,3]
  · Schätzung für „Weiterentwickeln“: „Schätzung“ 1 h · 3,00 € · 4
  axe: 41 Regeln, 476 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 5 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/1180x820/04-modus-weiterentwickeln.png
```
```
1180x820 · 05 regler-tastatur · bestanden
  · Zeit: Ausgangsstellung: "1 Stunde"
  · Zeit: ArrowRight → aria-valuetext: "2 Stunden"
  · Zeit: Anfrage minuten: "120"
  · Zeit: End → aria-valuetext: "72 Stunden"
  · Zeit: Anfrage minuten: "4320"
  · Zeit: Home → aria-valuetext: "15 Minuten"
  · Zeit: Anfrage minuten: "15"
  · Zeit: ArrowUp → aria-valuetext: "30 Minuten"
  · Zeit: Anfrage minuten: "30"
  · Tempo: Ausgangsstellung: "2 von 3: Ausgewogen"
  · Tempo: ArrowLeft → aria-valuetext: "1 von 3: Blitz"
  · Tempo: Anfrage tempo: "flash"
  · Tempo: End → aria-valuetext: "3 von 3: Gründlich"
  · Tempo: Anfrage tempo: "thorough"
  · Tempo: ArrowDown → aria-valuetext: "2 von 3: Ausgewogen"
  · Tempo: Anfrage tempo: "balanced"
  · Modell: Ausgangsstellung: "2 von 3: Stark"
  · Modell: ArrowRight → aria-valuetext: "3 von 3: Höchstes"
  · Modell: Anfrage modell: "maximum"
  · Modell: Home → aria-valuetext: "1 von 3: Leicht"
  · Modell: Anfrage modell: "light"
  · Größe: Ausgangsstellung: "2 von 4: Ausbau"
  · Größe: ArrowRight → aria-valuetext: "3 von 4: Umbau"
  · Größe: End → aria-valuetext: "4 von 4: Neuerfindung"
  · Größe: ArrowLeft → aria-valuetext: "3 von 4: Umbau"
  · Kasse: Ausgangsstellung: "5 Euro"
  · Kasse: ArrowRight → aria-valuetext: "6 Euro"
  · Kasse: Anfrage kasse: "6"
  · Kasse: End → aria-valuetext: "100 Euro"
  · Kasse: Anfrage kasse: "100"
  · Kasse: Home → aria-valuetext: "1 Euro"
  · Kasse: Anfrage kasse: "1"
  · Anzeige = letzte Antwort von /api/schaetzung (Generationen): "4"
  axe: 41 Regeln, 476 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 5 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/1180x820/05-regler-tastatur.png
```
```
1180x820 · 06 regler-ziehen · bestanden
  · Zeit: Ziehen von Stufe 2 auf 5 → aria-valuetext: "4 Stunden"
  · Zeit: Anfrage minuten: "240"
  · Tempo: Ziehen von Stufe 2 auf 3 → aria-valuetext: "3 von 3: Gründlich"
  · Tempo: Anfrage tempo: "thorough"
  · Modell: Ziehen von Stufe 1 auf 3 → aria-valuetext: "3 von 3: Höchstes"
  · Modell: Anfrage modell: "maximum"
  · Größe: Ziehen von Stufe 3 auf 1 → aria-valuetext: "1 von 4: Feinschliff"
  · Kasse: Ziehen von Stufe 1 auf 10 → aria-valuetext: "10 Euro"
  · Kasse: Anfrage kasse: "10"
  · Anzeige = letzte Antwort von /api/schaetzung (Generationen): "6"
  axe: 41 Regeln, 476 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 5 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/1180x820/06-regler-ziehen.png
```
```
1180x820 · 07 repo-link-einwerfen · bestanden
  · Vor dem Start: Schätzung (Kennzeichnung, Zeit/Kosten/Generationen): [true,3]
  · Vor dem Start: „Schätzung“ 3 h · 6,00 € · 6
  · Neues Werk angelegt und geöffnet: w-202611080254-e36603
  · API: Modus und Zustand: ["evolve","queued"]
  · Werkseite: Platz in der Werkbank: true
  · Werkseite vor dem Lauf: Schätzung (Kennzeichnung, Zeit/Kosten/Generationen): [true,3]
  · Werkseite vor dem Lauf: „Schätzung“ 3 h · 6,00 € · 6
  · Ist vor dem Lauf: "Noch kein Ist: Das Werk läuft oder wartet."
  · API: Reglerstellung am Werk (wie gezogen): {"minutes":240,"pace":"thorough","tier":"maximum","size":"polish","budgetEur":10}
  · Warteschlange: Quelle: {"kind":"git","url":"https://github.com/beispiel/einkaufsliste"}
  axe: 32 Regeln, 457 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/1180x820/07-repo-link-einwerfen.png
```
```
1180x820 · 08 modus-zu-ende · bestanden
  · Anfrage /api/schaetzung: modus: "evolve"
  · Anfrage /api/schaetzung: modus: "complete"
  · Gewählter Modus: ["Zu Ende entwickeln"]
  · Sichtbare Regler: ["Zeit","Tempo","Modell","Kasse"]
  · Quellen zum Einwerfen: ["Nur Text","Bild","Prototyp als ZIP"]
  · Schätzung für „Zu Ende entwickeln“: Schätzung (Kennzeichnung, Zeit/Kosten/Generationen): [true,3]
  · Schätzung für „Zu Ende entwickeln“: „Schätzung“ 1 h · 2,37 € · 3
  axe: 41 Regeln, 447 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 5 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/1180x820/08-modus-zu-ende.png
```
```
1180x820 · 09 idee-einwerfen · bestanden
  · Vor dem Start: Schätzung (Kennzeichnung, Zeit/Kosten/Generationen): [true,3]
  · Vor dem Start: „Schätzung“ 1 h · 2,37 € · 3
  · Neues Werk angelegt und geöffnet: w-202611080254-ec502b
  · API: Modus und Zustand: ["complete","queued"]
  · Werkseite: Platz in der Werkbank: true
  · Werkseite vor dem Lauf: Schätzung (Kennzeichnung, Zeit/Kosten/Generationen): [true,3]
  · Werkseite vor dem Lauf: „Schätzung“ 1 h · 2,37 € · 3
  · Ist vor dem Lauf: "Noch kein Ist: Das Werk läuft oder wartet."
  · API: Idee: "Rezeptsammlung mit Wochenplan\nEinkaufszettel aus dem Plan."
  · API: Reglerstellung (Ausgangsstellung): {"minutes":60,"pace":"balanced","tier":"strong","size":null,"budgetEur":5}
  · Warteschlange: Quelle: {"kind":"text"}
  axe: 32 Regeln, 498 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/1180x820/09-idee-einwerfen.png
```
```
1180x820 · 10 prototyp-zip-einwerfen · bestanden
  · Vor dem Start: Schätzung (Kennzeichnung, Zeit/Kosten/Generationen): [true,3]
  · Vor dem Start: „Schätzung“ 1 h · 2,37 € · 3
  · Neues Werk angelegt und geöffnet: w-202611080254-d87cdd
  · API: Modus und Zustand: ["complete","queued"]
  · Werkseite: Platz in der Werkbank: true
  · Werkseite vor dem Lauf: Schätzung (Kennzeichnung, Zeit/Kosten/Generationen): [true,3]
  · Werkseite vor dem Lauf: „Schätzung“ 1 h · 2,37 € · 3
  · Ist vor dem Lauf: "Noch kein Ist: Das Werk läuft oder wartet."
  · Warteschlange: Quelle: {"kind":"zip","path":"/tmp/biotop-d3-XviTGV/eingang/w-202611080254-d87cdd/ue3-prototyp.zip"}
  · ZIP im Eingang (2445 Bytes), SHA-256 gleich: "9d081b7967f82ba7d829713b77195ced436b09efadc40cf2a564cea552b5ff10"
  axe: 32 Regeln, 498 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/1180x820/10-prototyp-zip-einwerfen.png
```
```
1180x820 · 11 werkbank · bestanden
  · Werkbank: 4 laufende, dann 3 wartende in Reihenfolge: ["w-202611080254-e36603","w-202611080254-ec502b","w-202611080254-d87cdd"]
  · Umreihen: Status: 204
  · Datenbank: neue Reihenfolge: ["w-202611080254-ec502b","w-202611080254-e36603","w-202611080254-d87cdd"]
  · Werkbank zeigt sie: ["w-202611080254-ec502b","w-202611080254-e36603","w-202611080254-d87cdd"]
  axe: 30 Regeln, 180 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/1180x820/11-werkbank.png
```
```
1180x820 · 12 rueckfragen-antippen · bestanden
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
  axe: 32 Regeln, 606 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/1180x820/12-rueckfragen-antippen.png
```
```
1180x820 · 13 rueckfragen-senden · bestanden
  · Antwort gesendet: Status: 204
  · API: Entscheidung danach offen: null
  · Datenbank: Antworten: {"q1":"Alle in der WG","q2":"Auf Zuruf"}
  · Rückfragen-Karten nach dem Absenden verschwunden
  axe: 32 Regeln, 510 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/1180x820/13-rueckfragen-senden.png
```
```
1180x820 · 14 entwuerfe-ansehen · bestanden
  · Karten: 3
  · 3 Bilder aus /api/entwurf geladen: /api/entwurf/w-probe-entwuerfe/entwurf-ruhig.png (480 px), /api/entwurf/w-probe-entwuerfe/entwurf-kraeftig.png (480 px), /api/entwurf/w-probe-entwuerfe/entwurf-verspielt.png (480 px)
  · Nebeneinander: oben 278/278/278 px, links 72/423/773 px
  · Titel der Entwürfe: ["Ruhig","Kräftig","Verspielt"]
  axe: 35 Regeln, 592 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/1180x820/14-entwuerfe-ansehen.png
```
```
1180x820 · 15 entwurf-waehlen · bestanden
  · Antwort gesendet: Status: 204
  · API: Entscheidung danach offen: null
  · Datenbank: gewählt: "d2"
  axe: 32 Regeln, 515 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/1180x820/15-entwurf-waehlen.png
```
```
1180x820 · 16 richtungen-ansehen · bestanden
  · Richtungen als Karten: ["Teilen per Link","Offline zuerst","Vorlagen"]
  · Nutzen und Aufwand: ["Nutzen: hoch · Aufwand: 2 Generationen","Nutzen: mittel · Aufwand: 3 Generationen","Nutzen: mittel · Aufwand: 1 Generation"]
  axe: 33 Regeln, 567 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/1180x820/16-richtungen-ansehen.png
```
```
1180x820 · 17 richtung-waehlen · bestanden
  · Antwort gesendet: Status: 204
  · API: Entscheidung danach offen: null
  · Datenbank: gewählt: "r2"
  axe: 32 Regeln, 474 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/1180x820/17-richtung-waehlen.png
```
```
1180x820 · 18 generationen-zeitleiste · bestanden
  · Zeitleiste: Generationen: 3
  · Generation 1: Generation 1 · 2026-11-05 03:27 · Commit 185aca6 · Kartenpunkte: 1, 4, 9 (3 von 10)
  · Generation 2: Generation 2 · 2026-11-05 03:47 · Commit e26cab0 · Kartenpunkte: 1, 3, 4, 5, 9 (5 von 10)
  · Generation 3: Generation 3 · 2026-11-05 04:07 · Commit fcb290e · Kartenpunkte: 1, 3, 4, 5, 7, 8, 9 (7 von 10)
  axe: 32 Regeln, 606 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/1180x820/18-generationen-zeitleiste.png
```
```
1180x820 · 19 karte-zehn-kacheln · bestanden
  · Zehn Kacheln: ["Punkt 1","Punkt 2","Punkt 3","Punkt 4","Punkt 5","Punkt 6","Punkt 7","Punkt 8","Punkt 9","Punkt 10"]
  · Zustände: ["erfuellt","erfuellt","erfuellt","erfuellt","erfuellt","offen","erfuellt","erfuellt","erfuellt","ausstehend"]
  · Namen der Kartenpunkte (4.4): ["Funktion","Schlussprüfung","Robustheit","Sicherheit","Tempo","Bedienung","Zugänglichkeit","Geräte","Saubere Bauweise","Philipps Urteil"]
  · Zustand auch als Zeichen und Wort: ["✓ erfüllt","✗ offen","… ausstehend"]
  axe: 32 Regeln, 606 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/1180x820/19-karte-zehn-kacheln.png
```
```
1180x820 · 20 schaetzung-und-ist · bestanden
  · Beendetes Werk: Schätzung (Kennzeichnung, Zeit/Kosten/Generationen): [true,3]
  · Beendetes Werk: „Schätzung“ 1 h 30 min · 3,00 € · 4
  · Schätzung (gespeichert vor dem Start): ["1 h 30 min","3,00 €","4"]
  · Ist: ["Ist","1 h 35 min","2,37 €","3"]
  · Ist neben der Schätzung: Schätzung bei x=72, y=594.75; Ist bei x=598, y=594.75
  axe: 32 Regeln, 606 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/1180x820/20-schaetzung-und-ist.png
```
```
1180x820 · 21 ergebnis-oeffnen · bestanden
  · Verweis: "/api/werke/w-probe-beendet/ergebnis"
  · Datei: "w-probe-beendet.tar.gz"
  · Inhalt gzip (427 Bytes): Kennung: "1f8b"
  · tar enthält das Werk-Repo (HEAD): ["w-probe-beendet/README.md","w-probe-beendet/app.js","w-probe-beendet/index.html","w-probe-beendet/style.css"]
  · Offline-Startseite des Service Workers bleibt HTML: "text/html; charset=utf-8"
  axe: 32 Regeln, 606 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/1180x820/21-ergebnis-oeffnen.png
```
```
1180x820 · 22 blinde-wahl-vorher · bestanden
  · Werkseite: Kacheln, Generationen, Bericht vor der Wahl: [0,0,0]
  · Werkseite: Kartenpunkte im Text vor der Wahl: 0
  · Fassungen: ["Fassung A","Fassung B"]
  · Karten: 2
  · 2 Bilder aus /api/entwurf geladen: /api/entwurf/w-probe-blinde-wahl/fassung-a.png (480 px), /api/entwurf/w-probe-blinde-wahl/fassung-b.png (480 px)
  · Nebeneinander: oben 234/234 px, links 56/598 px
  · Blinde Wahl: Kacheln, Generationen, Bericht vor der Wahl: [0,0,0]
  · Blinde Wahl: Kartenpunkte im Text vor der Wahl: 0
  axe: 31 Regeln, 135 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/1180x820/22-blinde-wahl-vorher.png
```
```
1180x820 · 23 blinde-wahl-nachher · bestanden
  · Antwort gesendet: Status: 204
  · API: Entscheidung danach offen: null
  · Datenbank: gewählt: "B"
  · Ergebnisse erst jetzt sichtbar: Kacheln: 10
  axe: 28 Regeln, 255 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/1180x820/23-blinde-wahl-nachher.png
```
```
1180x820 · 24 gedaechtnis · bestanden
  · Muster: ["Erst die Schnittstelle festlegen, dann bauen.","Kleine Schritte mit je einem Test halten den Kreislauf in Bewegung."]
  · Geschmacksgedächtnis: „Die letzten 1 von 1 Wahlen, neueste zuerst: - Entwurf: „Ruhig“ gewählt; nicht gewählt: „Kräftig“, „Verspielt“.“
  · API: Muster: 2
  axe: 28 Regeln, 121 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/1180x820/24-gedaechtnis.png
```
```
1180x820 · 25 pruefstand · bestanden
  · Versiegelte Aufgaben (Seite, API): ["Versiegelte Aufgaben: 0",0]
  · Ehrlicher Leerstand mit Grund: "Der Prüfstand entsteht in Phase F: versiegelte Aufgaben gemischter Art mit ihren Karten, für den Baumeister unlesbar. Bis dahin gibt es 0 Aufgaben und keine Messwerte."
  axe: 28 Regeln, 122 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/1180x820/25-pruefstand.png
```
```
1180x820 · 26 werk-null · bestanden
  · API: Fassungen und Messungen: [0,0]
  · Überschrift: "Werk Null"
  · Leerstand in Klartext: Noch keine Messung: Die Evolutionskurveⓘ entsteht, sobald Werk Null auf dem Prüfstandⓘ läuft (Phase F). | Werk Null beginnt in Phase F: Das Biotop verbessert sich dann auf einer Kopie, gemessen auf dem Prüfstand, und übernimmt eine neue Fassung nur mit Philipps Ja. Bis dahin gibt es keine Fassung zum Vergleichen und keine Evolutionskurve. | Den Rückwegⓘ auf eine frühere Fassung gibt es ab Phase F; eine Übernahmeⓘ geschieht nie ohne dein Ja. | Noch keine Fassung erfasst.
  axe: 28 Regeln, 163 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/1180x820/26-werk-null.png
```
```
1180x820 · 27 kasse · bestanden
  · Kassenzeilen (Buchungen der Probedaten): ["Phase A: 1,84 € von 3,00 €","Phase B: 11,20 € von 30,00 €","Phase C: 4,65 € von 15,00 €","Phase D: 2,37 € von 5,00 €","Phase F: 0,00 € von 25,00 €"]
  · Balken (value): [1.84,11.2,4.65,2.37,0]
  · Kontingent: "nicht ablesbar"
  axe: 28 Regeln, 153 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/1180x820/27-kasse.png
```
```
1180x820 · 28 einstellungen · bestanden
  · Feineinstellung: ein leeres Feld je Organ: ["","","",""]
  · Push einschalten angeboten: true
  · Werke gleichzeitig (Ausgang): "1"
  · Speichern: Status: 200
  · Datenbank: parallel und Feineinstellung: ["2","{\"sealmaster\":\"anthropic/claude-sonnet-5.5\"}"]
  · Hinweis zum Herstellergebot je Stufe des Modell-Reglers: 3
  · API danach: 3
  axe: 36 Regeln, 223 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/1180x820/28-einstellungen.png
```
```
1180x820 · 29 begriffe · bestanden
  · Begriffe mit Klartext (Tafel src/cockpit/klartext.ts): ["Werk","Probewerk","Werk Null","Generation","Schwarm","Siegel","Siegelmeister","Kammer","Gedächtnis","Geschmacksgedächtnis","Prüfstand","Singularität","Ehrliche Grenze","überangepasst","Karte","Kartenpunkt","Eichung","Schlussprüfung","Bestandsschutz","Bestandstest","Stufe","Richtung","Landkarte","Denker","Baumeister","Prüfer","Ankläger","Kasse","Evolutionskurve","Übernahme","Rückweg","Blinde Wahl","Grundlinie","Herstellergebot","Werkbank","Kontingent"]
  · Jeder Begriff hat einen Satz: 36 Sätze
  axe: 26 Regeln, 325 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/1180x820/29-begriffe.png
```
```
390x844 · 01 einrichten · bestanden
  · Überschrift: "Cockpit einrichten"
  · Felder: Code, Passwort und Wiederholung: [1,2]
  axe: 22 Regeln, 51 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/390x844/01-einrichten.png
```
```
390x844 · 02 anmelden · bestanden
  · Einrichtungscode eingelöst, weiter auf: "/anmelden"
  · Überschrift: "Anmelden"
  · Passwortfeld: 1
  axe: 22 Regeln, 31 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/390x844/02-anmelden.png
```
```
390x844 · 03 start · bestanden
  · Angemeldet auf: "/"
  · Sitzungs-Cookie: ["__Host-biotop"]
  · Leitsatz: [4,"Jede Idee wird vollendet."]
  · Regler im Ring (alle fünf, Größe verborgen): 5
  · Gewählter Modus: ["Zu Ende entwickeln"]
  · Sichtbare Regler: ["Zeit","Tempo","Modell","Kasse"]
  · Quellen zum Einwerfen: ["Nur Text","Bild","Prototyp als ZIP"]
  · Schätzung für „Zu Ende entwickeln“: Schätzung (Kennzeichnung, Zeit/Kosten/Generationen): [true,3]
  · Schätzung für „Zu Ende entwickeln“: „Schätzung“ 1 h · 2,37 € · 3
  axe: 41 Regeln, 432 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 5 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/390x844/03-start.png
```
```
390x844 · 04 modus-weiterentwickeln · bestanden
  · Anfrage /api/schaetzung: modus: "evolve"
  · Gewählter Modus: ["Weiterentwickeln"]
  · Sichtbare Regler: ["Zeit","Tempo","Modell","Größe","Kasse"]
  · Quellen zum Einwerfen: ["Prototyp als ZIP","Repo-Link","Bestehendes Werk"]
  · Schätzung für „Weiterentwickeln“: Schätzung (Kennzeichnung, Zeit/Kosten/Generationen): [true,3]
  · Schätzung für „Weiterentwickeln“: „Schätzung“ 1 h · 3,00 € · 4
  axe: 41 Regeln, 476 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 5 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/390x844/04-modus-weiterentwickeln.png
```
```
390x844 · 05 regler-tastatur · bestanden
  · Zeit: Ausgangsstellung: "1 Stunde"
  · Zeit: ArrowRight → aria-valuetext: "2 Stunden"
  · Zeit: Anfrage minuten: "120"
  · Zeit: End → aria-valuetext: "72 Stunden"
  · Zeit: Anfrage minuten: "4320"
  · Zeit: Home → aria-valuetext: "15 Minuten"
  · Zeit: Anfrage minuten: "15"
  · Zeit: ArrowUp → aria-valuetext: "30 Minuten"
  · Zeit: Anfrage minuten: "30"
  · Tempo: Ausgangsstellung: "2 von 3: Ausgewogen"
  · Tempo: ArrowLeft → aria-valuetext: "1 von 3: Blitz"
  · Tempo: Anfrage tempo: "flash"
  · Tempo: End → aria-valuetext: "3 von 3: Gründlich"
  · Tempo: Anfrage tempo: "thorough"
  · Tempo: ArrowDown → aria-valuetext: "2 von 3: Ausgewogen"
  · Tempo: Anfrage tempo: "balanced"
  · Modell: Ausgangsstellung: "2 von 3: Stark"
  · Modell: ArrowRight → aria-valuetext: "3 von 3: Höchstes"
  · Modell: Anfrage modell: "maximum"
  · Modell: Home → aria-valuetext: "1 von 3: Leicht"
  · Modell: Anfrage modell: "light"
  · Größe: Ausgangsstellung: "2 von 4: Ausbau"
  · Größe: ArrowRight → aria-valuetext: "3 von 4: Umbau"
  · Größe: End → aria-valuetext: "4 von 4: Neuerfindung"
  · Größe: ArrowLeft → aria-valuetext: "3 von 4: Umbau"
  · Kasse: Ausgangsstellung: "5 Euro"
  · Kasse: ArrowRight → aria-valuetext: "6 Euro"
  · Kasse: Anfrage kasse: "6"
  · Kasse: End → aria-valuetext: "100 Euro"
  · Kasse: Anfrage kasse: "100"
  · Kasse: Home → aria-valuetext: "1 Euro"
  · Kasse: Anfrage kasse: "1"
  · Anzeige = letzte Antwort von /api/schaetzung (Generationen): "4"
  axe: 41 Regeln, 476 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 5 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/390x844/05-regler-tastatur.png
```
```
390x844 · 06 regler-ziehen · bestanden
  · Zeit: Ziehen von Stufe 2 auf 5 → aria-valuetext: "4 Stunden"
  · Zeit: Anfrage minuten: "240"
  · Tempo: Ziehen von Stufe 2 auf 3 → aria-valuetext: "3 von 3: Gründlich"
  · Tempo: Anfrage tempo: "thorough"
  · Modell: Ziehen von Stufe 1 auf 3 → aria-valuetext: "3 von 3: Höchstes"
  · Modell: Anfrage modell: "maximum"
  · Größe: Ziehen von Stufe 3 auf 1 → aria-valuetext: "1 von 4: Feinschliff"
  · Kasse: Ziehen von Stufe 1 auf 10 → aria-valuetext: "10 Euro"
  · Kasse: Anfrage kasse: "10"
  · Anzeige = letzte Antwort von /api/schaetzung (Generationen): "6"
  axe: 41 Regeln, 476 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 5 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/390x844/06-regler-ziehen.png
```
```
390x844 · 07 repo-link-einwerfen · bestanden
  · Vor dem Start: Schätzung (Kennzeichnung, Zeit/Kosten/Generationen): [true,3]
  · Vor dem Start: „Schätzung“ 3 h · 6,00 € · 6
  · Neues Werk angelegt und geöffnet: w-202611080256-ac8157
  · API: Modus und Zustand: ["evolve","queued"]
  · Werkseite: Platz in der Werkbank: true
  · Werkseite vor dem Lauf: Schätzung (Kennzeichnung, Zeit/Kosten/Generationen): [true,3]
  · Werkseite vor dem Lauf: „Schätzung“ 3 h · 6,00 € · 6
  · Ist vor dem Lauf: "Noch kein Ist: Das Werk läuft oder wartet."
  · API: Reglerstellung am Werk (wie gezogen): {"minutes":240,"pace":"thorough","tier":"maximum","size":"polish","budgetEur":10}
  · Warteschlange: Quelle: {"kind":"git","url":"https://github.com/beispiel/einkaufsliste"}
  axe: 32 Regeln, 457 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/390x844/07-repo-link-einwerfen.png
```
```
390x844 · 08 modus-zu-ende · bestanden
  · Anfrage /api/schaetzung: modus: "evolve"
  · Anfrage /api/schaetzung: modus: "complete"
  · Gewählter Modus: ["Zu Ende entwickeln"]
  · Sichtbare Regler: ["Zeit","Tempo","Modell","Kasse"]
  · Quellen zum Einwerfen: ["Nur Text","Bild","Prototyp als ZIP"]
  · Schätzung für „Zu Ende entwickeln“: Schätzung (Kennzeichnung, Zeit/Kosten/Generationen): [true,3]
  · Schätzung für „Zu Ende entwickeln“: „Schätzung“ 1 h · 2,37 € · 3
  axe: 41 Regeln, 447 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 5 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/390x844/08-modus-zu-ende.png
```
```
390x844 · 09 idee-einwerfen · bestanden
  · Vor dem Start: Schätzung (Kennzeichnung, Zeit/Kosten/Generationen): [true,3]
  · Vor dem Start: „Schätzung“ 1 h · 2,37 € · 3
  · Neues Werk angelegt und geöffnet: w-202611080256-441567
  · API: Modus und Zustand: ["complete","queued"]
  · Werkseite: Platz in der Werkbank: true
  · Werkseite vor dem Lauf: Schätzung (Kennzeichnung, Zeit/Kosten/Generationen): [true,3]
  · Werkseite vor dem Lauf: „Schätzung“ 1 h · 2,37 € · 3
  · Ist vor dem Lauf: "Noch kein Ist: Das Werk läuft oder wartet."
  · API: Idee: "Rezeptsammlung mit Wochenplan\nEinkaufszettel aus dem Plan."
  · API: Reglerstellung (Ausgangsstellung): {"minutes":60,"pace":"balanced","tier":"strong","size":null,"budgetEur":5}
  · Warteschlange: Quelle: {"kind":"text"}
  axe: 32 Regeln, 498 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/390x844/09-idee-einwerfen.png
```
```
390x844 · 10 prototyp-zip-einwerfen · bestanden
  · Vor dem Start: Schätzung (Kennzeichnung, Zeit/Kosten/Generationen): [true,3]
  · Vor dem Start: „Schätzung“ 1 h · 2,37 € · 3
  · Neues Werk angelegt und geöffnet: w-202611080256-4ee154
  · API: Modus und Zustand: ["complete","queued"]
  · Werkseite: Platz in der Werkbank: true
  · Werkseite vor dem Lauf: Schätzung (Kennzeichnung, Zeit/Kosten/Generationen): [true,3]
  · Werkseite vor dem Lauf: „Schätzung“ 1 h · 2,37 € · 3
  · Ist vor dem Lauf: "Noch kein Ist: Das Werk läuft oder wartet."
  · Warteschlange: Quelle: {"kind":"zip","path":"/tmp/biotop-d3-8SQFC8/eingang/w-202611080256-4ee154/ue3-prototyp.zip"}
  · ZIP im Eingang (2445 Bytes), SHA-256 gleich: "9d081b7967f82ba7d829713b77195ced436b09efadc40cf2a564cea552b5ff10"
  axe: 32 Regeln, 498 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/390x844/10-prototyp-zip-einwerfen.png
```
```
390x844 · 11 werkbank · bestanden
  · Werkbank: 4 laufende, dann 3 wartende in Reihenfolge: ["w-202611080256-ac8157","w-202611080256-441567","w-202611080256-4ee154"]
  · Umreihen: Status: 204
  · Datenbank: neue Reihenfolge: ["w-202611080256-441567","w-202611080256-ac8157","w-202611080256-4ee154"]
  · Werkbank zeigt sie: ["w-202611080256-441567","w-202611080256-ac8157","w-202611080256-4ee154"]
  axe: 30 Regeln, 180 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/390x844/11-werkbank.png
```
```
390x844 · 12 rueckfragen-antippen · bestanden
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
  axe: 32 Regeln, 606 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/390x844/12-rueckfragen-antippen.png
```
```
390x844 · 13 rueckfragen-senden · bestanden
  · Antwort gesendet: Status: 204
  · API: Entscheidung danach offen: null
  · Datenbank: Antworten: {"q1":"Alle in der WG","q2":"Auf Zuruf"}
  · Rückfragen-Karten nach dem Absenden verschwunden
  axe: 32 Regeln, 510 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/390x844/13-rueckfragen-senden.png
```
```
390x844 · 14 entwuerfe-ansehen · bestanden
  · Karten: 3
  · 3 Bilder aus /api/entwurf geladen: /api/entwurf/w-probe-entwuerfe/entwurf-ruhig.png (480 px), /api/entwurf/w-probe-entwuerfe/entwurf-kraeftig.png (480 px), /api/entwurf/w-probe-entwuerfe/entwurf-verspielt.png (480 px)
  · Nebeneinander: oben 432/432/432 px, links 32/146/260 px
  · Titel der Entwürfe: ["Ruhig","Kräftig","Verspielt"]
  axe: 35 Regeln, 592 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/390x844/14-entwuerfe-ansehen.png
```
```
390x844 · 15 entwurf-waehlen · bestanden
  · Antwort gesendet: Status: 204
  · API: Entscheidung danach offen: null
  · Datenbank: gewählt: "d2"
  axe: 32 Regeln, 515 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/390x844/15-entwurf-waehlen.png
```
```
390x844 · 16 richtungen-ansehen · bestanden
  · Richtungen als Karten: ["Teilen per Link","Offline zuerst","Vorlagen"]
  · Nutzen und Aufwand: ["Nutzen: hoch · Aufwand: 2 Generationen","Nutzen: mittel · Aufwand: 3 Generationen","Nutzen: mittel · Aufwand: 1 Generation"]
  axe: 33 Regeln, 567 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/390x844/16-richtungen-ansehen.png
```
```
390x844 · 17 richtung-waehlen · bestanden
  · Antwort gesendet: Status: 204
  · API: Entscheidung danach offen: null
  · Datenbank: gewählt: "r2"
  axe: 32 Regeln, 474 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/390x844/17-richtung-waehlen.png
```
```
390x844 · 18 generationen-zeitleiste · bestanden
  · Zeitleiste: Generationen: 3
  · Generation 1: Generation 1 · 2026-11-05 03:29 · Commit d822f9c · Kartenpunkte: 1, 4, 9 (3 von 10)
  · Generation 2: Generation 2 · 2026-11-05 03:49 · Commit 3bb5bb0 · Kartenpunkte: 1, 3, 4, 5, 9 (5 von 10)
  · Generation 3: Generation 3 · 2026-11-05 04:09 · Commit cc4fdc3 · Kartenpunkte: 1, 3, 4, 5, 7, 8, 9 (7 von 10)
  axe: 32 Regeln, 606 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/390x844/18-generationen-zeitleiste.png
```
```
390x844 · 19 karte-zehn-kacheln · bestanden
  · Zehn Kacheln: ["Punkt 1","Punkt 2","Punkt 3","Punkt 4","Punkt 5","Punkt 6","Punkt 7","Punkt 8","Punkt 9","Punkt 10"]
  · Zustände: ["erfuellt","erfuellt","erfuellt","erfuellt","erfuellt","offen","erfuellt","erfuellt","erfuellt","ausstehend"]
  · Namen der Kartenpunkte (4.4): ["Funktion","Schlussprüfung","Robustheit","Sicherheit","Tempo","Bedienung","Zugänglichkeit","Geräte","Saubere Bauweise","Philipps Urteil"]
  · Zustand auch als Zeichen und Wort: ["✓ erfüllt","✗ offen","… ausstehend"]
  axe: 32 Regeln, 606 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/390x844/19-karte-zehn-kacheln.png
```
```
390x844 · 20 schaetzung-und-ist · bestanden
  · Beendetes Werk: Schätzung (Kennzeichnung, Zeit/Kosten/Generationen): [true,3]
  · Beendetes Werk: „Schätzung“ 1 h 30 min · 3,00 € · 4
  · Schätzung (gespeichert vor dem Start): ["1 h 30 min","3,00 €","4"]
  · Ist: ["Ist","1 h 35 min","2,37 €","3"]
  · Ist neben der Schätzung: Schätzung bei x=32, y=1054.25; Ist bei x=203, y=1054.25
  axe: 32 Regeln, 606 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/390x844/20-schaetzung-und-ist.png
```
```
390x844 · 21 ergebnis-oeffnen · bestanden
  · Verweis: "/api/werke/w-probe-beendet/ergebnis"
  · Datei: "w-probe-beendet.tar.gz"
  · Inhalt gzip (426 Bytes): Kennung: "1f8b"
  · tar enthält das Werk-Repo (HEAD): ["w-probe-beendet/README.md","w-probe-beendet/app.js","w-probe-beendet/index.html","w-probe-beendet/style.css"]
  · Offline-Startseite des Service Workers bleibt HTML: "text/html; charset=utf-8"
  axe: 32 Regeln, 606 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/390x844/21-ergebnis-oeffnen.png
```
```
390x844 · 22 blinde-wahl-vorher · bestanden
  · Werkseite: Kacheln, Generationen, Bericht vor der Wahl: [0,0,0]
  · Werkseite: Kartenpunkte im Text vor der Wahl: 0
  · Fassungen: ["Fassung A","Fassung B"]
  · Karten: 2
  · 2 Bilder aus /api/entwurf geladen: /api/entwurf/w-probe-blinde-wahl/fassung-a.png (480 px), /api/entwurf/w-probe-blinde-wahl/fassung-b.png (480 px)
  · Nebeneinander: oben 407/407 px, links 16/203 px
  · Blinde Wahl: Kacheln, Generationen, Bericht vor der Wahl: [0,0,0]
  · Blinde Wahl: Kartenpunkte im Text vor der Wahl: 0
  axe: 31 Regeln, 135 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/390x844/22-blinde-wahl-vorher.png
```
```
390x844 · 23 blinde-wahl-nachher · bestanden
  · Antwort gesendet: Status: 204
  · API: Entscheidung danach offen: null
  · Datenbank: gewählt: "B"
  · Ergebnisse erst jetzt sichtbar: Kacheln: 10
  axe: 28 Regeln, 255 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/390x844/23-blinde-wahl-nachher.png
```
```
390x844 · 24 gedaechtnis · bestanden
  · Muster: ["Erst die Schnittstelle festlegen, dann bauen.","Kleine Schritte mit je einem Test halten den Kreislauf in Bewegung."]
  · Geschmacksgedächtnis: „Die letzten 1 von 1 Wahlen, neueste zuerst: - Entwurf: „Ruhig“ gewählt; nicht gewählt: „Kräftig“, „Verspielt“.“
  · API: Muster: 2
  axe: 28 Regeln, 121 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/390x844/24-gedaechtnis.png
```
```
390x844 · 25 pruefstand · bestanden
  · Versiegelte Aufgaben (Seite, API): ["Versiegelte Aufgaben: 0",0]
  · Ehrlicher Leerstand mit Grund: "Der Prüfstand entsteht in Phase F: versiegelte Aufgaben gemischter Art mit ihren Karten, für den Baumeister unlesbar. Bis dahin gibt es 0 Aufgaben und keine Messwerte."
  axe: 28 Regeln, 122 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/390x844/25-pruefstand.png
```
```
390x844 · 26 werk-null · bestanden
  · API: Fassungen und Messungen: [0,0]
  · Überschrift: "Werk Null"
  · Leerstand in Klartext: Noch keine Messung: Die Evolutionskurveⓘ entsteht, sobald Werk Null auf dem Prüfstandⓘ läuft (Phase F). | Werk Null beginnt in Phase F: Das Biotop verbessert sich dann auf einer Kopie, gemessen auf dem Prüfstand, und übernimmt eine neue Fassung nur mit Philipps Ja. Bis dahin gibt es keine Fassung zum Vergleichen und keine Evolutionskurve. | Den Rückwegⓘ auf eine frühere Fassung gibt es ab Phase F; eine Übernahmeⓘ geschieht nie ohne dein Ja. | Noch keine Fassung erfasst.
  axe: 28 Regeln, 163 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/390x844/26-werk-null.png
```
```
390x844 · 27 kasse · bestanden
  · Kassenzeilen (Buchungen der Probedaten): ["Phase A: 1,84 € von 3,00 €","Phase B: 11,20 € von 30,00 €","Phase C: 4,65 € von 15,00 €","Phase D: 2,37 € von 5,00 €","Phase F: 0,00 € von 25,00 €"]
  · Balken (value): [1.84,11.2,4.65,2.37,0]
  · Kontingent: "nicht ablesbar"
  axe: 28 Regeln, 153 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/390x844/27-kasse.png
```
```
390x844 · 28 einstellungen · bestanden
  · Feineinstellung: ein leeres Feld je Organ: ["","","",""]
  · Push einschalten angeboten: true
  · Werke gleichzeitig (Ausgang): "1"
  · Speichern: Status: 200
  · Datenbank: parallel und Feineinstellung: ["2","{\"sealmaster\":\"anthropic/claude-sonnet-5.5\"}"]
  · Hinweis zum Herstellergebot je Stufe des Modell-Reglers: 3
  · API danach: 3
  axe: 36 Regeln, 223 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/390x844/28-einstellungen.png
```
```
390x844 · 29 begriffe · bestanden
  · Begriffe mit Klartext (Tafel src/cockpit/klartext.ts): ["Werk","Probewerk","Werk Null","Generation","Schwarm","Siegel","Siegelmeister","Kammer","Gedächtnis","Geschmacksgedächtnis","Prüfstand","Singularität","Ehrliche Grenze","überangepasst","Karte","Kartenpunkt","Eichung","Schlussprüfung","Bestandsschutz","Bestandstest","Stufe","Richtung","Landkarte","Denker","Baumeister","Prüfer","Ankläger","Kasse","Evolutionskurve","Übernahme","Rückweg","Blinde Wahl","Grundlinie","Herstellergebot","Werkbank","Kontingent"]
  · Jeder Begriff hat einen Satz: 36 Sätze
  axe: 26 Regeln, 325 Knoten, 0 serious, 0 critical, 0 leichter
  Regler: 0 · Bildlauf: 0 px · Konsolenfehler: 0
  Bild: /srv/biotop/belege/phase-d/bilder/390x844/29-begriffe.png
```
