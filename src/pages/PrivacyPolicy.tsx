import { Link } from "react-router-dom";
import { Shield, ArrowLeft } from "lucide-react";

const SectionCard = ({ children }: { children: React.ReactNode }) => (
  <div className="border border-border bg-card p-6 sm:p-8 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-12 h-[2px] bg-primary/40" />
    {children}
  </div>
);

const PrivacyPolicy = () => {
  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Header */}
      <div className="border-b border-border bg-card/50">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link to="/" className="font-body text-sm text-primary hover:text-signal transition-colors inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Torna alla home
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary" />
            <span className="font-display text-xs tracking-[0.2em] uppercase text-signal">
              Super Programmatore
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16 sm:py-24">
        {/* Title area */}
        <div className="flex items-center gap-4 mb-4">
          <Shield className="w-8 h-8 text-primary" />
          <h1 className="font-display text-3xl sm:text-4xl uppercase tracking-tight">
            Privacy Policy
          </h1>
        </div>
        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-[1px] bg-primary" />
          <span className="font-body text-xs uppercase tracking-[0.3em] text-primary font-medium">
            Informativa sul trattamento dei dati personali
          </span>
        </div>
        <p className="font-body text-sm text-muted-foreground mb-16">
          Ai sensi del Regolamento UE 2016/679 (GDPR) e del D.Lgs. 196/2003 (Codice Privacy) come modificato dal D.Lgs. 101/2018.
          <br />
          Ultimo aggiornamento: 10 Marzo 2026
        </p>

        <div className="space-y-6">
          {/* 1. Titolare */}
          <SectionCard>
            <h2 className="font-display text-lg uppercase tracking-tight text-foreground mb-5">
              <span className="text-primary mr-3">01</span>Titolare del Trattamento dei Dati
            </h2>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
              Ai sensi dell'art. 4 e dell'art. 24 del Regolamento UE 2016/679, il Titolare del trattamento dei dati personali è:
            </p>
            <div className="bg-secondary/50 border border-border p-5 space-y-2">
              <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-1 font-body text-sm">
                <span className="text-primary font-medium">Titolare</span>
                <span className="text-foreground">Eugenio Carlo Fontana</span>
                <span className="text-primary font-medium">Sede legale</span>
                <span className="text-foreground">Via Borgo Baldassarre Paoli 53 — 50022 Greve in Chianti (FI), Italia</span>
                <span className="text-primary font-medium">Partita IVA</span>
                <span className="text-foreground">07097370485</span>
                <span className="text-primary font-medium">Codice Fiscale</span>
                <span className="text-foreground">FNTGCR88B12A564Z</span>
                <span className="text-primary font-medium">Email</span>
                <a href="mailto:superprogrammatore@gmail.com" className="text-primary underline hover:text-signal">superprogrammatore@gmail.com</a>
              </div>
            </div>
          </SectionCard>

          {/* 2. Tipologie dati */}
          <SectionCard>
            <h2 className="font-display text-lg uppercase tracking-tight text-foreground mb-5">
              <span className="text-primary mr-3">02</span>Tipologie di Dati Personali Raccolti
            </h2>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">
              Il Titolare raccoglie, direttamente o tramite terze parti, le seguenti categorie di dati personali, nel rispetto del principio di minimizzazione di cui all'art. 5 del GDPR:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "Dati di navigazione",
                  items: [
                    "Indirizzo IP (anonimizzato ove possibile)",
                    "Tipo e versione del browser",
                    "Sistema operativo e dispositivo",
                    "Pagine visitate e percorso di navigazione",
                    "Data, orario e durata della visita",
                    "Sorgente di riferimento (referrer URL)",
                    "Risoluzioni dello schermo e lingua del browser",
                  ],
                },
                {
                  title: "Dati forniti volontariamente",
                  items: [
                    "Nome e cognome",
                    "Indirizzo email",
                    "Dati inseriti nei form di contatto",
                    "Dati di iscrizione alla newsletter",
                    "Dati forniti in fase di acquisto",
                    "Comunicazioni via email o chat",
                  ],
                },
                {
                  title: "Dati di pagamento",
                  items: [
                    "Gestiti esclusivamente da processori certificati PCI-DSS (es. Stripe)",
                    "Non memorizzati sui nostri server",
                    "Dati di fatturazione (nome, indirizzo, codice fiscale/P.IVA)",
                    "Storico transazioni (importo, data, stato)",
                  ],
                },
                {
                  title: "Dati di utilizzo della piattaforma",
                  items: [
                    "Progresso nel percorso formativo",
                    "Lezioni completate e tempo di studio",
                    "Interazioni con le web app educative",
                    "Dati relativi al rilascio dell'attestato",
                  ],
                },
              ].map((cat) => (
                <div key={cat.title} className="border border-border bg-secondary/30 p-4">
                  <h3 className="font-display text-sm uppercase tracking-tight text-signal mb-3">{cat.title}</h3>
                  <ul className="space-y-1.5 font-body text-xs text-muted-foreground">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-primary mt-0.5 flex-shrink-0">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* 3. Finalità */}
          <SectionCard>
            <h2 className="font-display text-lg uppercase tracking-tight text-foreground mb-5">
              <span className="text-primary mr-3">03</span>Finalità del Trattamento
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "A) Erogazione del servizio",
                  base: "Art. 6, par. 1, lett. b) GDPR — Esecuzione contrattuale",
                  desc: "Gestione dell'account utente, accesso ai contenuti del percorso formativo (video, web app educative, materiali didattici), tracciamento del progresso, rilascio dell'attestato di AI Application Builder, assistenza tecnica e supporto clienti, accesso al canale Discord dedicato.",
                },
                {
                  title: "B) Gestione pagamenti e fatturazione",
                  base: "Art. 6, par. 1, lett. b) e c) GDPR — Esecuzione contrattuale e obbligo legale",
                  desc: "Elaborazione delle transazioni di acquisto, emissione di fatture e ricevute, gestione di rimborsi, adempimenti fiscali e contabili previsti dalla normativa italiana.",
                },
                {
                  title: "C) Comunicazioni commerciali e marketing",
                  base: "Art. 6, par. 1, lett. a) GDPR — Consenso",
                  desc: "Previo consenso esplicito e specifico: invio di newsletter, aggiornamenti sul percorso formativo, nuovi contenuti disponibili, offerte promozionali, inviti a eventi o webinar. Il consenso è revocabile in qualsiasi momento.",
                },
                {
                  title: "D) Analisi e miglioramento del servizio",
                  base: "Art. 6, par. 1, lett. f) GDPR — Interesse legittimo",
                  desc: "Analisi statistiche in forma anonima e aggregata per migliorare l'esperienza utente, ottimizzazione dei contenuti formativi in base ai dati di utilizzo, test A/B per migliorare l'interfaccia del sito.",
                },
                {
                  title: "E) Sicurezza e prevenzione frodi",
                  base: "Art. 6, par. 1, lett. f) GDPR — Interesse legittimo",
                  desc: "Prevenzione e rilevamento di attività fraudolente, protezione della sicurezza della piattaforma e degli utenti, monitoraggio di accessi anomali.",
                },
                {
                  title: "F) Adempimenti di legge",
                  base: "Art. 6, par. 1, lett. c) GDPR — Obbligo legale",
                  desc: "Adempimento di obblighi previsti dalla normativa nazionale ed europea, riscontro a richieste dell'Autorità giudiziaria o di altre autorità competenti.",
                },
              ].map((item) => (
                <div key={item.title} className="border-l-2 border-primary/30 pl-5 py-2">
                  <h3 className="font-display text-sm uppercase tracking-tight text-foreground mb-1">{item.title}</h3>
                  <span className="font-body text-[10px] uppercase tracking-wider text-primary bg-primary/[0.08] px-2 py-0.5 inline-block mb-2">
                    {item.base}
                  </span>
                  <p className="font-body text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* 4. Modalità */}
          <SectionCard>
            <h2 className="font-display text-lg uppercase tracking-tight text-foreground mb-5">
              <span className="text-primary mr-3">04</span>Modalità del Trattamento
            </h2>
            <div className="font-body text-sm text-muted-foreground leading-relaxed space-y-4">
              <p>
                Il trattamento dei dati personali viene effettuato mediante strumenti informatici e telematici, con modalità organizzative e logiche strettamente correlate alle finalità sopra indicate, e comunque in modo da garantire la sicurezza, l'integrità e la riservatezza dei dati.
              </p>
              <p>Sono adottate le seguenti misure di sicurezza tecniche e organizzative ai sensi dell'art. 32 del GDPR:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Crittografia dei dati in transito (TLS/SSL)",
                  "Crittografia dei dati a riposo (AES-256)",
                  "Controllo degli accessi basato su ruoli",
                  "Backup periodici e procedure di disaster recovery",
                  "Monitoraggio continuo delle vulnerabilità",
                  "Formazione del personale sulla protezione dati",
                  "Procedure di gestione degli incidenti (data breach)",
                  "Pseudonimizzazione dei dati ove possibile",
                ].map((m) => (
                  <div key={m} className="flex items-start gap-2 bg-secondary/30 p-3 border border-border">
                    <span className="text-signal text-xs mt-0.5">✓</span>
                    <span className="font-body text-xs text-muted-foreground">{m}</span>
                  </div>
                ))}
              </div>
            </div>
          </SectionCard>

          {/* 5. Conservazione */}
          <SectionCard>
            <h2 className="font-display text-lg uppercase tracking-tight text-foreground mb-5">
              <span className="text-primary mr-3">05</span>Periodo di Conservazione dei Dati
            </h2>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">
              I dati personali sono conservati per il tempo strettamente necessario al raggiungimento delle finalità per cui sono stati raccolti, nel rispetto del principio di limitazione della conservazione (art. 5, par. 1, lett. e) del GDPR):
            </p>
            <div className="border border-border bg-secondary/30 overflow-hidden">
              <table className="w-full font-body text-xs">
                <thead>
                  <tr className="border-b border-border bg-secondary/50">
                    <th className="text-left py-3 px-4 text-primary font-medium uppercase tracking-wider">Tipologia dati</th>
                    <th className="text-left py-3 px-4 text-primary font-medium uppercase tracking-wider">Durata conservazione</th>
                    <th className="text-left py-3 px-4 text-primary font-medium uppercase tracking-wider hidden sm:table-cell">Base giuridica</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  {[
                    ["Dati contrattuali e di fatturazione", "10 anni dalla cessazione del rapporto", "Obbligo legale (normativa fiscale)"],
                    ["Dati dell'account e progresso formativo", "Per tutta la durata dell'account + 1 anno", "Esecuzione contrattuale"],
                    ["Dati di navigazione", "Massimo 26 mesi dalla raccolta", "Interesse legittimo"],
                    ["Dati per finalità di marketing", "Fino alla revoca del consenso", "Consenso"],
                    ["Log di sicurezza", "6 mesi dalla registrazione", "Interesse legittimo"],
                    ["Dati di pagamento (su processori terzi)", "Secondo policy del processore (es. Stripe)", "Esecuzione contrattuale"],
                  ].map(([tipo, durata, base]) => (
                    <tr key={tipo} className="border-b border-border/50">
                      <td className="py-3 px-4 text-foreground font-medium">{tipo}</td>
                      <td className="py-3 px-4">{durata}</td>
                      <td className="py-3 px-4 hidden sm:table-cell">{base}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="font-body text-xs text-muted-foreground mt-4">
              Al termine dei periodi sopra indicati, i dati saranno cancellati o resi anonimi in modo irreversibile.
            </p>
          </SectionCard>

          {/* 6. Comunicazione */}
          <SectionCard>
            <h2 className="font-display text-lg uppercase tracking-tight text-foreground mb-5">
              <span className="text-primary mr-3">06</span>Comunicazione e Destinatari dei Dati
            </h2>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">
              I dati personali potranno essere comunicati alle seguenti categorie di destinatari, tutti debitamente nominati Responsabili del trattamento ai sensi dell'art. 28 del GDPR ove necessario:
            </p>
            <div className="space-y-3">
              {[
                { cat: "Fornitori di hosting e infrastruttura", desc: "Per l'erogazione dei servizi web e la memorizzazione sicura dei dati." },
                { cat: "Processori di pagamento", desc: "Stripe, PayPal o equivalenti, certificati PCI-DSS, per la gestione sicura delle transazioni." },
                { cat: "Servizi di email marketing", desc: "Per l'invio di newsletter e comunicazioni (previo consenso)." },
                { cat: "Servizi di analisi", desc: "Google Analytics o equivalenti, con IP anonimizzato e trattamento in forma aggregata." },
                { cat: "Consulenti professionali", desc: "Commercialisti, avvocati e consulenti fiscali per adempimenti di legge." },
                { cat: "Autorità competenti", desc: "Nei casi espressamente previsti dalla legge o su richiesta dell'Autorità giudiziaria." },
              ].map((item) => (
                <div key={item.cat} className="flex items-start gap-3 border-b border-border/30 pb-3">
                  <span className="text-primary font-bold mt-0.5">—</span>
                  <div>
                    <span className="font-body text-sm text-foreground font-medium">{item.cat}</span>
                    <p className="font-body text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="font-body text-sm text-muted-foreground mt-5 font-medium text-foreground">
              I dati personali non saranno in alcun caso venduti, ceduti o diffusi a terzi per finalità proprie.
            </p>
          </SectionCard>

          {/* 7. Trasferimento */}
          <SectionCard>
            <h2 className="font-display text-lg uppercase tracking-tight text-foreground mb-5">
              <span className="text-primary mr-3">07</span>Trasferimento dei Dati Extra-UE
            </h2>
            <div className="font-body text-sm text-muted-foreground leading-relaxed space-y-3">
              <p>
                Alcuni dei fornitori di servizi terzi utilizzati potrebbero avere sede o trattare dati al di fuori dello Spazio Economico Europeo (SEE), in particolare negli Stati Uniti d'America.
              </p>
              <p>In tali casi, il trasferimento dei dati avviene nel rispetto del Capo V del GDPR (artt. 44-49), attraverso una o più delle seguenti garanzie:</p>
              <ul className="space-y-2 list-disc pl-5">
                <li><strong className="text-foreground">Decisione di adeguatezza</strong> della Commissione Europea (art. 45 GDPR), incluso il EU-US Data Privacy Framework ove applicabile.</li>
                <li><strong className="text-foreground">Clausole Contrattuali Standard (SCC)</strong> approvate dalla Commissione Europea (art. 46, par. 2, lett. c) GDPR).</li>
                <li><strong className="text-foreground">Norme vincolanti d'impresa (BCR)</strong> approvate dall'autorità di controllo competente (art. 47 GDPR).</li>
              </ul>
              <p>
                L'utente può richiedere copia delle garanzie adottate scrivendo a{" "}
                <a href="mailto:superprogrammatore@gmail.com" className="text-primary underline hover:text-signal">superprogrammatore@gmail.com</a>.
              </p>
            </div>
          </SectionCard>

          {/* 8. Diritti */}
          <SectionCard>
            <h2 className="font-display text-lg uppercase tracking-tight text-foreground mb-5">
              <span className="text-primary mr-3">08</span>Diritti dell'Interessato
            </h2>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">
              Ai sensi degli articoli 15-22 del Regolamento UE 2016/679, l'utente ha il diritto di:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { right: "Diritto di accesso (art. 15)", desc: "Ottenere conferma dell'esistenza del trattamento e ricevere copia integrale dei propri dati personali." },
                { right: "Diritto di rettifica (art. 16)", desc: "Richiedere la correzione di dati personali inesatti e l'integrazione di dati incompleti." },
                { right: "Diritto alla cancellazione (art. 17)", desc: "Ottenere la cancellazione dei propri dati (\"diritto all'oblio\"), salvo obblighi di legge." },
                { right: "Diritto di limitazione (art. 18)", desc: "Ottenere la limitazione del trattamento nei casi previsti dalla normativa." },
                { right: "Diritto alla portabilità (art. 20)", desc: "Ricevere i propri dati in formato strutturato, di uso comune e leggibile da dispositivo automatico." },
                { right: "Diritto di opposizione (art. 21)", desc: "Opporsi al trattamento dei propri dati per motivi legittimi, incluso il marketing diretto." },
                { right: "Diritto di revoca (art. 7)", desc: "Revocare in qualsiasi momento il consenso prestato, senza pregiudicare la liceità del trattamento precedente." },
                { right: "Processo decisionale automatizzato (art. 22)", desc: "Non essere sottoposto a decisioni basate unicamente su trattamenti automatizzati che producano effetti giuridici." },
              ].map((item) => (
                <div key={item.right} className="border border-border bg-secondary/30 p-4">
                  <h3 className="font-display text-xs uppercase tracking-tight text-signal mb-2">{item.right}</h3>
                  <p className="font-body text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 border border-primary/20 bg-primary/[0.03] p-5">
              <p className="font-body text-sm text-foreground">
                <strong>Come esercitare i tuoi diritti:</strong> invia una richiesta scritta a{" "}
                <a href="mailto:superprogrammatore@gmail.com" className="text-primary underline hover:text-signal">superprogrammatore@gmail.com</a>
                , specificando il diritto che intendi esercitare e allegando copia di un documento di identità. Il Titolare risponderà entro 30 giorni dal ricevimento della richiesta, come previsto dall'art. 12 del GDPR.
              </p>
            </div>
          </SectionCard>

          {/* 9. Reclamo */}
          <SectionCard>
            <h2 className="font-display text-lg uppercase tracking-tight text-foreground mb-5">
              <span className="text-primary mr-3">09</span>Diritto di Reclamo
            </h2>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Ai sensi dell'art. 77 del GDPR, l'utente che ritenga che il trattamento dei propri dati personali violi le disposizioni del Regolamento ha il diritto di proporre reclamo all'Autorità Garante per la Protezione dei Dati Personali:
            </p>
            <div className="bg-secondary/50 border border-border p-5 mt-4 font-body text-sm space-y-1">
              <p className="text-foreground font-medium">Garante per la protezione dei dati personali</p>
              <p className="text-muted-foreground">Piazza Venezia 11 — 00187 Roma</p>
              <p className="text-muted-foreground">
                Sito web:{" "}
                <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-signal">
                  www.garanteprivacy.it
                </a>
              </p>
              <p className="text-muted-foreground">Email: protocollo@gpdp.it</p>
              <p className="text-muted-foreground">PEC: protocollo@pec.gpdp.it</p>
            </div>
          </SectionCard>

          {/* 10. Cookie */}
          <SectionCard>
            <h2 className="font-display text-lg uppercase tracking-tight text-foreground mb-5">
              <span className="text-primary mr-3">10</span>Cookie
            </h2>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Per informazioni dettagliate sull'utilizzo dei cookie, si prega di consultare la nostra{" "}
              <Link to="/cookie-policy" className="text-primary underline hover:text-signal font-medium">Cookie Policy</Link>.
            </p>
          </SectionCard>

          {/* 11. Modifiche */}
          <SectionCard>
            <h2 className="font-display text-lg uppercase tracking-tight text-foreground mb-5">
              <span className="text-primary mr-3">11</span>Modifiche alla Privacy Policy
            </h2>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Il Titolare si riserva il diritto di apportare modifiche alla presente Privacy Policy in qualunque momento, dandone pubblicità agli utenti su questa pagina e, ove possibile, attraverso i canali di contatto del Titolare. Si prega di consultare con frequenza questa pagina, prendendo come riferimento la data di ultimo aggiornamento indicata in alto. Qualora le modifiche riguardino trattamenti basati sul consenso, il Titolare provvederà a raccogliere nuovamente il consenso dell'utente, ove necessario.
            </p>
          </SectionCard>
        </div>

        {/* Footer note */}
        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="font-body text-xs text-muted-foreground">
            Documento redatto ai sensi del Regolamento UE 2016/679 (GDPR) e del D.Lgs. 196/2003 e s.m.i.
          </p>
          <p className="font-body text-xs text-muted-foreground mt-1">
            © 2026 Eugenio Carlo Fontana — P.IVA 07097370485
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
