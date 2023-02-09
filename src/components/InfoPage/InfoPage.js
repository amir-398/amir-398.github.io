import React from "react";
import infoPage from "./infoPage.css";

export default function InfoPage({ showInfoPage }) {
  return (
    <div
      className={"infoPageContainer"}
      style={{
        position: showInfoPage ? "absolute" : "",
        display: showInfoPage ? "" : "none",
      }}
    >
      <p>I’m a fullstack web developer actually studying at EEMI in Paris</p>
    </div>
  );
}
