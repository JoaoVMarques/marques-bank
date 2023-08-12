import { Col, Container, Row } from 'react-bootstrap';

function Slogan() {
  return (
    <Container>
      <Row>
        <Col>
          <h4 className='text-center mb-0 text-primary'>Tecnologia
          <span className='text-body'> e </span>
          Velocidade</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4 className='text-center'>para sua vida financeira!</h4>
        </Col>
      </Row>
    </Container>
  );
}

export default Slogan;
