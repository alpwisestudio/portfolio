Alpwise Studio è uno studio di consulenza digitale di tre persone a Gallarate, ai piedi delle Prealpi varesine: siti, gestionali su misura, AI e automazioni per PMI. Prima si ascolta, poi si costruisce. Il sistema resta essenziale: il nero Notte, il bianco, un azzurro di marca e un solo font, Host Grotesk, a peso regolare. La vicinanza alle persone la portano **le foto** (Prealpi, laghi, persone al lavoro) con **il vetro** sopra, e il tono da consulenti. Il gradiente **orizzonte** resta per i visual dei prodotti. Tema principale **Scuro**; **Chiaro** è curato allo stesso livello.

Riferimento visivo: il canvas "Alpwise · consulenza, tema scuro" (brand board, home, contatti, Alpwise book).

## Principi

- **Nero, bianco, azzurro.** Tutta l'interfaccia vive in nero e bianco con grigi freddi. L'azzurro `sky-700` segna soltanto ciò che si può cliccare o ciò che è attivo.
- **Peso regolare.** I titoli sono grandi ma mai in grassetto: la gerarchia la fanno dimensione e spazio.
- **Un solo font.** Host Grotesk ovunque. Etichette in peso 500, frase normale, senza barra finale (`Come lavoriamo`). Numeri, orari e date con cifre tabellari (`tabular-nums`). DM Mono non c'è più.
- **Foto e vetro.** Foto a tutta larghezza con il velo Notte e la griglia; testi e moduli sopra la foto in pannelli di vetro.
- **Griglia a vista.** Hairline e la griglia a 12 colonne sopra le foto mostrano la struttura invece di nasconderla.
- **Angoli vivi.** Card, celle, immagini a spigolo; solo bottoni e campi hanno 2px.

## Colore

| Ruolo | Token | Scuro | Chiaro |
|---|---|---|---|
| Fondo | `bg` | `night` (#06080B) | `white` |
| Superfici | `surface` / `surface-raised` / `surface-sunken` | `ink-900` / `ink-800` / #050608 | bianco / bianco / `grey-50` |
| Linee | `line` / `line-grid` / `line-strong` | `ink-700` / `ink-600` / `grey-400` | `grey-100` / `grey-200` / `grey-500` |
| Testo | `text` / `text-muted` / `text-subtle` | bianco / `grey-300` / #7D8693 | nero / #4A525E / `grey-400` |
| Azione | `primary` + `on-primary` | `sky-700` + bianco (hover `sky-800`) | uguale |
| Contrasto | `inverse` + `on-inverse` | bianco + nero | nero + bianco |
| Link e focus | `link`, `focus` | `sky-400` | `sky-700` |

- Sull'azzurro il testo è **sempre bianco** (`on-primary`: 5.8:1 su `sky-700`, 7.9:1 su `sky-800`). Il nero su `sky-700` non passa (3.6:1).
- In Chiaro l'azzurro non si usa come testo: per link e accenti c'è `sky-700`.
- `mist` (#B7C2CF) è il grigio-azzurro di presentazione: fondi dietro mockup e screenshot.
- Stati (`success`, `warning`, `danger`) sempre con la parola scritta.

## Foto e vetro

```tsx
<section className="al-photo"><Image className="al-photo-img" … />…</section>   /* o <Photo image={…}> */
<Glass>…</Glass>                                                              /* .al-glass */
<Button variant="glass">Come lavoriamo</Button>                               /* .al-btn-glass */
```

- Foto vere o credibili del territorio (Prealpi, laghi, sentieri) e di persone al lavoro, mai stock patinato. Sempre a tutta larghezza della loro area, con il velo (`photo-scrim`, `photo-scrim-soft`) e le 12 colonne hairline.
- Sopra la foto il testo è bianco; i pannelli sono in vetro (bianco al 6%, bordo al 18%, sfocatura 18px). I campi sul vetro sono chiari e semitrasparenti, mai neri.
- Il bottone secondario sopra le foto è `glass`; il primario resta `primary`.
- Una foto non va sotto testo lungo: titolo, frase, al massimo un pannello.

## Il logo

- Il lettering "Alpwise" è quello originale (tracciati dagli SVG ufficiali): non si ridisegna mai con un font.
- Accanto va il nome, sempre con la stessa regola: **STUDIO** per lo studio, **BOOK**, **STAFF** e **QUOTA** per i prodotti. Sono le proporzioni del logo di staff: Host Grotesk 500, maiuscolo, spaziatura `.12em`, alto 30/84 del lettering (minimo 10px), a 24/84 di distanza, appoggiato sulla linea di base del lettering.
- Componenti: `<Logo />` è "Alpwise STUDIO" (footer, file `wordmark-*.svg`), `<Logo lockup="nav" />` solo "Alpwise" (navbar), `<Logo lockup="mark" />` solo la A, `<ProductLogo product="Book" />` per i prodotti.
- Bianco su scuro, nero su chiaro, mai azzurro.

## L'orizzonte

```css
.al-horizon       { background: var(--horizon); }   /* hero, CTA, case study */
.al-grid::before  { /* 12 colonne hairline, sfumano verso il basso */ }
```

- `horizon` sale dal nero al blu notte fino all'azzurro di marca (`sky-700`), senza fascia bianca. Nelle pagine è solo il gradiente lineare: niente arco né cerchi sopra.
- Unica eccezione, il **bagliore** (`--horizon-glow`, classe `al-glow`): la luce dell'orizzonte che sale dal fondo, ellittica, su fondo Notte con la griglia sopra. Solo nel pannello di accesso dei prodotti (la metà destra della login di Alpwise book e staff), con il logo bianco nella metà alta. Il centro schiarisce fino a `sky-200`: niente testo nella metà bassa. Il pannello non si stacca dal form: bagliore e griglia sfumano verso il bordo, e sul bordo non c'è nessuna linea della griglia; in tema scuro le due metà sono un'unica superficie Notte.
- È identico in Scuro e in Chiaro: è la firma del marchio, non un colore d'interfaccia.
- Il testo è sempre bianco, a ogni altezza: il punto più chiaro è `sky-700` in fondo (5.8:1). Mai testo nero sull'orizzonte.
- Si usa per i visual dei prodotti e dei case study (dietro le schermate). Le aperture delle pagine usano le foto. Mai su card, bottoni o fondi di sezione interi.

## Tipografia

- **Host Grotesk** (`sans`) per tutto il testo. Titoli 400 con tracking stretto (−0.045em a 104px). Lead 300. Corpo 400 a 16/26.
- Etichette (`kicker`) 15px peso 500, frase normale, senza barra. Dati con `tabular-nums`: `mono-sm` 13px per date e note, `mono-data` 14px per orari e valori (i nomi `mono-*` sono storici: è sempre Host Grotesk).
- Titoli delle sezioni fluidi: apertura `clamp(48px, 6.4vw, 92px)`, sezione `clamp(44px, 5vw, 72px)`.
- Scala: `display-xl` 104 · `display-lg` 72 · `h1` 52 · `h2` 36 · `h3` 24 · `h4` 18 · `lead` 20 · `body` 16 · `body-sm` 14 · `label` 14.
- Su mobile: `display-xl` → 52px, `h1` → 36px.
- **Parola chiave**: evidenziata in azzurro (`al-hl`), al massimo una per titolo. Una parola barrata prima ("più tecnologia") solo nell'apertura.
- Date `gg.mm.aaaa`, migliaia col punto.

## Layout

- Griglia a 12 colonne, `container-max` 1360px, gutter 16px mobile e 32px desktop.
- Intestazioni di sezione (`Head`): etichetta sopra, titolo grande a sinistra, frase breve a destra in basso.
- Sezioni `space-32` desktop, `space-20` mobile.
- Elementi affiancati condividono il bordo (griglia di celle), non hanno spazio tra loro.
- Ombre solo su modali, toast e menu (`shadow-overlay`).

## Motivo grafico

Foto con velo e griglia, vetro, orizzonte dietro le schermate dei prodotti. Niente altri pattern, forme o illustrazioni.

## Interazione

- Hover: il primario schiarisce (`primary-hover`); bordi neutri passano a `line-strong`; il quadratino `+` diventa azzurro.
- Focus: anello `focus` 2px con offset 2px su tutto.
- Transizioni `motion-fast` (120ms) su colore e bordo.
- Animazioni d'ingresso: una volta sola, quando la sezione entra in vista (`<Scene>` in `src/components/motion`). Repertorio: titolo parola per parola da una maschera, dissolvenza con 16px di salita, linee che si tracciano, alba dell'orizzonte (`motion-epic`), parola evidenziata che si stende e cambia. Token `motion-*` ed `ease-*`; classi in `@alpwisestudio/ui/motion.css`.
- A riposo tutto è leggibile: se JavaScript non parte o l'utente chiede meno movimento, la pagina è completa e ferma.
- Movimento continuo (parola che cambia) solo in titoli di hero e CTA, e si ferma con `prefers-reduced-motion`.

## Iconografia

- Icone a tratto 1.5 in celle quadrate con bordo `line`; l'icona attiva ha fondo `primary`.
- Per icone mancanti: `lucide-react` con `strokeWidth={1.5}`.
- Niente emoji, niente illustrazioni 3D, niente foto stock patinate.

## React + Tailwind

Token, classi `al-*`, componenti e preset Tailwind arrivano da `@alpwisestudio/ui` (vedi il suo README): `tailwind.config.ts` usa `presets: [alpwise]`.

- Tema con `data-theme="dark"` (default) o `data-theme="light"` su `<html>`. Foto e vetro restano scuri nei due temi.
- Etichetta: `<Kicker>` oppure `text-kicker text-ink-subtle`. Numeri: `tabular-nums`.
- Prodotti SaaS dei clienti: stessi token e componenti; si cambia la scala `sky-*` col colore del cliente verificando `on-primary` ≥ 4.5:1. Orizzonte e wordmark restano di Alpwise Studio.
