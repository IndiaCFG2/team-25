import React, { useState } from "react";
import { projectDatabase } from "../../firebase/config";

import "./AddContent.css";

const AddContent = () => {
  const [lessonUrl, setLessonUrl] = useState("");
  const [board, setBoard] = useState("");
  const [grade, setGrade] = useState("");
  const [subject, setSubject] = useState("");
  const [week, setWeek] = useState("");
  const [lesson, setLesson] = useState("");

  const handleClick = () => {
    console.log("hello");
    projectDatabase
      .ref(`/${board}/${grade}/${subject}/${week}/${lesson}/`)
      .set({
        url: lessonUrl,
      });
  };

  return (
    <div>
      <div className="header">
        <a href="#default" className="logo">
          321 Foundation
        </a>
      </div>

      <div className="main">
        <center>
          <select
            name="board"
            id="board"
            onChange={(e) => {
              setBoard(e.target.value);
              console.log(e.target.value);
            }}
          >
            <option value="null">Select Board</option>
            <option value="CBSE">CBSE</option>
            <option value="Telangana">Telangana</option>
            <option value="MH">MH</option>
            <option value="KAR">KAR</option>
          </select>
          {/* <br> */}

          <select
            name="grade"
            id="grade"
            onChange={(e) => {
              setGrade(e.target.value);
              console.log(e.target.value);
            }}
          >
            <option value="null">Select Grade</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          {/* <br> */}

          <select
            name="sub"
            id="sub"
            onChange={(e) => {
              setSubject(e.target.value);
              console.log(e.target.value);
            }}
          >
            <option value="null">Select Subject</option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Maths">Maths</option>
            <option value="Science">Science</option>
          </select>
          {/* <br> */}

          <select
            name="week"
            id="week"
            onChange={(e) => {
              setWeek(e.target.value);
              console.log(e.target.value);
            }}
          >
            <option value="null">Select Week</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
          {/* <br> */}

          <select
            name="lesson"
            id="lesson"
            onChange={(e) => {
              setLesson(e.target.value);
              console.log(e.target.value);
            }}
          >
            <option value="null">Select Lesson</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
          {/* <br> */}
          <input
            type="text"
            id="link"
            name="link"
            placeholder="Enter the link:"
            onChange={(e) => setLessonUrl(e.target.value)}
          />
          <button type="submit" onClick={handleClick}>
            ADD
          </button>
          {/* <br> */}
        </center>
      </div>
    </div>
  );
};

export default AddContent;
