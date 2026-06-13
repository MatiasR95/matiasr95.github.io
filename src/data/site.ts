// Central content for the portfolio. Edit here to update the site.
// Confidentiality: name Assurant + the Global Automotive Data team; no internal data,
// systems, numbers, or client names.

export const site = {
  name: 'Matías Rossi',
  role: 'Data Warehouse & BI Analyst',
  url: 'https://matiasr95.github.io',
  email: 'matiasrossi95@outlook.com',
  phone: '+54 221 612 9258',
  location: 'La Plata, Argentina',
  socials: {
    linkedin: 'https://www.linkedin.com/in/matias-rossi-95-data-strength',
    instagram: 'https://www.instagram.com/matias_rossi',
    twitter: 'https://twitter.com/matiasrossi_95',
  },
  seo: {
    title: 'Matías Rossi — Data Warehouse & BI Analyst | SQL, Excel & AI Automation',
    description:
      'Data Warehouse Analyst at Assurant, on the Global Automotive Data team. I turn raw data into insight and efficiency, and use AI and automation to build workflows, apps, and data-backed solutions — with SQL, Excel, Power BI, and Tableau.',
  },
};

export const nav = [
  { label: 'About', href: '/#about' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Writing', href: '/#writing' },
  { label: 'Contact', href: '/#contact' },
];

export const highlights = [
  { value: 'SQL · Excel · AI', label: 'my core toolkit today' },
  { value: '5+ yrs', label: 'running a real business on its own data' },
  { value: '20+', label: 'data & BI certifications' },
  { value: 'AI-built', label: 'workflows, apps & data solutions' },
];

export const pillars = [
  {
    icon: 'lucide:database',
    title: 'Build the data layer',
    body: 'Dimensional models, ETL/ELT, and clean SQL that turn scattered sources into one trusted source of truth.',
  },
  {
    icon: 'lucide:bar-chart-3',
    title: 'Turn data into decisions',
    body: 'Excel, Power BI, and Tableau analysis that turns raw data into decisions, insight, and efficiency — not just charts.',
  },
  {
    icon: 'lucide:sparkles',
    title: 'Automate & build with AI',
    body: 'Spot where AI and automation can cut manual work, then build it — automated workflows and small apps that move the business forward.',
  },
];

// Competencies — how I work. (Mirrors what good digital/AI transformation work needs.)
export const strengths = [
  {
    icon: 'lucide:brain',
    title: 'Analytical thinking',
    body: 'I dig past the dashboard to the decision — the leading signal, the grain trap, the number that actually matters.',
  },
  {
    icon: 'lucide:rocket',
    title: 'Digital acumen',
    body: 'Comfortable across the modern data + AI stack, and quick to fold a new tool into how I work.',
  },
  {
    icon: 'lucide:compass',
    title: 'Curiosity & learning agility',
    body: 'A career-switcher who learns in public — I test the hype, keep what’s real, and ship it.',
  },
  {
    icon: 'lucide:users',
    title: 'Collaboration & communication',
    body: 'I bridge data and business, and I’ve taught dashboard storytelling to working professionals in two languages.',
  },
  {
    icon: 'lucide:repeat',
    title: 'Process improvement',
    body: 'I look for the manual, repetitive step and ask: can data or automation do this better?',
  },
];

export const experience = [
  {
    role: 'Associate Data Warehouse Analyst',
    company: 'Assurant',
    period: 'Jan 2026 – Present',
    place: 'Hybrid · La Plata, Argentina',
    body: 'Part of the Global Automotive Data team. I model, load, and quality-check the data business teams rely on — turning messy sources into trusted, decision-ready reporting, increasingly with AI-assisted SQL and automation.',
  },
  {
    role: 'Looker Studio Instructor',
    company: 'Datademia',
    period: 'Jun 2025 – Dec 2025',
    place: 'Remote',
    body: 'Taught dashboard storytelling to working professionals: calculated fields and KPIs, data blending, and connecting Looker Studio to Sheets and BigQuery — helping students turn raw data into clear, decision-ready visuals.',
  },
  {
    role: 'Founder & Director',
    company: 'Force (Fitness Center)',
    period: 'Dec 2020 – Present',
    place: 'La Plata, Argentina',
    body: 'Built a 120+ member business and ran it data-first: a lightweight pipeline for attendance, payments, and segmentation feeding Looker Studio dashboards for retention, revenue, and churn. Now largely automated by the systems I built — my first, and favorite, real-world BI project.',
  },
];

// Headline of his current daily stack — rendered prominently above the grouped stack.
export const coreToolkit = ['SQL', 'Excel', 'AI automation & app-building'];

export const skillGroups = [
  {
    title: 'Querying & analysis',
    items: ['SQL (daily driver)', 'Excel (advanced)', 'Statistics', 'DAX', 'Python'],
  },
  {
    title: 'AI & automation',
    items: [
      'Claude / LLMs for SQL',
      'Workflow automation',
      'App & tool building',
      'Data-backed business solutions',
    ],
  },
  {
    title: 'Data platforms & engineering',
    items: [
      'Microsoft SQL Server',
      'Databricks',
      'BigQuery',
      'Google Cloud',
      'ETL / ELT',
      'Dimensional modeling',
      'Data quality & governance',
    ],
  },
  {
    title: 'BI & visualization',
    items: ['Power BI', 'Tableau', 'Looker Studio', 'Google Sheets'],
  },
];

export const aiPoints = [
  {
    icon: 'lucide:terminal',
    title: 'Draft & review SQL faster',
    body: 'I use AI to scaffold queries and catch grain/join traps, then verify every result by hand. Speed on the boilerplate, judgment on the logic.',
  },
  {
    icon: 'lucide:workflow',
    title: 'Automate the repetitive',
    body: 'I build small AI-assisted tools and workflows that handle routine data work end to end, freeing time for the analysis that needs a human.',
  },
  {
    icon: 'lucide:app-window',
    title: 'Build data-backed solutions',
    body: 'When a need keeps recurring, I turn it into a lightweight app or business solution — supported by data, shipped fast, and genuinely useful.',
  },
];

export const certifications = [
  'Google Business Intelligence (2025)',
  'IBM Introduction to Data Engineering (2025)',
  'Google Cloud Data Analytics — in progress',
  'CSCS® — Certified Strength & Conditioning Specialist (NSCA)',
  '20+ professional certifications in data & BI',
];

export const education = [
  {
    school: 'Universidad Nacional de La Plata',
    detail: 'Profesorado, Salud y Educación Física (2013–2017)',
  },
  {
    school: 'Universidad de Lomas de Zamora',
    detail: 'Licenciatura, Alto Rendimiento Deportivo (2020–2021)',
  },
];
