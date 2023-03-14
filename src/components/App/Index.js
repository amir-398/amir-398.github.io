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
export const ShowInfoPageContext = React.createContext();
export default function Index() {
  const [homeIsActive, setHomeIsActive] = useState(false);
  const [aboutIsActive, setAboutIsActive] = useState(false);
  const [skillsIsActive, setSkillsIsActive] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
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
  console.log(screenWidth);
  useEffect(() => {
    if (screenWidth > 768) {
      const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        if (prevScrollPos > currentScrollPos) {
          setVisible(true);
        } else {
          setVisible(false);
        }
        setPrevScrollPos(currentScrollPos);
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [screenWidth]);

  const scrollToNextSction = (id, btn) => {
    return (
      <Link
        to={id}
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
        scrollToNextSction={scrollToNextSction}
      />
      <ScrollSpy scrollThrottle={1000} useBoxMethod={false}>
        <Home
          id="section1"
          scrollToNextSction={scrollToNextSction}
          setHomeIsActive={setHomeIsActive}
        />
        <AboutMe
          id="section2"
          scrollToNextSction={scrollToNextSction}
          setAboutIsActive={setAboutIsActive}
        />
        <InfoPage id="section3" setSkillsIsActive={setSkillsIsActive} />
        <Contact />
      </ScrollSpy>
    </div>
  );
}
