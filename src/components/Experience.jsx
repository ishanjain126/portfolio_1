import React, { useState } from "react";
import "./Experience.css";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("work"); // 'work' or 'education'

  const experiences = [
    {
      title: "Software Engineer",
      company: "Avataar.ai",
      period: "July 2024 - Present",
      description: [
        "Addressed technical debt at the architectural level, achieving a 40-50% improvement in scalability and performance.",
        "Focused on resolving critical bugs, driving increased client acquisition and enhancing customer satisfaction.",
        "Designed and implemented user-centric features to improve the overall UX, simplifying workflows and addressing intricate user pain points.",
      ],
      skills: ["React.js", "Vanilla.js", "Zustand", "React Fiber", "Three.js"],
    },
    {
      title: "Senior Software Engineer",
      company: "Stayflexi (YC-21)",
      period: "Aug 2021 - June 2024",
      description: [
        "Pioneered Bidflexi B2C project, revolutionizing dynamic hotel bookings and foreseeing a revenue surge exceeding 100%.",
        "Orchestrated the development of Stayflexi's POS Mobile app, catalyzing a 50% monthly revenue surge by successfully penetrating the restaurant market.",
        "Architected the core revenue-generating backbone of Stayflexi with the inception and creation of a robust PMS and OTA Software from scratch.",
        "Engineered a 75% boost in application performance, bolstering customer retention by 50%, through the strategic implementation of Lazy Loading, Pure Components, Memoization, and Profiling techniques.",
        "Migrated a legacy application from Jython to Django, improving scalability and substantially reducing operational costs.",
      ],
      skills: [
        "React.js",
        "Angular",
        "React Native",
        "JavaScript",
        "TypeScript",
        "Python",
        "Django",
        "MySQL",
        "Redux",
      ],
    },
    {
      title: "Full Stack Developer Intern",
      company: "Eoraa Consulting",
      period: "Jan 2021 - July 2021",
      description: [
        "Developed Figma Designs and web applications.",
        "Created SRS for assigned projects.",
      ],
      skills: ["Vanilla.Js", "Python", "MySQL", "React.JS", "SASS"],
    },
  ];

  const education = [
    {
      degree: "B.Tech in Computer Science",
      institution: "NIIT University",
      period: "2017 - 2021",
      grade: "CGPA: 8.0",
      description:
        "Focused on core computer science fundamentals, data structures, algorithms, and software development methodologies.",
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">My Journey</h2>

        <div className="tabs">
          <button
            className={`tab ${activeTab === "work" ? "active" : ""}`}
            onClick={() => setActiveTab("work")}
          >
            Work Experience
          </button>
          <button
            className={`tab ${activeTab === "education" ? "active" : ""}`}
            onClick={() => setActiveTab("education")}
          >
            Education
          </button>
        </div>

        <div className="tab-content">
          {activeTab === "work" && (
            <div className="work-experience">
              <div className="timeline">
                {experiences.map((exp, index) => (
                  <div className="timeline-item" key={index}>
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <div className="timeline-header">
                        <h3>{exp.title}</h3>
                        <span className="company">{exp.company}</span>
                        <span className="period">{exp.period}</span>
                      </div>
                      <div className="timeline-body">
                        <ul className="responsibilities">
                          {exp.description.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                        <div className="skills-used">
                          <h4>Technologies:</h4>
                          <div className="skill-tags">
                            {exp.skills.map((skill, idx) => (
                              <span className="skill-tag" key={idx}>
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "education" && (
            <div className="education">
              <div className="timeline">
                {education.map((edu, index) => (
                  <div className="timeline-item" key={index}>
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <div className="timeline-header">
                        <h3>{edu.degree}</h3>
                        <span className="company">{edu.institution}</span>
                        <span className="period">{edu.period}</span>
                      </div>
                      <div className="timeline-body">
                        <p className="grade">{edu.grade}</p>
                        <p>{edu.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
