// All site copy, in English and Spanish. Every claim here must be backed by a public repository,
// its CI, or the CV evidence file; numbers come from verification reports, not estimates.
export type Lang = 'en' | 'es';
export type L = Record<Lang, string>;

export const GITHUB = 'https://github.com/vzuliani97';
export const LINKEDIN = 'https://www.linkedin.com/in/valter-zuliani-70152a97';

export const ui = {
  work: { en: 'Work', es: 'Proyectos' },
  experience: { en: 'Experience', es: 'Experiencia' },
  resume: { en: 'Résumé', es: 'Hoja de vida' },
  contact: { en: 'Contact', es: 'Contacto' },
  caseStudy: { en: 'Case study', es: 'Caso de estudio' },
  source: { en: 'Source', es: 'Código' },
  selectedWork: { en: 'Selected work', es: 'Proyectos destacados' },
  capabilities: { en: 'Capabilities', es: 'Capacidades' },
  recruiterScan: { en: 'Recruiter scan', es: 'Vista rápida' },
  deepDive: { en: 'Engineering deep dive', es: 'Detalle técnico' },
  problem: { en: 'Problem', es: 'Problema' },
  built: { en: 'What was built', es: 'Qué se construyó' },
  decisions: { en: 'Key decisions and trade-offs', es: 'Decisiones y concesiones' },
  verification: { en: 'Verification', es: 'Verificación' },
  screens: { en: 'Screens', es: 'Pantallas' },
  limitations: { en: 'Known limitations', es: 'Limitaciones conocidas' },
  localVsProd: { en: 'Local verification and production', es: 'Verificación local y producción' },
  run: { en: 'Run it locally', es: 'Ejecutarlo en local' },
  architecture: { en: 'Architecture', es: 'Arquitectura' },
  evidence: { en: 'Evidence', es: 'Evidencia' },
  roleFit: { en: 'Role fit', es: 'Encaje con el rol' },
  proof: { en: 'Proof', es: 'Pruebas' },
  stack: { en: 'Stack', es: 'Tecnologías' },
  legend: {
    en: 'Solid lines: implemented and verified. Dashed lines: planned.',
    es: 'Líneas continuas: implementado y verificado. Líneas punteadas: planeado.',
  },
  back: { en: 'All projects', es: 'Todos los proyectos' },
  openToWork: {
    en: 'Medellín, Colombia · Authorized to work in Europe · Open to remote work and relocation',
    es: 'Medellín, Colombia · Autorizado para trabajar en Europa · Disponible para trabajo remoto y reubicación',
  },
  provenance: {
    en: 'Portfolio projects are independent reconstructions with no employer code. Production systems are confidential, so their data is synthetic, except the Yamesi Core demo catalog, which comes from the store’s public catalog.',
    es: 'Los proyectos del portafolio son reconstrucciones independientes sin código de empleadores. Los sistemas de producción son confidenciales, así que sus datos son ficticios, salvo el catálogo de demostración de Yamesi Core, que viene del catálogo público de la tienda.',
  },
  notFound: { en: 'This page does not exist.', es: 'Esta página no existe.' },
  purpose: { en: 'What it is for', es: 'Para qué sirve' },
  myWork: { en: 'What I built', es: 'Qué construí' },
  realCatalog: { en: 'Built for a real store', es: 'Hecho para una tienda real' },
  realCatalogNote: {
    en: 'The demo runs on 44 pieces from the public catalog of Joyería Yamesi, with their real reference, gold weight, size, price and photo. Customers, costs and gold lots are synthetic.',
    es: 'La demo usa 44 piezas del catálogo público de Joyería Yamesi, con su referencia, peso de oro, talla, precio y foto reales. Clientes, costos y lotes de oro son ficticios.',
  },
  whatIDid: { en: 'What I worked on', es: 'En qué trabajé' },
  invoiceExample: { en: 'Example invoice', es: 'Factura de ejemplo' },
  invoiceExampleNote: {
    en: 'A fictitious sale issued by Yamesi Core: four catalog pieces with their photo, reference, size, gold weight and serial; 19% VAT per line; the total in words; the lifetime gold warranty; the CUFE and the QR. Customer, issuer and resolution are fictitious. Demonstration only: not transmitted to or validated by the DIAN, no tax validity.',
    es: 'Una venta ficticia emitida por Yamesi Core: cuatro piezas del catálogo con su foto, referencia, talla, peso de oro y serial; IVA del 19 % por línea; el valor en letras; la garantía de por vida del oro; el CUFE y el QR. Cliente, emisor y resolución son ficticios. Solo demostración: no se transmite ni la valida la DIAN y no tiene validez fiscal.',
  },
  openPdf: { en: 'Open the PDF', es: 'Abrir el PDF' },
  stackByLayer: { en: 'Stack by layer', es: 'Stack por capa' },
  letsTalk: { en: 'Let’s build something reliable', es: 'Construyamos algo confiable' },
  letsTalkNote: {
    en: 'Targeting Software Engineer and Full Stack roles with Cloud & DevOps responsibilities. The fastest way to reach me is LinkedIn.',
    es: 'Busco roles de Software Engineer y Full Stack con responsabilidades de Cloud y DevOps. La forma más rápida de contactarme es LinkedIn.',
  },
  terminalLabel: {
    en: 'Test results from the three repositories and the Lighthouse score of this site',
    es: 'Resultados de pruebas de los tres repositorios y el puntaje Lighthouse de este sitio',
  },
  home: { en: 'Back to the home page', es: 'Volver al inicio' },
  assessmentTitle: { en: 'Security assessment of these three systems: Escudo', es: 'Evaluación de seguridad de estos tres sistemas: Escudo' },
  assessmentText: {
    en: 'I attacked NekoBet, Yamesi and the OpsCircuit cluster the way a tester would. The assessment found 12 issues, from a replayed partner sale that was charged twice to an example JWT secret that let anyone sign an admin token. All are fixed, and the 38 attacks run again in both apps’ CI on every push.',
    es: 'Ataqué NekoBet, Yamesi y el clúster de OpsCircuit como lo haría un pentester. Encontré 12 fallas, desde una venta de un integrador que se cobraba dos veces al repetirla hasta un secreto JWT de ejemplo que permitía firmar un token de administrador. Todas están corregidas, y los 38 ataques vuelven a correr en el CI de ambas aplicaciones en cada push.',
  },
  assessmentLink: { en: 'Report and findings', es: 'Informe y hallazgos' },
} satisfies Record<string, L>;

export const hero = {
  title: { en: 'Software Engineer — Full Stack, Cloud & DevOps', es: 'Ingeniero de software — Full Stack, Cloud y DevOps' },
  lead: {
    en: 'I build, deploy and operate full-stack applications, APIs and cloud infrastructure with TypeScript, Node.js, React and AWS.',
    es: 'Construyo, despliego y opero aplicaciones full stack, APIs e infraestructura cloud con TypeScript, Node.js, React y AWS.',
  },
  languages: { en: 'Spanish and Italian native · English C1', es: 'Español e italiano nativos · Inglés C1' },
};

export const stats: Array<{ value: L; label: L }> = [
  { value: { en: '139', es: '139' }, label: { en: 'automated tests across 3 portfolio systems (64 + 60 + 15)', es: 'pruebas automatizadas en 3 sistemas del portafolio (64 + 60 + 15)' } },
  { value: { en: 'Since 2020', es: 'Desde 2020' }, label: { en: 'professional software experience', es: 'experiencia profesional en software' } },
  { value: { en: '100', es: '100' }, label: { en: 'mobile Lighthouse on 3 routes, measured 1 Nov 2026', es: 'Lighthouse móvil en 3 rutas, medido el 1 nov. 2026' } },
  { value: { en: 'C1', es: 'C1' }, label: { en: 'English · native Spanish and Italian', es: 'inglés · español e italiano nativos' } },
];

export const marquee = [
  'TypeScript', 'Node.js', 'NestJS', 'React', 'Angular', 'PostgreSQL', 'MySQL', 'AWS', 'Docker', 'Kubernetes',
  'Terraform', 'Argo CD', 'Prometheus', 'Grafana', 'n8n', 'GitHub Actions', 'GitLab CI/CD', 'Linux',
];

export const capabilities = [
  { title: { en: 'Software', es: 'Software' }, items: 'TypeScript · Node.js · NestJS · React · Angular · SQL · PostgreSQL · REST APIs' },
  { title: { en: 'Cloud & delivery', es: 'Cloud y entrega' }, items: 'AWS · Docker · Kubernetes · Terraform · GitHub Actions · GitLab CI/CD · Linux' },
  {
    title: { en: 'Working knowledge (portfolio)', es: 'Conocimiento práctico (portafolio)' },
    items: 'n8n · Prometheus · Grafana · Argo CD · Alertmanager · Kyverno · cosign · Trivy · OWASP ZAP',
  },
];

// Same wording as the résumé (career/private/cv/final/cv_build.py, full-stack variant).
export const experience: Array<{ role: string; company: string; when: L; note: L; highlights: L[] }> = [
  {
    role: 'Full Stack Developer',
    company: 'Inversiones Zuliani S.A.S. (Yamesi)',
    when: { en: 'Medellín · May 2020 – Present', es: 'Medellín · may. 2020 – actualidad' },
    note: {
      en: "The store's accounting and invoicing system, from the first line of code to production.",
      es: 'El sistema contable y de facturación de la joyería, desde la primera línea de código hasta producción.',
    },
    highlights: [
      {
        en: "Proposed and built the store's accounting and invoicing system, replacing spreadsheets and paper receipts for gold movements, daily operations and digital invoicing; the business uses it for around 15 invoices a day.",
        es: 'Propuse y desarrollé el sistema contable y de facturación de la joyería, que reemplazó Excel y los recibos en papel para el oro, las operaciones diarias y la facturación; hoy registra unas 15 facturas al día.',
      },
      {
        en: 'Deployed it with Docker on AWS EC2, with documents and images in S3, HTTPS, and network access controlled through security groups, SSH and VPN.',
        es: 'Lo desplegué con Docker en AWS EC2, con documentos e imágenes en S3, HTTPS y acceso de red controlado con security groups, SSH y VPN.',
      },
      {
        en: 'Since 2023, as a contractor, provide support, corrective maintenance, testing and updates for the production system.',
        es: 'Desde 2023, como contratista, doy soporte, mantenimiento correctivo, pruebas y actualizaciones al sistema en producción.',
      },
    ],
  },
  {
    role: 'Junior DevOps Engineer',
    company: 'The Big Group',
    when: { en: 'Sydney · Oct 2024 – Mar 2026 · part-time', es: 'Sídney · oct. 2024 – mar. 2026 · tiempo parcial' },
    note: {
      en: 'Delivery and operations of AWS services in an English-speaking international team.',
      es: 'Entrega y operación de servicios en AWS en un equipo internacional en inglés.',
    },
    highlights: [
      {
        en: 'Supported deployment and maintenance of AWS services for payments, digital operations and hospitality, working with CI/CD pipelines, Docker and Kubernetes environments.',
        es: 'Apoyé el despliegue y mantenimiento de servicios en AWS para pagos, operaciones digitales y hospitalidad, con pipelines de CI/CD, Docker y entornos Kubernetes.',
      },
      {
        en: 'Investigated production incidents through logs and monitoring, and applied access controls to cloud resources.',
        es: 'Investigué incidentes en producción con logs y monitoreo, y apliqué controles de acceso en recursos cloud.',
      },
    ],
  },
  {
    role: 'Software Developer (Full Stack / Cloud)',
    company: 'Código Digital Codi S.A.S.',
    when: { en: 'Medellín · Oct 2021 – Feb 2023', es: 'Medellín · oct. 2021 – feb. 2023' },
    note: {
      en: 'A transactional portal for a point-of-sale network, with real-time betting and casino, and its AWS infrastructure.',
      es: 'Un portal transaccional para una red de puntos de venta, con apuestas y casino en tiempo real, y su infraestructura en AWS.',
    },
    highlights: [
      {
        en: 'Developed full-stack modules and Node.js APIs for transactional platforms, white-label iGaming platforms for several countries and healthcare applications using Angular, React, TypeScript, PHP and MySQL; built a B2B API secured with key pairs and IP allowlisting; and managed AWS infrastructure and deployments from staging to production with EC2, VPC, VPN, EKS, Terraform, Docker and GitLab CI/CD.',
        es: 'Desarrollé módulos full stack y APIs en Node.js para plataformas transaccionales, plataformas iGaming de marca blanca para varios países y aplicaciones del sector salud con Angular, React, TypeScript, PHP y MySQL; construí una API B2B protegida con pares de llaves y lista blanca de IP; y administré la infraestructura y los despliegues en AWS, de pruebas a producción, con EC2, VPC, VPN, EKS, Terraform, Docker y GitLab CI/CD.',
      },
      {
        en: 'Worked on the real-time sports betting and casino integration of the point-of-sale portal: the live-odds frontend, the provider integration, the betting backend (bet validation, balance and settlement) and its infrastructure.',
        es: 'Trabajé en la integración de apuestas deportivas y casino en tiempo real del portal de puntos de venta: el frontend de cuotas en vivo, la integración con el proveedor, el backend de apuestas (validación, saldo y liquidación) y su infraestructura.',
      },
      {
        en: 'Diagnosed and fixed issues across frontend, backend, APIs and infrastructure, and provided technical support.',
        es: 'Diagnostiqué y corregí fallos entre frontend, backend, APIs e infraestructura, y di soporte técnico.',
      },
    ],
  },
  {
    role: 'Software Developer',
    company: 'LaCompay Colombia',
    when: { en: 'Medellín · Nov 2020 – Apr 2021', es: 'Medellín · nov. 2020 – abr. 2021' },
    note: { en: 'A payment gateway in C++.', es: 'Una pasarela de pagos en C++.' },
    highlights: [
      {
        en: 'Contributed to the development of features for a C++ payment gateway, focused on transaction processing.',
        es: 'Participé en el desarrollo de funcionalidades de una pasarela de pagos en C++, con énfasis en el procesamiento transaccional.',
      },
    ],
  },
];

export const education = {
  en: 'Systems Engineer, Universidad de Medellín · Advanced Diploma of IT (Cyber Security), Sydney',
  es: 'Ingeniero de Sistemas, Universidad de Medellín · Advanced Diploma of IT (Cyber Security), Sídney',
};

export type DiagramView = 'context' | 'containers' | 'flow' | 'deployment';

export interface Project {
  slug: 'yamesi' | 'opscircuit' | 'nekobet';
  name: string;
  subtitle: L;
  repo: string;
  accent: string;
  cover: string;
  oneLiner: L;
  /** Who uses it and for what, in one or two sentences. */
  purpose: L;
  /** Everything built in the repository, layer by layer. */
  myWork: L[];
  /** Short, verified numbers shown on the home page. */
  metrics: L[];
  gallery?: Array<{ src: string; alt: L }>;
  invoiceExample?: { image: string; pdf: string; width: number; height: number };
  stack: string[];
  /** Every framework and tool, by layer, with the versions in the repository. */
  layers: Array<{ layer: L; items: string[] }>;
  roleFit: L;
  problem: L;
  built: L[];
  scanDecisions: L[];
  proof: L[];
  decisions: Array<{ title: L; body: L }>;
  verification: Array<{ check: L; result: L; href: string }>;
  screens: Array<{ src: string; alt: L; width: number; height: number }>;
  limitations: L[];
  localVsProd: L;
  run: string;
  diagrams: Record<DiagramView, { title: L; status: 'CURRENT' | 'MIXED'; note: L }>;
}

const repo = (name: string) => `${GITHUB}/${name}`;

export const projects: Project[] = [
  {
    slug: 'yamesi',
    name: 'Yamesi Core',
    subtitle: { en: 'Business Operations & Traceability System', es: 'Sistema de operaciones de negocio y trazabilidad' },
    repo: repo('yamesi'),
    accent: '#b7791f',
    cover: '/media/yamesi-sell-cover.jpg',
    oneLiner: {
      en: 'Point of sale, inventory portal with photos, a Colombian-style invoice PDF for demonstration, gold traceability and a daily closing, for a real jewelry store.',
      es: 'Punto de venta, portal de inventario con fotos, una factura PDF de estilo colombiano para demostración, trazabilidad del oro y cierre diario, para una joyería real.',
    },
    purpose: {
      en: 'Runs the counter of an 18k gold jewelry store: find a piece by reference, sell it with a Colombian-style invoice, keep the catalog and its photos current, record petty cash with receipts, and balance the drawer every night.',
      es: 'Maneja el mostrador de una joyería de oro 18k: buscar una pieza por referencia, venderla con una factura de estilo colombiano, mantener el catálogo y sus fotos al día, registrar la caja menor con recibos y cuadrar la caja cada noche.',
    },
    myWork: [
      { en: 'Data model in plain SQL: gold lots in milligrams, gap-free invoice numbers, VAT per line, closings and an audit log.', es: 'Modelo de datos en SQL: lotes de oro en miligramos, numeración sin huecos, IVA por línea, cierres y auditoría.' },
      { en: 'NestJS API with roles, Zod validation, idempotent invoices, and row and advisory locks for concurrency.', es: 'API en NestJS con roles, validación con Zod, facturas idempotentes y bloqueos de fila y advisory para la concurrencia.' },
      { en: 'React point of sale, inventory portal with drag-and-drop photos, petty cash with receipts, closing and reports.', es: 'Punto de venta en React, portal de inventario con fotos por arrastrar y soltar, caja menor con recibos, cierre y reportes.' },
      { en: 'Colombian-style invoice PDF for demonstration: VAT, a CUFE calculation that matches the DIAN example, QR. Not transmitted to or validated by the DIAN; no tax validity.', es: 'Factura PDF de estilo colombiano para demostración: IVA, cálculo del CUFE igual al ejemplo de la DIAN y QR. No se transmite ni la valida la DIAN; no tiene validez fiscal.' },
      { en: 'Docker Compose, CI with CodeQL, Gitleaks, a Trivy image scan and an OWASP ZAP scan, 64 tests and a scripted business day.', es: 'Docker Compose, CI con CodeQL, Gitleaks, escaneo de imágenes con Trivy y escaneo OWASP ZAP, 64 pruebas y un día de negocio simulado.' },
    ],
    metrics: [
      { en: '64 tests', es: '64 pruebas' },
      { en: '44 real catalog pieces', es: '44 piezas del catálogo real' },
      { en: 'CUFE = DIAN example', es: 'CUFE = ejemplo DIAN' },
    ],
    invoiceExample: { image: '/media/yamesi-factura-ejemplo.jpg', pdf: '/media/yamesi-factura-ejemplo.pdf', width: 1004, height: 1300 },
    gallery: [
      { src: '/media/catalog/ani-sol-59.jpg', alt: { en: 'Solitaire ring, ANI-SOL-59', es: 'Anillo solitario, ANI-SOL-59' } },
      { src: '/media/catalog/can-mel-55.jpg', alt: { en: 'Hoop earrings, CAN-MEL-55', es: 'Candongas melcocha, CAN-MEL-55' } },
      { src: '/media/catalog/dij-var-141.jpg', alt: { en: 'Heart pendant, DIJ-VAR-141', es: 'Dije corazón, DIJ-VAR-141' } },
      { src: '/media/catalog/an-dam-172.jpg', alt: { en: 'Ring, AN-DAM-172', es: 'Anillo dama, AN-DAM-172' } },
      { src: '/media/catalog/pul-63.jpg', alt: { en: 'Bracelet, PUL-63', es: 'Pulsera, PUL-63' } },
      { src: '/media/catalog/top-ani-36.jpg', alt: { en: 'Butterfly studs, TOP-ANI-36', es: 'Topos mariposa, TOP-ANI-36' } },
      { src: '/media/catalog/ani-esm-12.jpg', alt: { en: 'Diamond and ruby ring, ANI-ESM-12', es: 'Anillo diamante y rubí, ANI-ESM-12' } },
      { src: '/media/catalog/dj-rel-118.jpg', alt: { en: 'Cross pendant, DJ-REL-118', es: 'Dije cruz, DJ-REL-118' } },
    ],
    stack: ['NestJS', 'React', 'PostgreSQL', 'S3', 'PDFKit', 'Docker'],
    layers: [
      { layer: { en: 'Frontend', es: 'Frontend' }, items: ['React 19', 'TypeScript', 'Vite 8'] },
      { layer: { en: 'Backend', es: 'Backend' }, items: ['Node.js 24', 'NestJS 11', 'Zod 4', 'JWT', 'bcrypt', 'PDFKit', 'qrcode'] },
      { layer: { en: 'Data and storage', es: 'Datos y almacenamiento' }, items: ['PostgreSQL 16', 'plain SQL migrations', 'S3 · AWS SDK v3', 'RustFS (local S3)'] },
      { layer: { en: 'Infrastructure and DevOps', es: 'Infraestructura y DevOps' }, items: ['Docker', 'Docker Compose', 'nginx (unprivileged)', 'non-root containers', 'AWS EC2 + S3 (real system)'] },
      { layer: { en: 'CI/CD and quality', es: 'CI/CD y calidad' }, items: ['GitHub Actions', 'Jest', 'Supertest', '64 tests', 'Dependabot'] },
      { layer: { en: 'Security', es: 'Seguridad' }, items: ['CodeQL', 'Gitleaks', 'npm audit', 'Trivy', 'OWASP ZAP (DAST)', 'Content-Security-Policy', 'Helmet', 'login lockout', 'image metadata check'] },
      { layer: { en: 'AI (optional)', es: 'IA (opcional)' }, items: ['Ollama', 'Qwen2.5 3B', 'tool calling'] },
    ],
    roleFit: {
      en: 'Full stack: business rules in PostgreSQL transactions, a React point of sale, and a legally detailed invoice PDF.',
      es: 'Full stack: reglas de negocio en transacciones de PostgreSQL, un punto de venta en React y una factura PDF con todo el detalle legal.',
    },
    problem: {
      en: 'A jewelry store ran on spreadsheets and paper receipts. It had to know which gold purchase every piece came from, number invoices with no gaps, issue an invoice with everything Colombian rules require, and balance the cash drawer every day.',
      es: 'Una joyería funcionaba con Excel y recibos en papel. Necesitaba saber de qué compra de oro sale cada pieza, numerar facturas sin huecos, emitir la factura con todo lo que exige la normativa colombiana y cuadrar la caja todos los días.',
    },
    built: [
      {
        en: 'Gold lots in integer milligrams; each 18k piece consumes gold from its lot, which can never go negative.',
        es: 'Lotes de oro en miligramos enteros; cada pieza de 18k consume oro de su lote, que nunca puede quedar negativo.',
      },
      {
        en: 'Sales invoice with buyer identification, 19% VAT per line, DIAN numbering range, total in words, gold weight and fineness, a lifetime gold warranty, CUFE and QR.',
        es: 'Factura de venta con identificación del comprador, IVA del 19 % por línea, rango de numeración DIAN, valor en letras, peso y ley del oro, garantía de por vida del oro, CUFE y QR.',
      },
      {
        en: 'Petty cash with receipt photos in S3, a daily closing that locks the day, margins frozen at sale time, and an audit log.',
        es: 'Caja menor con fotos de recibos en S3, cierre diario que bloquea el día, márgenes congelados al vender y registro de auditoría.',
      },
      {
        en: 'An inventory portal: search the catalog, edit a piece in stock and replace its photo; every change is audited and sold pieces are locked.',
        es: 'Un portal de inventario: buscar en el catálogo, editar una pieza en stock y cambiar su foto; cada cambio queda auditado y las piezas vendidas no se modifican.',
      },
    ],
    scanDecisions: [
      { en: 'Gap-free numbering with a counter inside the sale transaction', es: 'Numeración sin huecos con un contador dentro de la transacción de venta' },
      { en: 'Idempotent invoices: every field is part of the request hash', es: 'Facturas idempotentes: todos los campos entran en el hash de la solicitud' },
      { en: 'CUFE computed with the DIAN formula, checked against its official example', es: 'CUFE con la fórmula de la DIAN, comprobado contra su ejemplo oficial' },
    ],
    proof: [
      { en: '64 automated tests, 2 against a real S3-compatible server', es: '64 pruebas automatizadas, 2 contra un servidor compatible con S3' },
      { en: '8 concurrent invoices get numbers 1 to 8, never a gap', es: '8 facturas simultáneas reciben los números 1 a 8, sin huecos' },
      { en: 'A simulated business day (make demo): arrivals with photos, 5 sales, 4 receipts, closing', es: 'Un día de negocio simulado (make demo): llegadas con foto, 5 ventas, 4 recibos y cierre' },
    ],
    decisions: [
      {
        title: { en: 'A counter, not a sequence', es: 'Un contador, no una secuencia' },
        body: {
          en: 'A PostgreSQL SEQUENCE leaves gaps on rollback. The counter row is incremented inside the invoice transaction, so a failed sale gives its number back. The trade-off is that invoices serialize on one row, which is fine at a store’s volume.',
          es: 'Una SEQUENCE de PostgreSQL deja huecos cuando hay rollback. El contador se incrementa dentro de la transacción de la factura, así que una venta fallida devuelve su número. La concesión es que las facturas se serializan en una fila, aceptable al volumen de una tienda.',
        },
      },
      {
        title: { en: 'Prices include VAT, the invoice splits it', es: 'El precio incluye IVA y la factura lo separa' },
        body: {
          en: 'Colombian retail prices are shown with VAT. Each line is split into base and VAT in whole pesos, and a database constraint guarantees base + VAT = price. Margins use revenue without VAT.',
          es: 'En Colombia el precio al público incluye IVA. Cada línea se separa en base e IVA en pesos enteros y una restricción en la base de datos garantiza base + IVA = precio. Los márgenes usan el ingreso sin IVA.',
        },
      },
      {
        title: { en: 'The closing takes an exclusive lock', es: 'El cierre toma un bloqueo exclusivo' },
        body: {
          en: 'Sales and expenses take a shared advisory lock on their business day; the closing takes an exclusive one, so nothing slips in while totals are computed. Afterwards every write for that day gets DAY_CLOSED.',
          es: 'Ventas y gastos toman un bloqueo compartido sobre su día; el cierre toma uno exclusivo, así que nada se cuela mientras se calculan los totales. Después, cualquier escritura de ese día recibe DAY_CLOSED.',
        },
      },
    ],
    verification: [
      { check: { en: 'Unit and integration tests', es: 'Pruebas unitarias y de integración' }, result: { en: '64 passing in CI', es: '64 aprobadas en CI' }, href: `${repo('yamesi')}/actions` },
      { check: { en: 'CUFE against the official DIAN example', es: 'CUFE contra el ejemplo oficial de la DIAN' }, result: { en: 'Identical hash', es: 'Hash idéntico' }, href: `${repo('yamesi')}/blob/main/backend/test/unit/colombian-invoice.spec.ts` },
      { check: { en: 'Concurrent sales of one piece', es: 'Ventas simultáneas de una pieza' }, result: { en: 'One sale, one PIECE_NOT_AVAILABLE', es: 'Una venta y un PIECE_NOT_AVAILABLE' }, href: `${repo('yamesi')}/blob/main/backend/test/e2e/invoices.e2e-spec.ts` },
      { check: { en: 'Static analysis and secrets', es: 'Análisis estático y secretos' }, result: { en: 'CodeQL and Gitleaks green', es: 'CodeQL y Gitleaks en verde' }, href: `${repo('yamesi')}/actions` },
      { check: { en: 'Image and DAST scans', es: 'Escaneo de imágenes y DAST' }, result: { en: 'Trivy: 0 fixable critical or high CVEs; ZAP: no unaccepted warnings', es: 'Trivy: 0 CVE críticas o altas corregibles; ZAP: sin alertas no aceptadas' }, href: `${repo('yamesi')}/blob/main/.zap/rules.tsv` },
      { check: { en: 'Security assessment', es: 'Evaluación de seguridad' }, result: { en: 'Photos kept GPS and sellers saw costs: found, fixed, retested in CI', es: 'Las fotos conservaban el GPS y el vendedor veía costos: encontrado, corregido y probado en CI' }, href: `${repo('escudo')}#findings` },
    ],
    screens: [
      { src: '/media/yamesi-sell.jpg', alt: { en: 'Point of sale with catalog photos; each line of the sale shows its piece', es: 'Punto de venta con fotos del catálogo; cada línea de la venta muestra su pieza' }, width: 1600, height: 1111 },
      { src: '/media/yamesi-invoice.jpg', alt: { en: 'Sales invoice PDF: each line with the photo of its piece, reference, size and gold weight; CUFE and QR', es: 'Factura de venta en PDF: cada línea con la foto de su pieza, referencia, talla y peso del oro; CUFE y QR' }, width: 1236, height: 1600 },
      { src: '/media/yamesi-inventory.jpg', alt: { en: 'Inventory portal: the catalog with photos, stock value and filters', es: 'Portal de inventario: catálogo con fotos, valor del inventario y filtros' }, width: 1600, height: 1111 },
      { src: '/media/yamesi-edit.jpg', alt: { en: 'Editing a piece: price, size, reference and a new photo', es: 'Editar una pieza: precio, talla, referencia y nueva foto' }, width: 1600, height: 1111 },
      { src: '/media/yamesi-petty-cash.jpg', alt: { en: 'Petty cash with the receipt photos of the day', es: 'Caja menor con las fotos de los recibos del día' }, width: 1600, height: 1111 },
      { src: '/media/yamesi-closing.jpg', alt: { en: 'Daily cash closing, day locked', es: 'Cierre de caja con el día bloqueado' }, width: 1600, height: 1111 },
      { src: '/media/yamesi-reports.jpg', alt: { en: 'Reports: gold, 28% gross margin and audit trail', es: 'Reportes: oro, margen bruto del 28 % y auditoría' }, width: 1600, height: 1111 },
    ],
    limitations: [
      {
        en: 'The invoice is never transmitted to the DIAN: the legally valid document is a signed UBL 2.1 XML validated through an authorized provider, which is not built here.',
        es: 'La factura no se transmite a la DIAN: el documento con validez legal es un XML UBL 2.1 firmado y validado mediante un proveedor autorizado, que no está construido aquí.',
      },
      { en: 'Single store; a closed day cannot be reopened.', es: 'Una sola tienda; un día cerrado no se puede reabrir.' },
      { en: 'No lifecycle rule yet for orphaned uploads, including photos replaced in the portal.', es: 'Aún no hay regla de ciclo de vida para archivos huérfanos, incluidas las fotos reemplazadas en el portal.' },
    ],
    localVsProd: {
      en: 'This repository is an independent rebuild that runs locally with Docker Compose. Its demo catalog comes from the store’s public catalog; customers, costs and lots are synthetic. The business’s real system is professional work in a separate codebase, deployed with Docker on AWS EC2 and S3.',
      es: 'Este repositorio es una reconstrucción independiente que corre en local con Docker Compose. Su catálogo de demostración viene del catálogo público de la tienda; clientes, costos y lotes son ficticios. El sistema real del negocio es trabajo profesional en otro código, desplegado con Docker en AWS EC2 y S3.',
    },
    run: 'git clone https://github.com/vzuliani97/yamesi && cd yamesi\nmake .env   # .env.example with random secrets\nmake demo   # loads the store catalog and simulates one business day\nmake test   # 64 tests in containers',
    diagrams: {
      context: { title: { en: 'System context', es: 'Contexto' }, status: 'CURRENT', note: { en: 'Who uses the system and what it talks to.', es: 'Quién usa el sistema y con qué se comunica.' } },
      containers: { title: { en: 'Containers', es: 'Contenedores' }, status: 'CURRENT', note: { en: 'A modular NestJS monolith, not microservices.', es: 'Un monolito modular en NestJS, no microservicios.' } },
      flow: { title: { en: 'Critical flow: issuing an invoice', es: 'Flujo crítico: emitir una factura' }, status: 'CURRENT', note: { en: 'Every step runs in one transaction except the PDF, which is rendered after commit.', es: 'Todo ocurre en una transacción, salvo el PDF, que se genera después del commit.' } },
      deployment: { title: { en: 'Deployment', es: 'Despliegue' }, status: 'MIXED', note: { en: 'The local rebuild and the real system, kept apart.', es: 'La reconstrucción local y el sistema real, por separado.' } },
    },
  },
  {
    slug: 'opscircuit',
    name: 'OpsCircuit',
    subtitle: { en: 'Cloud Delivery & Incident Automation Lab', es: 'Laboratorio de entrega cloud y automatización de incidentes' },
    repo: repo('opscircuit'),
    accent: '#0f766e',
    cover: '/media/opscircuit-grafana-cover.jpg',
    oneLiner: {
      en: 'Kubernetes with GitOps, observability and outage drills, plus a self-hosted n8n workflow that turns alerts into deduplicated incidents.',
      es: 'Kubernetes con GitOps, observabilidad y simulacros de caídas, más un flujo n8n autoalojado que convierte alertas en incidentes sin duplicados.',
    },
    purpose: {
      en: 'Shows how a small team ships to Kubernetes, watches what is running, and turns a storm of alerts into one incident and one page, with drills that prove the recovery works.',
      es: 'Muestra cómo un equipo pequeño despliega en Kubernetes, vigila lo que corre y convierte una avalancha de alertas en un incidente y un aviso, con simulacros que prueban que la recuperación funciona.',
    },
    myWork: [
      { en: 'A 3-node kind cluster with Kustomize overlays, Argo CD (GitOps), and Prometheus and Grafana provisioned as code.', es: 'Un clúster kind de 3 nodos con overlays de Kustomize, Argo CD (GitOps) y Prometheus y Grafana como código.' },
      { en: 'Hardened workloads: non-root containers, NetworkPolicies, Pod Security Admission; Checkov with zero failed checks.', es: 'Cargas endurecidas: contenedores sin root, NetworkPolicies, Pod Security Admission; Checkov sin controles fallidos.' },
      { en: 'Kyverno admission policies: hardened pods, limits and probes, explicit tags, and only images signed by NekoBet\'s CI. Tested in CI and in an unsigned-image drill.', es: 'Políticas de admisión con Kyverno: pods endurecidos, límites y sondas, etiquetas explícitas y solo imágenes firmadas por el CI de NekoBet. Probadas en CI y en un simulacro con una imagen sin firma.' },
      { en: 'Outage and bad-release drills; found an alert that could never fire, fixed it and wrote the postmortem.', es: 'Simulacros de caída y de versión rota; encontré una alerta que nunca podía dispararse, la corregí y escribí el postmortem.' },
      { en: 'n8n incident workflow: authenticated webhook, validation, deduplication in PostgreSQL, enrichment, retries, dead letters and replay.', es: 'Flujo de incidentes en n8n: webhook autenticado, validación, deduplicación en PostgreSQL, enriquecimiento, reintentos, dead letters y reproceso.' },
      { en: 'Terraform for an AWS design (VPC, EKS, RDS, ECR), validated in CI and never applied.', es: 'Terraform para un diseño en AWS (VPC, EKS, RDS, ECR), validado en CI y nunca aplicado.' },
    ],
    metrics: [
      { en: '15 integration tests', es: '15 pruebas de integración' },
      { en: 'Self-heal in 2 s', es: 'Autorreparación en 2 s' },
      { en: '5 deliveries → 1 page', es: '5 entregas → 1 aviso' },
    ],
    stack: ['Kubernetes', 'Argo CD', 'Prometheus', 'Grafana', 'Terraform', 'n8n'],
    layers: [
      { layer: { en: 'Containers and orchestration', es: 'Contenedores y orquestación' }, items: ['Docker', 'Kubernetes (kind, 3 nodes)', 'Kustomize'] },
      { layer: { en: 'GitOps and CI/CD', es: 'GitOps y CI/CD' }, items: ['Argo CD 3.5', 'GitHub Actions'] },
      { layer: { en: 'Observability', es: 'Observabilidad' }, items: ['Prometheus 3', 'Grafana 13', 'Alertmanager 0.34'] },
      { layer: { en: 'Incident automation', es: 'Automatización de incidentes' }, items: ['n8n 2.43', 'PostgreSQL 18', 'Node.js test runner', '15 tests'] },
      { layer: { en: 'Infrastructure as code', es: 'Infraestructura como código' }, items: ['Terraform', 'AWS VPC · EKS · RDS · ECR', 'AWS provider 6'] },
      { layer: { en: 'Security and policy', es: 'Seguridad y políticas' }, items: ['Kyverno 1.19', 'cosign verification', 'Checkov 3.4', 'kubeconform', 'NetworkPolicies', 'Pod Security Admission', 'ShellCheck'] },
    ],
    roleFit: {
      en: 'Cloud and DevOps: delivery, telemetry, alert routing, incident automation and the drills that prove they work.',
      es: 'Cloud y DevOps: entrega, telemetría, enrutamiento de alertas, automatización de incidentes y los simulacros que lo demuestran.',
    },
    problem: {
      en: 'Applications go down, get misconfigured or receive broken releases. The team must notice fast, page the right owner once, and recover with one command.',
      es: 'Las aplicaciones se caen, se configuran mal o reciben versiones rotas. El equipo debe enterarse rápido, avisar una sola vez al responsable correcto y recuperarse con un comando.',
    },
    built: [
      { en: 'A 3-node kind cluster with Kustomize, Argo CD (GitOps) and Prometheus/Grafana as code; hardened, non-root workloads.', es: 'Un clúster kind de 3 nodos con Kustomize, Argo CD (GitOps) y Prometheus/Grafana como código; cargas endurecidas sin root.' },
      { en: 'Game-day drills: a total outage that fired no alert was found and fixed; a broken release was contained and rolled back.', es: 'Simulacros: se encontró y corrigió una caída total que no generaba alerta; una versión rota se contuvo y se revirtió.' },
      { en: 'An n8n incident workflow behind Alertmanager: authenticated webhook, validation, deduplication, enrichment, retries and replayable dead letters.', es: 'Un flujo de incidentes en n8n detrás de Alertmanager: webhook autenticado, validación, deduplicación, enriquecimiento, reintentos y dead letters reprocesables.' },
    ],
    scanDecisions: [
      { en: 'Alertmanager groups; n8n owns the incident state', es: 'Alertmanager agrupa; n8n maneja el estado del incidente' },
      { en: 'Deduplication in the database, not in the workflow', es: 'Deduplicación en la base de datos, no en el flujo' },
      { en: 'Store the delivery before answering 202', es: 'Guardar la entrega antes de responder 202' },
    ],
    proof: [
      { en: '15 integration tests for the incident lab, green in CI', es: '15 pruebas de integración del laboratorio, en verde en CI' },
      { en: '5 concurrent deliveries of one alert: one incident, one page', es: '5 entregas simultáneas de una alerta: un incidente, un aviso' },
      { en: 'Argo CD self-heal recreated a deleted Deployment in 2 s', es: 'Argo CD recreó en 2 s un Deployment borrado' },
    ],
    decisions: [
      {
        title: { en: 'One incident per firing episode', es: 'Un incidente por episodio de alerta' },
        body: {
          en: 'The fingerprint is a SHA-256 of alert name, namespace, service and startsAt. A unique constraint with INSERT … ON CONFLICT serializes concurrent deliveries; a lookup-then-insert in the workflow would race.',
          es: 'La huella es un SHA-256 del nombre de la alerta, namespace, servicio y startsAt. Una restricción única con INSERT … ON CONFLICT serializa las entregas simultáneas; buscar y luego insertar desde el flujo tendría condición de carrera.',
        },
      },
      {
        title: { en: 'Failed pages are retried by the next delivery', es: 'Los avisos fallidos se reintentan con la siguiente entrega' },
        body: {
          en: 'RETURNING old/new (PostgreSQL 18) tells the workflow whether a delivery turned a failed notification back to pending. An earlier version on PostgreSQL 17 lost that value, and the replay test caught it.',
          es: 'RETURNING old/new (PostgreSQL 18) le dice al flujo si una entrega volvió a poner en pendiente un aviso fallido. Una versión anterior en PostgreSQL 17 perdía ese valor y la prueba de reproceso lo detectó.',
        },
      },
      {
        title: { en: 'An alert that could never fire', es: 'Una alerta que nunca podía dispararse' },
        body: {
          en: 'In the outage drill, removing every backend pod also removed the up series, so the "backend down" alert never fired. An absent() rule now covers total outages.',
          es: 'En el simulacro, al quitar todos los pods del backend también desaparecía la serie up, y la alerta de caída nunca se disparaba. Una regla absent() cubre ahora las caídas totales.',
        },
      },
    ],
    verification: [
      { check: { en: 'Incident lab integration tests', es: 'Pruebas de integración del laboratorio' }, result: { en: '15/15 locally and in CI', es: '15/15 en local y en CI' }, href: `${repo('opscircuit')}/blob/main/docs/INCIDENT_AUTOMATION_VERIFICATION.md` },
      { check: { en: 'Outage and bad-release drills', es: 'Simulacros de caída y versión rota' }, result: { en: 'Postmortem published', es: 'Postmortem publicado' }, href: `${repo('opscircuit')}/blob/main/docs/incidents/2026-10-30-postmortem.md` },
      { check: { en: 'Checkov on Terraform and manifests', es: 'Checkov sobre Terraform y manifiestos' }, result: { en: '0 failed checks, exceptions documented', es: '0 controles fallidos, excepciones documentadas' }, href: `${repo('opscircuit')}/blob/main/.checkov.yaml` },
      { check: { en: 'Unsigned-image drill', es: 'Simulacro con imagen sin firma' }, result: { en: 'Denied at admission; the signed image runs pinned to its digest', es: 'Rechazada en la admisión; la imagen firmada corre fijada a su digest' }, href: `${repo('opscircuit')}/blob/main/docs/incidents/drill-unsigned-image.log` },
      { check: { en: 'Security assessment', es: 'Evaluación de seguridad' }, result: { en: 'Cluster ports open to the local network: found, fixed, checked by make validate', es: 'Puertos del clúster abiertos a la red local: encontrado, corregido y verificado con make validate' }, href: `${repo('escudo')}/blob/main/findings/ESC-03-kind-ports-on-all-interfaces.md` },
      { check: { en: 'Terraform for AWS', es: 'Terraform para AWS' }, result: { en: 'Validated in CI, never applied', es: 'Validado en CI, nunca aplicado' }, href: `${repo('opscircuit')}/tree/main/terraform/aws` },
    ],
    screens: [
      { src: '/media/opscircuit-n8n.jpg', alt: { en: 'n8n incident intake: a real execution, every step green from the webhook to the page', es: 'Ingreso de incidentes en n8n: una ejecución real, todos los pasos en verde del webhook al aviso' }, width: 1600, height: 436 },
      { src: '/media/opscircuit-n8n-validate.jpg', alt: { en: 'n8n: validate, store the delivery, answer 202, fingerprint', es: 'n8n: validar, guardar la entrega, responder 202 y calcular la huella' }, width: 1180, height: 600 },
      { src: '/media/opscircuit-n8n-notify.jpg', alt: { en: 'n8n: service catalog, incident upsert and the page to on-call', es: 'n8n: catálogo de servicios, upsert del incidente y aviso a guardia' }, width: 1120, height: 600 },
      { src: '/media/opscircuit-lock-timeout.jpg', alt: { en: 'An execution stopped by a lock timeout, recorded as a dead letter', es: 'Ejecución detenida por un lock timeout, registrada como dead letter' }, width: 1600, height: 1000 },
      { src: '/media/opscircuit-grafana.jpg', alt: { en: 'Grafana dashboard provisioned as code', es: 'Tablero de Grafana como código' }, width: 1600, height: 1143 },
      { src: '/media/opscircuit-alerts.jpg', alt: { en: 'Prometheus alert rules', es: 'Reglas de alerta en Prometheus' }, width: 1600, height: 1075 },
    ],
    limitations: [
      { en: 'The AWS Terraform has never been applied; it would cost money.', es: 'El Terraform de AWS nunca se ha aplicado; tendría costo.' },
      { en: 'The cluster’s Prometheus is not routed to the lab’s Alertmanager yet.', es: 'El Prometheus del clúster aún no está conectado al Alertmanager del laboratorio.' },
      { en: 'The notifier is a mock; there is no real paging integration.', es: 'El notificador es simulado; no hay integración real de avisos.' },
    ],
    localVsProd: {
      en: 'Everything runs locally: kind for the platform and Docker Compose for the incident lab. The AWS design (VPC, EKS, RDS, ECR) is validated in CI only.',
      es: 'Todo corre en local: kind para la plataforma y Docker Compose para el laboratorio de incidentes. El diseño en AWS (VPC, EKS, RDS, ECR) solo se valida en CI.',
    },
    run: 'git clone https://github.com/vzuliani97/opscircuit && cd opscircuit\nmake up            # cluster, app, Prometheus and Grafana\ncd ops-automation && make up && make test   # 15 tests',
    diagrams: {
      context: { title: { en: 'Platform context', es: 'Contexto de la plataforma' }, status: 'MIXED', note: { en: 'Delivery, telemetry and incident automation, with the one link still planned.', es: 'Entrega, telemetría y automatización de incidentes, con el único enlace aún planeado.' } },
      containers: { title: { en: 'Incident lab containers', es: 'Contenedores del laboratorio' }, status: 'CURRENT', note: { en: 'Alertmanager, two n8n workflows, PostgreSQL and a mock notifier.', es: 'Alertmanager, dos flujos n8n, PostgreSQL y un notificador simulado.' } },
      flow: { title: { en: 'Alert lifecycle', es: 'Ciclo de vida de una alerta' }, status: 'CURRENT', note: { en: 'From the rule to a single page, or a replayable dead letter.', es: 'De la regla a un único aviso, o a un dead letter reprocesable.' } },
      deployment: { title: { en: 'Local platform and AWS blueprint', es: 'Plataforma local y diseño en AWS' }, status: 'MIXED', note: { en: 'Dashed: designed and validated in CI, not deployed.', es: 'Punteado: diseñado y validado en CI, no desplegado.' } },
    },
  },
  {
    slug: 'nekobet',
    name: 'NekoBet',
    subtitle: { en: 'Live Sportsbook, Casino & Wallet Platform', es: 'Plataforma de apuestas en vivo, casino y billetera' },
    repo: repo('nekobet'),
    accent: '#2b59c3',
    cover: '/media/nekobet-cover.jpg',
    oneLiner: {
      en: 'A real-time sportsbook for football, basketball, baseball and ice hockey, a casino with slot machines and prepaid top-ups, all on one store balance that stays correct under concurrent requests, retries, provider timeouts and reversals.',
      es: 'Apuestas en tiempo real de fútbol, baloncesto, béisbol y hockey, un casino con tragamonedas y recargas prepagadas, todo sobre un saldo por tienda que se mantiene correcto ante solicitudes simultáneas, reintentos, timeouts y reversos de proveedores.',
    },
    purpose: {
      en: 'A point-of-sale network where every store sells live sports bets, casino games and prepaid top-ups from one balance, from a portal or a partner API. Everything runs in real time; the production platforms I worked on and their data are confidential, so this public version uses a simulated feed. The engineering goal is a balance that never goes wrong.',
      es: 'Una red de puntos de venta donde cada tienda vende apuestas en vivo, juegos de casino y recargas desde un mismo saldo, por un portal o una API de aliados. Todo corre en tiempo real; las plataformas de producción en las que trabajé y sus datos son confidenciales, así que esta versión pública usa un feed simulado. El objetivo de ingeniería es un saldo que nunca falla.',
    },
    myWork: [
      { en: 'Sportsbook for four sports, each with its own clock and scoring model (Poisson goals and runs, a normal model of points), one feed leader, SSE to the browser, ODDS_CHANGED refusals and every market settled once.', es: 'Apuestas de cuatro deportes, cada uno con su reloj y modelo de puntuación (goles y carreras Poisson, puntos con un modelo normal), un solo líder del feed, SSE al navegador, rechazo por ODDS_CHANGED y cada mercado liquidado una vez.' },
      { en: 'Casino: a seamless wallet with idempotent, HMAC-signed provider callbacks and rollback tombstones; a lobby of five fictitious games with an animated slot machine.', es: 'Casino: billetera seamless con callbacks del proveedor idempotentes y firmados con HMAC, y registro de reversos anticipados; un lobby de cinco juegos ficticios con una tragamonedas animada.' },
      { en: 'Balance and ledger: one conditional UPDATE, CHECK constraints and append-only movements; idempotent sales with per-key advisory locks.', es: 'Saldo y libro contable: un UPDATE condicional, restricciones CHECK y movimientos de solo inserción; ventas idempotentes con bloqueo por llave.' },
      { en: 'An HMAC-signed B2B API for partners, a login lockout, and a React cashier, sportsbook, casino and admin; CI scans, signs and publishes the images that Argo CD deploys in OpsCircuit.', es: 'Una API B2B firmada con HMAC para aliados, bloqueo de login, y en React la caja, las apuestas, el casino y la administración; el CI escanea, firma y publica las imágenes que Argo CD despliega en OpsCircuit.' },
    ],
    metrics: [
      { en: '60 tests', es: '60 pruebas' },
      { en: '4 sports live', es: '4 deportes en vivo' },
      { en: '70 retries → 1 sale', es: '70 reintentos → 1 venta' },
    ],
    stack: ['NestJS', 'PostgreSQL', 'React', 'SSE', 'HMAC', 'Docker'],
    layers: [
      { layer: { en: 'Frontend', es: 'Frontend' }, items: ['React 19', 'TypeScript', 'Vite 8', 'EventSource (SSE)', 'SVG live tracker'] },
      { layer: { en: 'Backend', es: 'Backend' }, items: ['Node.js 24', 'NestJS 11', 'Zod 4', 'JWT', 'HMAC-SHA256', 'Server-Sent Events'] },
      { layer: { en: 'Data', es: 'Datos' }, items: ['PostgreSQL 16', 'plain SQL', 'advisory locks', 'append-only ledger'] },
      { layer: { en: 'Infrastructure and DevOps', es: 'Infraestructura y DevOps' }, items: ['Docker multi-stage', 'nginx', 'GHCR multi-arch images', 'Kubernetes', 'Argo CD (in OpsCircuit)'] },
      { layer: { en: 'CI/CD and quality', es: 'CI/CD y calidad' }, items: ['GitHub Actions', 'Jest', 'Supertest', '60 tests', 'Dependabot'] },
      { layer: { en: 'Security', es: 'Seguridad' }, items: ['CodeQL', 'Gitleaks', 'npm audit', 'Trivy', 'OWASP ZAP (DAST)', 'SBOM + SLSA provenance', 'cosign signing', 'Content-Security-Policy', 'Helmet', 'IP allowlist', 'login lockout'] },
      { layer: { en: 'Observability', es: 'Observabilidad' }, items: ['Prometheus metrics (prom-client)'] },
    ],
    roleFit: {
      en: 'Full stack and real-time transactional design: a live sportsbook and casino over idempotency, concurrency control, an auditable ledger and signed provider integrations.',
      es: 'Full stack y diseño transaccional en tiempo real: apuestas en vivo y casino sobre idempotencia, control de concurrencia, un libro contable auditable e integraciones firmadas con proveedores.',
    },
    problem: {
      en: 'Stores hold one prepaid balance for bets, casino rounds and top-ups. Two sales can spend the same balance, a retry can charge twice, odds move while the cashier decides, a game provider retries or reverses a call, and a carrier can time out with the outcome unknown.',
      es: 'Las tiendas tienen un solo saldo prepagado para apuestas, casino y recargas. Dos ventas pueden gastar el mismo saldo, un reintento puede cobrar dos veces, las cuotas cambian mientras el cajero decide, el proveedor de juegos reintenta o revierte llamadas y el operador puede no responder.',
    },
    built: [
      { en: 'A real-time sportsbook for football, basketball, baseball and ice hockey: results, double chance, totals and both teams to score, with overtime and extra innings, and an event page for every game.', es: 'Apuestas en tiempo real de fútbol, baloncesto, béisbol y hockey: resultados, doble oportunidad, totales y ambos marcan, con prórrogas y entradas extra, y una página por partido.' },
      { en: 'Bets refused when the odds moved; every market settled from the final score and paid once.', es: 'Apuestas rechazadas si la cuota cambió; cada mercado se liquida con el marcador final y se paga una sola vez.' },
      { en: 'A seamless-wallet casino with idempotent provider callbacks and rollback tombstones; slot machines whose reels show the provider\'s outcome.', es: 'Un casino con billetera seamless, callbacks idempotentes y registro de reversos anticipados; tragamonedas cuyos rodillos muestran el resultado del proveedor.' },
      { en: 'Check and debit in one conditional UPDATE, a mandatory Idempotency-Key, an append-only ledger and an HMAC-SHA256 partner API with an IP allowlist.', es: 'Verificación y débito en un UPDATE condicional, Idempotency-Key obligatoria, libro contable de solo inserción y una API de aliados con HMAC-SHA256 y lista blanca de IP.' },
    ],
    scanDecisions: [
      { en: 'Call the provider outside the transaction', es: 'Llamar al proveedor fuera de la transacción' },
      { en: 'PENDING on timeout, never a blind refund', es: 'PENDING ante timeout, nunca un reembolso a ciegas' },
      { en: 'A bet carries the odds the cashier saw; a moved price is refused', es: 'La apuesta lleva la cuota que vio el cajero; si cambió, se rechaza' },
    ],
    proof: [
      { en: '60 automated tests; multi-arch images published after CI', es: '60 pruebas automatizadas; imágenes multiarquitectura publicadas tras el CI' },
      { en: 'Local experiment: 70 concurrent sales, balance for 50, exactly 50 approved', es: 'Experimento local: 70 ventas simultáneas, saldo para 50, exactamente 50 aprobadas' },
      { en: '70 concurrent retries of one key create one sale', es: '70 reintentos simultáneos de una llave crean una sola venta' },
    ],
    decisions: [
      {
        title: { en: 'The provider is called outside the transaction', es: 'El proveedor se llama fuera de la transacción' },
        body: {
          en: 'Holding the balance row lock during a network call would queue every other sale of that store behind it. The sale commits as PENDING with the money reserved, then the provider is called.',
          es: 'Mantener el bloqueo de la fila del saldo durante una llamada de red pondría en cola todas las demás ventas de la tienda. La venta se confirma como PENDING con el dinero reservado y luego se llama al proveedor.',
        },
      },
      {
        title: { en: 'A timeout is not a failure', es: 'Un timeout no es un fallo' },
        body: {
          en: 'If the carrier does not answer, the top-up may have gone through. Refunding blindly could give the product away, so the sale stays PENDING. The reconciliation job that resolves it is the documented next step.',
          es: 'Si el operador no responde, la recarga pudo haberse hecho. Reembolsar a ciegas podría regalar el producto, así que la venta queda en PENDING. El proceso de conciliación que la resuelve es el siguiente paso documentado.',
        },
      },
      {
        title: { en: 'HMAC over the body hash', es: 'HMAC sobre el hash del cuerpo' },
        body: {
          en: 'Partners sign timestamp, method, path and body hash; the server compares in constant time within a 5-minute window. Integrity and authenticity without sending the secret.',
          es: 'Los aliados firman la marca de tiempo, el método, la ruta y el hash del cuerpo; el servidor compara en tiempo constante dentro de una ventana de 5 minutos. Integridad y autenticidad sin enviar el secreto.',
        },
      },
    ],
    verification: [
      { check: { en: 'Unit and integration tests', es: 'Pruebas unitarias y de integración' }, result: { en: '60 passing in CI', es: '60 aprobadas en CI' }, href: `${repo('nekobet')}/actions` },
      { check: { en: 'Betting and casino', es: 'Apuestas y casino' }, result: { en: 'Odds-changed refusal, every market settled once, wallet replays', es: 'Rechazo por cambio de cuota, cada mercado liquidado una vez, reintentos de billetera' }, href: `${repo('nekobet')}/blob/main/backend/test/e2e/betting.e2e-spec.ts` },
      { check: { en: 'Concurrency experiment', es: 'Experimento de concurrencia' }, result: { en: 'Naive 70 approved, conditional UPDATE 50 (local, not a benchmark)', es: 'Versión ingenua 70, UPDATE condicional 50 (local, no es un benchmark)' }, href: `${repo('nekobet')}/blob/main/docs/concurrency-experiment.md` },
      { check: { en: 'Static analysis, secrets, dependencies', es: 'Análisis estático, secretos y dependencias' }, result: { en: 'CodeQL, Gitleaks and npm audit green', es: 'CodeQL, Gitleaks y npm audit en verde' }, href: `${repo('nekobet')}/actions` },
      { check: { en: 'Supply chain', es: 'Cadena de suministro' }, result: { en: 'Trivy and ZAP gates; images with SBOM and provenance, signed with cosign', es: 'Controles de Trivy y ZAP; imágenes con SBOM y procedencia, firmadas con cosign' }, href: `${repo('nekobet')}#security` },
      { check: { en: 'Security assessment', es: 'Evaluación de seguridad' }, result: { en: 'A replayed partner sale was charged twice: found, fixed, retested in CI', es: 'Una venta de un integrador repetida se cobraba dos veces: encontrado, corregido y probado en CI' }, href: `${repo('escudo')}/blob/main/findings/ESC-02-hmac-replay-new-idempotency-key.md` },
    ],
    screens: [
      { src: '/media/nekobet-betting.jpg', alt: { en: 'Live sportsbook: matches by league, moving 1X2 odds, a link to every market, bet slip and my bets', es: 'Apuestas en vivo: partidos por liga, cuotas 1X2 que se mueven, enlace a todos los mercados, cupón y mis apuestas' }, width: 1600, height: 1111 },
      { src: '/media/nekobet-event.jpg', alt: { en: 'Football event: live tracker on the pitch, scoreboard and every market', es: 'Partido de fútbol: tracker en vivo en la cancha, marcador y todos los mercados' }, width: 1600, height: 1111 },
      { src: '/media/nekobet-basketball.jpg', alt: { en: 'Basketball event: court tracker by quarter, winner and total points', es: 'Partido de baloncesto: tracker en la cancha por cuarto, ganador y total de puntos' }, width: 1600, height: 1111 },
      { src: '/media/nekobet-casino.jpg', alt: { en: 'Casino lobby and a slot machine paying through the wallet', es: 'Lobby del casino y una tragamonedas pagando por la billetera' }, width: 1600, height: 1111 },
      { src: '/media/nekobet-cashier.jpg', alt: { en: 'Cashier: balance, top-ups and a refunded rejection', es: 'Caja: saldo, recargas y un rechazo reembolsado' }, width: 1600, height: 1111 },
      { src: '/media/nekobet-admin.jpg', alt: { en: 'Admin: points of sale, credits and network sales', es: 'Administración: puntos de venta, créditos y ventas de la red' }, width: 1600, height: 1111 },
    ],
    limitations: [
      { en: 'Reconciliation of PENDING sales is not implemented yet.', es: 'La conciliación de ventas en PENDING aún no está implementada.' },
      { en: 'HMAC secrets are stored in plain text; production would use a secrets manager.', es: 'Los secretos HMAC se guardan en texto plano; en producción irían en un gestor de secretos.' },
      { en: 'Carrier, odds feed and game provider are simulated because the production platforms and their data are confidential. Betting is a demonstration, not a licensed service (Colombia requires a Coljuegos license).', es: 'El operador, el feed de cuotas y el proveedor de juegos son simulados porque las plataformas de producción y sus datos son confidenciales. Las apuestas son una demostración, no un servicio con licencia (en Colombia se requiere licencia de Coljuegos).' },
    ],
    localVsProd: {
      en: 'Runs locally with Docker Compose and on OpsCircuit’s kind cluster through Argo CD. The concurrency numbers come from a local, reproducible experiment, not from production traffic.',
      es: 'Corre en local con Docker Compose y en el clúster kind de OpsCircuit mediante Argo CD. Los números de concurrencia vienen de un experimento local y reproducible, no de tráfico de producción.',
    },
    run: 'git clone https://github.com/vzuliani97/nekobet && cd nekobet\nmake .env   # .env.example with random secrets\nmake up     # http://localhost:8081\nmake test   # 60 tests',
    diagrams: {
      context: { title: { en: 'System context', es: 'Contexto' }, status: 'MIXED', note: { en: 'Cashiers, partners and a simulated carrier; reconciliation planned.', es: 'Cajeros, aliados y un operador simulado; conciliación planeada.' } },
      containers: { title: { en: 'Containers', es: 'Contenedores' }, status: 'CURRENT', note: { en: 'nginx, a NestJS API and PostgreSQL.', es: 'nginx, una API NestJS y PostgreSQL.' } },
      flow: { title: { en: 'Critical flow: a sale', es: 'Flujo crítico: una venta' }, status: 'CURRENT', note: { en: 'Two short transactions around one network call.', es: 'Dos transacciones cortas alrededor de una llamada de red.' } },
      deployment: { title: { en: 'Delivery', es: 'Entrega' }, status: 'CURRENT', note: { en: 'CI publishes images that Argo CD deploys in OpsCircuit.', es: 'El CI publica imágenes que Argo CD despliega en OpsCircuit.' } },
    },
  },
];
