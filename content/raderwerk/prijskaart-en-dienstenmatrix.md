---
titel: "Prijskaart en dienstenmatrix S/M/L"
klant: raderwerk
issue: WV-210
soort: onderzoek
dienst: strategie
status: concept
zoekwoord: prijskaart
metatitel: "Prijskaart Raderwerk: drie pakketten S, M en L"
metabeschrijving: "De prijskaart van Raderwerk: drie pakketten met scope, doorlooptijd en prijs, onderbouwd met de kostprijs per t-shirtmaat en de supervisieminuten."
ai-vermelding: "Geschreven door een AI-agent (claude-opus-5) in de rol Ontwikkelaar, run 0efc45. Menselijke eindredactie is nog niet uitgevoerd; zolang dat zo is blijft deze vermelding staan (D09)."
---

# Prijskaart en dienstenmatrix S/M/L

Raderwerk rekent per issue, niet per uur. Deze prijskaart zet naast elk pakket wat het bureau ervoor doet, hoe lang de machine erover doet, wat het kost om te maken en wat er nadrukkelijk buiten valt. De cijfers komen uit het [Kostenboek (D05)](https://linear.app/fightclub-techhub/document/d05-kostenboek-1f19d9940f23) en uit de schattingsschaal in de werkplaatsspecificatie; waar een getal nog niet gemeten is, staat dat erbij in plaats van dat het wordt afgerond naar iets dat beter oogt.

## Wat deze prijskaart wel en niet is

De pakketten hieronder zijn een concept voor interne beoordeling. Er is geen offerte verstuurd en er is geen klant die deze bedragen heeft gezien. De sectie "Onderbouwing van de prijs" is een bureau-sectie: die gaat in deze vorm niet naar een klant, omdat de marge er direct uit af te trekken is. De marge zelf staat apart in de [interne margebijlage bij deze prijskaart](./prijskaart-interne-bijlage-marge.md).

Twee getallen sturen alles wat hieronder staat: het aantal menselijke supervisieminuten en het percentage werk dat in één keer goed is (D05, slot). De modelkosten zijn een bijzaak van een paar tientjes per issue. De supervisie tegen een echt uurtarief is de werkelijke kostenpost.

## De drie pakketten

| Pakket | Omvang | Scope | Agent-wandklok | Richtprijs excl. btw |
| --- | --- | --- | --- | --- |
| Klein | S | Eén afgebakend issue binnen één dienstlijn, met verplichte kruisreview | ≤ 1 uur | € 750 |
| Middel | M | Eén issue met kruisreview plus een expliciete bewijsregel per acceptatiecriterium | ≤ 3 uur | € 2.500 |
| Groot | L | Werk dat verplicht in mijlpalen is opgeknipt, met twee reviewers uit verschillende modelfamilies | ≤ 8 uur | € 7.500 |

Richtprijs en wandkloktijd komen ongewijzigd uit de schattingsschaal in `hq/design/linear-workspace-spec.md`, sectie 2.3. Die schaal is tegelijk omvang, verwachte doorlooptijd en autonomiegrens.

### Klein (S)

Eén issue dat een senior mens in ongeveer een halfuur af zou hebben. Denk aan een contentstuk of een afgebakende bugfix. Eén agent voert uit, een agent uit een andere modelfamilie reviewt, en een mens merget bij de poort.

**Doorlooptijd.** De machine is binnen een uur klaar. De kalendertijd hangt op het poortmoment: de enige vastgelegde wachtnorm is de reactietijd van 32 uur voor niet-kritiek werk. De gemeten mediane wachttijd bij een poort staat nog niet in het kostenboek; sectie 3 van D05 is nog leeg.

**Wat er niet in zit bij Klein.** Geen tweede reviewer en geen opsplitsing in mijlpalen. Incidentafhandeling met een reactietijd van vier uur valt er ook buiten: dat is een aparte kritieke lijn tegen € 175 per uur.

### Middel (M)

Eén issue met een acceptatiecriterium dat per regel met bewijs wordt afgevinkt. Denk aan een feature met een koppeling, of een campagneplan met een meetplan erbij.

**Doorlooptijd.** De machine is binnen drie uur klaar. Er zijn twee menselijke aanraakpunten: de agentreview passeert vanzelf, de merge niet. Ook hier geldt de wachtnorm van 32 uur per poortmoment en ontbreekt de gemeten mediaan.

**Wat er niet in zit bij Middel.** Werk dat de acht uur wandklok van een L overschrijdt gaat eerst terug naar de scoping. Er zit geen deploy naar een klantdomein in en geen advertentiebudget dat daadwerkelijk wordt uitgegeven.

### Groot (L)

Werk dat niet in één run past en daarom verplicht in mijlpalen gaat, met twee reviewers die elkaars oordeel niet zien. Denk aan een site of een middleware-koppeling.

**Doorlooptijd.** Acht uur agent-wandklok, verspreid over de mijlpalen. Voor vergelijkbaar werk in mensenhanden loopt de kalendertijd in het interne urenonderzoek op tot twee à vier weken (`hq/research/gap-04-unit-economics-inputs.md`, sectie 2.2, twee waarnemingen). Dat is een kleine steekproef en geen norm.

**Wat er niet in zit bij Groot.** Geen XL. Werk boven deze omvang wordt niet uitgevoerd maar teruggestuurd om opgeknipt te worden; de Spil weigert een XL te routeren. Verder geen verwerking van echte persoonsgegevens en geen garantie op zero-dataretentie: het model dat oordeel en taal doet vereist dertig dagen dataretentie (D09).

## Onderbouwing van de prijs

Deze sectie hoort bij de interne beoordeling en gaat in deze vorm niet mee naar een klant.

Uurtarief voor supervisie: **€ 125 per uur excl. btw**. Dat is het tarief dat in drie interne documenten uit 2026 terugkomt voor development en growth, en het tarief voor niet-kritieke support. In het meest recente van die documenten staat het er nog bij als "nog te bevestigen" (`hq/research/gap-04-unit-economics-inputs.md`, sectie 2.1). Zolang die bevestiging ontbreekt, is € 125 een aanname en geen vastgesteld tarief.

Supervisieminuten per maat zijn een aanname tot de droogloopruns ze meten: S 5 tot 10 minuten, M 15 tot 30 minuten, L 45 minuten of meer (dezelfde bron, sectie 4).

| Maat | Modelkosten (verwachting) | Modelkosten (gemodelleerde band) | Supervisie | Supervisiekosten à € 125/u | Kostprijs |
| --- | --- | --- | --- | --- | --- |
| S | ~ € 3 | € 3 – € 11 | 5 – 10 min | € 10,42 – € 20,83 | € 13,42 – € 31,83 |
| M | ~ € 10 | € 9 – € 30 | 15 – 30 min | € 31,25 – € 62,50 | € 41,25 – € 92,50 |
| L | ~ € 30 | € 22 – € 86 | 45 – 90 min | € 93,75 – € 187,50 | € 123,75 – € 273,50 |

De kolom "Modelkosten (verwachting)" is de verwachtingswaarde per t-shirtmaat uit de schattingsschaal, die daar expliciet als verwachtingswaarde voor het kostenboek is neergezet. De gemodelleerde band komt uit het interne unit-economicsonderzoek en is gerekend op lijstprijs bij een koers van 1 EUR = 1,1590 USD (ECB-referentiekoers van 2026-09-01). Die band is gemodelleerd, niet gemeten: sectie 2 van het kostenboek, waar de runregels horen te staan, is nog leeg. De verwachtingswaarde ligt in alle drie de maten aan de onderkant van de gemodelleerde band.

De laatste kolom is de kostprijs per pakket: modelkosten plus supervisie. De ondergrens rekent met de verwachtingswaarde en de laagste supervisieschatting, de bovengrens met de bovenkant van de gemodelleerde band en de hoogste supervisieschatting.

## Strippenkaart Doorloop: acht strippen per maand

Naast losse pakketten is er een strippenkaart met een vaste omvang van **acht strippen per maand**. Eén strip is één S. Een M kost drie strippen en een L acht strippen; die verhouding volgt de wandkloktijd uit de schattingsschaal (1 uur, 3 uur, 8 uur) en is verder niet apart onderbouwd.

Een strip is geprijsd op de S-richtprijs van € 750, dus de kaart kost **€ 6.000 per maand excl. btw**. Ongebruikte strippen vervallen aan het eind van de maand; dat is een keuze die nog nergens is vastgelegd en die de Finops-rol moet bevestigen.

| Invulling van acht strippen | Modelkosten | Supervisie | Kostprijs per maand |
| --- | --- | --- | --- |
| 8 × S | € 24 | 40 – 80 min | € 107,33 – € 190,67 |
| 2 × M + 2 × S | € 26 | 40 – 80 min | € 109,33 – € 192,67 |
| 1 × L | € 30 | 45 – 90 min | € 123,75 – € 217,50 |

Wie via de kaart een L laat draaien betaalt acht strippen, dus € 6.000, tegen € 7.500 voor een losse L. Dat is € 1.500 verschil, oftewel 20 procent op L-werk. Op S-werk levert de kaart geen prijsvoordeel op, alleen gereserveerde capaciteit.

## Wat er structureel niet in de kostprijs zit

Het tokenverbruik van Codex en Cursor loopt buiten het kostenboek om. Codex rekent af binnen een ChatGPT-plan en Cursor rekent usage-based af, en geen van beide levert regels aan de kostenboek-verzamelaar. Zolang die twee uitvoeringslijnen native draaien, is de unit economics onvolledig en is elke marge in de [interne margebijlage bij deze prijskaart](./prijskaart-interne-bijlage-marge.md) **te optimistisch**. Dit staat zo ook in sectie 1 van het [Kostenboek (D05)](https://linear.app/fightclub-techhub/document/d05-kostenboek-1f19d9940f23) en in het [Eerlijkheidsdocument (D12)](https://linear.app/fightclub-techhub/document/d12-eerlijkheidsdocument-ee6833d1f01d), dat het benoemt als een van de twee dingen die structureel incompleet zijn.

Twee dingen ontbreken verder in de kostprijs. De modelkosten zijn clientzijdige schattingen op lijstprijs en geen factuurgegevens (D05, sectie 1). En de kostprijs telt alleen geslaagde runs: mislukte runs, herstellussen en de tijd die de mens kwijt is aan werk dat buiten een issue valt, staan er niet in.

## Open punten voor de Finops-rol

1. De richtprijs van € 750 voor een S staat tegenover een interne benchmark waarin hetzelfde ticket in mensenhanden ongeveer € 60 aan uren kost. Dat is ruim tien keer zoveel. Is de richtprijs uit de schattingsschaal bedoeld per issue, of per engagement dat als S is gescoped?
2. De strippenkaart komt op € 6.000 per maand uit, terwijl het interne growth-voorbeeld voor een vergelijkbare doorontwikkelafspraak op € 2.500 tot € 5.000 per maand ligt. Welke van de twee is de richtwaarde?
3. Is € 125 per uur het bevestigde tarief voor 2026, of blijft het een aanname?
4. Sectie 2 en 3 van het kostenboek zijn leeg. Tot ze gevuld zijn, rust deze prijskaart op verwachtingswaarden en gemodelleerde banden, niet op gemeten runs.

## Bronnen

- [Kostenboek (D05)](https://linear.app/fightclub-techhub/document/d05-kostenboek-1f19d9940f23). Koersen, modelprijzen per MTok, en de melding dat Codex en Cursor er buiten om lopen.
- [AI-inzet en transparantie (D09)](https://linear.app/fightclub-techhub/document/d09-ai-inzet-en-transparantie-f304f28cfd1a). Welk model wat doet, en de dataretentie-eis.
- [Eerlijkheidsdocument (D12)](https://linear.app/fightclub-techhub/document/d12-eerlijkheidsdocument-ee6833d1f01d). Wat echt is, wat gesimuleerd is en wat structureel incompleet is.
- [Merkgids Raderwerk (D14)](https://linear.app/fightclub-techhub/document/d14-merkgids-raderwerk-156278bea11e). De toonregel dat elke claim over kosten met het getal erbij komt.
- `hq/design/linear-workspace-spec.md`, sectie 2.3. Schattingsschaal met wandkloktijd, verwachte modelkosten en richtprijs per maat.
- `hq/research/gap-04-unit-economics-inputs.md`. Uurtarief, urenbanden per maat, gemodelleerde agentkosten per run, ECB-koers, en de supervisieminuten als aanname.
- [Anthropic, kosten van Claude Code](https://code.claude.com/docs/en/costs). De dagelijkse en maandelijkse kosten per ontwikkelaar waar de gemodelleerde band op steunt.

## Vervolgstap

De Finops-rol leest deze prijskaart na en beantwoordt de vier open punten hierboven als comment op WV-210. Daarna gaan de bedragen pas op een offerte. Zolang sectie 2 en 3 van het kostenboek leeg zijn, is dit een onderbouwd voorstel en geen vastgestelde prijslijst.
