# D12 — Eerlijkheidsdocument

> Bron: Linear-document https://linear.app/fightclub-techhub/document/d12-eerlijkheidsdocument-ee6833d1f01d (geëxporteerd door de Spil op 2026-09-03). Wijzig in Linear, niet hier.

# Eerlijkheidsdocument

## Echt

De Linear-mutaties. De dispatcher. De repo's, de CI, de pull requests, de reviews. De code. De sites op preview. De ontwerpen. De teksten. De campagne- en socialplannen. De Shopify development store. De ERP-nabootsing als draaiende service met OpenAPI. De QA-runs met bewijs per criterium. Het kostenboek. De poortpassages en wie ze deed.

## Gesimuleerd

De opdrachtgevers. Zoutkaap, Kantelbeer en Spoorlinde bestaan niet: bedrijf, contactpersoon, briefing, akkoord en feedback leven in Linear-comments en -documenten. De klantstem is een model met een persona, en haar oordeel is niet gezaghebbend. Offertes en facturen zijn documenten, geen verzonden post. Er is geen betaling en geen advertentiebudget dat echt wordt uitgegeven. Er is geen deploy naar een klantdomein.

## Geregisseerd

Precies een stap: de afkeurlus op Zoutkaap-issue "Orderdoorgifte shop naar ERP, met retry en idempotentie". Dat issue draagt het label `geënsceneerd` en zegt het in zijn eerste regel. Niets anders in de hele werkplaats mag dat label dragen. Een geregisseerde stap die niet als zodanig gelabeld is, is precies de mock waar dit project vanaf wil.

## Waar het bewijs zwak is

Zolang de machine met een menselijke API-sleutel schrijft, is het onderscheid tussen mens en machine administratief en niet native. Zolang dat zo is, komt het bewijs uit het handelingenlogboek en het poortcontrolescript en niet uit Linear zelf. Zodra de eigen OAuth-app met actor=app draait, is het onderscheid native ([User.app](<http://User.app>)) en vervalt dit voorbehoud. Zeg dit hardop in de demo.

Verder: op het Free-plan is elke Linear-gebruiker admin, dus geen enkel recht kan een poort tegenhouden. De echte handhaving zit in GitHub-rulesets op publieke repo's zonder bypass voor de agent-tokens, plus het feit dat de mens de merge zelf uitvoert.

## Wat structureel incompleet is

De unit economics, zolang Codex en Cursor buiten het kostenboek om afrekenen. En de wachthond: die controleert de dispatcher, maar wie de wachthond controleert is niet opgelost.

## De hoofdvraag

Kan een bureau als dit echt draaien, en waar breekt het? Antwoord op basis van de gemeten cijfers, niet op basis van de indruk die het bord maakt.
