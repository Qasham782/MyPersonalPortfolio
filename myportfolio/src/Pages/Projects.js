import React from "react";
import "../Css/ProjectsSection.css"; // Ensure this path is correct based on your project structure
import project01 from "../assets/project1.jpg";
import project02 from "../assets/project2.jpg"; // add your second image
import project03 from "../assets/project3.jpg";
import Footer from "../Components/Footer";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      name: "Movie Booking Web-App",
      role: "MERN Stack",
      description:
        "A MERN stack-based movie booking web app that lets users explore movies, view showtimes, and book tickets with ease. Designed with a clean interface and efficient backend for smooth booking management.",
      image: project01,
    },
    {
      id: 2,
      name: "EarthScape Climate Agency",
      role: "Flask & Python",
      description:
        "A Flask and Python-based climate prediction web app powered by a machine learning model to forecast temperature trends. It offers interactive visualizations and a simple interface for analyzing past and future climate patterns.",
      image: project02,
    },
    {
      id: 3,
      name: "MOVIE LANDING PAGE",
      role: "HTML, CSS, JS, React",
      description:
        "A sleek movie landing page built with HTML, CSS, JavaScript, and React, designed to showcase featured films with engaging visuals and smooth navigation. Perfect for promoting the latest releases or upcoming shows. ",
      image: project03,
    },
  ];

  return (
    <section className="projects-wrapper" id="projects">
      <div className="projects-heading">
        <span className="blue-square" />
        <h2>Projects</h2>
      </div>

      <p className="projects-intro">
        Welcome to My Projects
        Explore a collection of my latest work, where creativity meets
        functionality. Click on each project to learn more about the
        technologies used, challenges solved, and the impact created. Dive in
        and see what I've been building!
      </p>

      {projects.map((project) => (
        <article className="project-card" key={project.id}>
          <div className="project-card-left">
            <span className="accent-bar" />
            <div className="project-content">
              <h3 className="project-name">{project.name}</h3>
              <p className="role-title">{project.role}</p>
              <p className="project-desc">{project.description}</p>
            </div>
          </div>

          <div className="project-card-right">
            <img src={project.image} alt={project.name} />
          </div>
        </article>
      ))}
    </section>
  );
};

export default ProjectsSection;
