import React, { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header id="header">
        <div className="container">
          <nav>
            <a href="#home" className="logo">Sifat<span className="dot">.</span></a>
            <div className="nav-links">
              <a href="#home">Home</a>
              <a href="#services">Services</a>
              <a href="#education">Education</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
            <a href="#contact" className="nav-cta">Let's talk</a>
            <button 
              className="burger" 
              onClick={() => setIsOpen(!isOpen)} 
              aria-label="Toggle menu"
            >
              <span></span><span></span><span></span>
            </button>
          </nav>
        </div>
      </header>

      <div className={`mobile-menu ${isOpen ? 'open' : ''}`} id="mobileMenu">
        <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
        <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
        <a href="#education" onClick={() => setIsOpen(false)}>Education</a>
        <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
      </div>
    </>
  );
}

export default Header;