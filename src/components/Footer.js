import React from 'react';
import '../styles/Footer.css'; 
import { FaGithub, FaLinkedinIn, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          Designed and Developed by <span>Vansh Patel</span>
        </div>
        <div className="footer-center">
          © {new Date().getFullYear()} VP
        </div>
        <div className="footer-right">
          <a href="mailto:pvansh830@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
          <a href="https://www.linkedin.com/in/vansh-patel-72650b26a/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://github.com/patel-vansh1607" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/vansh-patel-72650b26a/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
