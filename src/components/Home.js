import './styles/Home.css';
import React from 'react';
function Home(props) {  
  return (
    <div className="Home" id="home">
      <div className="home-content">
        <div className="title" >Hi! I'm Ivan Derlich.</div>
        <div className="title" >Welcome to my website!</div>
        <br>
        </br>
        <div className='text'>
          <p>I'm a full-stack software developer. I can provide you with the software infrastructure to make your ideas become a reality.</p>
          <p>I've crafted this website for you to see some of my projects, the technologies I know, and a way to contact me.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;