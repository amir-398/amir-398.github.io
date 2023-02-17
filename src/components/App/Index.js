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
export const ShowInfoPageContext = React.createContext();
export default function Index() {
  const [showInfoPage, setShowInfoPage] = useState(false);

  const scroll = (btn) => {
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
      <Home scroll={scroll} />
      <AboutMe id="section1" />
      <InfoPage />
    </div>
  );
}
