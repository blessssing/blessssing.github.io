import React from "react";
import "./About.scss";

function About() {
  return (
    <div>
      <div className="abous-us">
        <h3>В проекте применялись технологии:</h3>
        <ul className="abous-us__list">
          <li>React</li>
          <li>React hooks</li>
          <li>Redux toolkit</li>
          <li>Javascript</li>
          <li>react-router-dom v6</li>
          <li>Webpack</li>
          <li>Babel</li>
          <li>SCSS</li>
          <li>Styled-components</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
