import React, { useRef } from 'react';
import type { Project } from '../types';
import anime from 'animejs';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    anime({
      targets: cardRef.current,
      translateY: -10,
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      duration: 300,
      easing: 'easeOutSine',
    });
  };

  const handleMouseLeave = () => {
    anime({
      targets: cardRef.current,
      translateY: 0,
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      duration: 300,
      easing: 'easeInSine',
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group bg-light-surface dark:bg-dark-surface rounded-xl overflow-hidden shadow-lg border border-black/5 dark:border-white/5 hover:border-light-accent/40 dark:hover:border-dark-accent/40 transition-all duration-300"
    >
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <div className="overflow-hidden">
          <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2 text-light-accent-2 dark:text-dark-accent-2">{project.title}</h3>
          <p className="text-light-text dark:text-dark-text mb-4 leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="text-xs font-semibold bg-light-accent/10 dark:bg-dark-accent/10 text-light-accent dark:text-dark-accent px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
