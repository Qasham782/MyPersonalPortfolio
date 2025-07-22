import React from "react";
import "../Css/Resume.css"; // Update this to match the new design

const Resume = () => {
  return (
    <div className="resume-container">
      <header className="resume-header">
        <div>
          <h1 className="name">QASHAM AHMED</h1>
        </div>
        <div className="contact">
          <p>Karachi, Sindh | Pakistan</p>
          <p>0325-2997781 | <a href="mailto:qashamahmed210@gmail.com">qashamahmed210@gmail.com</a></p>
        </div>
        <p className="summary">
          Aspiring full stack developer with strong skills in the MERN stack and hands-on experience through various academic and personal projects. Seeking an opportunity to contribute to dynamic development teams while continuously learning and growing in modern web development tech.
        </p>
      </header>

      <main className="resume-main">
        <section className="section">
          <h3 className="section-title">EXPERIENCE</h3>
          <h4>COLLEGE PROJECT CONTRIBUTOR</h4>
          <p><strong>Aptech Institute | Karachi | 2022 – 2023</strong></p>
          <p>
            Collaborated with classmates on academic projects involving full-stack features and real-time data.
            Key roles included backend API creation (Express.js), database design (MongoDB), and frontend layout (React.js).
            Projects covered domains like movie booking, climate dashboards, and inventory management.
          </p>
        </section>

        <section className="section">
          <h3 className="section-title">EDUCATION</h3>
          <p><strong>Diploma in Software Engineering</strong><br />
            Aptech, Karachi — 3-Year Program<br />
            <em>Completed: 2025</em>
          </p>
          <p><strong>Matriculation (Secondary School Certificate)</strong><br />
            <em>Completed: 2021</em>
          </p>
        </section>

        <section className="section">
          <h3 className="section-title">SKILLS</h3>
          <ul className="skills-list">
            <li><strong>Frontend:</strong> React.js, HTML5, CSS3, JavaScript, Bootstrap</li>
            <li><strong>Backend:</strong> Node.js, Express.js, MongoDB</li>
            <li><strong>MERN Stack:</strong> MongoDB, Express.js, React.js, Node.js</li>
            <li><strong>Tools:</strong> Git & GitHub, Visual Studio Code, Firebase, Postman, Netlify</li>
            <li><strong>Language:</strong> Urdu, English</li>
            <li><strong>Soft Skills:</strong> Problem-solving, Agile Collaboration, UI/UX Awareness, Debugging, Team Communication</li>
          </ul>
        </section>

        <section className="section">
          <h3 className="section-title">GitHub</h3>
          <a href="https://github.com/Qasham782" target="_blank" rel="noopener noreferrer">
            https://github.com/Qasham782
          </a>
        </section>
      </main>
    </div>
  );
};

export default Resume;
