export const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Analytics", href: "#analytics" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const impactStats = [
  { label: "Users Supported", value: "100+", note: "Role-based LMS architecture" },
  { label: "Efficiency Boost", value: "25%", note: "AI-guided system optimization" },
  { label: "Processes Monitored", value: "20+", note: "Live OS observability signals" },
  { label: "Certifications", value: "6+", note: "IBM and university-backed learning" },
];

export const skillGroups = [
  {
    title: "Development",
    items: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "REST APIs", "Git", "Docker"],
  },
  {
    title: "Data & BI",
    items: ["SQL", "Power BI", "Tableau", "Pandas", "NumPy", "IBM Cognos", "Data Analysis"],
  },
  {
    title: "Big Data & AI",
    items: ["Hadoop", "Data Processing", "Machine Learning Basics", "Text Analytics", "Python Automation"],
  },
  {
    title: "Core CS",
    items: ["DSA", "OOP", "DBMS", "Operating Systems", "Computer Networks", "Problem Solving"],
  },
];

export const projects = [
  {
    title: "Learning Management System",
    timeline: "June 2025 - July 2025",
    summary:
      "Built a full-stack academic platform with secure authentication, role-based access, course workflows, exams, and automated CGPA calculation.",
    metrics: ["100+ users supported", "REST API-driven modules", "Responsive, scalable UI"],
    tech: ["MongoDB", "Express", "React", "Node", "Tailwind CSS"],
    link: "https://github.com/niteshdwivedi/UpSkillX-LMS",
  },
  {
    title: "AI-Powered OS Performance Analyzer",
    timeline: "Feb 2024 - April 2024",
    summary:
      "Created an intelligent desktop analytics tool for real-time monitoring, prediction, and performance optimization.",
    metrics: ["25% efficiency gain", "40% less manual analysis", "20+ processes monitored live"],
    tech: ["Python", "Tkinter", "psutil", "Matplotlib", "NumPy", "ML"],
    link: "https://github.com/niteshdwivedi/AI-Performance-Analyzer-O",
  },
  {
    title: "Rock-Paper-Scissors Game",
    timeline: "Sep 2023 - Dec 2023",
    summary:
      "Designed a modular GUI game with strong OOP structure, dynamic visuals, and a clean interaction model.",
    metrics: ["Event-driven design", "Reusable components", "Enhanced user interaction"],
    tech: ["Python", "Tkinter", "Pillow", "OOP"],
    link: "https://github.com/niteshdwivedi/Rock-Paper-Scissor-Game",
  },
];

export const certificates = [
  ["IBM Big Data 101", "IBM Developer Skills Network", "February 3, 2025", "https://courses.lpu.skillsnetwork.site/certificates/66163dbe0b6241ea895c73a8ffbbb925"],
  ["Business Intelligence", "IBM CEP", "February 4, 2025", "https://courses.lpu.skillsnetwork.site/certificates/d5d1214cfe6447a39531feafe6b6e086"],
  ["Text Analytics 101", "CognitiveClass / IBM", "February 10, 2025", "https://courses.lpu.skillsnetwork.site/certificates/328f017a2f224622a8bbdc34d4df0f0d"],
  ["RDBMS", "IBM CEP", "March 27, 2025", "https://courses.lpu.skillsnetwork.site/certificates/661b59d975d2486cb0c40be5b0e42edc"],
  ["Introduction to Python", "IBM CEP", "March 27, 2025", "https://courses.lpu.skillsnetwork.site/certificates/0d27793105ab4ed2834dacf958c183c9"],
  ["Big Data Architecture", "IBM CEP", "March 27, 2025", "https://courses.lpu.skillsnetwork.site/certificates/0db44fd43deb4f6c97d24bb1c72cc160"],
].map(([title, issuer, date, link]) => ({ title, issuer, date, link }));

export const analyticsTrend = [
  { month: "Jan", performance: 58, pipeline: 28 },
  { month: "Feb", performance: 64, pipeline: 40 },
  { month: "Mar", performance: 72, pipeline: 48 },
  { month: "Apr", performance: 79, pipeline: 58 },
  { month: "May", performance: 86, pipeline: 68 },
  { month: "Jun", performance: 92, pipeline: 75 },
];

export const datasetInsights = [
  { name: "SQL", value: 28 },
  { name: "Dashboards", value: 24 },
  { name: "Web Apps", value: 30 },
  { name: "AI/ML", value: 18 },
];

export const pipelineFlow = [
  { stage: "Raw Data", score: 86 },
  { stage: "Cleaning", score: 92 },
  { stage: "Modeling", score: 79 },
  { stage: "Visualization", score: 95 },
  { stage: "Delivery", score: 88 },
];

export const timeline = [
  {
    title: "B.Tech CSE, Big Data Analytics",
    place: "Lovely Professional University",
    note: "CGPA 7.58 and a strong focus on software, analytics, and scalable system design.",
  },
  {
    title: "Full Stack Development Training",
    place: "LPU",
    note: "Applied React and Node skills directly in a role-based LMS project and modern UI workflows.",
  },
  {
    title: "Career Direction",
    place: "India",
    note: "Targeting internships and roles in software engineering, data engineering, analytics, and AI-enabled products.",
  },
];

export const spotlightCards = [
  {
    title: "Power BI / Tableau Dashboards",
    text: "Executive-facing dashboards for KPIs, trend analysis, anomalies, and decision support.",
  },
  {
    title: "SQL + Data Analysis",
    text: "Querying, cleaning, aggregation, and storytelling through structured data workflows.",
  },
  {
    title: "Hadoop Architecture Knowledge",
    text: "Foundation in distributed data systems, batch processing ideas, and scale-oriented thinking.",
  },
  {
    title: "Dataset Insight Stories",
    text: "Turning raw data into charts, insights, and recruiter-friendly proof of analytical depth.",
  },
];

export const aiCards = [
  "Applied ML to forecast resource usage and generate optimization guidance.",
  "Combined observability signals with charts to improve technical decision-making.",
  "Used automation to reduce repetitive manual performance analysis work.",
  "Expanding toward production-ready AI and intelligent data products.",
];

export const whyMe = [
  "Full stack execution from polished interfaces to APIs and databases.",
  "Data engineering mindset around pipelines, quality, processing, and scale.",
  "Projects framed with metrics and outcomes recruiters can evaluate quickly.",
  "Fast learner with visible growth across development, analytics, and AI.",
];
