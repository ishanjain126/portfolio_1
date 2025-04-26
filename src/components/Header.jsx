import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container header-container">
        <div className="logo">
          <a href="#home">IJ</a>
        </div>

        <nav className={`nav ${mobileMenuOpen ? "nav-open" : ""}`}>
          <ul className="nav-links">
            <li>
              <a href="#home" onClick={() => setMobileMenuOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setMobileMenuOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" onClick={() => setMobileMenuOpen(false)}>
                Skills
              </a>
            </li>
            <li>
              <a href="#experience" onClick={() => setMobileMenuOpen(false)}>
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => setMobileMenuOpen(false)}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="mobile-toggle" onClick={toggleMobileMenu}>
          <div className={`bar ${mobileMenuOpen ? "animate" : ""}`}></div>
          <div className={`bar ${mobileMenuOpen ? "animate" : ""}`}></div>
          <div className={`bar ${mobileMenuOpen ? "animate" : ""}`}></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
