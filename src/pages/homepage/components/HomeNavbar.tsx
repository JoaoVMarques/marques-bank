import { Navbar, Container } from 'react-bootstrap';
import NavbarLogo from './NavbarLogo.tsx';

function HomeNavbar() {
  return (
  <Navbar expand="lg" className='pb-0'>
    <Container>
      <Navbar.Brand href="#" className='align-items-center'>
        <NavbarLogo />
      </Navbar.Brand>
    </Container>
  </Navbar>
  );
}

export default HomeNavbar;
