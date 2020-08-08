import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { projectFirestore, projectDatabase } from "./firebase/config";

function App() {
  const [data, setData] = useState("");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    projectDatabase.ref("/cbse/grade1/english/week1/lesson2/").set({
      url:
        "https://docs.google.com/document/d/1oOl0onnI8n1JwFr8u2u3KgEl07zQcjdvd1bP2o_lZhY/edit?usp=sharing",
    });
    projectDatabase
      .ref("/cbse/grade1/english/week1/lesson2/")
      .once("value")
      .then((snap) => {
        setData(snap.val());
      });
  }, []);

  console.log(data.url);

  const handleClick = () => {
    projectDatabase.ref(inputValue + "/").set({
      name: "subham",
    });
  };

  return (
    <div className="App">
      <h1>Hello</h1>

      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>

      {/* <button onClick={handleClick()}>Save</button> */}
    </div>
  );
}

export default App;
