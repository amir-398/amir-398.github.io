import React, { useState } from "react";
import "./neonLine.css";
export default function NeonLine() {
  const [scrollPosition, setScrollPosition] = useState("");
  document.addEventListener("scroll", (e) => {
    let position = window.pageYOffset;
    setScrollPosition(position);
  });
  console.log("scrollPosition", scrollPosition);
  return (
    <div>
      <div className="neon-line"></div>
      <div className="neon-line2"></div>;
    </div>
  );
}
