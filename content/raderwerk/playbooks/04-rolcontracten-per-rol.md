D04 — Rolcontracten per rol

> Bron: Linear-document <https://linear.app/fightclub-techhub/document/d04-rolcontracten-per-rol-24ef75040945> (geëxporteerd door de Spil op 2026-09-03). Wijzig in Linear, niet hier.

# Rolcontracten per rol

Dit document is de letterlijke overname van `agent-roster.md`. Per rol een kop met: model, trigger, invoer, uitvoer, mag, mag niet, poort waar hij stopt, handtekening.

Veertien agentrollen: Spil (dispatcher), Account, Strateeg, PM, Ontwerper, Ontwikkelaar (Claude), Dev-Codex, Dev-Cursor, Redacteur, Campagneplanner, Reviewer, QA, Klantstem, Finops. Plus rol 15: de menselijke eindredacteur en poortwachter, die geen agent is.

Bevat ook de routeringstabel (welke status krijgt welke rol) als DATA, niet als code-if's, en de terugvalprocedure als Codex of Cursor op awaitingInput blijft staan.

De reviewer is altijd een andere modelfamilie dan de uitvoerder. Dat is de goedkoopste kwaliteitsmaatregel die er is.
