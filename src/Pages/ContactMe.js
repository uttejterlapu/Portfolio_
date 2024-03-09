import React from 'react';
import './Styles/contact.css';
import Githubimg from './Assests/Github.svg';
import Linkdiln from './Assests/linkedin.svg';
import Emailimg from './Assests/Email.svg';

const ContactMe = () => {
    return (
        <div id="contact" className='contact-me'>
            <h1>Contact Me</h1>
            <div className='contact-card-parent'>
                <div className='contact-card'>
                    <a href='https://www.github.com/uttejterlapu'><img src={Githubimg} alt='github'></img></a>
                    <a href='https://www.linkedin.com/in/uttejterlapu/'><img src={Linkdiln} alt='linkedin'></img></a>
                    <a href='mailto:uttejterlapu@gmail.com'><img src={Emailimg} alt='gmail'></img></a>
                </div>
            </div>
            <p>Created by <span>Uttej Terlapu</span>
            <br/>
            Thankyou for Visting :-)</p>
        </div>
    );
};

export default ContactMe;