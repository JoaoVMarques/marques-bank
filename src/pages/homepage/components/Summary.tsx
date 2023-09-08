import { Col, Container, Row } from 'react-bootstrap';
import SummaryPanel from './SummaryPanel.tsx';

function Summary() {
  return (
    <Container>
      <Row>
        <h5 className='mb-3' >Sumário</h5>
      </Row>
      <Row>
        <Col>
          <SummaryPanel />
        </Col>
      </Row>
    </Container>
  );
}

export default Summary;
