# Catalogo layout — Synapse 2

40 layout. Ogni voce: quando usarlo, quante voci, formato esatto.

## Aperture

### `cover`
Prima slide. Titolo grande a sinistra, foto a tutta altezza a destra (senza foto: pannello colorato con emoji gigante).

- Contenuto: titolo + 1 frase
- Foto: sì (image, oppure emoji grande se manca)

```markdown
---
layout: cover
tag: "Storia antica"
icon: "🏺"
image: Great Pyramid of Giza at sunset
---

# La civiltà egizia

Tremila anni di faraoni, templi e un fiume che dava la vita
```

### `cover-center`
Prima slide alternativa, centrata. Foto a tutto schermo scurita (senza foto: campo di colore pieno).

- Contenuto: titolo + 1 frase
- Foto: sì (image, oppure emoji grande se manca)

```markdown
---
layout: cover-center
tag: "Scienze e ambiente"
icon: "⚡"
image: Great Pyramid of Giza at sunset
---

# Il futuro dell'energia

Dal sole al vento: come cambierà il modo in cui accendiamo la luce
```

### `agenda`
Indice della presentazione: pannello colorato a sinistra, capitoli numerati a destra.

- Contenuto: 3-5 voci "**Capitolo** frase breve"
- Foto: no

```markdown
---
layout: agenda
---

# Di cosa parliamo

Tre capitoli, venti minuti

- **Piene annuali** Il fiume allagava i campi e lasciava limo fertile
- **Agricoltura** Grano e orzo nutrivano un intero regno
- **Trasporti** Si viaggiava in barca da nord a sud
- **Scrittura** Geroglifici incisi su pietra e papiro
```

## Capitoli

### `section`
Apre un capitolo. Campo di colore pieno con il numero gigante in trasparenza.

- Contenuto: numero capitolo (nr) + titolo + 1 frase
- Foto: no

```markdown
---
layout: section
nr: 2
---

# Il dono del Nilo

Perché un deserto è diventato un impero
```

### `section-image`
Apre un capitolo con una foto a tutto schermo scurita a sinistra.

- Contenuto: numero capitolo (nr) + titolo + 1 frase
- Foto: sì (image, oppure emoji grande se manca)

```markdown
---
layout: section-image
nr: 3
icon: "⛵"
image: Great Pyramid of Giza at sunset
---

# La vita lungo il fiume

Villaggi, campi e barche
```

## Messaggio

### `statement`
Una sola frase forte, enorme. Per l'idea centrale o un cambio di tono.

- Contenuto: 1 frase (max 14 parole) + 1 riga facoltativa
- Foto: no

```markdown
---
layout: statement
---

# Il Nilo non era un fiume: era un calendario.

Ogni piena decideva quando seminare, costruire e pregare.
```

### `quote`
Citazione autentica e nota, con autore. Il titolo "# ..." è chi parla.

- Contenuto: "> frase" + "# Autore"
- Foto: no

```markdown
---
layout: quote
---

> Ho fatto sorgere un fiume dove prima c'era solo deserto.

# Iscrizione reale
```

### `callout`
Idea chiave o consiglio da ricordare: icona grande, frase, dettaglio e 2-3 pillole facoltative.

- Contenuto: titolo + 1 frase + 0-3 pillole
- Foto: no

```markdown
---
layout: callout
icon: "💡"
---

# Il limo era oro nero

Ogni anno la piena depositava uno strato fertile: senza concimi, il raccolto era garantito.

- **Fertile** nessun concime
- **Prevedibile** sempre a luglio
```

## Elenchi

### `default`
Elenco standard di 3-5 punti, a righe con barra colorata. Il jolly quando nient'altro calza.

- Contenuto: 3-5 voci
- Foto: no

```markdown
---
layout: default
---

# Il dono del Nilo

- **Piene annuali** Il fiume allagava i campi e lasciava limo fertile
- **Agricoltura** Grano e orzo nutrivano un intero regno
- **Trasporti** Si viaggiava in barca da nord a sud
- **Scrittura** Geroglifici incisi su pietra e papiro
```

### `cards`
3-6 concetti paralleli e indipendenti, in schede con filo di colore.

- Contenuto: 3-6 voci
- Foto: no

```markdown
---
layout: cards
---

# Un regno, tanti pilastri

- **Piene annuali** Il fiume allagava i campi e lasciava limo fertile
- **Agricoltura** Grano e orzo nutrivano un intero regno
- **Trasporti** Si viaggiava in barca da nord a sud
- **Scrittura** Geroglifici incisi su pietra e papiro
```

### `numbered`
Classifica o ordine di importanza (i primi 3-5), con numeri grandi.

- Contenuto: 3-5 voci
- Foto: no

```markdown
---
layout: numbered
---

# I tre doni del fiume

- **Piene annuali** Il fiume allagava i campi e lasciava limo fertile
- **Agricoltura** Grano e orzo nutrivano un intero regno
- **Trasporti** Si viaggiava in barca da nord a sud
```

### `icons`
2-5 caratteristiche con un'emoji grande in un cerchio. Ogni voce DEVE iniziare con l'emoji in grassetto.

- Contenuto: 2-5 voci "**🌊** **Etichetta** frase"
- Foto: no

```markdown
---
layout: icons
---

# Cosa dava il Nilo

- **🌊** **Piene annuali** Il fiume allagava i campi e lasciava limo fertile
- **🌾** **Agricoltura** Grano e orzo nutrivano un intero regno
- **⛵** **Trasporti** Si viaggiava in barca da nord a sud
```

### `checklist`
Requisiti, regole, vantaggi, cose da fare: ogni voce ha la spunta.

- Contenuto: 3-5 voci
- Foto: no

```markdown
---
layout: checklist
---

# Come si costruiva una piramide

- **Piene annuali** Il fiume allagava i campi e lasciava limo fertile
- **Agricoltura** Grano e orzo nutrivano un intero regno
- **Trasporti** Si viaggiava in barca da nord a sud
- **Scrittura** Geroglifici incisi su pietra e papiro
```

### `definitions`
Glossario: termine a sinistra, spiegazione a destra.

- Contenuto: 3-5 voci "**Termine** spiegazione"
- Foto: no

```markdown
---
layout: definitions
---

# Parole chiave

- **Faraone** Re e dio vivente, garante dell'ordine
- **Papiro** Pianta da cui si ricavava il foglio per scrivere
- **Stele** Lastra di pietra incisa con testi o leggi
- **Mummia** Corpo conservato per la vita dopo la morte
```

### `grid-6`
4-6 elementi brevi in griglia a filetti: proprietà, funzioni, componenti.

- Contenuto: 4-6 voci
- Foto: no

```markdown
---
layout: grid-6
---

# Sei elementi, una civiltà

- **Piene annuali** Il fiume allagava i campi e lasciava limo fertile
- **Agricoltura** Grano e orzo nutrivano un intero regno
- **Trasporti** Si viaggiava in barca da nord a sud
- **Scrittura** Geroglifici incisi su pietra e papiro
- **Commercio** Rotte verso il Levante e la Nubia
- **Religione** Un pantheon legato al ciclo della natura
```

## Processi

### `steps`
Procedura o sequenza in 3-5 passi, in orizzontale con cerchi numerati.

- Contenuto: 3-5 voci
- Foto: no

```markdown
---
layout: steps
---

# Dalla piena al raccolto

- **Piene annuali** Il fiume allagava i campi e lasciava limo fertile
- **Agricoltura** Grano e orzo nutrivano un intero regno
- **Trasporti** Si viaggiava in barca da nord a sud
- **Scrittura** Geroglifici incisi su pietra e papiro
```

### `cycle`
Ciclo che si ripete: esattamente 4 fasi con frecce che chiudono il cerchio.

- Contenuto: esattamente 4 voci
- Foto: no

```markdown
---
layout: cycle
---

# Il ciclo dell'anno egizio

- **Piene annuali** Il fiume allagava i campi e lasciava limo fertile
- **Agricoltura** Grano e orzo nutrivano un intero regno
- **Trasporti** Si viaggiava in barca da nord a sud
- **Scrittura** Geroglifici incisi su pietra e papiro
```

### `funnel`
Selezione progressiva o filtro, dal più ampio al più stretto (3-5 livelli).

- Contenuto: 3-5 voci, dal più largo
- Foto: no

```markdown
---
layout: funnel
---

# Da migliaia di operai a un solo faraone

- **Piene annuali** Il fiume allagava i campi e lasciava limo fertile
- **Agricoltura** Grano e orzo nutrivano un intero regno
- **Trasporti** Si viaggiava in barca da nord a sud
- **Scrittura** Geroglifici incisi su pietra e papiro
```

### `pyramid`
Gerarchia o livelli, dalla punta alla base (3-4 livelli).

- Contenuto: 3-4 voci, dalla punta alla base
- Foto: no

```markdown
---
layout: pyramid
---

# La piramide sociale

- **Faraone** Re e dio
- **Visir e nobili** Governano il regno
- **Scribi e sacerdoti** Custodi del sapere
- **Contadini** La maggioranza della popolazione
```

### `timeline`
Cronologia verticale con date a sinistra (3-5 eventi in ordine).

- Contenuto: 3-5 voci "**data** evento"
- Foto: no

```markdown
---
layout: timeline
---

# Tremila anni in cinque date

- **3100 a.C.** Unificazione di Alto e Basso Egitto
- **2560 a.C.** Si costruisce la grande piramide di Giza
- **1550 a.C.** Inizia il Nuovo Regno
- **1274 a.C.** Battaglia di Qadesh contro gli Ittiti
- **30 a.C.** Roma conquista l'Egitto
```

### `timeline-h`
Roadmap o cronologia orizzontale a 3-5 tappe.

- Contenuto: 3-5 voci "**anno** evento breve"
- Foto: no

```markdown
---
layout: timeline-h
---

# Le tappe del regno

- **3100** Unificazione del regno
- **2560** La piramide di Giza
- **1550** Nuovo Regno
- **1274** Battaglia di Qadesh
```

## Numeri e grafici

### `stats`
Da 2 a 4 cifre chiave grandi, separate da filetti. Solo cifre certe.

- Contenuto: 2-4 voci "**numero breve** cosa significa"
- Foto: no

```markdown
---
layout: stats
---

# L'Egitto in numeri

- **3000** anni di storia continua
- **100+** piramidi conosciute
- **70%** del paese è deserto
```

### `stat-hero`
Una cifra protagonista gigante su campo colorato e 2 cifre di contorno.

- Contenuto: esattamente 3 voci (la prima è la protagonista)
- Foto: no

```markdown
---
layout: stat-hero
---

# Il Nilo in cifre

- **6650** chilometri: il fiume più lungo del mondo
- **10** paesi attraversati
- **95%** degli egiziani vive lungo le sue rive
```

### `big-number`
UNA cifra enorme a tutto schermo su campo colorato. Il titolo è solo la cifra.

- Contenuto: "# cifra" (max 5 caratteri) + 1 frase
- Foto: no

```markdown
---
layout: big-number
---

# 70%

Degli studenti ricorda meglio ciò che ha visto in un'immagine
```

### `bars`
Confronto di 3-5 percentuali con barre orizzontali. Serve il campo values con le percentuali nello stesso ordine.

- Contenuto: 3-5 voci + values: "82,64,41"
- Foto: no

```markdown
---
layout: bars
values: "82,64,41,27,12"
---

# I linguaggi più usati

- **Python** 82% dei progetti
- **JavaScript** 64% dei progetti
- **Java** 41% dei progetti
- **C++** 27% dei progetti
```

### `ring`
Una percentuale in un anello grande, con titolo e frase a destra. Serve il campo value (0-100).

- Contenuto: titolo + 1 frase + 0-3 voci + value: 72
- Foto: no

```markdown
---
layout: ring
value: 72
---

# Chi usa lo smartphone ogni giorno

Tra i ragazzi di 14-19 anni, quasi tre su quattro.

- **Social** la scelta più frequente
- **Video** al secondo posto
```

### `table`
Dati a righe e colonne (tabella markdown, max 5 righe x 4 colonne).

- Contenuto: tabella markdown con intestazione
- Foto: no

```markdown
---
layout: table
---

# Tre civiltà a confronto

| Civiltà | Fiume | Scrittura |
|---|---|---|
| Egizi | Nilo | Geroglifici |
| Sumeri | Tigri ed Eufrate | Cuneiforme |
| Indo | Indo | Ancora non decifrata |

```

## Confronti

### `compare`
Due colonne con intestazioni colorate. Dopo ::right:: va la seconda colonna.

- Contenuto: titolo + "## A" 2-3 voci + ::right:: + "## B" 2-3 voci
- Foto: no

```markdown
---
layout: compare
---

# Egitto e Mesopotamia

## Egitto

- **Piene annuali** Il fiume allagava i campi e lasciava limo fertile
- **Agricoltura** Grano e orzo nutrivano un intero regno

::right::

## Mesopotamia

- **Piene annuali** Il fiume allagava i campi e lasciava limo fertile
- **Agricoltura** Grano e orzo nutrivano un intero regno
```

### `versus`
Due contendenti a tutto schermo con "VS" al centro. Niente titolo: solo i due "##".

- Contenuto: "## A" 3-4 voci + ::right:: + "## B" 3-4 voci (senza "# titolo")
- Foto: no

```markdown
---
layout: versus
---

## Python

- **Piene annuali** Il fiume allagava i campi e lasciava limo fertile
- **Agricoltura** Grano e orzo nutrivano un intero regno
- **Trasporti** Si viaggiava in barca da nord a sud

::right::

## JavaScript

- **Piene annuali** Il fiume allagava i campi e lasciava limo fertile
- **Agricoltura** Grano e orzo nutrivano un intero regno
- **Trasporti** Si viaggiava in barca da nord a sud
```

### `pros-cons`
Vantaggi contro svantaggi, con spunte verdi e croci rosse.

- Contenuto: titolo + "## Vantaggi" + ::right:: + "## Svantaggi"
- Foto: no

```markdown
---
layout: pros-cons
---

# Costruire in pietra

## Vantaggi

- **Piene annuali** Il fiume allagava i campi e lasciava limo fertile
- **Agricoltura** Grano e orzo nutrivano un intero regno
- **Trasporti** Si viaggiava in barca da nord a sud

::right::

## Svantaggi

- **Piene annuali** Il fiume allagava i campi e lasciava limo fertile
- **Agricoltura** Grano e orzo nutrivano un intero regno
- **Trasporti** Si viaggiava in barca da nord a sud
```

### `before-after`
Prima e dopo, o problema e soluzione, con freccia al centro.

- Contenuto: titolo + "## Prima" + ::right:: + "## Dopo"
- Foto: no

```markdown
---
layout: before-after
---

# Prima e dopo la diga

## Prima

- **Piene annuali** Il fiume allagava i campi e lasciava limo fertile
- **Agricoltura** Grano e orzo nutrivano un intero regno
- **Trasporti** Si viaggiava in barca da nord a sud

::right::

## Dopo

- **Piene annuali** Il fiume allagava i campi e lasciava limo fertile
- **Agricoltura** Grano e orzo nutrivano un intero regno
- **Trasporti** Si viaggiava in barca da nord a sud
```

### `quadrant`
Matrice 2x2 con due assi. Servono x e y (nomi degli assi) e 4 voci: alto-sx, alto-dx, basso-sx, basso-dx.

- Contenuto: titolo + 4 voci + x + y
- Foto: no

```markdown
---
layout: quadrant
x: "Impegno"
y: "Valore"
---

# Che progetto scegliere?

- **Subito** Poco sforzo, tanto valore
- **Pianificare** Tanto sforzo, tanto valore
- **Se avanza tempo** Poco sforzo, poco valore
- **Evitare** Tanto sforzo, poco valore
```

## Immagini

### `image-right`
Titolo e 3 punti a sinistra, foto a tutta altezza a destra.

- Contenuto: titolo + 3 voci
- Foto: sì (image, oppure emoji grande se manca)

```markdown
---
layout: image-right
icon: "☀️"
image: Great Pyramid of Giza at sunset
---

# Religione e potere

- **Piene annuali** Il fiume allagava i campi e lasciava limo fertile
- **Agricoltura** Grano e orzo nutrivano un intero regno
- **Trasporti** Si viaggiava in barca da nord a sud
```

### `image-left`
Foto con angoli arrotondati a sinistra, testo a filetti a destra.

- Contenuto: titolo + 3 voci
- Foto: sì (image, oppure emoji grande se manca)

```markdown
---
layout: image-left
icon: "🏺"
image: Great Pyramid of Giza at sunset
---

# La vita quotidiana

- **Piene annuali** Il fiume allagava i campi e lasciava limo fertile
- **Agricoltura** Grano e orzo nutrivano un intero regno
- **Trasporti** Si viaggiava in barca da nord a sud
```

### `image-top`
Fascia foto in alto, titolo e 2-3 colonne di testo sotto.

- Contenuto: titolo + 2-3 voci brevi
- Foto: sì (image, oppure emoji grande se manca)

```markdown
---
layout: image-top
icon: "🌊"
image: Great Pyramid of Giza at sunset
---

# Un fiume, tre stagioni

- **Piene annuali** Il fiume allagava i campi e lasciava limo fertile
- **Agricoltura** Grano e orzo nutrivano un intero regno
- **Trasporti** Si viaggiava in barca da nord a sud
```

### `fullimage`
Foto a tutto schermo con titolo di impatto in basso. Per i momenti emotivi.

- Contenuto: titolo + 1 riga
- Foto: sì (image, oppure emoji grande se manca)

```markdown
---
layout: fullimage
icon: "🌅"
image: Great Pyramid of Giza at sunset
---

# Dove la sabbia incontra il fiume

Il Nilo vicino a Luxor, all'alba
```

### `split`
Metà foto, metà campo colorato con titolo e punti. Molto deciso.

- Contenuto: titolo + 1 frase + 3 voci
- Foto: sì (image, oppure emoji grande se manca)

```markdown
---
layout: split
icon: "🌾"
image: Great Pyramid of Giza at sunset
---

# Il lavoro dei campi

Tre stagioni scandivano tutto.

- **Piene annuali** Il fiume allagava i campi e lasciava limo fertile
- **Agricoltura** Grano e orzo nutrivano un intero regno
- **Trasporti** Si viaggiava in barca da nord a sud
```

## Testo e codice

### `code`
Un blocco di codice (max 10 righe) con una riga di spiegazione.

- Contenuto: titolo + 1 frase + blocco ```linguaggio
- Foto: no

```markdown
---
layout: code
---

# Un ciclo in Python

Stampa i numeri da zero a quattro.

```python
for i in range(5):
    quadrato = i * i
    print("numero", i, "quadrato", quadrato)
```
```

### `two-col`
Testo continuo su due colonne (non una lista): per spiegazioni brevi.

- Contenuto: titolo + 2-3 paragrafi brevi
- Foto: no

```markdown
---
layout: two-col
---

# Perché il Nilo contava

Ogni estate il fiume usciva dagli argini e copriva i campi di acqua. Quando si ritirava, lasciava un limo scuro e ricco di nutrienti.

Gli egizi chiamavano questa terra nera "Kemet" e il deserto intorno "terra rossa". Il confine fra le due era visibile a occhio nudo.

La stagione dell'inondazione apriva il calendario: da lì si contavano semina e raccolto.
```

## Chiusura

### `end`
Ultima slide, centrata su campo colorato.

- Contenuto: "# Grazie" + 1 riga
- Foto: no

```markdown
---
layout: end
---

# Grazie

Domande e curiosità
```
