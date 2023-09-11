import {
  Col, Container, Row, Table,
} from 'react-bootstrap';
import recentUser1 from './recent.data.ts';
import { IRecent } from '../../interfaces/recentData.ts';

function createTable(user : IRecent) {
  return (
  <tr>
    <td>{user.Date}</td>
    <td>{user.User}</td>
    <td>{user.Type}</td>
    <td>{user.Quantity}</td>
    <td>{user.Status}</td>
  </tr>);
}

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
            { recentUser1.map((user) => createTable(user)) }
          </tbody>
        </Table>
      </Row>
    </Container>
  );
}

export default RecentPanel;
