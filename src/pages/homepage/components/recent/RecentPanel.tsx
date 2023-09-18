import {
  Col, Container, Row, Table,
} from 'react-bootstrap';
import recentUser1 from './recentData.ts';
import { IRecent } from '../../interfaces/recentData.ts';

function createTable(user : IRecent) {
  return (
  <tr key={user.id}>
    <td>{user.date}</td>
    <td>{user.user}</td>
    <td>{user.type}</td>
    <td>{user.quantity}</td>
    <td>{user.status}</td>
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
        <Table className='panelBorder' responsive>
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
