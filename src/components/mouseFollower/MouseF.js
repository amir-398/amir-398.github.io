import React from "react";
import MouseParticles from "react-mouse-particles";
export default function MouseF() {
  return (
    <>
      <MouseParticles
        g={1}
        num={5}
        radius={8}
        life={0.8}
        v={1.2}
        color="#B740A7"
        alpha={0.5}
        level={6}
      />
    </>
  );
}
