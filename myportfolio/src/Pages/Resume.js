import React from "react";
import "../Css/Resume.css";
import avatar from "../assets/profile.jpg";

const Resume = () => {
  const skills = [
    { name: "ReactJS", level: 90 },
    { name: "Node.js / Express.js", level: 80 },
    { name: "MongoDB", level: 70 },
    { name: "HTML/CSS", level: 85 },
  ];

  const projects = [
    {
      title: "🎮 Movie Booking App",
      desc:
        "A web app for browsing, selecting, and booking movie tickets with showtime filtering and pricing.",
    },
    {
      title: "🌡️ Climate Prediction Dashboard (with ML Model)",
      desc:
        "Integrated a Python ML model using Flask backend and displayed real-time predictions with charts in React frontend.",
    },
    {
      title: "📄 Portfolio Website",
      desc:
        "Personal portfolio site built with React showcasing projects, resume, and contact form using EmailJS.",
    },
  ];

  return (
    <>
      <div className="resume-wrapper" id="resume">
        <aside className="left-col">
          <div className="top-bar" />
          <figure className="avatar-wrapper">
            <img src={avatar} alt="Qasham Ahmed" />
          </figure>

          <section>
            <h3 className="section-title">Contact</h3>
            <address>
              Karachi, Sindh<br />
              qashamaptech@gmail.com<br />
              03252997781<br />
              Nazimabad no 2
            </address>
          </section>

          <section>
            <h3 className="section-title">Education</h3>
            <p>
              <strong>Diploma in Software Engineering</strong><br /><br />
              Aptech, Karachi — 3-year program<br />
              Completed: 2025
            </p>
            <p>
              <strong>Matriculation (Secondary School Certificate)</strong><br /><br />
              Completed: 2021
            </p>
          </section>

          <section>
            <h3 className="section-title">Skills</h3>
            {skills.map((s) => (
              <div className="skill" key={s.name}>
                <span>{s.name}</span>
                <div className="bar-bg">
                  <div className="bar-fill" style={{ width: `${s.level}%` }} />
                </div>
              </div>
            ))}
          </section>

          <div className="blue-circle side" />
        </aside>

        <main className="right-col">
          <span className="role-badge">Full Stack Developer</span>
          <div className="blue-circle top-right" />

          <h1 className="names">
            Qasham Ahmed
          </h1>

          <section>
            <h3 className="section-title">Objective</h3>
            <p>
              Aspiring full stack developer with strong skills in the MERN stack
              and hands-on experience through various academic and personal
              projects. Seeking an opportunity to contribute to dynamic
              development teams while continuously learning and growing in modern
              web development technologies.
            </p>
          </section>

          <section>
            <h3 className="section-title">Projects</h3>
            {projects.map((p) => (
              <div className="project" key={p.title}>
                <strong>{p.title}</strong>
                <p>{p.desc}</p>
              </div>
            ))}
          </section>

          <section>
            <h3 className="section-title">Personal Attributes</h3>
            <ul className="attrs">
              <li>Passionate about clean code and UI/UX</li>
              <li>Quick learner and self-starter</li>
              <li>Strong problem-solving and debugging skills</li>
              <li>Effective communicator and team player</li>
            </ul>
          </section>

          <section className="final-info">
            <div>
              <h4>Languages</h4>
              English: Intermediate<br />
              Urdu: Native
            </div>
            <div>
              <h4>GitHub</h4>
              <a href="https://github.com/Qasham782" target="_blank" rel="noopener noreferrer">
                github.com/Qasham782
              </a>
            </div>
          </section>

          <div className="bottom-bar" />

          {/* Styled download button at the end */}
          <div className="download-wrapper">
            <a
              href="/assets/QashamResume.pdf"
              download="Qasham_Ahmed_Resume.pdf"
              className="download-btn styled"
            >
              📄 Download Resume as PDF
            </a>
          </div>
        </main>
      </div>
    </>
  );
};

export default Resume;
