import React from 'react';
import './ExperienceModal.css';

const HobbiesModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            onClose();
        }
    };

    const hobbies = [
        {
            title: "CSS Battle",
            points: ["Pixel-perfect designs", "Creative coding", "Daily challenges"]
        },
        {
            title: "Play with chatgpt",
            points: ["learn english", "exposing my ideas","ask funny questions"]
        },
        {
            title: "Coding",
            points: ["Vibe Coding", "Open source"]
        },
        {
            title: "Gaming",
            points: ["Strategy games", "Puzzle solving", "Team gaming"]
        },
        {
            title: "Music",
            points: [ "english songs", "Different genres"]
        }
    ];

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
                    <h3>My Hobbies</h3>
                </div>
                
                <div className="modal-body">
                    {hobbies.map((hobby, index) => (
                        <React.Fragment key={hobby.title}>
                            <div className="experience-item">
                                <div className="experience-header">
                                    <h4>{hobby.title}</h4>
                                </div>
                                <div className="hobby-tags">
                                    {hobby.points.map((point, idx) => (
                                        <span key={idx} className="hobby-tag">
                                            {point}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            {index < hobbies.length - 1 && <div className="section-divider"></div>}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HobbiesModal; 