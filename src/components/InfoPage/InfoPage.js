import React, { Fragment, useEffect } from "react";

import "./infoPage.css";
import TextSphere from "./TextSphere";

export default function InfoPage({ showInfoPage }) {
  return (
    <>
      <div className="infoPageContainer">
        <TextSphere />
      </div>
    </>
  );
}
