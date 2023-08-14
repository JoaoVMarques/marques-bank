import { Col, Container, Row } from 'react-bootstrap';

function Slogan() {
  return (
    <Container>
      <Row>
        <Col>
          <h4 className='text-center mb-0 color-purple'>Tecnologia
          <span className='text-body'> e </span>
          Velocidade</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4 className='text-center mb-3'>para sua vida financeira!</h4>
        </Col>
      </Row>
    </Container>
  );
}

export default Slogan;
