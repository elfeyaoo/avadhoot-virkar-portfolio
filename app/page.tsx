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
    title: "Insurance AI Platform",
    category: "AI / ML",
    description:
      "An integrated insurance platform concept combining policy recommendation, document verification, facial verification and AI-assisted claims processing.",
    stack: ["Python", "TensorFlow", "OpenCV", "OCR", "React"],
    tags: ["Computer Vision", "NLP", "Recommendation"],
    link: "#contact"
  },
  {
    number: "02",
    title: "AQI & Weather Analytics",
    category: "DATA ANALYTICS",
    description:
      "A data analytics project combining air-quality and weather datasets, visual exploration and machine-learning forecasting workflows.",
    stack: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
    tags: ["Forecasting", "EDA", "Visualization"],
    link: "#contact"
  },
  {
    number: "03",
    title: "Smart Waste Management",
    category: "AI / WEB",
    description:
      "A smart waste-management web application concept with waste classification, pickup scheduling, route optimization and operational dashboards.",
    stack: ["Python", "CNN", "YOLO", "React", "Leaflet"],
    tags: ["Computer Vision", "Optimization", "Dashboards"],
    link: "#contact"
  }
];

const skills = [
  { name: "Python", group: "Programming" },
  { name: "SQL", group: "Programming" },
  { name: "Pandas", group: "Data" },
  { name: "NumPy", group: "Data" },
  { name: "Excel", group: "Analytics" },
  { name: "Power BI", group: "BI" },
  { name: "Scikit-learn", group: "ML" },
  { name: "TensorFlow", group: "AI" },
  { name: "PyTorch", group: "AI" },
  { name: "Computer Vision", group: "AI" },
  { name: "NLP", group: "AI" },
  { name: "MySQL", group: "Data Engineering" },
  { name: "MongoDB", group: "Data Engineering" },
  { name: "Git / GitHub", group: "Tools" }
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
        <a className="brand" href="#home" onClick={closeMenu}>
          AV<span>.</span>
        </a>

        <button
          className="menu-button"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
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
            <div className="eyebrow">
              <span className="status-dot" />
              OPEN TO OPPORTUNITIES
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="kicker">HELLO, I&apos;M</p>
            <h1>
              Avadhoot
              <br />
              <span>Virkar.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="hero-role">
              Data Analyst <span>•</span> AI/ML <span>•</span> Data Engineering
            </p>
            <p className="hero-description">
              I turn data into useful insights, intelligent models and
              practical digital solutions.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                Explore my work <ArrowDown size={17} />
              </a>
              <a className="button secondary" href="#contact">
                Let&apos;s connect <ArrowUpRight size={17} />
              </a>
            </div>
          </Reveal>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        >
          <div className="data-card main-card">
            <div className="card-top">
              <span>DATA / INTELLIGENCE</span>
              <BarChart3 size={18} />
            </div>
            <div className="chart">
              <span className="chart-line line-a" />
              <span className="chart-line line-b" />
              <span className="chart-line line-c" />
              <span className="chart-point p1" />
              <span className="chart-point p2" />
              <span className="chart-point p3" />
              <span className="chart-point p4" />
              <span className="chart-point p5" />
            </div>
            <div className="chart-labels">
              <span>INSIGHT</span>
              <strong>+42.8%</strong>
            </div>
          </div>

          <motion.div
            className="floating-card card-ai"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <BrainCircuit size={21} />
            <span>AI / ML</span>
          </motion.div>

          <motion.div
            className="floating-card card-data"
            animate={{ y: [0, 9, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Database size={20} />
            <span>DATA</span>
          </motion.div>
        </motion.div>

        <a className="scroll-hint" href="#about">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={15} />
        </a>
      </section>

      <section id="about" className="section about">
        <Reveal>
          <div className="section-label">01 / ABOUT</div>
        </Reveal>
        <div className="two-column">
          <Reveal>
            <h2>
              Curious about data.
              <br />
              Focused on <em>impact.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="about-copy">
              <p>
                I&apos;m a Computer Engineering graduate specializing in Data
                Science, with a strong interest in data analytics, business
                intelligence, AI/ML and data engineering.
              </p>
              <p>
                I enjoy turning messy datasets and real-world problems into
                clear insights, useful models and practical applications.
              </p>
              <div className="about-stats">
                <div><strong>8.04</strong><span>CGPA</span></div>
                <div><strong>3+</strong><span>Focus Areas</span></div>
                <div><strong>∞</strong><span>Curiosity</span></div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="skills" className="section skills-section">
        <Reveal>
          <div className="section-label">02 / TOOLKIT</div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="section-heading">
            <h2>Tools I use to turn <em>ideas into outcomes.</em></h2>
            <p>
              A practical toolkit across analytics, BI, machine learning and
              data engineering.
            </p>
          </div>
        </Reveal>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <Reveal key={skill.name} delay={(index % 5) * 0.04}>
              <div className="skill-pill">
                <span>{skill.name}</span>
                <small>{skill.group}</small>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="projects" className="section projects-section">
        <Reveal>
          <div className="section-label">03 / SELECTED WORK</div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="section-heading project-heading">
            <h2>Projects with a <em>purpose.</em></h2>
            <p>
              Explore the problems, technologies and ideas behind my work.
            </p>
          </div>
        </Reveal>

        <div className="projects-list">
          {projects.map((project, index) => (
            <Reveal key={project.number} delay={index * 0.08}>
              <article className="project-card">
                <div className="project-number">{project.number}</div>
                <div className="project-content">
                  <div className="project-meta">
                    <span>{project.category}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-row">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <div className="stack-row">
                    {project.stack.map((tech) => <span key={tech}>{tech}</span>)}
                  </div>
                </div>
                <a className="project-arrow" href={project.link} aria-label={`View ${project.title}`}>
                  <ArrowUpRight size={23} />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section resume-strip">
        <Reveal>
          <div>
            <div className="section-label">04 / RESUME</div>
            <h2>Want the full picture?</h2>
            <p>Download my latest resume and explore my experience in detail.</p>
          </div>
          <a className="button primary" href="/resume.pdf" target="_blank" rel="noreferrer">
            <Download size={17} /> Download Resume
          </a>
        </Reveal>
      </section>

      <section id="contact" className="section contact">
        <Reveal>
          <div className="section-label">05 / CONTACT</div>
        </Reveal>
        <Reveal delay={0.08}>
          <h2>
            Let&apos;s build something
            <br />
            <em>meaningful.</em>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="contact-grid">
            <a href="mailto:avadhootvirkarr@gmail.com" className="contact-item">
              <Mail size={20} />
              <div><small>EMAIL</small><span>avadhootvirkarr@gmail.com</span></div>
              <ArrowUpRight size={18} />
            </a>
            <a
              href="https://github.com/elfeyaoo"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <Github size={20} />
              <div><small>GITHUB</small><span>github.com/elfeyaoo</span></div>
              <ArrowUpRight size={18} />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <Linkedin size={20} />
              <div><small>LINKEDIN</small><span>Connect with me</span></div>
              <ArrowUpRight size={18} />
            </a>
            <div className="contact-item">
              <MapPin size={20} />
              <div><small>LOCATION</small><span>India</span></div>
              <Check size={18} />
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Avadhoot Virkar</span>
        <span>Built with Next.js • Designed for data &amp; AI</span>
        <a href="#home" aria-label="Back to top"><ArrowUp size={16} /></a>
      </footer>
    </main>
  );
}