import React from "react";
import "./navbar.css";
import hamburger from "../../assets/menu/menu.png";
function Navbar({ scrollToAbout, aboutIsActive, skillsIsActive }) {
  const activeNavbar = document.querySelector(".navbar");
  const handleSubmit = () => {
    activeNavbar.classList.toggle("navbar_active");
  };
  const li = document.querySelectorAll("ul li ");

  li.forEach((item) =>
    item.addEventListener("click", () => {
      li.forEach((item) => item.classList.remove("active"));
      item.classList.add("active");
    })
  );

  return (
    <div>
      <header>
        <img
          className="hambuger-menu"
          onClick={handleSubmit}
          src={hamburger}
          alt="menu hamburger"
        />
        <nav className="navbar">
          <h3>RESUME</h3>
          <ul>
            <li className="active">Home</li>
            <li className={aboutIsActive ? "active" : null}>
              {scrollToAbout("about")}
            </li>
            <li className={skillsIsActive ? "active" : null}>Skills</li>
            <li>Contact</li>
          </ul>
          <h3 style={{ color: "transparent", cursor: "" }}>Resume</h3>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
