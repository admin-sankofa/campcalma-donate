import React, { useEffect, useMemo, useState } from 'react';
import './App.css';

// Minimal i18n for the standalone page (keeps multilingual support)
const i18n = {
  de: {
    title: 'Sankofa Living & Learning Projects',
    subtitle: 'Übersicht & Zusammenfassung',
    mission: 'Unsere Mission',
    mission_text:
      'Jede Spende zählt gleich, unabhängig davon, ob sie allgemein oder für ein spezielles Projekt gegeben wird.',
    restart: 'Neustarthilfe',
    restart_text:
      'Unterstützung für Mitglieder, Creator und Offgrid-Pioniere, die mit neuen Ideen starten oder ihren Weg in ein nachhaltiges Leben finden möchten.',
    safe_harbor: 'Sicherer Hafen',
    safe_harbor_text:
      'Schutz- und Entwicklungsraum für Menschen, die Teil der Community sind – mit Fokus auf Stabilität, gemeinsames Wachstum und langfristige Perspektiven.',
    transparency: 'Transparenz & Dynamik',
    transparency_text:
      'Diese Seite ist als moderne, dynamische Crowdfunding-Übersicht konzipiert.',
    general_donations: 'Allgemeine Spendenmöglichkeiten',
    donate_camp: '🌿 Donation and Support for Camp Calma',
    donate_sankofa: '🌍 Donation and Support for Sankofa Living & Learning',
    how_crowdfunding: 'So funktioniert das Crowdfunding',
    raffle_rule:
      'Jede Spende in den Projekten 2 bis 6 sichert dir Lose für die Auslosung des jeweiligen Projekts. Die Anzahl der Lose hängt dabei von der Höhe deiner Spende ab:',
    amount_10: '10 €',
    amount_20: '20 €',
    amount_30: '30 €',
    amount_100: '100 €',
    yields: 'ergeben',
    tickets_20: '20 Lose',
    tickets_80: '80 Lose',
    tickets_160: '160 Lose',
    one_time: 'Einmalige Spende',
    law_text:
      'Das Sammeln von Spenden über Lose und Verlosungen in Portugal unterliegt strengen gesetzlichen Regelungen. Dies ist im Wesentlichen im portugiesischen Gesetzesdekret Nr. 422/89 vom 2. Dezember geregelt, das die Durchführung von Glücksspielen und Lotterien festlegt. Solche Aktivitäten benötigen eine offizielle Genehmigung der zuständigen Behörden, in der Regel des ',
    ministry: 'Ministério da Administração Interna',
    project_donations: 'Projektbezogene Spenden & Crowdfunding',
    ends_in: 'Endet in:',
    donate_now: 'Jetzt spenden',
    expired: 'Abgelaufen',
    summary_title: 'Zusammenfassung für die Website',
    summary_items: [
      'Spenden allgemein oder projektbezogen – alles zählt gleich',
      'Dynamische Übersicht mit Live-Beträgen (Google Sheet Integration)',
      'Neustarthilfe & Sicherer Hafen schaffen langfristige Sicherheit und Perspektive',
      'Giveaways & Verlosungen schaffen Mehrwert für die Community',
      'Minimalistisches, klares Design: Jeder sieht sofort, was erreicht wurde und was noch fehlt',
    ],
    footer: '© 2024 Sankofa Living & Learning Projects. All rights reserved.',
  },
  en: {
    title: 'Sankofa Living & Learning Projects',
    subtitle: 'Overview & Summary',
    mission: 'Our Mission',
    mission_text:
      'Every donation counts equally, whether general or project‑specific.',
    restart: 'Fresh Start Support',
    restart_text:
      'Support for members, creators and off‑grid pioneers starting with new ideas or seeking a sustainable life.',
    safe_harbor: 'Safe Harbor',
    safe_harbor_text:
      'A protected space for stability, growth and long‑term perspective.',
    transparency: 'Transparency & Dynamics',
    transparency_text: 'This page is a modern, dynamic crowdfunding overview.',
    general_donations: 'General Donation Options',
    donate_camp: '🌿 Donation and Support for Camp Calma',
    donate_sankofa: '🌍 Donation and Support for Sankofa Living & Learning',
    how_crowdfunding: 'How the Crowdfunding Works',
    raffle_rule:
      'Each donation in projects 2–6 earns you tickets for that project’s raffle. The number of tickets depends on your donation amount:',
    amount_10: '€10',
    amount_20: '€20',
    amount_30: '€30',
    amount_100: '€100',
    yields: 'gives',
    tickets_20: '20 tickets',
    tickets_80: '80 tickets',
    tickets_160: '160 tickets',
    one_time: 'One‑time donation',
    law_text:
      'Raffles and lottery‑style fundraising in Portugal are regulated and need approval, typically by the ',
    ministry: 'Ministério da Administração Interna',
    project_donations: 'Project‑based Donations & Crowdfunding',
    ends_in: 'Ends in:',
    donate_now: 'Donate now',
    expired: 'Expired',
    summary_title: 'Website Summary',
    summary_items: [
      'Donate generally or per project — all counts the same',
      'Dynamic overview with live totals (Google Sheets integration)',
      'Fresh Start & Safe Harbor provide long‑term stability',
      'Giveaways & raffles add value for the community',
      'Minimal, clear design: see progress at a glance',
    ],
    footer: '© 2024 Sankofa Living & Learning Projects. All rights reserved.',
  },
  pt: {
    title: 'Sankofa Living & Learning Projects',
    subtitle: 'Visão geral & resumo',
    mission: 'Nossa missão',
    mission_text:
      'Toda doação conta igualmente, seja geral ou para um projeto específico.',
    restart: 'Ajuda para recomeço',
    restart_text:
      'Apoio para membros, criadores e pioneiros off‑grid com novas ideias ou rumo a uma vida sustentável.',
    safe_harbor: 'Porto seguro',
    safe_harbor_text:
      'Espaço de proteção e desenvolvimento com foco na estabilidade, crescimento e perspectiva.',
    transparency: 'Transparência & Dinâmica',
    transparency_text: 'Página de visão geral de crowdfunding dinâmica e moderna.',
    general_donations: 'Opções de doação geral',
    donate_camp: '🌿 Doação e apoio para Camp Calma',
    donate_sankofa: '🌍 Doação e apoio para Sankofa Living & Learning',
    how_crowdfunding: 'Como funciona o crowdfunding',
    raffle_rule:
      'Cada doação nos projetos 2–6 garante bilhetes para o sorteio correspondente. A quantidade depende do valor doado:',
    amount_10: '10 €',
    amount_20: '20 €',
    amount_30: '30 €',
    amount_100: '100 €',
    yields: 'resulta em',
    tickets_20: '20 bilhetes',
    tickets_80: '80 bilhetes',
    tickets_160: '160 bilhetes',
    one_time: 'Doação única',
    law_text:
      'Arrecadações com rifas em Portugal são reguladas e precisam de autorização, normalmente do ',
    ministry: 'Ministério da Administração Interna',
    project_donations: 'Doações por projeto & crowdfunding',
    ends_in: 'Termina em:',
    donate_now: 'Doar agora',
    expired: 'Expirado',
    summary_title: 'Resumo para o site',
    summary_items: [
      'Doações gerais ou por projeto — tudo conta igual',
      'Visão dinâmica com totais ao vivo (integração Google Sheets)',
      'Ajuda para recomeço & Porto seguro criam estabilidade',
      'Giveaways & sorteios agregam valor à comunidade',
      'Design minimalista e claro: progresso visível de imediato',
    ],
    footer: '© 2024 Sankofa Living & Learning Projects. Todos os direitos reservados.',
  },
};

const YT_ID = 'sG3dgRxuIHc';

const DEADLINES = {
  1: new Date('2025-09-26T18:00:00-07:00').getTime(),
  2: new Date('2025-10-03T23:59:59').getTime(),
  3: new Date('2025-10-03T23:59:59').getTime(),
  4: new Date('2025-10-30T18:00:00-07:00').getTime(),
  5: new Date('2025-10-30T23:59:59').getTime(),
  6: new Date('2025-10-15T23:59:59').getTime(),
};

function useCountdownMap(ids) {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  return useMemo(() => {
    const map = {};
    ids.forEach((id) => {
      const end = DEADLINES[id];
      if (!end) return;
      const distance = end - now;
      if (distance <= 0) {
        map[id] = { expired: true, text: '' };
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        map[id] = { expired: false, text: `${days}d ${hours}h ${minutes}m ${seconds}s` };
      }
    });
    return map;
  }, [now, ids]);
}

const projects = [
  { id: 1, title: '1. Giveaway', desc: 'Ein Giveaway für die Community, um den Aufbau und die Unterstützung von Sankofa Living & Learning zu feiern.', target: 100, current: 100, tags: ['Kostenlos', 'Starthilfe', 'Creator'], link: null },
  { id: 2, title: '2. Ausbau Quinta Calma', desc: 'Dieses Projekt dient dem Ausbau von Quinta Calma, um mehr Raum für Projekte und Retreats zu schaffen.', target: 15000, current: 8250, tags: ['Starthilfe', 'Creator', 'Crowdfunding'], link: 'https://donation.sankofa-ngo.org/b/14A5kFebJ3n317J9soe3e02' },
  { id: 3, title: '3. Neues Mobilheim', desc: 'Unterstütze das Crowdfunding für ein neues Mobilheim, das mehr nachhaltigen Wohnraum für Pioniere bietet.', target: 20000, current: 11000, tags: ['Starthilfe', 'Offgrid', 'Crowdfunding'], link: 'https://donation.sankofa-ngo.org/b/14A5kFebJ3n317J9soe3e02' },
  { id: 4, title: '4. Neues Mobilheim', desc: 'Dieses Projekt ist exklusiv für Mitglieder und ermöglicht den Erwerb eines Mobilheims, um fest in der Community zu leben.', target: 29000, current: 15000, tags: ['Member only Giveaway', 'Neustarthilfe', 'Sicherer Hafen', 'Offgrid', 'Creator'], link: 'https://donation.sankofa-ngo.org/b/14A5kFebJ3n317J9soe3e02' },
  { id: 5, title: '5. Neues Mobilheim', desc: 'Ein weiteres Projekt für Mitglieder, um einen Campervan für flexible Reisen und das Leben in der Community zu finanzieren.', target: 25000, current: 10000, tags: ['Member only Giveaway', 'Neustarthilfe', 'Sicherer Hafen', 'Travel', 'Creator'], link: 'https://donation.sankofa-ngo.org/b/14A5kFebJ3n317J9soe3e02' },
  { id: 6, title: '6. Upgrade Camp Calma Landscape', desc: 'Hilf mit, die Landschaft von Camp Calma zu verbessern, um eine noch schönere und funktionalere Umgebung zu schaffen.', target: 28000, current: 9500, tags: ['Member only Giveaway', 'Neustarthilfe', 'Sicherer Hafen', 'Travel', 'Creator'], link: 'https://donation.sankofa-ngo.org/b/14A5kFebJ3n317J9soe3e02' },
  { id: 7, title: '7. Afro Village', desc: '', target: 5000, current: 2500, tags: ['Neustarthilfe', 'Sicherer Hafen', 'App', 'Community'], link: 'https://afrovillage.sankofa-ngo.org/' },
  { id: 8, title: '8. Donation and Support for Nilua', desc: '', target: 5000, current: 0, tags: ['Community', 'Support', 'Nilua', 'Music'], link: 'https://donation.sankofa-ngo.org/b/14A5kFebJ3n317J9soe3e02' },
  { id: 9, title: '9. Sankofa Village – Ein Dorf der Autarkie', desc: 'Schritt für Schritt bauen wir ein Dorf, das Lernen, Gemeinschaft und Selbstversorgung lebt. Jeder Beitrag baut mit.', target: 1000000, current: 325000, tags: ['Community', 'Offgrid', 'Bildung', 'Nachhaltigkeit'], link: 'https://sankofavillage.sankofa-ngo.org/' },
];

function Tag({ children }) {
  return (
    <span className="bg-gray-200 text-green-700 text-sm font-medium px-2 py-0.5 rounded-full border border-green-400">
      {children}
    </span>
  );
}

function Progress({ current, target }) {
  const pct = Math.min((current / target) * 100, 100);
  return (
    <div className="w-full bg-gray-300 rounded-full h-2.5 my-4">
      <div className="bg-green-500 h-2.5 rounded-full progress-fill" style={{ width: `${pct}%` }} />
    </div>
  );
}

function Currency({ value }) {
  return <>{value.toLocaleString('de-DE')} €</>;
}

export default function App() {
  const [lang, setLang] = useState('de');
  const t = i18n[lang];
  const countdownMap = useCountdownMap([1, 2, 3, 4, 5, 6]);

  return (
    <div className="bg-gray-100 text-gray-900 antialiased">
      <div className="container mx-auto px-4 py-8 md:py-16">
        {/* Simple language switcher (preserves multilingual background) */}
        <div className="flex justify-end mb-4">
          <select
            className="bg-white border border-gray-300 rounded-full px-4 py-2 text-sm shadow-sm"
            value={lang}
            onChange={(e) => setLang(e.target.value)}
          >
            <option value="de">DE</option>
            <option value="en">EN</option>
            <option value="pt">PT</option>
          </select>
        </div>

        {/* Hero with background image */}
        <section className="hero-background rounded-3xl overflow-hidden mb-12">
          <div className="hero-min-h bg-black/50 flex flex-col items-center justify-center text-center px-6 md:px-12 py-20 md:py-28 text-white">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-md">{t.title}</h1>
            <p className="mt-4 text-2xl font-light opacity-90">{t.subtitle}</p>
          </div>
        </section>

        {/* Tiles */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-300">
              <h2 className="text-2xl font-semibold mb-3 text-green-600">{t.mission}</h2>
              <p className="text-gray-700 text-sm">{t.mission_text}</p>
            </div>
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-300">
              <h2 className="text-2xl font-semibold mb-3 text-green-600">{t.restart}</h2>
              <p className="text-gray-700 text-sm">{t.restart_text}</p>
            </div>
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-300">
              <h2 className="text-2xl font-semibold mb-3 text-green-600">{t.safe_harbor}</h2>
              <p className="text-gray-700 text-sm">{t.safe_harbor_text}</p>
            </div>
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-300">
              <h2 className="text-2xl font-semibold mb-3 text-green-600">{t.transparency}</h2>
              <p className="text-gray-700 text-sm">{t.transparency_text}</p>
            </div>
          </div>
        </section>

        {/* General Donations */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-green-600 text-center">{t.general_donations}</h2>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a
              href="#"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 text-center"
            >
              {t.donate_camp}
            </a>
            <a
              href="#"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 text-center"
            >
              {t.donate_sankofa}
            </a>
          </div>
        </section>

        {/* Crowdfunding rules */}
        <section className="mb-16">
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-300">
            <h2 className="text-2xl font-semibold mb-4 text-green-600 text-center">{t.how_crowdfunding}</h2>
            <p className="text-gray-700 text-center">{t.raffle_rule}</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6 text-center">
              <div className="flex-1 p-4 bg-gray-50 rounded-xl shadow-inner border border-gray-200">
                <span className="text-lg font-bold text-green-600">{t.amount_10}</span><br />
                <span className="text-sm text-gray-700">{t.yields}</span><br />
                <span className="text-2xl font-extrabold text-gray-900">{t.tickets_20}</span>
              </div>
              <div className="flex-1 p-4 bg-gray-50 rounded-xl shadow-inner border border-gray-200">
                <span className="text-lg font-bold text-green-600">{t.amount_20}</span><br />
                <span className="text-sm text-gray-700">{t.yields}</span><br />
                <span className="text-2xl font-extrabold text-gray-900">{t.tickets_80}</span>
              </div>
              <div className="flex-1 p-4 bg-gray-50 rounded-xl shadow-inner border border-gray-200">
                <span className="text-lg font-bold text-green-600">{t.amount_30}</span><br />
                <span className="text-sm text-gray-700">{t.yields}</span><br />
                <span className="text-2xl font-extrabold text-gray-900">{t.tickets_160}</span>
              </div>
              <button className="flex-1 bg-green-600 text-white rounded-2xl p-6 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300">
                <div className="font-bold text-4xl mb-2">{t.amount_100}</div>
                <div className="text-sm uppercase tracking-wide opacity-80">{t.one_time}</div>
              </button>
            </div>
            <p className="text-gray-700 text-center mt-6">
              {t.law_text}
              <a href="#" className="text-green-600 underline">{t.ministry}</a>.
            </p>
          </div>
        </section>

        {/* Project cards */}
        <section>
          <h2 className="text-3xl font-semibold mb-8 text-green-600 text-center">{t.project_donations}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p) => {
              const ytThumb = `https://img.youtube.com/vi/${YT_ID}/hqdefault.jpg`;
              const countdown = countdownMap[p.id];
              const hasCountdown = DEADLINES[p.id];
              return (
                <div key={p.id} className="bg-white rounded-2xl p-6 shadow-xl border border-gray-300">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{p.title}</h3>
                  {p.desc && <p className="text-gray-700 text-sm mb-4">{p.desc}</p>}
                  {!!p.tags?.length && (
                    <p className="flex flex-wrap gap-2 text-sm text-gray-600 mb-2">
                      {p.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </p>
                  )}
                  <a href={`https://youtu.be/${YT_ID}`} target="_blank" rel="noreferrer" className="block">
                    <img src={ytThumb} alt="YouTube Video Thumbnail" className="w-full rounded-lg my-4" />
                  </a>

                  <Progress current={p.current} target={p.target} />

                  <div className="flex justify-between items-center text-sm font-medium text-gray-700">
                    <span className="text-green-600"><Currency value={p.current} /></span>
                    <span><Currency value={p.target} /></span>
                  </div>

                  {hasCountdown && (
                    <div className="mt-4 p-3 bg-gray-50 rounded-lg text-center shadow-inner">
                      <div className="text-xs text-gray-500 uppercase font-medium">{t.ends_in}</div>
                      <div className="text-xl font-bold text-gray-800 mt-1">
                        {countdown?.expired ? t.expired : countdown?.text}
                      </div>
                    </div>
                  )}

                  {/* Specific bullet lists as per provided content */}
                  {p.id === 1 && (
                    <ul className="text-gray-700 space-y-2 mt-4">
                      <li>🎁 MacBook Air M2</li>
                      <li>🎁 DJI Mini 3 Pro</li>
                    </ul>
                  )}
                  {p.id === 3 && (
                    <ul className="text-gray-700 space-y-2 mt-4">
                      <li>🚐 Wohnwagen (3.000 €)</li>
                      <li>🏕️ Bell Tent Medium (1.000 €)</li>
                      <li>🏕️ House Tent Big (1.000 €)</li>
                    </ul>
                  )}
                  {p.id === 4 && (
                    <ul className="text-gray-700 space-y-2 mt-4">
                      <li>🌳 Quinta Calma (20.000 €)</li>
                    </ul>
                  )}
                  {p.id === 5 && (
                    <ul className="text-gray-700 space-y-2 mt-4">
                      <li>🚐 Fiat Ducato Campervan (25.000 €)</li>
                    </ul>
                  )}
                  {p.id === 6 && (
                    <ul className="text-gray-700 space-y-2 mt-4">
                      <li>🚐 Ford Transit Campervan (15.000 €)</li>
                    </ul>
                  )}
                  {p.id === 7 && (
                    <ul className="text-gray-700 space-y-2 mt-4">
                      <li><span className="font-semibold">Community Building:</span> Verbinde dich mit Gleichgesinnten in einer nachhaltigen Umgebung.</li>
                      <li><span className="font-semibold">Learning & Growth:</span> Meistere nachhaltige Technologien und digitales Know-how.</li>
                      <li><span className="font-semibold">Cultural Exchange:</span> Feiere und bewahre die Kultur der afrikanischen Diaspora.</li>
                    </ul>
                  )}
                  {p.id === 8 && (
                    <ul className="text-gray-700 space-y-2 mt-4">
                      <li><span className="font-semibold">Musikequipment:</span> Ermögliche professionelle Aufnahmen und Live-Auftritte.</li>
                      <li><span className="font-semibold">Übergang nach Portugal:</span> Hilf bei Niluas Umzug zu Camp Calma als alleinerziehende Mutter.</li>
                      <li><span className="font-semibold">Nachhaltiges Leben:</span> Unterstütze die Vision eines selbstbestimmten Lebens.</li>
                    </ul>
                  )}

                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-block w-full text-center bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full transition-all duration-300"
                    >
                      {t.donate_now}
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Summary */}
        <section className="mt-16">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-300">
            <h2 className="text-3xl font-semibold mb-4 text-green-600">{t.summary_title}</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {t.summary_items.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-500 text-sm">{t.footer}</footer>
      </div>
    </div>
  );
}
