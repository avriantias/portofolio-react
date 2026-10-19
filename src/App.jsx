import { useEffect, useState } from "react";
import {
  MotionConfig,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "motion/react";
import { stageData } from "./stageData.js";

const heroWordVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: "easeOut" },
  },
};

const heroHeadlineWords = ["Rahmad", "Avriantias", "Aulia"];

const navigationItems = [
  { id: "featured-projects", label: "01 // WORK" },
  { id: "case-study-preview", label: "02 // CASE STUDY" },
  { id: "technical-playground", label: "03 // PLAYGROUND" },
  { id: "experience-timeline", label: "04 // EXPERIENCE" },
  { id: "about-capabilities", label: "05 // ABOUT" },
  { id: "contact-cta", label: "06 // CONTACT" },
];

const skillItems = [
  {
    name: "React.js",
    category: "frontend",
    description: "Frontend development",
  },
  {
    name: "React Hooks",
    category: "frontend",
    description: "Component logic and state",
  },
  {
    name: "Functional Components",
    category: "frontend",
    description: "Reusable React interfaces",
  },
  { name: "JSX", category: "frontend", description: "React UI syntax" },
  {
    name: "Props & State",
    category: "frontend",
    description: "Component data and state",
  },
  {
    name: "useState",
    category: "frontend",
    description: "React state management",
  },
  {
    name: "useEffect",
    category: "frontend",
    description: "React side effects",
  },
  {
    name: "Reusable Components",
    category: "frontend",
    description: "Reusable UI components",
  },
  { name: "HTML5", category: "frontend", description: "Web page structure" },
  { name: "CSS3", category: "frontend", description: "Web styling" },
  {
    name: "JavaScript (ES6+)",
    category: "frontend",
    description: "Modern JavaScript",
  },
  {
    name: "Bootstrap",
    category: "frontend",
    description: "Responsive UI framework",
  },
  { name: "Tailwind", category: "frontend", description: "Utility-first CSS" },
  {
    name: "Responsive Web Design",
    category: "frontend",
    description: "Responsive web layouts",
  },
  {
    name: "Flutter",
    category: "flutter",
    description: "Cross-platform app development",
  },
  {
    name: "Dart",
    category: "flutter",
    description: "Flutter application language",
  },
  {
    name: "BLoC",
    category: "flutter",
    description: "Mobile application state management",
  },
  {
    name: "HTTP",
    category: "flutter",
    description: "Application network communication",
  },
  {
    name: "Cross-Platform App Development",
    category: "flutter",
    description: "Mobile application development",
  },
  {
    name: "RESTful API Integration",
    category: "backend",
    description: "Frontend and API integration",
  },
  {
    name: "JSON Data Handling",
    category: "backend",
    description: "Asynchronous data handling",
  },
  {
    name: "Asynchronous JavaScript",
    category: "backend",
    description: "Async application workflows",
  },
  { name: "Laravel", category: "backend", description: "Backend framework" },
  { name: "Git", category: "tools", description: "Version control" },
  { name: "GitHub", category: "tools", description: "Code collaboration" },
  {
    name: "npm",
    category: "tools",
    description: "JavaScript package management",
  },
  {
    name: "Google Play Console",
    category: "tools",
    description: "Mobile app distribution",
  },
  {
    name: "Google Play Store Deployment",
    category: "tools",
    description: "Application deployment",
  },
  {
    name: "UI/UX Implementation",
    category: "tools",
    description: "Interface implementation",
  },
  {
    name: "Debugging",
    category: "tools",
    description: "Issue investigation and resolution",
  },
  {
    name: "Code Optimization",
    category: "tools",
    description: "Code refinement",
  },
  {
    name: "Agile/Scrum",
    category: "tools",
    description: "Team development practices",
  },
];

const skillIcons = {
  "React.js": "react",
  "React Hooks": "cable",
  "Functional Components": "widgets",
  JSX: "data_object",
  "Props & State": "tune",
  useState: "toggle_on",
  useEffect: "sync",
  "Reusable Components": "view_quilt",
  HTML5: "code",
  CSS3: "palette",
  "JavaScript (ES6+)": "javascript",
  Bootstrap: "grid_view",
  Tailwind: "air",
  "Responsive Web Design": "devices",
  Flutter: "flutter",
  Dart: "dart",
  BLoC: "account_tree",
  HTTP: "dns",
  "Cross-Platform App Development": "phone_iphone",
  "RESTful API Integration": "hub",
  "JSON Data Handling": "data_array",
  "Asynchronous JavaScript": "schedule",
  Laravel: "database",
  Git: "commit",
  GitHub: "terminal",
  npm: "inventory_2",
  "Google Play Console": "shop",
  "Google Play Store Deployment": "publish",
  "UI/UX Implementation": "design_services",
  Debugging: "bug_report",
  "Code Optimization": "speed",
  "Agile/Scrum": "sprint",
};

function SkillIcon({ name }) {
  const icon = skillIcons[name];

  if (icon === "react") {
    return (
      <svg
        aria-hidden="true"
        className="h-6 w-6 text-[#61dafb]"
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle cx="12" cy="12" r="1.8" fill="currentColor" />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="3.8"
          stroke="currentColor"
          strokeWidth="1.25"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="3.8"
          stroke="currentColor"
          strokeWidth="1.25"
          transform="rotate(60 12 12)"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="3.8"
          stroke="currentColor"
          strokeWidth="1.25"
          transform="rotate(120 12 12)"
        />
      </svg>
    );
  }

  if (icon === "flutter") {
    return (
      <svg
        aria-hidden="true"
        className="h-6 w-6 text-[#54c5f8]"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M14.1 2 3.2 13l5.4 5.4 5.4-5.4h-5.4l10.9-11zM14 13l-5.4 5.4 5.4 5.4 5.4-5.4z" />
      </svg>
    );
  }

  if (icon === "dart") {
    return (
      <svg
        aria-hidden="true"
        className="h-6 w-6 text-[#42c1d6]"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M3.2 4.3 8.7 2l11.9 11.9-6.2 6.2L3.2 9V4.3Zm1.5 1.1v3l9.9 9.9 3.9-3.9L8.1 4.9 4.7 5.4Z" />
        <path
          d="m8.7 2 6.2 6.2 5.7 5.7-6.2 6.2-6.2-6.2 6.2-6.2-5.7-5.7Z"
          opacity=".7"
        />
      </svg>
    );
  }

  if (icon === "javascript") {
    return (
      <span
        aria-hidden="true"
        className="flex h-6 w-6 items-end justify-end rounded-sm bg-[#f7df1e] p-0.5 font-bold leading-none text-[#202020] text-[11px]"
      >
        JS
      </span>
    );
  }

  return (
    <span
      aria-hidden="true"
      className="material-symbols-outlined text-[22px] text-primary-container"
    >
      {icon}
    </span>
  );
}

function Reveal({ children, className = "", delay = 0 }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.5,
        delay: prefersReducedMotion ? 0 : delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scrollProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });
  const [activeSection, setActiveSection] = useState("featured-projects");
  const [quantity, setQuantity] = useState(2);
  const [dispatchState, setDispatchState] = useState("idle");
  const [terminalLogs, setTerminalLogs] = useState([]);
  const [caseStudyTab, setCaseStudyTab] = useState("overview");
  const [exampleDepotCount, setExampleDepotCount] = useState("2");
  const [activeStage, setActiveStage] = useState("1");
  const [playgroundTrack, setPlaygroundTrack] = useState("frontend");
  const [techFilter, setTechFilter] = useState("all");
  const [copyState, setCopyState] = useState("idle");

  const emailAddress = "rahmadavriantias06@gmail.com";
  const currentStage =
    playgroundTrack === "frontend" ? stageData[activeStage] : stageData.flutter;

  useEffect(() => {
    const sections = navigationItems
      .map(({ id }) => document.getElementById(id))
      .filter((section) => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              second.intersectionRatio - first.intersectionRatio,
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.1, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (dispatchState === "idle") return undefined;

    const timeout = window.setTimeout(
      () => {
        setDispatchState(dispatchState === "sending" ? "confirmed" : "idle");
      },
      dispatchState === "sending" ? 800 : 3000,
    );

    return () => window.clearTimeout(timeout);
  }, [dispatchState]);

  useEffect(() => {
    if (copyState !== "copied") return undefined;

    const timeout = window.setTimeout(() => setCopyState("idle"), 2500);
    return () => window.clearTimeout(timeout);
  }, [copyState]);

  const appendTerminalLog = (text, colorClass) => {
    const time = new Date().toISOString().slice(11, 19);
    setTerminalLogs((logs) => [
      ...logs,
      { text: `[${time}] > ${text}`, colorClass },
    ]);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopyState("copied");
    } catch (error) {
      console.error(
        "Unable to copy the contact email to the clipboard.",
        error,
      );
      setCopyState("error");
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <div
        id="top"
        className="min-h-screen bg-surface text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container"
      >
        <motion.div
          aria-hidden="true"
          className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-primary-container"
          style={{ scaleX: scrollProgress }}
        />
        <nav
          aria-label="Primary navigation"
          className="fixed left-0 right-0 top-20 z-40 flex gap-1 overflow-x-auto border-b border-outline-variant/20 bg-surface/95 px-margin py-2 backdrop-blur-xl xl:hidden"
        >
          {navigationItems.map(({ id, label }) => (
            <a
              aria-current={activeSection === id ? "location" : undefined}
              className={`shrink-0 rounded px-2 py-1.5 font-tech-label text-[10px] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-container ${activeSection === id ? "bg-surface-container-high text-primary-container" : "text-on-surface-variant hover:bg-surface-container hover:text-on-surface"}`}
              href={`#${id}`}
              key={id}
            >
              {label}
            </a>
          ))}
        </nav>
        <header className="fixed top-0 left-0 right-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.4)]">
          <div className="h-20 w-full px-margin md:px-margin-tablet lg:px-margin-desktop flex items-center justify-between">
            <div className="flex items-center gap-space-md">
              <a className="group flex flex-col justify-center" href="#top">
                <div className="flex items-center gap-space-xs">
                  <span className="font-headline-sm text-[12px] sm:text-base lg:text-headline-sm text-primary tracking-tight group-hover:text-primary-container transition-colors">
                    Rahmad Avriantias Aulia
                  </span>
                </div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-container"></span>
                  </span>
                  <span className="hidden sm:inline font-status-pill text-status-pill text-on-surface-variant uppercase tracking-wider">
                    FRONTEND WEB DEVELOPER // FLUTTER MOBILE DEVELOPER
                  </span>
                </div>
              </a>
            </div>
            <nav
              className="hidden xl:flex items-center gap-space-sm p-1 rounded-lg bg-surface-container-lowest/60 border border-outline-variant/20"
              data-active-classes="text-primary-container bg-surface-container-high font-semibold"
            >
              <a
                aria-current={
                  activeSection === "featured-projects" ? "location" : undefined
                }
                className={`px-space-sm py-1.5 rounded hover:text-on-surface font-tech-label text-tech-label transition-colors ${activeSection === "featured-projects" ? "bg-surface-container-high text-primary-container font-semibold" : "text-on-surface-variant hover:text-on-surface"}`}
                data-path="work"
                href="#featured-projects"
              >
                01 // WORK
              </a>
              <a
                aria-current={
                  activeSection === "case-study-preview"
                    ? "location"
                    : undefined
                }
                className={`px-space-sm py-1.5 rounded hover:text-on-surface font-tech-label text-tech-label transition-colors ${activeSection === "case-study-preview" ? "bg-surface-container-high text-primary-container font-semibold" : "text-on-surface-variant hover:text-on-surface"}`}
                data-path="case-study"
                href="#case-study-preview"
              >
                02 // CASE STUDY
              </a>
              <a
                aria-current={
                  activeSection === "technical-playground"
                    ? "location"
                    : undefined
                }
                className={`px-space-sm py-1.5 rounded hover:text-on-surface font-tech-label text-tech-label transition-colors ${activeSection === "technical-playground" ? "bg-surface-container-high text-primary-container font-semibold" : "text-on-surface-variant hover:text-on-surface"}`}
                data-path="playground"
                href="#technical-playground"
              >
                03 // PLAYGROUND
              </a>
              <a
                aria-current={
                  activeSection === "experience-timeline"
                    ? "location"
                    : undefined
                }
                className={`px-space-sm py-1.5 rounded hover:text-on-surface font-tech-label text-tech-label transition-colors ${activeSection === "experience-timeline" ? "bg-surface-container-high text-primary-container font-semibold" : "text-on-surface-variant hover:text-on-surface"}`}
                data-path="experience"
                href="#experience-timeline"
              >
                04 // EXPERIENCE
              </a>
              <a
                aria-current={
                  activeSection === "about-capabilities"
                    ? "location"
                    : undefined
                }
                className={`px-space-sm py-1.5 rounded hover:text-on-surface font-tech-label text-tech-label transition-colors ${activeSection === "about-capabilities" ? "bg-surface-container-high text-primary-container font-semibold" : "text-on-surface-variant hover:text-on-surface"}`}
                data-path="about"
                href="#about-capabilities"
              >
                05 // ABOUT
              </a>
              <a
                aria-current={
                  activeSection === "contact-cta" ? "location" : undefined
                }
                className={`px-space-sm py-1.5 rounded hover:text-on-surface font-tech-label text-tech-label transition-colors ${activeSection === "contact-cta" ? "bg-surface-container-high text-primary-container font-semibold" : "text-on-surface-variant hover:text-on-surface"}`}
                data-path="contact"
                href="#contact-cta"
              >
                06 // CONTACT
              </a>
            </nav>
            <div className="flex items-center gap-space-sm">
              <a
                className="hidden sm:inline-flex items-center gap-1.5 px-space-sm py-2 rounded-lg bg-surface-container-low text-on-surface font-tech-label text-tech-label border border-outline-variant/30 hover:border-primary-container/40 transition-colors"
                href="/Rahmad-Avriantias-Aulia-CV.pdf"
                download
              >
                RESUME PDF
              </a>
              <a
                className="inline-flex items-center justify-center whitespace-nowrap px-space-md py-2 rounded-lg bg-primary-container text-on-primary-container font-tech-label text-tech-label font-bold uppercase shadow-[0_0_16px_rgba(202,243,0,0.25)] hover:shadow-[0_0_24px_rgba(202,243,0,0.45)] transition-all active:scale-[0.98]"
                href="#contact-cta"
              >
                LET'S TALK
              </a>
              <img
                alt="Rahmad Avriantias Aulia"
                className="ml-1 h-8 w-8 rounded-full border border-primary-container/50 object-cover object-[center_18%]"
                src="/IMG_9408.JPG.jpeg"
              />
            </div>
          </div>
        </header>
        <main className="w-full pt-32 bg-surface min-h-[calc(100vh-80px)] xl:pt-20">
          <div className="flex flex-col w-full overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container text-on-surface">
            <motion.section
              className="relative w-full px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl lg:py-space-2xl bg-surface-container-lowest"
              id="hero"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary-container/10 blur-[120px] pointer-events-none"></div>
              <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-secondary-container/20 blur-[100px] pointer-events-none"></div>
              <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center relative z-10">
                <div className="lg:col-span-7 space-y-space-md">
                  <div className="inline-flex items-center gap-space-xs px-space-sm py-1.5 rounded-full bg-surface-container-high/80 border border-outline-variant/30 backdrop-blur-md shadow-sm">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-80"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-container"></span>
                    </span>
                    <span className="font-status-pill text-status-pill text-primary-container tracking-wider uppercase font-semibold">
                      FRONTEND WEB DEVELOPER // FLUTTER MOBILE DEVELOPER
                    </span>
                  </div>

                  <motion.h1
                    aria-label={heroHeadlineWords.join(" ")}
                    className="font-display-hero text-headline-lg lg:text-display-hero text-primary tracking-tight leading-none"
                    initial={prefersReducedMotion ? false : "hidden"}
                    animate="visible"
                    transition={{ staggerChildren: 0.055, delayChildren: 0.1 }}
                  >
                    {heroHeadlineWords.map((word, index) => (
                      <motion.span
                        aria-hidden="true"
                        className={`inline-block ${index < heroHeadlineWords.length - 1 ? "mr-[0.22em]" : ""} ${word === "Aulia" ? "text-primary-container" : ""}`}
                        key={word}
                        variants={heroWordVariants}
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.h1>

                  <motion.p
                    className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed"
                    initial={
                      prefersReducedMotion ? false : { opacity: 0, y: 12 }
                    }
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.45,
                      delay: prefersReducedMotion ? 0 : 0.48,
                      ease: "easeOut",
                    }}
                  >
                    Frontend Web Developer and Flutter Mobile Developer with
                    hands-on experience building responsive web and mobile
                    applications for real-world projects. Proficient in
                    React.js, HTML5, CSS3, JavaScript (ES6+), Bootstrap,
                    Tailwind, Flutter, BLoC, and RESTful API integration.
                  </motion.p>

                  <motion.div
                    className="flex flex-wrap items-center gap-space-sm pt-space-xs"
                    initial={
                      prefersReducedMotion ? false : { opacity: 0, y: 10 }
                    }
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.45,
                      delay: prefersReducedMotion ? 0 : 0.62,
                      ease: "easeOut",
                    }}
                  >
                    <motion.a
                      className="inline-flex items-center gap-2 px-space-lg py-3 rounded-lg bg-primary-container text-on-primary-container font-tech-label text-tech-label uppercase font-bold tracking-wider shadow-[0_0_24px_rgba(202,243,0,0.3)] hover:shadow-[0_0_32px_rgba(202,243,0,0.5)] transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-container"
                      href="#featured-projects"
                      whileHover={
                        prefersReducedMotion
                          ? undefined
                          : { y: -2, scale: 1.015 }
                      }
                      whileTap={
                        prefersReducedMotion ? undefined : { scale: 0.98 }
                      }
                      transition={{ duration: 0.18, ease: "easeOut" }}
                    >
                      Explore My Work ↓
                    </motion.a>
                    <motion.a
                      className="inline-flex items-center gap-2 px-space-md py-3 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-tech-label text-tech-label uppercase tracking-wider border border-outline-variant/40 hover:border-primary-container/40 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-container"
                      href="#contact-cta"
                      whileHover={
                        prefersReducedMotion
                          ? undefined
                          : { y: -2, scale: 1.015 }
                      }
                      whileTap={
                        prefersReducedMotion ? undefined : { scale: 0.98 }
                      }
                      transition={{ duration: 0.18, ease: "easeOut" }}
                    >
                      Let's Talk
                    </motion.a>
                  </motion.div>

                  <div className="pt-space-md border-t border-outline-variant/15 flex flex-wrap items-center gap-space-md">
                    <div className="flex items-center gap-1.5 font-code-inline text-code-inline text-on-surface-variant">
                      <span className="material-symbols-outlined text-[16px] text-secondary">
                        terminal
                      </span>
                      <a
                        className="hover:text-primary-container transition-colors"
                        href="https://github.com/avriantias"
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub
                      </a>
                    </div>
                    <span className="text-outline-variant">•</span>
                    <div className="flex items-center gap-1.5 font-code-inline text-code-inline text-on-surface-variant">
                      <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">
                        verified
                      </span>
                      <a
                        className="hover:text-primary-container transition-colors"
                        href="https://www.linkedin.com/in/rahmad-avriantias-aulia"
                        target="_blank"
                        rel="noreferrer"
                      >
                        LinkedIn
                      </a>
                    </div>
                    <span className="text-outline-variant">•</span>
                    <a
                      className="font-tech-label text-tech-label text-on-surface-variant uppercase flex items-center gap-1 hover:text-primary-container transition-colors"
                      href="/Rahmad-Avriantias-Aulia-CV.pdf"
                      download
                    >
                      <span className="material-symbols-outlined text-[14px]">
                        download
                      </span>{" "}
                      RESUME PDF
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-5 relative mt-space-lg lg:mt-0">
                  <div className="w-full rounded-xl bg-surface-container-low border border-outline-variant/30 shadow-2xl overflow-hidden backdrop-blur-xl">
                    <div className="px-space-sm py-2.5 bg-surface-container border-b border-outline-variant/20 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-error/70 inline-block"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-primary-fixed-dim/70 inline-block"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-tertiary-fixed-dim/70 inline-block"></span>
                      </div>
                      <div className="font-tech-label text-[10px] text-on-surface-variant tracking-wider uppercase flex items-center gap-1">
                        <span className="material-symbols-outlined text-[12px] text-primary-container">
                          shield
                        </span>
                        INTERACTIVE UI PREVIEW // EXAMPLE DATA
                      </div>
                      <div className="font-tech-label text-[9px] px-1.5 py-0.5 rounded bg-surface-container-high text-secondary">
                        ILLUSTRATION
                      </div>
                    </div>

                    <div className="p-space-sm font-code-inline text-[11px] leading-relaxed text-on-surface-variant bg-surface-container-lowest/90 space-y-1">
                      <div className="flex items-center justify-between text-secondary">
                        <span>Example endpoint: /api/depots</span>
                        <span className="text-primary-container">DEMO</span>
                      </div>
                      <div className="text-on-surface">
                        Example JSON response: &#123; "depots": [], "example":
                        true &#125;
                      </div>
                      <div className="text-tertiary-fixed-dim">
                        &gt;&gt; Static interface preview; no live request is
                        made.
                      </div>
                    </div>

                    <div className="px-space-sm py-2 bg-surface-container-high/60 border-t border-outline-variant/20 flex items-center justify-between text-[10px] font-tech-label">
                      <span className="text-on-surface-variant">
                        FLUTTER MOBILE APP // UI PREVIEW
                      </span>
                      <span className="text-primary-container flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-container inline-block"></span>
                        SAMPLE UI
                      </span>
                    </div>
                  </div>

                  <motion.div
                    className="w-72 sm:w-80 ml-auto -mt-10 mr-2 relative z-20 rounded-2xl bg-surface-container border-2 border-outline-variant/40 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl"
                    animate={
                      prefersReducedMotion ? undefined : { y: [0, -5, 0] }
                    }
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="flex items-center justify-center mb-2">
                      <div className="w-16 h-1 rounded-full bg-outline-variant/60"></div>
                    </div>

                    <div className="rounded-xl bg-surface-container-lowest p-space-sm border border-outline-variant/20 space-y-2">
                      <div className="flex items-center justify-between border-b border-outline-variant/15 pb-2">
                        <span className="font-tech-label text-tech-label text-primary font-bold">
                          E-DEPOT // UI DEMO
                        </span>
                        <span className="font-status-pill text-status-pill px-1.5 py-0.5 rounded bg-primary-container text-on-primary-container uppercase font-bold">
                          SAMPLE SCREEN
                        </span>
                      </div>

                      <div className="p-2 rounded bg-surface-container-low border border-outline-variant/15 flex items-center justify-between">
                        <div>
                          <div className="font-tech-label text-[9px] text-on-surface-variant uppercase">
                            Project type
                          </div>
                          <div className="font-headline-sm text-sm text-primary font-bold">
                            Mobile ordering app
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-tech-label text-[9px] text-on-surface-variant uppercase">
                            Preview
                          </div>
                          <div className="font-tech-label text-[11px] text-primary-container font-bold">
                            Illustrative
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-1 pt-1">
                        <button
                          type="button"
                          className="py-1 rounded text-center font-tech-label text-[9px] bg-primary-container text-on-primary-container font-bold"
                        >
                          ORDER
                        </button>
                        <button
                          type="button"
                          className="py-1 rounded text-center font-tech-label text-[9px] bg-surface-container hover:bg-surface-container-high text-on-surface-variant"
                        >
                          DEPOTS
                        </button>
                        <button
                          type="button"
                          className="py-1 rounded text-center font-tech-label text-[9px] bg-surface-container hover:bg-surface-container-high text-on-surface-variant"
                        >
                          ACCOUNT
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              <div className="max-w-[1440px] mx-auto mt-space-xl grid grid-cols-2 md:grid-cols-4 gap-space-sm">
                <div className="p-space-sm rounded-lg bg-surface-container-low border border-outline-variant/20 flex flex-col justify-between">
                  <span className="font-tech-label text-tech-label text-on-surface-variant uppercase">
                    PROFESSION
                  </span>
                  <span className="font-headline-md text-headline-md text-primary font-bold mt-1">
                    Frontend Web
                  </span>
                  <span className="font-body-sm text-[12px] text-on-surface-variant">
                    Responsive interfaces with React
                  </span>
                </div>
                <div className="p-space-sm rounded-lg bg-surface-container-low border border-outline-variant/20 flex flex-col justify-between">
                  <span className="font-tech-label text-tech-label text-on-surface-variant uppercase">
                    RUNTIME MASTERY
                  </span>
                  <span className="font-headline-md text-headline-md text-secondary font-bold mt-1">
                    Flutter Mobile
                  </span>
                  <span className="font-body-sm text-[12px] text-on-surface-variant">
                    Cross-platform app development
                  </span>
                </div>
                <div className="p-space-sm rounded-lg bg-surface-container-low border border-outline-variant/20 flex flex-col justify-between">
                  <span className="font-tech-label text-tech-label text-on-surface-variant uppercase">
                    API INTEGRATION
                  </span>
                  <span className="font-headline-md text-headline-md text-tertiary-fixed-dim font-bold mt-1">
                    RESTful APIs
                  </span>
                  <span className="font-body-sm text-[12px] text-on-surface-variant">
                    Integration and JSON data handling
                  </span>
                </div>
                <div className="p-space-sm rounded-lg bg-surface-container-low border border-outline-variant/20 flex flex-col justify-between">
                  <span className="font-tech-label text-tech-label text-on-surface-variant uppercase">
                    EDUCATION
                  </span>
                  <span className="font-headline-md text-headline-md text-primary-container font-bold mt-1">
                    S1 Informatics
                  </span>
                  <span className="font-body-sm text-[12px] text-on-surface-variant">
                    Universitas Negeri Padang
                  </span>
                </div>
              </div>
            </motion.section>

            <motion.section
              className="w-full scroll-mt-32 px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl lg:py-space-2xl bg-surface border-t border-outline-variant/15"
              id="featured-projects"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <div className="max-w-[1440px] mx-auto space-y-space-xl">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm border-b border-outline-variant/20 pb-space-md">
                  <div>
                    <span className="font-tech-label text-tech-label text-primary-container uppercase tracking-widest block mb-1">
                      01 // CENTERPIECE SHOWCASE
                    </span>
                    <h2 className="font-headline-lg text-headline-md lg:text-headline-lg text-primary tracking-tight">
                      Featured Projects &amp; Mobile Builds
                    </h2>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                    Selected web and mobile application work contributed to as
                    part of professional experience.
                  </p>
                </div>

                <Reveal
                  className="project-card rounded-xl bg-surface-container-lowest border border-outline-variant/30 overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12"
                  delay={0.04}
                >
                  <div className="lg:col-span-6 p-space-md lg:p-space-lg flex flex-col justify-between space-y-space-md">
                    <div className="space-y-space-xs">
                      <div className="flex items-center gap-2">
                        <span className="font-status-pill text-status-pill px-2 py-0.5 rounded bg-primary-container/20 text-primary-container uppercase font-bold border border-primary-container/40">
                          MOBILE APPLICATION
                        </span>
                        <span className="font-tech-label text-[11px] text-on-surface-variant">
                          PROJECT CONTRIBUTION
                        </span>
                      </div>
                      <h3 className="font-headline-md text-headline-md text-primary font-bold">
                        E-Depot
                      </h3>
                      <p className="font-tech-label text-[12px] text-secondary">
                        Mobile app for ordering gallon water from multiple
                        depots.
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-2">
                        <span className="px-2 py-1 rounded bg-surface-container font-tech-label text-[10px] text-on-surface-variant border border-outline-variant/30">
                          Flutter
                        </span>
                        <span className="px-2 py-1 rounded bg-surface-container font-tech-label text-[10px] text-on-surface-variant border border-outline-variant/30">
                          Dart
                        </span>
                        <span className="px-2 py-1 rounded bg-surface-container font-tech-label text-[10px] text-on-surface-variant border border-outline-variant/30">
                          BLoC
                        </span>
                        <span className="px-2 py-1 rounded bg-surface-container font-tech-label text-[10px] text-on-surface-variant border border-outline-variant/30">
                          RESTful API
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-2">
                        <div className="p-space-sm rounded bg-surface-container-low border border-outline-variant/20">
                          <span className="font-tech-label text-[10px] text-error uppercase font-bold block mb-1">
                            [ PROJECT TYPE ]
                          </span>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">
                            A mobile application for ordering gallon water from
                            multiple depots.
                          </p>
                        </div>
                        <div className="p-space-sm rounded bg-surface-container-low border border-outline-variant/20">
                          <span className="font-tech-label text-[10px] text-primary-container uppercase font-bold block mb-1">
                            [ CONTRIBUTION ]
                          </span>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">
                            Contributed to mobile application feature
                            development and RESTful API integration.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-space-xs">
                      <a
                        className="inline-flex items-center gap-2 px-space-md py-2.5 rounded-lg bg-primary-container text-on-primary-container font-tech-label text-tech-label uppercase font-bold tracking-wider hover:opacity-90 transition-opacity"
                        href="#case-study-preview"
                      >
                        Explore Case Study →
                      </a>
                    </div>
                  </div>

                  <div className="lg:col-span-6 bg-surface-container-low p-space-md lg:p-space-lg flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-outline-variant/20">
                    <div className="w-full max-w-md mx-auto rounded-xl bg-surface-container-lowest border border-outline-variant/30 p-space-md shadow-2xl space-y-space-sm">
                      <div className="flex items-center justify-between border-b border-outline-variant/20 pb-2">
                        <span className="font-tech-label text-tech-label text-primary">
                          E-DEPOT // UI DEMO
                        </span>
                        <span className="font-status-pill text-status-pill text-primary-container">
                          ILLUSTRATIVE
                        </span>
                      </div>
                      <div className="p-space-sm rounded bg-surface-container border border-outline-variant/15 space-y-1">
                        <div className="font-tech-label text-[10px] text-on-surface-variant">
                          EXAMPLE DEPOT
                        </div>
                        <div className="font-headline-sm text-sm text-primary font-bold">
                          Illustrative interface data
                        </div>
                        <div className="font-code-inline text-[11px] text-tertiary-fixed-dim">
                          No live depot lookup or order submission
                        </div>
                      </div>

                      <div className="p-space-sm rounded bg-surface-container border border-outline-variant/15 flex items-center justify-between">
                        <div>
                          <div className="font-body-sm text-body-sm text-on-surface font-semibold">
                            Gallon water order
                          </div>
                          <div className="font-tech-label text-[11px] text-primary-container">
                            Quantity preview
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            className="w-7 h-7 rounded bg-surface-container-high text-on-surface hover:text-primary-container flex items-center justify-center font-bold text-lg"
                            aria-label="Decrease refill quantity"
                            onClick={() =>
                              setQuantity((current) => Math.max(1, current - 1))
                            }
                          >
                            -
                          </button>
                          <span
                            className="font-tech-label text-sm text-primary font-bold w-6 text-center"
                            id="edepot-qty"
                          >
                            {quantity}
                          </span>
                          <button
                            type="button"
                            className="w-7 h-7 rounded bg-surface-container-high text-on-surface hover:text-primary-container flex items-center justify-center font-bold text-lg"
                            aria-label="Increase refill quantity"
                            onClick={() =>
                              setQuantity((current) =>
                                Math.min(20, current + 1),
                              )
                            }
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="w-full py-2.5 rounded bg-primary-container hover:bg-primary-fixed-dim text-on-primary-container font-tech-label text-tech-label uppercase font-bold transition-all shadow-md disabled:opacity-70"
                        id="dispatch-btn"
                        onClick={() => setDispatchState("sending")}
                        disabled={dispatchState === "sending"}
                      >
                        {dispatchState === "sending"
                          ? "SHOWING ORDER FLOW..."
                          : dispatchState === "confirmed"
                            ? "ORDER FLOW PREVIEW ✓"
                            : "Preview Order Flow"}
                      </button>
                      <div
                        className={`font-code-inline text-[10px] text-center ${dispatchState === "idle" ? "text-on-surface-variant" : "text-primary-container"}`}
                        id="dispatch-status"
                        aria-live="polite"
                      >
                        {dispatchState === "sending"
                          ? "Displaying the order-flow interface..."
                          : dispatchState === "confirmed"
                            ? "UI preview complete // no order was submitted"
                            : "Interactive interface preview // no live order"}
                      </div>
                    </div>
                  </div>
                </Reveal>

                <Reveal
                  className="project-card rounded-xl bg-surface-container-lowest border border-outline-variant/30 overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12"
                  delay={0.12}
                >
                  <div className="lg:col-span-6 bg-surface-container-low p-space-md lg:p-space-lg flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-outline-variant/20 order-2 lg:order-1">
                    <div className="w-full max-w-md mx-auto rounded-xl bg-surface-container-lowest border border-outline-variant/30 overflow-hidden shadow-2xl">
                      <div className="px-space-sm py-2 bg-surface-container border-b border-outline-variant/20 flex items-center justify-between">
                        <span className="font-tech-label text-[11px] text-secondary font-bold">
                          BALIAN // UI DEMO
                        </span>
                        <span className="font-status-pill text-[9px] px-1.5 py-0.5 rounded bg-surface-container-high text-primary-container">
                          EXAMPLE
                        </span>
                      </div>

                      <div
                        className="p-space-sm h-44 overflow-y-auto font-code-inline text-[11px] leading-relaxed text-on-surface-variant bg-surface-container-lowest space-y-1"
                        id="balian-terminal"
                      >
                        <div className="text-on-surface">
                          &gt; Marketplace interface preview ready
                        </div>
                        <div className="text-tertiary-fixed-dim">
                          &gt; The following buttons append local demo text only
                        </div>
                        <div className="text-primary-container">
                          &gt; No live API request is sent
                        </div>
                        {terminalLogs.map((log, index) => (
                          <div
                            className={log.colorClass}
                            key={`${log.text}-${index}`}
                          >
                            {log.text}
                          </div>
                        ))}
                      </div>

                      <div className="p-space-xs bg-surface-container-high border-t border-outline-variant/20 grid grid-cols-3 gap-1">
                        <button
                          type="button"
                          className="py-1 px-2 rounded bg-surface-container text-on-surface hover:text-primary-container font-tech-label text-[10px] uppercase transition-colors"
                          id="btn-fetch-cat"
                          onClick={() =>
                            appendTerminalLog(
                              "Demo: catalog interface action selected",
                              "text-primary-container",
                            )
                          }
                        >
                          FETCH_CATALOG
                        </button>
                        <button
                          type="button"
                          className="py-1 px-2 rounded bg-surface-container text-on-surface hover:text-primary-container font-tech-label text-[10px] uppercase transition-colors"
                          id="btn-add-item"
                          onClick={() =>
                            appendTerminalLog(
                              "Demo: add-item interface action selected",
                              "text-tertiary-fixed-dim",
                            )
                          }
                        >
                          ADD_ITEM
                        </button>
                        <button
                          type="button"
                          className="py-1 px-2 rounded bg-surface-container text-on-surface hover:text-primary-container font-tech-label text-[10px] uppercase transition-colors"
                          id="btn-filter-cat"
                          onClick={() =>
                            appendTerminalLog(
                              "Demo: filter interface action selected",
                              "text-secondary",
                            )
                          }
                        >
                          FILTER_SKU
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-6 p-space-md lg:p-space-lg flex flex-col justify-between space-y-space-md order-1 lg:order-2">
                    <div className="space-y-space-xs">
                      <div className="flex items-center gap-2">
                        <span className="font-status-pill text-status-pill px-2 py-0.5 rounded bg-secondary-container/30 text-secondary uppercase font-bold border border-secondary/30">
                          MARKETPLACE MOBILE APP
                        </span>
                        <span className="font-tech-label text-[11px] text-on-surface-variant">
                          PROJECT CONTRIBUTION
                        </span>
                      </div>
                      <h3 className="font-headline-md text-headline-md text-primary font-bold">
                        Balian
                      </h3>
                      <p className="font-tech-label text-[12px] text-tertiary-fixed-dim">
                        Flutter-based marketplace mobile application.
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        <span className="px-2 py-1 rounded bg-surface-container font-tech-label text-[10px] text-on-surface-variant border border-outline-variant/30">
                          Flutter
                        </span>
                        <span className="px-2 py-1 rounded bg-surface-container font-tech-label text-[10px] text-on-surface-variant border border-outline-variant/30">
                          Dart
                        </span>
                        <span className="px-2 py-1 rounded bg-surface-container font-tech-label text-[10px] text-on-surface-variant border border-outline-variant/30">
                          BLoC
                        </span>
                        <span className="px-2 py-1 rounded bg-surface-container font-tech-label text-[10px] text-on-surface-variant border border-outline-variant/30">
                          RESTful API
                        </span>
                      </div>
                      <div className="space-y-2 pt-2">
                        <p className="font-body-md text-body-md text-on-surface-variant">
                          Contributed to marketplace feature development using
                          Flutter, BLoC state management, and RESTful API
                          integration. Work also included interface
                          implementation, debugging, and Git version control.
                        </p>
                      </div>
                    </div>
                    <div className="pt-space-xs">
                      <a
                        className="inline-flex items-center gap-2 px-space-md py-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-tech-label text-tech-label uppercase tracking-wider border border-outline-variant/40 hover:border-primary-container/40 transition-colors"
                        href="#technical-playground"
                      >
                        Explore Development Examples ↓
                      </a>
                    </div>
                  </div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter-desktop">
                  <Reveal
                    className="project-card p-space-md lg:p-space-lg rounded-xl bg-surface-container-low border border-outline-variant/20 flex flex-col justify-between space-y-space-md hover:border-outline-variant/40 transition-all"
                    delay={0.18}
                  >
                    <div className="space-y-space-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-status-pill text-status-pill px-2 py-0.5 rounded bg-surface-container-high text-secondary uppercase font-bold">
                          UNIVERSITY PROJECT
                        </span>
                        <span className="font-tech-label text-[10px] text-on-surface-variant">
                          PROJECT CONTRIBUTION
                        </span>
                      </div>
                      <h4 className="font-headline-sm text-headline-sm text-primary font-bold">
                        Siladu
                      </h4>
                      <p className="font-tech-label text-[11px] text-on-surface-variant">
                        Laboratory examination request application for
                        Universitas Negeri Padang.
                      </p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant pt-2">
                        Contributed to a practical application that helps users
                        submit laboratory examination requests through a clear
                        digital process.
                      </p>

                      <div className="p-space-sm rounded bg-surface-container-lowest border border-outline-variant/15 font-code-inline text-[11px] space-y-1">
                        <div className="flex justify-between text-on-surface">
                          <span>LAB REQUEST // UI PREVIEW</span>
                          <span className="text-primary-container">
                            EXAMPLE
                          </span>
                        </div>
                        <div className="text-[10px] text-on-surface-variant">
                          Illustrative interface only
                        </div>
                      </div>
                    </div>
                    <div className="pt-space-xs border-t border-outline-variant/15 flex items-center justify-between">
                      <span className="font-tech-label text-[10px] text-on-surface-variant">
                        PROJECT CONTRIBUTION
                      </span>
                      <span className="material-symbols-outlined text-[18px] text-secondary">
                        verified_user
                      </span>
                    </div>
                  </Reveal>

                  <Reveal
                    className="project-card p-space-md lg:p-space-lg rounded-xl bg-surface-container-low border border-outline-variant/20 flex flex-col justify-between space-y-space-md hover:border-outline-variant/40 transition-all"
                    delay={0.24}
                  >
                    <div className="space-y-space-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-status-pill text-status-pill px-2 py-0.5 rounded bg-surface-container-high text-tertiary-fixed-dim uppercase font-bold">
                          HOSPITAL SYSTEM
                        </span>
                        <span className="font-tech-label text-[10px] text-on-surface-variant">
                          PROJECT EXPERIENCE
                        </span>
                      </div>
                      <h4 className="font-headline-sm text-headline-sm text-primary font-bold">
                        SIMRS RSKB Ropanasuri
                      </h4>
                      <p className="font-tech-label text-[11px] text-on-surface-variant">
                        Hospital Management Information System.
                      </p>
                      <div className="flex flex-wrap gap-1 pt-1">
                        <span className="px-2 py-0.5 rounded bg-surface-container-lowest font-tech-label text-[9px] text-on-surface-variant">
                          HTML
                        </span>
                        <span className="px-2 py-0.5 rounded bg-surface-container-lowest font-tech-label text-[9px] text-on-surface-variant">
                          CSS
                        </span>
                        <span className="px-2 py-0.5 rounded bg-surface-container-lowest font-tech-label text-[9px] text-on-surface-variant">
                          JavaScript
                        </span>
                        <span className="px-2 py-0.5 rounded bg-surface-container-lowest font-tech-label text-[9px] text-on-surface-variant">
                          Bootstrap
                        </span>
                        <span className="px-2 py-0.5 rounded bg-surface-container-lowest font-tech-label text-[9px] text-on-surface-variant">
                          Laravel
                        </span>
                        <span className="px-2 py-0.5 rounded bg-surface-container-lowest font-tech-label text-[9px] text-on-surface-variant">
                          Git
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant pt-2">
                        Web application supporting hospital information
                        management.
                      </p>

                      <div className="p-space-sm rounded bg-surface-container-lowest border border-outline-variant/15 flex items-center justify-between">
                        <div>
                          <div className="font-tech-label text-[10px] text-on-surface-variant">
                            SYSTEM INTERFACE
                          </div>
                          <div className="font-code-inline text-[12px] text-primary font-bold">
                            HOSPITAL WORKFLOWS
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="px-2 py-0.5 rounded bg-primary-container text-on-primary-container font-tech-label text-[9px] font-bold">
                            UI PREVIEW
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="pt-space-xs border-t border-outline-variant/15 flex items-center justify-between">
                      <span className="font-tech-label text-[10px] text-on-surface-variant">
                        PROJECT EXPERIENCE
                      </span>
                      <span className="material-symbols-outlined text-[18px] text-primary-container">
                        local_hospital
                      </span>
                    </div>
                  </Reveal>

                  <Reveal
                    className="project-card p-space-md lg:p-space-lg rounded-xl bg-surface-container-low border border-outline-variant/20 flex flex-col justify-between space-y-space-md hover:border-outline-variant/40 transition-all"
                    delay={0.3}
                  >
                    <div className="space-y-space-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-status-pill text-status-pill px-2 py-0.5 rounded bg-surface-container-high text-primary-container uppercase font-bold">
                          COMPANY WEBSITE
                        </span>
                        <span className="font-tech-label text-[10px] text-on-surface-variant">
                          CV INNOVATIVE TECH SOLUTIONS
                        </span>
                      </div>
                      <h4 className="font-headline-sm text-headline-sm text-primary font-bold">
                        Innovative Tech Solutions
                      </h4>
                      <p className="font-tech-label text-[11px] text-on-surface-variant">
                        Company website for presenting company information.
                      </p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant pt-2">
                        Contributed to the company website, helping present
                        Innovative Tech Solutions and its information online.
                      </p>
                    </div>
                    <div className="pt-space-xs border-t border-outline-variant/15 flex items-center justify-between">
                      <span className="font-tech-label text-[10px] text-on-surface-variant">
                        PROJECT CONTRIBUTION
                      </span>
                      <span className="material-symbols-outlined text-[18px] text-secondary">
                        language
                      </span>
                    </div>
                  </Reveal>
                </div>
              </div>
            </motion.section>

            <motion.section
              className="w-full scroll-mt-32 px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl lg:py-space-2xl bg-surface-container-lowest border-t border-outline-variant/15"
              id="case-study-preview"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <div className="max-w-[1440px] mx-auto space-y-space-lg">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm border-b border-outline-variant/20 pb-space-md">
                  <div>
                    <span className="font-tech-label text-tech-label text-primary-container uppercase tracking-widest block mb-1">
                      02 // PROJECT DETAILS
                    </span>
                    <h2 className="font-headline-lg text-headline-md lg:text-headline-lg text-primary tracking-tight">
                      Project Details: E-Depot
                    </h2>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                    A mobile app for ordering gallon water from multiple depots,
                    built with Flutter and Dart.
                  </p>
                </div>

                <div className="flex flex-wrap gap-1 p-1 rounded-lg bg-surface-container-low border border-outline-variant/20 w-fit">
                  <button
                    type="button"
                    className={`cs-tab-btn px-space-md py-2 rounded font-tech-label text-tech-label tracking-wider uppercase transition-all ${caseStudyTab === "overview" ? "bg-primary-container text-on-primary-container font-bold" : "text-on-surface-variant hover:text-on-surface"}`}
                    data-cs-tab="overview"
                    onClick={() => setCaseStudyTab("overview")}
                  >
                    01 // Project overview
                  </button>
                  <button
                    type="button"
                    className={`cs-tab-btn px-space-md py-2 rounded font-tech-label text-tech-label tracking-wider uppercase transition-all ${caseStudyTab === "features" ? "bg-primary-container text-on-primary-container font-bold" : "text-on-surface-variant hover:text-on-surface"}`}
                    data-cs-tab="features"
                    onClick={() => setCaseStudyTab("features")}
                  >
                    02 // Project focus
                  </button>
                  <button
                    type="button"
                    className={`cs-tab-btn px-space-md py-2 rounded font-tech-label text-tech-label tracking-wider uppercase transition-all ${caseStudyTab === "technical" ? "bg-primary-container text-on-primary-container font-bold" : "text-on-surface-variant hover:text-on-surface"}`}
                    data-cs-tab="technical"
                    onClick={() => setCaseStudyTab("technical")}
                  >
                    03 // Technologies
                  </button>
                  <button
                    type="button"
                    className={`cs-tab-btn px-space-md py-2 rounded font-tech-label text-tech-label tracking-wider uppercase transition-all ${caseStudyTab === "challenges" ? "bg-primary-container text-on-primary-container font-bold" : "text-on-surface-variant hover:text-on-surface"}`}
                    data-cs-tab="challenges"
                    onClick={() => setCaseStudyTab("challenges")}
                  >
                    04 // Contribution notes
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">
                  <div className="lg:col-span-7 bg-surface-container-low rounded-xl border border-outline-variant/25 p-space-md lg:p-space-lg min-h-[360px]">
                    <div
                      className={`cs-pane space-y-space-sm ${caseStudyTab === "overview" ? "" : "hidden"}`}
                      id="cs-pane-overview"
                    >
                      <h3 className="font-headline-sm text-headline-sm text-primary">
                        Mobile App for Multi-Depot Gallon Water Orders
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        E-Depot brings gallon-water ordering from multiple
                        depots into one mobile experience. The project uses
                        Flutter and Dart, with BLoC and RESTful API integration.
                      </p>
                      <div className="p-space-sm rounded bg-surface-container border border-outline-variant/20 space-y-2">
                        <span className="font-tech-label text-[11px] text-secondary uppercase font-bold block">
                          Illustrative order-flow preview:
                        </span>
                        <div className="grid grid-cols-3 gap-2 text-center font-code-inline text-[11px]">
                          <div className="p-2 rounded bg-surface-container-high text-on-surface">
                            Mobile app
                            <br />
                            <span className="text-primary-container">
                              Browse depots
                            </span>
                          </div>
                          <div className="p-2 rounded bg-surface-container-high text-on-surface">
                            Order
                            <br />
                            <span className="text-tertiary-fixed-dim">
                              Select quantity
                            </span>
                          </div>
                          <div className="p-2 rounded bg-surface-container-high text-on-surface">
                            Preview
                            <br />
                            <span className="text-secondary">Example only</span>
                          </div>
                        </div>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        The diagram is illustrative; it does not represent a
                        live service or a verified production workflow.
                      </p>
                    </div>

                    <div
                      className={`cs-pane space-y-space-sm ${caseStudyTab === "features" ? "" : "hidden"}`}
                      id="cs-pane-features"
                    >
                      <h3 className="font-headline-sm text-headline-sm text-primary">
                        Project Focus
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm pt-1">
                        <div className="p-space-sm rounded bg-surface-container border border-outline-variant/15 space-y-1">
                          <div className="font-tech-label text-[11px] text-primary-container font-bold">
                            MULTIPLE DEPOTS
                          </div>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">
                            The application supports gallon water orders from
                            different depots.
                          </p>
                        </div>
                        <div className="p-space-sm rounded bg-surface-container border border-outline-variant/15 space-y-1">
                          <div className="font-tech-label text-[11px] text-secondary font-bold">
                            MOBILE APPLICATION
                          </div>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">
                            The project is a mobile application developed as
                            part of professional project work.
                          </p>
                        </div>
                        <div className="p-space-sm rounded bg-surface-container border border-outline-variant/15 space-y-1">
                          <div className="font-tech-label text-[11px] text-tertiary-fixed-dim font-bold">
                            API INTEGRATION
                          </div>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">
                            RESTful API integration is part of the project
                            technologies listed in the CV.
                          </p>
                        </div>
                        <div className="p-space-sm rounded bg-surface-container border border-outline-variant/15 space-y-1">
                          <div className="font-tech-label text-[11px] text-primary font-bold">
                            FEATURE DEVELOPMENT
                          </div>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">
                            Contribution included mobile application feature and
                            interface development.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`cs-pane space-y-space-sm ${caseStudyTab === "technical" ? "" : "hidden"}`}
                      id="cs-pane-technical"
                    >
                      <h3 className="font-headline-sm text-headline-sm text-primary">
                        Technologies &amp; Contribution
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        Flutter and Dart power the mobile app, while BLoC helps
                        organize feature state and RESTful APIs connect the
                        interface with application data.
                      </p>
                      <div className="p-space-sm rounded bg-surface-container-lowest font-code-inline text-[11px] leading-relaxed text-on-surface-variant border border-outline-variant/20 space-y-1">
                        <div className="text-secondary">
                          // Technologies listed for this mobile project
                        </div>
                        <div className="text-primary-container">
                          Flutter · Dart · BLoC
                        </div>
                        <div className="text-primary-container">
                          RESTful API integration
                        </div>
                        <div>
                          Contribution: application features and interface
                          development
                        </div>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        My contribution focused on building mobile features and
                        connecting the app experience with RESTful APIs.
                      </p>
                    </div>

                    <div
                      className={`cs-pane space-y-space-sm ${caseStudyTab === "challenges" ? "" : "hidden"}`}
                      id="cs-pane-challenges"
                    >
                      <h3 className="font-headline-sm text-headline-sm text-primary">
                        Project Contribution
                      </h3>
                      <div className="space-y-space-sm">
                        <div className="p-space-sm rounded bg-surface-container border-l-2 border-primary-container space-y-1">
                          <div className="font-tech-label text-[11px] text-primary uppercase font-bold">
                            APPLICATION DEVELOPMENT
                          </div>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">
                            Contributed to the development of a Flutter mobile
                            application for ordering gallon water from multiple
                            depots.
                          </p>
                          <div className="font-tech-label text-[11px] text-primary-container">
                            TECHNOLOGIES
                          </div>
                          <p className="font-body-sm text-[12px] text-on-surface-variant">
                            Flutter, Dart, BLoC, and RESTful API integration
                            support the mobile application.
                          </p>
                        </div>
                        <div className="p-space-sm rounded bg-surface-container border-l-2 border-secondary space-y-1">
                          <div className="font-tech-label text-[11px] text-primary uppercase font-bold">
                            DEVELOPMENT FOCUS
                          </div>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">
                            Developing marketplace features and a clear mobile
                            ordering experience for customers.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 bg-surface-container rounded-xl border border-outline-variant/30 p-space-md lg:p-space-lg space-y-space-md shadow-xl">
                    <div className="flex items-center justify-between border-b border-outline-variant/20 pb-2">
                      <div>
                        <span className="font-tech-label text-[10px] text-secondary uppercase font-bold block">
                          ILLUSTRATIVE UI SIMULATION
                        </span>
                        <div className="font-headline-sm text-base text-primary font-bold">
                          Depot order preview
                        </div>
                      </div>
                      <span className="font-status-pill text-status-pill px-2 py-0.5 rounded bg-primary-container/20 text-primary-container border border-primary-container/40">
                        SIMULATOR
                      </span>
                    </div>

                    <div className="relative w-full h-44 rounded-lg bg-surface-container-lowest border border-outline-variant/20 flex items-center justify-center overflow-hidden">
                      <div className="absolute w-16 h-16 rounded-full border border-outline-variant/30"></div>
                      <div className="absolute w-28 h-28 rounded-full border border-outline-variant/25"></div>
                      <div className="absolute w-40 h-40 rounded-full border border-outline-variant/20"></div>

                      <div className="relative z-10 flex flex-col items-center">
                        <span className="w-3 h-3 rounded-full bg-primary-container animate-pulse shadow-[0_0_12px_rgba(202,243,0,0.8)]"></span>
                        <span className="font-tech-label text-[9px] text-primary-container mt-1 font-bold">
                          PREVIEW CENTER
                        </span>
                      </div>

                      <div className="absolute top-8 left-12 flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim"></span>
                        <span className="font-tech-label text-[8px] text-on-surface-variant">
                          Example depot 1
                        </span>
                      </div>
                      <div className="absolute bottom-10 right-10 flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim"></span>
                        <span className="font-tech-label text-[8px] text-on-surface-variant">
                          Example depot 2
                        </span>
                      </div>
                      <div
                        className={`absolute top-6 right-8 flex items-center gap-1 transition-opacity ${exampleDepotCount === "3" ? "" : "opacity-20"}`}
                        id="sim-node-c"
                      >
                        <span className="w-2 h-2 rounded-full bg-secondary"></span>
                        <span className="font-tech-label text-[8px] text-on-surface-variant">
                          Example depot 3
                        </span>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <span className="font-tech-label text-[11px] text-on-surface-variant">
                        SELECT EXAMPLE MARKERS:
                      </span>
                      <div className="grid grid-cols-3 gap-2">
                        <button
                          type="button"
                          className={`geo-btn py-1.5 rounded font-tech-label text-tech-label transition-all ${exampleDepotCount === "1" ? "bg-primary-container text-on-primary-container font-bold" : "bg-surface-container-high hover:bg-surface-bright text-on-surface"}`}
                          aria-pressed={exampleDepotCount === "1"}
                          onClick={() => setExampleDepotCount("1")}
                        >
                          ONE
                        </button>
                        <button
                          type="button"
                          className={`geo-btn py-1.5 rounded font-tech-label text-tech-label transition-all ${exampleDepotCount === "2" ? "bg-primary-container text-on-primary-container font-bold" : "bg-surface-container-high hover:bg-surface-bright text-on-surface"}`}
                          aria-pressed={exampleDepotCount === "2"}
                          onClick={() => setExampleDepotCount("2")}
                        >
                          TWO
                        </button>
                        <button
                          type="button"
                          className={`geo-btn py-1.5 rounded font-tech-label text-tech-label transition-all ${exampleDepotCount === "3" ? "bg-primary-container text-on-primary-container font-bold" : "bg-surface-container-high hover:bg-surface-bright text-on-surface"}`}
                          aria-pressed={exampleDepotCount === "3"}
                          onClick={() => setExampleDepotCount("3")}
                        >
                          THREE
                        </button>
                      </div>
                    </div>

                    <div className="p-space-sm rounded bg-surface-container-low border border-outline-variant/15 space-y-1 font-tech-label text-[11px]">
                      <div className="flex justify-between">
                        <span className="text-on-surface-variant">
                          EXAMPLE MARKERS:
                        </span>
                        <span
                          className="text-primary-container font-bold"
                          id="geo-nodes-count"
                        >
                          {exampleDepotCount} ILLUSTRATIVE DEPOTS
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-on-surface-variant">
                          PREVIEW MODE:
                        </span>
                        <span
                          className="text-on-surface font-bold"
                          id="geo-eta"
                        >
                          Static illustration
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-on-surface-variant">
                          LIVE DATA:
                        </span>
                        <span className="text-secondary font-bold">
                          Not connected
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            <motion.section
              className="w-full scroll-mt-32 px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl lg:py-space-2xl bg-surface border-t border-outline-variant/15"
              id="technical-playground"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <div className="max-w-[1440px] mx-auto space-y-space-xl">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm border-b border-outline-variant/20 pb-space-md">
                  <div>
                    <span className="font-tech-label text-tech-label text-primary-container uppercase tracking-widest block mb-1">
                      03 // METHODOLOGY &amp; ENGINE ROOM
                    </span>
                    <h2 className="font-headline-lg text-headline-md lg:text-headline-lg text-primary tracking-tight">
                      Tech Stack
                    </h2>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                    Explore separate examples of my frontend web development
                    with React and mobile app development with Flutter.
                  </p>
                </div>

                <div className="space-y-space-md">
                  <div
                    className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm"
                    aria-label="Technical development tracks"
                  >
                    <button
                      type="button"
                      aria-pressed={playgroundTrack === "frontend"}
                      className={`text-left p-space-sm rounded-lg border transition-colors ${playgroundTrack === "frontend" ? "bg-primary-container text-on-primary-container border-primary-container" : "bg-surface-container-low hover:bg-surface-container text-on-surface border-outline-variant/20"}`}
                      onClick={() => setPlaygroundTrack("frontend")}
                    >
                      <span className="font-tech-label text-sm font-bold block">
                        Frontend Web Developer
                      </span>
                      <span className="font-body-sm text-[11px] block mt-1">
                        React.js, components, hooks &amp; web APIs
                      </span>
                    </button>
                    <button
                      type="button"
                      aria-pressed={playgroundTrack === "mobile"}
                      className={`text-left p-space-sm rounded-lg border transition-colors ${playgroundTrack === "mobile" ? "bg-primary-container text-on-primary-container border-primary-container" : "bg-surface-container-low hover:bg-surface-container text-on-surface border-outline-variant/20"}`}
                      onClick={() => setPlaygroundTrack("mobile")}
                    >
                      <span className="font-tech-label text-sm font-bold block">
                        Mobile App Developer
                      </span>
                      <span className="font-body-sm text-[11px] block mt-1">
                        Flutter, Dart, BLoC &amp; mobile API integration
                      </span>
                    </button>
                  </div>
                  {playgroundTrack === "frontend" && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      <button
                        type="button"
                        aria-pressed={activeStage === "1"}
                        className={`stage-btn text-left p-space-sm rounded-lg transition-all ${activeStage === "1" ? "bg-primary-container text-on-primary-container" : "bg-surface-container-low hover:bg-surface-container text-on-surface-variant border border-outline-variant/20"}`}
                        data-stage="1"
                        onClick={() => setActiveStage("1")}
                      >
                        <span className="font-tech-label text-[10px] block opacity-75">
                          STAGE 01
                        </span>
                        <span className="font-tech-label text-sm font-bold block mt-0.5">
                          Responsive UI
                        </span>
                        <span className="font-body-sm text-[11px] block mt-1">
                          HTML, CSS &amp; responsive layouts
                        </span>
                      </button>
                      <button
                        type="button"
                        aria-pressed={activeStage === "2"}
                        className={`stage-btn text-left p-space-sm rounded-lg transition-all ${activeStage === "2" ? "bg-primary-container text-on-primary-container" : "bg-surface-container-low hover:bg-surface-container text-on-surface-variant border border-outline-variant/20"}`}
                        data-stage="2"
                        onClick={() => setActiveStage("2")}
                      >
                        <span className="font-tech-label text-[10px] block opacity-75">
                          STAGE 02
                        </span>
                        <span
                          className={`font-tech-label text-sm font-bold block mt-0.5 ${activeStage === "2" ? "text-on-primary-container" : "text-on-surface"}`}
                        >
                          React Components
                        </span>
                        <span className="font-body-sm text-[11px] block mt-1">
                          Props &amp; reusable UI
                        </span>
                      </button>
                      <button
                        type="button"
                        aria-pressed={activeStage === "3"}
                        className={`stage-btn text-left p-space-sm rounded-lg transition-all ${activeStage === "3" ? "bg-primary-container text-on-primary-container" : "bg-surface-container-low hover:bg-surface-container text-on-surface-variant border border-outline-variant/20"}`}
                        data-stage="3"
                        onClick={() => setActiveStage("3")}
                      >
                        <span className="font-tech-label text-[10px] block opacity-75">
                          STAGE 03
                        </span>
                        <span
                          className={`font-tech-label text-sm font-bold block mt-0.5 ${activeStage === "3" ? "text-on-primary-container" : "text-on-surface"}`}
                        >
                          React Hooks
                        </span>
                        <span className="font-body-sm text-[11px] block mt-1">
                          useState &amp; useEffect
                        </span>
                      </button>
                      <button
                        type="button"
                        aria-pressed={activeStage === "4"}
                        className={`stage-btn text-left p-space-sm rounded-lg transition-all ${activeStage === "4" ? "bg-primary-container text-on-primary-container" : "bg-surface-container-low hover:bg-surface-container text-on-surface-variant border border-outline-variant/20"}`}
                        data-stage="4"
                        onClick={() => setActiveStage("4")}
                      >
                        <span className="font-tech-label text-[10px] block opacity-75">
                          STAGE 04
                        </span>
                        <span
                          className={`font-tech-label text-sm font-bold block mt-0.5 ${activeStage === "4" ? "text-on-primary-container" : "text-on-surface"}`}
                        >
                          RESTful APIs
                        </span>
                        <span className="font-body-sm text-[11px] block mt-1">
                          JavaScript &amp; JSON handling
                        </span>
                      </button>
                    </div>
                  )}

                  <div className="rounded-xl bg-surface-container-lowest border border-outline-variant/30 overflow-hidden shadow-2xl">
                    <div className="px-space-md py-2.5 bg-surface-container border-b border-outline-variant/20 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-2.5 h-2.5 rounded-full inline-block ${playgroundTrack === "frontend" ? "bg-primary-container" : "bg-secondary"}`}
                        ></span>
                        <span
                          className="font-tech-label text-tech-label text-primary font-bold"
                          id="stage-title"
                        >
                          {currentStage.title}
                        </span>
                      </div>
                      <span
                        className="font-status-pill text-status-pill px-2 py-0.5 rounded bg-surface-container-high text-secondary"
                        id="stage-badge"
                      >
                        ILLUSTRATIVE EXAMPLE
                      </span>
                    </div>
                    <div className="p-space-md lg:p-space-lg grid grid-cols-1 lg:grid-cols-12 gap-space-md items-start">
                      <div className="lg:col-span-5 space-y-space-xs">
                        <span className="font-tech-label text-[10px] text-primary-container uppercase font-bold">
                          CODE EXAMPLE // ILLUSTRATIVE
                        </span>
                        <motion.h4
                          key={`stage-heading-${playgroundTrack}-${activeStage}`}
                          className="font-headline-sm text-headline-sm text-primary"
                          id="stage-heading"
                          initial={
                            prefersReducedMotion ? false : { opacity: 0, y: 5 }
                          }
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {currentStage.heading}
                        </motion.h4>
                        <motion.p
                          key={`stage-desc-${playgroundTrack}-${activeStage}`}
                          className="font-body-md text-body-md text-on-surface-variant"
                          id="stage-desc"
                          initial={
                            prefersReducedMotion ? false : { opacity: 0, y: 5 }
                          }
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {currentStage.desc}
                        </motion.p>
                        <div
                          className="flex flex-wrap gap-1.5 pt-2"
                          id="stage-pills"
                        >
                          {playgroundTrack === "frontend" ? (
                            <>
                              <span className="px-2 py-1 rounded bg-surface-container font-tech-label text-[10px] text-on-surface-variant">
                                React.js
                              </span>
                              <span className="px-2 py-1 rounded bg-surface-container font-tech-label text-[10px] text-on-surface-variant">
                                RESTful APIs
                              </span>
                            </>
                          ) : (
                            <>
                              <span className="px-2 py-1 rounded bg-surface-container font-tech-label text-[10px] text-on-surface-variant">
                                Flutter
                              </span>
                              <span className="px-2 py-1 rounded bg-surface-container font-tech-label text-[10px] text-on-surface-variant">
                                Dart
                              </span>
                              <span className="px-2 py-1 rounded bg-surface-container font-tech-label text-[10px] text-on-surface-variant">
                                BLoC
                              </span>
                              <span className="px-2 py-1 rounded bg-surface-container font-tech-label text-[10px] text-on-surface-variant">
                                RESTful APIs
                              </span>
                            </>
                          )}
                        </div>
                      </div>

                      <div className="lg:col-span-7 rounded-lg bg-surface-container-low border border-outline-variant/20 p-space-sm font-code-inline text-[12px] leading-relaxed overflow-x-auto text-on-surface-variant">
                        <motion.pre
                          key={`stage-code-${playgroundTrack}-${activeStage}`}
                          className="text-on-surface whitespace-pre-wrap"
                          id="stage-code"
                          initial={
                            prefersReducedMotion ? false : { opacity: 0 }
                          }
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          {currentStage.code}
                        </motion.pre>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-space-md pt-space-md border-t border-outline-variant/15">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs">
                    <div>
                      <span className="font-tech-label text-tech-label text-secondary uppercase tracking-wider block">
                        SKILLS &amp; DEVELOPMENT PRACTICES
                      </span>
                      <h3 className="font-headline-sm text-headline-sm text-primary">
                        Core Skills
                      </h3>
                    </div>
                    <div
                      className="flex flex-wrap gap-1 p-1 rounded-lg bg-surface-container-low border border-outline-variant/20"
                      aria-label="Filter skills"
                    >
                      <button
                        type="button"
                        aria-pressed={techFilter === "all"}
                        className={`tech-filter-btn px-space-sm py-1 rounded font-tech-label text-[11px] ${techFilter === "all" ? "bg-primary-container text-on-primary-container font-bold" : "text-on-surface-variant hover:text-on-surface"}`}
                        onClick={() => setTechFilter("all")}
                      >
                        ALL
                      </button>
                      <button
                        type="button"
                        aria-pressed={techFilter === "frontend"}
                        className={`tech-filter-btn px-space-sm py-1 rounded font-tech-label text-[11px] ${techFilter === "frontend" ? "bg-primary-container text-on-primary-container font-bold" : "text-on-surface-variant hover:text-on-surface"}`}
                        onClick={() => setTechFilter("frontend")}
                      >
                        WEB
                      </button>
                      <button
                        type="button"
                        aria-pressed={techFilter === "flutter"}
                        className={`tech-filter-btn px-space-sm py-1 rounded font-tech-label text-[11px] ${techFilter === "flutter" ? "bg-primary-container text-on-primary-container font-bold" : "text-on-surface-variant hover:text-on-surface"}`}
                        onClick={() => setTechFilter("flutter")}
                      >
                        FLUTTER
                      </button>
                      <button
                        type="button"
                        aria-pressed={techFilter === "backend"}
                        className={`tech-filter-btn px-space-sm py-1 rounded font-tech-label text-[11px] ${techFilter === "backend" ? "bg-primary-container text-on-primary-container font-bold" : "text-on-surface-variant hover:text-on-surface"}`}
                        onClick={() => setTechFilter("backend")}
                      >
                        API &amp; BACKEND
                      </button>
                      <button
                        type="button"
                        aria-pressed={techFilter === "tools"}
                        className={`tech-filter-btn px-space-sm py-1 rounded font-tech-label text-[11px] ${techFilter === "tools" ? "bg-primary-container text-on-primary-container font-bold" : "text-on-surface-variant hover:text-on-surface"}`}
                        onClick={() => setTechFilter("tools")}
                      >
                        TOOLS &amp; PRACTICES
                      </button>
                    </div>
                  </div>
                  <div
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-space-xs"
                    id="tech-badge-container"
                  >
                    {skillItems.map(({ name, category, description }) => (
                      <div
                        className={`tech-chip p-space-sm rounded bg-surface-container-low border border-outline-variant/20 hover:border-primary-container/50 transition-all ${techFilter === "all" || techFilter === category ? "" : "hidden"}`}
                        data-cat={category}
                        key={name}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-tech-label text-tech-label text-primary font-bold">
                            {name}
                          </span>
                          <SkillIcon name={name} />
                        </div>
                        <div className="font-body-sm text-[11px] text-on-surface-variant mt-1">
                          {description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>

            <motion.section
              className="w-full scroll-mt-32 px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl lg:py-space-2xl bg-surface-container-lowest border-t border-outline-variant/15"
              id="experience-timeline"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <div className="max-w-[1440px] mx-auto space-y-space-xl">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm border-b border-outline-variant/20 pb-space-md">
                  <div>
                    <span className="font-tech-label text-tech-label text-primary-container uppercase tracking-widest block mb-1">
                      04 // TRACK RECORD &amp; ROLES
                    </span>
                    <h2 className="font-headline-lg text-headline-md lg:text-headline-lg text-primary tracking-tight">
                      Professional Experience
                    </h2>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                    Selected professional roles in web and mobile application
                    development.
                  </p>
                </div>

                <div className="space-y-space-md relative before:absolute before:inset-0 before:left-3 md:before:left-4 before:w-[1px] before:bg-outline-variant/25">
                  <Reveal
                    className="timeline-entry relative pl-8 md:pl-10 space-y-2"
                    delay={0.06}
                  >
                    <div className="absolute left-1.5 md:left-2.5 top-2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-primary-container border-4 border-surface shadow-md"></div>
                    <div className="p-space-md rounded-xl bg-surface-container-low border border-outline-variant/25 space-y-space-xs hover:border-primary-container/40 transition-colors">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="font-headline-sm text-base lg:text-lg text-primary font-bold">
                          CV Innovative Tech Solutions
                        </span>
                        <span className="font-tech-label text-tech-label px-2 py-0.5 rounded bg-surface-container-high text-primary-container">
                          PROFESSIONAL EXPERIENCE
                        </span>
                      </div>
                      <div className="font-tech-label text-[12px] text-secondary">
                        Frontend Web Developer &amp; Flutter Mobile Developer
                      </div>
                      <div className="font-tech-label text-[11px] text-on-surface-variant">
                        September 2024 – October 2025
                      </div>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        Developed responsive web applications using HTML5, CSS3,
                        JavaScript (ES6+), Tailwind, Bootstrap, and React.js,
                        plus cross-platform Flutter applications. Built reusable
                        React components with Hooks and integrated RESTful APIs.
                        Optimized asynchronous mobile data handling to improve
                        screen load times by 25%. Contributed to Balian,
                        E-Depot, Siladu, and the company website; supported
                        Google Play Store deployment. Also worked on feature
                        development, debugging, code optimization, and Git
                        version control.
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        <span className="px-2 py-0.5 rounded bg-surface-container-lowest font-tech-label text-[10px] text-on-surface-variant">
                          Flutter
                        </span>
                        <span className="px-2 py-0.5 rounded bg-surface-container-lowest font-tech-label text-[10px] text-on-surface-variant">
                          React.js
                        </span>
                        <span className="px-2 py-0.5 rounded bg-surface-container-lowest font-tech-label text-[10px] text-on-surface-variant">
                          React Hooks
                        </span>
                        <span className="px-2 py-0.5 rounded bg-surface-container-lowest font-tech-label text-[10px] text-on-surface-variant">
                          JavaScript (ES6+)
                        </span>
                        <span className="px-2 py-0.5 rounded bg-surface-container-lowest font-tech-label text-[10px] text-on-surface-variant">
                          Tailwind
                        </span>
                        <span className="px-2 py-0.5 rounded bg-surface-container-lowest font-tech-label text-[10px] text-on-surface-variant">
                          Bootstrap
                        </span>
                        <span className="px-2 py-0.5 rounded bg-surface-container-lowest font-tech-label text-[10px] text-on-surface-variant">
                          RESTful APIs
                        </span>
                        <span className="px-2 py-0.5 rounded bg-surface-container-lowest font-tech-label text-[10px] text-on-surface-variant">
                          Git
                        </span>
                        <span className="px-2 py-0.5 rounded bg-surface-container-lowest font-tech-label text-[10px] text-on-surface-variant">
                          Google Play Console
                        </span>
                      </div>
                    </div>
                  </Reveal>

                  <Reveal
                    className="timeline-entry relative pl-8 md:pl-10 space-y-2"
                    delay={0.14}
                  >
                    <div className="absolute left-1.5 md:left-2.5 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-secondary border-2 border-surface"></div>
                    <div className="p-space-md rounded-xl bg-surface-container-low border border-outline-variant/25 space-y-space-xs hover:border-secondary/40 transition-colors">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="font-headline-sm text-base lg:text-lg text-primary font-bold">
                          RSKB Ropanasuri
                        </span>
                        <span className="font-tech-label text-tech-label px-2 py-0.5 rounded bg-surface-container-high text-tertiary-fixed-dim">
                          PROFESSIONAL EXPERIENCE
                        </span>
                      </div>
                      <div className="font-tech-label text-[12px] text-tertiary-fixed-dim">
                        Frontend Web Developer
                      </div>
                      <div className="font-tech-label text-[11px] text-on-surface-variant">
                        August 2023 – March 2024
                      </div>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        Developed front-end interfaces for the SIMRS web
                        application using HTML, CSS, JavaScript, Bootstrap,
                        Laravel, and Git.
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        <span className="px-2 py-0.5 rounded bg-surface-container-lowest font-tech-label text-[10px] text-on-surface-variant">
                          HTML
                        </span>
                        <span className="px-2 py-0.5 rounded bg-surface-container-lowest font-tech-label text-[10px] text-on-surface-variant">
                          CSS
                        </span>
                        <span className="px-2 py-0.5 rounded bg-surface-container-lowest font-tech-label text-[10px] text-on-surface-variant">
                          JavaScript
                        </span>
                        <span className="px-2 py-0.5 rounded bg-surface-container-lowest font-tech-label text-[10px] text-on-surface-variant">
                          Bootstrap
                        </span>
                        <span className="px-2 py-0.5 rounded bg-surface-container-lowest font-tech-label text-[10px] text-on-surface-variant">
                          Laravel
                        </span>
                        <span className="px-2 py-0.5 rounded bg-surface-container-lowest font-tech-label text-[10px] text-on-surface-variant">
                          Git
                        </span>
                      </div>
                    </div>
                  </Reveal>

                  <Reveal
                    className="timeline-entry relative pl-8 md:pl-10 space-y-2"
                    delay={0.22}
                  >
                    <div className="absolute left-1.5 md:left-2.5 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-outline border-2 border-surface"></div>
                    <div className="p-space-md rounded-xl bg-surface-container-low border border-outline-variant/25 space-y-space-xs hover:border-outline/40 transition-colors">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="font-headline-sm text-base lg:text-lg text-primary font-bold">
                          PT Argenesia
                        </span>
                        <span className="font-tech-label text-tech-label px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant">
                          PROFESSIONAL EXPERIENCE
                        </span>
                      </div>
                      <div className="font-tech-label text-[12px] text-on-surface-variant">
                        Frontend Web Developer
                      </div>
                      <div className="font-tech-label text-[11px] text-on-surface-variant">
                        February 2023 – March 2024
                      </div>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        Developed responsive web application interfaces based on
                        client requirements using React.js, JavaScript (ES6+),
                        HTML5, CSS3, Tailwind, and Bootstrap. Built reusable
                        React components with React Hooks, implemented
                        responsive layouts, and integrated RESTful APIs.
                        Collaborated with backend developers, QA engineers, and
                        project managers using Git and Agile methodologies.
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        <span className="px-2 py-0.5 rounded bg-surface-container-lowest font-tech-label text-[10px] text-on-surface-variant">
                          React.js &amp; Hooks
                        </span>
                        <span className="px-2 py-0.5 rounded bg-surface-container-lowest font-tech-label text-[10px] text-on-surface-variant">
                          Tailwind &amp; Bootstrap
                        </span>
                        <span className="px-2 py-0.5 rounded bg-surface-container-lowest font-tech-label text-[10px] text-on-surface-variant">
                          RESTful APIs
                        </span>
                        <span className="px-2 py-0.5 rounded bg-surface-container-lowest font-tech-label text-[10px] text-on-surface-variant">
                          Git &amp; Agile
                        </span>
                      </div>
                    </div>
                  </Reveal>
                  <Reveal
                    className="timeline-entry relative pl-8 md:pl-10 space-y-2"
                    delay={0.3}
                  >
                    <div className="absolute left-1.5 md:left-2.5 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-outline border-2 border-surface"></div>
                    <div className="p-space-md rounded-xl bg-surface-container-low border border-outline-variant/25 space-y-space-xs hover:border-outline/40 transition-colors">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="font-headline-sm text-base lg:text-lg text-primary font-bold">
                          Teaching Factory Universitas Negeri Padang
                        </span>
                        <span className="font-tech-label text-tech-label px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant">
                          PROFESSIONAL EXPERIENCE
                        </span>
                      </div>
                      <div className="font-tech-label text-[12px] text-secondary">
                        Frontend Web Developer
                      </div>
                      <div className="font-tech-label text-[11px] text-on-surface-variant">
                        February 2022 – January 2023
                      </div>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        Developed web application interfaces and features using
                        HTML, CSS, JavaScript, and Bootstrap; integrated APIs
                        with backend services. Contributed to the FIP UNP, MNK
                        Group, and Akreasi websites.
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        <span className="px-2 py-0.5 rounded bg-surface-container-lowest font-tech-label text-[10px] text-on-surface-variant">
                          HTML
                        </span>
                        <span className="px-2 py-0.5 rounded bg-surface-container-lowest font-tech-label text-[10px] text-on-surface-variant">
                          CSS
                        </span>
                        <span className="px-2 py-0.5 rounded bg-surface-container-lowest font-tech-label text-[10px] text-on-surface-variant">
                          JavaScript
                        </span>
                        <span className="px-2 py-0.5 rounded bg-surface-container-lowest font-tech-label text-[10px] text-on-surface-variant">
                          Bootstrap
                        </span>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            </motion.section>

            <motion.section
              className="w-full scroll-mt-32 px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl lg:py-space-2xl bg-surface border-t border-outline-variant/15"
              id="about-capabilities"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <div className="max-w-[1440px] mx-auto space-y-space-xl">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm border-b border-outline-variant/20 pb-space-md">
                  <div>
                    <span className="font-tech-label text-tech-label text-primary-container uppercase tracking-widest block mb-1">
                      05 // CORE PHILOSOPHY
                    </span>
                    <h2 className="font-headline-lg text-headline-md lg:text-headline-lg text-primary tracking-tight">
                      About &amp; Architectural Approach
                    </h2>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                    Frontend Web Developer and Flutter Mobile Developer
                    experienced in responsive web and mobile application
                    development.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">
                  <div className="lg:col-span-5 p-space-md lg:p-space-lg rounded-xl bg-surface-container-low border border-outline-variant/25 space-y-space-sm">
                    <div className="flex items-center gap-space-md">
                      <img
                        alt="Rahmad Avriantias Aulia"
                        className="h-28 w-28 shrink-0 rounded-xl border border-outline-variant/30 object-cover object-[center_18%] shadow-lg sm:h-32 sm:w-32"
                        src="/IMG_9408.JPG.jpeg"
                      />
                      <div className="space-y-2">
                        <div className="flex items-center gap-space-xs">
                          <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                          <span className="font-tech-label text-tech-label text-on-surface-variant uppercase">
                            ENGINEER BIOGRAPHY
                          </span>
                        </div>
                        <h3 className="font-headline-md text-headline-sm text-primary font-bold">
                          Rahmad Avriantias Aulia
                        </h3>
                      </div>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      Frontend Web Developer and Flutter Mobile Developer with
                      hands-on experience building responsive web and mobile
                      applications for real-world projects. Experienced in
                      reusable UI components, component state, responsive
                      layouts, RESTful API integration, debugging, code
                      optimization, and Git version control.
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      S1 Pendidikan Teknik Informatika, Universitas Negeri
                      Padang. September 2020 – August 2025.
                    </p>
                    <div className="p-space-sm rounded bg-surface-container border border-outline-variant/20 flex items-center justify-between">
                      <span className="font-tech-label text-[11px] text-on-surface-variant">
                        PADANG, SUMATERA BARAT, ID
                      </span>
                      <span className="font-tech-label text-[11px] text-primary-container font-bold">
                        GPA 3.29/4.00
                      </span>
                    </div>
                  </div>

                  <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                    <div className="p-space-md rounded-xl bg-surface-container-low border border-outline-variant/25 space-y-1 hover:border-primary-container/40 transition-colors">
                      <div className="font-tech-label text-[11px] text-primary-container uppercase font-bold">
                        01 // FRONTEND
                      </div>
                      <h4 className="font-headline-sm text-base text-primary font-bold">
                        Reusable UI Components
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Develop reusable React functional components with props,
                        state, and React Hooks.
                      </p>
                    </div>
                    <div className="p-space-md rounded-xl bg-surface-container-low border border-outline-variant/25 space-y-1 hover:border-secondary/40 transition-colors">
                      <div className="font-tech-label text-[11px] text-secondary uppercase font-bold">
                        02 // WEB DEVELOPMENT
                      </div>
                      <h4 className="font-headline-sm text-base text-primary font-bold">
                        Responsive Layouts
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Build responsive web interfaces using HTML, CSS,
                        JavaScript, React.js, Bootstrap, and Tailwind.
                      </p>
                    </div>
                    <div className="p-space-md rounded-xl bg-surface-container-low border border-outline-variant/25 space-y-1 hover:border-primary-container/40 transition-colors">
                      <div className="font-tech-label text-[11px] text-primary-container uppercase font-bold">
                        03 // MOBILE DEVELOPMENT
                      </div>
                      <h4 className="font-headline-sm text-base text-primary font-bold">
                        Flutter App Development
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Build cross-platform mobile apps with Flutter and Dart,
                        manage app state with BLoC, and integrate RESTful APIs.
                      </p>
                    </div>
                    <div className="p-space-md rounded-xl bg-surface-container-low border border-outline-variant/25 space-y-1 hover:border-tertiary-fixed-dim/40 transition-colors">
                      <div className="font-tech-label text-[11px] text-tertiary-fixed-dim uppercase font-bold">
                        04 // INTEGRATION
                      </div>
                      <h4 className="font-headline-sm text-base text-primary font-bold">
                        RESTful API Integration
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Integrate web and mobile interfaces with RESTful APIs
                        and handle JSON data asynchronously.
                      </p>
                    </div>
                    <div className="p-space-md rounded-xl bg-surface-container-low border border-outline-variant/25 space-y-1 hover:border-outline-variant/40 transition-colors">
                      <div className="font-tech-label text-[11px] text-on-surface-variant uppercase font-bold">
                        05 // PRACTICES
                      </div>
                      <h4 className="font-headline-sm text-base text-primary font-bold">
                        Debugging &amp; Collaboration
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Apply debugging, code optimization, Git version control,
                        and Agile/Scrum collaboration.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-space-md rounded-xl bg-surface-container-low border border-outline-variant/25 space-y-space-xs">
                  <div className="font-tech-label text-tech-label text-secondary uppercase tracking-wider">
                    CAMPUS ORGANIZATIONAL EXPERIENCE
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-headline-sm text-base text-primary font-bold">
                      Kelas Coding Universitas Negeri Padang
                    </h3>
                    <span className="font-tech-label text-[11px] text-on-surface-variant">
                      October 2024 – December 2024
                    </span>
                  </div>
                  <div className="font-tech-label text-[12px] text-secondary">
                    Instructor
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Shared HTML, CSS, and JavaScript fundamentals, guided
                    participants through landing-page projects, and prepared
                    learning materials and assessments.
                  </p>
                </div>

                <div className="p-space-md rounded-xl bg-surface-container-lowest border border-outline-variant/25">
                  <span className="font-tech-label text-tech-label text-on-surface-variant uppercase block mb-space-sm">
                    EDUCATION &amp; ACHIEVEMENTS
                  </span>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-space-sm text-center">
                    <div className="p-space-xs rounded bg-surface-container-low border border-outline-variant/15">
                      <span className="font-tech-label text-xs text-primary font-bold block">
                        Universitas Negeri Padang
                      </span>
                      <span className="font-body-sm text-[11px] text-on-surface-variant">
                        S1 Pendidikan Teknik Informatika
                      </span>
                    </div>
                    <div className="p-space-xs rounded bg-surface-container-low border border-outline-variant/15">
                      <span className="font-tech-label text-xs text-primary-container font-bold block">
                        Study Period
                      </span>
                      <span className="font-body-sm text-[11px] text-on-surface-variant">
                        September 2020 – August 2025
                      </span>
                    </div>
                    <div className="p-space-xs rounded bg-surface-container-low border border-outline-variant/15">
                      <span className="font-tech-label text-xs text-secondary font-bold block">
                        BNSP Certification
                      </span>
                      <span className="font-body-sm text-[11px] text-on-surface-variant">
                        Junior Web Programmer
                      </span>
                    </div>
                    <div className="p-space-xs rounded bg-surface-container-low border border-outline-variant/15">
                      <span className="font-tech-label text-xs text-tertiary-fixed-dim font-bold block">
                        Google Play Store
                      </span>
                      <span className="font-body-sm text-[11px] text-on-surface-variant">
                        Deployment achievement · 5-star average review · 2024
                      </span>
                    </div>
                    <div className="p-space-xs rounded bg-surface-container-low border border-outline-variant/15">
                      <span className="font-tech-label text-xs text-primary font-bold block">
                        Full-Stack Bootcamp
                      </span>
                      <span className="font-body-sm text-[11px] text-on-surface-variant">
                        Laravel &amp; Flutter e-Wallet Apps · 2025
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            <motion.section
              className="w-full scroll-mt-32 px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl lg:py-space-2xl bg-surface-container-lowest border-t border-outline-variant/15 relative"
              id="contact-cta"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-primary-container/10 blur-[130px] pointer-events-none"></div>
              <div className="max-w-[1440px] mx-auto space-y-space-lg relative z-10">
                <div>
                  <span className="font-tech-label text-tech-label text-primary-container uppercase tracking-widest block mb-1">
                    06 // CONTACT
                  </span>
                  <h2 className="font-headline-lg text-headline-md lg:text-headline-lg text-primary tracking-tight">
                    Contact Rahmad
                  </h2>
                  <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-2">
                    For inquiries about frontend web development or Flutter
                    mobile applications, get in touch by email.
                  </p>
                </div>

                <div className="rounded-xl bg-surface-container border-2 border-outline-variant/40 p-space-md lg:p-space-xl shadow-2xl space-y-space-md">
                  <div className="flex items-center gap-2 font-status-pill text-status-pill text-primary-container tracking-wider uppercase">
                    <span className="w-2 h-2 rounded-full bg-primary-container animate-ping inline-block"></span>
                    <span>CONTACT: EMAIL ADDRESS</span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm p-space-sm sm:p-space-md rounded-lg bg-surface-container-lowest border border-outline-variant/30">
                    <div className="space-y-0.5">
                      <span className="font-tech-label text-[10px] text-on-surface-variant uppercase">
                        EMAIL
                      </span>
                      <div
                        className="font-headline-sm text-base sm:text-headline-sm text-primary font-bold"
                        id="email-address-text"
                      >
                        rahmadavriantias06@gmail.com
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        className={`inline-flex items-center gap-1.5 px-space-md py-2.5 rounded font-tech-label text-tech-label uppercase transition-all ${copyState === "copied" ? "bg-primary-container text-on-primary-container" : "bg-surface-container-high hover:bg-surface-bright text-on-surface"}`}
                        id="copy-email-btn"
                        onClick={copyEmail}
                      >
                        <span className="material-symbols-outlined text-[16px]">
                          content_copy
                        </span>
                        <span id="copy-btn-text" aria-live="polite">
                          {copyState === "copied"
                            ? "COPIED!"
                            : copyState === "error"
                              ? "Copy failed - select email"
                              : "Tap to Copy Email"}
                        </span>
                      </button>
                      <a
                        className="p-2.5 rounded bg-surface-container-high hover:bg-surface-bright text-primary-container transition-colors"
                        href="mailto:rahmadavriantias06@gmail.com"
                        title="Open Mail Client"
                      >
                        <span className="material-symbols-outlined text-[18px]">
                          send
                        </span>
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-space-md pt-space-xs border-t border-outline-variant/15">
                    <div className="flex flex-wrap items-center gap-space-sm">
                      <a
                        className="inline-flex items-center gap-2 px-space-md py-3 rounded-lg bg-primary-container text-on-primary-container font-tech-label text-tech-label uppercase font-bold tracking-wider hover:opacity-90 transition-opacity"
                        href="/Rahmad-Avriantias-Aulia-CV.pdf"
                        download
                      >
                        <span className="material-symbols-outlined text-[18px]">
                          download
                        </span>
                        Download CV (PDF)
                      </a>
                      <a
                        className="inline-flex items-center gap-2 px-space-md py-3 rounded-lg bg-surface-container-low hover:bg-surface-container-high text-on-surface font-tech-label text-tech-label uppercase tracking-wider border border-outline-variant/30 transition-colors"
                        href="https://wa.me/6282287444224"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="material-symbols-outlined text-[18px]">
                          chat
                        </span>
                        WhatsApp
                      </a>
                    </div>
                    <div className="flex items-center gap-space-sm">
                      <a
                        className="px-space-sm py-2 rounded bg-surface-container-low hover:bg-surface-container-high text-on-surface font-tech-label text-tech-label border border-outline-variant/30 hover:border-primary-container/40 transition-colors"
                        href="https://github.com/avriantias"
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub
                      </a>
                      <a
                        className="px-space-sm py-2 rounded bg-surface-container-low hover:bg-surface-container-high text-on-surface font-tech-label text-tech-label border border-outline-variant/30 hover:border-primary-container/40 transition-colors"
                        href="https://www.linkedin.com/in/rahmad-avriantias-aulia"
                        target="_blank"
                        rel="noreferrer"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          </div>
        </main>
        <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/15">
          <div className="w-full px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl">
            <div className="flex flex-wrap items-center justify-between gap-space-md pb-space-lg border-b border-outline-variant/15">
              <div className="flex flex-wrap items-center gap-space-md font-status-pill text-status-pill text-on-surface-variant">
                <span className="flex items-center gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                  PERSONAL PORTFOLIO
                </span>
                <span className="text-outline-variant">//</span>
                <span>PROFILE: FRONTEND &amp; FLUTTER</span>
                <span className="text-outline-variant">//</span>
                <span className="text-secondary">
                  RESPONSIVE WEB &amp; MOBILE APPS
                </span>
                <span className="text-outline-variant">//</span>
                <span>PORTFOLIO: REACT &amp; TAILWIND</span>
              </div>
              <a
                className="inline-flex items-center gap-2 px-space-sm py-1.5 rounded bg-surface-container-high hover:bg-surface-container text-on-surface font-tech-label text-tech-label transition-colors"
                href="#top"
              >
                <span className="material-symbols-outlined text-[16px]">
                  north
                </span>
                BACK TO TOP
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-space-lg pt-space-lg items-start">
              <div className="md:col-span-4 space-y-space-xs">
                <div className="font-headline-sm text-headline-sm text-primary">
                  Rahmad Avriantias Aulia
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">
                  Frontend web and Flutter mobile application development using
                  responsive interfaces and API integration.
                </p>
              </div>
              <div className="md:col-span-4">
                <div className="font-tech-label text-tech-label uppercase text-on-surface-variant mb-space-xs tracking-wider">
                  Navigation Blueprint
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary-container transition-colors"
                    href="#featured-projects"
                  >
                    Work
                  </a>
                  <a
                    className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary-container transition-colors"
                    href="#case-study-preview"
                  >
                    Case Studies
                  </a>
                  <a
                    className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary-container transition-colors"
                    href="#technical-playground"
                  >
                    Playground
                  </a>
                  <a
                    className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary-container transition-colors"
                    href="#experience-timeline"
                  >
                    Experience
                  </a>
                  <a
                    className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary-container transition-colors"
                    href="#about-capabilities"
                  >
                    Capabilities
                  </a>
                  <a
                    className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary-container transition-colors"
                    href="#contact-cta"
                  >
                    Direct Contact
                  </a>
                </div>
              </div>
              <div className="md:col-span-4 flex flex-col md:items-end space-y-space-xs">
                <div className="font-tech-label text-tech-label uppercase text-on-surface-variant tracking-wider">
                  Transmissions &amp; Network
                </div>
                <div className="flex items-center gap-space-sm">
                  <a
                    className="px-space-sm py-1 rounded bg-surface-container-low hover:bg-surface-container text-on-surface font-tech-label text-tech-label border border-outline-variant/30 hover:border-primary-container/40 transition-colors"
                    href="https://github.com/avriantias"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    className="px-space-sm py-1 rounded bg-surface-container-low hover:bg-surface-container text-on-surface font-tech-label text-tech-label border border-outline-variant/30 hover:border-primary-container/40 transition-colors"
                    href="https://www.linkedin.com/in/rahmad-avriantias-aulia"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                  <a
                    className="px-space-sm py-1 rounded bg-surface-container-low hover:bg-surface-container text-on-surface font-tech-label text-tech-label border border-outline-variant/30 hover:border-primary-container/40 transition-colors"
                    href="mailto:rahmadavriantias06@gmail.com"
                  >
                    EMAIL
                  </a>
                </div>
                <span className="font-code-inline text-code-inline text-on-surface-variant/70 mt-2">
                  BASED IN PONDOK AREN, TANGERANG SELATAN
                </span>
              </div>
            </div>
            <div className="mt-space-lg pt-space-md border-t border-outline-variant/10 flex flex-wrap justify-between items-center gap-space-xs">
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                © Rahmad Avriantias Aulia.
              </p>
              <p className="font-status-pill text-status-pill text-on-surface-variant uppercase tracking-widest">
                FRONTEND WEB &amp; FLUTTER MOBILE DEVELOPMENT
              </p>
            </div>
          </div>
        </footer>
      </div>
    </MotionConfig>
  );
}

export default App;
