export const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Analytics", href: "#analytics" },
  { label: "Learning", href: "#learning" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const impactStats = [
  { label: "Core Projects", value: "4", note: "Web, AI, desktop, and Android direction" },
  { label: "Users Supported", value: "100+", note: "Learning Management System architecture" },
  { label: "Efficiency Gain", value: "25%", note: "AI-based system performance insights" },
  { label: "Academic Start", value: "2023", note: "B.Tech CSE with Big Data Analytics specialization" },
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["C++", "Java", "JavaScript", "Kotlin"],
  },
  {
    title: "Web Technologies",
    items: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "REST APIs"],
  },
  {
    title: "Android Development",
    items: ["Kotlin", "Android Studio", "Jetpack Compose (Learning)", "XML Layouts", "REST API Integration"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Docker", "Hadoop", "Ubuntu"],
  },
  {
    title: "Concepts",
    items: ["DSA", "Problem Solving", "OOP", "Responsive Design", "Microservices Architecture", "NoSQL"],
  },
  {
    title: "Data & Big Data",
    items: ["Big Data Analytics", "Business Intelligence (Cognos)", "Planning Analytics", "Data Analysis", "DBMS", "Python"],
  },
];

export const projects = [
  {
    title: "Learning Management System",
    timeline: "June 2025 - July 2025",
    summary:
      "Developed a full-stack Learning Management System using MERN stack with features like authentication, course management, and online exams. Built with guidance and continuously improving my understanding of backend architecture and APIs.",
    metrics: ["100+ users supported", "Role-based workflows", "REST API-driven modules"],
    tech: ["MongoDB", "Express", "React", "Node", "Tailwind CSS"],
    link: "https://github.com/niteshdwivedi/UpSkillX-LMS",
    status: "Live project experience",
    caseStudy: {
      challenge: "Create a practical academic platform that combines frontend usability with backend logic and secure access.",
      result: "Delivered a responsive MERN application with authentication, exams, and course management during training while strengthening API and backend fundamentals.",
      growth: "This project gave me practical exposure to full-stack development, but I present it as a learning journey rather than expert-level experience.",
    },
  },
  {
    title: "AI-Powered OS Performance Analyzer",
    timeline: "Feb 2024 - April 2024",
    summary:
      "Built a Python-based system performance analyzer that tracks resource usage, applies predictive thinking, and helps identify optimization opportunities.",
    metrics: ["25% efficiency gain", "40% less manual analysis", "20+ processes monitored live"],
    tech: ["Python", "Tkinter", "psutil", "Matplotlib", "NumPy", "ML"],
    link: "https://github.com/niteshdwivedi/AI-Performance-Analyzer-O",
    status: "AI + analytics project",
    caseStudy: {
      challenge: "Reduce manual system analysis by combining monitoring signals, charts, and prediction logic in one tool.",
      result: "Created a desktop application that improved visibility into system performance and supported faster optimization decisions.",
      growth: "It strengthened my interest in data-driven systems and practical AI use cases instead of AI for show.",
    },
  },
  {
    title: "Rock-Paper-Scissors Game",
    timeline: "Sep 2023 - Dec 2023",
    summary:
      "Designed a modular Python GUI game with OOP structure, dynamic visuals, and event-driven interaction to strengthen software fundamentals.",
    metrics: ["Event-driven design", "Reusable components", "Enhanced user interaction"],
    tech: ["Python", "Tkinter", "Pillow", "OOP"],
    link: "https://github.com/niteshdwivedi/Rock-Paper-Scissor-Game",
    status: "Foundation-building project",
    caseStudy: {
      challenge: "Build an interactive desktop application while practicing clean object-oriented design.",
      result: "Created a polished game interface with reusable logic and better understanding of desktop UI flow.",
      growth: "This project improved my confidence with OOP, UI structure, and turning small ideas into complete applications.",
    },
  },
  {
    title: "Android Productivity App (Kotlin)",
    timeline: "Currently Learning",
    summary:
      "Developing an Android app using Kotlin with a focus on performance, UI optimization, and real-world usability while learning modern Android practices.",
    metrics: ["Coming soon", "Kotlin learning in progress", "Mobile architecture exploration"],
    tech: ["Kotlin", "Android Studio", "XML", "REST APIs"],
    link: "#contact",
    status: "Coming soon",
    caseStudy: {
      challenge: "Transition from web-first development into Android and understand mobile architecture properly.",
      result: "Current focus is building strong fundamentals in Kotlin, layouts, app structure, and production-friendly thinking.",
      growth: "This direction reflects my learning mindset and my goal to become stronger across both web and mobile products.",
    },
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
    note: "Started in 2023 with focus on big data analytics, software fundamentals, and practical technical growth.",
  },
  {
    title: "Full Stack Development Training",
    place: "LPU",
    note: "One-month training in React and Node where I applied concepts in a role-based LMS project and improved my development fundamentals.",
  },
  {
    title: "Career Direction",
    place: "India",
    note: "Targeting internships and roles aligned with big data analytics, software development growth, and Android learning.",
  },
];

export const currentlyLearning = [
  {
    title: "MERN Stack",
    note: "Deepening my understanding after training by practicing backend architecture, authentication flows, APIs, and project structure.",
  },
  {
    title: "Backend APIs",
    note: "Learning how to design cleaner routes, controllers, database operations, and maintainable server-side logic.",
  },
  {
    title: "Android Development (Kotlin)",
    note: "Exploring Kotlin, Android Studio, XML layouts, and modern Android development practices through hands-on building.",
  },
  {
    title: "Data Analysis",
    note: "Improving my ability to work with data, dashboards, structured insights, and analytical storytelling.",
  },
  {
    title: "Big Data Tools",
    note: "Expanding my knowledge of Hadoop concepts, large-scale data systems, and analytics-focused infrastructure thinking.",
  },
];

export const educationItems = [
  {
    title: "B.Tech in Computer Science and Engineering",
    subtitle: "Specialization in Big Data Analytics | Lovely Professional University",
    note: "Started in 2023 with academic focus on big data analytics, data systems, software fundamentals, and practical project building.",
  },
  {
    title: "Coursework and Training",
    subtitle: "Hands-on academic and technical learning",
    note: "Cloud Application Development, Fundamentals of Android, Programming in Java, Programming in Python, DBMS, Internet Programming Laboratory, DSA Analytics for All, Big Data Essentials, and Business Intelligence (Cognos).",
  },
  {
    title: "Technical Exposure",
    subtitle: "Self-driven and guided learning journey",
    note: "Learning microservices architecture, NoSQL and MongoDB, planning analytics, Android development, and web application design through projects and continuous practice.",
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
  "Strong learning mindset with honesty about where I am and clear momentum in where I am going.",
  "Hands-on project experience across Python, analytics, MERN training exposure, and now Android development with Kotlin.",
  "Quick learner who improves through building real projects instead of only studying theory.",
  "Focused on real-world problem solving with clean interfaces, useful systems, and measurable outcomes.",
];
