import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Certification {
    name: string;
    issuer: string;
    date: string;
    description: string;
}

const certificationsData: Certification[] = [
    {
        name: 'Java Development',
        issuer: 'NPTEL',
        date: 'Nov 2024',
        description: 'Comprehensive course on Java programming and object-oriented design principles.'
    },
    {
        name: 'Database Management System',
        issuer: 'NPTEL',
        date: 'Oct 2024',
        description: 'In-depth study of relational databases, SQL, and normalization.'
    },
    {
        name: 'Learning REST APIs',
        issuer: 'LinkedIn',
        date: 'Sep 2024',
        description: 'Mastered the concepts of RESTful architecture and API design.'
    }
];

const CertificationCard: React.FC<{ cert: Certification; index: number }> = ({ cert, index }) => {
    const cardRef = useScrollAnimation<HTMLDivElement>({
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 600,
        delay: index * 100,
        easing: 'easeOutExpo'
    });

    return (
        <div ref={cardRef}>
            <div className="group relative bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl shadow-lg p-6 transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl hover:bg-white/20 dark:hover:bg-black/30 overflow-hidden h-full">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-light-accent to-transparent dark:from-dark-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="flex justify-between items-start mb-4 relative z-10">
                    <div className="flex-1 pr-4">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-light-accent dark:group-hover:text-dark-accent transition-colors duration-300">{cert.name}</h3>
                        <div className="flex items-center space-x-2 mb-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-light-accent dark:text-dark-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.78 4.78 4 4 0 0 1-6.74 0 4 4 0 0 1-4.78-4.78 4 4 0 0 1 0-6.74Z" />
                            </svg>
                            <p className="text-sm font-bold text-gray-600 dark:text-gray-300">{cert.issuer}</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-end">
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-light-surface dark:bg-dark-surface text-light-accent dark:text-dark-accent shadow-sm border border-light-accent/20 dark:border-dark-accent/20">
                            {cert.date}
                        </span>
                    </div>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed relative z-10">
                    {cert.description}
                </p>

                {/* Decorative background element */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-light-accent/5 dark:bg-dark-accent/5 rounded-full blur-2xl group-hover:bg-light-accent/10 dark:group-hover:bg-dark-accent/10 transition-colors duration-500"></div>
            </div>
        </div>
    );
};

const Certifications: React.FC = () => {
    return (
        <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-10 text-gray-800 dark:text-white">Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10">
                {certificationsData.map((cert, index) => (
                    <CertificationCard key={index} cert={cert} index={index} />
                ))}
            </div>
        </div>
    );
};

export default Certifications;
