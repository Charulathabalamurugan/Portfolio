import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project">
        <h3>Blockchain based User Identification System</h3>
        <p>
          It is Blockchain-Powered Identity Verification for Securing User
          Identities and Enhancing Trustworthiness in Online Interactions.
        </p>
      </div>
      <div className="project">
        <h3>Blood Bank Management System</h3>
        <p>
          This system is developed to connect the Government with the Blood
          banks and hospitals to retrieve blood during emergencies and to know
          the availability of it.
        </p>
      </div>
    </section>
  );
}

export default Projects;
