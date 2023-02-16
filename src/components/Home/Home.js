import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./home.css";

import earth from "../../assets/svg/earth.png";

import rock from "../../assets/svg/rock.png";
import littleRocks from "../../assets/svg/little_rocks.png";
import rockDown from "../../assets/svg/rockDown.png";
import rocket from "../../assets/svg/rocket.png";

import AnimatedTitle from "./AnimatedTitle";

export default function Home({ showInfoPage, setShowInfoPage }) {
  const [rocketLaunch, SetrocketLaunch] = useState(false);
  const handleClick = () => {
    setShowInfoPage(true);
  };
  console.log(showInfoPage);
  const rocketSubmit = () => {
    SetrocketLaunch(true);
  };

  return (
    <div>
      <div className="homeContainer">
        <h3>Resume</h3>
        <img className="rock1" src={rock} alt="the moon" />
        <img className="littleRocks" src={littleRocks} alt="the moon" />
        <img className="rockDown" src={rockDown} alt="the moon" />
        <img className="earth" src={earth} alt="the earth" />
        <AnimatedTitle />
        <h2> LET'S EXPLORE MY UNIVERSE TOGETHER</h2>
        <button onClick={rocketSubmit}>START MISSION</button>
        <img className="rock" src={rock} alt="the moon" />
        <div className={rocketLaunch ? "rocketContainer" : ""}></div>
        <img
          className={rocketLaunch ? "rocketLaunch" : "rocket"}
          src={rocket}
          alt="rocket"
        />
      </div>
    </div>
  );
}
