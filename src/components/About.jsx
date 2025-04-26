import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container about-container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-image">
            <div className="image-container">
              {/* Placeholder for profile image */}
              <div className="placeholder-image">IJ</div>
              <div className="image-outline"></div>
            </div>
          </div>

          <div className="about-text">
            <h3>
              Passionate Frontend Developer with a Flair for User-Centric Design
            </h3>
            <p>
              I'm a Senior Software Engineer specializing in frontend
              development with 4+ years of experience. My expertise lies in
              creating exceptional digital experiences using React.js, Angular,
              and modern JavaScript frameworks.
            </p>
            <p>
              Throughout my career at companies like Avataar.ai and Stayflexi
              (YC-21), I've led development projects that have significantly
              improved application performance and user experiences. I'm
              passionate about solving complex problems and creating intuitive,
              responsive interfaces that users love.
            </p>
            <p>
              Beyond coding, I enjoy collaborating with cross-functional teams,
              mentoring junior developers, and staying at the cutting edge of
              frontend technologies. I believe in writing clean, maintainable
              code and delivering solutions that exceed expectations.
            </p>

            <div className="about-highlights">
              <div className="highlight">
                <span className="highlight-number">4+</span>
                <span className="highlight-text">Years Experience</span>
              </div>
              <div className="highlight">
                <span className="highlight-number">20+</span>
                <span className="highlight-text">Projects Completed</span>
              </div>
              <div className="highlight">
                <span className="highlight-number">10+</span>
                <span className="highlight-text">Technologies Mastered</span>
              </div>
            </div>

            <div className="about-cta">
              <a href="#contact" className="btn">
                Get In Touch
              </a>
              <a
                href="/resume.pdf"
                className="btn btn-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
