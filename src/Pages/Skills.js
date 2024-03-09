import './Styles/Skills.css'
import Reactimg from './Assests/React.svg';
import Htmlimg from './Assests/Html.svg';
import Cssimg from './Assests/Css.svg';
import JSimg from './Assests/JS.svg';
import Nodeimg from './Assests/Node.svg';
import Expressimg from './Assests/Express.svg';
import Mongoimg from './Assests/Mongo.svg';
import Githubimg from './Assests/Github.svg';
import Figmaimg from './Assests/Figma.svg';
const Skills = () => {
    return (
        <div className='skill'>
            <h1>Skills</h1>
            <div className='skill-main'>
                <div className='skill-card'>
                    <img className='Skill-img-comp' src={Reactimg} alt='reactimg' />
                    <div className='Bline'></div>
                    <h5>React JS</h5>
                    <p>Used as a frontend Framework for building websites.</p>
                </div>
                <div className='skill-card'>
                    <img className='Skill-img-comp' src={Htmlimg} alt='htmlimg' />
                    <div className='Bline'></div>
                    <h5>HTML</h5>
                    <p>Started the web development with this.</p>
                </div>
                <div className='skill-card'>
                    <img className='Skill-img-comp' src={Cssimg} alt='cssimg' />
                    <div className='Bline'></div>
                    <h5>CSS</h5>
                    <p>Styled the website using this.</p>
                </div>
                <div className='skill-card'>
                    <img className='Skill-img-comp' src={JSimg} alt='jsimg' />
                    <div className='Bline'></div>
                    <h5>JavaScript</h5>
                    <p>Used for the functionality of the web.</p>
                </div>
                <div className='skill-card'>
                    <img className='Skill-img-comp' src={Nodeimg} alt='nodeimg' />
                    <div className='Bline'></div>
                    <h5>NodeJS</h5>
                    <p>Used for the server-side functionality of the web.</p>
                </div>
                <div className='skill-card'>
                    <img className='Skill-img-comp' src={Expressimg} alt='expressimg' />
                    <div className='Bline'></div>
                    <h5>ExpressJS</h5>
                    <p>Used for building server-side web applications.</p>
                </div>
                <div className='skill-card'>
                    <img className='Skill-img-comp' src={Mongoimg} alt='mongoimg' />
                    <div className='Bline'></div>
                    <h5>MongoDB</h5>
                    <p>Used for storing data in the web applications.</p>
                </div>
                <div className='skill-card'>
                    <img className='Skill-img-comp' src={Githubimg} alt='githubimg' />
                    <div className='Bline'></div>
                    <h5>Github</h5>
                    <p>Used for version control and collaboration in development.</p>
                </div>
                <div className='skill-card'>
                    <img className='Skill-img-comp' src={Figmaimg} alt='figmaimg' />
                    <div className='Bline'></div>
                    <h5>Figma</h5>
                    <p>Used for designing and prototyping user interfaces.</p>
                </div>

            </div>
        </div>
    );
};

export default Skills;