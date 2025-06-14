import React, { useEffect } from 'react';
import './About.css';
import Image from '../../assets/avatr.png';
import Resume from '../../assets/resume.pdf';
import AboutBox from './AboutBox';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }

    return (
        <section className="about container section" id="about">
            <h2 className="section__title" data-aos="fade-down">About Me</h2>

            <div className="about__container grid">
                <img 
                    src={Image} 
                    alt="Profile" 
                    className="about__img" 
                    data-aos="fade-right"
                    data-aos-delay="100"
                />

                <div className="about__data grid" data-aos="fade-left" data-aos-delay="200">
                    <div className="about__info">
                        <p className="about__description">
                            Hello! I'm <span className="highlight">Rampradop</span>, a Computer Science and Design student based in Tamil Nadu, India.
                            <br /><br />
                            I'm passionate about <span className="highlight">full-stack web development</span> and enjoy transforming ideas into responsive and user-friendly web applications.
                            With experience in the <span className="highlight">MERN stack</span> and a strong focus on clean UI/UX, I aim to build secure, real-time solutions that make a difference.
                            <br /><br />
                            I constantly explore new technologies and sharpen my skills through hands-on projects, internships, and hackathons.
                        </p>
                        <div className="about__buttons">
                            <button className="btn" onClick={downloadResume} data-aos="zoom-in" data-aos-delay="300">
                                Download CV
                                <i className="uil uil-download-alt button__icon"></i>
                            </button>
                        </div>
                    </div>

                    {/* <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography">

                                </span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About