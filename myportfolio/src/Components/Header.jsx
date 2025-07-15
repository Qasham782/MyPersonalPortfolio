import React from "react";
import { useNavigate } from "react-router-dom";
import "../Css/Header.css";
import profileImg from "../assets/profile.jpg";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header-container">
      <div className="header-left">
        <img src={profileImg} alt="Qasham Ahmed" className="profile-img" />
        <h2>
          Qasham
          <br /> Ahmed
        </h2>
        <div className="underline"></div>
        <p className="title">Full-Stack Developer</p>
        <div className="social-icons">
          <a
            href="https://www.facebook.com/qashamahmed"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://github.com/Qasham782"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/qasham-ahmed-290a53318/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.instagram.com/qashamahmed/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className="header-right">
        <h3>This is Me. This is What I Create.</h3>
        <div className="header-buttons">
          <button className="filled-btn" onClick={() => navigate("/resume")}>
            Resume
          </button>
          <button
            className="outlined-btn"
            onClick={() => navigate("/projects")}
          >
            Projects
          </button>
        </div>
        <p>
          I'm a Full Stack Developer with a passion for building seamless,
          user-focused digital experiences. I specialize in developing robust
          front-end interfaces and powerful back-end systems that work together
          to create efficient, scalable web applications.
        </p>
        <p>
          Whether it's crafting responsive UI/UX designs or architecting secure
          APIs and databases, I bring both technical expertise and creative
          problem-solving to every project. I'm always eager to learn new
          technologies and turn ideas into functional, high-performing
          solutions.
        </p>
      </div>
    </div>
  );
};

export default Header;
