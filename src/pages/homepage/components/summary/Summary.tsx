import { Container, Row } from 'react-bootstrap';
import SummaryPanel from './SummaryPanel.tsx';
import {
  totalMoney, deposit, withdrawn, earnedMoney,
} from './panels.ts';

function Summary() {
  return (
    <Container className='mb-3'>
      <Row>
        <h5 className='mb-3'>Sumário</h5>
      </Row>
      <Row clas>
        <SummaryPanel panel={totalMoney} />
        <SummaryPanel panel={deposit} />
        <SummaryPanel panel={withdrawn} />
        <SummaryPanel panel={earnedMoney} />
      </Row>
    </Container>
  );
}

export default Summary;
