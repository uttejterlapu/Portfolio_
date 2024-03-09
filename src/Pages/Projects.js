import React from 'react';
import './Styles/Projects.css'
const Projects = () => {
    return (
        <div className='pro-main'>
            <h1>Projects</h1>
            <div className='pro-component'>
                <div className='pro-card'>
                    <h5>Session Generation with JWT Authentication and Authorization using MERN Stack</h5>
                    <div className='Bline'></div>
                    <p>This project implements JWT-based authentication and authorization using MongoDB, Express.js, React.js, and Node.js (MERN stack). It provides secure user login, protected routes, and session management.</p>
                    <div>
                        <button href='github.vom'>Git Link</button><br></br>
                        <button href='live site'>Site Link</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects;