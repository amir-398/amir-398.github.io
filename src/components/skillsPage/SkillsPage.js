import React, { Fragment, useEffect } from "react";
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

export default function InfoPage() {
  const skills = [
    { skill: "HTML", icon: htmlIcon },
    { skill: "CSS", icon: cssIcon },
    { skill: "BOOTSTRAP", icon: bootstrapIcon },
    { skill: "SASS", icon: sassIcon },
    { skill: "JAVASCRIPT", icon: jsIcon },
    { skill: "PHP", icon: phpIcon },
    { skill: "REACT", icon: reactIcon },
    { skill: "REACT NATIVE", icon: tsIcon },
    { skill: "TYPESCRIPT", icon: tsIcon },
    { skill: "SYMPHONY", icon: symfonyIcon },
    { skill: "GIT", icon: gitIcon },
    { skill: "JDX", icon: tsIcon },
  ];

  return (
    <>
      <div className="infoPageContainer">
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
    </>
  );
}
