---
titel: "Interne bijlage bij de prijskaart: marge per maat"
klant: raderwerk
issue: WV-210
soort: onderzoek
dienst: strategie
status: concept
vertrouwelijk: true
gaat-naar-klant: false
ai-vermelding: "Geschreven door een AI-agent (claude-opus-5) in de rol Ontwikkelaar, run 0efc45. Menselijke eindredactie is nog niet uitgevoerd (D09)."
---

# Interne bijlage bij de prijskaart: marge per maat

**Deze bijlage gaat niet naar een klant.** Ze hoort bij de [prijskaart en dienstenmatrix S/M/L](./prijskaart-en-dienstenmatrix.md) en bevat de marge, de vergelijking met wat hetzelfde werk in mensenhanden kost, en de reden waarom elk percentage hieronder te hoog is.

## Marge tegen de richtprijs uit de schattingsschaal

Kostprijs is modelkosten plus supervisie tegen € 125 per uur. De onderbouwing van beide staat in de prijskaart zelf.

| Maat | Richtprijs | Kostprijs | Marge in euro | Marge in procent |
| --- | --- | --- | --- | --- |
| S | € 750 | € 13,42 – € 31,83 | € 718,17 – € 736,58 | 95,8 – 98,2 % |
| M | € 2.500 | € 41,25 – € 92,50 | € 2.407,50 – € 2.458,75 | 96,3 – 98,4 % |
| L | € 7.500 | € 123,75 – € 273,50 | € 7.226,50 – € 7.376,25 | 96,4 – 98,4 % |
| Strippenkaart, 8 strippen per maand | € 6.000 | € 107,33 – € 217,50 | € 5.782,50 – € 5.892,67 | 96,4 – 98,2 % |

Een marge van 96 tot 98 procent is geen prestatie maar een signaal dat de teller of de noemer niet klopt. Twee dingen kunnen waar zijn: de richtprijs is te hoog voor wat er geleverd wordt, of de kostprijs mist posten. Beide zijn hieronder uitgewerkt.

## Marge tegen wat hetzelfde werk in mensenhanden kost

Het interne urenonderzoek (`hq/research/gap-04-unit-economics-inputs.md`, secties 1 en 2.2) geeft per maat wat een vergelijkbaar ticket aan menselijke uren kost tegen € 125 per uur: S mediaan ongeveer € 60, M mediaan ongeveer € 220, L vanaf € 625. Die bedragen komen uit geboekte uren van één ontwikkelaar over vier weken, niet uit schattingen, maar het is een kleine steekproef.

Als de prijs op dat niveau zou liggen in plaats van op de richtprijs, ziet de marge er zo uit:

| Maat | Prijs op menselijk niveau | Kostprijs | Marge in euro | Marge in procent |
| --- | --- | --- | --- | --- |
| S | € 60 | € 13,42 – € 31,83 | € 28,17 – € 46,58 | 47,0 – 77,6 % |
| M | € 220 | € 41,25 – € 92,50 | € 127,50 – € 178,75 | 58,0 – 81,3 % |
| L | € 625 | € 123,75 – € 273,50 | € 351,50 – € 501,25 | 56,2 – 80,2 % |

Dit is de tabel die het gesprek verdient. Op het prijsniveau waarop een klant hetzelfde werk elders inkoopt, houdt het bureau nog steeds 47 tot 81 procent over. Dat is een verdedigbare marge en het is de eigenlijke propositie: dezelfde output tegen een marktprijs, met een kostprijs die een orde van grootte lager ligt.

Het verschil tussen de twee tabellen is precies de vraag die de Finops-rol moet beantwoorden. De richtprijs van € 750 voor een S is ongeveer twaalf keer wat het werk in uren kost. Die factor is niet uit te leggen aan een klant die de urenbenchmark kent, en de afwijslead L01 laat zien dat het bureau een ondergrens hanteert die boven € 1.500 ligt, wat betekent dat de richtprijzen niet als losse tickets verkocht worden maar in bundels.

## Waarom elke marge hierboven te optimistisch is

Vier posten ontbreken in de kostprijs.

Het tokenverbruik van Codex en Cursor loopt buiten het kostenboek om. Codex rekent af binnen een ChatGPT-plan, Cursor rekent usage-based af, en geen van beide levert regels aan de verzamelaar. Zolang die uitvoeringslijnen native draaien, is de unit economics structureel incompleet ([D05](https://linear.app/fightclub-techhub/document/d05-kostenboek-1f19d9940f23) sectie 1, [D12](https://linear.app/fightclub-techhub/document/d12-eerlijkheidsdocument-ee6833d1f01d)). Deze post is de grootste onbekende, omdat de tweede reviewlijn en een deel van de uitvoering daar draaien.

Mislukte runs en herstellussen tellen niet mee. Het gemodelleerde kostenoverzicht rekent voor M één herstellus en voor L er twee, maar de kostprijs in de prijskaart gebruikt de verwachtingswaarde, die daar geen ruimte voor heeft. Bij een eerste-keer-goedpercentage onder de 70 procent loopt de werkelijke kostprijs per opgeleverd issue evenredig op.

Overhead buiten de issues ontbreekt. Het urenonderzoek noemt release-assemblage van 60 minuten, deployments en versiebumps van ongeveer 2,5 uur per week, en ticketselectie met de PM. Dat is menselijke tijd tegen hetzelfde uurtarief die op geen enkel issue geboekt staat.

De modelprijzen zijn lijstprijzen en clientzijdige schattingen, geen factuurgegevens (D05, sectie 1). Ze kunnen zowel te hoog als te laag uitvallen.

## Wat deze bijlage nodig heeft om te kloppen

Sectie 2 van het kostenboek, met een runregel per run, en sectie 3, met de dagafsluiting inclusief supervisieminuten en eerste-keer-goed. Zolang die leeg zijn, is elk percentage hierboven een modeluitkomst en geen meting. Na drie droogloopruns met een gevulde sectie 2 kan deze bijlage opnieuw gerekend worden met echte cijfers.
