import React, { useEffect, useState } from "react";
import { IoCallSharp, IoMail } from "react-icons/io5";
import star from "../../assets/pics/star.svg";
import logo from "../../assets/logo/logo_footer.png";
import igIcon from "../../assets/pics/instagram.png";
import lkIcon from "../../assets/pics/linkedin.png";
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
          key={i}
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
            <a href="tel:+33601770814">(+33) 6.01.77.08.14</a>
          </p>
          <p>
            <IoMail />
            <a href="mailto: amir.398@hotmail.fr">amir.398@hotmail.fr</a>
          </p>
        </div>
        <div className="socialContainer">
          <div className="icons">
            <a
              href="https://instagram.com/amir_meberbeche?igshid=OGRjNzg3M2Y="
              target="_blank"
            >
              <img src={igIcon} alt="instagram Icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/amir-meberbeche-337968249/"
              target="_blank"
            >
              <img src={lkIcon} alt="linkedin Icon" />
            </a>
          </div>
          <p>Copyright 2023. All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}
