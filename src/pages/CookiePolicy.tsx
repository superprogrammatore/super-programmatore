import { Link } from "react-router-dom";
import { Cookie, ArrowLeft } from "lucide-react";

const SectionCard = ({ children }: { children: React.ReactNode }) => (
  <div className="border border-border bg-card p-6 sm:p-8 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-12 h-[2px] bg-primary/40" />
    {children}
  </div>
);

const CookiePolicy = () => {
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
          <Cookie className="w-8 h-8 text-primary" />
          <h1 className="font-display text-3xl sm:text-4xl uppercase tracking-tight">
            Cookie Policy
          </h1>
        </div>
        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-[1px] bg-primary" />
          <span className="font-body text-xs uppercase tracking-[0.3em] text-primary font-medium">
            Informativa sull'utilizzo dei cookie
          </span>
        </div>
        <p className="font-body text-sm text-muted-foreground mb-16">
          Ai sensi dell'art. 122 del D.Lgs. 196/2003, del Provvedimento del Garante Privacy n. 229/2014 e delle Linee Guida sui cookie del 10 giugno 2021, nonché del Regolamento UE 2016/679 (GDPR).
          <br />
          Ultimo aggiornamento: 10 Marzo 2026
        </p>

        <div className="space-y-6">
          {/* 1. Titolare */}
          <SectionCard>
            <h2 className="font-display text-lg uppercase tracking-tight text-foreground mb-5">
              <span className="text-primary mr-3">01</span>Titolare del Trattamento
            </h2>
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

          {/* 2. Cosa sono */}
          <SectionCard>
            <h2 className="font-display text-lg uppercase tracking-tight text-foreground mb-5">
              <span className="text-primary mr-3">02</span>Cosa Sono i Cookie
            </h2>
            <div className="font-body text-sm text-muted-foreground leading-relaxed space-y-3">
              <p>
                I cookie sono piccoli file di testo che i siti web visitati dall'utente inviano al suo terminale (computer, tablet, smartphone), dove vengono memorizzati per essere ritrasmessi agli stessi siti alla visita successiva.
              </p>
              <p>
                I cookie permettono ai siti di funzionare correttamente e in modo efficiente, nonché di fornire informazioni ai proprietari del sito. Possono essere impostati dal sito che stai visitando ("cookie di prima parte") o da altri siti web ("cookie di terze parti").
              </p>
              <p>
                Oltre ai cookie, esistono altre tecnologie di tracciamento simili come web beacon, pixel tag e local storage, a cui si applicano le stesse regole e garanzie previste per i cookie.
              </p>
            </div>
          </SectionCard>

          {/* 3. Tipologie */}
          <SectionCard>
            <h2 className="font-display text-lg uppercase tracking-tight text-foreground mb-5">
              <span className="text-primary mr-3">03</span>Tipologie di Cookie Utilizzati
            </h2>

            <div className="space-y-8">
              {/* Tecnici */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-signal/10 border border-signal/30 text-signal font-body text-[10px] uppercase tracking-wider px-3 py-1 font-semibold">
                    Non richiedono consenso
                  </span>
                </div>
                <h3 className="font-display text-base uppercase tracking-tight text-foreground mb-3">
                  3.1 Cookie Tecnici / Necessari
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                  Questi cookie sono indispensabili per il corretto funzionamento del sito e non possono essere disattivati nei nostri sistemi. Vengono generalmente impostati solo in risposta ad azioni compiute dall'utente che costituiscono una richiesta di servizi, come l'impostazione delle preferenze di privacy, l'accesso ad aree riservate o la compilazione di form. Non raccolgono informazioni a fini di marketing.
                </p>
                <div className="border border-border bg-secondary/30 overflow-hidden">
                  <table className="w-full font-body text-xs">
                    <thead>
                      <tr className="border-b border-border bg-secondary/50">
                        <th className="text-left py-3 px-4 text-primary font-medium uppercase tracking-wider">Nome Cookie</th>
                        <th className="text-left py-3 px-4 text-primary font-medium uppercase tracking-wider">Fornitore</th>
                        <th className="text-left py-3 px-4 text-primary font-medium uppercase tracking-wider">Finalità</th>
                        <th className="text-left py-3 px-4 text-primary font-medium uppercase tracking-wider hidden sm:table-cell">Tipo</th>
                        <th className="text-left py-3 px-4 text-primary font-medium uppercase tracking-wider">Durata</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-4 text-foreground font-medium">cookie-consent</td>
                        <td className="py-3 px-4">Prima parte</td>
                        <td className="py-3 px-4">Memorizza la scelta dell'utente riguardo ai cookie</td>
                        <td className="py-3 px-4 hidden sm:table-cell">Persistente</td>
                        <td className="py-3 px-4">12 mesi</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-4 text-foreground font-medium">session_id</td>
                        <td className="py-3 px-4">Prima parte</td>
                        <td className="py-3 px-4">Mantiene la sessione dell'utente autenticato</td>
                        <td className="py-3 px-4 hidden sm:table-cell">Sessione</td>
                        <td className="py-3 px-4">Fine sessione</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Analitici */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-primary/10 border border-primary/30 text-primary font-body text-[10px] uppercase tracking-wider px-3 py-1 font-semibold">
                    Richiedono consenso
                  </span>
                </div>
                <h3 className="font-display text-base uppercase tracking-tight text-foreground mb-3">
                  3.2 Cookie Analitici
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                  Questi cookie ci permettono di contare le visite e le fonti di traffico, in modo da poter valutare e migliorare le prestazioni del nostro sito. Ci aiutano a capire quali pagine sono più popolari, quali meno, e come i visitatori si muovono all'interno del sito. Tutte le informazioni raccolte sono aggregate e anonime. Se non consenti questi cookie, non sapremo quando hai visitato il nostro sito.
                </p>
                <div className="border border-border bg-secondary/30 overflow-hidden">
                  <table className="w-full font-body text-xs">
                    <thead>
                      <tr className="border-b border-border bg-secondary/50">
                        <th className="text-left py-3 px-4 text-primary font-medium uppercase tracking-wider">Nome Cookie</th>
                        <th className="text-left py-3 px-4 text-primary font-medium uppercase tracking-wider">Fornitore</th>
                        <th className="text-left py-3 px-4 text-primary font-medium uppercase tracking-wider">Finalità</th>
                        <th className="text-left py-3 px-4 text-primary font-medium uppercase tracking-wider hidden sm:table-cell">Tipo</th>
                        <th className="text-left py-3 px-4 text-primary font-medium uppercase tracking-wider">Durata</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-4 text-foreground font-medium">_ga</td>
                        <td className="py-3 px-4">Google Analytics</td>
                        <td className="py-3 px-4">Distingue gli utenti unici assegnando un ID generato casualmente</td>
                        <td className="py-3 px-4 hidden sm:table-cell">Persistente</td>
                        <td className="py-3 px-4">24 mesi</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-4 text-foreground font-medium">_ga_*</td>
                        <td className="py-3 px-4">Google Analytics</td>
                        <td className="py-3 px-4">Mantiene lo stato della sessione</td>
                        <td className="py-3 px-4 hidden sm:table-cell">Persistente</td>
                        <td className="py-3 px-4">24 mesi</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-4 text-foreground font-medium">_gid</td>
                        <td className="py-3 px-4">Google Analytics</td>
                        <td className="py-3 px-4">Distingue gli utenti</td>
                        <td className="py-3 px-4 hidden sm:table-cell">Persistente</td>
                        <td className="py-3 px-4">24 ore</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-foreground font-medium">_gat</td>
                        <td className="py-3 px-4">Google Analytics</td>
                        <td className="py-3 px-4">Limita la frequenza delle richieste al server</td>
                        <td className="py-3 px-4 hidden sm:table-cell">Sessione</td>
                        <td className="py-3 px-4">1 minuto</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="font-body text-xs text-muted-foreground mt-3">
                  <strong className="text-foreground">Nota:</strong> Google Analytics è configurato con IP anonimizzato (proprietà anonymizeIp) ai sensi del Provvedimento del Garante Privacy del 9 giugno 2022.
                </p>
              </div>

              {/* Profilazione */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-primary/10 border border-primary/30 text-primary font-body text-[10px] uppercase tracking-wider px-3 py-1 font-semibold">
                    Richiedono consenso
                  </span>
                </div>
                <h3 className="font-display text-base uppercase tracking-tight text-foreground mb-3">
                  3.3 Cookie di Profilazione e Marketing
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                  Questi cookie possono essere impostati attraverso il nostro sito dai nostri partner pubblicitari. Possono essere utilizzati per costruire un profilo dei tuoi interessi e mostrarti annunci pertinenti su altri siti. Si basano sull'identificazione univoca del tuo browser e del tuo dispositivo Internet. Se non consenti questi cookie, vedrai pubblicità meno mirata.
                </p>
              </div>

              {/* Terze parti */}
              <div>
                <h3 className="font-display text-base uppercase tracking-tight text-foreground mb-3">
                  3.4 Cookie di Terze Parti
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                  Il sito può includere componenti e servizi forniti da terze parti che possono installare cookie propri sul dispositivo dell'utente:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    {
                      name: "Google Analytics",
                      purpose: "Analisi statistica del traffico web",
                      privacy: "https://policies.google.com/privacy",
                    },
                    {
                      name: "Stripe",
                      purpose: "Gestione sicura dei pagamenti online",
                      privacy: "https://stripe.com/privacy",
                    },
                    {
                      name: "YouTube / Vimeo",
                      purpose: "Incorporamento e riproduzione di contenuti video",
                      privacy: "https://policies.google.com/privacy",
                    },
                    {
                      name: "Discord",
                      purpose: "Widget e integrazioni della community",
                      privacy: "https://discord.com/privacy",
                    },
                  ].map((service) => (
                    <div key={service.name} className="border border-border bg-secondary/30 p-4">
                      <h4 className="font-display text-sm uppercase tracking-tight text-signal mb-1">{service.name}</h4>
                      <p className="font-body text-xs text-muted-foreground mb-2">{service.purpose}</p>
                      <a href={service.privacy} target="_blank" rel="noopener noreferrer" className="font-body text-[10px] text-primary underline hover:text-signal">
                        Privacy policy del fornitore →
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SectionCard>

          {/* 4. Base giuridica */}
          <SectionCard>
            <h2 className="font-display text-lg uppercase tracking-tight text-foreground mb-5">
              <span className="text-primary mr-3">04</span>Base Giuridica
            </h2>
            <div className="font-body text-sm text-muted-foreground leading-relaxed space-y-3">
              <p>
                Ai sensi dell'art. 122 del D.Lgs. 196/2003 (come modificato dal D.Lgs. 69/2012), del Provvedimento del Garante per la protezione dei dati personali n. 229 dell'8 maggio 2014, delle Linee Guida sui cookie e altri strumenti di tracciamento del 10 giugno 2021, nonché del Regolamento UE 2016/679 (GDPR):
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                <div className="border-l-2 border-signal/50 pl-4 py-2">
                  <h3 className="font-display text-xs uppercase tracking-tight text-signal mb-1">Cookie tecnici</h3>
                  <p className="text-xs">Non richiedono il consenso preventivo dell'utente e vengono installati automaticamente in quanto strettamente necessari al funzionamento del sito.</p>
                </div>
                <div className="border-l-2 border-primary/50 pl-4 py-2">
                  <h3 className="font-display text-xs uppercase tracking-tight text-primary mb-1">Cookie non tecnici</h3>
                  <p className="text-xs">I cookie analitici, di profilazione e di terze parti vengono installati solo previo consenso esplicito, libero, specifico e informato dell'utente, espresso tramite il banner cookie al primo accesso al sito.</p>
                </div>
              </div>
            </div>
          </SectionCard>

          {/* 5. Gestione */}
          <SectionCard>
            <h2 className="font-display text-lg uppercase tracking-tight text-foreground mb-5">
              <span className="text-primary mr-3">05</span>Come Gestire i Cookie
            </h2>

            <div className="space-y-6 font-body text-sm text-muted-foreground leading-relaxed">
              <div>
                <h3 className="font-display text-sm uppercase tracking-tight text-foreground mb-3">5.1 Tramite il Banner Cookie</h3>
                <p>
                  Al primo accesso al sito, viene mostrato un banner informativo che consente all'utente di esprimere o negare il consenso all'installazione di cookie non tecnici. La scelta viene memorizzata e può essere modificata in qualsiasi momento.
                </p>
              </div>

              <div>
                <h3 className="font-display text-sm uppercase tracking-tight text-foreground mb-3">5.2 Tramite le Impostazioni del Browser</h3>
                <p className="mb-4">
                  L'utente può gestire i cookie anche attraverso le impostazioni del proprio browser. Di seguito i link alle guide ufficiali dei principali browser:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    { name: "Google Chrome", url: "https://support.google.com/chrome/answer/95647" },
                    { name: "Mozilla Firefox", url: "https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" },
                    { name: "Apple Safari", url: "https://support.apple.com/it-it/guide/safari/sfri11471/mac" },
                    { name: "Microsoft Edge", url: "https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" },
                    { name: "Opera", url: "https://help.opera.com/en/latest/web-preferences/#cookies" },
                    { name: "Brave", url: "https://support.brave.com/hc/en-us/articles/360017989132" },
                  ].map((b) => (
                    <a
                      key={b.name}
                      href={b.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border border-border bg-secondary/30 px-4 py-3 hover:border-primary/30 transition-colors group"
                    >
                      <span className="text-primary group-hover:text-signal transition-colors">→</span>
                      <span className="text-sm text-foreground">{b.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-display text-sm uppercase tracking-tight text-foreground mb-3">5.3 Tramite servizi di opt-out</h3>
                <p>
                  Per i cookie di Google Analytics, è possibile installare il componente aggiuntivo del browser per la disattivazione:{" "}
                  <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-signal">
                    Google Analytics Opt-out Browser Add-on
                  </a>
                </p>
              </div>

              <div className="border border-primary/20 bg-primary/[0.03] p-5">
                <p className="text-foreground">
                  <strong>⚠️ Nota importante:</strong> La disabilitazione dei cookie tecnici potrebbe compromettere il corretto funzionamento del sito e impedire l'accesso ad alcune funzionalità, incluso l'accesso al percorso formativo.
                </p>
              </div>
            </div>
          </SectionCard>

          {/* 6. Conservazione */}
          <SectionCard>
            <h2 className="font-display text-lg uppercase tracking-tight text-foreground mb-5">
              <span className="text-primary mr-3">06</span>Durata dei Cookie
            </h2>
            <div className="font-body text-sm text-muted-foreground leading-relaxed space-y-3">
              <p>
                I cookie hanno una durata variabile a seconda della tipologia:
              </p>
              <ul className="space-y-2 list-disc pl-5">
                <li><strong className="text-foreground">Cookie di sessione:</strong> vengono eliminati automaticamente alla chiusura del browser.</li>
                <li><strong className="text-foreground">Cookie persistenti:</strong> hanno una durata massima specificata nelle tabelle della sezione 3 di questa policy. L'utente può comunque eliminare i cookie persistenti in qualsiasi momento tramite le impostazioni del browser.</li>
              </ul>
              <p>
                In ogni caso, i cookie non saranno conservati per un periodo superiore a 24 mesi dalla data di installazione, in conformità con le Linee Guida del Garante Privacy.
              </p>
            </div>
          </SectionCard>

          {/* 7. Diritti */}
          <SectionCard>
            <h2 className="font-display text-lg uppercase tracking-tight text-foreground mb-5">
              <span className="text-primary mr-3">07</span>Diritti dell'Utente
            </h2>
            <div className="font-body text-sm text-muted-foreground leading-relaxed space-y-3">
              <p>
                In relazione al trattamento dei dati personali effettuato tramite cookie, l'utente può esercitare i diritti previsti dagli artt. 15-22 del Regolamento UE 2016/679 (GDPR), tra cui:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  "Diritto di accesso ai propri dati",
                  "Diritto di rettifica",
                  "Diritto alla cancellazione",
                  "Diritto alla limitazione del trattamento",
                  "Diritto alla portabilità dei dati",
                  "Diritto di opposizione",
                  "Diritto di revoca del consenso",
                ].map((right) => (
                  <div key={right} className="flex items-start gap-2 bg-secondary/30 border border-border px-3 py-2">
                    <span className="text-signal text-xs mt-0.5">✓</span>
                    <span className="text-xs">{right}</span>
                  </div>
                ))}
              </div>
              <p>
                Per esercitare i propri diritti, scrivere a:{" "}
                <a href="mailto:superprogrammatore@gmail.com" className="text-primary underline hover:text-signal">superprogrammatore@gmail.com</a>
              </p>
              <p>
                Per maggiori informazioni sul trattamento dei dati personali, consultare la nostra{" "}
                <Link to="/privacy-policy" className="text-primary underline hover:text-signal font-medium">Privacy Policy</Link>.
              </p>
              <p>
                L'utente ha inoltre il diritto di proporre reclamo all'Autorità Garante per la Protezione dei Dati Personali:{" "}
                <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-signal">www.garanteprivacy.it</a>
              </p>
            </div>
          </SectionCard>

          {/* 8. Aggiornamenti */}
          <SectionCard>
            <h2 className="font-display text-lg uppercase tracking-tight text-foreground mb-5">
              <span className="text-primary mr-3">08</span>Aggiornamenti alla Cookie Policy
            </h2>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              La presente Cookie Policy può essere soggetta a modifiche e aggiornamenti. Ogni eventuale modifica sarà pubblicata su questa pagina con indicazione della data di ultimo aggiornamento. In caso di modifiche sostanziali, l'utente sarà nuovamente invitato a esprimere il consenso tramite il banner cookie. Si invita l'utente a consultare periodicamente questa pagina.
            </p>
          </SectionCard>
        </div>

        {/* Footer note */}
        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="font-body text-xs text-muted-foreground">
            Documento redatto ai sensi del D.Lgs. 196/2003, delle Linee Guida del Garante Privacy del 10/06/2021 e del Regolamento UE 2016/679.
          </p>
          <p className="font-body text-xs text-muted-foreground mt-1">
            © 2026 Eugenio Carlo Fontana — P.IVA 07097370485
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
