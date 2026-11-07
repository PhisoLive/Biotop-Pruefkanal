# Biotop – Prüfkanal

Öffentlicher Kanal für Berichte, Rohausgaben und Bildschirmfotos des Biotops (INFINITE EVOLUTION, Fassung 10). Hier liegt kein Werk-Code, kein Schlüssel, keine Serveradresse und keine personenbezogene Angabe außer Philipps Vornamen.

Je Phase ein Ordner `laeufe/biotop-v10-phase-<x>/` mit:
- `BERICHT-nn.md` – Phase, Datum, Tor-Tafel (Soll, Ist, Belegdatei), Kasse, Entscheidungsliste, Abweichungen
- `DATEIEN-nn.txt` – jede Datei mit Bytes und SHA-256
- `PRUEFSUMME-ORDNER-nn.txt` – Prüfsumme des Ordners
- Rohausgaben aller Torprüfungen, Bildschirmfotos

Dateien werden nie überschrieben; jede neue Fassung bekommt die nächste Nummer. Vor jedem Push läuft ein Geheimnis- und Adressscan mit Gegenprobe.
