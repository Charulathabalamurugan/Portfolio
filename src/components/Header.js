import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Charu</h1>
        <nav>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header-intro">
        <h2>HY! I Am Charulatha Balamurugan</h2>
        <p>
          Ambitious and Dedicated Professional with Strong Communication and
          Organization Skills.
        </p>
      </div>
    </header>
  );
}

export default Header;
