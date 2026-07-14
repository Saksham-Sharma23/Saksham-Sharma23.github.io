import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import avatarImage from './assets/avatar.png';

const Hero: React.FC = () => {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate the name letter-by-letter
    if (nameRef.current) {
      const textWrapper = nameRef.current;
      textWrapper.innerHTML = textWrapper.textContent!.replace(/\S/g, "<span class='letter'>$&</span>");

      anime.timeline({ loop: false })
        .add({
          targets: '.hero-content .letter',
          translateY: [-100, 0],
          easing: 'easeOutExpo',
          duration: 1400,
          delay: (el: HTMLElement, i: number) => 30 * i,
        });
    }

    // Gentle float on the avatar
    if (avatarRef.current) {
      anime({
        targets: avatarRef.current,
        translateY: ['-4%', '4%'],
        direction: 'alternate',
        loop: true,
        duration: 4000,
        easing: 'easeInOutSine',
      });
    }
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen w-full relative flex flex-col items-center justify-center bg-transparent pt-32 pb-16 md:pt-36"
    >
      <div className="hero-content text-center z-10 p-4">
        <div
          ref={avatarRef}
          className="mb-8 w-64 h-64 md:w-72 md:h-72 mx-auto rounded-full overflow-hidden border-4 border-light-accent dark:border-dark-accent shadow-2xl transition-all duration-500 hover:shadow-[0_0_40px_rgba(232,89,12,0.5)] dark:hover:shadow-[0_0_40px_rgba(255,179,71,0.5)]"
        >
          <img src={avatarImage} alt="Saksham Sharma" className="w-full h-full object-cover" />
        </div>
        <h1
          ref={nameRef}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-light-heading dark:text-dark-heading mb-4 font-display tracking-tight"
        >
          SAKSHAM SHARMA
        </h1>
        <p
          className="text-xl md:text-2xl font-semibold font-display bg-gradient-to-r from-dark-accent via-dark-accent-2 to-dark-accent bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient animate-fade-in-up"
          style={{ animationDelay: '1s' }}
        >
          Software Developer
        </p>
        <p
          className="text-lg md:text-xl text-light-text dark:text-gray-400 mt-6 max-w-2xl mx-auto leading-relaxed animate-fade-in-up"
          style={{ animationDelay: '1.2s' }}
        >
          Hi, I'm Saksham, a software developer who enjoys turning ideas into clean, reliable products.
          I build full-stack web apps and thoughtful backends, and I like working close to the details:
          readable code, sensible architecture, and interfaces that just feel right to use.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
          <a
            href="#projects"
            className="inline-block bg-light-accent dark:bg-dark-accent text-white dark:text-dark-bg font-semibold py-3 px-8 rounded-full text-base hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-light-accent/25 dark:shadow-dark-accent/25"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-block border border-light-accent/40 dark:border-dark-accent/40 text-light-accent dark:text-dark-accent font-semibold py-3 px-8 rounded-full text-base hover:bg-light-accent/10 dark:hover:bg-dark-accent/10 transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
