import React from "react";
import "./Intro.css";
import Me from "../img/me.png";

const Intro = () => {
  return (
    <div>
      <div className="i">
        <div className="i-left">
          <div className="i-left-wrapper">
            <h2 className="i-intro">Hello, My name is</h2>
            <h1 className="i-name">Raj Kumar</h1>
            <div className="i-title">
              <div className="i-title-wrapper">
                <div className="i-title-item">Front-End Developer</div>
                <div className="i-title-item">Job Seeker</div>
                <div className="i-title-item">CS Graduate</div>
                <div className="i-title-item">UI Designer</div>
                <div className="i-title-item">Photographer</div>
              </div>
            </div>
            <p className="i-desc">
              Seeking a challenging and dynamic Frontend Developer position in a
              growth-oriented organization that provides opportunities for
              professional development and growth, while utilizing my technical
              skills and passion for creating visually appealing and
              user-friendly web applications.
            </p>
          
          </div>
          
        </div>
        <div className="i-right">
          <div className="i-bg"></div>
          <img src={Me} alt="" className="i-img" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
