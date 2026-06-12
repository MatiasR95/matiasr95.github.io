// Central content for the portfolio. Edit here to update the site.
// Confidentiality: no internal Assurant data, systems, numbers, or names.

export const site = {
  name: 'Matías Rossi',
  role: 'Data Warehouse & BI Analyst',
  url: 'https://matiasr95.github.io',
  email: 'matiasrossi95@outlook.com',
  phone: '+54 221 612 9258',
  location: 'La Plata, Argentina · works with the US team',
  socials: {
    linkedin: 'https://www.linkedin.com/in/matias-rossi-/',
    instagram: 'https://www.instagram.com/matias_rossi',
    twitter: 'https://twitter.com/matiasrossi_95',
  },
  seo: {
    title: 'Matías Rossi — Data Warehouse & BI Analyst | SQL, Power BI, AI-Augmented Analytics',
    description:
      'Data Warehouse Analyst at Assurant (Global Automotive). I turn messy business questions into trusted, decision-ready data with SQL, Power BI, Looker Studio, and AI. Based in Argentina, working with the US team.',
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
  { value: '5+ yrs', label: 'running a business on its own data' },
  { value: '20+', label: 'data & BI certifications' },
  { value: 'US + LATAM', label: 'auto-insurance analytics' },
  { value: 'AI-augmented', label: 'daily workflow' },
];

export const pillars = [
  {
    icon: 'lucide:database',
    title: 'Build the data layer',
    body: 'Dimensional models, ETL/ELT, and clean star schemas that turn scattered sources into one trusted source of truth.',
  },
  {
    icon: 'lucide:bar-chart-3',
    title: 'Turn data into decisions',
    body: 'Power BI, Tableau, and Looker Studio dashboards that answer the business question — not just plot the numbers.',
  },
  {
    icon: 'lucide:sparkles',
    title: 'Enhance the work with AI',
    body: 'AI-assisted SQL, documentation, and automation — so the repetitive work is fast and the thinking gets the time.',
  },
];

export const experience = [
  {
    role: 'Associate Data Warehouse Analyst',
    company: 'Assurant',
    period: 'Jan 2026 – Present',
    place: 'Hybrid · Argentina / US team',
    body: 'Support the Global Automotive team with the data behind the worldwide auto-insurance business, focused on the US and LATAM. Work across SQL Server and modern data platforms to model, load, and quality-check the data business teams rely on — bridging an Argentina seat with a US team day to day.',
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

export const skillGroups = [
  {
    title: 'Querying & languages',
    items: ['SQL (daily driver)', 'Python', 'DAX', 'Statistics'],
  },
  {
    title: 'Platforms & engineering',
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
    items: ['Power BI', 'Tableau', 'Looker Studio', 'Excel (advanced)', 'Google Sheets'],
  },
  {
    title: 'AI-augmented analytics',
    items: ['Claude / LLMs for SQL', 'Documentation', 'Workflow automation'],
  },
];

export const aiPoints = [
  {
    icon: 'lucide:terminal',
    title: 'Draft & review SQL faster',
    body: 'I use AI to scaffold queries and catch grain/join traps, then verify every result by hand. Speed on the boilerplate, judgment on the logic.',
  },
  {
    icon: 'lucide:file-text',
    title: 'Document the model',
    body: 'Turning tables, lineage, and definitions into clear docs is the kind of work AI accelerates beautifully — so the team isn’t guessing what a field means.',
  },
  {
    icon: 'lucide:workflow',
    title: 'Automate the repetitive',
    body: 'I build small AI-assisted tools that handle the routine, freeing time for the analysis that needs a human.',
  },
];

export const projects = [
  {
    featured: true,
    title: 'AI-assisted content engine',
    result:
      'Designed and built a content engine with Claude Code that drafts posts in my voice, renders on-brand visuals, runs a confidentiality check, and schedules everything automatically — a working example of pairing data discipline with AI automation.',
    tools: ['Claude Code', 'Python', 'Automation', 'Brand design system'],
  },
  {
    title: 'Gym retention & revenue dashboards',
    result:
      'Built the data pipeline and Looker Studio dashboards that run a 120+ member business: attendance, payments, retention, and churn — the project that taught me BI before I did it professionally.',
    tools: ['Looker Studio', 'Google Sheets / Cloud', 'Data modeling'],
  },
  {
    title: 'Auto-insurance analytics (Global Automotive)',
    result:
      'Day-to-day data warehousing and BI for a worldwide auto-insurance business across the US and LATAM: modeling policies and claims data, safeguarding data quality, and shaping it into trusted reporting for business teams.',
    tools: ['SQL', 'SQL Server', 'Dimensional modeling', 'BI'],
  },
  {
    title: 'Teaching dashboard storytelling',
    result:
      'Created and delivered Looker Studio lessons that helped working professionals turn raw data into clear, decision-ready dashboards.',
    tools: ['Looker Studio', 'BigQuery', 'Sheets'],
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
