import React from 'react';

function Portfolio() {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">Recent work</div>
          <h2>My <span className="accent">Projects</span></h2>
          <p>A selection of builds that show how I turn a design into a working, responsive product.</p>
        </div>
        <div className="row g-4">
          <div className="col-lg-4 reveal">
            <div className="project-card">
              <div className="project-thumb"><span className="num-mark">01</span></div>
              <div className="project-body">
                <h3>Online Education Platform</h3>
                <p>A responsive online education website with a modern layout, course browsing, and student-facing pages.</p>
                <div className="project-tags">
                  <span className="tag">HTML5</span>
                  <span className="tag">CSS3</span>
                  <span className="tag">JavaScript</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 reveal">
            <div className="project-card placeholder">+ More projects coming soon</div>
          </div>
          <div className="col-lg-4 reveal">
            <div className="project-card placeholder">+ More projects coming soon</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;