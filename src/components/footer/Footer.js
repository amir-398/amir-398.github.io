import React from "react";
import {
  IoLocation,
  IoCallSharp,
  IoMail,
  IoLogoLinkedin,
} from "react-icons/io5";
import logo from "../../assets/svg/logo.png";
import igIcon from "../../assets/svg/instagram.png";
import lkIcon from "../../assets/svg/linkedin.png";
import "./footer.css";
export default function Footer() {
  return (
    <div>
      <footer className="footerContainer">
        <img src={logo} alt="logo" />
        <div className="infoContainer">
          <h2>Amir Meberbeche</h2>
          <p>
            {" "}
            <IoLocation /> 8 Impasse André le notre 94000 Créteil
          </p>
          <p>
            {" "}
            <IoCallSharp />
            (+33) 6.01.77.08.14
          </p>
          <p>
            {" "}
            <IoMail />
            amir.398@hotmail.fr
          </p>
        </div>
        <div className="socialContainer">
          <div className="icons">
            <img src={igIcon} alt="instagram" />
            <img src={lkIcon} alt="linkedin" />
          </div>
          <p>Copyright 2023. All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}
