import React, { useEffect, useRef } from "react";
import "./Skills.css";

const Skills = () => {
  const skillsRef = useRef(null);

  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        { name: "React.js", level: 95 },
        { name: "Angular", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 85 },
        { name: "HTML5/CSS3", level: 90 },
      ],
    },
    {
      name: "Frameworks & Libraries",
      skills: [
        { name: "React Native", level: 85 },
        { name: "Redux", level: 90 },
        { name: "Hooks", level: 95 },
        { name: "Three.js", level: 80 },
        { name: "Zustand", level: 85 },
      ],
    },
    {
      name: "Others",
      skills: [
        { name: "UI/UX Design", level: 85 },
        { name: "Python", level: 75 },
        { name: "MySQL", level: 70 },
        { name: "Team Management", level: 80 },
        { name: "Problem Solving", level: 90 },
      ],
    },
  ];

  useEffect(() => {
    // Function to check if an element is in viewport
    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
      );
    };

    // Function to animate skill bars
    const animateSkillBars = () => {
      if (!skillsRef.current) return;

      const skillBars = skillsRef.current.querySelectorAll(".skill-progress");

      skillBars.forEach((bar) => {
        const level = bar.getAttribute("data-level");
        if (isInViewport(bar)) {
          // Set width via inline style
          bar.style.width = `${level}%`;
        }
      });
    };

    // Initial animation check
    animateSkillBars();

    // Add scroll event listener
    window.addEventListener("scroll", animateSkillBars);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", animateSkillBars);
    };
  }, []);

  return (
    <section id="skills" className="skills" ref={skillsRef}>
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>

        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <div className="skill-category" key={index}>
              <h3 className="category-title">{category.name}</h3>
              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <div className="skill" key={skillIndex}>
                    <div className="skill-header">
                      <h4 className="skill-name">{skill.name}</h4>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: "0%" }} // Start at 0%
                        data-level={skill.level}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="technologies">
          <h3 className="tech-title">Other Technologies & Tools</h3>
          <div className="tech-cloud">
            <span className="tech-item">SASS</span>
            <span className="tech-item">CSS</span>
            <span className="tech-item">ReactDOM</span>
            <span className="tech-item">Bootstrap</span>
            <span className="tech-item">Tailwind</span>
            <span className="tech-item">Material-UI</span>
            <span className="tech-item">Figma</span>
            <span className="tech-item">JIRA</span>
            <span className="tech-item">React Fiber</span>
            <span className="tech-item">NodeJS</span>
            <span className="tech-item">Django</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
