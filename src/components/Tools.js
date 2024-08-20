// src/components/Tools.js

import React from "react";
import "./Tools.css";

function Tools() {
  return (
    <section className="tools">
      <h2>Tools</h2>
      <div className="tool-icons">
        <div className="tool-icon">
          <img src="link-to-vscode-icon" alt="VSCode" />
        </div>
        <div className="tool-icon">
          <img src="link-to-figma-icon" alt="Figma" />
        </div>
        <div className="tool-icon">
          <img src="link-to-lightroom-icon" alt="Lightroom" />
        </div>
      </div>
    </section>
  );
}

export default Tools;
