import { Col, Row, Container } from 'react-bootstrap';
import logo from '../../../imgs/logo.png';

function NavbarLogo() {
  return (
    <Container className='me-lg-5 me-sm-1'>
      <Row>
        <Col className='p-0'>
          <img alt="logo marques-bank" src={logo} className="d-inline-block pb-2" />
        </Col>
        <Col className='p-0 align-self-center'>
          <h4 className='mb-0'>Marques</h4>
        </Col>
      </Row>
    </Container>
  );
}

export default NavbarLogo;
