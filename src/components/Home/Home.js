import React from "react";
import earth from "../../assets/svg/earth.png";
import rock from "../../assets/svg/rock.png";
import littleRocks from "../../assets/svg/little_rocks.png";
import rockDown from "../../assets/svg/rockDown.png";
import rocket from "../../assets/svg/rocket.png";
import AnimatedTitle from "./AnimatedTitle";
import "./home.css";

export default function Home({ scrollToNextSction }) {
  return (
    <div id="section1" className="homeContainer">
      <img className="rock1" src={rock} alt="the moon" />
      <img className="littleRocks" src={littleRocks} alt="the moon" />
      <img className="rockDown" src={rockDown} alt="the moon" />
      <img className="earth" src={earth} alt="the earth" />
      <div className="h-textContainer">
        <AnimatedTitle />
        <h2> LET'S EXPLORE MY UNIVERSE TOGETHER</h2>
        {scrollToNextSction(
          "section2",
          <button className="button">START MISSION</button>
        )}
      </div>
      <img className="rock" src={rock} alt="the moon" />
      <img className="rocket" src={rocket} alt="rocket" />
      <div className="guide">
        <div className="neon-line1"></div>
        <div className="star1"></div>
        <div className="neon-line2"></div>
      </div>
    </div>
  );
}
