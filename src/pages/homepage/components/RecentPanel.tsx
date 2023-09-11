import {
  Col, Container, Row, Table,
} from 'react-bootstrap';

function RecentPanel() {
  return (
    <Container>
      <Row>
        <Col>
          <h5 className='mb-3'>Transações recentes</h5>
        </Col>
      </Row>
      <Row>
        <Table>
          <thead>
            <tr>
              <th>Data</th>
              <th>Tipo</th>
              <th>Quantidade</th>
              <th>Status</th>
            </tr>
          </thead>
        </Table>
      </Row>
    </Container>
  );
}

export default RecentPanel;
