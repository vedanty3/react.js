import React from "react";
import "./style.css";
import style from "./style.module.css";
import "./style.scss";

const headingStyle = {
  color: "hotpink",
};

const Styles = () => {
  return (
    <div>
      {/* inline css */}
      <h1 style={{ color: "coral" }}>Heading</h1>

      {/* external css  */}
      <h1 className="heading">Heading</h1>

      {/* css in js */}
      <h1 style={headingStyle}>Heading</h1>

      {/* css modules */}
      <h1 className={style.heading}>Heading</h1>

      {/* sass & scss */}
      <h1 className="primary-sass">
        Sass & <span>Scss</span>
      </h1>
    </div>
  );
};

export default Styles;
