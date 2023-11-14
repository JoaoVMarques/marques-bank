import { Container, Row } from 'react-bootstrap';
import SummaryPanel from './SummaryPanel.tsx';
import panels from './panels.ts';
import { IAccountInfo } from '../../../../localstorage/interfaces/accountInfo.ts';

// otimizar essa tela usando loops

function Summary(props: { userData: IAccountInfo }) {
  const { userData } = props;
  return (
    <Container className='mb-3'>
      <Row>
        <h5 className='mb-3'>Sumário</h5>
      </Row>
      <Row>
        { panels.map((panel) => (
          <SummaryPanel key={panel.title} userData={userData} panel={panel} />
        )) }
      </Row>
    </Container>
  );
}

export default Summary;
