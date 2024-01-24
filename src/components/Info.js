import React from "react";
import "./Info.css";

export const Info = ({ Today }) => {
  return (
    <div className="info-container">
      <div className="info-sub-container">
        <button className="lastday">⇽</button>
        <span>{Today}</span>
        <button className="nextday">⇾</button>
      </div>
    </div>
  );
};
