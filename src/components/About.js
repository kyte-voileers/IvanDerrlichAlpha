import React from 'react';
import './styles/About.css';
import javaScriptImage from '../media/skills/JavaScript.svg';
import HTMLImage from '../media/skills/HTML.svg';
import CSSImage from '../media/skills/CSS.svg';
import rubyImage from '../media/skills/Ruby.png';
import railsImage from '../media/skills/Rails.png';
import phaserImage from '../media/skills/Phaser.svg';
import reactImage from '../media/skills/React.png';
import TDDImage from '../media/skills/TDD.png';
import pairProgrammingImage from '../media/skills/PairProgramming.png';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.toggleContent = this.toggleContent.bind(this);
  }

  toggleContent(section) {
    switch (section) {
      case 'languages':
        const arrowRightLanguages = document.querySelector(
          '#arrow-right-languages'
        );

        const languagesContent = document.querySelector('#languages-content');
        if (arrowRightLanguages.classList.contains('hide')) {
          arrowRightLanguages.classList.remove('hide');
          arrowRightLanguages.animate(
            [
              // keyframes
              { transform: 'rotate(90deg)' },
              { transform: 'rotate(0deg)' },
            ],
            {
              // timing options
              duration: 200,
              iterations: 1,
              fill: 'forwards',
            }
          );

          languagesContent.classList.add('hide');
        } else {
          arrowRightLanguages.classList.add('hide');
          arrowRightLanguages.animate(
            [
              // keyframes
              { transform: 'rotate(0deg)' },
              { transform: 'rotate(90deg)' },
            ],
            {
              // timing options
              duration: 200,
              iterations: 1,
              fill: 'forwards',
            }
          );
          languagesContent.classList.remove('hide');
        }
        break;
      case 'frameworks':
        const arrowRightFrameworks = document.querySelector(
          '#arrow-right-frameworks'
        );
        const arrowDownFrameworks = document.querySelector(
          '#arrow-down-frameworks'
        );
        const frameworkContent = document.querySelector('#frameworks-content');

        if (arrowRightFrameworks.classList.contains('hide')) {
          arrowRightFrameworks.classList.remove('hide');
          arrowRightFrameworks.animate(
            [
              // keyframes
              { transform: 'rotate(90deg)' },
              { transform: 'rotate(0deg)' },
            ],
            {
              // timing options
              duration: 200,
              iterations: 1,
              fill: 'forwards',
            }
          );

          frameworkContent.classList.add('hide');
        } else {
          arrowRightFrameworks.classList.add('hide');
          arrowRightFrameworks.animate(
            [
              // keyframes
              { transform: 'rotate(0deg)' },
              { transform: 'rotate(90deg)' },
            ],
            {
              // timing options
              duration: 200,
              iterations: 1,
              fill: 'forwards',
            }
          );
          frameworkContent.classList.remove('hide');
        }
        break;
      case 'skills':
        const arrowRightSkills = document.querySelector('#arrow-right-skills');
        const arrowDownSkills = document.querySelector('#arrow-down-skills');
        const skillsContent = document.querySelector('#skills-content');

        if (arrowRightSkills.classList.contains('hide')) {
          arrowRightSkills.classList.remove('hide');
          arrowRightSkills.animate(
            [
              // keyframes
              { transform: 'rotate(90deg)' },
              { transform: 'rotate(0deg)' },
            ],
            {
              // timing options
              duration: 200,
              iterations: 1,
              fill: 'forwards',
            }
          );

          skillsContent.classList.add('hide');
        } else {
          arrowRightSkills.classList.add('hide');
          arrowRightSkills.animate(
            [
              // keyframes
              { transform: 'rotate(0deg)' },
              { transform: 'rotate(90deg)' },
            ],
            {
              // timing options
              duration: 200,
              iterations: 1,
              fill: 'forwards',
            }
          );
          skillsContent.classList.remove('hide');
        }
        break;
      default:
      // console.log("Error")
    }
  }

  render() {
    return (
      <div className="About faders outView" id="about">
        <div className="myself">
          <div>
            <div className="title">About me</div>
            <p className="text">
              I'm a full-stack software developer. I can provide you with the
              software infrastructure to make your ideas become a reality. As a
              full-stack software developer, I focus both on the aesthetics of
              your system, as well as its correct functioning.
            </p>
            {/* <div className="call-to-action">Let's connect! </div>
            <a
              onClick={this.props.clickHandler} 
              onMouseDown={this.props.clickHandler}
              href="https://linktr.ee/ivanderlich">
              <img className="linktree" src={linktreeLink} alt="linktree link" />
            </a> */}
          </div>
        </div>
        <div className="skills">
          <div className="capabilities-supra">
            <div
              onClick={() => this.toggleContent('languages')}
              className="capabilities"
            >
              <div>Languages</div>
              <i
                id="arrow-right-languages"
                className="fas fa-chevron-right"
              ></i>
            </div>
            <div id="languages-content" className="languages-content hide">
              <div className="skills-item">
                <img
                  src={'../media/skills/PairProgramming.png'}
                  alt="JavaScript"
                  className="skills-image"
                />
                <div>JavaScript</div>
              </div>
              <div className="skills-item">
                <img
                  src={'../media/skills/PairProgramming.png'}
                  alt="HTML"
                  className="skills-image"
                />
                <div>HTML</div>
              </div>
              <div className="skills-item">
                <img
                  src={'../media/skills/PairProgramming.png'}
                  alt="CSS"
                  className="skills-image"
                />
                <div>CSS</div>
              </div>
              <div className="skills-item">
                <img
                  src={'../media/skills/PairProgramming.png'}
                  alt="Ruby"
                  className="skills-image"
                ></img>
                <div>Ruby</div>
              </div>
            </div>
          </div>
          <div className="capabilities-supra">
            <div
              onClick={() => this.toggleContent('frameworks')}
              className="capabilities"
            >
              <div>Frameworks</div>
              <i
                id="arrow-right-frameworks"
                className="fas fa-chevron-right"
              ></i>
            </div>
            <div id="frameworks-content" className="frameworks-content hide">
              <div className="skills-item">
                <img
                  src={'../media/skills/PairProgramming.png'}
                  alt="Rails"
                  className="skills-image"
                ></img>
                <div>Rails</div>
              </div>
              <div className="skills-item">
                <img
                  src={'../media/skills/PairProgramming.png'}
                  alt="React"
                  className="skills-image"
                ></img>
                <div>React</div>
              </div>
              <div className="skills-item">
                <img
                  src={'../media/skills/PairProgramming.png'}
                  alt="Phaser"
                  className="skills-image"
                ></img>
                <div>Phaser</div>
              </div>
            </div>
          </div>
          <div className="capabilities-supra">
            <div
              onClick={() => this.toggleContent('skills')}
              className="capabilities"
            >
              <div>Skills</div>
              <i id="arrow-right-skills" className="fas fa-chevron-right"></i>
              <i
                id="arrow-down-skills"
                className="fas fa-chevron-down hide"
                style={{ display: 'none' }}
              ></i>
            </div>
            <div id="skills-content" className="skills-content hide">
              <div className="skills-item">
                <img
                  src={'../media/skills/PairProgramming.png'}
                  alt="TDD"
                  className="skills-image"
                ></img>
                <div>Test Driven Development</div>
              </div>
              <div className="skills-item">
                <img
                  src={'../media/skills/PairProgramming.png'}
                  alt="Pair Programming"
                  className="skills-image"
                ></img>
                <div>Pair Programming</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
