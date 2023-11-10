import { Col, Container, Row } from 'react-bootstrap';
import { IPanel } from '../../interfaces/summaryInterfaces.ts';
import { IBalance } from '../../../../localstorage/interfaces/accountInfo.ts';

function SummaryPanel(props: { panel: IPanel, balance: IBalance }) {
  const { panel } = props;
  const { icon } = panel;
  return (
    <Col lg={6} md={6} xl={3}>
      <Container className='panelBorder p-3 rounded bg-light mb-3'>
        <Row>
          <Col>
            <img className='mb-2 me-2' width={icon.size} src={icon.src} alt={icon.alt} />
            <span>{panel.title}</span>
          </Col>
        </Row>
        <Row>
          <Col>
            {/* Remover esse .value depois e substituir pelo valor do usuario */}
            <h4>R$ {panel.value }</h4>
          </Col>
        </Row>
      </Container>
    </Col>
  );
}

export default SummaryPanel;
