import React from "react";
import "./loading.css";
export default function Loading({ nodeRef, title }) {
  return (
    <div ref={nodeRef} className="loadingContainer">
      <div className="loadingWrapper">
        <p>{title}</p>
      </div>
    </div>
  );
}
