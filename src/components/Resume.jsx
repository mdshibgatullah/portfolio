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
      headline: "Course and Certification", 
      desc: "I have completed several computer-related courses. Below are the details.",
      myExperiences: [
        { position: "Full Stack Web Development", company: "Code Jogot", duration: "2024 - 2025" },
        { position: "PHP & Laravel", company: "UY Lab", duration: "2024 - 2025" },
        { position: "Web Design", company: "Amader Academy", duration: "17/02/2024 - 15/06/2024" },
        { position: "Office Application Program", company: "Youth Development Training Center", duration: "2018 - 2019" }
      ]
    },
    { 
      id: 2, 
      headline: "Skills", 
      desc: "Expert in Web Development, Core Frontend & Backend Stacks.",
      mySkills: [
        { name: "HTML5 & CSS3", level: "Expert" },
        { name: "TailwindCSS", level: "Expert" },
        { name: "JavaScript", level: "Expert" },
        { name: "React.js", level: "Expert" },
        { name: "PHP", level: "Advance" },
        { name: "Laravel", level: "Advance" },
        { name: "Photoshop", level: "Advance" },
        { name: "Illustrator", level: "Advance" }
      ]
    },
    { 
      id: 3, 
      headline: "About", 
      desc: "Get to know me as a professional.",
      myAbout: [
        { fact: "I am passionate about frontend development and always eager to learn new technologies." },
        { fact: "I love working with React.js and TailwindCSS to build modern UI." },
        { fact: "I enjoy solving complex UI/UX problems to enhance user experience." },
        { fact: "I am constantly improving my coding skills and exploring new frameworks." }
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
          
          {/* Left Side: Why Hire Me (New Design) */}
          <div className="col-lg-5 reveal">
            <div className="eyebrow">Why hire me</div>
            <h2 style={{ fontSize: '32px' }}>Beautiful Design. Smart Development. Proven Results.</h2>
            

            {/* Navigation Buttons */}
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
          
          {/* Right Side: Dynamic Content (Background / Education) */}
          <div className="col-lg-7 reveal">
            <div className="eyebrow">Background</div>
            
            {/* Key tracking ensures full component unmount & smooth restart of entry animations */}
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