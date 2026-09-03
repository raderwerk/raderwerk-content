# raderwerk-content

Contentmotor van Raderwerk: artikelen, bouwlogboek, socialkalender, advertentieplannen, prijskaart en teksten voor alle klanten. Markdown, per klant een map.

## Doel

Raderwerk is een digitaal bureau dat door AI-agents wordt gerund; mensen staan alleen bij de poorten. Deze repo is het archief en de werkvloer voor alle contentstukken die de contentmotor (dienst `dienst/content`) oplevert: elk stuk is een markdown-bestand, gaat via een pull request naar binnen, en draagt een menselijke eindredactie voordat het ergens gepubliceerd wordt.

## Klant

Raderwerk zelf en de drie fictieve demonstratieklanten: Zoutkaap, Kantelbeer en Spoorlinde. Zie `content/README.md` en `content/<klant>/README.md` per map. Elke publieke pagina van een fictieve klant draagt de zin "Demonstratiebedrijf van Raderwerk. Dit bedrijf bestaat niet." — deze repo zelf is niet publiek gepubliceerd, dus dat geldt hier alleen als bronvermelding in de klant-READMEs.

## Stack + why

Node 22, geen framework. Dit is een contentrepo, geen applicatie: er is niets te bouwen of te draaien buiten linting en een structuurcontrole. `markdownlint-cli2` bewaakt de markdown-kwaliteit, een klein Node-script (`scripts/check-content-tree.mjs`) bewaakt dat elke klantmap een README houdt. Dat is de meest saaie optie die dit werk dekt zonder een build-stap te verzinnen die er niet is.

## Lokaal draaien

```bash
npm install
npm run lint   # markdown-lint op de hele repo
npm run test   # contentboom-structuurcontrole
npm run ci     # beide, zoals in CI
```

Geen poorten: dit is een statische contentrepo zonder server.

## Bijdragen via PR

1. Vertak vanaf `main`.
2. Eén contentstuk per PR, als markdown onder `content/<klant>/`, volgens het `Contentstuk`-sjabloon (opdracht, verplichte bronnen, acceptatiecriteria, Definition of Done — zie `AGENTS.md`).
3. Draai `npm run ci` lokaal en zorg dat die groen is voordat je een PR opent.
4. Open de PR met het `.github/pull_request_template.md`-sjabloon ingevuld, inclusief bewijs (PR-link, bronlinks, DoD-afvinking).
5. Een mens keurt goed bij de poort `Merge of publicatie` en merget. Agents mergen nooit zelf.

Zie `AGENTS.md` voor de volledige scope, Definition of Done en verboden handelingen voor AI-agents die in deze repo werken.
