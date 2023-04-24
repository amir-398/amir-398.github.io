import React, { useState } from "react";
import "./neonLine.css";
export default function NeonLine() {
  const [scrollPosition, setScrollPosition] = useState("");
  document.addEventListener("scroll", (e) => {
    let position = window.pageYOffset;
    setScrollPosition(position);
  });
  return (
    <div>
      <div className="neon-line"></div>
    </div>
  );
}
