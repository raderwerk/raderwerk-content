# D06 — Noodstop, hartslag en incidentprocedure

> Bron: Linear-document https://linear.app/fightclub-techhub/document/d06-noodstop-hartslag-en-incidentprocedure-73c65f6bad69 (geëxporteerd door de Spil op 2026-09-03). Wijzig in Linear, niet hier.

# Noodstop, hartslag en incidentprocedure

## Noodrem

Een label, drie schaalniveaus. `schakelaar/pauze-alles` op WV-1 stopt de hele werkplaats binnen een pollcyclus van 60 seconden. `schakelaar/pauze` op een projectbeschrijving-issue stopt dat project. `schakelaar/pauze` op een gewoon issue stopt dat issue.

Bij een globale noodstop: stoppen met claimen, elke lopende run een stopsignaal, elk run/bezet terug op run/wachtrij, op elk geraakt issue een afbreekcomment, en op WV-1 een comment met het aantal afgebroken runs, de verstreken tijd sinds de flip en de kosten van de afgebroken runs. Spil mag de noodstop aanzetten maar nooit uitzetten.

## Een lopende Codex- of Cursor-sessie stoppen

Dat gaat niet via de API maar met de stopknop in de agent-sessie in de Linear-UI. Doe dat handmatig; het label stopt alleen wat Spil zelf start.

## Hartslag

Elke 15e pollcyclus schrijft Spil een hartslagcomment op WV-1 en werkt de tellers in de omschrijving bij. Een tweede, minimale cron in een ANDER proces draait elke 10 minuten en doet precies een ding: kijken of de laatste hartslag ouder is dan 30 minuten. Zo ja: `schakelaar/motor-dood` op WV-1 en een comment. Meer niet.

## Maandelijkse test

De noodstop wordt maandelijks getest met een stopwatch. Het bewijs (tijdstempel van de eerste stop) komt op WV-1.

## Incident

Gebruik het Incident-sjabloon. Herstel loopt altijd via de normale poort; een agent rolt nooit terug en deployt nooit.
