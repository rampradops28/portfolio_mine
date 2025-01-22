import React from 'react';
import './skills.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS
AOS.init();

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

const Skill = () => {
  return (
    <div className="skill-seccion">
      <h1 className="heading">Skills</h1>
      <div className="skill-container">
        <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
          <img alt="HTML" className="skills-img icon-li" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" title="HTML5" />
          <h2 className="skill-name">HTML</h2>
          <p className="skill-info">
            <FormattedMessage
              id='about-skills-1'
              defaultMessage='More than a year of professional experience in this language, allows me to perform without problems in the industry.'
            />
          </p>
        </div>
        <div className="skill-card" data-aos="flip-up" data-aos-delay="300">
          <img alt="CSS" className="skills-img icon-li" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" title="CSS3" />
          <h2 className="skill-name">CSS</h2>
          <p className="skill-info">
            <FormattedMessage
              id='about-skills-2'
              defaultMessage='More than a year of work experience in this language, I use it daily to develop web designs and interfaces.'
            />
          </p>
        </div>
        <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
          <img alt="Js" className="skills-img icon-li" src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png" title="Java Script" />
          <h2 className="skill-name">Javascript</h2>
          <p className="skill-info">
            <FormattedMessage
              id='about-skills-3'
              defaultMessage='A year of experience using it in the front-end and back-end branch, allowed me to familiarize myself with the language, and include it in my work projects.'
            />
          </p>
        </div>
        <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
          <img alt="Sass" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" title="Sass" />
          <h2 className="skill-name">Sass</h2>
          <p className="skill-info">
            <FormattedMessage
              id='about-skills-4'
              defaultMessage='One year using this preprocessor in the professional field, I include it in many of my projects since it allows me a better structured code.'
            />
          </p>
        </div>
        <div className="skill-card" data-aos="flip-down" data-aos-delay="300">
          <img alt="Bootstrap" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" title="Bootstrap" />
          <h2 className="skill-name">Bootstrap</h2>
          <p className="skill-info">
            <FormattedMessage
              id='about-skills-5'
              defaultMessage='Less than a year using this framework, even so, I used it in countless work projects, which allowed me to get to know it for the most part.'
            />
          </p>
        </div>
        <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
          <img alt="jQuery" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg" title="jQuery" />
          <h2 className="skill-name">jQuery</h2>
          <p className="skill-info">
            <FormattedMessage
              id='about-skills-6'
              defaultMessage='A year using this bookstore in the personal and work environment, it is one of the bookstores that I use and manipulate the most.'
            />
          </p>
        </div>
        <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
          <img alt="react" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" title="React" />
          <h2 className="skill-name">ReactJs</h2>
          <p className="skill-info">
            <FormattedMessage
              id='about-skills-7'
              defaultMessage='More than a year using this JavaScript framework, carrying out multiple personal and work projects.'
            />
          </p>
        </div>
        <div className="skill-card" data-aos="flip-up" data-aos-delay="300">
          <img alt="nodejs" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" title="NodeJs" />
          <h2 className="skill-name">NodeJs</h2>
          <p className="skill-info">
            <FormattedMessage
              id='about-skills-8'
              defaultMessage='It is the cross-platform runtime environment that I use to make my web applications scalable.'
            />
          </p>
        </div>
        <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
          <img alt="express" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" title="Express" />
          <h2 className="skill-name">Express</h2>
          <p className="skill-info">
            <FormattedMessage
              id='about-skills-9'
              defaultMessage='It is a framework that I use mostly to be able to manage my APIs in the best way and my http execution model.'
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
