# D01 — Zo werkt Raderwerk

> Bron: Linear-document https://linear.app/fightclub-techhub/document/d01-zo-werkt-raderwerk-14cf226908dd (geëxporteerd door de Spil op 2026-09-03). Wijzig in Linear, niet hier.

# Zo werkt Raderwerk

Raderwerk is een digitaal bureau dat door AI-agents wordt gerund. Een mens staat bij de poorten. Dit document legt in twaalf alinea's uit hoe dat werkt, zodat iemand die hier nieuw binnenkomt het bord kan lezen zonder uitleg.

Er zijn twee borden. **Klantreis** toont per klant wat er met de relatie gebeurt: een lead komt binnen, wordt gekwalificeerd, krijgt een discovery en een voorstel, en gaat daarna door drie poorten heen naar afgerond en retainer. **Werkvloer** toont het werk zelf: een issue per deliverable, met acceptatiecriteria, van backlog tot klaar. Elk project hangt aan allebei de borden, zodat de projectpagina het engagement en al zijn werk in een scherm laat zien.

Een aanvraag landt in Binnen op de Klantreis. De Account-rol vult een leadscorecard in en beveelt aan om door te gaan of af te wijzen. Bij doorgaan schrijft de Strateeg een discovery-verslag en daarna een voorstel, allebei als document onder het project, en zet het issue in Poort 1.

Een poort is een workflowstatus waarvan de naam met "Poort" begint, in de gele kleur die in deze werkplaats nergens anders voorkomt. Geel betekent overal hetzelfde: hier staat de machine stil. In een poort staat de menselijke eigenaar als assignee en is het delegate-veld leeg, dus er is per definitie geen agent verantwoordelijk. De poortwachtrij van de mens is daarmee gewoon zijn eigen Mijn issues.

Bij het binnenkomen van een poort schrijft de machine een poortkaart: waar je ja tegen zegt, wat er gemaakt is, het bewijs met links, de acceptatiecriteria met score, beide reviewoordelen inclusief hun onderlinge tegenspraak, de risicoklasse, de kosten tot nu toe, en de twee toegestane antwoorden. De mens doet precies een handeling: het poortlabel omzetten, of een comment plaatsen waarvan de eerste regel exact AKKOORD of AFGEKEURD gevolgd door de reden is.

Na akkoord op Poort 1 maakt de PM-rol het project, de mijlpalen en de werkvloer-issues aan, elk met acceptatiecriteria. Het engagement-issue gaat naar In uitvoering en blijft daar staan tot Poort 2. Het spiegelt bewust niets: de voortgang lees je op de projectpagina en in het voortgangscomment per cyclus.

Op de werkvloer wordt gebouwd. Een uitvoerder krijgt het issue via het delegate-veld (Codex of Cursor, met hun eigen zichtbare agent-sessie) of via een routeringslabel (een Claude-rol onder de dispatcher). Hij vertakt vanaf de hoofdbranch, bouwt, test en opent een pull request met bewijs.

Daarna leest een tweede agent tegen, altijd uit een andere modelfamilie dan de maker. Vervolgens draait QA de acceptatiecriteria een voor een na op de preview van die pull request en schrijft een QA-rapport waarin elk criterium een uitkomst en een bewijslink heeft. Pas dan komt het issue in de mergepoort.

De onomkeerbare handeling blijft mensenwerk. De mens merget zelf, deployt zelf en verstuurt zelf. De agent noteert alleen dat het gebeurd is en controleert daarna in Na-merge controle of de samengevoegde hoofdbranch nog doet wat hij moet doen. Alleen omkeerbaar vervolgwerk voert een agent zelf uit.

Als alles klaar is schrijft de PM een opleverrapport en beoordeelt de klantstem het werk. Daarna volgt Poort 2 voor de oplevering en Poort 3 voor de factuur. De factuur is een document, geen verzonden post: versturen is een menselijke handeling buiten Linear.

Afkeuren mag en gebeurt. Bij een afkeuring gaat het issue terug naar de werkstatus met de reden als opdracht in een comment, en dezelfde rol probeert het opnieuw. Na de tweede afkeuring op dezelfde poort stopt de machine, zet run/vastgelopen en legt de mens drie keuzes voor. Er komt geen derde poging: een agent die na twee gerichte correcties nog steeds faalt, mist context die hij zelf niet kan vinden.

Alles wat de machine doet is te tellen. Elke run eindigt met een ondertekende comment met een machineleesbaar staartblok: rol, model, run-id, tokens, kosten, duur, DoD-score, uitkomst en volgende status. Die blokken vormen het kostenboek. De twee getallen die er echt toe doen staan op het bedieningspaneel: het aantal menselijke supervisieminuten en het percentage dat in een keer goed was.
