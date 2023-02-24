import React, { useEffect } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Footer from './components/Footer';
import SocialMedia from './components/SocialMedia';
import UsefulLinks from './components/UsefulLinks';

function newTabClick(e) {
  let URL = '';
  if (e.target instanceof HTMLImageElement) {
    //children element is an image
    URL = e.target.parentElement.getAttribute('href');
  } else {
    URL = e.target.href;
  }
  e.preventDefault();
  window.open(URL, '_blank');
  //Here is the best place to make an API call to make statistics on clicks
}

const clickHandler = (url) => {
  window.open(url, '_blank');
};

function App() {
  const ref = React.useRef(null);
  useEffect(() => {
    let elementsArray = document.querySelectorAll('.outView');

    window.addEventListener('scroll', fadeIn);
    function fadeIn() {
      for (var i = 0; i < elementsArray.length; i++) {
        var elem = elementsArray[i];
        var distInView =
          elem.getBoundingClientRect().top - window.innerHeight + 80;
        if (distInView < 0) {
          elem.classList.remove('outView');
          elementsArray = document.querySelectorAll('.outView');
          console.log(elementsArray);
        }
      }
      if (elementsArray.length == 0) {
        window.removeEventListener('scroll', fadeIn);
      }
    }
    fadeIn();
  });
  return (
    <div className="App">
      <Header clickHandler={newTabClick} />
      <Home clickHandler={newTabClick} />
      <Projects clickHandler={newTabClick} />
      <About clickHandler={newTabClick} />
      <UsefulLinks clickHandler={clickHandler} />
      <SocialMedia clickHandler={clickHandler} />
      <Contact />
      <Footer clickHandler={newTabClick} />
    </div>
  );
}

export default App;
