import React, { useRef, useEffect, useState } from "react";
import "./aboutMe.css";
import Overlay from "../overlayStarLight/Overlay";

export default function AboutMe({ scrollToNextSection, text }) {
  const componentRef = useRef(null);
  return (
    <div id="about" className="aboutMecontainer" ref={componentRef}>
      <Overlay componentRef={componentRef} />
      {/* <div className="moon">
        <Moon />
      </div> */}
      <div className="textsContainer">
        <div className="textContainer">
          <p>{text.about_me_p1}</p>
        </div>
        <div className="textContainer">
          <p>{text.about_me_p2}</p>
        </div>
        <div className="textContainer">
          <p>{text.about_me_p3}</p>
        </div>
      </div>
      {scrollToNextSection(
        "skills",
        <button className="button btn-2">{text.btn_next} </button>
      )}
    </div>
  );
}
