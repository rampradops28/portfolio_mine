import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Github,
  Code,
  Database,
  Globe,
  Layers,
  Sparkles,
  Zap
} from 'lucide-react';
import { portfolioData } from './Menu.jsx';
import './Portfolio.css';

const Portfolio = () => {
  const [items, setItems] = useState(portfolioData);
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = [
    { name: 'All', icon: Sparkles },
    { name: 'Frontend', icon: Globe },
    { name: 'Backend', icon: Database },
    { name: 'Full Stack', icon: Layers },
    { name: 'Python', icon: Code },
    { name: 'React', icon: Zap }
  ];

  const filterItems = (category) => {
    setActiveFilter(category);
    if (category === 'All') {
      setItems(portfolioData);
    } else {
      const filteredItems = portfolioData.filter(item =>
        item.category.includes(category)
      );
      setItems(filteredItems);
    }
  };

  return (
    <div className="portfolio-wrapper">
      {/* Header Section */}
      <motion.div > 
       <div className="portfolio__title-wrapper">
        <h2 className="portfolio__title">
          <span className="different-color">My</span> Projects
        </h2>
         
      </div>
      </motion.div>

      {/* Tab Navigation */}
      <div className="tab-navigation">
        <div className="tab-container">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.name}
                className={`tab-item ${activeFilter === category.name ? 'tab-active' : ''}`}
                onClick={() => filterItems(category.name)}
              >
                <IconComponent className="tab-icon" />
                <span className="tab-text">{category.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="projects-container">
        <div className="projects-grid">
          {items.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="image-overlay">
                  <div className="overlay-content">
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-button live-button"
                      >
                        <ExternalLink className="button-icon" />
                      </a>
                    )}
                    {project.repositoryUrl && (
                      <a
                        href={project.repositoryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-button github-button"
                      >
                        <Github className="button-icon" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="project-info">
                <div className="category-tags">
                  {project.category.map((cat, i) => (
                    <span key={i} className="category-tag">
                      {cat}
                    </span>
                  ))}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                {project.technologies && (
                  <div className="tech-stack">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
