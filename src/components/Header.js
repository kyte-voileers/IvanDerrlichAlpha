import React from 'react';
import './styles/Header.css';


class Header extends React.Component {
  constructor(props) {
    super(props)
    this.blueScreenOn = this.blueScreenOn.bind(this);
    this.blueScreenOff = this.blueScreenOff.bind(this);
    this.blueScreenClick = this.blueScreenClick.bind(this);
  }

  noScroll() {
    window.scrollTo(0, 0);
  }

  blueScreenOn() {
    document.querySelector('#hamburger').classList.add('hidden')
    document.querySelector('#home').classList.add('blur')
    document.querySelector('#about').classList.add('blur')
    document.querySelector('#contact').classList.add('blur')
    document.querySelector('#projects').classList.add('blur')
    document.querySelector('#header').classList.add('blur')
    document.querySelector('#blue-screen').classList.remove('hidden')
    window.addEventListener('scroll', this.noScroll);
    document.body.style.overflow = 'hidden';
  }

  blueScreenOff() {
    document.querySelector('#hamburger').classList.remove('hidden')
    document.querySelector('#home').classList.remove('blur')
    document.querySelector('#about').classList.remove('blur')
    document.querySelector('#contact').classList.remove('blur')
    document.querySelector('#projects').classList.remove('blur')
    document.querySelector('#header').classList.remove('blur')
    document.querySelector('#blue-screen').classList.add('hidden')
    window.removeEventListener('scroll', this.noScroll);
    document.body.style.overflow = 'visible';
  }

  blueScreenClick(location) {
    this.blueScreenOff();
    window.location.href = '#' + location;
  }


  render() {
    return (
      <div className="super-header">
        <div className="Header" id="header">
          <nav>
            <div onClick={() => this.blueScreenClick('home')} className="home-desktop-link">Home</div>            
            <div>
              <i onClick={this.blueScreenOn} id="hamburger" className="fas fa-bars hamburger"></i>              
              <div onClick={() => this.blueScreenClick('projects')} className="portfolio-desktop-link">Portfolio</div>
              <div onClick={() => this.blueScreenClick('about')} className="about-desktop-link" >About</div>
              <div onClick={() => this.blueScreenClick('useful-links')} className="portfolio-desktop-link">Useful Links</div>  
              <div onClick={() => this.blueScreenClick('social-media')} className="portfolio-desktop-link">Social Media</div>
              <div onClick={() => this.blueScreenClick('contact')} className="contact-desktop-link">Contact</div>
            </div>
          </nav>
        </div>
        <div className="blue-screen hidden" id="blue-screen">
          <i id="cross" onClick={this.blueScreenOff} className="fas fa-times cross"></i>
          <div className="blue-links">
            <div onClick={() => this.blueScreenClick('home')} className="blue-link">Home</div>
            <div onClick={() => this.blueScreenClick('projects')} className="blue-link">Portfolio</div>
            <div onClick={() => this.blueScreenClick('about')} className="blue-link">About</div>
            <div onClick={() => this.blueScreenClick('useful-links')} className="blue-link">Links</div>             
            <div onClick={() => this.blueScreenClick('social-media')} className="blue-link">Social</div>                         
            <div onClick={() => this.blueScreenClick('contact')} className="blue-link">Contact</div>
          </div>
        </div>
      </div>

    )
  }
}

export default Header;