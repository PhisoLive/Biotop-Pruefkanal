| Gegenprobe | Regel | Prüfung | Hook | Befund benannt |
|---|---|---|---|---|
| funktion-zu-lang | Funktion ≤ 40 Zeilen | lint | abgewiesen | ja |
| komplexitaet | Komplexität ≤ 10 | lint | abgewiesen | ja |
| doppelung | Doppelungen ≤ 2 % | doppelungen | abgewiesen | ja |
| zyklus | 0 Abhängigkeitszyklen | architektur | abgewiesen | ja |
| any | 0 × any | lint | abgewiesen | ja |
| ungenutzter-export | 0 ungenutzte Exporte | ungenutzt | abgewiesen | ja |
| architektur-siegelpfad | nur das Siegel-Modul kennt Siegelpfade | architektur | abgewiesen | ja |
| architektur-claude | nur der Baumeister startet Claude Code | lint | abgewiesen | ja |
| inhaltsleerer-test | Mutationswert ≥ 70 % (Mutant überlebt) | mutation | abgewiesen | ja |
| datei-zu-lang | Datei ≤ 300 Zeilen | lint | abgewiesen | ja |
| parameter | ≤ 4 Parameter | lint | abgewiesen | ja |
| typfehler | Typprüfung ohne Fehler | typen | abgewiesen | ja |
| format | Formatierer ohne Befund | format | abgewiesen | ja |
| ungenutzte-datei | 0 ungenutzte Dateien | ungenutzt | abgewiesen | ja |
| ungenutzte-abhaengigkeit | 0 ungenutzte Abhängigkeiten | ungenutzt | abgewiesen | ja |
| abdeckung | Kern ≥ 90 % Zeilen | tests | abgewiesen | ja |
| sicherheitsbefund | 0 hohe oder kritische Befunde | audit | abgewiesen | ja |
| geheimnis | 0 Geheimnisse | geheimnisse | abgewiesen | ja |

Kontrolle (harmloser Commit geht durch): ja
Gesamt: alle Verstöße abgewiesen
