import React, { useState } from 'react';
import MyResume from './MyResume';

const Resume = () => {
  const resumeData = [
    { 
      id: 0, 
      headline: "Education", 
      desc: "Completed Intermediate (Alim) and currently continuing my Bachelor's degree.", 
      myEducation: [
        { degree: "Bachelor's Degree", institution: "International Islamic University Chattagram", dept: "Qur'anic Sciences & Islamic Studies", result: "CGPA 3.87 / 4.00" },
        { degree: "Intermediate (Alim)", institution: "Garangia Islamia Kamil Madrasha", dept: "Humanities", result: "GPA 5.00 / 5.00" },
        { degree: "Junior Dakhil Certificate", institution: "Garangia Islamia Kamil Madrasha", dept: "Humanities", result: "GPA 4.50 / 5.00" }
      ] 
    },
    { 
      id: 1, 
      headline: "Courses & Certifications", 
      desc: "I have completed several computer-related courses. Below are the details.",
      myExperiences: [
        { position: "Full Stack Web Development", company: "Code Jogot", duration: "Completed: 2025" },
        { position: "PHP & Laravel", company: "UY Lab", duration: "Completed: 2025" },
        { position: "Web Design", company: "Amader Academy", duration: "Completed: 2024" },
        { position: "Office Application Program", company: "Youth Development Training Center", duration: "Completed: 2019" }
      ]
    },
    { 
      id: 2, 
      headline: "Skills", 
      desc: "Expert in Web Development, Core Frontend & Backend Stacks.",
      mySkills: [
        { name: "HTML5 & CSS3", level: "Advanced" },
        { name: "Bootstrap", level: "Advanced" },
        { name: "JavaScript", level: "Advanced" },
        { name: "React.js", level: "Advanced" },
        { name: "PHP", level: "Intermediate" },
        { name: "Laravel", level: "Advance" },
        { name: "Photoshop", level: "Intermediate" },
        { name: "Illustrator", level: "Intermediate" }
      ]
    },
    { 
      id: 3, 
      headline: "About", 
      desc: "Get to know me as a professional.",
      myAbout: [
        { fact: "Passionate about building responsive and user-friendly web applications." },
        { fact: "Experienced in React.js, Tailwind CSS, PHP, and Laravel." },
        { fact: "Focused on creating clean, maintainable, and scalable code." },
        { fact: "Strong interest in frontend development and modern UI implementation." },
        { fact: "Continuously learning new technologies and development practices." },
        { fact: "Committed to delivering high-quality digital solutions." }
      ]
    }
  ];

  const [active, setActive] = useState(resumeData[0]);

  const resumBtn = [
    { id: 0, title: 'Education' },
    { id: 1, title: 'Course & Certifications' },
    { id: 2, title: 'Skills' },
    { id: 3, title: 'About' }
  ];

  

  return (
    <section className="bg-raised resume" id="education">
      <div className="container">
        <div className="row gy-5">
          
          
          <div className="col-lg-5 reveal">
            <div className="eyebrow">Why hire me</div>
            <h2 className="resume-title">Beautiful Design. Smart Development. Proven Results.</h2>
            

            
            <div className="resume-btn-group">
              {resumBtn.map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setActive(resumeData[btn.id])}
                  className={`resume-tab-btn ${active.id === btn.id ? 'active' : ''}`}
                >
                  {btn.title}
                </button>
              ))}
            </div>
          </div>
          
          
          <div className="col-lg-7 reveal">
            <div className="eyebrow">Background</div>
            
            
            <div className="resume-animation" key={active.id}>
              <MyResume item={active} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Resume;