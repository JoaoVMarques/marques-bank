import {
  Navbar, Container, Nav, Offcanvas,
} from 'react-bootstrap';
import NavbarLogo from './NavbarLogo.tsx';

function HomeNavbar() {
  return (
  <Navbar expand="lg" className='pb-0'>
    <Container>
      <Navbar.Brand href="#">
        <NavbarLogo />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls={'offcanvasNavbar-expand-lg'} />
      <Navbar.Offcanvas
        id={'offcanvasNavbar-expand-lg'}
        aria-labelledby={'offcanvasNavbarLabel-expand-lg'}
        placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id={'offcanvasNavbarLabel-expand-lg'}>
            Offcanvas
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className='d-lg-flex'>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#placeholder1">placeholder</Nav.Link>
            <Nav.Link href="#placeholder2">placeholder</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Container>
  </Navbar>
  );
}

export default HomeNavbar;
