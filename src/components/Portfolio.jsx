import React, { useState } from 'react';
import { FaExternalLinkAlt, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Img from '../assets/image/Hero.png';
import Invertory from '../assets/image/inventory.png';

function Portfolio() {
  const projectData = [
    {
      id: "01",
      title: "Online Education Platform",
      desc: "A responsive online education website with a modern layout, course browsing, and student-facing pages.",
      tags: ["HTML5", "CSS3", "JavaScript"],
      image: Img, 
      link: "#"
    },
    {
      id: "02",
      title: "Inventory Management System",
      desc: "A full-stack inventory management app developed using Laravel, Bootstrap, and MySQL for business analysis.",
      tags: ["Laravel", "Bootstrap", "PHP", "MySQL"],
      image: Invertory, 
      link: "https://github.com/mdshibgatullah/sales-Inventory-Project"
    },
    {
      id: "03",
      title: "Tree Information Blog",
      desc: "A dedicated blog website focusing purely on nature, tree species identification, and biological environments.",
      tags: ["React.js", "TailwindCSS", "Vite"],
      image: Img, 
      link: "#"
    },
    {
      id: "04",
      title: "E-Commerce Frontend Dashboard",
      desc: "A clean and lightning-fast e-commerce shopping client built with fluid UI components and state logic.",
      tags: ["React.js", "Bootstrap", "Vite"],
      image: "", 
      link: "#"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 3;

  const nextSlide = () => {
    if (currentIndex < projectData.length - cardsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="bg-raised projects-section" id="projects">
      <div className="container">
        
       
    

      <div className="section-head reveal">
          <div className="eyebrow">Portfolio</div>
          <h2>My <span className="accent">Recent Projects</span></h2>
          <p>A selection of builds that show how I turn a design into a working, responsive product.</p>
        </div>

       
        <div className="project-slider-window">
          <div 
            className="row g-4 project-slider-track"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / cardsPerPage)}%)`,
              transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
            }}
          >
            {projectData.map((project) => (
              <div key={project.id} className="col-lg-4 col-md-6 slider-card-item">
                <div className="project-card">
                  
                  
                  <div className="project-thumb">
                    {project.image && typeof project.image === 'string' ? (
                      <img src={project.image} alt={project.title} className="project-img" />
                    ) : (
                      <span className="num-mark">{project.id}</span>
                    )}
                    
                    <div className="project-overlay">
                      <a href={project.link} className="project-link-icon" target="_blank" rel="noreferrer">
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>

                  
                  <div className="project-body">
                    <h3>{project.title}</h3>
                    <p>{project.desc}</p>
                    <div className="project-tags">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

       
        <div className="slider-arrows-bottom mt-5 d-flex justify-content-center">
          <button 
            onClick={prevSlide} 
            className={`arrow-btn ${currentIndex === 0 ? 'disabled' : ''}`}
            disabled={currentIndex === 0}
          >
            <FaArrowLeft />
          </button>
          <button 
            onClick={nextSlide} 
            className={`arrow-btn ${currentIndex >= projectData.length - cardsPerPage ? 'disabled' : ''}`}
            disabled={currentIndex >= projectData.length - cardsPerPage}
          >
            <FaArrowRight />
          </button>
        </div>

      </div>
    </section>
  );
}

export default Portfolio;