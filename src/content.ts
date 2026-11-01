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
    en: 'Medellín, Colombia · Open to remote roles across LATAM and Europe, and to relocation',
    es: 'Medellín, Colombia · Disponible para trabajo remoto en LATAM y Europa, y para reubicación',
  },
  provenance: {
    en: 'Portfolio projects are independent reconstructions with synthetic data and no employer code, built with AI-assisted tooling and verified through tests and CI.',
    es: 'Los proyectos del portafolio son reconstrucciones independientes con datos ficticios y sin código de empleadores, construidos con herramientas asistidas por IA y verificados con pruebas y CI.',
  },
  notFound: { en: 'This page does not exist.', es: 'Esta página no existe.' },
  home: { en: 'Back to the home page', es: 'Volver al inicio' },
} satisfies Record<string, L>;

export const hero = {
  title: { en: 'Software Engineer — Full Stack, Cloud & DevOps', es: 'Ingeniero de software — Full Stack, Cloud y DevOps' },
  lead: {
    en: 'I build, deploy and operate full-stack applications, APIs and cloud infrastructure with TypeScript, Node.js, React and AWS.',
    es: 'Construyo, despliego y opero aplicaciones full stack, APIs e infraestructura cloud con TypeScript, Node.js, React y AWS.',
  },
  languages: { en: 'Spanish and Italian native · English C1', es: 'Español e italiano nativos · Inglés C1' },
};

export const capabilities = [
  { title: { en: 'Software', es: 'Software' }, items: 'TypeScript · Node.js · NestJS · React · Angular · SQL · PostgreSQL · REST APIs' },
  { title: { en: 'Cloud & delivery', es: 'Cloud y entrega' }, items: 'AWS · Docker · Kubernetes · Terraform · GitHub Actions · GitLab CI/CD · Linux' },
  {
    title: { en: 'Working knowledge (portfolio)', es: 'Conocimiento práctico (portafolio)' },
    items: 'n8n · Prometheus · Grafana · Argo CD · Alertmanager',
  },
];

export const experience = [
  {
    role: 'Full Stack Developer',
    company: 'Inversiones Zuliani S.A.S. (Yamesi)',
    when: { en: 'Medellín · May 2020 – Present', es: 'Medellín · may. 2020 – actualidad' },
    note: {
      en: "Built and maintain the store's accounting and invoicing system, deployed with Docker on AWS EC2 and S3. It replaced spreadsheets and paper and issues about 15 invoices a day.",
      es: 'Construí y mantengo el sistema contable y de facturación de la joyería, desplegado con Docker en AWS EC2 y S3. Reemplazó Excel y el papel y emite unas 15 facturas al día.',
    },
  },
  {
    role: 'Junior DevOps Engineer',
    company: 'The Big Group',
    when: { en: 'Sydney · Oct 2024 – Mar 2026 · part-time', es: 'Sídney · oct. 2024 – mar. 2026 · tiempo parcial' },
    note: {
      en: 'CI/CD pipelines, Docker and Kubernetes environments, monitoring and incident investigation for AWS services, in an English-speaking team.',
      es: 'Pipelines de CI/CD, entornos Docker y Kubernetes, monitoreo e investigación de incidentes de servicios en AWS, en un equipo en inglés.',
    },
  },
  {
    role: 'Software Developer (Full Stack / Cloud)',
    company: 'Código Digital Codi S.A.S.',
    when: { en: 'Medellín · Oct 2021 – Feb 2023', es: 'Medellín · oct. 2021 – feb. 2023' },
    note: {
      en: 'Transactional portal and B2B API for a point-of-sale network; responsible for AWS EC2, VPC, VPN and EKS with Terraform, and GitLab CI/CD deployments.',
      es: 'Portal transaccional y API B2B para una red de puntos de venta; a cargo de AWS EC2, VPC, VPN y EKS con Terraform, y de los despliegues con GitLab CI/CD.',
    },
  },
  {
    role: 'Software Developer',
    company: 'LaCompay Colombia',
    when: { en: 'Medellín · Nov 2020 – Apr 2021', es: 'Medellín · nov. 2020 – abr. 2021' },
    note: {
      en: 'Development and technical verification of features for a C++ payment gateway.',
      es: 'Desarrollo y verificación técnica de funcionalidades de una pasarela de pagos en C++.',
    },
  },
];

export const education = {
  en: 'Systems Engineer, Universidad de Medellín · Advanced Diploma of IT (Cyber Security), Sydney',
  es: 'Ingeniero de Sistemas, Universidad de Medellín · Advanced Diploma of IT (Cyber Security), Sídney',
};

export type DiagramView = 'context' | 'containers' | 'flow' | 'deployment';

export interface Project {
  slug: 'yamesi' | 'opscircuit' | 'atomictrail';
  name: string;
  subtitle: L;
  repo: string;
  accent: string;
  cover: string;
  oneLiner: L;
  stack: string[];
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
      en: 'Point of sale, Colombian sales invoice, gold traceability and a daily closing that locks the day, for a jewelry store.',
      es: 'Punto de venta, factura de venta colombiana, trazabilidad del oro y un cierre diario que bloquea el día, para una joyería.',
    },
    stack: ['NestJS', 'React', 'PostgreSQL', 'S3', 'PDFKit', 'Docker'],
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
    ],
    scanDecisions: [
      { en: 'Gap-free numbering with a counter inside the sale transaction', es: 'Numeración sin huecos con un contador dentro de la transacción de venta' },
      { en: 'Idempotent invoices: every field is part of the request hash', es: 'Facturas idempotentes: todos los campos entran en el hash de la solicitud' },
      { en: 'CUFE computed with the DIAN formula, checked against its official example', es: 'CUFE con la fórmula de la DIAN, comprobado contra su ejemplo oficial' },
    ],
    proof: [
      { en: '51 automated tests, 2 against a real S3-compatible server', es: '51 pruebas automatizadas, 2 contra un servidor compatible con S3' },
      { en: '8 concurrent invoices get numbers 1 to 8, never a gap', es: '8 facturas simultáneas reciben los números 1 a 8, sin huecos' },
      { en: 'A scripted business day (make demo) from an empty database', es: 'Un día de negocio guionizado (make demo) desde una base vacía' },
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
      { check: { en: 'Unit and integration tests', es: 'Pruebas unitarias y de integración' }, result: { en: '51 passing in CI', es: '51 aprobadas en CI' }, href: `${repo('yamesi')}/actions` },
      { check: { en: 'CUFE against the official DIAN example', es: 'CUFE contra el ejemplo oficial de la DIAN' }, result: { en: 'Identical hash', es: 'Hash idéntico' }, href: `${repo('yamesi')}/blob/main/backend/test/unit/colombian-invoice.spec.ts` },
      { check: { en: 'Concurrent sales of one piece', es: 'Ventas simultáneas de una pieza' }, result: { en: 'One sale, one PIECE_NOT_AVAILABLE', es: 'Una venta y un PIECE_NOT_AVAILABLE' }, href: `${repo('yamesi')}/blob/main/backend/test/e2e/invoices.e2e-spec.ts` },
      { check: { en: 'Static analysis and secrets', es: 'Análisis estático y secretos' }, result: { en: 'CodeQL and Gitleaks green', es: 'CodeQL y Gitleaks en verde' }, href: `${repo('yamesi')}/actions` },
    ],
    screens: [
      { src: '/media/yamesi-sell.jpg', alt: { en: 'Point of sale with the invoice panel', es: 'Punto de venta con el panel de factura' }, width: 1600, height: 1111 },
      { src: '/media/yamesi-invoice.jpg', alt: { en: 'Sales invoice PDF with CUFE and QR', es: 'Factura de venta en PDF con CUFE y QR' }, width: 1236, height: 1600 },
      { src: '/media/yamesi-closing.jpg', alt: { en: 'Daily cash closing, day locked', es: 'Cierre de caja con el día bloqueado' }, width: 1600, height: 1111 },
      { src: '/media/yamesi-reports.jpg', alt: { en: 'Reports: gold, margin and audit trail', es: 'Reportes: oro, margen y auditoría' }, width: 1600, height: 1111 },
    ],
    limitations: [
      {
        en: 'The invoice is never transmitted to the DIAN: the legally valid document is a signed UBL 2.1 XML validated through an authorized provider, which is not built here.',
        es: 'La factura no se transmite a la DIAN: el documento con validez legal es un XML UBL 2.1 firmado y validado mediante un proveedor autorizado, que no está construido aquí.',
      },
      { en: 'Single store; a closed day cannot be reopened.', es: 'Una sola tienda; un día cerrado no se puede reabrir.' },
      { en: 'No lifecycle rule yet for orphaned uploads.', es: 'Aún no hay regla de ciclo de vida para archivos huérfanos.' },
    ],
    localVsProd: {
      en: 'This repository is an independent rebuild with synthetic data and runs locally with Docker Compose. The business’s real system is professional work in a separate codebase, deployed with Docker on AWS EC2 and S3.',
      es: 'Este repositorio es una reconstrucción independiente con datos ficticios y corre en local con Docker Compose. El sistema real del negocio es trabajo profesional en otro código, desplegado con Docker en AWS EC2 y S3.',
    },
    run: 'git clone https://github.com/vzuliani97/yamesi && cd yamesi\ncp .env.example .env\nmake demo   # seeds the store and runs one business day\nmake test   # 51 tests in containers',
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
    cover: '/media/opscircuit-n8n-cover.jpg',
    oneLiner: {
      en: 'Kubernetes with GitOps, observability and outage drills, plus a self-hosted n8n workflow that turns alerts into deduplicated incidents.',
      es: 'Kubernetes con GitOps, observabilidad y simulacros de caídas, más un flujo n8n autoalojado que convierte alertas en incidentes sin duplicados.',
    },
    stack: ['Kubernetes', 'Argo CD', 'Prometheus', 'Grafana', 'Terraform', 'n8n'],
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
      { check: { en: 'Terraform for AWS', es: 'Terraform para AWS' }, result: { en: 'Validated in CI, never applied', es: 'Validado en CI, nunca aplicado' }, href: `${repo('opscircuit')}/tree/main/terraform/aws` },
    ],
    screens: [
      { src: '/media/opscircuit-n8n.jpg', alt: { en: 'n8n incident intake workflow', es: 'Flujo de incidentes en n8n' }, width: 1600, height: 425 },
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
    slug: 'atomictrail',
    name: 'AtomicTrail',
    subtitle: { en: 'Transaction Reliability Lab', es: 'Laboratorio de confiabilidad transaccional' },
    repo: repo('atomictrail'),
    accent: '#2b59c3',
    cover: '/media/atomictrail-betting-cover.jpg',
    oneLiner: {
      en: 'Prepaid top-ups, live sports betting and a casino wallet on one balance that stays correct when requests race, retry or fail halfway.',
      es: 'Recargas prepagadas, apuestas deportivas en vivo y billetera de casino sobre un saldo que se mantiene correcto cuando las solicitudes compiten, se reintentan o fallan a mitad.',
    },
    stack: ['NestJS', 'PostgreSQL', 'React', 'SSE', 'HMAC', 'Docker'],
    roleFit: {
      en: 'Backend and real-time transactional design: idempotency, concurrency control, an auditable ledger, live odds over SSE and signed provider integrations.',
      es: 'Backend y diseño transaccional en tiempo real: idempotencia, control de concurrencia, un libro contable auditable, cuotas en vivo por SSE e integraciones firmadas con proveedores.',
    },
    problem: {
      en: 'Stores hold a prepaid balance and sell top-ups from a portal or a partner system. Two sales can spend the same balance, a retry can charge twice, and a carrier can time out with the outcome unknown.',
      es: 'Las tiendas tienen saldo prepagado y venden recargas desde un portal o el sistema de un aliado. Dos ventas pueden gastar el mismo saldo, un reintento puede cobrar dos veces y el operador puede no responder.',
    },
    built: [
      { en: 'Check and debit in one conditional UPDATE, plus CHECK (balance >= 0).', es: 'Verificación y débito en un solo UPDATE condicional, más CHECK (balance >= 0).' },
      { en: 'Mandatory Idempotency-Key with a per-key advisory lock and a request hash.', es: 'Idempotency-Key obligatoria con un bloqueo por llave y un hash de la solicitud.' },
      { en: 'Append-only ledger, automatic refunds at most once, and an HMAC-SHA256 partner API with an IP allowlist.', es: 'Libro contable de solo inserción, reembolsos automáticos a lo sumo una vez y una API de aliados con HMAC-SHA256 y lista blanca de IP.' },
      { en: 'Live sports betting over Server-Sent Events: bets refused when the odds moved, settlement paid once. A seamless-wallet casino whose provider callbacks are idempotent, with rollback tombstones.', es: 'Apuestas deportivas en vivo por Server-Sent Events: apuestas rechazadas si la cuota cambió y liquidación pagada una sola vez. Un casino con billetera seamless cuyos callbacks son idempotentes, con registro de reversos anticipados.' },
    ],
    scanDecisions: [
      { en: 'Call the provider outside the transaction', es: 'Llamar al proveedor fuera de la transacción' },
      { en: 'PENDING on timeout, never a blind refund', es: 'PENDING ante timeout, nunca un reembolso a ciegas' },
      { en: 'A bet carries the odds the cashier saw; a moved price is refused', es: 'La apuesta lleva la cuota que vio el cajero; si cambió, se rechaza' },
    ],
    proof: [
      { en: '48 automated tests; multi-arch images published after CI', es: '48 pruebas automatizadas; imágenes multiarquitectura publicadas tras el CI' },
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
      { check: { en: 'Unit and integration tests', es: 'Pruebas unitarias y de integración' }, result: { en: '48 passing in CI', es: '48 aprobadas en CI' }, href: `${repo('atomictrail')}/actions` },
      { check: { en: 'Betting and casino', es: 'Apuestas y casino' }, result: { en: 'Odds-changed refusal, settlement once, wallet replays', es: 'Rechazo por cambio de cuota, liquidación única, reintentos de billetera' }, href: `${repo('atomictrail')}/blob/main/backend/test/e2e/betting.e2e-spec.ts` },
      { check: { en: 'Concurrency experiment', es: 'Experimento de concurrencia' }, result: { en: 'Naive 70 approved, conditional UPDATE 50 (local, not a benchmark)', es: 'Versión ingenua 70, UPDATE condicional 50 (local, no es un benchmark)' }, href: `${repo('atomictrail')}/blob/main/docs/concurrency-experiment.md` },
      { check: { en: 'Static analysis, secrets, dependencies', es: 'Análisis estático, secretos y dependencias' }, result: { en: 'CodeQL, Gitleaks and npm audit green', es: 'CodeQL, Gitleaks y npm audit en verde' }, href: `${repo('atomictrail')}/actions` },
    ],
    screens: [
      { src: '/media/atomictrail-betting.jpg', alt: { en: 'Live betting board with moving odds and a bet slip', es: 'Tablero de apuestas en vivo con cuotas que se mueven y la boleta' }, width: 1600, height: 1111 },
      { src: '/media/atomictrail-casino.jpg', alt: { en: 'Casino wallet and the ledger with bets and payouts', es: 'Billetera del casino y el libro contable con apuestas y pagos' }, width: 1600, height: 1111 },
      { src: '/media/atomictrail-cashier.jpg', alt: { en: 'Cashier: balance, product picker and sales with a refunded rejection', es: 'Caja: saldo, productos y ventas con un rechazo reembolsado' }, width: 1600, height: 1111 },
      { src: '/media/atomictrail-admin.jpg', alt: { en: 'Admin: points of sale, credits and network sales', es: 'Administración: puntos de venta, créditos y ventas de la red' }, width: 1600, height: 1111 },
    ],
    limitations: [
      { en: 'Reconciliation of PENDING sales is not implemented yet.', es: 'La conciliación de ventas en PENDING aún no está implementada.' },
      { en: 'HMAC secrets are stored in plain text; production would use a secrets manager.', es: 'Los secretos HMAC se guardan en texto plano; en producción irían en un gestor de secretos.' },
      { en: 'Carrier, odds feed and game provider are simulated. Betting is a demonstration, not a licensed service (Colombia requires a Coljuegos license).', es: 'El operador, el feed de cuotas y el proveedor de juegos son simulados. Las apuestas son una demostración, no un servicio con licencia (en Colombia se requiere licencia de Coljuegos).' },
    ],
    localVsProd: {
      en: 'Runs locally with Docker Compose and on OpsCircuit’s kind cluster through Argo CD. The concurrency numbers come from a local, reproducible experiment, not from production traffic.',
      es: 'Corre en local con Docker Compose y en el clúster kind de OpsCircuit mediante Argo CD. Los números de concurrencia vienen de un experimento local y reproducible, no de tráfico de producción.',
    },
    run: 'git clone https://github.com/vzuliani97/atomictrail && cd atomictrail\ncp .env.example .env\nmake up     # http://localhost:8081\nmake test   # 48 tests',
    diagrams: {
      context: { title: { en: 'System context', es: 'Contexto' }, status: 'MIXED', note: { en: 'Cashiers, partners and a simulated carrier; reconciliation planned.', es: 'Cajeros, aliados y un operador simulado; conciliación planeada.' } },
      containers: { title: { en: 'Containers', es: 'Contenedores' }, status: 'CURRENT', note: { en: 'nginx, a NestJS API and PostgreSQL.', es: 'nginx, una API NestJS y PostgreSQL.' } },
      flow: { title: { en: 'Critical flow: a sale', es: 'Flujo crítico: una venta' }, status: 'CURRENT', note: { en: 'Two short transactions around one network call.', es: 'Dos transacciones cortas alrededor de una llamada de red.' } },
      deployment: { title: { en: 'Delivery', es: 'Entrega' }, status: 'CURRENT', note: { en: 'CI publishes images that Argo CD deploys in OpsCircuit.', es: 'El CI publica imágenes que Argo CD despliega en OpsCircuit.' } },
    },
  },
];
