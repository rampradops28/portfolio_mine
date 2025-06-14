import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code, Database, Globe, Layers, Sparkles, Zap } from 'lucide-react';
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="portfolio-wrapper">
      {/* Header Section */}
      <motion.div 
        className="portfolio-header" 
      >
        <h1 className="portfolio-title">My Portfolio</h1>
        <p className="portfolio-subtitle">
          Explore my latest projects and work
        </p>
      </motion.div>

      {/* Tab Navigation */}
      <motion.div 
        className="tab-navigation" 
      >
        <div className="tab-container">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.button
                key={category.name}
                className={`tab-item ${activeFilter === category.name ? 'tab-active' : ''}`}
                onClick={() => filterItems(category.name)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconComponent className="tab-icon" />
                <span className="tab-text">{category.name}</span>
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="projects-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeFilter}
            className="projects-grid" 
          >
            {items.map((project) => (
              <motion.div
                key={project.id}
                className="project-card"
                variants={itemVariants}
                layout
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="project-image-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="image-overlay">
                    <div className="overlay-content">
                      <motion.a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-button live-button"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="button-icon" />
                      </motion.a>
                      <motion.a
                        href={project.repositoryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-button github-button"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="button-icon" />
                      </motion.a>
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
                  <div className="tech-stack">
                    {project.technologies?.map((tech, i) => (
                      <span key={i} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Portfolio;