import React, { useState } from 'react';
import './About.css';
import ExperienceModal from './ExperienceModal';
import TrainingModal from './TrainingModal';
import HobbiesModal from './HobbiesModal';

const AboutBox = () => {
    const [isExperienceModalOpen, setIsExperienceModalOpen] = useState(false);
    const [isTrainingModalOpen, setIsTrainingModalOpen] = useState(false);
    const [isHobbiesModalOpen, setIsHobbiesModalOpen] = useState(false);

    return (
        <>
            <div className="about__boxes grid" data-aos="fade-up" data-aos-delay="300">
                <div 
                    className="about__box" 
                    data-aos="zoom-in" 
                    data-aos-delay="400"
                    onClick={() => setIsExperienceModalOpen(true)}
                    style={{ cursor: 'pointer' }}
                >
                    <i className="about__icon uil uil-briefcase-alt"></i>
                    <div>
                        <h3 className="about__title">Experience</h3>
                        <span className="about__subtitle">3 Months Internship</span>
                        <span className="click-info">
                            <i className="uil uil-arrow-right"></i> Click here
                        </span>
                    </div>
                </div>

                <div 
                    className="about__box" 
                    data-aos="zoom-in" 
                    data-aos-delay="500"
                    onClick={() => setIsTrainingModalOpen(true)}
                    style={{ cursor: 'pointer' }}
                >
                    <i className="about__icon uil uil-award"></i>
                    <div>
                        <h3 className="about__title">Training</h3>
                        <span className="about__subtitle">6 Months Web Dev</span>
                        <span className="click-info">
                            <i className="uil uil-arrow-right"></i>  Click here
                        </span>
                    </div>
                </div>

                <div 
                    className="about__box" 
                    data-aos="zoom-in" 
                    data-aos-delay="600"
                    onClick={() => setIsHobbiesModalOpen(true)}
                    style={{ cursor: 'pointer' }}
                >
                    <i className="about__icon uil uil-palette"></i>
                    <div>
                        <h3 className="about__title">Hobbies</h3>
                        <span className="about__subtitle">CSS Battle & More</span>
                        <span className="click-info">
                            <i className="uil uil-arrow-right"></i>  Click here
                        </span>
                    </div>
                </div>  
            </div>

            <ExperienceModal 
                isOpen={isExperienceModalOpen} 
                onClose={() => setIsExperienceModalOpen(false)} 
            />

            <TrainingModal 
                isOpen={isTrainingModalOpen} 
                onClose={() => setIsTrainingModalOpen(false)} 
            />

            <HobbiesModal 
                isOpen={isHobbiesModalOpen} 
                onClose={() => setIsHobbiesModalOpen(false)} 
            />
        </>
    );
};

export default AboutBox;