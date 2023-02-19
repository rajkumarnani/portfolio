import React, { useContext } from "react";
import "./Education.css";
import study from "../img/study.jpeg";
import { ThemeContext } from "./context";

const Education = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="e">
      <div className="e-left">
        <div className="e-card bg" style={{backgroundColor: darkMode && '#999'}}></div>
        <div className="e-card">
          <img src={study} alt="" className="e-img" />
        </div>
      </div>
      <div className="e-right">
        <h2>Education</h2>
        <div className="education-item">
          <h4>Bachelor of Technology in Computer Science Engineering</h4>
          <p>
            I completed my B.Tech in <span className="highlight">Computer Science Engineering</span> from <span className="highlight">Sagi
            Ramakrishnam Raju Engineering College in Bhimavaram.</span> The course
            lasted 4 years, from <span className="highlight">July 2018 to June 2022</span>, during which I gained
            expertise in computer science and engineering concepts such as
            algorithms, programming, data structures, databases, computer
            networks, and software engineering. I achieved a CGPA of <span className="highlight">7.57 out of
            10</span>, reflecting my dedication and hard work.
          </p>
        </div>
        <div className="education-item">
          <h4>Intermediate in BIEAP</h4>
          <p>
            My <span className="highlight">Intermediate education</span> in BIEAP from <span className="highlight">APSWR College of Engineering
            in Visakhapatnam.</span> The program lasted 2 years, starting in <span className="highlight">June 2016</span>
            and ending in April 2018. I gained a strong foundation in subjects
            like physics, chemistry, math and computer science and achieved a
            percentage of <span className="highlight">910/1000</span>, showing my dedication and hard work.
          </p>
        </div>
        <div className="education-item">
          <h4>Secondary School Certificate in BSEAP</h4>
          <p>
            I completed my <span className="highlight">SSC </span>from <span className="highlight">APSWR School in Pedavegi</span>, form passout batch of <span className="highlight">March 2016</span>. I excelled in subjects like
            mathematics, science, social studies and language, earning a CGPA of
            <span className="highlight">9.3 out of 10</span>, which reflects my dedication and hard work.
          </p>
        </div>
        <div className="education-item-m">
        <h4>Sagi Ramakrishnam Raju Engineering College, Bhimavaram</h4>
        <p>B.Tech in Computer Science Engineering</p>
        <p>Jul 2018 - Jun 2022</p>
        <p>CGPA: 7.57/10</p>
      </div>
      <div className="education-item-m">
        <h4>APSWR COE College, Visakhapatnam</h4>
        <p>Intermediate - BIEAP</p>
        <p>Jun 2016 - Apr 2018</p>
        <p>Percentage: 91/100</p>
      </div>
      <div className="education-item-m">
        <h4>APSWR School (B), Pedavegi</h4>
        <p>SSC - BSEAP</p>
        <p>Jun 2015 - Mar 2016</p>
        <p>CGPA: 9.3/10</p>
      </div>
      </div>

    </div>
  );
};

export default Education;
