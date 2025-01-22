import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import Skills from './Skills';  // Import the Skills component

// Define your translations (messages)
const messages = {
  en: {
    "about-info-1": "Hi, I'm Esteban Nahuel Carrizo, a student at the Technological University of Tucumán; I consider myself a person passionate about programming and web development...",
    "about-info-2": "I consider myself a self-taught person since I like to be constantly learning day by day...",
    "about-info-3": "I have experience working as a freelance web designer and developer...",
    "about-skills-1": "More than a year of professional experience in this language, allows me to perform without problems in the industry.",
    "about-skills-2": "More than a year of work experience in this language, I use it daily to develop web designs and interfaces.",
    "about-skills-3": "A year of experience using it in the front-end and back-end branch...",
    "about-skills-4": "One year using this preprocessor in the professional field...",
    "about-skills-5": "Less than a year using this framework, even so, I used it in countless work projects...",
    "about-skills-6": "A year using this bookstore in the personal and work environment...",
    "about-skills-7": "More than a year using this JavaScript framework, carrying out multiple personal and work projects.",
    "about-skills-8": "It is the cross-platform runtime environment that I use to make my web applications scalable.",
    "about-skills-9": "It is a framework that I use mostly to be able to manage my APIs in the best way...",
  },
  // Add other languages (e.g., 'es' for Spanish) as needed
};

const locale = 'en';  // or dynamically determine based on user settings or browser locale

// Now, wrap the application with IntlProvider
ReactDOM.render(
  <IntlProvider locale={locale} messages={messages[locale]}>
    <Skills />
  </IntlProvider>,
  document.getElementById('root')
);
