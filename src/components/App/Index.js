import React, { useState, useRef, useEffect } from "react";
import AboutMe from "../aboutMe/AboutMe";
import Home from "../Home/Home";
import InfoPage from "../skillsPage/SkillsPage";
import { Link } from "react-scroll";
import Navbar from "../navbar/Navbar";
import ScrollSpy from "react-ui-scrollspy";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import fr from "../../content/fr.json";
import en from "../../content/en.json";
import Loading from "../loading/Loading";
import { CSSTransition } from "react-transition-group";
export default function Index() {
  const [isFrench, setIsFrench] = useState(true);
  const [loading, setLoading] = useState(false);
  const [startLoading, setStartLoading] = useState(true);
  const [text, setText] = useState("");
  const nodeRef = useRef(null);
  const body = document.querySelector("body");
  useEffect(() => {
    setTimeout(() => {
      setStartLoading(false);
    }, 2000);
  }, []);
  useEffect(() => {
    startLoading || loading
      ? (body.style.overflow = "hidden")
      : (body.style.overflow = "auto");
  }, [startLoading, loading]);
  useEffect(() => {
    isFrench ? setText(fr) : setText(en);
  }, [isFrench]);
  const scrollToNextSection = (id, btn, handleClick) => {
    return (
      <Link
        to={id}
        onClick={handleClick}
        activeClass="active"
        smooth={true}
        duration={1200}
        isDynamic={true}
      >
        {btn}
      </Link>
    );
  };
  //language Catcher
  const language = (isFrensh, loading) => {
    setIsFrench(isFrensh);
    setLoading(loading);
  };

  return (
    <div>
      {startLoading ? <Loading title="" /> : null}
      <CSSTransition
        in={loading}
        ref={nodeRef}
        unmountOnExit
        timeout={500}
        classNames="my-node"
      >
        <Loading title={text.lng} ref={nodeRef} />
      </CSSTransition>
      <Navbar
        scrollToNextSection={scrollToNextSection}
        language={language}
        text={text}
      />
      <ScrollSpy scrollThrottle={1000} useBoxMethod={false}>
        <Home id="home" scrollToNextSection={scrollToNextSection} text={text} />
        <AboutMe
          id="about"
          scrollToNextSection={scrollToNextSection}
          text={text}
        />

        <InfoPage
          scrollToNextSection={scrollToNextSection}
          id="skills"
          text={text}
        />
        <Contact id="contact" text={text} />
      </ScrollSpy>
      <Footer />
    </div>
  );
}
