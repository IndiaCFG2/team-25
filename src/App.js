import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import { projectDatabase } from "./firebase/config";

import Main from "./components/adminComponents/Main";
import AddContent from "./components/adminComponents/AddContent";
import ShowAnalytics from "./components/adminComponents/ShowAnalytics";

import UserMain from "./components/teacherComponent/Main";
import Login from "./components/teacherComponent/Login";
import Register from "./components/teacherComponent/Register";

function App() {
  const [data, setData] = useState("");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    // projectDatabase.ref("/cbse/grade1/english/week1/lesson2/").set({
    //   url:
    //     "https://docs.google.com/document/d/1oOl0onnI8n1JwFr8u2u3KgEl07zQcjdvd1bP2o_lZhY/edit?usp=sharing",
    // });
    // projectDatabase
    //   .ref("/cbse/grade1/english/week1/lesson2/")
    //   .once("value")
    //   .then((snap) => {
    //     setData(snap.val());
    //   });
  }, []);

  // console.log(data.url);

  return (
    <Router>
      <div>
        {/* <Switch> */}
        <Route exact path="/" component={Main} />
        <Route path="/addcontent" component={AddContent} />
        <Route path="/showanalytics" component={ShowAnalytics} />

        <Route path="/user" component={UserMain} />
        <Route path="/user/login" component={Login} />
        <Route path="/user/register" component={Register} />
        {/* </Switch> */}
      </div>
    </Router>
  );
}

export default App;
