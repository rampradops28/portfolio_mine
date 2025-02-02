import './App.css';  


import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About'; 
import Resume from './components/resume/Resume';
import Skill from './components/skills/Skill';
import Portfolio from './components/portfolio/Portfolio';  
import Contact from './components/contact/Contact';
import useLocalStorage from 'use-local-storage'

import { IntlProvider } from 'react-intl';

const messages = {
    'about-info-1': "Hi, I'm Esteban Nahuel Carrizo, a student at the Technological University of Tucumán...",
    'about-info-2': 'I consider myself a self-taught person since I like to be constantly learning day by day...',
    'about-info-3': 'I have experience working as a freelance web designer and developer...',
    'about-skills-1': 'More than a year of professional experience in this language, allows me to perform without problems in the industry.',
    'about-skills-2': 'More than a year of work experience in this language, I use it daily to develop web designs and interfaces.',
    'about-skills-3': 'A year of experience using it in the front-end and back-end branch...',
    'about-skills-4': 'One year using this preprocessor in the professional field...',
    'about-skills-5': 'Less than a year using this framework...',
    'about-skills-6': 'A year using this library in personal and work environments...',
    'about-skills-7': 'More than a year using this JavaScript library...',
    'about-skills-8': 'It is the cross-platform runtime environment that I use...',
    'about-skills-9': 'It is a framework that I use mostly to be able to manage my APIs...',
  };

function App() {
    const defaultDark = window.matchMedia('(prefers-color-scheme: light)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'light' : 'light');

    // const switchTheme = () => {
    //     const newTheme = theme === 'light' ? 'dark' : 'light';  
    //     setTheme(newTheme);
    // } 
    //theme={theme} switchTheme={switchTheme}

    return (
        <div className="app" data-theme={theme}>
            <Sidebar  />
            <main className='main'>
                <Home />
                <About /> 
                {/* <Resume /> */}
                <IntlProvider locale="en" messages={messages}>
                    <Skill />
                </IntlProvider>
                <Portfolio />  
                <Contact   />
            </main>
        </div>
    );
}

export default App;
