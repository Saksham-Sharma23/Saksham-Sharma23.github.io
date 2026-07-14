import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface SkillGroup {
  category: string;
  items: string[];
}

const skillGroups: SkillGroup[] = [
  { category: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'SQL'] },
  { category: 'Frontend', items: ['React', 'Tailwind CSS', 'HTML & CSS'] },
  { category: 'Backend', items: ['FastAPI', 'REST APIs', 'Node.js'] },
  { category: 'Data & Tools', items: ['Pandas', 'NumPy', 'Git', 'PostgreSQL'] },
];

const SkillGroupCard: React.FC<{ group: SkillGroup; index: number }> = ({ group, index }) => {
  const ref = useScrollAnimation<HTMLDivElement>({
    translateY: [40, 0],
    opacity: [0, 1],
    duration: 700,
    delay: index * 100,
    easing: 'easeOutExpo',
  });

  return (
    <div
      ref={ref}
      className="rounded-2xl border border-light-border dark:border-dark-border bg-light-surface/60 dark:bg-black/30 backdrop-blur-md p-6 shadow-lg transition-all duration-300 hover:border-light-accent/50 dark:hover:border-dark-accent/50 hover:shadow-xl"
    >
      <h3 className="text-sm font-semibold uppercase tracking-wider text-light-accent dark:text-dark-accent mb-4">
        {group.category}
      </h3>
      <div className="flex flex-wrap gap-2.5">
        {group.items.map((item) => (
          <span
            key={item}
            className="text-sm font-medium px-4 py-1.5 rounded-full bg-light-accent/10 dark:bg-dark-accent/10 text-light-heading dark:text-dark-text border border-light-accent/15 dark:border-dark-accent/15 transition-colors duration-300 hover:bg-light-accent/20 dark:hover:bg-dark-accent/20"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const sectionRef = useScrollAnimation<HTMLDivElement>({
    translateY: [50, 0],
    opacity: [0, 1],
    duration: 1000,
    easing: 'easeOutExpo',
  });

  return (
    <section id="skills" className="py-24 md:py-28 bg-light-bg/50 dark:bg-dark-bg/40 backdrop-blur-xl border-y border-light-border dark:border-dark-border">
      <div ref={sectionRef} className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 font-display bg-gradient-to-r from-light-accent to-light-accent-2 dark:from-dark-accent dark:to-dark-accent-2 bg-clip-text text-transparent inline-block w-full">My Skills</h2>
        <div className="w-24 h-1 mx-auto bg-light-accent dark:bg-dark-accent rounded-full mb-16"></div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group, index) => (
            <SkillGroupCard key={group.category} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
