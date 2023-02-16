import React, { useState } from "react";
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
export const ShowInfoPageContext = React.createContext();
export default function Index() {
  const [showInfoPage, setShowInfoPage] = useState(false);
  console.log("index", showInfoPage);
  return (
    <div>
      <Home />
      <NeonLine />
      <AboutMe />
      <InfoPage />
    </div>
  );
}
