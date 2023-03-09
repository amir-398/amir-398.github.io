import React from "react";
import "./navbar.css";
import hamburger from "../../assets/menu/menu.png";
function Navbar({
  scrollToNextSction,
  aboutIsActive,
  skillsIsActive,
  navbarIsVisible,
}) {
  //resposive toggler
  const activeNavbar = document.querySelector(".navbar");
  const handleSubmit = () => {
    activeNavbar.classList.toggle("navbar_active");
  };

  return (
    <div>
      <header>
        <img
          className="hambuger-menu"
          onClick={handleSubmit}
          src={hamburger}
          alt="menu hamburger"
        />
        <nav className={`navbar ${navbarIsVisible ? "" : "navbar-hidden"} `}>
          <h3>RESUME</h3>
          <ul>
            <li data-to-scrollspy-id="section1">
              {scrollToNextSction("section1", "Home")}
            </li>
            <li data-to-scrollspy-id="section2">
              {scrollToNextSction("section2", "About")}
            </li>
            <li data-to-scrollspy-id="section3">
              {scrollToNextSction("section3", "Skills")}
            </li>
            <li data-to-scrollspy-id="section4">
              {scrollToNextSction("section4", "Contact")}
            </li>
          </ul>
          <h3 style={{ color: "transparent", cursor: "" }}>Resume</h3>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
