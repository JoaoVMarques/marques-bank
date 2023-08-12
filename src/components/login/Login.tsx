import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../imgs/logo.png';

function Login() {
  return (
    <Container className='p-5'>
      <Row>
        <Col>
          <img src={logo} alt="logo da empresa com nome Marques-Bank" />
        </Col>
        <Col>
          <h1>Entrar</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
