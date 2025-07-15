import React from "react";
import "../Css/Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <p>
            © 2025 by Qasham Ahmed. <br />
            Powered and secured by React.
          </p>
        </div>
        <div className="footer-contact">
          <div>
            <strong>Call</strong>
            <br /> 0325-299-7781
          </div>
          <div>
            <strong>Write</strong>
            <br /> qashamaptech@gmail.com
          </div>
          <div>
            <strong>Follow</strong>
            <br />
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
