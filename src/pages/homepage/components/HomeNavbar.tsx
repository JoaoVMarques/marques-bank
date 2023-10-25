import {
  Navbar, Container, Nav, Offcanvas,
} from 'react-bootstrap';
import NavbarLogo from './NavbarLogo.tsx';
import personIcon from '../../../imgs/svgs/person-circle.svg';

function HomeNavbar() {
  return (
  <Navbar expand="sm" className='pb-0'>
    <Container>
      <Navbar.Brand href="#">
        <NavbarLogo />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls={'offcanvasNavbar-expand-sm'} />
      <Navbar.Offcanvas
        id={'offcanvasNavbar-expand-lg'}
        aria-labelledby={'offcanvasNavbarLabel-expand-sm'}
        placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id={'offcanvasNavbarLabel-expand-sm'}>
            Offcanvas
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className='d-lg-flex'>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#placeholder1">placeholder</Nav.Link>
            <Nav.Link href="#placeholder2">placeholder</Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <img className='me-2' src={personIcon} width={30} alt="icone usuario" />
              <span className='align-middle'>USERNAME</span>
            </Navbar.Text>
          </Navbar.Collapse>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Container>
  </Navbar>
  );
}

export default HomeNavbar;
