import React from 'react';

const MyResume = (props) => {
  const { headline, desc, myEducation = [], myExperiences = [], mySkills = [], myAbout = [] } = props.item;

  return (
    <div>
      <h2 style={{ fontSize: '32px', marginBottom: '12px' }}>My {headline}</h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>{desc}</p>

      {/* Education Section */}
      {myEducation.length > 0 && (
        <div className="row g-3">
          {myEducation.map((item, index) => (
            <div key={index} className="col-md-6 col-lg-6">
              <div className="edu-card">
                <h4>{item.degree}</h4>
                <p>{item.institution} <br /> <span className="dept-text">{item.dept}</span></p>
                <div className="edu-gpa">{item.result}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Experience / Course Section */}
      {myExperiences.length > 0 && (
        <div className="row g-3">
          {myExperiences.map((e, index) => (
            <div key={index} className="col-md-6">
              <div className="edu-card">
                <h4>{e.position}</h4>
                <p>{e.company}</p>
                <div className="edu-gpa">{e.duration}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Skills Section */}
      {mySkills.length > 0 && (
        <div className="row g-3">
          {mySkills.map((skill, index) => (
            <div key={index} className="col-6 col-md-4">
              <div className="edu-card skill-card">
                <h4>{skill.name}</h4>
                <div className="edu-gpa">{skill.level}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* About Section */}
      {myAbout.length > 0 && (
        <div className="about-list-container">
          <ul className="about-ul">
            {myAbout.map((item, index) => (
              <li key={index} className="about-li">
                {item.fact}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MyResume;