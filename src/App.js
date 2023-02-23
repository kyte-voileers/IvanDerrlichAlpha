import React from 'react';
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
