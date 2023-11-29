import {
  Navbar, Container, Nav, Offcanvas,
} from 'react-bootstrap';
import NavbarLogo from './NavbarLogo.tsx';
import personIcon from '../../../imgs/svgs/person-circle.svg';

function HomeNavbar(props: { username: string }) {
  const { username } = props;
  return (
    <Navbar expand="md" className='pb-0'>
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
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Navbar.Collapse className="justify-content-end order-2 mb-md-0 mb-sm-3">
              <Navbar.Text className=''>
                <img className='me-2' src={personIcon} width={30} alt="icone usuario" />
                <span className='align-middle'>{username}</span>
              </Navbar.Text>
            </Navbar.Collapse>
            <Nav className='d-lg-flex order-1'>
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
