import React from 'react';
import './ExperienceModal.css';

const ExperienceModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const projects = [
        {
            title: "Role-Based Task Management System",
            description: "Role-Based Task Management System is a web application developed to streamline task assignment and tracking within organizations.",
            technologies: ["Node.js", "Express.js", "MongoDB", "React"],
            features: [
                "✅ Assign, Edit & Delete Tasks",
                "📊 View Dashboard Analytics",
                "👥 Manage Users",
                "📝 Generate Reports "
            ],
            link: "https://github.com/rampradops28/Task_Management_MERN"
        }
    ];

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
                    <h3>Professional Experience</h3>
                </div>
                
                <div className="modal-body">
                    <div className="experience-item">
                        <div className="experience-header">
                            <h4>Web Developer Intern</h4>
                            <span className="company-name">Zidio Technologies</span>
                            <span className="experience-duration">3 Months (2023)</span>
                        </div>

                        <div className="experience-content">
                            <h5>Role & Responsibilities:</h5>
                            <ul>
                                <li>Independently developed and completed a full-stack web application using the MERN stack</li>
                                <li>Designed role-based dashboards for Admin and User with dynamic task features</li>
                                <li>Built responsive and interactive UI components using React, Bootstrap, and MDB UI Kit</li>
                                <li>Integrated JWT-based authentication and protected routes</li>
                                <li>Handled backend APIs and MongoDB schema design for task/user management</li>
                                <li>Participated in regular review sessions and implemented feedback from mentors</li>
                            </ul>

                            <h5>Key Achievements:</h5>
                            <ul>
                                <li>Successfully delivered the entire project solo after team dropout</li>
                                <li>Built reusable components and optimized code structure for maintainability</li>
                                <li>Implemented real-time data visualizations using Chart.js and PDF report generation with jsPDF</li>
                                <li>Recognized for commitment, adaptability, and quick learning in live mentoring sessions</li>
                            </ul>

                            <h5>Technical Environment:</h5>
                            <div className="tech-stack">
                                <span>React.js</span>
                                <span>Node.js</span>
                                <span>Express.js</span>
                                <span>MongoDB</span>
                                <span>JWT</span>
                                <span>Bootstrap</span>
                                <span>MDB UI Kit</span>
                                <span>Chart.js</span>
                                <span>jsPDF</span>
                                <span>Context API</span>
                                <span>Git</span>
                                <span>Agile</span>
                            </div>

                        </div>
                    </div>

                    <div className="section-divider"></div>

                    <div className="section-title">
                        <h4>Featured Project</h4>
                    </div>

                    {projects.map((project, index) => (
                        <div key={index} className="project-item">
                            <h4>{project.title}</h4>
                            <p className="project-description">{project.description}</p>
                            
                            <div className="project-features">
                                <h5>Key Features:</h5>
                                <ul>
                                    {project.features.map((feature, idx) => (
                                        <li key={idx}>{feature}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="tech-stack">
                                {project.technologies.map((tech, idx) => (
                                    <span key={idx}>{tech}</span>
                                ))}
                            </div>

                            <a 
                                href={project.link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="project-link"
                            >
                                <i className="uil uil-github"></i> View on GitHub
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExperienceModal; 