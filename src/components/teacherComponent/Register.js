import React from "react";

import "./Login.css";
import "./Header.css";

const Register = () => {
  return (
    <div>
      <div className="header">
        <a href="#default" className="logo">
          321 Foundation
        </a>
        <div className="header-right">
          <a className="active" href="login.html">
            Login
          </a>
        </div>
      </div>

      <div className="main">
        <form action="/action_page.php">
          <input
            type="text"
            id="schoolId"
            name="schoolId"
            placeholder="Enter School Name.."
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password.."
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Confirm Password.."
          />

          <select id="totalStudents" name="totalStudents">
            <option value="null">
              Select total approx students from Kg to Grade 5
            </option>
            <option value="0-100">0-100</option>
            <option value="100-250">100-250</option>
            <option value="250-500">250-500</option>
            <option value="500+">500+</option>
          </select>

          <button type="submit" onclick="registerPressed()">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
