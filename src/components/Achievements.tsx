import "./styles/Career.css";

const Achievements = () => {
  return (
    <div className="career-section section-container" id="achievements">
      <div className="career-container">
        <h2>
          Achievements <span>&</span>
          <br /> Challenges
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Open Source Contributor</h4>
                <h5>GitHub (Global)</h5>
              </div>
            </div>
            <p>
              Authored and dynamically submitted <strong>35+ Pull Requests</strong> to major projects like Vue.js, React Native, and Webpack. Focused on documentation and core fixes to improve developer experience. 
              {" "}
              <a 
                href="https://github.com/pulls?q=is%3Apr+author%3AAkkiKrsingh2005+is%3Apublic" 
                target="_blank" 
                rel="noreferrer" 
                style={{color: '#00D1FF', textDecoration: 'none'}}
              >
                View my PRs on GitHub ↗
              </a>
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Hackathon Participant</h4>
                <h5>Newton School Of Technology</h5>
              </div>
            </div>
            <p>
              Developed a game from scratch with an amazing team! It was a fantastic experience that enhanced our collaboration and innovation skills. Looking forward to more challenges ahead! #Hackathon #Teamwork #GameDevelopment
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Overcoming Stage Fear</h4>
                <h5>The CareerTrek Company & NST</h5>
              </div>
            </div>
            <p>
              Played the role of a "BIHAR BOARD" student in a skit. Wrapping a turban symbolized stepping up, embracing challenges, and owning the moment. Overcoming stage fear is overwhelming, but with confidence, it turns into a powerful experience. #StageFear #Confidence #OvercomingChallenges
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Communication Skills Activity</h4>
                <h5>Experiential Learning</h5>
              </div>
            </div>
            <p>
              Participated in an intensive communication skills and experiential learning activity.{" "}
              <a 
                href="https://www.linkedin.com/posts/ankit-kumar-821003327_communicationskills-experientiallearning-activity-7299001049414070272-xMrq" 
                target="_blank" 
                rel="noreferrer" 
                style={{color: '#00D1FF', textDecoration: 'none'}}
              >
                View my experience on LinkedIn ↗
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
