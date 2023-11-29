import { Container, Row } from 'react-bootstrap';
import SummaryPanel from './SummaryPanel.tsx';
import panels from './panels.ts';
import { IAccountInfo } from '../../../../localstorage/interfaces/accountInfo.ts';

function Summary(props: { userData: IAccountInfo }) {
  const { userData } = props;
  return (
    <Container className='mb-3 px-xs-5'>
      <Row className=''>
        <h5 className='mb-3 ps-5 ps-md-0'>Sumário</h5>
      </Row>
      <Row className='justify-content-center'>
        { panels.map((panel) => (
          <SummaryPanel key={panel.title} userData={userData} panel={panel} />
        )) }
      </Row>
    </Container>
  );
}

export default Summary;
