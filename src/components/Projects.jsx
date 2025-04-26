import React, { useState } from "react";
import "./Projects.css";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Bidflexi B2C Platform",
      description:
        "A revolutionary platform for dynamic hotel bookings, allowing customers to bid on hotel rooms and enabling hotels to optimize occupancy rates.",
      image: "project1.jpg",
      technologies: ["React.js", "Redux", "TypeScript", "SASS"],
      category: "web",
      link: "#",
    },
    {
      id: 2,
      title: "POS Mobile Application",
      description:
        "Point of Sale mobile application designed for restaurants, facilitating order management, payment processing, and inventory tracking.",
      image: "project2.jpg",
      technologies: ["React Native", "Redux", "Node.js"],
      category: "mobile",
      link: "#",
    },
    {
      id: 3,
      title: "Property Management System",
      description:
        "Comprehensive software solution for hotel management, including reservation management, housekeeping, guest services, and reporting.",
      image: "project3.jpg",
      technologies: ["React.js", "Angular", "Django", "MySQL"],
      category: "web",
      link: "#",
    },
    {
      id: 4,
      title: "3D Product Visualizer",
      description:
        "Interactive 3D product visualization tool allowing users to view and customize products in a three-dimensional space.",
      image: "project4.jpg",
      technologies: ["Three.js", "React Fiber", "Zustand"],
      category: "interactive",
      link: "#",
    },
    {
      id: 5,
      title: "Performance Optimization Tool",
      description:
        "A toolkit for analyzing and optimizing web application performance, focusing on lazy loading, component optimization, and caching strategies.",
      image: "project5.jpg",
      technologies: ["JavaScript", "React.js", "Web APIs"],
      category: "tools",
      link: "#",
    },
    {
      id: 6,
      title: "eCommerce Platform",
      description:
        "Feature-rich online shopping platform with product catalog, shopping cart, checkout process, and order management.",
      image: "project6.jpg",
      technologies: ["React.js", "Node.js", "MongoDB"],
      category: "web",
      link: "#",
    },
  ];

  const filters = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Apps" },
    { id: "mobile", name: "Mobile Apps" },
    { id: "interactive", name: "Interactive" },
    { id: "tools", name: "Tools" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>

        <div className="project-filters">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`filter-btn ${
                activeFilter === filter.id ? "active" : ""
              }`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.name}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <div className="project-placeholder">
                  {project.title
                    .split(" ")
                    .map((word) => word[0])
                    .join("")}
                </div>
                <div className="project-overlay">
                  <div className="project-actions">
                    <a
                      href={project.link}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                    <a
                      href={`#project-details-${project.id}`}
                      className="project-details"
                    >
                      <i className="fas fa-info-circle"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span className="tech-badge" key={index}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <p>No projects found in this category.</p>
          </div>
        )}

        <div className="projects-cta">
          <a href="#contact" className="btn">
            Let's Work Together
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
