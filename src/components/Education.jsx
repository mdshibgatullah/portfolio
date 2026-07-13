import React from 'react';

function Education() {
  const valueProps = ["Web Development", "Graphics Design", "SEO Strategy"];
  
  const timelineData = [
    {
      title: "Bachelor's Degree",
      inst: "International Islamic University Chattogram — Qur'anic Sciences & Islamic Studies",
      score: "CGPA 3.87 / 4.00"
    },
    {
      title: "Intermediate (Alim)",
      inst: "Garangia Islamia Kamil Madrasha — Humanities",
      score: "GPA 5.00 / 5.00"
    },
    {
      title: "Junior Dakhil Certificate",
      inst: "Garangia Islamia Kamil Madrasha — Humanities",
      score: "GPA 4.50 / 5.00"
    }
  ];

  return (
    <section className="bg-raised" id="education">
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-5 reveal">
            <div className="eyebrow">Why hire me</div>
            <h2 style={{ fontSize: '32px' }}>A specialist in three areas</h2>
            <div className="why-list">
              {valueProps.map((prop, idx) => (
                <div key={idx} className="why-item">
                  <span className="num">0{idx + 1}</span> {prop}
                </div>
              ))}
            </div>
          </div>
          
          <div className="col-lg-7 reveal">
            <div className="eyebrow">Background</div>
            <h2 style={{ fontSize: '32px', marginBottom: '12px' }}>My Education</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>
              Completed Intermediate (Alim) and currently continuing my Bachelor's degree.
            </p>
            <div className="row g-3">
              {timelineData.map((edu, idx) => (
                <div key={idx} className="col-md-4">
                  <div className="edu-card">
                    <h4>{edu.title}</h4>
                    <p>{edu.inst}</p>
                    <div className="edu-gpa">{edu.score}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;