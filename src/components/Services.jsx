import React from 'react';

function Services() {
  const solutions = [
    {
      title: "Web Development",
      desc: "I build modern, responsive, high-performance web applications using React.js, PHP, and Laravel — with clean code, fast load times, and SEO-friendly structure.",
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
    },
    {
      title: "UI/UX Design",
      desc: "I design user-friendly, accessible interfaces with a focus on simplicity and smooth navigation across every device.",
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/></svg>
    },
    {
      title: "Graphics Design",
      desc: "Professional logo design, social media banners, and marketing visuals crafted in Photoshop and Illustrator to represent your brand.",
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="13.5" cy="6.5" r="2.5"/><path d="M12 2a10 10 0 1 0 10 10c0-1.1-.9-2-2-2h-3a2 2 0 0 1-2-2V5c0-1.1-.9-2-2-2"/></svg>
    },
    {
      title: "SEO Optimization",
      desc: "Keyword research, content and technical SEO to improve search visibility and grow organic traffic and audience reach.",
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
    }
  ];

  return (
    <section id="services">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">What I do</div>
          <h2>My <span class="accent">Services</span></h2>
          <p>From clean, high-performance code to polished visual design — I cover the full path from concept to launch.</p>
        </div>
        <div className="row g-4">
          {solutions.map((item, index) => (
            <div key={index} className="col-md-6 reveal">
              <div className="service-card">
                <div className="service-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;