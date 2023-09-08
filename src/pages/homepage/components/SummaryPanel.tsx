import { Col, Container, Row } from 'react-bootstrap';
import walletIcon from '../../../imgs/svgs/wallet.svg';

function SummaryPanel() {
  return (
    <Container>
      <Row>
        <Col>
          <img className='mb-2 me-2' width={35} src={walletIcon} alt="icone dinheiro" />
          <span>Saldo disponivel</span>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>R$ 1000</h4>
        </Col>
      </Row>
    </Container>
  );
}

export default SummaryPanel;
