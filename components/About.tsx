import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const aboutAnimation = {
    translateY: [50, 0],
    opacity: [0, 1],
    duration: 1000,
    easing: 'easeOutExpo',
};

const highlights = ['Full-Stack', 'React & TypeScript', 'Python & APIs', 'Open to Work'];

const About: React.FC = () => {
    const sectionRef = useScrollAnimation<HTMLDivElement>(aboutAnimation);

    return (
        <section id="about" className="py-24 md:py-28 bg-light-surface/70 dark:bg-dark-surface/50 backdrop-blur-xl border-y border-light-border dark:border-dark-border">
            <div ref={sectionRef} className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-4 font-display bg-gradient-to-r from-light-accent to-light-accent-2 dark:from-dark-accent dark:to-dark-accent-2 bg-clip-text text-transparent inline-block w-full">About Me</h2>
                <div className="w-24 h-1 mx-auto bg-light-accent dark:bg-dark-accent rounded-full mb-16"></div>

                <div className="max-w-3xl mx-auto text-center">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-6 font-display text-light-heading dark:text-dark-heading">
                        Software Developer
                    </h3>
                    <p className="text-lg mb-4 leading-relaxed">
                        I'm Saksham, a software developer who likes building things that work well and feel good to use.
                        Whether it's a web app, a backend service, or a data-driven tool, I care about writing clean,
                        maintainable code and shipping features end to end.
                    </p>
                    <p className="text-lg leading-relaxed mb-10">
                        I work comfortably across the stack — from React and modern JavaScript on the front end to
                        Python, APIs, and databases on the back end. I'm always learning, and I enjoy taking a rough
                        idea and turning it into something people can actually use.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {highlights.map((tag) => (
                            <span
                                key={tag}
                                className="text-sm font-medium px-4 py-2 rounded-full bg-light-accent/10 dark:bg-dark-accent/10 text-light-accent dark:text-dark-accent border border-light-accent/20 dark:border-dark-accent/20"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
