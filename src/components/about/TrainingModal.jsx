import React from 'react';
import './ExperienceModal.css';

const TrainingModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            onClose();
        }
    };

    return (
        <div 
            className="modal-overlay" 
            onClick={onClose}
            onKeyDown={handleKeyDown}
            tabIndex={-1}
        >
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button 
                    className="modal-close" 
                    onClick={onClose}
                    title="Close (Esc)"
                >
                    <i className="uil uil-times"></i>
                </button>

                <div className="modal-header">
                    <h3>Training & Certifications</h3>
                </div>
                
                <div className="modal-body">
                    <div className="experience-item">
                        <div className="experience-header">
                            <h4>Web Development Training</h4>
                            <span className="company-name">Internshala</span>
                            <span className="experience-duration">6 Months</span>
                        </div>

                        <div className="experience-content">
                            <h5>Course Highlights:</h5>
                            <ul>
                                <li>Comprehensive full-stack web development curriculum</li>
                                <li>Hands-on experience with modern web technologies</li>
                                <li>Built multiple projects from scratch</li>
                                <li>Learned industry best practices and coding standards</li>
                            </ul>

                            <h5>Skills Acquired:</h5>
                            <div className="tech-stack">
                                <span>HTML5</span>
                                <span>CSS3</span>
                                <span>JavaScript</span>
                                <span>React.js</span>
                                <span>Node.js</span>
                                <span>MongoDB</span>
                                <span>Git</span>
                                <span>Responsive Design</span>
                            </div>

                            <div className="certification-details">
                                <span className="certification-period">Completed in 2023</span>
                                <span className="certification-status">Successfully Certified</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrainingModal; 