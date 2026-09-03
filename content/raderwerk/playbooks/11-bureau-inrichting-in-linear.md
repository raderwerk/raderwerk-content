# D11 — Bureau-inrichting in Linear

> Bron: Linear-document https://linear.app/fightclub-techhub/document/d11-bureau-inrichting-in-linear-c698e5904c26 (geëxporteerd door de Spil op 2026-09-03). Wijzig in Linear, niet hier.

# Bureau-inrichting in Linear

De technische inrichting, zodat iemand deze werkplaats opnieuw kan opbouwen. Volledige bouwvolgorde in hoofdstuk 13 van `linear-workspace-spec.md`.

## Vijf onomkeerbare beslissingen

1. Het teamplafond is twee en FC bestaat al: hernoem FC tot Werkvloer via teamUpdate (name en key) en maak Klantreis daarna vers aan. Vertrouw niet op teamDelete; de genadeperiode staat niet in het schema.
2. WorkflowState.type is na aanmaak onwijzigbaar en het bord sorteert eerst op type. Alles tussen de eerste werkstatus en Klaar is `started`, inclusief poorten en late wachtstatussen. Statussen aanmaken, teruglezen, vergelijken, en bij afwijking archiveren en opnieuw maken VOORDAT er issues in staan.
3. De triage-status is niet expliciet aan te maken; hij ontstaat door teamCreate(triageEnabled: true). Alleen KR krijgt triage; WV gebruikt een backlog-status Binnen.
4. templateData is een ondocumenteerde JSON-blob. Maak eerst met de hand een issue-, project- en documenttemplate in de UI, lees ze uit met template(id){templateData}, en gebruik die vorm als mal. Pas daarna defaultTemplateForMembersId zetten in een tweede teamUpdate.
5. Labelschrijfacties gaan uitsluitend via addedLabelIds en removedLabelIds. Een issueUpdate met labelIds vervangt de hele set en wist het poortlabel.

## Twee dingen die geverifieerd moeten worden

* Bestaat cycleCreate? Het schema zegt van wel, een eerdere bron zei van niet. Een keer testen.
* Levert Issue.history de actor plus label- en statusdelta's? Dat veld staat niet in de cheatsheet en is geen root-query. Zo niet, dan valt de poortcontrole terug op geschreven akkoordcomments plus de diff tegen het handelingenlogboek.

## Oppervlakken

MCP kan geen teams, workflowstatussen, templates, cycles, projectlabels of agent skills aanmaken en kan geen issues verwijderen, en heeft geen gereedschap voor agentSessions. De dispatcher heeft dus zowel GraphQL als MCP nodig.
