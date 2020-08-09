import React from "react";

import "./ShowAnalytics.css";

const ShowAnalytics = () => {
  return (
    <div>
      <div className="header">
        <a href="#default" className="logo">
          321 Foundation
        </a>
        <div className="header-right">
          <a className="active" href="adminMain.html">
            Back to Home
          </a>
        </div>
      </div>

      <div className="main">
        <center>
          <select name="board" id="board">
            <option value="null">Select Board</option>
            <option value="CBSE">CBSE</option>
            <option value="Telangana">Telangana</option>
            <option value="MH">MH</option>
            <option value="KAR">KAR</option>
          </select>

          <select name="grade" id="grade">
            <option value="null">Select Grade</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          {/* <br> */}

          <select name="sub" id="sub">
            <option value="null">Select Subject</option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Maths">Maths</option>
            <option value="Science">Science</option>
          </select>
          {/* <br> */}

          <select name="week" id="week">
            <option value="null">Select Week</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
          {/* <br> */}

          <select name="lesson" id="lesson">
            <option value="null">Select Lesson</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>

          <button type="submit" onclick="viewAnalytics()">
            VIEW
          </button>
        </center>
      </div>
    </div>
  );
};

export default ShowAnalytics;
