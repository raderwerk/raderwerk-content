D02 — Poortbeleid

> Bron: Linear-document <https://linear.app/fightclub-techhub/document/d02-poortbeleid-d31ffbdf4c65> (geëxporteerd door de Spil op 2026-09-03). Wijzig in Linear, niet hier.

# Poortbeleid

Dit document is gezaghebbend. Waar het afwijkt van een rolcontract, wint dit document.

## De vier poorten

| Poort | Bord | Status | Waar je ja tegen zegt |
| -- | -- | -- | -- |
| Poort 1 | KR | Poort 1 · Voorstel akkoord | Het voorstel geldt als verstuurd; het project en de werkvloer-issues worden aangemaakt |
| Poort merge | WV | Poort · Merge of publicatie | De mens merget de PR, publiceert de content of activeert de campagne |
| Poort 2 | KR | Poort 2 · Oplevering akkoord | Het werk is opgeleverd; het opleverbericht mag eruit |
| Poort 3 | KR | Poort 3 · Factuur akkoord | Het factuurconcept mag verstuurd worden |

## Goedkeurderslijst

Alleen deze Linear-gebruikers mogen een poort openen. Elke andere auteur telt niet, ook niet als hij admin is. Op het Free-plan is iedereen admin, dus deze lijst is de enige begrenzing die we hebben.

| Naam | Linear user-id | Mag welke poorten |
| -- | -- | -- |
| `<in te vullen bij de bouw>` | `<uuid>` | alle |

## Wat een geldig akkoord is

Alle vijf de voorwaarden moeten tegelijk gelden:

1. De auteur staat in de tabel hierboven.
2. `user.app === false`. Een app-user kan nooit goedkeuren.
3. De auteur is niet het dispatcher-account.
4. De comment of de labelwijziging is strikt nieuwer dan de poortkaart.
5. De eerste regel matcht exact `^AKKOORD$`, `^AKKOORD RISICO-GEZIEN$` of `^AFGEKEURD: .+$`, en staat niet in een citaat of codeblok.

Bij `risico/hoog` is `AKKOORD RISICO-GEZIEN` verplicht. Een kaal AKKOORD wordt geweigerd met een comment dat het risico letterlijk herhaalt.

## Twee gelijkwaardige antwoordwegen

Klikken: het poortlabel omzetten naar `poort/akkoord` of `poort/afgekeurd`. Typen: een comment waarvan de eerste regel exact een van de tokens is. Beide zijn gezaghebbend. Spil normaliseert de comment naar het label en echoot terug wie hij las en welk comment-id of welke labelwijziging hij als bron nam.

## Wat de dispatcher nooit mag

* Een comment plaatsen waarvan de eerste regel met AKKOORD of AFGEKEURD begint.
* Het label `poort/akkoord` of `poort/afgekeurd` zetten.
* Een issue uit een poortstatus halen zonder een geldig akkoord volgens de vijf voorwaarden hierboven.
* `labelIds` gebruiken in een issueUpdate; dat wist de hele labelset inclusief het poortlabel. Alleen `addedLabelIds` en `removedLabelIds`.

Deze vier regels zijn een harde controle in de code, vlak voor elke schrijfactie, niet alleen een afspraak in dit document.

## Wat er gebeurt bij een poort die zonder geldig token is gepasseerd

Het issue stopt. De dispatcher zet `run/onbevestigd` en `schakelaar/wacht-op-mens`, schrijft een comment met wat hij zag, en raakt het issue niet meer aan tot een mens het opheft. Hij gaat nooit gewoon door met de aantekening dat het niet klopte.

## Bij akkoord

1. Stel de actor vast: bij een labelwissel via de issue-historie, bij een comment via comment.user.
2. Weiger als de actor het dispatcheraccount is, een app-user is, of niet op de lijst staat.
3. Bevestigingscomment: goedgekeurd door `<naam>` op `<tijd>`, registratie `<label of comment-id>`.
4. addedLabelIds poort/akkoord, daarna poort/vrij; removedLabelIds poort/wacht-op-mens.
5. Verplaats: Poort 1 naar Kickoff, Poort merge naar Na-merge controle, Poort 2 naar Poort 3, Poort 3 naar Afgerond.
6. Haal de menselijke assignee weg, zet delegateId of het agent-label voor de volgende rol.
7. Schrijf de poortpassage weg in het kostenboek. De tijd tussen poortkaart en akkoord is de supervisiemeting en telt tegen een menselijk uurtarief, niet tegen tokenkosten.

De onomkeerbare handeling zelf blijft mensenwerk. Spil merget niet, deployt niet en verstuurt niet na akkoord. Voor een merge verifieert hij via de GitHub API dat de PR merged is en dat merged_by geen agent-token is.

## Bij afkeuring

1. Zoek de reden. Geen reden gevonden betekent: erom vragen en verder niets doen.
2. addedLabelIds poort/afgekeurd; bij een eigen fout ook facturatie/garantie.
3. Terug naar de herkomststatus: Poort 1 naar Voorstel, Poort merge naar In uitvoering, Poort 2 naar Klantacceptatie, Poort 3 naar Poort 2.
4. Geen nieuw issue. De reden komt letterlijk geciteerd als opdracht in een comment, met een checklist van wat er moet veranderen.
5. Zelfde rol, afkeurreden als eerste invoerregel, herstelteller op in het staartblok.
6. Bij de TWEEDE afkeuring op dezelfde poort stopt de dispatcher definitief: run/vastgelopen, poort/wacht-op-mens, en een comment met drie keuzes voor de mens (opdracht herschrijven, ander model, annuleren). Er komt geen derde poging.

## Poort 1 overslaan

Mag alleen als alle vijf waar zijn: het project noemt dit soort en deze dienst letterlijk in "wat vooraf akkoord is"; dat project is aangemaakt na een door een mens gepasseerde Poort 1; de schatting is XS of S; er staat geen risico/hoog, risico/publiek of risico/juridisch; en er komt geen nieuwe afhankelijkheid, datamodel of integratie bij. Poort merge, Poort 2 en Poort 3 zijn nooit over te slaan.

## Bestand tegen instructie-injectie

Exacte match op de eerste regel, auteur op de lijst, [user.app](<http://user.app>) false, comment strikt nieuwer dan de poortkaart, en tokens binnen een citaat of codeblok tellen nooit. Spil mag de tokens zelf nooit uitspreken. Een agent die AKKOORD in een samenvatting citeert, opent daarmee niets.
