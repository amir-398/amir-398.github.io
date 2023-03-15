import React, { useRef } from "react";
import "./navbar.css";
import hamburger from "../../assets/menu/menu.png";
import downloadIcon from "../../assets/svg/download.png";
import cv from "../../assets/cv/AMIR MEBERBECHE.pdf";
function Navbar({
  scrollToNextSection,
  aboutIsActive,
  skillsIsActive,
  navbarIsVisible,
}) {
  //open cv
  const openCv = () => {
    window.open(cv, "_blank");
  };

  //resposive toggler
  const navbar = useRef(null);
  const body = document.querySelector("body");
  const handleSubmit = () => {
    navbar.current.classList.toggle("navbar_active");
    if (navbar.current.classList.contains("navbar_active")) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  };

  return (
    <div>
      <header>
        <img
          className="hambuger-menu"
          onClick={handleSubmit}
          src={hamburger}
          alt="menu hamburger"
        />
        <nav
          ref={navbar}
          className={`navbar ${navbarIsVisible ? "" : "navbar-bck"} `}
        >
          <a onClick={openCv}>
            <h3 className="resume">
              {" "}
              <img src={downloadIcon} alt="download" /> RESUME
            </h3>
          </a>
          <ul>
            <li data-to-scrollspy-id="home">
              {scrollToNextSection("home", "Home")}
            </li>
            <li data-to-scrollspy-id="about">
              {scrollToNextSection("about", "About")}
            </li>
            <li data-to-scrollspy-id="skills">
              {scrollToNextSection("skills", "Skills")}
            </li>
            <li data-to-scrollspy-id="contact">
              {scrollToNextSection("contact", "Contact")}
            </li>
          </ul>
          <h3 style={{ color: "transparent", cursor: "" }}>Resume</h3>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
