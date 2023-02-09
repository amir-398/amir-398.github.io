import React, { useState } from "react";
import { Link } from "react-router-dom";
import InfoPage from "../InfoPage/InfoPage";
import home from "./home.css";

export default function Home({ showInfoPage, setShowInfoPage }) {
  const handleClick = () => {
    setShowInfoPage(true);
  };
  console.log(showInfoPage);
  return (
    <div>
      <div
        className={`homeContainer ${
          showInfoPage ? "homeContainerTransition" : ""
        } `}
      >
        <h3>Resume</h3>
        <h1 className="b">Hi, I'M AMIR</h1>
        <h2> LET'S EXPLORE MY UNIVERSE TOGETHER</h2>
        <button onClick={handleClick}>START MISSION</button>
      </div>
    </div>
  );
}
