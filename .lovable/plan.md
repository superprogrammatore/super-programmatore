

## Problema

Il problema e causato dalle animazioni di **Framer Motion** con `initial={{ opacity: 0 }}` e `whileInView` con `viewport={{ margin: "-100px" }}`. Su schermi piccoli come iPhone, gli elementi partono invisibili e il margine negativo del viewport ritarda il trigger dell'animazione. Questo crea grandi spazi vuoti neri dove gli elementi esistono ma non sono ancora visibili.

Le sezioni coinvolte sono principalmente:
- **CareerSection**: stats grid, colonne "Dove sei oggi"/"Dove puoi arrivare", e bottom emphasis hanno tutti `opacity: 0` iniziale con viewport margins negativi
- **MethodSection**: stessi pattern
- **ProblemSection**, **VideoSection**, **CertificateSection**, **FinalCTA**: pattern simili

## Soluzione

Ridurre o rimuovere i `margin` negativi dal `viewport` di tutte le animazioni `whileInView` nelle sezioni principali:

1. Cambiare `margin: "-100px"` a `margin: "-50px"` per i blocchi principali
2. Rimuovere completamente `margin` dai sotto-elementi (stats, cards, ecc.)
3. Questo farà triggerare le animazioni prima, evitando lo spazio nero su mobile

Sezioni da modificare:
- `CareerSection.tsx` - 4 motion.div con viewport margins
- `MethodSection.tsx` - motion.div con `-100px` e `-50px`
- `ProblemSection.tsx` - motion.div con `-100px`
- `VideoSection.tsx` - motion.div con `-100px` e `-50px`
- `CertificateSection.tsx` - motion.div con `-100px`
- `FinalCTA.tsx` - motion.div con `-100px`

