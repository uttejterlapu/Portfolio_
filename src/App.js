import React, { useState } from 'react';
import NavBar from './Pages/Components/NavBar';
import ContactMe from './Pages/ContactMe';
import Home from './Pages/Home';
import './App.css';
import Sun from './Pages/Assests/sun.svg';
import Dark from './Pages/Assests/dark.svg';
import { Color } from 'three';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleMood() {
    setIsDarkMode(!isDarkMode); // Toggle the value of isDarkMode
    const appElement = document.getElementsByClassName('App')[0];
    const buttonElement = document.getElementsByClassName('dark')[0];
    appElement.style.backgroundColor = isDarkMode ? '#0C359E' : '#000'; // Change background color based on isDarkMode
    buttonElement.src = isDarkMode ? Sun : Dark; // Change button image based on isDarkMode
  }

  return (
    <div>
      <div className={isDarkMode ? "App dark-mode" : "App"}>
        <NavBar />
        <Home />
      </div>
      <div id='contactme'>
        <ContactMe />
      </div>
      <button onClick={handleMood} className='dark'>
        <img src={isDarkMode ? Dark : Sun} alt={isDarkMode ? "Dark Mode" : "Light Mode"} />
      </button>
    </div>
  );
}

export default App;
