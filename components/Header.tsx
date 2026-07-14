
import React, { useState, useEffect } from 'react';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = ['About', 'Projects', 'Skills', 'Contact'];

  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
      <div
        className={`relative overflow-hidden flex items-center gap-1 rounded-full pl-2 pr-2 py-1.5 border border-white/40 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-xl backdrop-saturate-150 shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-300 ${isScrolled ? 'shadow-[0_8px_32px_rgba(0,0,0,0.2)]' : ''}`}
        style={{ WebkitBackdropFilter: 'blur(20px) saturate(150%)' }}
      >
        {/* Inner top highlight for the liquid-glass sheen */}
        <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/50 to-transparent dark:from-white/10 opacity-60" aria-hidden="true"></span>

        <nav className="flex items-center gap-0.5 md:gap-1 relative">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollToSection(link.toLowerCase())}
              className="font-medium text-sm md:text-base px-3 md:px-4 py-2 rounded-full text-light-heading dark:text-dark-text hover:text-light-accent dark:hover:text-dark-accent hover:bg-white/50 dark:hover:bg-white/10 transition-all duration-300 whitespace-nowrap"
            >
              {link}
            </button>
          ))}
        </nav>
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="relative w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full text-light-heading dark:text-dark-text hover:text-light-accent dark:hover:text-dark-accent hover:bg-white/50 dark:hover:bg-white/10 transition-all duration-300 shrink-0"
        >
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
