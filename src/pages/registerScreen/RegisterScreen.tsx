import {
  Col,
  Container, Row,
} from 'react-bootstrap';
import RegisterForm from './Forms/RegisterForm.tsx';

function RegisterScreen() {
  return (
    <Container className='p-5'>
      <Row>
        <Col className='p-4 background-white container-rounded'>
          <h2>Registro</h2>
          <RegisterForm />
        </Col>
      </Row>
    </Container>
  );
}

export default RegisterScreen;
