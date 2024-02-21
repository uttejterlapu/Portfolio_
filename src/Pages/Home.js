import React from 'react';
import '../Pages/Styles/Home.css';
import Mypic from './Assests/Mypic.jpg'

const Home = () => {
    return (
        <div className='Home1'>
            <div className='HomeContent'>
                <div className='HomeLeft'>
                    <div className='TextBold'>
                        <p className='TextBoldC'>Uttej Terlapu</p>
                        <p className='HContent'><span className='Tagline'>Web Developer</span> with a Focus on Frontend Development and Responsive Design. Proficient in HTML, CSS, JavaScript, and Vue.js. Demonstrated Success in Building Engaging Websites for Various Industries. Enthusiastic about Crafting Elegant Solutions to User Experience Challenges. Seeking Opportunities to Apply and Expand Skills in Web Development while Completing College Studies.
                        <br/>
                        To Know More About Me <a className='linking' href='/about'>Click Here</a> 
                        </p>
                    </div>
                </div>
                <div className='HomeRight'>
                    <img className='Mypic' src={Mypic} alt='mypic'/>
                </div>
            </div>
        </div>
    );
};

export default Home;