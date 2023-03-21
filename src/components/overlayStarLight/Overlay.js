import React, { useState, useEffect } from "react";

export default function Overlay({ componentRef }) {
  const [animation, setAnimation] = useState(false);
  const [starLight, setStarLight] = useState(null);
  const [filter, setFilter] = useState(null);
  useEffect(() => {
    const handleScroll = () => {
      const componentPosition = componentRef.current.offsetTop;
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY + windowHeight;
      const triggerPosition =
        componentPosition + componentRef.current.offsetHeight * 0.2;

      if (scrollPosition > triggerPosition) {
        setAnimation(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (animation) {
      setTimeout(() => {
        setStarLight("starLight");
      }, 2000);
      setTimeout(() => {
        setFilter("filterGone");
      }, 3000);
    }
  }, [animation]);
  return (
    <>
      <div className={`overlay ${filter}`}></div>
      <div className="guide">
        <div style={{ height: "50%" }}>
          <div
            className="neon-line5"
            style={{ display: animation ? "block" : "none" }}
          ></div>
        </div>

        <div className={`star2 ${starLight}`}></div>
        <div style={{ height: "50%" }}>
          <div
            className="neon-line6"
            style={{ display: animation ? "block" : "none" }}
          ></div>
        </div>
      </div>
    </>
  );
}
