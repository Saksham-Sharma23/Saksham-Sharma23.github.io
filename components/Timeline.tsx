import React from 'react';
import type { Experience } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const educationData: Experience[] = [
    { year: '2022 — 2026', role: 'B.Tech. in Computer Science', company: 'RajKumar Goel Institute of Technology', description: 'CGPA: 8.1. Focused on Data Structures, Algorithms, and Web Technologies.' },
    { year: '2022', role: 'Higher Secondary (XII)', company: 'Dr. K.N. Modi Global School', description: 'Score: 85%. Science stream with Computer Science.' },
    { year: '2020', role: 'Secondary School (X)', company: 'Dr. K.N. Modi Global School', description: 'Score: 89.6%.' },
];

const TimelineItem: React.FC<{ item: Experience; isLast: boolean }> = ({ item, isLast }) => {
    const itemRef = useScrollAnimation<HTMLDivElement>({
        translateX: [-40, 0],
        opacity: [0, 1],
        duration: 700,
        easing: 'easeOutExpo',
    });

    return (
        <div ref={itemRef} className={`relative pl-16 md:pl-20 ${isLast ? '' : 'pb-10'}`}>
            {/* Node on the rail */}
            <div className="absolute left-0 top-1 flex items-center justify-center w-11 h-11 rounded-full bg-light-surface dark:bg-dark-surface border-2 border-light-accent dark:border-dark-accent shadow-[0_0_20px_rgba(232,89,12,0.25)] dark:shadow-[0_0_20px_rgba(255,179,71,0.25)]">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-light-accent dark:text-dark-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
            </div>

            {/* Card */}
            <div className="group rounded-2xl border border-light-border dark:border-dark-border bg-light-surface/60 dark:bg-black/30 backdrop-blur-md p-6 shadow-lg transition-all duration-300 hover:border-light-accent/50 dark:hover:border-dark-accent/50 hover:shadow-xl">
                <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wide rounded-full bg-light-accent/10 dark:bg-dark-accent/10 text-light-accent dark:text-dark-accent">
                    {item.year}
                </span>
                <h3 className="text-xl font-bold font-display text-light-heading dark:text-dark-heading mb-1">{item.role}</h3>
                <h4 className="text-sm font-semibold text-light-accent dark:text-dark-accent uppercase tracking-wide mb-3">{item.company}</h4>
                <p className="text-sm leading-relaxed text-light-text dark:text-gray-300">{item.description}</p>
            </div>
        </div>
    );
};

const Timeline: React.FC = () => {
    return (
        <div className="max-w-2xl mx-auto">
            <div className="relative">
                {/* Vertical rail */}
                <div className="absolute left-[21px] md:left-[21px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-light-accent/60 via-light-accent/30 to-transparent dark:from-dark-accent/60 dark:via-dark-accent/30"></div>

                {educationData.map((item, index) => (
                    <TimelineItem key={index} item={item} isLast={index === educationData.length - 1} />
                ))}
            </div>
        </div>
    );
};

export default Timeline;
