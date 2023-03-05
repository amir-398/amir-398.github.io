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

export default function InfoPage({ setSkillsIsActive }) {
  const [animation, setAnimation] = useState(false);
  const [starLight, setStarLight] = useState(null);
  const [filter, setFilter] = useState(null);
  const componentRef = useRef(null);
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

  useEffect(() => {
    const handleScroll = () => {
      const componentPosition = componentRef.current.getBoundingClientRect();

      // On vérifie si le composant est visible dans la fenêtre
      if (componentPosition.top <= window.innerHeight * 0.2) {
        setAnimation(true);
        setSkillsIsActive(true);
      }
    };

    // On ajoute un listener pour détecter les changements de scroll
    window.addEventListener("scroll", handleScroll);

    return () => {
      // On enlève le listener quand le composant est démonté
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (animation) {
      setTimeout(() => {
        setStarLight("starLight");
      }, 2000);
      setTimeout(() => {
        setFilter("filterGone");
      }, 3000);
    }
  }, [animation]);
  return (
    <>
      <div className="infoPageContainer" ref={componentRef}>
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
        <div className={`filter ${filter}`}></div>
        <div className="guide2">
          <div style={{ height: "50vh" }}>
            <div
              className="neon-line4"
              style={{ display: animation ? "block" : "none" }}
            ></div>
          </div>

          <div className={`star2 ${starLight}`}></div>
          <div style={{ height: "50vh" }}>
            <div
              className="neon-line5"
              style={{ display: animation ? "block" : "none" }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
