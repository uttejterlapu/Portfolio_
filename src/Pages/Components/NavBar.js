import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { useMediaQuery } from 'react-responsive'; // Import useMediaQuery from react-responsive

function BasicExample() {
    const isMobile = useMediaQuery({ maxWidth: 576 }); // Define breakpoint for mobile screens

    return (
        <Navbar expand="lg" className="bg-body-secodary sticky-top" style={{ backgroundColor: '#EEEEEE'}}>
            <Container>
                {/* Apply conditional classes */}
                <Navbar.Brand href="/" style={{ fontSize: '1.7rem'}} className={isMobile ? "" : "mx-auto"} >Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto" style={{ fontSize: '1.1rem'}}>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/skills">Skills</Nav.Link>
                        <Nav.Link href="/skills">Projects</Nav.Link>
                        <Nav.Link href="/contact">Contact Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;
