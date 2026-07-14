import React from 'react';
import anime from 'animejs';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { GitHubIcon, LinkedInIcon } from './icons/Icons';

const SocialLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
    const linkRef = React.useRef<HTMLAnchorElement>(null);

    const handleMouseEnter = () => {
        anime({
            targets: linkRef.current,
            translateY: -5,
            scale: 1.1,
            color: document.documentElement.classList.contains('dark') ? '#ffb347' : '#e8590c',
            duration: 300,
            easing: 'easeOutSine'
        });
    };

    const handleMouseLeave = () => {
        anime({
            targets: linkRef.current,
            translateY: 0,
            scale: 1,
            color: document.documentElement.classList.contains('dark') ? '#c9c4bd' : '#4a4540',
            duration: 300,
            easing: 'easeInSine'
        });
    };

    return (
        <a
            href={href}
            ref={linkRef}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="text-light-text dark:text-dark-text transition-colors"
        >
            {children}
        </a>
    );
};


const Contact: React.FC = () => {
    const sectionRef = useScrollAnimation<HTMLDivElement>({
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutExpo',
    });

    return (
        <section id="contact" className="py-24 md:py-28 bg-light-bg/50 dark:bg-dark-bg/40 backdrop-blur-xl border-t border-light-border dark:border-dark-border">
            <div ref={sectionRef} className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-4 font-display bg-gradient-to-r from-light-accent to-light-accent-2 dark:from-dark-accent dark:to-dark-accent-2 bg-clip-text text-transparent inline-block w-full">Get In Touch</h2>
                <div className="w-24 h-1 mx-auto bg-light-accent dark:bg-dark-accent rounded-full mb-12"></div>
                <div className="max-w-lg mx-auto text-center">
                    <p className="text-lg mb-4">I'm currently open to new opportunities and always happy to talk about interesting projects. Feel free to reach out!</p>

                    <div className="mt-12 flex justify-center space-x-8">
                        <SocialLink href="https://github.com/LLawlietBLANK">
                            <GitHubIcon className="w-8 h-8" />
                        </SocialLink>
                        <SocialLink href="https://linkedin.com/in/saksham-sharma2303">
                            <LinkedInIcon className="w-8 h-8" />
                        </SocialLink>
                    </div>

                    <footer className="mt-20 text-center text-gray-500 dark:text-gray-400">
                        <p>&copy; {new Date().getFullYear()} Saksham Sharma. All rights reserved.</p>
                        <p>Designed & Built with ♡</p>
                    </footer>
                </div>
            </div>
        </section>
    );
};

export default Contact;
