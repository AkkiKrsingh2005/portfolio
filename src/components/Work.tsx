import { useState, useEffect, useRef, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";

const projects = [
  {
    title: "AI Crowd Density Analyzer",
    category: "AI & Computer Vision",
    description: "A real-time Computer Vision system utilizing YOLOv8 for human detection and tracking. Features dynamic density alerting and Streamlit web deployment.",
    tags: ["OpenCV", "YOLOv8", "Streamlit", "Python"],
    image: "/images/crowd_analysis.png",
    github: "https://github.com/ankitkumar572005/crowd-analysis-ai",
    demo: "https://crowd-analysis-ai.streamlit.app/",
    pinned: true,
    accent: "#3b82f6"
  },
  {
    title: "SmartFinance Dashboard",
    category: "Full-Stack Development",
    description: "A professional-grade personal finance tracker with real-time analytics. Built with a Node.js/Express REST API, React frontend, and a relational SQLite database.",
    tags: ["React", "Node.js", "Express", "SQLite", "REST API"],
    image: "/images/smart_finance.png",
    github: "https://github.com/ankitkumar572005/SmartFinance-App",
    demo: "https://smartfinance-app.vercel.app",
    pinned: true,
    accent: "#4f46e5"
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
    github: "https://github.com/AkkiKrsingh2005/amazone-ecommerce",
    demo: "https://akkikrsingh2005.github.io/amazone-ecommerce/",
    pinned: true,
    accent: "#f59e0b"
  }
];

const Work = () => {
  const [activeTab, setActiveTab] = useState("all");
  const sectionRef = useRef<HTMLDivElement>(null);

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(p => p.category.toLowerCase().includes(activeTab.toLowerCase()));

  return (
    <section className="work-section" id="work" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Work</h2>
          <div className="tab-filters">
            {["all", "AI", "Full-Stack"].map((tab) => (
              <button 
                key={tab}
                className={`tab-btn ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div className="project-card" key={index} style={{ "--accent": project.accent } as any}>
              <div className="project-image-container">
                <WorkImage src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <div className="project-category">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer" className="link-btn github">
                    GitHub
                  </a>
                  <a href={project.demo} target="_blank" rel="noreferrer" className="link-btn demo">
                    {project.demoLabel || "Live Demo"}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
