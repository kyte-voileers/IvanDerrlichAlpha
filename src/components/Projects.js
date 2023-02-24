import './styles/Projects.css';
import Project from './Project';
import data from '../data';
import React, { useEffect } from 'react';
function Projects(props) {
  const clickHandler = props.clickHandler;

  const ref = React.useRef(null);
  useEffect(() => {
    let elementsArray = document.querySelectorAll('.outView');

    window.addEventListener('scroll', fadeIn);
    function fadeIn() {
      for (var i = 0; i < elementsArray.length; i++) {
        var elem = elementsArray[i];
        var distInView =
          elem.getBoundingClientRect().top - window.innerHeight + 20;
        if (distInView < 0) {
          elem.classList.remove('outView');
          elementsArray = document.querySelectorAll('.outView');
          console.log(elementsArray);
        }
      }
    }
    fadeIn();
  });

  return (
    <div className="Projects" id="projects">
      {data.map((properties) => (
        <Project
          clickHandler={clickHandler}
          properties={properties}
          key={properties.repoNameURL}
        />
      ))}
      <div
        onClick={clickHandler}
        onMouseDown={clickHandler}
        className="more-container"
      >
        <a href="https://github.com/Ivanderlich" className="link more">
          More Projects
        </a>
      </div>
    </div>
  );
}

export default Projects;
