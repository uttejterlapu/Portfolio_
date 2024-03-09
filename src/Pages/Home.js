// import React, { useEffect, useState } from 'react';
import '../Pages/Styles/Home.css';
import Mypic from './Assests/Mypic.jpg'
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Certificates from './Certificates';
// import ContactMe from './ContactMe';
// import { Box, Typography } from '@mui/material';

const Home = () => {
    const date = new Date()
    var hrs = date.getHours();
    var wish = '';
    if (hrs >= 1 && hrs <= 11) {
        wish = 'Morning';
    }
    else if (hrs >= 12 && hrs <= 15) {
        wish = 'After Noon';
    }
    else if (hrs >= 16 && hrs <= 19) {
        wish = 'Evening';
    }
    else if (hrs >= 20) {
        wish = 'Night';
    }
    return (
        <div className='main'>
            <div id='homep' className='home'>
                <div className='home-main'>
                    <div>
                        <h1>
                            <span>Hi!! Good {wish}</span><br />
                            Welcome to My Portfolio<br />
                            I'am
                            <span className='name'> Uttej Terlapu</span>
                        </h1>
                        <p>Web Developer</p>
                    </div>
                    <img className='mypic' src={Mypic} alt='myimg' />
                </div>
            </div>
            <div className='line'></div>
            <div id='about'>
                <About />
            </div>
            <div className='line'></div>
            <div id='skills'>
                <Skills />
            </div>
            <div className='line'></div>
            <div id='projects'>
                <Projects />
            </div>
            <div className='line'></div>
            <div id='certificates'>
                <Certificates />
            </div>
        </div>
    );
};

export default Home;