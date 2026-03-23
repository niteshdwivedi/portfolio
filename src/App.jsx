import { Suspense, lazy, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Award,
  BrainCircuit,
  BriefcaseBusiness,
  ChevronRight,
  Code2,
  Database,
  Download,
  ExternalLink,
  GraduationCap,
  Github,
  Linkedin,
  Mail,
  Menu,
  MoonStar,
  Phone,
  Smartphone,
  Sparkles,
  SunMedium,
  Wrench,
  X,
} from "lucide-react";
import profileImage from "../profile2.jpeg";
import {
  aiCards,
  certificates,
  currentlyLearning,
  educationItems,
  impactStats,
  navItems,
  projects,
  skillGroups,
  timeline,
  whyMe,
} from "./data";
import { FeatureCard, Pill, SoftCard } from "./components";

const AnalyticsSection = lazy(() => import("./AnalyticsSection"));
const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } };

function App() {
  const [theme, setTheme] = useState("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("portfolio-theme");
    if (stored) setTheme(stored);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("light", theme === "light");
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const styles = useMemo(
    () => ({
      muted: theme === "dark" ? "text-slate-300" : "text-slate-700",
      subtle: theme === "dark" ? "text-slate-400" : "text-slate-500",
      border: theme === "dark" ? "border-white/10" : "border-slate-200",
      pill: theme === "dark" ? "border-white/10 bg-white/5" : "border-slate-200 bg-white/80",
      cardBg: theme === "dark" ? "bg-white/5" : "bg-white/80",
      solidBtn: theme === "dark" ? "bg-primary-400 text-slate-950 hover:bg-primary-300" : "bg-slate-950 text-white hover:bg-slate-800",
    }),
    [theme],
  );

  return (
    <div className="relative overflow-x-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[760px] bg-grid bg-[size:42px_42px] opacity-30" />

      <header className="section-shell sticky top-0 z-50 pt-5">
        <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full glass-panel px-5 py-3">
          <a href="#top" className="font-display text-sm font-semibold tracking-[0.28em] text-primary-300">
            NITESH / DATA / BUILD
          </a>
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className={`text-sm font-medium transition hover:text-primary-300 ${styles.muted}`}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm ${styles.pill}`}
            >
              {theme === "dark" ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
              {theme === "dark" ? "Light" : "Dark"} mode
            </button>
            <a
              href="https://drive.google.com/file/d/1MWuWrWciLfCcNv-7273zl6TMrlrP6yp1/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-primary-300"
            >
              Resume
              <Download className="h-4 w-4" />
            </a>
          </div>
          <button type="button" className={`rounded-full border p-2 lg:hidden ${styles.pill}`} onClick={() => setMenuOpen((v) => !v)}>
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className="mt-3 rounded-3xl glass-panel p-5 lg:hidden">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className={`text-sm font-medium ${styles.muted}`} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </a>
              ))}
              <button type="button" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className={`rounded-full border px-4 py-2 text-sm ${styles.pill}`}>
                Toggle theme
              </button>
            </div>
          </div>
        )}
      </header>

      <main id="top" className="pb-20">
        <section className="section-shell pt-10 md:pt-16">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.7 }}>
              <div className="section-kicker">
                <Sparkles className="h-4 w-4" />
                Honest Builder • Learning Fast • Shipping Real Projects
              </div>
              <h1 className="max-w-4xl font-display text-5xl font-semibold leading-tight md:text-7xl">
                Nitesh Dwivedi
              </h1>
              <p className={`mt-6 max-w-2xl text-lg leading-8 ${styles.muted}`}>
                <span className="font-semibold text-primary-300">Turning ideas into real-world applications across Web, Data, and Android.</span>
              </p>
              <p className={`mt-4 max-w-2xl text-lg leading-8 ${styles.muted}`}>
                <span className="font-semibold text-primary-300">B.Tech CSE (Big Data Analytics) | Aspiring Software Developer | Android (Kotlin)</span>
              </p>
              <p className={`mt-4 max-w-2xl text-lg leading-8 ${styles.muted}`}>
                Focused on full-stack development, data-driven systems, and continuously improving through real projects.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="#projects" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-primary-300">
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#contact" className={`inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold ${styles.pill}`}>
                  Contact
                  <BriefcaseBusiness className="h-4 w-4" />
                </a>
                <a
                  href="https://drive.google.com/file/d/1MWuWrWciLfCcNv-7273zl6TMrlrP6yp1/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold ${styles.pill}`}
                >
                  Resume
                  <Download className="h-4 w-4" />
                </a>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {impactStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    transition={{ duration: 0.65, delay: 0.12 + index * 0.08 }}
                    className="rounded-3xl glass-panel p-5"
                  >
                    <div className="text-3xl font-extrabold text-primary-300">{stat.value}</div>
                    <div className="mt-2 text-sm font-semibold">{stat.label}</div>
                    <div className={`mt-1 text-sm ${styles.subtle}`}>{stat.note}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative mx-auto max-w-xl">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary-400/30 via-coral/25 to-gold/25 blur-3xl" />
              <SoftCard className="relative overflow-hidden p-6">
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-xs uppercase tracking-[0.3em] text-primary-300">
                  <span>Live Talent Snapshot</span>
                  <span>India</span>
                </div>
                <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900/70">
                  <img src={profileImage} alt="Nitesh Dwivedi portrait" className="h-[420px] w-full object-cover object-top" />
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <FeatureCard title="Big Data Focus" text="Big data analytics, BI exposure, data analysis, and system-level thinking shaped by my specialization." theme={theme} />
                  <FeatureCard title="Learning Mindset" text="I believe in learning by building, staying honest about my level, and improving through project work and continuous practice." theme={theme} />
                </div>
              </SoftCard>
            </motion.div>
          </div>
        </section>

        <section id="about" className="section-shell mt-24">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <SoftCard className="p-8 md:p-10">
              <div className="section-kicker">About Me</div>
              <h2 className="section-title">Real projects, honest growth, and consistent skill building.</h2>
              <p className={`mt-6 text-base leading-8 ${styles.muted}`}>
                I am a B.Tech CSE student specializing in Big Data Analytics, starting in 2023. I have built real-world projects like a Learning Management System using the MERN stack during my training and an AI-based system performance analyzer using Python.
              </p>
              <p className={`mt-4 text-base leading-8 ${styles.muted}`}>
                My main academic direction is big data analytics. Alongside that, I am currently strengthening my understanding of web development step by step and exploring Android development using Kotlin. I believe in learning by building and continuously improving my skills through hands-on projects.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <FeatureCard title="Education" text="B.Tech CSE (Big Data Analytics), Lovely Professional University" theme={theme} />
                <FeatureCard title="What I Bring" text="Big data specialization, hands-on project experience, and steady growth across analytics, web development, and Android learning." theme={theme} />
              </div>
            </SoftCard>

            <SoftCard className="p-8 md:p-10">
              <div className="section-kicker">Career Narrative</div>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div key={item.title} className="relative pl-8">
                    <div className="absolute left-0 top-1 h-4 w-4 rounded-full bg-primary-300" />
                    {index < timeline.length - 1 && <div className="absolute left-[7px] top-6 h-[calc(100%+0.5rem)] w-px bg-primary-400/30" />}
                    <div className="text-lg font-semibold">{item.title}</div>
                    <div className="mt-1 text-sm uppercase tracking-[0.24em] text-primary-300">{item.place}</div>
                    <p className={`mt-2 text-sm leading-7 ${styles.muted}`}>{item.note}</p>
                  </div>
                ))}
              </div>
            </SoftCard>
          </div>
        </section>

        <section id="projects" className="section-shell mt-24">
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="section-kicker">Project Case Studies</div>
              <h2 className="section-title">Projects that show execution, learning, and ownership.</h2>
            </div>
            <p className={`max-w-2xl text-base leading-7 ${styles.muted}`}>
              Instead of listing tools only, these case studies show what I built, what problem I solved, and what I learned while building it.
            </p>
          </div>
          <div className="grid gap-6 xl:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="rounded-[2rem] glass-panel p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm uppercase tracking-[0.26em] text-primary-300">{project.timeline}</div>
                    <h3 className="mt-3 text-2xl font-bold">{project.title}</h3>
                    <div className={`mt-2 text-xs font-semibold uppercase tracking-[0.24em] ${styles.subtle}`}>{project.status}</div>
                  </div>
                  <a href={project.link} target="_blank" rel="noreferrer" className={`rounded-full border p-3 ${styles.pill}`}>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
                <p className={`mt-5 text-sm leading-7 ${styles.muted}`}>{project.summary}</p>
                <div className={`mt-6 rounded-3xl border p-5 ${styles.border} ${styles.cardBg}`}>
                  <div className="text-sm font-semibold text-primary-300">Case Study Snapshot</div>
                  <div className="mt-4 space-y-4 text-sm leading-7">
                    <div>
                      <div className="font-semibold">Challenge</div>
                      <p className={styles.muted}>{project.caseStudy.challenge}</p>
                    </div>
                    <div>
                      <div className="font-semibold">Result</div>
                      <p className={styles.muted}>{project.caseStudy.result}</p>
                    </div>
                    <div>
                      <div className="font-semibold">Learning</div>
                      <p className={styles.muted}>{project.caseStudy.growth}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  {project.metrics.map((metric) => (
                    <div key={metric} className="flex items-center gap-3 text-sm">
                      <ChevronRight className="h-4 w-4 text-primary-300" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Pill key={tech} className={styles.pill}>
                      {tech}
                    </Pill>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <Suspense fallback={<AnalyticsFallback styles={styles} />}>
          <AnalyticsSection theme={theme} styles={styles} />
        </Suspense>

        <section className="section-shell mt-24">
          <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
            <SoftCard id="skills" className="p-8 md:p-10">
              <div className="section-kicker">Skills</div>
              <h2 className="section-title text-4xl">A skill set across web engineering, Android learning, and big data foundations.</h2>
              <div className="mt-8 grid gap-5">
                {skillGroups.map((group) => (
                  <div key={group.title} className={`rounded-3xl border p-5 ${styles.border} ${styles.cardBg}`}>
                    <div className="flex items-center gap-3 text-lg font-semibold">
                      <SkillIcon title={group.title} />
                      {group.title}
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <Pill key={item} className={styles.pill}>
                          {item}
                        </Pill>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </SoftCard>

            <div className="grid gap-6">
              <SoftCard className="p-8 md:p-10">
                <div className="section-kicker">GitHub Presence</div>
                <h2 className="section-title text-4xl">Open-source credibility and contribution activity.</h2>
                <p className={`mt-4 max-w-2xl text-base leading-7 ${styles.muted}`}>
                  GitHub visuals give recruiters a quick way to validate project activity, coding consistency, and my habit of learning through building.
                </p>
                <div className="mt-8 grid gap-5">
                  <div className={`overflow-hidden rounded-[1.5rem] border ${styles.border} bg-white`}>
                    <img src="https://github-readme-stats.vercel.app/api?username=niteshdwivedi&show_icons=true&theme=transparent&hide_border=true&title_color=22d3ee&text_color=475569&icon_color=ff7a59" alt="GitHub stats for Nitesh Dwivedi" className="w-full" />
                  </div>
                  <div className={`overflow-hidden rounded-[1.5rem] border ${styles.border} bg-white p-2`}>
                    <img src="https://ghchart.rshah.org/22d3ee/niteshdwivedi" alt="GitHub contribution graph for Nitesh Dwivedi" className="w-full rounded-2xl" />
                  </div>
                </div>
              </SoftCard>

              <SoftCard className="p-8 md:p-10">
                <div className="section-kicker">AI / ML</div>
                <h2 className="section-title text-4xl">Practical AI and analytics, not just buzzwords.</h2>
                <p className={`mt-4 text-base leading-7 ${styles.muted}`}>
                  My AI work is grounded in practical outcomes. I focus on monitoring, prediction, analytics, and tools that reduce manual work.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {aiCards.map((text, index) => (
                    <FeatureCard key={index} title={`AI Capability 0${index + 1}`} text={text} theme={theme} />
                  ))}
                </div>
              </SoftCard>
            </div>
          </div>
        </section>

        <section id="learning" className="section-shell mt-24">
          <SoftCard className="p-8 md:p-10">
            <div className="section-kicker">Currently Learning</div>
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <h2 className="section-title text-4xl">Learning in public and improving through hands-on work.</h2>
                <p className={`mt-4 max-w-2xl text-base leading-7 ${styles.muted}`}>
                  I want recruiters to see both my current strengths and my direction. This section reflects the areas I am actively improving right now.
                </p>
              </div>
              <div className="grid gap-4">
                {currentlyLearning.map((item) => (
                  <div key={item.title} className={`rounded-3xl border p-5 ${styles.border} ${styles.cardBg}`}>
                    <div className="text-base font-semibold">{item.title}</div>
                    <p className={`mt-2 text-sm leading-7 ${styles.muted}`}>{item.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </SoftCard>
        </section>

        <section className="section-shell mt-24">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <SoftCard className="p-8 md:p-10">
              <div className="section-kicker">Certifications</div>
              <h2 className="section-title text-4xl">Validated learning across data, BI, and Python.</h2>
              <div className="mt-8 space-y-4">
                {certificates.map((certificate) => (
                  <a key={certificate.title} href={certificate.link} target="_blank" rel="noreferrer" className={`flex items-start gap-4 rounded-3xl border p-4 transition hover:border-primary-400/40 ${styles.border} ${styles.cardBg}`}>
                    <div className="rounded-2xl bg-primary-400/15 p-3 text-primary-300">
                      <Award className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-base font-semibold">{certificate.title}</div>
                      <div className={`mt-1 text-sm ${styles.subtle}`}>{certificate.issuer} | {certificate.date}</div>
                    </div>
                    <ExternalLink className="ml-auto h-4 w-4 shrink-0 text-primary-300" />
                  </a>
                ))}
              </div>
            </SoftCard>

            <SoftCard className="p-8 md:p-10">
              <div className="section-kicker">Why Me</div>
              <h2 className="section-title text-4xl">Why hire me?</h2>
              <div className="mt-8 grid gap-4">
                {whyMe.map((text, index) => (
                  <FeatureCard key={index} title={`Strength 0${index + 1}`} text={text} theme={theme} />
                ))}
              </div>
            </SoftCard>
          </div>
        </section>

        <section id="education" className="section-shell mt-24">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <SoftCard className="p-8 md:p-10">
              <div className="section-kicker">Education</div>
              <h2 className="section-title text-4xl">Academic foundation aligned with software and data systems.</h2>
              <div className="mt-8 grid gap-4">
                {educationItems.map((item) => (
                  <div key={item.title} className={`rounded-3xl border p-5 ${styles.border} ${styles.cardBg}`}>
                    <div className="flex items-center gap-3">
                      <GraduationCap className="h-5 w-5 text-primary-300" />
                      <div className="text-base font-semibold">{item.title}</div>
                    </div>
                    <div className="mt-2 text-sm font-medium text-primary-300">{item.subtitle}</div>
                    <p className={`mt-3 text-sm leading-7 ${styles.muted}`}>{item.note}</p>
                  </div>
                ))}
              </div>
            </SoftCard>

            <SoftCard className="p-8 md:p-10">
              <div className="section-kicker">Standout Direction</div>
              <h2 className="section-title text-4xl">Full stack delivery with Android and big data depth.</h2>
              <p className={`mt-4 text-base leading-7 ${styles.muted}`}>
                My positioning is strongest where software engineering, analytics, and learning agility meet. I bring real project execution today and visible growth into backend systems, Android, and data-heavy products.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <FeatureCard title="Full Stack + Android" text="I already build web applications and I am actively expanding into Android using Kotlin." theme={theme} />
                <FeatureCard title="Big Data Mindset" text="My academic specialization gives me a strong foundation in analytics, BI, and large-scale data thinking." theme={theme} />
                <FeatureCard title="Systems Thinking" text="I am learning APIs, microservices, NoSQL, and architecture with a focus on practical understanding." theme={theme} />
                <FeatureCard title="Recruiter Signal" text="This portfolio is designed to show both what I can build now and how fast I am improving." theme={theme} />
              </div>
            </SoftCard>
          </div>
        </section>

        <section id="contact" className="section-shell mt-24">
          <SoftCard className="overflow-hidden p-8 md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
              <div>
                <div className="section-kicker">Contact & Hire Me</div>
                <h2 className="section-title">Let's build data-rich products and intelligent systems together.</h2>
                <p className={`mt-5 max-w-2xl text-lg leading-8 ${styles.muted}`}>
                  I am looking for internships and early-career opportunities where I can contribute as a big data analytics student, web development learner, Android learner, or analytics-focused builder.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a href="mailto:niteshdwivedi942@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-primary-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-primary-300">
                    Email Me
                    <Mail className="h-4 w-4" />
                  </a>
                  <a href="https://www.linkedin.com/in/niteshdwivedi/" target="_blank" rel="noreferrer" className={`inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold ${styles.pill}`}>
                    LinkedIn
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="grid gap-4">
                <ContactCard icon={Mail} label="Email" value="niteshdwivedi942@gmail.com" href="mailto:niteshdwivedi942@gmail.com" theme={theme} />
                <ContactCard icon={Phone} label="Phone" value="+91 8707726234" href="tel:+918707726234" theme={theme} />
                <ContactCard icon={Linkedin} label="LinkedIn" value="linkedin.com/in/niteshdwivedi" href="https://www.linkedin.com/in/niteshdwivedi/" theme={theme} />
                <ContactCard icon={Github} label="GitHub" value="github.com/niteshdwivedi" href="https://github.com/niteshdwivedi" theme={theme} />
                <ContactCard icon={ExternalLink} label="Resume" value="Google Drive Resume" href="https://drive.google.com/file/d/1MWuWrWciLfCcNv-7273zl6TMrlrP6yp1/view?usp=sharing" theme={theme} />
              </div>
            </div>
          </SoftCard>
        </section>
      </main>

      {showTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-400 text-slate-950 shadow-glow transition hover:bg-primary-300"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}

function ContactCard({ icon: Icon, label, value, href, theme }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className={`flex items-center gap-4 rounded-3xl border p-5 transition hover:border-primary-400/40 ${theme === "dark" ? "border-white/10 bg-white/5" : "border-slate-200 bg-white/80"}`}
    >
      <div className="rounded-2xl bg-primary-400/15 p-3 text-primary-300">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className={theme === "dark" ? "text-xs uppercase tracking-[0.24em] text-slate-400" : "text-xs uppercase tracking-[0.24em] text-slate-500"}>{label}</div>
        <div className={theme === "dark" ? "mt-1 text-sm font-medium text-slate-200" : "mt-1 text-sm font-medium text-slate-700"}>{value}</div>
      </div>
    </a>
  );
}

export default App;

function SkillIcon({ title }) {
  const common = "h-5 w-5 text-primary-300";

  if (title === "Languages") return <Code2 className={common} />;
  if (title === "Web Technologies") return <Code2 className={common} />;
  if (title === "Android Development") return <Smartphone className={common} />;
  if (title === "Tools") return <Wrench className={common} />;
  if (title === "Concepts") return <BrainCircuit className={common} />;
  if (title === "Data & Big Data") return <Database className={common} />;

  return <Code2 className={common} />;
}

function AnalyticsFallback({ styles }) {
  return (
    <section id="analytics" className="section-shell mt-24">
      <SoftCard className="p-8 md:p-10">
        <div className="section-kicker">Data Analytics Dashboard</div>
        <h2 className="section-title">Loading interactive charts...</h2>
        <p className={`mt-4 max-w-3xl text-base leading-7 ${styles.muted}`}>
          The analytics module is loaded separately to keep the first paint fast while still delivering a rich dashboard experience.
        </p>
      </SoftCard>
    </section>
  );
}
