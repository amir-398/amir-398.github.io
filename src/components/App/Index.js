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
import ScrollSpy from "react-ui-scrollspy";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
export const ShowInfoPageContext = React.createContext();
export default function Index() {
  const [homeIsActive, setHomeIsActive] = useState(false);
  const [aboutIsActive, setAboutIsActive] = useState(false);
  const [skillsIsActive, setSkillsIsActive] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  console.log("prevScrollPos", prevScrollPos);
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

  const screenWidth = window.screen.width;
  useEffect(() => {
    if (screenWidth > 768) {
      const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        if (currentScrollPos > 200) {
          setVisible(false);
        } else {
          setVisible(true);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const scrollToNextSection = (id, btn, handleClick) => {
    return (
      <Link
        to={id}
        onClick={handleClick}
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
        homeIsActive={homeIsActive}
        aboutIsActive={aboutIsActive}
        skillsIsActive={skillsIsActive}
        navbarIsVisible={visible}
        scrollToNextSection={scrollToNextSection}
      />
      <ScrollSpy scrollThrottle={1000} useBoxMethod={false}>
        <Home
          id="home"
          scrollToNextSection={scrollToNextSection}
          setHomeIsActive={setHomeIsActive}
        />
        <AboutMe
          id="about"
          scrollToNextSection={scrollToNextSection}
          setAboutIsActive={setAboutIsActive}
        />
        <InfoPage
          scrollToNextSection={scrollToNextSection}
          id="skills"
          setSkillsIsActive={setSkillsIsActive}
        />
        <Contact id="contact" />
      </ScrollSpy>
      <Footer />
    </div>
  );
}
