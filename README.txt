ARTURO RICCOBONO - TRACKING SPESE v71 / iPHONE E ANDROID

Questa versione conserva la grafica della v70: bianco, viola e arancione,
logo AR, home, movimenti, analisi e categorie. Non modifica i calcoli,
il modello dati né la chiave localStorage della v70.

PERCHÉ L'HTML ALLEGATO NON FUNZIONA SU IPHONE?
Quando apri un HTML scaricato dentro ChatGPT, File o l'anteprima iOS,
la pagina può essere mostrata come un documento: JavaScript e memoria
locale potrebbero non essere abilitati. Un'app PWA affidabile deve essere
pubblicata sotto un URL HTTPS, poi aperta direttamente in Safari.

COME OTTENERE IL LINK PUBBLICO (CON PC)
1. Estrai il file ZIP v71 in una cartella.
2. Apri https://app.netlify.com/drop da Chrome o altro browser desktop.
3. Trascina L'INTERA CARTELLA ESTRATTA nel riquadro di pubblicazione.
4. Netlify ti restituisce un indirizzo HTTPS che termina in .netlify.app.
5. Apri quel link su iPhone usando Safari, non il visualizzatore di ChatGPT.
6. Tocca Condividi -> Aggiungi alla schermata Home -> Aggiungi.
7. Avvia l'app dalla sua icona e aprila una volta mentre sei online.

Su Android: apri il link in Chrome -> menu -> Installa app.

ATTENZIONE DATI
I movimenti restano salvati nel browser del dispositivo sul dominio
pubblicato. Non vengono sincronizzati automaticamente con altri device.
Se sposti l'app a un nuovo dominio, importa il backup JSON precedente.
Prima di aggiornare una PWA in uso, esegui Backup Completo JSON.
Non cancellare i dati del sito per risolvere la cache se non hai il backup.

CONTROLLI v71
- Evita il ricaricamento automatico alla prima attivazione del service worker.
- Navigazione network-first online e fallback offline dopo la prima apertura.
- Blocca la registrazione del service worker sui file locali.
- Messaggio esplicativo quando JavaScript è disabilitato.


Versione v72 - PARTENZA PULITA (13 ottobre 2026)
- Rimossi i 14 movimenti dimostrativi di maggio 2026 dalle nuove installazioni.
- Mantiene tutte le categorie di default, i budget, le impostazioni e la grafica approvata.
- Se hai gia usato la versione precedente sullo stesso sito, le vecchie spese possono essere ancora nella memoria del browser.
- Per cancellare le sole uscite dei periodi finanziari precedenti: Impostazioni > Backup e Ripristino > Pulisci spese passate.
- L'operazione chiede conferma e scarica prima un backup JSON. Le entrate, le uscite del periodo corrente, le categorie e i budget sono mantenuti.
- Il periodo segue la regola dello stipendio il 27, anticipato al giorno lavorativo precedente se necessario.
- ATTENZIONE: con l'anteprima HTML aperta come file su iPhone i dati potrebbero non salvarsi. Per usare l'app, pubblica TUTTI i file su hosting HTTPS e apri il link con Safari.
- Per pubblicare rapidamente: carica il contenuto del pacchetto estratto su GitHub Pages o Netlify Drop. Non caricare backup JSON personali.
- Su iPhone: Safari > Condividi > Aggiungi alla schermata Home.
- Su Android: Chrome > Installa app / Aggiungi alla schermata Home.
