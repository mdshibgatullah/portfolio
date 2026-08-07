import React, { useState, useEffect } from 'react';
import { FaExternalLinkAlt, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Ecommerce from '../assets/image/ecommerce.png';
import Invertory from '../assets/image/inventory.png';
import Furniture from '../assets/image/furniture.png';
import Education from '../assets/image/education.png';
import Luxastate from '../assets/image/luxastate.png';
import Brigate from '../assets/image/brigate.png';
import Calculator from '../assets/image/calculator.png';
import Beetls from '../assets/image/beetls.png';

function Project() {
  const projectData = [
    {
      id: "01",
      title: "Modern Fashion Store",
      desc: "Find stylish outfits, accessories, and essentials designed to elevate your everyday look.",
      tags: ["React", "Bootstrap", "CSS", "PHP Laravel"],
      image: Ecommerce, 
      link: "https://github.com/mdshibgatullah/ecommerce-backend"
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
      title: "Furniture E-Commerce Landing Page",
      desc: "A modern furniture e-commerce landing page featuring a dark hero banner, interactive product grid, feature blocks, customer review cards, and a clean, responsive layout.",
      tags: ["React.js", "TailwindCSS", "Vite"],
      image: Furniture, 
      link: "https://mdshibgatullah.github.io/Panto-Furniture/"
    },
    {
      id: "04",
      title: "Online Education Landing Page",
      desc: "A responsive online education website layout showcasing key platform stats, popular courses, instructor cards, testimonials, and a user registration form.",
      tags: ["React.js", "Bootstrap", "Vite"],
      image: Education, 
      link: "https://mdshibgatullah.github.io/onlineEducation/"
    },

    {
      id: "05",
      title: "Property Rental Landing Page",
      desc: "A modern real estate landing page featuring apartment listings, company stats, property categories, service highlights, and agent profiles.",
      tags: ["HTML", "Bootstrap", "CSS"],
      image: Luxastate, 
      link: "https://mdshibgatullah.github.io/Luxestate/"
    },
    {
      id: "06",
      title: "Construction & Architecture Website Layout",
      desc: "A responsive corporate construction website layout built with bold typography, orange accent CTA buttons, pricing tiers, and professional team showcases.",
      tags: ["HTML", "CSS"],
      image: Brigate, 
      link: "https://mdshibgatullah.github.io/brigate/"
    },
    {
      id: "07",
      title: "Calculator",
      desc: "A sleek, dark-mode calculator UI designed with modern neumorphic button depth and vibrant green and orange accents.",
      tags: ["HTML", "CSS", "Javascript"],
      image: Calculator, 
      link: "https://mdshibgatullah.github.io/Calculator/"
    },
    {
      id: "08",
      title: "Creative Agency Landing Page",
      desc: "A corporate agency layout featuring a full-width hero header, service section, design portfolio showcase, team member cards, and testimonials.",
      tags: ["HTML", "CSS", "Bootstrap"],
      image: Beetls, 
      link: "https://mdshibgatullah.github.io/Beatls/"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const getCardsPerPage = () => {
    if (window.innerWidth <= 767) return 1; 
    if (window.innerWidth <= 991) return 2; 
    return 3; 
  };

  const [cardsPerPage, setCardsPerPage] = useState(getCardsPerPage());

  useEffect(() => {
    const handleResize = () => {
      const newCardsPerPage = getCardsPerPage();
      setCardsPerPage(newCardsPerPage);
      
      if (currentIndex > projectData.length - newCardsPerPage) {
        setCurrentIndex(Math.max(0, projectData.length - newCardsPerPage));
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex, projectData.length]);

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

export default Project;