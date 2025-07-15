import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../Css/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="navbar">
      <div className="navbar-left">
        <span className="blue-square"></span>
        <h1 className="namea">Qasham Ahmed</h1>
        <span className="divider">/</span>
        <span className="titles">Full Stack Developer</span>
      </div>

      <nav className={`navbar-right ${menuOpen ? "open" : ""}`}>
        <Link
          to="/"
          className={location.pathname === "/about" ? "active" : ""}
          onClick={() => setMenuOpen(false)}
        >
          About Me
        </Link>
        <Link
          to="/resume"
          className={location.pathname === "/resume" ? "active" : ""}
          onClick={() => setMenuOpen(false)}
        >
          Resume
        </Link>
        <Link
          to="/projects"
          className={location.pathname === "/projects" ? "active" : ""}
          onClick={() => setMenuOpen(false)}
        >
          Projects
        </Link>
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "active" : ""}
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </Link>
      </nav>

      <div
        className="menu-toggle"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        ☰
      </div>
    </header>
  );
};

export default Navbar;
