import React from "react";
import { Link } from "react-router-dom";

import AddContent from "./AddContent";
import ShowAnalytics from "./ShowAnalytics";

import "./Main.css";
import "../teacherComponent/Header.css";

const Main = () => {
  return (
    <div className="container">
      <div className="header">
        <a href="#default" className="logo">
          321 Foundation
        </a>
      </div>

      <div className="main">
        <div className="main__content">
          We started in 2012 by opening a school for children from low-income
          communities in Mumbai. Our experience in running the school led us to
          understand the value that high quality teaching brings to a child's
          learning in school. The urgency for having more confident and
          empowered educators across schools led us to build customized programs
          for our teachers. Our name captures our culture and all the principles
          that are important to us
          <b>3:</b> We are on a journey to understand and magnify self, others,
          and life.
          <b>2:</b> We will be guided by two phrases: Excellence is a habit and
          Grace under pressure.
          <b>1:</b> Whenever we look at a problem, we ask ourselves: What will I
          do about it?
        </div>
        <Link to="/addcontent">
          <button className="btn">Add Content</button>
        </Link>
        <Link to="/showanalytics">
          <button className="btn">Show Analytics</button>
        </Link>
      </div>
    </div>
  );
};

export default Main;
