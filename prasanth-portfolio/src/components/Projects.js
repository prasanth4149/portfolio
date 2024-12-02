// src/components/Projects.js
import React from "react";
import './Projects.css'; // Ensure you import your CSS file

const Projects = () => {
  return (
    <div id="projects">
      <h2>Projects</h2>
      <div className="project-cards">
        <div className="card">
          <h3>
            <a 
              href="https://github.com/prasanth4149/Brainwave_Matrix_Intern/tree/main/E-commerce" // Replace with your actual GitHub URL
              target="_blank" 
              rel="noopener noreferrer"
            >
              E-commerce Website Development
            </a>
          </h3>
          <p>Developed a fully functional e-commerce platform focusing on user experience.</p>
        </div>
        {/* You can add more project cards here */}
      </div>
    </div>
  );
};

export default Projects;