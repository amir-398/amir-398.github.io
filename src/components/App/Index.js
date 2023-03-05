import React, { useState, useRef, useEffect } from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import AboutMe from "../aboutMe/AboutMe";
import Home from "../Home/Home";
import NeonLine from "../neonLine/NeonLine";
import InfoPage from "../skillsPage/SkillsPage";
import { Link } from "react-scroll";
import Navbar from "../navbar/Navbar";
export const ShowInfoPageContext = React.createContext();
export default function Index() {
  const [homeIsActive, setHomeIsActive] = useState(false);
  const [aboutIsActive, setAboutIsActive] = useState(false);
  const [skillsIsActive, setSkillsIsActive] = useState(false);
  useEffect(() => {
    if (aboutIsActive) {
      setHomeIsActive(false);
      setSkillsIsActive(false);
    }
    if (skillsIsActive) {
      setAboutIsActive(false);
      setHomeIsActive(false);
    }
  }, [aboutIsActive, skillsIsActive]);

  const scrollToAbout = (btn) => {
    return (
      <Link
        to="section1"
        activeClass="active"
        smooth={true}
        duration={1200}
        isDynamic={true}
      >
        {btn}
      </Link>
    );
  };
  return (
    <div>
      <Navbar
        scrollToAbout={scrollToAbout}
        homeIsActive={homeIsActive}
        aboutIsActive={aboutIsActive}
        skillsIsActive={skillsIsActive}
      />
      {/* <Home scrollToAbout={scrollToAbout} setHomeIsActive={setHomeIsActive} /> */}
      <AboutMe id="section1" setAboutIsActive={setAboutIsActive} />
      {/* <InfoPage setSkillsIsActive={setSkillsIsActive} /> */}
    </div>
  );
}
