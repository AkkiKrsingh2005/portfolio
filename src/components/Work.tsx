import { useState, useEffect, useRef, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";

const projects = [
  {
    title: "AI Crowd Density Analyzer",
    category: "AI & Computer Vision",
    description: "A high-performance real-time detection pipeline utilizing YOLOv8 to monitor public safety and density. Features optimized Non-Maximum Suppression (NMS) for precise counting in dense environments.",
    tags: ["YOLOv8", "OpenCV", "Streamlit", "Python"],
    image: "https://images.unsplash.com/photo-1508921234172-b68ed335b3e6?auto=format&fit=crop&q=80&w=1000",
    github: "https://github.com/ankitkumar572005/crowd-analysis-ai",
    demo: "https://crowd-analysis-ai.streamlit.app/",
    pinned: true,
    accent: "#3b82f6"
  },
  {
    title: "SmartFinance Dashboard",
    category: "Full-Stack Development",
    description: "A comprehensive analytics platform for financial tracking. Architected with a Node.js/Express REST API and a relational SQLite engine. Features a unique Offline-First architecture for 100% demo availability.",
    tags: ["React", "Node.js", "Express", "SQLite", "REST API"],
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=1000",
    github: "https://github.com/ankitkumar572005/SmartFinance-App",
    demo: "https://smartfinance-app.vercel.app",
    pinned: true,
    accent: "#4f46e5"
  },
  {
    title: "Open Source Contributions",
    category: "Community & Ecosystem",
    description: "Active contributor to global developer tools with successfully merged code in the NPM/Node ecosystem. Helping maintain core quality for frameworks like React Native, Vue, and Jest.",
    tags: ["React Native", "Vue.js", "Jest", "Node.js", "PR Merged"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000",
    github: "https://github.com/ankitkumar572005",
    demo: "https://github.com/npm/node-semver/pull/735",
    demoLabel: "✅ View Merged PR",
    pinned: true,
    accent: "#10b981"
  },
  {
    title: "AI RAG Navigator",
    category: "LLM & RAG Application",
    description: "An enterprise-grade document chat system using Retrieval-Augmented Generation. Upload PDFs and have intelligent, context-aware conversations powered by Google Gemini.",
    tags: ["LangChain v0.3", "Gemini 1.5 Flash", "ChromaDB", "Streamlit", "Python 3.12"],
    image: "/images/rag_navigator.png",
    github: "https://github.com/AkkiKrsingh2005/ai-rag-navigator",
    demo: "https://akkikrsingh2005-ai-rag-navigator-app-5gfm3y.streamlit.app/",
    pinned: true,
    accent: "#5eead4"
  },
  {
    title: "Plant Health Vision",
    category: "Computer Vision & Deep Learning",
    description: "A production-ready CNN-based application that detects 20+ plant diseases in real-time. Delivers instant diagnosis and actionable care recommendations.",
    tags: ["TensorFlow 2.21", "MobileNetV2", "OpenCV", "Streamlit", "Python 3.13"],
    image: "/images/plant_health.png",
    github: "https://github.com/AkkiKrsingh2005/plant-health-vision",
    demo: "https://akkikrsingh2005-plant-health-vision-app-cuhriy.streamlit.app/",
    pinned: true,
    accent: "#34d399"
  },
  {
    title: "AI Gesture OS Control",
    category: "Human-Computer Interaction (HCI)",
    description: "A real-time HCI system that maps hand landmarks to OS-level controls. Features sub-20ms latency cursor tracking and pinch-to-click gesture recognition.",
    tags: ["MediaPipe Tasks API", "OpenCV", "PyAutoGUI", "Apple M3 Optimized"],
    image: "/images/gesture_control.png",
    github: "https://github.com/AkkiKrsingh2005/ai-gesture-os-control",
    demo: "https://github.com/AkkiKrsingh2005/ai-gesture-os-control",
    demoLabel: "📂 View Project",
    pinned: true,
    accent: "#fb923c"
  },
  {
    title: "AI E-Commerce Architecture (Amazone)",
    category: "Full-Stack & Data pipelines",
    description: "An ultra-modern, dynamic shopping interface mimicking high-level market UX schemas, architected with scalable tracking metrics to ingest collaborative-filtering AI recommender systems.",
    tags: ["HTML5", "CSS3", "JavaScript ES6", "Session Tracking"],
    image: "/images/amazone_ecommerce.png",
    github: "https://github.com/ankitkumar572005/Shopping_Cart",
    demo: null,
    pinned: false,
    accent: "#f59e0b"
  },
  {
    title: "Foodies Travel Map",
    category: "Web Application",
    description: "An interactive web app for discovering and mapping food destinations with an intuitive, location-driven UI.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/images/foodies_travel_map.png",
    github: "https://github.com/vedbhadani/Foodies-Travel-Map",
    demo: null,
    pinned: false,
    accent: "#facc15"
  },
  {
    title: "Catch Falling Object",
    category: "Browser Game",
    description: "A real-time browser game with dynamic object spawning, score tracking, and progressively increasing difficulty.",
    tags: ["JavaScript", "HTML Canvas", "CSS"],
    image: "/images/falling_object_game.png",
    github: "https://github.com/AkkiKrsingh2005/catch-falling-object",
    demo: null,
    pinned: false,
    accent: "#818cf8"
  },
  {
    title: "PokePo",
    category: "Interactive Web App",
    description: "A dynamic Pokémon explorer with live API data-fetching, search functionality, and interactive card animations.",
    tags: ["JavaScript", "REST API", "HTML", "CSS"],
    image: "/images/pokepo_app.png",
    github: "https://github.com/AkkiKrsingh2005/PokePo",
    demo: null,
    pinned: false,
    accent: "#f472b6"
  }
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);

  const scrollToIndex = useCallback((index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const slides = container.querySelectorAll<HTMLElement>(".snap-slide");
    if (slides[index]) {
      slides[index].scrollIntoView({ behavior: "smooth", block: "start" });
      setCurrentIndex(index);
    }
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (isScrolling.current) return;
      const slides = container.querySelectorAll<HTMLElement>(".snap-slide");
      slides.forEach((slide, i) => {
        const rect = slide.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        if (Math.abs(rect.top - containerRect.top) < 50) {
          setCurrentIndex(i);
        }
      });
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="work-section" id="work">
      {/* Fixed Section Title */}
      <div className="work-title-bar">
        <h2>My <span>Work</span></h2>
        <p className="work-subtitle">{currentIndex + 1} / {projects.length}</p>
      </div>

      {/* Side Dot Navigation */}
      <div className="side-dots">
        {projects.map((proj, i) => (
          <button
            key={i}
            className={`side-dot ${i === currentIndex ? "side-dot-active" : ""} ${proj.pinned ? "side-dot-pinned" : ""}`}
            onClick={() => scrollToIndex(i)}
            aria-label={proj.title}
            title={proj.title}
            data-cursor="disable"
            style={i === currentIndex ? { background: proj.accent, borderColor: proj.accent, boxShadow: `0 0 10px ${proj.accent}80` } : {}}
          />
        ))}
      </div>

      {/* Scroll Container */}
      <div className="snap-container" ref={scrollRef}>
        {projects.map((proj, index) => (
          <div className="snap-slide" key={index}>
            <div className="slide-inner">

              {/* Left: Info */}
              <div className="slide-info">
                <div className="slide-number" style={{ color: proj.accent }}>
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </div>

                {proj.pinned && (
                  <div className="pinned-badge" style={{ borderColor: `${proj.accent}50`, color: proj.accent }}>
                    <span className="pinned-dot" style={{ background: proj.accent, boxShadow: `0 0 8px ${proj.accent}` }}></span>
                    {proj.category.includes("AI") ? "Featured AI/ML Project" : "Featured Engineering"}
                  </div>
                )}

                <h3 className="slide-title">{proj.title}</h3>
                <p className="slide-category" style={{ color: proj.accent }}>{proj.category}</p>
                <p className="slide-description">{proj.description}</p>

                <div className="tech-tags">
                  {proj.tags.map((tag, i) => (
                    <span key={i} className="tech-tag" style={{ borderColor: `${proj.accent}30` }}>{tag}</span>
                  ))}
                </div>

                <div className="cta-buttons">
                  {proj.github && (
                    <a href={proj.github} target="_blank" rel="noreferrer" className="link-btn github cta-btn cta-btn-outline">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                      GitHub
                    </a>
                  )}
                  {proj.demo && (
                    <a href={proj.demo} target="_blank" rel="noreferrer" className="link-btn demo cta-btn cta-btn-primary" style={{ background: `linear-gradient(135deg, ${proj.accent}, #8b5cf6)`, boxShadow: `0 4px 20px ${proj.accent}40` }}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                      {proj.demoLabel ?? "Live Demo"}
                    </a>
                  )}
                </div>
              </div>

              {/* Right: Image */}
              <div className="slide-image-wrap">
                <div className="slide-image-glow" style={{ background: `radial-gradient(circle, ${proj.accent}20 0%, transparent 70%)` }}></div>
                {proj.image
                  ? <WorkImage image={proj.image} alt={proj.title} />
                  : <div className="no-image-placeholder">No Preview</div>
                }
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Scroll hint */}
      {currentIndex < projects.length - 1 && (
        <div className="scroll-hint" onClick={() => scrollToIndex(currentIndex + 1)}>
          <span>Scroll</span>
          <div className="scroll-arrow">↓</div>
        </div>
      )}
    </div>
  );
};

export default Work;
