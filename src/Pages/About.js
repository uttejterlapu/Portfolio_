import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const AboutMe = () => {
  return (
    <Container className="my-5">
      <Card className="shadow" style={{ backgroundColor: 'rgba(255, 255, 255, 0.185)' , color:'#fff'}}>
        <Card.Body>
          <Card.Title className="text-center mb-4">About Me</Card.Title>
          <Card.Text>
            Welcome to my corner of the web! I'm Uttej Terlapu, a passionate web developer currently pursuing my studies at Gandhi University of Technology and Management. Ever since I stumbled upon the world of coding during my high school years, I've been captivated by the endless possibilities of creating digital experiences that are both functional and beautiful.
          </Card.Text>
          <hr />
          <Card.Title className="text-center mt-4">My Journey</Card.Title>
          <Card.Text>
            My journey into the world of web development began with a curiosity-driven dive into HTML and CSS. As I delved deeper, I discovered the power of JavaScript and its ability to bring static web pages to life. With each project and coding challenge, I found myself falling more in love with the craft.
          </Card.Text>
          <hr />
          <Card.Title className="text-center mt-4">My Mission</Card.Title>
          <Card.Text>
            My mission is simple: to blend creativity with technology to craft user-centric web experiences that leave a lasting impact. Whether it's building sleek user interfaces or optimizing website performance, I'm dedicated to continuously honing my skills and pushing the boundaries of what's possible in web development.
          </Card.Text>
          <hr />
          <Card.Title className="text-center mt-4">My Education</Card.Title>
          <Card.Text>
            Currently enrolled in Gandhi University of Technology, I am pursuing a degree in B.Tech 3rd year in Computer Science and Engineering with Specialization Cyber Security Branch . My coursework has equipped me with a strong foundation in Programming fundamentals, Design principles, Data Structures
            
          </Card.Text>
          <hr />
          <Card.Title className="text-center mt-4">My Experience</Card.Title>
          <Card.Text>
            While juggling lectures and assignments, I've had the privilege of working on various projects and internships, where I've gained hands-on experience in turning client visions into reality. From crafting responsive websites to troubleshooting bugs, each project has been a valuable learning opportunity that has contributed to my growth as a developer.
          </Card.Text>
          <hr />
          <Card.Title className="text-center mt-4">Let's Connect</Card.Title>
          <Card.Text>
            I'm always eager to connect with fellow developers, designers, and industry professionals. Whether you're looking to collaborate on a project, share insights, or just geek out about the latest tech trends, don't hesitate to reach out. Let's create something awesome together!
          </Card.Text>
          <div className="text-center">
            <Button variant="light" href='/contact'>Contact Me</Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AboutMe;