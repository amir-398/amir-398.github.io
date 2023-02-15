import React from "react";
import moon from "../../assets/svg/moon1.png";
import "./aboutMe.css";
import Moon from "./Moon";

export default function AboutMe() {
  return (
    <div className="container">
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

      <div className="moon">
        <Moon />
      </div>
    </div>
  );
}
