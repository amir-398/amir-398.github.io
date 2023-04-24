import React, { useState, useRef, useEffect } from "react";
import "./navbar.css";
import cv from "../../assets/cv/CV-AMIR MEBERBECHE.pdf";
import downloadIcon from "../../assets/pics/telecharger.png";
function Navbar({ scrollToNextSection, navbarIsVisible, language, text }) {
  const navbar = useRef(null);
  const [isFrensh, setIsFrensh] = useState(true);
  const [loading, setLoading] = useState(false);
  const hamburger = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  //language toggle
  const toggleSubmit = () => {
    setLoading(true);
    body.style.overflow = "hidden";
    setTimeout(() => {
      setIsFrensh(!isFrensh);
      navbar.current.classList.remove("navbar_active");
      hamburger.current.classList.toggle("active");
    }, 500);
    setTimeout(() => {
      setLoading(false);
      body.style.overflow = "auto";
    }, 3000);
  };
  useEffect(() => {
    language(isFrensh, loading);
  }, [isFrensh, loading]);
  const body = document.querySelector("body");
  const handleClick = () => {
    navbar.current.classList.remove("navbar_active");
    hamburger.current.classList.remove("active");
    body.style.overflow = "auto";
  };
  //open cv
  const openCv = () => {
    window.open(cv, "_blank");
  };

  //resposive toggler

  const handleToggle = () => {
    navbar.current.classList.toggle("navbar_active");
    hamburger.current.classList.toggle("active");
    if (navbar.current.classList.contains("navbar_active")) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  };

  return (
    <div>
      <header>
        <svg
          width="60"
          height="60"
          viewBox="0 0 32 42"
          ref={hamburger}
          onClick={() => handleToggle()}
        >
          <g transform="matrix(1,0,0,1,-389.5,-264.004)">
            <g id="arrow_left2">
              <g transform="matrix(1,0,0,1,0,5)">
                <path
                  id="top"
                  d="M390,270L420,270L420,270C420,270 420.195,250.19 405,265C389.805,279.81 390,279.967 390,279.967"
                />
              </g>
              <g transform="matrix(1,1.22465e-16,1.22465e-16,-1,0.00024296,564.935)">
                <path
                  id="bottom"
                  d="M390,270L420,270L420,270C420,270 420.195,250.19 405,265C389.805,279.81 390,279.967 390,279.967"
                />
              </g>
              <path id="middle" d="M390,284.967L420,284.967" />
            </g>
          </g>
        </svg>

        <nav
          ref={navbar}
          className={`navbar ${navbarIsVisible ? "" : "navbar-bck"} `}
        >
          <div className="resume">
            <a onClick={openCv}>
              <img src={downloadIcon} alt="" />
              <h3>{text.cv}</h3>
            </a>
          </div>
          <div
            style={{ width: "60%", display: "flex", justifyContent: "center" }}
          >
            <ul>
              <li data-to-scrollspy-id="home">
                {scrollToNextSection("home", text.home, handleClick)}
              </li>
              <li data-to-scrollspy-id="about">
                {scrollToNextSection("about", text.about, handleClick)}
              </li>
              <li data-to-scrollspy-id="skills">
                {scrollToNextSection("skills", text.skills, handleClick)}
              </li>
              <li data-to-scrollspy-id="contact">
                {scrollToNextSection("contact", text.contact, handleClick)}
              </li>
            </ul>
          </div>
          <div className="togglerContainer">
            <label className="relative inline-flex items-center justify-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onClick={() => toggleSubmit()}
              />
              <p
                style={{
                  position: "absolute",
                  left: "-22px",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Fr
              </p>
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-violet-700"></div>
              <span className="ml-2">
                <span style={{ color: "white", fontWeight: "bold" }}>En</span>
              </span>
            </label>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
