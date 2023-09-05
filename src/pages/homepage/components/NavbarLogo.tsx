import { Col, Row, Container } from 'react-bootstrap';
import logo from '../../../imgs/logo.png';

function NavbarLogo() {
  return (
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
  );
}

export default NavbarLogo;
