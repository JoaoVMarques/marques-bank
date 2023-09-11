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
        <Table className='panelBorder'>
          <thead>
            <tr>
              <th>Data</th>
              <th>Para</th>
              <th>Tipo</th>
              <th>Quantidade</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>10/04/2023, 17:44</td>
              <td>Usuario1722</td>
              <td>pix</td>
              <td>+100</td>
              <td>Completo</td>
            </tr>
            <tr>
              <td>10/04/2023, 17:44</td>
              <td>Daniel sobrenome</td>
              <td>transferencia</td>
              <td>+100</td>
              <td>Completo</td>
            </tr>
          </tbody>
        </Table>
      </Row>
    </Container>
  );
}

export default RecentPanel;
