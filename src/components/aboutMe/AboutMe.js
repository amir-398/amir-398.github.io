import React, { useRef, useEffect, useState } from "react";

import "./aboutMe.css";
import Moon from "./Moon";

export default function AboutMe({ id }) {
  const [animation, setAnimation] = useState(false);
  const [starLight, setStarLight] = useState(null);
  const [filter, setFilter] = useState(null);
  const componentRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const componentPosition = componentRef.current.getBoundingClientRect();

      // On vérifie si le composant est visible dans la fenêtre
      if (componentPosition.top <= window.innerHeight * 0.2) {
        setAnimation(true);
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
    <div id={id} className="container" ref={componentRef}>
      <div className="textsContainer">
        <div className="textContainer">
          <p>
            I’m a futur fullstack web developer actually studying at EEMI in
            Paris and I am passionate about coding and solving problems through
            code.
          </p>
        </div>
        <div className="textContainer">
          <p>
            I am proficient in various programming languages and I enjoy
            learning new technologies to expand my skillset. Throughout my
            studies and personal projects, I have gained experience in web
            development. I am a detail-oriented and creative problem solver, and
            I enjoy finding efficient and elegant solutions to complex
            challenges. I am also a strong communicator and team player, and I
            enjoy collaborating with others to bring ideas to life. In my free
            time, I enjoy working on personal coding projects, attending
            hackathons, and staying up-to-date with the latest trends and
            developments in the tech industry.
          </p>
        </div>
        <div className="textContainer">
          <p>
            I’m a looking for a work-study contract starting from september
            2023. and I am excited to work alongside other amazing programmers
            and learn so much more !
          </p>
        </div>
      </div>
      <div className={`filter ${filter}`}></div>
      <div className="moon">
        <Moon />
      </div>
      <div className="guide2">
        <div style={{ height: "50vh" }}>
          <div
            className="neon-line3"
            style={{ display: animation ? "block" : "none" }}
          ></div>
        </div>

        <div className={`star2 ${starLight}`}></div>
        <div style={{ height: "50vh" }}>
          <div
            className="neon-line4"
            style={{ display: animation ? "block" : "none" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
