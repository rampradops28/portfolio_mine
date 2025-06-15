import React from 'react';
import './skills.css';

// Map readable skill names to proper icon slugs (SimpleIcons or fallbacks)
const skillIcons = {
  C: 'c',
  Java: 'openjdk',
  JavaScript: 'javascript',
  Python: 'python',
  TypeScript: 'typescript',
  HTML5: 'html5',
  CSS3: 'css3',
  Markdown: 'markdown',
  React: 'react',
  SolidJS: 'solid',
  TailwindCSS: 'tailwindcss',
  Bootstrap: 'bootstrap',
  DaisyUI: 'daisyui',
  'Context-API': 'react',
  Redux: 'redux',
  NodeJS: 'nodedotjs',
  'Express.js': 'express',
  'Socket.io': 'socketdotio',
  MongoDB: 'mongodb',
  MySQL: 'mysql',
  Netlify: 'netlify',
  Vercel: 'vercel',
  Render: 'render',
  Git: 'git',
  GitHub: 'github',
  Vite: 'vite',
  NPM: 'npm',
  Nodemon: 'nodemon',
  ESLint: 'eslint',
  Insomnia: 'insomnia',
};

const skillData = [
  {
    title: '🧠 Programming Languages',
    skills: [
      'C', 'Java', 'JavaScript', 'Python', 'HTML5', 'CSS3' ,
    ],
  },
  {
    title: '🎨 Frontend Development',
    skills: [
      'React', 'TailwindCSS', 'Bootstrap', 'DaisyUI',
      'Context-API', 'Redux',
    ],
  },
  {
    title: '⚙️ Backend Development',
    skills: [
      'NodeJS', 'Express.js', 'Socket.io',
    ],
  },
  {
    title: '🗄️ Databases',
    skills: ['MongoDB', 'MySQL'],
  },
  {
    title: '☁️ Hosting/Deployment',
    skills: ['Netlify', 'Vercel', 'Render'],
  },
  {
    title: '🛠️ Tools & DevOps',
    skills: [
      'Git', 'GitHub', 'Insomnia',
    ],
  },
];

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <div className="section__title-wrapper">
        <h2 className="section__title">
          <span className="different-color">My</span> Skills
        </h2>
         
      </div>

      <div className="skills__container">
        <div className="skills__grid">
          {skillData.map((category, index) => (
            <div className="skills-category" key={index}>
              <h3 className="category-heading">{category.title}</h3>
              <div className="skill-container">
                {category.skills.map((skill, idx) => {
                  const iconSlug = skillIcons[skill] || 'wrench';
                  return (
                    <div className="skill-card" key={idx}>
                      <span className="shine" />
                      <div className="skill-icon-wrapper">
                        <img
                          src={`https://cdn.simpleicons.org/${iconSlug}`}
                          alt={skill}
                          className="skills-img"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src =
                              'https://cdn-icons-png.flaticon.com/512/4712/4712109.png';
                          }}
                        />
                      </div>
                      <span className="skill-name">{skill}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
