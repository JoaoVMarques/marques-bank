import { Navbar, Container, Nav } from 'react-bootstrap';
import NavbarLogo from './NavbarLogo.tsx';

function HomeNavbar() {
  return (
  <Navbar expand="lg" className='pb-0'>
    <Container>
      <Navbar.Brand href="#" className='align-items-center'>
        <Nav className='d-lg-flex align-items-center'>
          <Navbar.Brand href="#home" className='m-0'>
            <NavbarLogo />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="basic-navbar-nav">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#placeholder1">placeholder</Nav.Link>
            <Nav.Link href="#placeholder2">placeholder</Nav.Link>
          </Navbar.Collapse>
        </Nav>
      </Navbar.Brand>
    </Container>
  </Navbar>
  );
}

export default HomeNavbar;
