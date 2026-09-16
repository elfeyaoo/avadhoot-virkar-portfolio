"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  Check,
  Database,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  X
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Insuresafe",
    category: "INSURANCE • DATA / APPLICATION",
    description:
      "An end-to-end insurance claim and policy management system supporting policy categories, recommendations, purchases, claim submission, identity verification and administrative review.",
    stack: ["Python", "Flask", "MongoDB", "JavaScript"],
    tags: ["Recommendation", "Affordability Logic", "Data Management"],
    detail:
      "Policy recommendation and affordability logic uses age, income, existing policies and budget constraints. MongoDB structures support users, policies, claims and verified claims.",
    link: "#contact"
  },
  {
    number: "02",
    title: "Movie Recommendation System",
    category: "DATA SCIENCE • RECOMMENDATION",
    description:
      "A content-based recommendation application that cleans and combines movie datasets and recommends five similar movies for a selected title.",
    stack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Streamlit"],
    tags: ["Content-Based", "Data Cleaning", "Similarity"],
    detail:
      "Worked with approximately 4,800–5,000 records, handling missing values, duplicates and unnecessary text. The interface displays descriptions, genres, cast, release information, keywords and recommendations.",
    link: "#contact"
  },
  {
    number: "03",
    title: "AQI Tracker",
    category: "DATA ANALYTICS • VISUALIZATION",
    description:
      "An AQI analysis and visualization application using pollutant measurements to determine AQI levels, visualize trends and provide precautionary guidance.",
    stack: ["Python", "Flask", "Pandas", "Matplotlib", "OpenWeather API"],
    tags: ["EDA", "Visualization", "API Integration"],
    detail:
      "Processes PM2.5 and PM10 measurements and uses bar charts, line graphs and scatter plots to explore pollutant levels and increasing or decreasing AQI trends.",
    link: "#contact"
  }
];

const skills = [
  ["Python", "Programming"],
  ["SQL", "Programming"],
  ["Java", "Programming"],
  ["Pandas", "Data Analysis"],
  ["NumPy", "Data Analysis"],
  ["Matplotlib", "Visualization"],
  ["Microsoft Excel", "Analytics"],
  ["Power BI", "Business Intelligence"],
  ["Excel Pivot Tables", "BI"],
  ["MySQL", "Database"],
  ["MongoDB", "Database"],
  ["Firebase", "Database"],
  ["Flask", "Backend"],
  ["REST APIs", "Backend"],
  ["OpenWeather API", "API"],
  ["Brevo API", "API"],
  ["OpenAI API", "API"],
  ["Scikit-learn", "Machine Learning"],
  ["Git / GitHub", "Tools"],
  ["n8n", "Automation"]
];

function Reveal({
  children,
  delay = 0,
  className = ""
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#home" onClick={closeMenu}>AV<span>.</span></a>

        <button className="menu-button" aria-label="Toggle navigation" onClick={() => setMenuOpen((v) => !v)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-cta" href="/resume.pdf" target="_blank" rel="noreferrer">
            Resume <ArrowUpRight size={15} />
          </a>
        </div>
      </nav>

      <section id="home" className="hero section">
        <div className="hero-grid" />
        <div className="orb orb-one" />
        <div className="orb orb-two" />

        <div className="hero-copy">
          <Reveal>
            <div className="eyebrow"><span className="status-dot" /> OPEN TO ENTRY-LEVEL OPPORTUNITIES</div>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="kicker">HELLO, I&apos;M</p>
            <h1>Avadhoot<br /><span>Virkar.</span></h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="hero-role">Data Analyst <span>•</span> BI Analyst <span>•</span> Data Analytics</p>
            <p className="hero-description">
              Data Science graduate with hands-on experience in Python-based data
              cleaning, exploratory analysis, SQL querying, database-backed
              applications and interactive dashboards.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="hero-actions">
              <a className="button primary" href="#projects">Explore my work <ArrowDown size={17} /></a>
              <a className="button secondary" href="#contact">Let&apos;s connect <ArrowUpRight size={17} /></a>
            </div>
          </Reveal>
        </div>

        <motion.div className="hero-visual" initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1 }}>
          <div className="data-card main-card">
            <div className="card-top"><span>ANALYTICS / INSIGHTS</span><BarChart3 size={18} /></div>
            <div className="chart">
              <span className="chart-line line-a" /><span className="chart-line line-b" /><span className="chart-line line-c" />
              <span className="chart-point p1" /><span className="chart-point p2" /><span className="chart-point p3" /><span className="chart-point p4" /><span className="chart-point p5" />
            </div>
            <div className="chart-labels"><span>DATA → INSIGHT</span><strong>ANALYZE</strong></div>
          </div>
          <motion.div className="floating-card card-ai" animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }}>
            <BrainCircuit size={21} /><span>APPLIED ML</span>
          </motion.div>
          <motion.div className="floating-card card-data" animate={{ y: [0, 9, 0] }} transition={{ duration: 4.5, repeat: Infinity }}>
            <Database size={20} /><span>SQL / DATA</span>
          </motion.div>
        </motion.div>

        <a className="scroll-hint" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
      </section>

      <section id="about" className="section about">
        <Reveal><div className="section-label">01 / ABOUT</div></Reveal>
        <div className="two-column">
          <Reveal><h2>Turning data into<br /><em>clearer decisions.</em></h2></Reveal>
          <Reveal delay={.1}>
            <div className="about-copy">
              <p>
                I&apos;m a Data Science graduate from A. P. Shah Institute of Technology,
                Thane, with a CGPA of 8.04/10.
              </p>
              <p>
                My practical work spans Python data exploration, SQL querying,
                data cleaning, Power BI dashboards, database-backed applications
                and applied machine-learning fundamentals.
              </p>
              <div className="about-stats">
                <div><strong>8.04</strong><span>CGPA / 10</span></div>
                <div><strong>3</strong><span>FEATURED PROJECTS</span></div>
                <div><strong>2026</strong><span>GRADUATE</span></div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="skills" className="section skills-section">
        <Reveal><div className="section-label">02 / TOOLKIT</div></Reveal>
        <Reveal delay={.08}>
          <div className="section-heading">
            <h2>A practical toolkit for<br /><em>data &amp; analytics.</em></h2>
            <p>Python, SQL, BI, visualization, databases, APIs and applied machine-learning tools.</p>
          </div>
        </Reveal>
        <div className="skills-grid">
          {skills.map(([name, group], index) => (
            <Reveal key={name} delay={(index % 5) * .035}>
              <div className="skill-pill"><span>{name}</span><small>{group}</small></div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="projects" className="section projects-section">
        <Reveal><div className="section-label">03 / SELECTED WORK</div></Reveal>
        <Reveal delay={.08}>
          <div className="section-heading">
            <h2>Projects built around<br /><em>real problems.</em></h2>
            <p>Selected academic and practical projects from my data analytics and application work.</p>
          </div>
        </Reveal>

        <div className="projects-list">
          {projects.map((project, index) => (
            <Reveal key={project.number} delay={index * .08}>
              <article className="project-card">
                <div className="project-number">{project.number}</div>
                <div className="project-content">
                  <div className="project-meta"><span>{project.category}</span></div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                  <p className="project-detail">{project.detail}</p>
                  <div className="stack-row">{project.stack.map(tech => <span key={tech}>{tech}</span>)}</div>
                </div>
                <a className="project-arrow" href={project.link} aria-label={`Contact about ${project.title}`}><ArrowUpRight size={23} /></a>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="experience" className="section experience">
        <Reveal><div className="section-label">04 / EXPERIENCE &amp; LEADERSHIP</div></Reveal>
        <div className="experience-grid">
          <Reveal>
            <article className="timeline-card">
              <span className="timeline-date">JAN 2026 — MAR 2026</span>
              <h3>AICTE–EduSkills Virtual Internship</h3>
              <p className="timeline-role">Data Analytics with Python &amp; Power BI</p>
              <p>
                Gained practical exposure to Python data exploration, SQL querying,
                data cleaning and interactive Power BI dashboards through a structured
                10-week program using course-provided datasets.
              </p>
            </article>
          </Reveal>
          <Reveal delay={.1}>
            <article className="timeline-card">
              <span className="timeline-date">LEADERSHIP</span>
              <h3>Head of Event Organization</h3>
              <p className="timeline-role">Exhault Cultural Fest</p>
              <p>
                Led a team of 4–5 members while coordinating 5 activities with the
                senior committee and faculty, and managed participant flow and
                registration for approximately 30–35 teams.
              </p>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section achievements">
        <Reveal><div className="section-label">05 / ACHIEVEMENTS</div></Reveal>
        <div className="achievement-grid">
          <Reveal><div className="achievement-card"><strong>RUNNER-UP</strong><h3>DataWeb Hackathon</h3><p>Built an AI-automated dashboard to generate insights from organizational datasets.</p></div></Reveal>
          <Reveal delay={.08}><div className="achievement-card"><strong>CERTIFICATION</strong><h3>Career Essentials in Data Analysis</h3><p>Microsoft &amp; LinkedIn Learning · 2026</p></div></Reveal>
          <Reveal delay={.16}><div className="achievement-card"><strong>SOFTWARE</strong><h3>Insuresafe Copyright Application</h3><p>Filed a Government of India Copyright Office application for the original software in February 2026.</p></div></Reveal>
          <Reveal delay={.24}><div className="achievement-card"><strong>CERTIFICATIONS</strong><h3>IBM + AWS Academy</h3><p>AI Fundamentals: Foundations for Understanding AI · IBM SkillsBuild, 2026. AWS Academy Graduate — Cloud Foundations, 2025.</p></div></Reveal>
        </div>
      </section>

      <section className="section resume-strip">
        <Reveal>
          <div>
            <div className="section-label">06 / RESUME</div>
            <h2>Want the full picture?</h2>
            <p>Download my latest Data Analyst / BI Analyst resume.</p>
          </div>
          <a className="button primary" href="/resume.pdf" target="_blank" rel="noreferrer"><Download size={17} /> Download Resume</a>
        </Reveal>
      </section>

      <section id="contact" className="section contact">
        <Reveal><div className="section-label">07 / CONTACT</div></Reveal>
        <Reveal delay={.08}><h2>Let&apos;s connect and<br /><em>work with data.</em></h2></Reveal>
        <Reveal delay={.15}>
          <div className="contact-grid">
            <a href="mailto:avadhootvirkarr@gmail.com" className="contact-item">
              <Mail size={20} /><div><small>EMAIL</small><span>avadhootvirkarr@gmail.com</span></div><ArrowUpRight size={18} />
            </a>
            <a href="https://github.com/elfeyaoo" target="_blank" rel="noreferrer" className="contact-item">
              <Github size={20} /><div><small>GITHUB</small><span>github.com/elfeyaoo</span></div><ArrowUpRight size={18} />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="contact-item">
              <Linkedin size={20} /><div><small>LINKEDIN</small><span>Find me on LinkedIn</span></div><ArrowUpRight size={18} />
            </a>
            <div className="contact-item">
              <MapPin size={20} /><div><small>LOCATION</small><span>Thane, Maharashtra, India</span></div><Check size={18} />
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Avadhoot Virkar</span>
        <span>Data Analyst • BI Analyst • Data Analytics</span>
        <a href="#home" aria-label="Back to top"><ArrowUp size={16} /></a>
      </footer>
    </main>
  );
}