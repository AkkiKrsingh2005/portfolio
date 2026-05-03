import { useState, useEffect, useRef } from "react";
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
  }
];

const openSourceContributions = [
  {
    repo: "facebook/react-native",
    description: "Contributed to core documentation quality for one of the world's most popular mobile frameworks.",
    url: "https://github.com/facebook/react-native/pull/56280"
  },
  {
    repo: "vuejs/vue",
    description: "Helping maintain the documentation for the Vue 2 core, ensuring consistency for millions of developers.",
    url: "https://github.com/vuejs/vue/pull/13330"
  },
  {
    repo: "jestjs/jest",
    description: "Refining documentation for the most used JavaScript testing framework.",
    url: "https://github.com/jestjs/jest/pull/16019"
  },
  {
    repo: "npm/cli",
    description: "Active contributor to the Node Package Manager CLI documentation.",
    url: "https://github.com/npm/cli/pull/9165"
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
          <h2 className="section-title">Featured Projects</h2>
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

        {/* New Open Source Section */}
        <div className="os-section">
          <h2 className="section-title">🔥 Open Source Contributions</h2>
          <p className="os-intro">Active contributor to some of the world's most impactful developer tools.</p>
          <div className="os-grid">
            {openSourceContributions.map((os, i) => (
              <a href={os.url} target="_blank" rel="noreferrer" key={i} className="os-card">
                <div className="os-repo">{os.repo}</div>
                <p className="os-desc">{os.description}</p>
                <span className="os-view">View PR ↗</span>
              </a>
            ))}
          </div>
          <div className="os-footer">
            <a href="https://github.com/ankitkumar572005?tab=stars" target="_blank" rel="noreferrer" className="os-more">
              See 15+ more contributions on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
