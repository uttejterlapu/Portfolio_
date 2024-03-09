import Person from './Assests/about.svg';
import './Styles/About.css'
const AboutMe = () => {
  return (
    <div className='about'>
      <h1 className='h1s'>About Me</h1>
      <div className='content-main-about'>
        <img className='person' src={Person} alt='person svg' />
        <div className='content-about'>
          <p>
          Greetings! I'm Uttej Terlapu, a driven web developer and Cyber Security enthusiast currently pursuing my B.Tech in Computer Science at Gandhi Institute of Technology and Management. With a knack for crafting engaging digital solutions and a focus on cybersecurity, I'm committed to pushing boundaries and making a positive impact in the tech world. Let's collaborate and create something remarkable!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;