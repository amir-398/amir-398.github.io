import React, { useRef, useState } from "react";
import astroContact from "../../assets/pics/astroContact.png";
import planet01 from "../../assets/pics/planet01.png";
import planet02 from "../../assets/pics/planet02.png";
import planet03 from "../../assets/pics/planet03.png";
import planet04 from "../../assets/pics/planet05.png";
import planet05 from "../../assets/pics/planet06.png";
import planet06 from "../../assets/pics/planet07.png";
import Overlay from "../overlayStarLight/Overlay";
import "./contact.css";
function Contact({ text }) {
  const componentRef = useRef(null);

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
  };

  return (
    <section ref={componentRef} id="contact" className="contactContainer">
      <Overlay componentRef={componentRef} />
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
        <h2>{text.contact_title}</h2>
        <form action="">
          <input
            ref={name}
            onChange={handleChange}
            type="text"
            placeholder={text.input_name}
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
          <button onClick={handleSumbit} className="button submitBtn">
            {text.btn_contact}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
