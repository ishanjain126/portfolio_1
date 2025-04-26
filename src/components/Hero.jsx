import React, { useEffect, useState } from "react";
import "./Hero.css";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Frontend Developer";
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    let interval;

    if (isTyping) {
      interval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
          setTimeout(() => setIsTyping(false), 1000);
        }
      }, 100);
    } else {
      interval = setInterval(() => {
        if (currentIndex > 0) {
          setText(fullText.slice(0, currentIndex));
          currentIndex--;
        } else {
          clearInterval(interval);
          setTimeout(() => setIsTyping(true), 500);
        }
      }, 50);
    }

    return () => clearInterval(interval);
  }, [isTyping]);

  return (
    <section id="home" className="hero">
      <div className="hero-particles"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <h1>
            <span className="greeting">Hi, I'm</span>
            <span className="name">Ishan Jain</span>
            <span className="role">
              <span className="static-text">Senior </span>
              <span className="dynamic-text">{text}</span>
              <span className="cursor">|</span>
            </span>
          </h1>
          <p className="hero-description">
            I build exceptional digital experiences with 4+ years of expertise
            in React, Angular, and modern frontend technologies.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">
              Get In Touch
            </a>
            <a href="#projects" className="btn btn-secondary">
              View My Work
            </a>
          </div>
        </div>
        <div className="hero-code-snippet">
          <pre>
            <code>
              {`<div className="developer">
  <span className="const">const</span> <span className="variable">ishanJain</span> = {
    <span className="property">role</span>: <span className="string">"Senior Frontend Developer"</span>,
    <span className="property">experience</span>: <span className="number">4</span>,
    <span className="property">expertise</span>: [
      <span className="string">"React"</span>, 
      <span className="string">"Angular"</span>, 
      <span className="string">"TypeScript"</span>,
      <span className="string">"UI/UX Design"</span>
    ],
    <span className="property">currentlyLearning</span>: <span className="string">"Always Something New"</span>
  };
</span>`}
            </code>
          </pre>
        </div>
      </div>
      <div className="hero-scroll">
        <a href="#about">
          <div className="chevron"></div>
          <div className="chevron"></div>
          <div className="chevron"></div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
