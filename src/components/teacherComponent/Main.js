import React from "react";

import "./Main.css";
import "./Header.css";

const Main = () => {
  return (
    <div>
      <div className="header">
        <a href="#default" className="logo">
          321 Foundation
        </a>
        <div className="header-right">
          <a className="active" href="#home">
            Home
          </a>
          <a href="#about">About Us</a>
          <a href="login.html">Logout</a>
        </div>
      </div>
      {/* <br><br> */}

      <div className="main">
        Choose Grade:{" "}
        <nav role="navigation" className="nav">
          <ul className="nav__ul">
            <li>
              <a href="#">I</a>
              {/* <button onClick={(e) => console.log(e.target.value)}>I</button> */}
            </li>
            <li>
              <a href="#">II</a>
            </li>
            <li>
              <a href="#">III</a>
            </li>
            <li>
              <a href="#">IV</a>
            </li>
            <li>
              <a href="#">V</a>
            </li>
          </ul>
        </nav>
        {/* <br><br><br><br><br> */}
        Choose Subject:{" "}
        <nav role="navigation" className="nav">
          <ul className="nav__ul">
            <li>
              <a href="#">ENGLISH</a>
            </li>
            <li>
              <a href="#">MATHS</a>
            </li>
            <li>
              <a href="#">EVS</a>
            </li>
          </ul>
        </nav>
        {/* <br><br><br><br><br> */}
        Choose Week:{" "}
        <nav role="navigation" className="nav">
          <ul className="nav__ul">
            <li>
              <a href="#">1</a>
            </li>
            <li>
              <a href="#">2</a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
            <li>
              <a href="#">4</a>
            </li>
            <li>
              <a href="#">5</a>
            </li>
            <li>
              <a href="#">6</a>
            </li>
            <li>
              <a href="#">7</a>
            </li>
            <li>
              <a href="#">8</a>
            </li>
            <li>
              <a href="#">9</a>
            </li>
            <li>
              <a href="#">10</a>
            </li>
          </ul>
        </nav>
        <button type="button"> SHOW LESSON</button>
      </div>
    </div>
  );
};

export default Main;
