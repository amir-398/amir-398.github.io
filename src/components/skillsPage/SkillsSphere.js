import React, { useEffect, useState } from "react";
import TagCanvas from "tag-canvas";

import "./skillsPage.css";
function SkillsSphere() {
  useEffect(() => {
    TagCanvas.Start("myCanvas", "tags", {
      textColour: "#08fdd8",
      outlineColour: "#ff00ff",
      reverse: false,
      depth: 0.8,
      maxSpeed: 0.01,
      wheelZoom: false,
      decel: 0.95,
      minSpeed: 0.01,
      initial: [-0.2, 0.1],
      zoom: 1,
      zoomMax: 1,
      zoomMin: 1,
      animTiming: "Smooth",
      freezeActive: false,
      shuffleTags: true,
      shape: "sphere",
      fadeIn: 1000,
      tooltip: null,
      txtOpt: true,
      txtScale: 2,
      weight: true,
    });
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = function () {
      ctx.drawImage(
        img,
        canvas.width / 2 - img.width / 2,
        canvas.height / 2 - img.height / 2
      );
    };
  }, []);

  return (
    <>
      <canvas width="650" height="650" id="myCanvas">
        <p>
          Anything in here will be replaced on browsers that do not support the
          canvas element
        </p>
      </canvas>
      <div id="tags" style={{ display: "none" }}>
        <ul>
          <li>
            <a href="/">Redux</a>
          </li>
          <li>
            <a href="/">Javascript</a>
          </li>
          <li>
            <a href="/">Typescript</a>
          </li>
          <li>
            <a href="/">React native</a>
          </li>
          <li>
            <a href="/">React Js</a>
          </li>
          <li>
            <a href="/">Bootstrap</a>
          </li>
          <li>
            <a href="/">CSS</a>
          </li>
          <li>
            <a href="/">HTML</a>
          </li>
          <li>
            <a href="/">PHP</a>
          </li>
          <li>
            <a href="/">MySQL</a>
          </li>
          <li>
            <a href="/">Firebase</a>
          </li>
          <li>
            <a href="/">Git</a>
          </li>
          <li>
            <a href="/">GitHub</a>
          </li>
          <li>
            <a href="/">NodeJS</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SkillsSphere;
