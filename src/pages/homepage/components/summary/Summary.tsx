import { Col, Container, Row } from 'react-bootstrap';
import SummaryPanel from './SummaryPanel.tsx';
import { placeholder, totalMoney, deposit } from './panels.ts';

function Summary() {
  return (
    <Container>
      <Row>
        <h5 className='mb-3'>Sumário</h5>
      </Row>
      <Row>
        <Col>
          <SummaryPanel panel={totalMoney} />
        </Col>
        <Col>
          <SummaryPanel panel={deposit} />
        </Col>
        <Col>
          <SummaryPanel panel={placeholder} />
        </Col>
      </Row>
    </Container>
  );
}

export default Summary;
