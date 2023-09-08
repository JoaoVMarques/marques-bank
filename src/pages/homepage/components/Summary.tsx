import { Col, Container, Row } from 'react-bootstrap';
import walletIcon from '../../../imgs/svgs/wallet.svg';

function Summary() {
  return (
    <Container>
      <Row>
        <h5>Sumário</h5>
      </Row>
      <Row>
        <Col>
        <img width={30} src={walletIcon} alt="icone dinheiro" />
        <span>Saldo disponivel</span>
        <span>R$ 1000</span>
        </Col>
      </Row>
    </Container>
  );
}

export default Summary;
