import { Col, Container, Row } from 'react-bootstrap';
import { IPanel } from '../../interfaces/summaryInterfaces.ts';

function SummaryPanel(props: { panel: IPanel }) {
  const { panel } = props;
  const { icon } = panel;
  return (
    <Col>
      <Container className='panelBorder p-3 rounded'>
        <Row>
          <Col>
            <img className='mb-2 me-2' width={icon.size} src={icon.src} alt={icon.alt} />
            <span>{panel.title}</span>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>R$ {panel.value}</h4>
          </Col>
        </Row>
      </Container>
    </Col>
  );
}

export default SummaryPanel;