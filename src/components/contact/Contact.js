import React, { useRef, useState } from "react";
import astroContact from "../../assets/svg/astroContact.png";
import planet01 from "../../assets/svg/planet01.png";
import planet02 from "../../assets/svg/planet02.png";
import planet03 from "../../assets/svg/planet03.png";
import planet04 from "../../assets/svg/planet05.png";
import planet05 from "../../assets/svg/planet06.png";
import planet06 from "../../assets/svg/planet07.png";
import "./contact.css";
function Contact() {
  const [info, setInfo] = useState([
    { name: "" },
    { email: "" },
    { description: "" },
  ]);
  const name = useRef(null);
  const email = useRef(null);
  const message = useRef(null);
  const handleChange = () => {
    setInfo({
      name: name.current.value,
      email: email.current.value,
      description: message.current.value,
    });
  };
  const handleSumbit = (e) => {
    e.preventDefault();
    console.log("je click");
  };
  console.log(info);
  return (
    <div id="contact" className="contactContainer">
      <div className="astroContainer">
        <img className="planet1" src={planet01} alt="" />
        <img className="planet2" src={planet02} alt="" />
        <img className="planet3" src={planet03} alt="" />
        <img className="planet4" src={planet04} alt="" />
        <img className="planet5" src={planet05} alt="" />
        <img className="planet6" src={planet06} alt="" />
        <img src={astroContact} alt="" />
      </div>
      <div className="formContainer">
        <h2>Get in Touch</h2>
        <form action="">
          <input
            ref={name}
            onChange={handleChange}
            type="text"
            placeholder="Name"
          />
          <input
            onChange={handleChange}
            ref={email}
            type="email"
            placeholder="Email"
          />
          <textarea
            onChange={handleChange}
            style={{ outline: "none" }}
            ref={message}
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          />
          <button onClick={handleSumbit} className="button btn-3">
            send informations
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
