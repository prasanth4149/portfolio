// src/components/Skills.js
import React from "react";
import './Skills.css'; // Ensure you import your CSS file

// Import images
import pythonImg from '../assets/python.png'; // Adjust path as necessary
import javaImg from '../assets/java.png';
// import htmlImg from '../assets/html.png';
import cssImg from '../assets/css.png';
import javascriptImg from '../assets/javascript.png';
// import sqlImg from '../assets/images/sql.png';
// import gitImg from '../assets/images/git.png';
// import vscodeImg from '../assets/images/vscode.png';
// import teamworkImg from '../assets/images/teamwork.png';
// import adaptabilityImg from '../assets/images/adaptability.png';
// import problemSolvingImg from '../assets/images/problem-solving.png';

const Skills = () => {
  const skills = [
    { name: 'Python', image: pythonImg },
    { name: 'Java', image: javaImg },
    // { name: 'HTML', image: htmlImg },
    { name: 'CSS', image: cssImg },
    { name: 'JavaScript', image: javascriptImg },
    // { name: 'SQL', image: sqlImg },
    // { name: 'Git', image: gitImg },
    // { name: 'VSCode', image: vscodeImg },
    // { name: 'Teamwork', image: teamworkImg },
    // { name: 'Adaptability', image: adaptabilityImg },
    // { name: 'Problem-solving', image: problemSolvingImg },
  ];

  return (
    <div className="skills-container">
      {/* <h2>Skills</h2> */}
      <div className="skills-cards">
        {skills.map(skill => (
          <div className="skill-card" key={skill.name}>
            <img src={skill.image} alt={skill.name} className="skill-image" />
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;