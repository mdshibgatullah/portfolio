import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 pb-4">
          <a href="#home" className="logo">Sifat<span className="dot">.</span></a>
          <div className="footer-links">
            <a href="#services">Services</a>
            <a href="#education">Education</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
          <p>© 2026 <span className="accent">Md. Shibgatullah Sifat</span> — All rights reserved.</p>
          <p>Designed &amp; built with care.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;