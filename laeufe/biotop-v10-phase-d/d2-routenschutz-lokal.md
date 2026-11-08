# D-2 lokal: Routenschutz über alle Routen der Tafel

Lauf 2026-11-08T02:39:56.975Z bis 2026-11-08T02:40:08.049Z · Server auf 127.0.0.1 (HTTP, Port 0), echte Zusammensetzung, Wegwerf-Datenbank im mkdtemp-Ordner
Befehl: `node scripts/cockpit-routenschutz.ts`

**Ergebnis: BESTANDEN** · Gegenprobe wirksam: GET /api/kasse an der Tafel gemeldet, am Server gemeldet; andere Befunde: 0

Soll öffentlich (Entwurf Phase D, dazu was Anmelden und Einrichten zum Zeichnen und Absenden brauchen): GET /anmelden, GET /einrichten, GET /manifest.webmanifest, GET /sw.js, GET /symbole/*, GET /app/*, POST /api/anmelden, POST /api/einrichten. Alles andere unter /api/: 401 „Anmeldung nötig.“; jede andere Seite: 303 nach /anmelden. Schreibende Aufrufe tragen die passende Herkunft, damit allein die Sitzung entscheidet.

Nicht hier: „lauscht nur auf der Tailscale-Adresse“ (offene Ports, Aufruf über öffentliche und Tailscale-Adresse) wartet auf Halt H3.

## Routentafel des Servers

Routen in der Tafel: 40 (öffentlich 8, Seiten 10, Schnittstellen 22) · Aufrufe ohne Anmeldung: 44 · mit Anmeldung: 40
Datenbank vor und nach den Aufrufen ohne Anmeldung: gleich

| Route | Tafel | Aufruf | ohne Anmeldung Soll | Ist | mit Anmeldung Soll | Ist | Ergebnis |
| --- | --- | --- | --- | --- | --- | --- | --- |
| GET / | page | `GET /` | 303 | 303 → /anmelden | 200 | 200 | bestanden |
| GET /werk/:id | page | `GET /werk/w-probe-beendet` | 303 | 303 → /anmelden | 200 | 200 | bestanden |
| GET /werkbank | page | `GET /werkbank` | 303 | 303 → /anmelden | 200 | 200 | bestanden |
| GET /blinde-wahl/:id | page | `GET /blinde-wahl/w-probe-blinde-wahl` | 303 | 303 → /anmelden | 200 | 200 | bestanden |
| GET /gedaechtnis | page | `GET /gedaechtnis` | 303 | 303 → /anmelden | 200 | 200 | bestanden |
| GET /pruefstand | page | `GET /pruefstand` | 303 | 303 → /anmelden | 200 | 200 | bestanden |
| GET /werk-null | page | `GET /werk-null` | 303 | 303 → /anmelden | 200 | 200 | bestanden |
| GET /kasse | page | `GET /kasse` | 303 | 303 → /anmelden | 200 | 200 | bestanden |
| GET /einstellungen | page | `GET /einstellungen` | 303 | 303 → /anmelden | 200 | 200 | bestanden |
| GET /begriffe | page | `GET /begriffe` | 303 | 303 → /anmelden | 200 | 200 | bestanden |
| GET /anmelden | public | `GET /anmelden` | 200 | 200 | 200 | 200 | bestanden |
| GET /einrichten | public | `GET /einrichten` | 200 | 200 | 200 | 200 | bestanden |
| GET /manifest.webmanifest | public | `GET /manifest.webmanifest` | 200 | 200 | 200 | 200 | bestanden |
| GET /sw.js | public | `GET /sw.js` | 200 | 200 | 200 | 200 | bestanden |
| GET /symbole/* | public | `GET /symbole/biotop-192.png` | 200 | 200 | 200 | 200 | bestanden |
| GET /app/* | public | `GET /app/main.js` | 200 | 200 | 200 | 200 | bestanden |
| POST /api/anmelden | public | `POST /api/anmelden` | 204 | 204 | 204 | 204 | bestanden |
| POST /api/einrichten | public | `POST /api/einrichten` | 204 | 204 | 204 | 204 | bestanden |
| POST /api/abmelden | api | `POST /api/abmelden` | 401 | 401 | 204 | 204 | bestanden |
| GET /api/start | api | `GET /api/start` | 401 | 401 | 200 | 200 | bestanden |
| GET /api/schaetzung | api | `GET /api/schaetzung?modus=complete&tempo=balanced&modell=strong&minuten=60&kasse=5` | 401 | 401 | 200 | 200 | bestanden |
| POST /api/werke | api | `POST /api/werke` | 401 | 401 | 201 | 201 | bestanden |
| GET /api/werke | api | `GET /api/werke` | 401 | 401 | 200 | 200 | bestanden |
| GET /api/werke/:id | api | `GET /api/werke/w-probe-beendet` | 401 | 401 | 200 | 200 | bestanden |
| GET /api/werke/:id/ergebnis | api | `GET /api/werke/w-probe-beendet/ergebnis` | 401 | 401 | 200 | 200 | bestanden |
| POST /api/werke/:id/entscheidung | api | `POST /api/werke/w-probe-rueckfragen/entscheidung` | 401 | 401 | 204 | 204 | bestanden |
| POST /api/werke/:id/abbrechen | api | `POST /api/werke/w-probe-richtungen/abbrechen` | 401 | 401 | 202 | 202 | bestanden |
| POST /api/werkbank/reihenfolge | api | `POST /api/werkbank/reihenfolge` | 401 | 401 | 204 | 204 | bestanden |
| GET /api/entwurf/:work/:name | api | `GET /api/entwurf/w-probe-entwuerfe/entwurf-ruhig.png` | 401 | 401 | 200 | 200 | bestanden |
| GET /api/gedaechtnis | api | `GET /api/gedaechtnis` | 401 | 401 | 200 | 200 | bestanden |
| GET /api/pruefstand | api | `GET /api/pruefstand` | 401 | 401 | 200 | 200 | bestanden |
| GET /api/werk-null | api | `GET /api/werk-null` | 401 | 401 | 200 | 200 | bestanden |
| GET /api/kasse | api | `GET /api/kasse` | 401 | 401 | 200 | 200 | bestanden |
| GET /api/voreinstellungen | api | `GET /api/voreinstellungen` | 401 | 401 | 200 | 200 | bestanden |
| POST /api/voreinstellungen | api | `POST /api/voreinstellungen` | 401 | 401 | 204 | 204 | bestanden |
| GET /api/einstellungen | api | `GET /api/einstellungen` | 401 | 401 | 200 | 200 | bestanden |
| POST /api/einstellungen | api | `POST /api/einstellungen` | 401 | 401 | 200 | 200 | bestanden |
| GET /api/begriffe | api | `GET /api/begriffe` | 401 | 401 | 200 | 200 | bestanden |
| POST /api/push/abo | api | `POST /api/push/abo` | 401 | 401 | 204 | 204 | bestanden |
| DELETE /api/push/abo | api | `DELETE /api/push/abo` | 401 | 401 | 204 | 204 | bestanden |
| GET /gibt-es-nicht (nicht in der Tafel) | – | `GET /gibt-es-nicht` | 303 | 303 → /anmelden | – | – | bestanden |
| GET /api/gibt-es-nicht (nicht in der Tafel) | – | `GET /api/gibt-es-nicht` | 401 | 401 | – | – | bestanden |
| DELETE /api/start (nicht in der Tafel) | – | `DELETE /api/start` | 401 | 401 | – | – | bestanden |
| POST /werkbank (nicht in der Tafel) | – | `POST /werkbank` | 303 | 303 → /anmelden | – | – | bestanden |

Befunde: 0

## Gegenprobe: Kopie der Tafel, GET /api/kasse als „public“ markiert

Routen in der Tafel: 40 (öffentlich 9, Seiten 10, Schnittstellen 21) · Aufrufe ohne Anmeldung: 44 · mit Anmeldung: 40
Datenbank vor und nach den Aufrufen ohne Anmeldung: gleich

| Route | Tafel | Aufruf | ohne Anmeldung Soll | Ist | mit Anmeldung Soll | Ist | Ergebnis |
| --- | --- | --- | --- | --- | --- | --- | --- |
| GET / | page | `GET /` | 303 | 303 → /anmelden | 200 | 200 | bestanden |
| GET /werk/:id | page | `GET /werk/w-probe-beendet` | 303 | 303 → /anmelden | 200 | 200 | bestanden |
| GET /werkbank | page | `GET /werkbank` | 303 | 303 → /anmelden | 200 | 200 | bestanden |
| GET /blinde-wahl/:id | page | `GET /blinde-wahl/w-probe-blinde-wahl` | 303 | 303 → /anmelden | 200 | 200 | bestanden |
| GET /gedaechtnis | page | `GET /gedaechtnis` | 303 | 303 → /anmelden | 200 | 200 | bestanden |
| GET /pruefstand | page | `GET /pruefstand` | 303 | 303 → /anmelden | 200 | 200 | bestanden |
| GET /werk-null | page | `GET /werk-null` | 303 | 303 → /anmelden | 200 | 200 | bestanden |
| GET /kasse | page | `GET /kasse` | 303 | 303 → /anmelden | 200 | 200 | bestanden |
| GET /einstellungen | page | `GET /einstellungen` | 303 | 303 → /anmelden | 200 | 200 | bestanden |
| GET /begriffe | page | `GET /begriffe` | 303 | 303 → /anmelden | 200 | 200 | bestanden |
| GET /anmelden | public | `GET /anmelden` | 200 | 200 | 200 | 200 | bestanden |
| GET /einrichten | public | `GET /einrichten` | 200 | 200 | 200 | 200 | bestanden |
| GET /manifest.webmanifest | public | `GET /manifest.webmanifest` | 200 | 200 | 200 | 200 | bestanden |
| GET /sw.js | public | `GET /sw.js` | 200 | 200 | 200 | 200 | bestanden |
| GET /symbole/* | public | `GET /symbole/biotop-192.png` | 200 | 200 | 200 | 200 | bestanden |
| GET /app/* | public | `GET /app/main.js` | 200 | 200 | 200 | 200 | bestanden |
| POST /api/anmelden | public | `POST /api/anmelden` | 204 | 204 | 204 | 204 | bestanden |
| POST /api/einrichten | public | `POST /api/einrichten` | 204 | 204 | 204 | 204 | bestanden |
| POST /api/abmelden | api | `POST /api/abmelden` | 401 | 401 | 204 | 204 | bestanden |
| GET /api/start | api | `GET /api/start` | 401 | 401 | 200 | 200 | bestanden |
| GET /api/schaetzung | api | `GET /api/schaetzung?modus=complete&tempo=balanced&modell=strong&minuten=60&kasse=5` | 401 | 401 | 200 | 200 | bestanden |
| POST /api/werke | api | `POST /api/werke` | 401 | 401 | 201 | 201 | bestanden |
| GET /api/werke | api | `GET /api/werke` | 401 | 401 | 200 | 200 | bestanden |
| GET /api/werke/:id | api | `GET /api/werke/w-probe-beendet` | 401 | 401 | 200 | 200 | bestanden |
| GET /api/werke/:id/ergebnis | api | `GET /api/werke/w-probe-beendet/ergebnis` | 401 | 401 | 200 | 200 | bestanden |
| POST /api/werke/:id/entscheidung | api | `POST /api/werke/w-probe-rueckfragen/entscheidung` | 401 | 401 | 204 | 204 | bestanden |
| POST /api/werke/:id/abbrechen | api | `POST /api/werke/w-probe-richtungen/abbrechen` | 401 | 401 | 202 | 202 | bestanden |
| POST /api/werkbank/reihenfolge | api | `POST /api/werkbank/reihenfolge` | 401 | 401 | 204 | 204 | bestanden |
| GET /api/entwurf/:work/:name | api | `GET /api/entwurf/w-probe-entwuerfe/entwurf-ruhig.png` | 401 | 401 | 200 | 200 | bestanden |
| GET /api/gedaechtnis | api | `GET /api/gedaechtnis` | 401 | 401 | 200 | 200 | bestanden |
| GET /api/pruefstand | api | `GET /api/pruefstand` | 401 | 401 | 200 | 200 | bestanden |
| GET /api/werk-null | api | `GET /api/werk-null` | 401 | 401 | 200 | 200 | bestanden |
| GET /api/kasse | public | `GET /api/kasse` | 401 | 200 | 200 | 200 | **Status 200 statt 401, Inhalt „{"phases":[{"phase":"A","spentEur":1.84,"limitEur":3},{"phase":"B","spentEur":11“** |
| GET /api/voreinstellungen | api | `GET /api/voreinstellungen` | 401 | 401 | 200 | 200 | bestanden |
| POST /api/voreinstellungen | api | `POST /api/voreinstellungen` | 401 | 401 | 204 | 204 | bestanden |
| GET /api/einstellungen | api | `GET /api/einstellungen` | 401 | 401 | 200 | 200 | bestanden |
| POST /api/einstellungen | api | `POST /api/einstellungen` | 401 | 401 | 200 | 200 | bestanden |
| GET /api/begriffe | api | `GET /api/begriffe` | 401 | 401 | 200 | 200 | bestanden |
| POST /api/push/abo | api | `POST /api/push/abo` | 401 | 401 | 204 | 204 | bestanden |
| DELETE /api/push/abo | api | `DELETE /api/push/abo` | 401 | 401 | 204 | 204 | bestanden |
| GET /gibt-es-nicht (nicht in der Tafel) | – | `GET /gibt-es-nicht` | 303 | 303 → /anmelden | – | – | bestanden |
| GET /api/gibt-es-nicht (nicht in der Tafel) | – | `GET /api/gibt-es-nicht` | 401 | 401 | – | – | bestanden |
| DELETE /api/start (nicht in der Tafel) | – | `DELETE /api/start` | 401 | 401 | – | – | bestanden |
| POST /werkbank (nicht in der Tafel) | – | `POST /werkbank` | 303 | 303 → /anmelden | – | – | bestanden |

Befunde: 2
- Tafel: GET /api/kasse: Tafel „public“, Soll „api“
- GET /api/kasse ohne Anmeldung: Status 200 statt 401, Inhalt „{"phases":[{"phase":"A","spentEur":1.84,"limitEur":3},{"phase":"B","spentEur":11“

## Ausgabe

```
Routentafel des Servers: 44 Aufrufe ohne, 40 mit Anmeldung, Befunde 0
Gegenprobe: Kopie der Tafel, GET /api/kasse als „public“ markiert: 44 Aufrufe ohne, 40 mit Anmeldung, Befunde 2
  - Tafel: GET /api/kasse: Tafel „public“, Soll „api“
  - GET /api/kasse ohne Anmeldung: Status 200 statt 401, Inhalt „{"phases":[{"phase":"A","spentEur":1.84,"limitEur":3},{"phase":"B","spentEur":11“
Gegenprobe wirksam: GET /api/kasse an der Tafel gemeldet, am Server gemeldet; andere Befunde: 0
Gesamt: BESTANDEN
```
