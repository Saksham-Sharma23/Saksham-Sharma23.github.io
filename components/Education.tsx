import React from 'react';
import Timeline from './Timeline';
import Certifications from './Certifications';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Education: React.FC = () => {
    const sectionRef = useScrollAnimation<HTMLDivElement>({
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutExpo',
    });

    return (
        <section id="education" className="py-24 md:py-28 bg-light-surface/70 dark:bg-dark-surface/50 backdrop-blur-xl border-y border-light-border dark:border-dark-border">
            <div ref={sectionRef} className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-4 font-display bg-gradient-to-r from-light-accent to-light-accent-2 dark:from-dark-accent dark:to-dark-accent-2 bg-clip-text text-transparent inline-block w-full">Education</h2>
                <div className="w-24 h-1 mx-auto bg-light-accent dark:bg-dark-accent rounded-full mb-16"></div>

                <Timeline />
                <Certifications />
            </div>
        </section>
    );
};

export default Education;
