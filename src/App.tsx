import { CSSProperties, useEffect, useState } from 'react';
import {
  capabilities,
  DiagramView,
  education,
  experience,
  GITHUB,
  hero,
  L,
  Lang,
  LINKEDIN,
  Project,
  projects,
  ui,
} from './content';

const SITE_REPO = `${GITHUB}/vzuliani97.github.io`;

function initialLang(): Lang {
  const fromUrl = new URLSearchParams(window.location.search).get('lang');
  if (fromUrl === 'es' || fromUrl === 'en') return fromUrl;
  try {
    const stored = localStorage.getItem('lang');
    if (stored === 'es' || stored === 'en') return stored;
  } catch {
    // storage can be blocked; English is the default
  }
  return 'en';
}

export function App({ page }: { page: string }) {
  const [lang, setLang] = useState<Lang>(initialLang);
  const t = (text: L) => text[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem('lang', lang);
    } catch {
      // ignore
    }
  }, [lang]);

  const slug = page.startsWith('work:') ? page.slice(5) : null;
  const project = projects.find((candidate) => candidate.slug === slug);

  return (
    <>
      <a className="skip" href="#main">
        {lang === 'en' ? 'Skip to content' : 'Saltar al contenido'}
      </a>
      <Header lang={lang} onLang={setLang} t={t} />
      <main id="main">
        {page === 'home' && <Home t={t} />}
        {project && <CaseStudy project={project} t={t} />}
        {page === 'resume' && <Resume t={t} />}
        {(page === 'notfound' || (slug && !project)) && <NotFound t={t} />}
      </main>
      <Footer t={t} />
    </>
  );
}

type T = (text: L) => string;

function Header({ lang, onLang, t }: { lang: Lang; onLang: (lang: Lang) => void; t: T }) {
  // An explicit choice wins; otherwise follow the operating system.
  const [dark, setDark] = useState(() => {
    const chosen = document.documentElement.dataset.theme;
    return chosen ? chosen === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const toggleTheme = () => {
    const next = dark ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {
      // ignore
    }
    setDark(!dark);
  };
  return (
    <header className="site-header">
      <a className="mark" href="/">
        <span aria-hidden="true">VZ</span>
        Valter Zuliani
      </a>
      <nav aria-label="Main">
        <a href="/#work">{t(ui.work)}</a>
        <a href="/#experience">{t(ui.experience)}</a>
        <a href="/resume/">{t(ui.resume)}</a>
      </nav>
      <div className="controls">
        <div className="lang" role="group" aria-label="Language">
          <button type="button" aria-pressed={lang === 'en'} onClick={() => onLang('en')}>
            EN
          </button>
          <button type="button" aria-pressed={lang === 'es'} onClick={() => onLang('es')}>
            ES
          </button>
        </div>
        <button type="button" className="theme" aria-label={dark ? 'Light theme' : 'Dark theme'} onClick={toggleTheme}>
          {dark ? '☀' : '☾'}
        </button>
      </div>
    </header>
  );
}

function Home({ t }: { t: T }) {
  return (
    <>
      <section className="hero wrap">
        <p className="kicker">{t(ui.openToWork)}</p>
        <h1>Valter Zuliani</h1>
        <p className="title">{t(hero.title)}</p>
        <p className="lead">{t(hero.lead)}</p>
        <p className="muted">{t(hero.languages)}</p>
        <div className="actions">
          <a className="button primary" href="#work">
            {t(ui.selectedWork)}
          </a>
          <a className="button" href={GITHUB}>
            GitHub
          </a>
          <a className="button" href={LINKEDIN}>
            LinkedIn
          </a>
        </div>
      </section>

      <section id="work" className="wrap section">
        <h2>{t(ui.selectedWork)}</h2>
        <div className="cards">
          {projects.map((project, index) => (
            <article key={project.slug} className="card" style={{ '--accent': project.accent } as CSSProperties}>
              <a href={`/work/${project.slug}/`} className="cover" tabIndex={-1} aria-hidden="true">
                <img
                  src={project.cover}
                  alt=""
                  width={900}
                  height={560}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  fetchPriority={index === 0 ? 'high' : 'auto'}
                />
              </a>
              <div className="card-body">
                <h3>
                  <a href={`/work/${project.slug}/`}>{project.name}</a>
                </h3>
                <p className="subtitle">{t(project.subtitle)}</p>
                <p>{t(project.oneLiner)}</p>
                <ul className="chips" aria-label={t(ui.stack)}>
                  {project.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="links">
                  <a href={`/work/${project.slug}/`}>{t(ui.caseStudy)} →</a>
                  <a href={project.repo}>{t(ui.source)}</a>
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="wrap section">
        <h2>{t(ui.capabilities)}</h2>
        <div className="capabilities">
          {capabilities.map((group) => (
            <div key={group.items}>
              <h3>{t(group.title)}</h3>
              <p>{group.items}</p>
            </div>
          ))}
        </div>
      </section>

      <Experience t={t} id="experience" />

      <section className="wrap section contact">
        <h2>{t(ui.contact)}</h2>
        <p className="actions">
          <a className="button primary" href={LINKEDIN}>
            LinkedIn
          </a>
          <a className="button" href={GITHUB}>
            GitHub
          </a>
        </p>
      </section>
    </>
  );
}

function Experience({ t, id }: { t: T; id?: string }) {
  return (
    <section id={id} className="wrap section">
      <h2>{t(ui.experience)}</h2>
      <ol className="timeline">
        {experience.map((job) => (
          <li key={job.company}>
            <h3>
              {job.role} <span className="muted">· {job.company}</span>
            </h3>
            <p className="muted">{t(job.when)}</p>
            <p>{t(job.note)}</p>
          </li>
        ))}
      </ol>
      <p className="muted">{t(education)}</p>
    </section>
  );
}

function CaseStudy({ project, t }: { project: Project; t: T }) {
  // Both views render on the server-free first paint; the hash chooses one, so the deep dive is linkable.
  const [view, setView] = useState<'scan' | 'deep'>(() => (window.location.hash === '#deep-dive' ? 'deep' : 'scan'));
  const choose = (next: 'scan' | 'deep') => {
    setView(next);
    history.replaceState(null, '', next === 'deep' ? '#deep-dive' : window.location.pathname + window.location.search);
  };

  return (
    <article className="case wrap" style={{ '--accent': project.accent } as CSSProperties}>
      <p>
        <a href="/#work">← {t(ui.back)}</a>
      </p>
      <header className="case-header">
        <h1>{project.name}</h1>
        <p className="title">{t(project.subtitle)}</p>
        <p className="lead">{t(project.oneLiner)}</p>
        <ul className="chips">
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="actions">
          <a className="button primary" href={project.repo}>
            {t(ui.source)}
          </a>
          <a className="button" href={project.verification[0].href}>
            {t(ui.evidence)}
          </a>
          <a className="button" href="#run">
            {t(ui.run)}
          </a>
        </p>
      </header>

      <div className="views" role="tablist" aria-label="View">
        <button type="button" role="tab" id="tab-scan" aria-controls="panel-scan" aria-selected={view === 'scan'} onClick={() => choose('scan')}>
          {t(ui.recruiterScan)}
        </button>
        <button type="button" role="tab" id="tab-deep" aria-controls="panel-deep" aria-selected={view === 'deep'} onClick={() => choose('deep')}>
          {t(ui.deepDive)}
        </button>
      </div>

      <section id="panel-scan" role="tabpanel" aria-labelledby="tab-scan" hidden={view !== 'scan'} className="panel">
        <div className="scan">
          <div>
            <h2>{t(ui.roleFit)}</h2>
            <p>{t(project.roleFit)}</p>
            <h2>{t(ui.problem)}</h2>
            <p>{t(project.problem)}</p>
            <h2>{t(ui.decisions)}</h2>
            <ol className="numbered">
              {project.scanDecisions.map((decision) => (
                <li key={decision.en}>{t(decision)}</li>
              ))}
            </ol>
            <h2>{t(ui.proof)}</h2>
            <ul className="checks">
              {project.proof.map((item) => (
                <li key={item.en}>{t(item)}</li>
              ))}
            </ul>
          </div>
          <figure className="shot">
            <img src={project.screens[0].src} alt={t(project.screens[0].alt)} width={project.screens[0].width} height={project.screens[0].height} />
            <figcaption>{t(project.screens[0].alt)}</figcaption>
          </figure>
        </div>
      </section>

      <section id="panel-deep" role="tabpanel" aria-labelledby="tab-deep" hidden={view !== 'deep'} className="panel">
        <h2>{t(ui.problem)}</h2>
        <p className="measure">{t(project.problem)}</p>
        <h2>{t(ui.built)}</h2>
        <ul className="measure">
          {project.built.map((item) => (
            <li key={item.en}>{t(item)}</li>
          ))}
        </ul>

        <Explorer project={project} t={t} />

        <h2>{t(ui.decisions)}</h2>
        <div className="decisions">
          {project.decisions.map((decision) => (
            <section key={decision.title.en}>
              <h3>{t(decision.title)}</h3>
              <p>{t(decision.body)}</p>
            </section>
          ))}
        </div>

        <h2>{t(ui.verification)}</h2>
        <div className="table-wrap" tabIndex={0} role="region" aria-label={t(ui.verification)}>
          <table>
            <tbody>
              {project.verification.map((row) => (
                <tr key={row.check.en}>
                  <th scope="row">{t(row.check)}</th>
                  <td>{t(row.result)}</td>
                  <td>
                    <a href={row.href}>{t(ui.evidence)}</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>{t(ui.screens)}</h2>
        <div className="gallery">
          {project.screens.map((screen) => (
            <figure key={screen.src}>
              <a href={screen.src}>
                <img src={screen.src} alt={t(screen.alt)} width={screen.width} height={screen.height} loading="lazy" />
              </a>
              <figcaption>{t(screen.alt)}</figcaption>
            </figure>
          ))}
        </div>

        <h2>{t(ui.limitations)}</h2>
        <ul className="measure">
          {project.limitations.map((item) => (
            <li key={item.en}>{t(item)}</li>
          ))}
        </ul>

        <h2>{t(ui.localVsProd)}</h2>
        <p className="measure">{t(project.localVsProd)}</p>
      </section>

      <section id="run" className="panel">
        <h2>{t(ui.run)}</h2>
        <pre tabIndex={0} aria-label={t(ui.run)}>
          <code>{project.run}</code>
        </pre>
      </section>
    </article>
  );
}

const VIEWS: DiagramView[] = ['context', 'containers', 'flow', 'deployment'];

function Explorer({ project, t }: { project: Project; t: T }) {
  const [view, setView] = useState<DiagramView>('context');
  const diagram = project.diagrams[view];
  const file = `${project.slug}-${view}`;
  return (
    <section className="explorer" aria-labelledby={`${project.slug}-architecture`}>
      <h2 id={`${project.slug}-architecture`}>{t(ui.architecture)}</h2>
      <div className="explorer-tabs" role="tablist" aria-label={t(ui.architecture)}>
        {VIEWS.map((candidate) => (
          <button
            key={candidate}
            type="button"
            role="tab"
            id={`diagram-tab-${candidate}`}
            aria-controls="diagram-panel"
            aria-selected={view === candidate}
            onClick={() => setView(candidate)}
          >
            {t(project.diagrams[candidate].title)}
          </button>
        ))}
      </div>
      <figure id="diagram-panel" role="tabpanel" aria-labelledby={`diagram-tab-${view}`} className="diagram">
        <div className="paper" tabIndex={0} role="region" aria-label={t(diagram.title)}>
          <img src={`/diagrams/${file}.svg`} alt={`${t(diagram.title)}. ${t(diagram.note)}`} loading="lazy" />
        </div>
        <figcaption>
          <span className={`status ${diagram.status.toLowerCase()}`}>{diagram.status}</span> {t(diagram.note)} {t(ui.legend)}{' '}
          <a href={`${SITE_REPO}/blob/main/diagrams/${file}.mmd`}>Mermaid</a>
        </figcaption>
      </figure>
    </section>
  );
}

function Resume({ t }: { t: T }) {
  return (
    <>
      <section className="hero wrap">
        <h1>{t(ui.resume)}</h1>
        <p className="lead">
          {t({
            en: 'The full résumé, with phone and email, is available on request. Send a message on LinkedIn.',
            es: 'La hoja de vida completa, con teléfono y correo, está disponible a solicitud. Escríbeme por LinkedIn.',
          })}
        </p>
        <p className="actions">
          <a className="button primary" href={LINKEDIN}>
            LinkedIn
          </a>
          <a className="button" href="/#work">
            {t(ui.selectedWork)}
          </a>
        </p>
      </section>
      <Experience t={t} />
    </>
  );
}

function NotFound({ t }: { t: T }) {
  return (
    <section className="hero wrap">
      <h1>404</h1>
      <p className="lead">{t(ui.notFound)}</p>
      <p>
        <a className="button primary" href="/">
          {t(ui.home)}
        </a>
      </p>
    </section>
  );
}

function Footer({ t }: { t: T }) {
  return (
    <footer className="site-footer wrap">
      <p>{t(ui.provenance)}</p>
      <p>
        © 2026 Valter Zuliani · React, TypeScript and Vite on GitHub Pages · <a href={SITE_REPO}>{t(ui.source)}</a>
      </p>
    </footer>
  );
}
