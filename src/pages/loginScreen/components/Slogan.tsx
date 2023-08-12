import { Col, Container, Row } from 'react-bootstrap';

function Slogan() {
  return (
    <Container>
        <Row>
            <Col>
                <h4 className='text-center mb-0'>Tecnologia e velocidade</h4>
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
