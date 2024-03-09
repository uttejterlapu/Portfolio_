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
            Am a Passionate Web Developer and Student at Gandhi Institue of Technology and Management Currently pursuing B.Tech 3rd Year Computer Science and Engineering with Specialization in Cyber Security.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;