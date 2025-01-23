import React from 'react';
import './skills.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS with earlier trigger point
AOS.init({
  duration: 1000,
  once: true,
  offset: 100
});

const Skill = () => {
  const skillsData = {
    frontend: [
      {
        name: "HTML",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
      }, 
      {
        name: "Bootstrap",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain.svg",
      },
      {
        name: "JavaScript",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      },
      {
        name: "React",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      }
    ],
    backend: [ 
      {
        name: "SQL",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
      },
      {
        name: "Node.js",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
      },
      {
        name: "MongoDB",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
      }
    ],
    programming: [
      {
        name: "C",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
      },
      {
        name: "Java",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      },
      {
        name: "Python",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      }  
    ],
    tools: [
      {
        name: "Git",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
      },
      {
        name: "Figma",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg",
      }
    ]
  };

  const renderSkillCards = (skills, delay = 0) => {
    return skills.map((skill, index) => (
      <div 
        className="skill-card" 
        data-aos="fade-up"
        data-aos-delay={50 + (index * 30)}
        key={skill.name}
      >
        <div className="skill-icon-wrapper">
          <img 
            alt={skill.name} 
            className="skills-img" 
            src={skill.icon} 
            title={skill.name} 
          />
        </div>
        <h2 className="skill-name">{skill.name}</h2>
      </div>
    ));
  };

  return (
    <section className="skills container section" id="skills">
      <h2 className="section__title">My Skills</h2>
      
      <div className="skills__container">
        <div className="skills__grid">
          <div className="skills-category" data-aos="fade-right" data-aos-duration="400">
            <h3 className="category-heading">Frontend</h3>
            <div className="skill-container">
              {renderSkillCards(skillsData.frontend)}
            </div>
          </div>

          <div className="skills-category" data-aos="fade-left" data-aos-duration="400">
            <h3 className="category-heading">Backend</h3>
            <div className="skill-container">
              {renderSkillCards(skillsData.backend)}
            </div>
          </div>

          <div className="skills-category" data-aos="fade-right" data-aos-duration="400">
            <h3 className="category-heading">Languages</h3>
            <div className="skill-container">
              {renderSkillCards(skillsData.programming)}
            </div>
          </div>

          <div className="skills-category" data-aos="fade-left" data-aos-duration="400">
            <h3 className="category-heading">Tools</h3>
            <div className="skill-container">
              {renderSkillCards(skillsData.tools)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
