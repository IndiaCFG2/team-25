import React from "react";

import "./Login.css";
import "./Header.css";

const Login = () => {
  return (
    <div>
      <div className="header">
        <a href="#default" className="logo">
          321 Foundation
        </a>
        <div className="header-right">
          <a className="active" href="register.html">
            Register your school
          </a>
        </div>
      </div>

      <div className="main">
        <form action="/action_page.php">
          <input
            type="text"
            id="schoolId"
            name="schoolId"
            placeholder="Enter School ID.."
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password.."
          />
          <button type="submit">
            <a href="Main.html">Login</a>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
