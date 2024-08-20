// src/components/Achievements.js

import React from "react";
import "./Achievements.css";

function Achievements() {
  return (
    <section className="achievements">
      <h2>Achievements</h2>
      <div className="certifications">
        <h3>Certifications</h3>
        <p>R programming - CIT</p>
        <p>Database Management System - NPTEL</p>
      </div>
      <div className="extracurricular">
        <h3>Extracurricular Activity</h3>
        <p>
          Rotaract Club of Coimbatore Institute of Technology, Director of
          Professional Service - 2024
        </p>
        <p>National Service Scheme (2022-2026)</p>
      </div>
    </section>
  );
}

export default Achievements;
