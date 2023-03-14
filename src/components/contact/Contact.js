import React from "react";
import astroContact from "../../assets/svg/astroContact.png";
import "./contact.css";
function Contact(props) {
  return (
    <div className="contactContainer">
      <div className="astroContainer">
        <img src={astroContact} alt="" />
      </div>
      <div className="formContainer"></div>
    </div>
  );
}

export default Contact;
