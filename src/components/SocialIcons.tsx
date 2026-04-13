import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes, TbX } from "react-icons/tb";
import { useEffect, useState } from "react";
import HoverLinks from "./HoverLinks";

const ResumeModal = ({ onClose }: { onClose: () => void }) => (
  <div className="resume-modal-overlay" onClick={onClose}>
    <div className="resume-modal" onClick={(e) => e.stopPropagation()}>
      <button className="resume-modal-close" onClick={onClose}><TbX /></button>

      {/* Header */}
      <div className="rm-header">
        <div>
          <h1 className="rm-name">Ankit Kumar</h1>
          <p className="rm-tagline">Aspiring AI/ML Engineer · B.Tech CS (AI/ML)</p>
        </div>
        <div className="rm-contacts">
          <a href="mailto:ak508887@gmail.com">ak508887@gmail.com</a>
          <a href="https://github.com/ankitkumar572005" target="_blank" rel="noreferrer">github.com/ankitkumar572005</a>
          <a href="https://www.linkedin.com/in/ankit-kumar-821003327/" target="_blank" rel="noreferrer">linkedin.com/in/ankit-kumar-821003327</a>
        </div>
      </div>

      <div className="rm-divider" />

      <div className="rm-body">
        {/* Left */}
        <div className="rm-left">

          <div className="rm-block">
            <h3 className="rm-block-title">Education</h3>
            <div className="rm-item">
              <div className="rm-item-row">
                <span className="rm-item-title">B.Tech in Computer Science (AI/ML)</span>
                <span className="rm-item-date">2024 – Present</span>
              </div>
              <span className="rm-item-sub">Newton School of Technology · 4th Semester</span>
              <p>Coursework: AI/ML, DSA, DBMS, Advanced Programming, Data Visualization.</p>
            </div>
          </div>

          <div className="rm-block">
            <h3 className="rm-block-title">Projects</h3>

            <div className="rm-item">
              <div className="rm-item-row">
                <span className="rm-item-title">AI RAG Navigator</span>
                <a href="https://akkikrsingh2005-ai-rag-navigator-app-5gfm3y.streamlit.app/" target="_blank" rel="noreferrer" className="rm-live">Live ↗</a>
              </div>
              <span className="rm-item-sub">LangChain v0.3 · Gemini 1.5 Flash · ChromaDB · Streamlit · Python 3.12</span>
              <p>RAG application enabling context-aware PDF conversations using LCEL, History-Aware Retrievers and vector embeddings.</p>
            </div>

            <div className="rm-item">
              <div className="rm-item-row">
                <span className="rm-item-title">Plant Health Vision</span>
                <a href="https://akkikrsingh2005-plant-health-vision-app-cuhriy.streamlit.app/" target="_blank" rel="noreferrer" className="rm-live">Live ↗</a>
              </div>
              <span className="rm-item-sub">TensorFlow 2.21 · MobileNetV2 · OpenCV · Streamlit · Python 3.13</span>
              <p>CNN-based system classifying 20+ plant diseases across 5 crop types with care recommendations.</p>
            </div>

            <div className="rm-item">
              <div className="rm-item-row">
                <span className="rm-item-title">AI Gesture OS Control</span>
                <a href="https://github.com/AkkiKrsingh2005/ai-gesture-os-control" target="_blank" rel="noreferrer" className="rm-live">GitHub ↗</a>
              </div>
              <span className="rm-item-sub">MediaPipe Tasks API · OpenCV · PyAutoGUI · Apple M3 Optimized</span>
              <p>Real-time HCI system with sub-20ms cursor control using hand landmark detection and motion smoothing.</p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="rm-right">

          <div className="rm-block">
            <h3 className="rm-block-title">Summary</h3>
            <p className="rm-summary">Aspiring AI/ML Engineer in 4th semester with hands-on experience in LLMs, computer vision, and deep learning. Built and deployed 3 production AI apps. Actively seeking AI/ML internship opportunities.</p>
          </div>

          <div className="rm-block">
            <h3 className="rm-block-title">Technical Skills</h3>
            <div className="rm-skills">
              <div className="rm-skill-row"><span className="rm-skill-label">Languages</span><span>Python · JavaScript · TypeScript · SQL</span></div>
              <div className="rm-skill-row"><span className="rm-skill-label">AI / ML</span><span>TensorFlow · LangChain · MediaPipe · Pandas · NumPy</span></div>
              <div className="rm-skill-row"><span className="rm-skill-label">Web & Tools</span><span>Streamlit · React · HTML · CSS · Git</span></div>
              <div className="rm-skill-row"><span className="rm-skill-label">Databases</span><span>ChromaDB · MySQL · MongoDB</span></div>
              <div className="rm-skill-row"><span className="rm-skill-label">Core CS</span><span>DSA · DBMS · OOP</span></div>
            </div>
          </div>

          <div className="rm-block">
            <h3 className="rm-block-title">Achievements</h3>
            <div className="rm-item">
              <div className="rm-item-row">
                <span className="rm-item-title">Open Source Contributor</span>
              </div>
              <p><strong>35+ Pull Requests</strong> to Vue.js, React Native, Webpack. Focused on core fixes and documentation.</p>
            </div>
            <div className="rm-item">
              <div className="rm-item-row">
                <span className="rm-item-title">Hackathon Participant</span>
                <span className="rm-item-date">NST</span>
              </div>
              <p>Built a full game from scratch in a team hackathon at Newton School of Technology.</p>
            </div>
          </div>

          <button className="rm-print-btn" onClick={() => window.print()}>
            ↓ Download PDF
          </button>
        </div>
      </div>
    </div>
  </div>
);

const SocialIcons = () => {
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;
    if (!social) return;

    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;
      if (!link) return;

      const rect = elem.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;
        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);
        requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x; mouseY = y;
        } else {
          mouseX = rect.width / 2; mouseY = rect.height / 2;
        }
      };

      document.addEventListener("mousemove", onMouseMove);
      updatePosition();
      return () => { elem.removeEventListener("mousemove", onMouseMove); };
    });
  }, []);

  // Lock scroll when modal open
  useEffect(() => {
    document.body.style.overflow = showResume ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [showResume]);

  return (
    <>
      <div className="icons-section">
        <div className="social-icons" data-cursor="icons" id="social">
          <span>
            <a href="https://github.com/ankitkumar572005" target="_blank">
              <FaGithub />
            </a>
          </span>
          <span>
            <a href="https://www.linkedin.com/in/ankit-kumar-821003327/" target="_blank">
              <FaLinkedinIn />
            </a>
          </span>
          <span>
            <a href="https://www.instagram.com/broankitcode/" target="_blank">
              <FaInstagram />
            </a>
          </span>
        </div>
        <button
          className="resume-button"
          onClick={() => setShowResume(true)}
          data-cursor="disable"
        >
          <HoverLinks text="RESUME" />
          <span><TbNotes /></span>
        </button>
      </div>

      {showResume && <ResumeModal onClose={() => setShowResume(false)} />}
    </>
  );
};

export default SocialIcons;
