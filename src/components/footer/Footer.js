import React, { useEffect, useState } from "react";
import { IoLocation, IoCallSharp, IoMail } from "react-icons/io5";
import star from "../../assets/svg/star.svg";
import logo from "../../assets/svg/logo.png";
import igIcon from "../../assets/svg/instagram.png";
import lkIcon from "../../assets/svg/linkedin.png";
import "./footer.css";
export default function Footer() {
  const [stars, setStars] = useState([]);
  let starNumber = 20;

  useEffect(() => {
    let newStars = [];
    for (let i = 0; i < starNumber; i++) {
      const starSize = Math.floor(Math.random() * 20);
      newStars = [
        ...newStars,
        <img
          className="star"
          src={star}
          style={{ width: starSize, height: starSize }}
        />,
      ];
    }
    setStars(newStars);
  }, []);

  return (
    <div>
      <footer className="footerContainer">
        <div className="logoContainer">
          <img src={logo} alt="logo" />
          <p>
            Développeur web Junior à Paris, Je vous accompagne à concevoir et
            améliorer un site internet qui correspond à votre image.
          </p>
        </div>

        {stars}
        <div className="infoContainer">
          <h2>Amir Meberbeche</h2>
          <p>
            <IoCallSharp />
            (+33) 6.01.77.08.14
          </p>
          <p>
            <IoMail />
            amir.398@hotmail.fr
          </p>
        </div>
        <div className="socialContainer">
          <div className="icons">
            <a href="">
              {" "}
              <img src={igIcon} alt="instagram" />
            </a>
            <a href="">
              <img src={lkIcon} alt="linkedin" />
            </a>
          </div>
          <p>Copyright 2023. All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}
