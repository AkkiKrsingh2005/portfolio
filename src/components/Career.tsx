import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Relevant <span>Coursework</span>
          <br /> & Education
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Core Computer Science</h4>
                <h5>Data Structures & Algorithms</h5>
              </div>
            </div>
            <p>
              Advanced Data Structures & Algorithms (ADA), Advanced Programming, Artificial Intelligence.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI / ML & Data</h4>
                <h5>Machine Learning & Data Analysis</h5>
              </div>
            </div>
            <p>
              Artificial Intelligence & Machine Learning (AI/ML), Data Visualization & Analysis (DVA).
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Databases</h4>
                <h5>Database Management Systems</h5>
              </div>
            </div>
            <p>
              Database Management Systems (DBMS), SQL & Database Concepts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
