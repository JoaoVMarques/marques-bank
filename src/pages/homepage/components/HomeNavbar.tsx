import {
  Col, Row,
  Navbar, Container,
} from 'react-bootstrap';
import logo from '../../../imgs/logo.png';

function HomeNavbar() {
  return (
  <Navbar className='pb-0'>
    <Container>
      <Navbar.Brand href="#" className='align-items-center'>
        <Container>
          <Row>
            <Col className='p-0'>
              <img alt="logo marques-bank" src={logo} className="d-inline-block" />
            </Col>
            <Col className='p-0 align-self-center'>
              <h3 className='mt-3'>Marques</h3>
            </Col>
          </Row>
        </Container>
      </Navbar.Brand>
    </Container>
  </Navbar>
  );
}

export default HomeNavbar;
