import React, { useState, useRef, useEffect } from "react";
import "./navbar.css";
import hamburger from "../../assets/menu/menu.png";
import { IoCloudDownloadSharp } from "react-icons/io5";
import cv from "../../assets/cv/AMIR MEBERBECHE.pdf";
import downloadIcon from "../../assets/svg/telecharger.png";
function Navbar({ scrollToNextSection, navbarIsVisible, language, text }) {
  const navbar = useRef(null);
  const [isFrensh, setIsFrensh] = useState(true);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  //language toggle
  const toggleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setIsFrensh(!isFrensh);
    }, 500);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };
  useEffect(() => {
    language(isFrensh, loading);
  }, [isFrensh, loading]);
  const body = document.querySelector("body");
  const handleClick = () => {
    navbar.current.classList.remove("navbar_active");
    body.style.overflow = "auto";
  };
  //open cv
  const openCv = () => {
    window.open(cv, "_blank");
  };

  //resposive toggler

  const handleToggle = () => {
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
          onClick={handleToggle}
          src={hamburger}
          alt="menu hamburger"
        />
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
            <label class="relative inline-flex items-center justify-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                class="sr-only peer"
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
              <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-violet-700"></div>
              <span class="ml-2">
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
