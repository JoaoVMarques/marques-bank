import {
  Col, Container, Row, Button,
} from 'react-bootstrap';
import logo from '../../imgs/logo.png';
import LoginForm from './Forms/LoginForm.tsx';

function LoginScreen() {
  return (
    <Container className='p-5'>
      <Row>
        <Col sm={8} md={true}>
          <img src={logo} alt="logo da empresa com nome Marques-Bank" />
        </Col>
        <Col sm={12} md={true}>
          <h1>Entrar</h1>
          <LoginForm />
          <div className='separator-box'>
            <div className="separator">OU</div>
          </div>
          <Button variant="secondary" className="w-100">Criar conta</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginScreen;
