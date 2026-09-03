D05 — Kostenboek

> Bron: Linear-document <https://linear.app/fightclub-techhub/document/d05-kostenboek-1f19d9940f23> (geëxporteerd door de Spil op 2026-09-03). Wijzig in Linear, niet hier.

# Kostenboek

Alleen de Finops-rol schrijft in dit document.

## Sectie 1 - koersen en aannames

```text
wisselkoers: <1 EUR = x USD, met bron en datum>
prijzen per MTok: fable-5.1 10/50 (cache-lees 0,25) · opus-5 5/25 · sonnet-5 2/10
opmerking: dit zijn clientzijdige schattingen op lijstprijs, geen factuurgegevens
onvolledig: het tokenverbruik van Codex en Cursor loopt hier BUITEN om (ChatGPT-plan
respectievelijk usage-based bij Cursor). Zolang die lanes native zijn, is de unit economics
structureel incompleet. Dit hoort op de slotdia, niet in een voetnoot.
```

## Sectie 2 - runregels

Een regel per run, geparseerd uit de yaml-staartblokken.

```text
| datum | issue | rol | model | beurten | in | uit | cache | usd | eur | duur | uitkomst |
```

## Sectie 3 - dagafsluiting

Ook als comment op WV-2.

```text
<datum> · <n> runs · <n> issues aangeraakt
kosten: $<x> / EUR <y>
per rol: <verdeling in procenten>
per klant: <verdeling in procenten>
poorten: <n> gepasseerd, <n> afgekeurd, mediane wachttijd <n> min
supervisie: <n> minuten menselijke tijd over <n> poortmomenten
eerste-keer-goed: <n> van <n>
issueteller: <n> / 250
lussen: <geen of welke>
```

De regels `supervisie` en `eerste-keer-goed` zijn de enige twee getallen die er op de slotdia echt toe doen. Modeltokens zijn een paar tientjes; menselijke supervisie tegen een reeel uurtarief is de werkelijke kostenpost, en first-pass-acceptatie bepaalt of die supervisie gaat groeien of krimpen.
