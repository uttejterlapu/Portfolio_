import React from 'react';
import './Styles/Certificates.css';
import Certiimg from  './Assests/certi.svg'
const Certificates = () => {
    return (
        <div className='certi'>
            <h1>Certificates</h1>
            <div className='certi-container'>
                <ul>
                    <li>Python 101 for Data Science : <a className='certi-link' href='https://courses.cognitiveclass.ai/certificates/a1efda10bc3548feba85a5a573403fdb'>Cognitive Class</a></li>
                    <li>Problem Solving (Basic) : <a className='certi-link' href='https://www.hackerrank.com/certificates/9a6aa6270bc5'>HackerRank</a></li>
                    <li>JavaScript (Basic)  : <a className='certi-link' href='https://www.hackerrank.com/certificates/654312a2416c'>HackerRank</a></li>
                    <li>CSS (Basic) : <a className='certi-link' href='https://www.hackerrank.com/certificates/0bc52f1d4e6f'>HackerRank</a></li>
                </ul>
                <div className='linev'></div>
                <img src={Certiimg} alt='certiimg'/>
            </div>
        </div>
    );
};

export default Certificates;