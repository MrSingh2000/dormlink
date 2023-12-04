import React from "react";
import "./loader.css";

export default function Loader() {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="spinner-box">
        <div className="configure-border-1">
          <div className="configure-core"></div>
        </div>
        <div className="configure-border-2">
          <div className="configure-core"></div>
        </div>
      </div>
    </div>
  );
}
