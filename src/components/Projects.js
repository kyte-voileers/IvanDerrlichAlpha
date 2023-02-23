import './styles/Projects.css';
import Project from './Project'
import data from "../data"
import React from 'react';
function Projects(props) {
  const clickHandler= props.clickHandler  
  return (    
    <div className="Projects" id="projects">
      {data.map( properties => 
          <Project
            clickHandler={clickHandler} 
            properties={properties}
            key={properties.repoNameURL}
          />
        )}
      <div 
        onClick={clickHandler}
        onMouseDown={clickHandler}
        className="more-container">
        <a href="https://github.com/Ivanderlich"        
          className="link more">
          More Projects
        </a>
      </div>
    </div>
  )
}

export default Projects;