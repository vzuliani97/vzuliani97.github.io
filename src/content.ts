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
  tryOnline: { en: 'Try it online', es: 'Probar en línea' },
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
  assessmentTitle: { en: 'Applied Cyber Security: my diploma, tested on these three systems', es: 'Ciberseguridad aplicada: mi diploma, probado en estos tres sistemas' },
  assessmentText: {
    en: 'Three units of my Advanced Diploma in Cyber Security applied to NekoBet, Yamesi and the OpsCircuit cluster. A penetration test found 12 issues, from a replayed partner sale that was charged twice to an example JWT secret that let anyone sign an admin token; all are fixed, and its 38 attacks run again in both apps’ CI on every push. Yamesi now also logs every attempt it refuses, and in a drill its seven detection rules, mapped to MITRE ATT&CK, raised 7 alerts from those attacks. A risk register and an identity and access review complete it. The two apps online keep the same controls and add exact CORS, a Content Security Policy limited to their API, per-client request limits and a database-name check before any data reset.',
    es: 'Tres unidades de mi Advanced Diploma en Ciberseguridad aplicadas a NekoBet, Yamesi y el clúster de OpsCircuit. Una prueba de penetración encontró 12 fallas, desde una venta de un integrador que se cobraba dos veces al repetirla hasta un secreto JWT de ejemplo que permitía firmar un token de administrador; todas están corregidas, y sus 38 ataques vuelven a correr en el CI de ambas aplicaciones en cada push. Yamesi además registra cada intento que rechaza, y en un simulacro sus siete reglas de detección, mapeadas a MITRE ATT&CK, dispararon 7 alertas con esos ataques. Lo completan un registro de riesgos y una revisión de identidades y accesos. Las dos aplicaciones en línea mantienen esos controles y añaden CORS exacto, una política de seguridad de contenido (CSP) limitada a su API, límite de peticiones por cliente y una verificación del nombre de la base antes de reiniciar datos.',
  },
  assessmentLink: { en: 'Source on GitHub', es: 'Código en GitHub' },
} satisfies Record<string, L>;

export const hero = {
  title: { en: 'Software Engineer — Full Stack, Cloud, DevOps & Security', es: 'Ingeniero de software — Full Stack, Cloud, DevOps y Seguridad' },
  lead: {
    en: 'I build, deploy and operate full-stack applications, APIs and cloud infrastructure with TypeScript, Node.js, React and AWS, and I test their security: my Advanced Diploma in Cyber Security, applied to my own systems.',
    es: 'Construyo, despliego y opero aplicaciones full stack, APIs e infraestructura cloud con TypeScript, Node.js, React y AWS, y pruebo su seguridad: mi Advanced Diploma en Ciberseguridad, aplicado a mis propios sistemas.',
  },
  languages: { en: 'Spanish and Italian native · English C1', es: 'Español e italiano nativos · Inglés C1' },
};

export const stats: Array<{ value: L; label: L }> = [
  { value: { en: '178', es: '178' }, label: { en: 'automated tests across 3 portfolio systems (94 + 69 + 15)', es: 'pruebas automatizadas en 3 sistemas del portafolio (94 + 69 + 15)' } },
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

// Same wording as the résumé ("Valter Zuliani - Todos los CV", 2026-11-09, Software Engineer variant).
export const experience: Array<{ role: string; company: string; when: L; note: L; highlights: L[] }> = [
  {
    role: 'Full Stack Developer',
    company: 'Yamesi Jewelry',
    when: { en: 'Medellín · May 2020 – Present', es: 'Medellín · may. 2020 – actualidad' },
    note: {
      en: "The store's accounting and invoicing system, from the first line of code to production.",
      es: 'El sistema contable y de facturación de la joyería, desde la primera línea de código hasta producción.',
    },
    highlights: [
      {
        en: "Proposed and built the jewelry store's accounting and invoicing system, replacing spreadsheets and paper receipts for gold, inventory and invoicing; it records about 15 invoices a day.",
        es: 'Propuse y desarrollé el sistema contable y de facturación de la joyería, que reemplazó Excel y recibos en papel para el oro, el inventario y la facturación; registra unas 15 facturas al día.',
      },
      {
        en: 'Deployed it with Docker on AWS (EC2, RDS, S3, ALB, Route 53, CloudFront and CloudWatch), with HTTPS and network access restricted through security groups, SSH and VPN.',
        es: 'Lo desplegué con Docker en AWS (EC2, RDS, S3, ALB, Route 53, CloudFront y CloudWatch), con HTTPS y acceso de red restringido mediante security groups, SSH y VPN.',
      },
      {
        en: 'Since 2023, as a contractor, provide production support, corrective and evolutionary maintenance, new features and integrations.',
        es: 'Desde 2023, como contratista, brindo soporte en producción, mantenimiento correctivo y evolutivo, nuevas funcionalidades e integraciones.',
      },
    ],
  },
  {
    role: 'Junior DevOps Engineer',
    company: 'The Big Group',
    when: { en: 'Sydney · Oct 2024 – Apr 2026 · part-time', es: 'Sídney · oct. 2024 – abr. 2026 · tiempo parcial' },
    note: {
      en: 'Delivery and operations of AWS services in an international team, in English.',
      es: 'Entrega y operación de servicios en AWS en un equipo internacional, en inglés.',
    },
    highlights: [
      {
        en: 'Supported the deployment and maintenance of AWS services for payments, digital operations and hospitality on Kubernetes (EKS), ECS/Fargate and Lambda, with Helm, ECR, API Gateway and RDS.',
        es: 'Apoyé el despliegue y mantenimiento de servicios en AWS para pagos, operaciones digitales y hospitalidad sobre Kubernetes (EKS), ECS/Fargate y Lambda, con Helm, ECR, API Gateway y RDS.',
      },
      {
        en: 'Worked with Terraform (infrastructure as code) and CI/CD pipelines to automate deployments and releases.',
        es: 'Trabajé con Terraform (infraestructura como código) y pipelines de CI/CD para automatizar despliegues y entregas.',
      },
      {
        en: 'Investigated production incidents and service availability with Datadog, CloudWatch and ELK logs.',
        es: 'Investigué incidentes en producción y la disponibilidad de los servicios con Datadog, CloudWatch y logs en ELK.',
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
        en: 'Developed full-stack modules and Node.js/TypeScript REST APIs with Angular, React, PHP and MySQL for transactional, white-label iGaming (several countries) and healthcare platforms.',
        es: 'Desarrollé módulos full stack y APIs REST en Node.js y TypeScript, con Angular, React, PHP y MySQL, para plataformas transaccionales, iGaming de marca blanca (varios países) y de salud.',
      },
      {
        en: 'Built a partner B2B API secured with JWT, key pairs and IP allowlisting, and integrations with top-up providers.',
        es: 'Construí una API B2B para aliados, protegida con JWT, pares de llaves y lista blanca de IP, e integraciones con proveedores de recargas.',
      },
      {
        en: 'Configured AWS infrastructure (EC2, VPC, VPN, EKS) with Terraform and deployed services from staging to production with Docker, Kubernetes and GitLab CI/CD, using RDS and CloudWatch.',
        es: 'Configuré infraestructura AWS (EC2, VPC, VPN, EKS) con Terraform y desplegué servicios de pruebas a producción con Docker, Kubernetes y GitLab CI/CD, usando RDS y CloudWatch.',
      },
      {
        en: 'Worked on the real-time sports betting and casino integration of a point-of-sale portal: live-odds frontend, provider integration and betting backend (validation, balance, settlement).',
        es: 'Trabajé en la integración de apuestas deportivas y casino en tiempo real de un portal para puntos de venta: frontend de cuotas en vivo, proveedor y backend (validación, saldo, liquidación).',
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
    note: {
      en: 'A payment gateway in C++.',
      es: 'Una pasarela de pagos en C++.',
    },
    highlights: [
      {
        en: 'Contributed to C++ features of a payment gateway, focused on transaction processing.',
        es: 'Participé en el desarrollo de funcionalidades en C++ de una pasarela de pagos, con énfasis en el procesamiento transaccional.',
      },
    ],
  },
];

export const education = {
  en: 'Systems Engineer, Universidad de Medellín · Advanced Diploma of IT (Cyber Security), ICT60220, AQF Level 6, completed at ACBI, Sydney; units include penetration testing, risk assessment and identity management',
  es: 'Ingeniero de Sistemas, Universidad de Medellín · Advanced Diploma of IT (Cyber Security), ICT60220, nivel AQF 6, completado en ACBI, Sídney; incluye pruebas de penetración, evaluación de riesgos y gestión de identidades',
};

export type DiagramView = 'context' | 'containers' | 'flow' | 'deployment';

export interface Project {
  slug: 'yamesi' | 'opscircuit' | 'nekobet';
  name: string;
  subtitle: L;
  repo: string;
  /** Public deployment on free hosting with synthetic data, when the project has one. */
  live?: { url: string; note: L };
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
    live: {
      url: 'https://yamesi.netlify.app',
      note: {
        en: 'Online with synthetic data that resets on restart; users and password on the sign-in screen. Free hosting sleeps when idle, so the first visit can take about a minute.',
        es: 'En línea con datos ficticios que se reinician al arrancar; usuarios y contraseña en la pantalla de ingreso. El hosting gratuito se duerme sin uso, así que la primera visita puede tardar cerca de un minuto.',
      },
    },
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
      { en: 'Docker Compose, CI with CodeQL, Gitleaks, a Trivy image scan and an OWASP ZAP scan, 94 tests and a scripted business day.', es: 'Docker Compose, CI con CodeQL, Gitleaks, escaneo de imágenes con Trivy y escaneo OWASP ZAP, 94 pruebas y un día de negocio simulado.' },
      { en: 'Security events for every refused login, token, admin action and upload, and seven detection rules mapped to MITRE ATT&CK.', es: 'Eventos de seguridad por cada login, token, acción de administrador y archivo rechazados, y siete reglas de detección mapeadas a MITRE ATT&CK.' },
    ],
    metrics: [
      { en: '94 tests', es: '94 pruebas' },
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
      { layer: { en: 'CI/CD and quality', es: 'CI/CD y calidad' }, items: ['GitHub Actions', 'Jest', 'Supertest', '94 tests', 'Dependabot'] },
      { layer: { en: 'Security', es: 'Seguridad' }, items: ['CodeQL', 'Gitleaks', 'npm audit', 'Trivy', 'OWASP ZAP (DAST)', 'Content-Security-Policy', 'Helmet', 'login lockout', 'image metadata check', 'security events', '7 detection rules (MITRE ATT&CK)'] },
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
      { en: '94 automated tests, 2 against a real S3-compatible server', es: '94 pruebas automatizadas, 2 contra un servidor compatible con S3' },
      { en: 'The penetration test’s attacks, replayed in a drill, raised 7 alerts from 40 security events', es: 'Los ataques del pentest, repetidos en un simulacro, dispararon 7 alertas a partir de 40 eventos de seguridad' },
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
      { check: { en: 'Unit and integration tests', es: 'Pruebas unitarias y de integración' }, result: { en: '94 passing in CI', es: '94 aprobadas en CI' }, href: `${repo('yamesi')}/actions` },
      { check: { en: 'CUFE against the official DIAN example', es: 'CUFE contra el ejemplo oficial de la DIAN' }, result: { en: 'Identical hash', es: 'Hash idéntico' }, href: `${repo('yamesi')}/blob/main/backend/test/unit/colombian-invoice.spec.ts` },
      { check: { en: 'Concurrent sales of one piece', es: 'Ventas simultáneas de una pieza' }, result: { en: 'One sale, one PIECE_NOT_AVAILABLE', es: 'Una venta y un PIECE_NOT_AVAILABLE' }, href: `${repo('yamesi')}/blob/main/backend/test/e2e/invoices.e2e-spec.ts` },
      { check: { en: 'Static analysis and secrets', es: 'Análisis estático y secretos' }, result: { en: 'CodeQL and Gitleaks green', es: 'CodeQL y Gitleaks en verde' }, href: `${repo('yamesi')}/actions` },
      { check: { en: 'Image and DAST scans', es: 'Escaneo de imágenes y DAST' }, result: { en: 'Trivy: 0 fixable critical or high CVEs; ZAP: no unaccepted warnings', es: 'Trivy: 0 CVE críticas o altas corregibles; ZAP: sin alertas no aceptadas' }, href: `${repo('yamesi')}/blob/main/.zap/rules.tsv` },
      { check: { en: 'Security assessment', es: 'Evaluación de seguridad' }, result: { en: 'Photos kept GPS and sellers saw costs: found, fixed, retested in CI', es: 'Las fotos conservaban el GPS y el vendedor veía costos: encontrado, corregido y probado en CI' }, href: `${repo('applied-cybersecurity')}#findings` },
      { check: { en: 'Detection drill', es: 'Simulacro de detección' }, result: { en: '13 pentest attacks and 2 login attacks: 40 security events, 7 alerts, one per rule', es: '13 ataques del pentest y 2 de login: 40 eventos de seguridad, 7 alertas, una por regla' }, href: `${repo('yamesi')}/blob/main/docs/SECURITY_DETECTION.md#drill-2026-11-13` },
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
      en: 'This repository is an independent rebuild that runs locally with Docker Compose and online on free hosting (Netlify, Render and Neon), deployed from main. Its demo catalog comes from the store’s public catalog; customers, costs and lots are synthetic. The business’s real system is professional work in a separate codebase, deployed with Docker on AWS EC2 and S3.',
      es: 'Este repositorio es una reconstrucción independiente que corre en local con Docker Compose y en línea en hosting gratuito (Netlify, Render y Neon), desplegada desde main. Su catálogo de demostración viene del catálogo público de la tienda; clientes, costos y lotes son ficticios. El sistema real del negocio es trabajo profesional en otro código, desplegado con Docker en AWS EC2 y S3.',
    },
    run: 'git clone https://github.com/vzuliani97/yamesi && cd yamesi\nmake .env   # .env.example with random secrets\nmake demo   # loads the store catalog and simulates one business day\nmake test   # 94 tests in containers',
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
      { check: { en: 'Security assessment', es: 'Evaluación de seguridad' }, result: { en: 'Cluster ports open to the local network: found, fixed, checked by make validate', es: 'Puertos del clúster abiertos a la red local: encontrado, corregido y verificado con make validate' }, href: `${repo('applied-cybersecurity')}/blob/main/findings/ESC-03-kind-ports-on-all-interfaces.md` },
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
    live: {
      url: 'https://nekobet.netlify.app',
      note: {
        en: 'The live board is open without an account; sign in as cashier to bet, sell top-ups or play the casino. Simulation only, no real money. Free hosting sleeps when idle, so the first visit can take about a minute.',
        es: 'El tablero en vivo se ve sin cuenta; para apostar, vender recargas o jugar casino se ingresa como cajero. Solo simulación, sin dinero real. El hosting gratuito se duerme sin uso, así que la primera visita puede tardar cerca de un minuto.',
      },
    },
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
      { en: '69 tests', es: '69 pruebas' },
      { en: '4 sports live', es: '4 deportes en vivo' },
      { en: '70 retries → 1 sale', es: '70 reintentos → 1 venta' },
    ],
    stack: ['NestJS', 'PostgreSQL', 'React', 'SSE', 'HMAC', 'Docker'],
    layers: [
      { layer: { en: 'Frontend', es: 'Frontend' }, items: ['React 19', 'TypeScript', 'Vite 8', 'EventSource (SSE)', 'SVG live tracker'] },
      { layer: { en: 'Backend', es: 'Backend' }, items: ['Node.js 24', 'NestJS 11', 'Zod 4', 'JWT', 'HMAC-SHA256', 'Server-Sent Events'] },
      { layer: { en: 'Data', es: 'Datos' }, items: ['PostgreSQL 16', 'plain SQL', 'advisory locks', 'append-only ledger'] },
      { layer: { en: 'Infrastructure and DevOps', es: 'Infraestructura y DevOps' }, items: ['Docker multi-stage', 'nginx', 'GHCR multi-arch images', 'Kubernetes', 'Argo CD (in OpsCircuit)'] },
      { layer: { en: 'CI/CD and quality', es: 'CI/CD y calidad' }, items: ['GitHub Actions', 'Jest', 'Supertest', '69 tests', 'Dependabot'] },
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
      { en: '69 automated tests; multi-arch images published after CI', es: '69 pruebas automatizadas; imágenes multiarquitectura publicadas tras el CI' },
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
      { check: { en: 'Unit and integration tests', es: 'Pruebas unitarias y de integración' }, result: { en: '69 passing in CI', es: '69 aprobadas en CI' }, href: `${repo('nekobet')}/actions` },
      { check: { en: 'Betting and casino', es: 'Apuestas y casino' }, result: { en: 'Odds-changed refusal, every market settled once, wallet replays', es: 'Rechazo por cambio de cuota, cada mercado liquidado una vez, reintentos de billetera' }, href: `${repo('nekobet')}/blob/main/backend/test/e2e/betting.e2e-spec.ts` },
      { check: { en: 'Concurrency experiment', es: 'Experimento de concurrencia' }, result: { en: 'Naive 70 approved, conditional UPDATE 50 (local, not a benchmark)', es: 'Versión ingenua 70, UPDATE condicional 50 (local, no es un benchmark)' }, href: `${repo('nekobet')}/blob/main/docs/concurrency-experiment.md` },
      { check: { en: 'Static analysis, secrets, dependencies', es: 'Análisis estático, secretos y dependencias' }, result: { en: 'CodeQL, Gitleaks and npm audit green', es: 'CodeQL, Gitleaks y npm audit en verde' }, href: `${repo('nekobet')}/actions` },
      { check: { en: 'Supply chain', es: 'Cadena de suministro' }, result: { en: 'Trivy and ZAP gates; images with SBOM and provenance, signed with cosign', es: 'Controles de Trivy y ZAP; imágenes con SBOM y procedencia, firmadas con cosign' }, href: `${repo('nekobet')}#security` },
      { check: { en: 'Security assessment', es: 'Evaluación de seguridad' }, result: { en: 'A replayed partner sale was charged twice: found, fixed, retested in CI', es: 'Una venta de un integrador repetida se cobraba dos veces: encontrado, corregido y probado en CI' }, href: `${repo('applied-cybersecurity')}/blob/main/findings/ESC-02-hmac-replay-new-idempotency-key.md` },
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
      en: 'Runs locally with Docker Compose, on OpsCircuit’s kind cluster through Argo CD, and online on free hosting (Netlify, Render and Neon), deployed from main. The concurrency numbers come from a local, reproducible experiment, not from production traffic.',
      es: 'Corre en local con Docker Compose, en el clúster kind de OpsCircuit mediante Argo CD y en línea en hosting gratuito (Netlify, Render y Neon), desplegado desde main. Los números de concurrencia vienen de un experimento local y reproducible, no de tráfico de producción.',
    },
    run: 'git clone https://github.com/vzuliani97/nekobet && cd nekobet\nmake .env   # .env.example with random secrets\nmake up     # http://localhost:8081\nmake test   # 69 tests',
    diagrams: {
      context: { title: { en: 'System context', es: 'Contexto' }, status: 'MIXED', note: { en: 'Cashiers, partners and a simulated carrier; reconciliation planned.', es: 'Cajeros, aliados y un operador simulado; conciliación planeada.' } },
      containers: { title: { en: 'Containers', es: 'Contenedores' }, status: 'CURRENT', note: { en: 'nginx, a NestJS API and PostgreSQL.', es: 'nginx, una API NestJS y PostgreSQL.' } },
      flow: { title: { en: 'Critical flow: a sale', es: 'Flujo crítico: una venta' }, status: 'CURRENT', note: { en: 'Two short transactions around one network call.', es: 'Dos transacciones cortas alrededor de una llamada de red.' } },
      deployment: { title: { en: 'Delivery', es: 'Entrega' }, status: 'CURRENT', note: { en: 'CI publishes images that Argo CD deploys in OpsCircuit.', es: 'El CI publica imágenes que Argo CD despliega en OpsCircuit.' } },
    },
  },
];

// Applied Cyber Security: the penetration test (applied-cybersecurity), the detection added to Yamesi and its drill.
// Evidence blocks quote the finding files and the drill log of 2026-11-13 verbatim.
const SECURITY_REPO = repo('applied-cybersecurity');
const DETECTION_DOC = `${repo('yamesi')}/blob/main/docs/SECURITY_DETECTION.md`;
const DRILL_LOG = `${repo('yamesi')}/blob/main/docs/security/detection-drill-2026-11-13.log`;

export type SeverityLevel = 'critical' | 'high' | 'medium' | 'low' | 'info';

export interface DetectionRule {
  id: string;
  detects: L;
  when: L;
  reference: string;
  watches: string;
  severity: SeverityLevel;
}

export interface Finding {
  id: string;
  title: L;
  target: string;
  severity: SeverityLevel;
  rating: string;
  /** File name in applied-cybersecurity/findings, without .md. */
  file: string;
}

export interface CaseStep {
  label: L;
  title: L;
  body: L;
  evidence?: string;
  href: string;
}

export const security = {
  name: 'Applied Cyber Security',
  accent: '#be123c',
  subtitle: { en: 'Penetration test, detection and risk, on systems I built', es: 'Prueba de penetración, detección y riesgo, sobre sistemas que construí' },
  oneLiner: {
    en: 'I attacked NekoBet, Yamesi and the OpsCircuit cluster with the methods of my Advanced Diploma in Cyber Security. Twelve findings, one critical, all fixed, and the attacks rerun in CI on every push. Then I made the attacks visible: Yamesi logs every attempt it refuses, and seven detection rules turn those logs into alerts.',
    es: 'Ataqué NekoBet, Yamesi y el clúster de OpsCircuit con los métodos de mi Advanced Diploma en Ciberseguridad. Doce hallazgos, uno crítico, todos corregidos, y los ataques vuelven a correr en CI en cada push. Después hice visibles los ataques: Yamesi registra cada intento que rechaza y siete reglas de detección convierten esos registros en alertas.',
  },
  chips: ['OWASP WSTG 4.2', 'CVSS 3.1', 'MITRE ATT&CK', 'CWE', 'Node.js test runner', 'Trivy', 'OWASP ZAP', 'Gitleaks'],
  numbers: [
    { value: '12', label: { en: 'findings, all fixed: 1 critical, 2 high, 8 medium, 1 informational', es: 'hallazgos, todos corregidos: 1 crítico, 2 altos, 8 medios y 1 informativo' } },
    { value: '38', label: { en: 'attacks rerun in both apps’ CI on every push', es: 'ataques que vuelven a correr en el CI de ambas apps en cada push' } },
    { value: '7', label: { en: 'detection rules, mapped to MITRE ATT&CK and OWASP', es: 'reglas de detección, mapeadas a MITRE ATT&CK y OWASP' } },
    { value: '40 → 7', label: { en: 'security events and alerts in the drill of 13 Nov 2026', es: 'eventos de seguridad y alertas en el simulacro del 13 nov. 2026' } },
  ],
  purpose: {
    en: 'Shows the whole security loop on real code: find the weakness, prove it with an exploit, score it, fix it, keep it fixed with a test, and see the next attempt in the logs.',
    es: 'Muestra el ciclo completo de seguridad sobre código real: encontrar la debilidad, probarla con un exploit, calificarla, corregirla, mantenerla corregida con una prueba y ver el siguiente intento en los registros.',
  },
  myWork: [
    { en: 'A gray-box penetration test of three systems, following the OWASP Web Security Testing Guide, with CVSS 3.1 scores and CWE references.', es: 'Una prueba de penetración de caja gris a tres sistemas, siguiendo la OWASP Web Security Testing Guide, con puntajes CVSS 3.1 y referencias CWE.' },
    { en: 'Every attack written as a repeatable test with no dependencies: 38 of them run in NekoBet’s and Yamesi’s CI, so a change that reopens a finding fails before merge.', es: 'Cada ataque escrito como una prueba repetible sin dependencias: 38 corren en el CI de NekoBet y Yamesi, así que un cambio que reabre un hallazgo falla antes del merge.' },
    { en: 'The fixes in the apps and the cluster, each with unit and end-to-end tests.', es: 'Las correcciones en las apps y el clúster, cada una con pruebas unitarias y de extremo a extremo.' },
    { en: 'Detection in Yamesi: security events for every refused login, token, admin action and upload, and seven rules mapped to MITRE ATT&CK, checked in a drill.', es: 'Detección en Yamesi: eventos de seguridad por cada login, token, acción de administrador y archivo rechazados, y siete reglas mapeadas a MITRE ATT&CK, comprobadas en un simulacro.' },
    { en: 'A risk register with 12 risks rated before and after controls, and an identity and access review of 10 identities, people and machines.', es: 'Un registro de 12 riesgos calificados antes y después de los controles, y una revisión de identidades y accesos de 10 identidades, personas y máquinas.' },
  ],
  steps: [
    {
      label: { en: 'Recon', es: 'Reconocimiento' },
      title: { en: 'The quick start handed out the signing key', es: 'La guía de inicio entregaba la llave de firma' },
      body: {
        en: 'Both apps told users to copy .env.example and then change the values. The example JWT secret is 41 characters long, so it passed the only check, a minimum of 32. CI made exactly that copy, so every CI run signed tokens with a published key.',
        es: 'Ambas apps decían copiar .env.example y luego cambiar los valores. El secreto JWT de ejemplo tiene 41 caracteres, así que pasaba la única validación, un mínimo de 32. El CI hacía exactamente esa copia, así que cada ejecución firmaba tokens con una llave publicada.',
      },
      evidence: '# .env.example, public in both repositories\nJWT_SECRET=replace-with-output-of-openssl-rand-hex-32\n\n# the only check on it\nJWT_SECRET: z.string().min(32)\n\n# README quick start, and what CI ran\ncp .env.example .env  # then change the values',
      href: `${SECURITY_REPO}/blob/main/findings/ESC-01-placeholder-jwt-secret.md`,
    },
    {
      label: { en: 'Exploit', es: 'Explotación' },
      title: { en: 'An admin token for a user that does not exist', es: 'Un token de administrador para un usuario que no existe' },
      body: {
        en: 'I signed an HS256 token with role ADMIN and a random user id, using the published secret. The API trusts the role inside a valid token without looking the user up, so it answered with every store and its balance. The same token against a stack with a random secret got 401.',
        es: 'Firmé un token HS256 con rol ADMIN y un id de usuario inventado, usando el secreto publicado. La API confía en el rol de un token válido sin buscar al usuario, así que respondió con todas las tiendas y su saldo. El mismo token contra un stack con secreto aleatorio recibió 401.',
      },
      evidence: '$ JWT_SECRET=replace-with-output-of-openssl-rand-hex-32 docker compose up -d --wait backend\n# HS256 token, role ADMIN, sub = a user id that does not exist, signed with the placeholder\nforged ADMIN token, GET /pos -> 200 [{"id":"53e1…","name":"Tienda Centro","balance":98000,"active":true,…}]\n\n# same token against the stack started with a random secret\nforged ADMIN token, GET /pos -> 401 {"error":{"code":"UNAUTHORIZED","message":"Invalid or expired token"}}',
      href: `${SECURITY_REPO}/blob/main/findings/ESC-01-placeholder-jwt-secret.md#evidence-2026-11-02-nekobet`,
    },
    {
      label: { en: 'Impact and score', es: 'Impacto y puntaje' },
      title: { en: 'Critical, 9.1, after an independent review', es: 'Crítico, 9.1, tras una revisión independiente' },
      body: {
        en: 'Full administrator access: credit any store in NekoBet; read margins, the audit trail and invoices, and edit the catalog in Yamesi. I first scored it 7.4 with high attack complexity, because it needs a deployment that kept the example value. A review questioned that, and section 2.3.3 of the CVSS 3.1 User Guide sides with it: a documented, reasonable configuration is scored as present. With it, the attack is one HMAC computation.',
        es: 'Acceso total de administrador: acreditar cualquier tienda en NekoBet; leer márgenes, auditoría y facturas, y editar el catálogo en Yamesi. Primero lo califiqué 7.4 con complejidad alta, porque requiere una instalación que conserve el valor de ejemplo. Una revisión lo cuestionó, y la sección 2.3.3 de la guía de usuario de CVSS 3.1 le da la razón: una configuración documentada y razonable se califica como presente. Con ella, el ataque es un solo cálculo HMAC.',
      },
      evidence: 'CVSS 3.1  AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:N  = 9.1 Critical\nCWE-1188  Initialization of a Resource with an Insecure Default\nOWASP     A05:2021 Security Misconfiguration',
      href: `${SECURITY_REPO}/blob/main/findings/ESC-01-placeholder-jwt-secret.md#scoring`,
    },
    {
      label: { en: 'Fix', es: 'Corrección' },
      title: { en: 'Refuse the published secret, generate a real one', es: 'Rechazar el secreto publicado y generar uno real' },
      body: {
        en: 'The configuration now refuses any secret that starts with replace-with, at startup and in every environment. make .env creates the file with a fresh openssl rand -hex 32 for each placeholder, every other target depends on it, and CI runs it instead of the copy.',
        es: 'La configuración ahora rechaza cualquier secreto que empiece por replace-with, al arrancar y en todos los entornos. make .env crea el archivo con un openssl rand -hex 32 nuevo para cada valor de ejemplo, los demás comandos dependen de él y el CI lo usa en lugar de la copia.',
      },
      evidence: '$ docker compose run --rm --no-deps -e JWT_SECRET=replace-with-output-of-openssl-rand-hex-32 backend\nInvalid configuration: JWT_SECRET: replace the .env.example placeholder: openssl rand -hex 32, or delete .env and run make .env   (exit 1)',
      href: `${repo('yamesi')}/blob/main/backend/src/config.ts`,
    },
    {
      label: { en: 'Regression test', es: 'Prueba de regresión' },
      title: { en: 'The attack runs again on every push', es: 'El ataque vuelve a correr en cada push' },
      body: {
        en: 'Two attacks guard the fix in both apps’ CI and every Monday: the API must refuse to start with the placeholder, and a token signed with it must get 401. A change that reopens the hole fails before merge. These are lines from the drill run on 13 November 2026.',
        es: 'Dos ataques protegen la corrección en el CI de ambas apps y cada lunes: la API debe negarse a arrancar con el valor de ejemplo, y un token firmado con él debe recibir 401. Un cambio que reabra el hueco falla antes del merge. Estas líneas son del simulacro del 13 de noviembre de 2026.',
      },
      evidence: '✔ refuses to start with the placeholder JWT secret of .env.example (ESC-01)\n✔ refuses an admin token signed with the placeholder secret of .env.example (ESC-01)',
      href: `${SECURITY_REPO}/blob/main/attacks/yamesi.test.mjs`,
    },
    {
      label: { en: 'Detection', es: 'Detección' },
      title: { en: 'The next attempt raises an alert', es: 'El siguiente intento dispara una alerta' },
      body: {
        en: 'A fix stops the attack but tells no one. Yamesi now writes a security event when it refuses a token. The client still gets the same 401 for a forged and an expired token, while the log records which one it was. Rule DET-04 raises a high alert on the first forged signature.',
        es: 'Una corrección detiene el ataque pero no le avisa a nadie. Yamesi ahora escribe un evento de seguridad cuando rechaza un token. El cliente sigue recibiendo el mismo 401 para un token falsificado y uno vencido, mientras el registro guarda cuál fue. La regla DET-04 dispara una alerta alta con la primera firma falsificada.',
      },
      evidence: '{"log":"security","time":"2026-11-13T19:37:26.664Z","event":"auth.token_rejected","ip":"172.18.0.1","method":"GET","path":"/api/reports/margins","reason":"bad_signature"}\n\nHIGH   DET-04  Forged or tampered access token\n       ip 172.18.0.1 · 3 events · 2026-11-13T19:37:26.660Z → 2026-11-13T19:37:26.668Z\n       ATT&CK T1606 Forge Web Credentials · watches ESC-01',
      href: DRILL_LOG,
    },
    {
      label: { en: 'Residual risk', es: 'Riesgo residual' },
      title: { en: 'What is still open, and what closes it', es: 'Qué sigue abierto y qué lo cierra' },
      body: {
        en: 'A secret that leaked some other way would still sign tokens that verify, and no rule can tell those from real ones. That is why the fix prevents instead of detecting, and why the risk register keeps it as the one High residual risk, R-01. What would reduce it, not built yet: secrets kept in a secrets manager encrypted with KMS and rotated, and a user lookup on each request, which would refuse a token for a user that does not exist, like the one in the exploit.',
        es: 'Un secreto filtrado por otra vía seguiría firmando tokens válidos, y ninguna regla puede distinguirlos de los reales. Por eso la corrección previene en lugar de detectar, y por eso el registro de riesgos lo mantiene como el único riesgo residual alto, R-01. Lo que lo reduciría, aún sin construir: guardar los secretos en un gestor de secretos cifrado con KMS y rotarlos, y buscar al usuario en cada petición, lo que rechazaría un token de un usuario que no existe, como el del exploit.',
      },
      href: `${SECURITY_REPO}/blob/main/RISK_REGISTER.md`,
    },
  ] satisfies CaseStep[],
  rules: [
    { id: 'DET-01', detects: { en: 'Password guessing on one account', es: 'Adivinar la contraseña de una cuenta' }, when: { en: '5 failed or locked logins, one account and address, 15 min', es: '5 logins fallidos o bloqueados, una cuenta y dirección, 15 min' }, reference: 'T1110.001', watches: 'ESC-11', severity: 'medium' },
    { id: 'DET-02', detects: { en: 'Password spraying', es: 'Password spraying' }, when: { en: 'Failures on 5 accounts from one address, 15 min', es: 'Fallos en 5 cuentas desde una dirección, 15 min' }, reference: 'T1110.003', watches: '—', severity: 'high' },
    { id: 'DET-03', detects: { en: 'A guess that worked', es: 'Una contraseña adivinada' }, when: { en: 'A login accepted after 3 failures on that account', es: 'Un login aceptado tras 3 fallos en esa cuenta' }, reference: 'T1110', watches: 'ESC-11', severity: 'high' },
    { id: 'DET-04', detects: { en: 'Forged or tampered token', es: 'Token falsificado o alterado' }, when: { en: 'One bad signature, no signature or another algorithm', es: 'Una firma inválida, sin firma u otro algoritmo' }, reference: 'T1606', watches: 'ESC-01', severity: 'high' },
    { id: 'DET-05', detects: { en: 'Role probing', es: 'Sondeo de roles' }, when: { en: '3 refused admin actions by one user, 10 min', es: '3 acciones de administrador rechazadas a un usuario, 10 min' }, reference: 'OWASP API5:2023', watches: 'ESC-05', severity: 'medium' },
    { id: 'DET-06', detects: { en: 'Disguised upload', es: 'Archivo disfrazado' }, when: { en: 'One photo whose content is not an image', es: 'Una foto cuyo contenido no es una imagen' }, reference: 'CWE-434 · T1505.003', watches: 'ESC-06', severity: 'medium' },
    { id: 'DET-07', detects: { en: 'Sweep of private routes', es: 'Barrido de rutas privadas' }, when: { en: '6 private routes without a token from one address, 5 min', es: '6 rutas privadas sin token desde una dirección, 5 min' }, reference: 'T1595.003', watches: '—', severity: 'low' },
  ] satisfies DetectionRule[],
  drill: [
    { attack: { en: '8 private routes without a token', es: '8 rutas privadas sin token' }, answer: '401 × 8', alert: 'DET-07' },
    { attack: { en: '“alg: none”, a role changed after signing, the published secret (ESC-01)', es: '“alg: none”, un rol cambiado después de firmar, el secreto publicado (ESC-01)' }, answer: '401 × 3', alert: 'DET-04' },
    { attack: { en: '5 wrong passwords, then the right one', es: '5 contraseñas erradas y luego la correcta' }, answer: '401 × 5, 429', alert: 'DET-01' },
    { attack: { en: 'A seller on 7 admin actions', es: 'Un vendedor en 7 acciones de administrador' }, answer: '403 × 7', alert: 'DET-05' },
    { attack: { en: 'PHP, SVG, PDF and a JPEG-prefixed HTML file as a photo (ESC-06)', es: 'PHP, SVG, PDF y un HTML con cabecera JPEG como foto (ESC-06)' }, answer: '400 × 4', alert: 'DET-06' },
    { attack: { en: 'One password on 5 accounts, once each: the lockout never trips', es: 'Una contraseña en 5 cuentas, una vez cada una: el bloqueo nunca se activa' }, answer: '401 × 5', alert: 'DET-02' },
    { attack: { en: '3 wrong passwords, then the right one', es: '3 contraseñas erradas y luego la correcta' }, answer: '401 × 3, 200', alert: 'DET-03' },
    { attack: { en: 'A photo of 2 MiB + 1 byte', es: 'Una foto de 2 MiB + 1 byte' }, answer: '413', alert: '—' },
    { attack: { en: 'A phone photo with GPS (ESC-04): stored without it', es: 'Una foto de celular con GPS (ESC-04): se guarda sin él' }, answer: '200', alert: '—' },
  ],
  drillNote: {
    en: 'The 13 Yamesi attacks of the penetration test, plus two login attacks the lockout does not stop, against the full stack on 13 November 2026. 40 security events, 7 alerts: 3 high, 3 medium, 1 low. Each attack a rule covers raised that rule’s alert. The oversized photo and the GPS photo raise none on purpose: anyone can pick a photo that is too big, and the GPS photo is a legitimate upload whose coordinates the API strips.',
    es: 'Los 13 ataques del pentest contra Yamesi, más dos ataques de login que el bloqueo no detiene, contra el stack completo el 13 de noviembre de 2026. 40 eventos de seguridad y 7 alertas: 3 altas, 3 medias y 1 baja. Cada ataque que cubre una regla disparó la alerta de esa regla. La foto demasiado grande y la foto con GPS no disparan ninguna a propósito: cualquiera puede elegir una foto muy pesada, y la foto con GPS es una carga legítima a la que la API le quita las coordenadas.',
  },
  identityLink: {
    en: 'The identity review had found that logins, failures and lockouts were not recorded anywhere (gap 4). The security events close that gap for Yamesi; NekoBet still has it.',
    es: 'La revisión de identidades había encontrado que los logins, los fallos y los bloqueos no quedaban registrados en ningún lado (brecha 4). Los eventos de seguridad cierran esa brecha en Yamesi; NekoBet todavía la tiene.',
  },
  findings: [
    { id: 'ESC-01', title: { en: 'The JWT secret published in .env.example was accepted, so anyone could sign an admin token', es: 'Se aceptaba el secreto JWT publicado en .env.example, así que cualquiera podía firmar un token de administrador' }, target: 'NekoBet, Yamesi', severity: 'critical', rating: 'CVSS 9.1', file: 'ESC-01-placeholder-jwt-secret' },
    { id: 'ESC-02', title: { en: 'A captured partner sale replayed under a new Idempotency-Key was charged again', es: 'Una venta capturada de un integrador, repetida con otra Idempotency-Key, se cobraba de nuevo' }, target: 'NekoBet', severity: 'medium', rating: 'CVSS 5.9', file: 'ESC-02-hmac-replay-new-idempotency-key' },
    { id: 'ESC-03', title: { en: 'The cluster published the app, Grafana and Prometheus to the local network', es: 'El clúster publicaba la app, Grafana y Prometheus a la red local' }, target: 'OpsCircuit', severity: 'medium', rating: 'CVSS 5.4', file: 'ESC-03-kind-ports-on-all-interfaces' },
    { id: 'ESC-04', title: { en: 'Uploaded photos kept their EXIF metadata, GPS included', es: 'Las fotos subidas conservaban sus metadatos EXIF, incluido el GPS' }, target: 'Yamesi', severity: 'medium', rating: 'CVSS 4.3', file: 'ESC-04-uploaded-photos-keep-gps' },
    { id: 'ESC-05', title: { en: 'Sellers received the costs behind the admin-only margin report', es: 'Los vendedores recibían los costos detrás del reporte de márgenes, solo para administradores' }, target: 'Yamesi', severity: 'medium', rating: 'CVSS 4.3', file: 'ESC-05-sellers-receive-costs' },
    { id: 'ESC-06', title: { en: 'A file that only started like a JPEG was accepted as a photo', es: 'Un archivo que solo empezaba como un JPEG se aceptaba como foto' }, target: 'Yamesi', severity: 'info', rating: '—', file: 'ESC-06-jpeg-prefixed-html-accepted' },
    { id: 'ESC-07', title: { en: 'Runtime images shipped with 64 fixable critical and high CVEs', es: 'Las imágenes de ejecución traían 64 CVE críticas y altas con corrección disponible' }, target: 'NekoBet, Yamesi', severity: 'high', rating: 'Trivy', file: 'ESC-07-vulnerable-base-images' },
    { id: 'ESC-08', title: { en: 'The published demo signing secrets were accepted in production mode', es: 'Los secretos de firma de demostración publicados se aceptaban en modo producción' }, target: 'NekoBet', severity: 'high', rating: 'CVSS 8.2', file: 'ESC-08-demo-hmac-secrets-outside-demo' },
    { id: 'ESC-09', title: { en: 'The Docker Compose demos listened on every network interface', es: 'Las demos de Docker Compose escuchaban en todas las interfaces de red' }, target: 'NekoBet, Yamesi', severity: 'medium', rating: 'CVSS 5.4', file: 'ESC-09-compose-ports-on-all-interfaces' },
    { id: 'ESC-10', title: { en: 'A catalog photo in the public repository carried exact GPS coordinates', es: 'Una foto del catálogo en el repositorio público tenía coordenadas GPS exactas' }, target: 'Yamesi', severity: 'medium', rating: 'CVSS 5.3', file: 'ESC-10-gps-in-published-photo' },
    { id: 'ESC-11', title: { en: 'Logins could be guessed without limit', es: 'Se podían adivinar contraseñas sin límite' }, target: 'NekoBet, Yamesi', severity: 'medium', rating: 'CVSS 4.8', file: 'ESC-11-no-login-throttling' },
    { id: 'ESC-12', title: { en: 'Missing security headers, and nginx announced its version', es: 'Faltaban cabeceras de seguridad y nginx anunciaba su versión' }, target: 'NekoBet, Yamesi', severity: 'medium', rating: 'OWASP ZAP', file: 'ESC-12-missing-security-headers' },
  ] satisfies Finding[],
  severity: {
    critical: { en: 'Critical', es: 'Crítica' },
    high: { en: 'High', es: 'Alta' },
    medium: { en: 'Medium', es: 'Media' },
    low: { en: 'Low', es: 'Baja' },
    info: { en: 'Informational', es: 'Informativa' },
  },
  method: [
    { area: { en: 'Configuration', es: 'Configuración' }, ref: 'WSTG-CONF', tried: { en: 'Published secrets, network exposure, headers, image CVEs', es: 'Secretos publicados, exposición de red, cabeceras, CVE en imágenes' }, found: 'ESC-01, 03, 07, 08, 09, 12' },
    { area: { en: 'Authentication', es: 'Autenticación' }, ref: 'WSTG-ATHN', tried: { en: 'No token, “alg: none”, a changed role, a forged token, lockout', es: 'Sin token, “alg: none”, rol cambiado, token falsificado, bloqueo' }, found: 'ESC-01, 11' },
    { area: { en: 'Authorization', es: 'Autorización' }, ref: 'WSTG-ATHZ', tried: { en: 'Cashier and seller on admin routes; another store’s sales (IDOR); an injected store id', es: 'Cajero y vendedor en rutas de administrador; ventas de otra tienda (IDOR); un id de tienda inyectado' }, found: 'ESC-05' },
    { area: { en: 'Business logic', es: 'Lógica de negocio' }, ref: 'WSTG-BUSL', tried: { en: 'Tampered HMAC body, old and future timestamps, replays, casino callback replay', es: 'Cuerpo HMAC alterado, timestamps viejos y futuros, repeticiones, repetición de callbacks del casino' }, found: 'ESC-02' },
    { area: { en: 'File upload', es: 'Carga de archivos' }, ref: 'WSTG-BUSL-08/09', tried: { en: 'Files disguised as images, a JPEG-prefixed HTML file, an oversize file, a phone photo with GPS', es: 'Archivos disfrazados de imagen, un HTML con cabecera JPEG, un archivo muy grande, una foto de celular con GPS' }, found: 'ESC-04, 06' },
    { area: { en: 'Information leakage', es: 'Fuga de información' }, ref: 'WSTG-INFO-02', tried: { en: 'Server banner, image metadata', es: 'Banner del servidor, metadatos de imágenes' }, found: 'ESC-04, 10, 12' },
    { area: { en: 'Injection', es: 'Inyección' }, ref: 'Code review', tried: { en: 'Every SQL statement', es: 'Cada sentencia SQL' }, found: '—' },
  ],
  heldUp: [
    { en: 'Every private route without a token: 401 in both apps.', es: 'Toda ruta privada sin token: 401 en ambas apps.' },
    { en: 'A token with “alg: none”, or a real one with its role changed: 401, because the algorithm is pinned and the signature covers the claims.', es: 'Un token con “alg: none”, o uno real con el rol cambiado: 401, porque el algoritmo está fijado y la firma cubre los datos.' },
    { en: 'A cashier reading another store’s sale, or naming another store in a request body: 404 and 400; the store always comes from the token.', es: 'Un cajero leyendo la venta de otra tienda, o nombrando otra tienda en el cuerpo de la petición: 404 y 400; la tienda siempre sale del token.' },
    { en: 'A partner request with its body changed, or 301 seconds old: 401.', es: 'Una petición de integrador con el cuerpo cambiado, o con 301 segundos de antigüedad: 401.' },
    { en: 'A casino wallet debit replayed with the same transaction id: applied once.', es: 'Un débito de la billetera del casino repetido con el mismo id de transacción: se aplica una vez.' },
    { en: 'SQL injection: every statement takes its values as parameters.', es: 'Inyección SQL: cada sentencia recibe sus valores como parámetros.' },
  ],
  risk: {
    en: '12 risks rated by likelihood and impact, before and after controls. Residual: 1 High, a signing secret published or guessed; 5 Medium, among them tokens that cannot be revoked and passwords without MFA; 6 Low. Each one has a treatment: accept, reduce or monitor.',
    es: '12 riesgos calificados por probabilidad e impacto, antes y después de los controles. Residual: 1 alto, un secreto de firma publicado o adivinado; 5 medios, entre ellos tokens que no se pueden revocar y contraseñas sin MFA; 6 bajos. Cada uno tiene un tratamiento: aceptar, reducir o vigilar.',
  },
  identity: {
    en: '10 identities, people and machines: users, partners, the casino provider, the storage client, Prometheus, Alertmanager, CI jobs, the image signer, cluster admission and lab operators. For each one, how it proves who it is, what it may do and where its secret lives, with 5 recommendations.',
    es: '10 identidades, personas y máquinas: usuarios, integradores, el proveedor del casino, el cliente de almacenamiento, Prometheus, Alertmanager, los jobs de CI, el firmante de imágenes, la admisión del clúster y los operadores del laboratorio. Para cada una, cómo demuestra quién es, qué puede hacer y dónde vive su secreto, con 5 recomendaciones.',
  },
  limitations: [
    { en: 'The targets are three systems I wrote, tested on my machine with synthetic data: no production system and no third party.', es: 'Los objetivos son tres sistemas que escribí, probados en mi equipo con datos ficticios: ningún sistema de producción ni de terceros.' },
    { en: 'Out of scope: denial of service, an active ZAP scan, a manual XSS review, TLS and the AWS Terraform, which was never deployed.', es: 'Fuera de alcance: denegación de servicio, un escaneo activo con ZAP, una revisión manual de XSS, TLS y el Terraform de AWS, que nunca se desplegó.' },
    { en: 'Detection covers Yamesi only. The rules run on demand over the container log; nothing pages anyone in real time.', es: 'La detección cubre solo Yamesi. Las reglas corren a demanda sobre el log del contenedor; nada avisa a nadie en tiempo real.' },
    { en: 'Slow attacks under the thresholds, or spread over many addresses, pass unseen, and so does a token signed with the real secret.', es: 'Los ataques lentos bajo los umbrales, o repartidos en muchas direcciones, pasan sin verse, y también un token firmado con el secreto real.' },
  ],
  run: '# NekoBet on :8081 and Yamesi on :8083, each in its own terminal\ncd nekobet && make .env && make up\ncd yamesi && make .env && make up\n\n# the 38 attacks of the penetration test\ncd applied-cybersecurity && make attack\n\n# two more login attacks, then the detection rules over Yamesi’s log\ncd yamesi && node scripts/detection-drill.mjs && make detect',
  labels: {
    onThisPage: { en: 'On this page', es: 'En esta página' },
    realCase: { en: 'A real case, start to finish: ESC-01', es: 'Un caso real, de principio a fin: ESC-01' },
    realCaseNote: {
      en: 'The most severe finding, from the first clue to the alert it raises today. Every code block is quoted from the finding or from the drill log.',
      es: 'El hallazgo más grave, desde la primera pista hasta la alerta que dispara hoy. Cada bloque de código está citado del hallazgo o del registro del simulacro.',
    },
    step: { en: 'Step', es: 'Paso' },
    detection: { en: 'Detection', es: 'Detección' },
    rules: { en: 'The seven rules', es: 'Las siete reglas' },
    drill: { en: 'Drill: the pentest’s attacks against the rules', es: 'Simulacro: los ataques del pentest contra las reglas' },
    findings: { en: 'All 12 findings', es: 'Los 12 hallazgos' },
    method: { en: 'How the test was run', es: 'Cómo se hizo la prueba' },
    methodNote: {
      en: 'Gray-box, on 1 and 2 November 2026: the source code, the demo accounts and the partner key were available, as a client would hand them over. Test categories follow the OWASP Web Security Testing Guide v4.2; findings map to CWE and the OWASP Top 10. Tools: attack scripts on Node.js, Trivy, OWASP ZAP, curl, psql and headless Chrome.',
      es: 'Caja gris, el 1 y 2 de noviembre de 2026: el código fuente, las cuentas de demostración y la llave del integrador estaban disponibles, como los entregaría un cliente. Las categorías siguen la OWASP Web Security Testing Guide v4.2; los hallazgos se mapean a CWE y al OWASP Top 10. Herramientas: scripts de ataque en Node.js, Trivy, OWASP ZAP, curl, psql y Chrome sin interfaz.',
    },
    heldUp: { en: 'What held up', es: 'Lo que resistió' },
    riskIdentity: { en: 'Risk and identity', es: 'Riesgo e identidad' },
    riskRegister: { en: 'Risk register', es: 'Registro de riesgos' },
    identityReview: { en: 'Identity and access review', es: 'Revisión de identidades y accesos' },
    detectionGuide: { en: 'Detection guide', es: 'Guía de detección' },
    drillLog: { en: 'Drill log', es: 'Registro del simulacro' },
    rule: { en: 'Rule', es: 'Regla' },
    detects: { en: 'Detects', es: 'Detecta' },
    firesWhen: { en: 'Fires when', es: 'Se dispara con' },
    reference: { en: 'Reference', es: 'Referencia' },
    watches: { en: 'Watches', es: 'Vigila' },
    severity: { en: 'Severity', es: 'Severidad' },
    attack: { en: 'Attack', es: 'Ataque' },
    answer: { en: 'API answer', es: 'Respuesta de la API' },
    alert: { en: 'Alert', es: 'Alerta' },
    finding: { en: 'Finding', es: 'Hallazgo' },
    target: { en: 'Target', es: 'Objetivo' },
    ratedWith: { en: 'Rated with', es: 'Calificado con' },
    area: { en: 'Area', es: 'Área' },
    tried: { en: 'What was tried', es: 'Qué se intentó' },
    found: { en: 'Found', es: 'Encontrado' },
    noneHeld: { en: 'none: held', es: 'ninguno: resistió' },
  },
  links: {
    repo: SECURITY_REPO,
    findings: `${SECURITY_REPO}#findings`,
    methodology: `${SECURITY_REPO}/blob/main/METHODOLOGY.md`,
    risk: `${SECURITY_REPO}/blob/main/RISK_REGISTER.md`,
    identity: `${SECURITY_REPO}/blob/main/IDENTITY_REVIEW.md`,
    detection: DETECTION_DOC,
    drill: DRILL_LOG,
    finding: (file: string) => `${SECURITY_REPO}/blob/main/findings/${file}.md`,
  },
};
