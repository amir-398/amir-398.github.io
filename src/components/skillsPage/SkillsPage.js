import React, { Fragment, useEffect, useState, useRef } from "react";
import astronaute from "../../assets/svg/astro.png";
import "./skillsPage.css";
import SkillsSphere from "./SkillsSphere";
import htmlIcon from "../../assets/skillsIcons/html-5.png";
import cssIcon from "../../assets/skillsIcons/css-3.png";
import jsIcon from "../../assets/skillsIcons/script-java.png";
import phpIcon from "../../assets/skillsIcons/php.png";
import reactIcon from "../../assets/skillsIcons/structure.png";
import tsIcon from "../../assets/skillsIcons/typescript.png";
import symfonyIcon from "../../assets/skillsIcons/symfony.png";
import gitIcon from "../../assets/skillsIcons/git.png";
import bootstrapIcon from "../../assets/skillsIcons/bootstrap.png";
import sassIcon from "../../assets/skillsIcons/sass.png";
import mysqlIcon from "../../assets/skillsIcons/mysql.png";
import tailwindIcon from "../../assets/skillsIcons/tailwind.png";
import Overlay from "../overlayStarLight/Overlay";

export default function InfoPage({ scrollToNextSection, text }) {
  const componentRef = useRef(null);
  const skills = [
    { skill: "HTML", icon: htmlIcon },
    { skill: "CSS", icon: cssIcon },
    { skill: "BOOTSTRAP", icon: bootstrapIcon },
    { skill: "Tailwind", icon: tailwindIcon },
    { skill: "SASS", icon: sassIcon },
    { skill: "JAVASCRIPT", icon: jsIcon },
    { skill: "PHP", icon: phpIcon },
    { skill: "REACT", icon: reactIcon },
    { skill: "REACT NATIVE", icon: reactIcon },
    { skill: "MySQL", icon: mysqlIcon },
    { skill: "GIT", icon: gitIcon },
    { skill: "TypeScript", icon: tsIcon },
  ];

  return (
    <>
      <div id="skills" className="infoPageContainer" ref={componentRef}>
        <Overlay componentRef={componentRef} />
        <div className="topWrapper">
          <img className="astronaute" src={astronaute} alt="astronaute" />
          <div className="skillsContainer">
            {skills.map((add) => {
              return (
                <div className="skillsCards">
                  <p>{add.skill}</p>
                  <img src={add.icon} alt="" />
                </div>
              );
            })}
          </div>
          <SkillsSphere />
        </div>
        <div className="btnContainer">
          {scrollToNextSection(
            "contact",
            <button className="button btn-4">{text.btn_next} </button>
          )}
        </div>
      </div>
    </>
  );
}
