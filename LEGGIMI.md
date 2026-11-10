# Synapse 2 — tema Slidev con 40 layout

## Installazione (2 minuti)
1. Nel repository, cancella tutti i file in `theme/layouts/` e sostituiscili con quelli di questa cartella.
2. Sostituisci `theme/style.css` con quello di questa cartella.
3. `prepare.mjs` e `slides.yml` NON cambiano: copiano già `style.css` e tutto `layouts/`.

## Cosa serve nell'intestazione della presentazione (headmatter)
```yaml
theme: default
palette: violet            # violet sand ocean forest rose royal (scure) | snow mint peach (chiare)
colorSchema: dark          # "light" per snow, mint, peach
fonts:
  sans: Plus Jakarta Sans
  serif: Fraunces          # titoli di sand, rose, royal, peach
  mono: JetBrains Mono     # solo layout code
  weights: '400,600,700,800'
```

## Campi frontmatter riconosciuti dai layout
`image` (foto), `icon` (emoji), `nr` (numero capitolo), `tag` (etichetta copertina),
`values` (barre: "82,64,41"), `value` (anello: 72), `x` e `y` (assi della matrice).
Se `image` manca, i layout con foto mostrano un pannello colorato con l'emoji `icon`.

## Colonna destra
`compare`, `versus`, `pros-cons`, `before-after` usano `::right::` per la seconda colonna.

## gptcore.html (già collegato)
Il file `gptcore.html` consegnato insieme a questo tema è già aggiornato: conosce i 40 layout e le 9 palette,
accetta i campi `values`, `value`, `x`, `y`, `nr`, sceglie `colorSchema` chiaro/scuro in base alla palette,
aggiunge i font serif e mono, e i due prompt (piano JSON e markdown di riserva) descrivono quando usare ogni layout.
Se un layout riceve dati incompleti (barre senza percentuali, tabella vuota, cifra troppo lunga, ciclo con 3 voci)
`planToMd` ripiega su un layout più semplice invece di produrre una slide rotta.
`prepare.mjs` e `slides.yml` restano uguali.

## Verifica fatta
Ogni layout è stato fotografato con Chromium in 4 palette, con testi tipici e testi al massimo,
anche con un font molto più largo di Plus Jakarta Sans. Non è stato provato dentro Slidev vero
(senza rete), quindi il primo export reale va guardato. Le risposte vere del modello AI non sono state provate:
è stato provato il codice che trasforma il piano JSON in slide, con dati volutamente sbagliati.
