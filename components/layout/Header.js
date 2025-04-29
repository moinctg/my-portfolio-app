'use client';

import React, { useEffect, useRef } from 'react';
import Navbar from './Navbar';
import Typed from 'typed.js'; // Direct import instead of dynamic import

export default function Header() {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'IT Administrator',
        'IT Support Engineer',
        'AI-API Developer',
        'Full Stack Developer',
        'React Developer',
        'Backend Developer'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: '|',
      smartBackspace: true
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      // Cleanup on component unmount
      typed.destroy();
    };
  }, []);

  return (
    <>
      <Navbar />
      <section id="hero" className="hero section dark-background">
        <img 
          src="/assets/img/hero-img.jpeg" 
          alt="Md Moinuddin Kamal - IT Professional"
          className="hero-background"
          data-aos="fade-in"
          loading="lazy"
        />
        
        <div 
          className="container d-flex flex-column align-items-center justify-content-center text-center" 
          data-aos="fade-up" 
          data-aos-delay={100}
        >
          <h1 className="hero-title">
            <span className="greeting" data-aos="fade-right">Hello, I'm</span>
            <span className="name" data-aos="fade-left" data-aos-delay="150">Md Moinuddin Kamal</span>
          </h1>
          
          <div className="profession-container" data-aos="zoom-in" data-aos-delay="300">
            <p className="profession">
              <span ref={typedRef}></span>
            </p>
          </div>
          
          <div className="hero-cta" data-aos="fade-up" data-aos-delay="450">
            <a href="#contact" className="btn btn-primary">
              Hire Me
            </a>
            <a href="#portfolio" className="btn btn-outline-light ml-3">
              View Work
            </a>
          </div>
        </div>
        
        <div className="scroll-down" data-aos="fade-up" data-aos-delay="600">
          <a href="#about" aria-label="Scroll down">
            <i className="bi bi-chevron-down"></i>
          </a>
        </div>
      </section>
    </>
  );
}