import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import Services from './components/Services';
// import Education from './components/Education';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';

function App() {
  useEffect(() => {

    const header = document.getElementById('header');
    const handleScroll = () => {
      if (window.scrollY > 40) {
        header?.classList.add('scrolled');
      } else {
        header?.classList.remove('scrolled');
      }
    };


    const revealEls = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('in');
            }, index * 60);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    window.addEventListener('scroll', handleScroll);
    revealEls.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      revealEls.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        {/* <Education /> */}
        <Resume />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;