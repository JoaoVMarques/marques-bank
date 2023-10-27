import {
  Col, Container, Row, Table,
} from 'react-bootstrap';
import { ITransactions } from '../../../../localstorage/interfaces/accountInfo.ts';

function createTable(data: ITransactions) {
  return (
    <tr key={data.id}>
      <td>{data.date}</td>
      <td>{data.receiver}</td>
      <td>{data.type}</td>
      <td>{data.quantity}</td>
      <td>{data.status}</td>
    </tr>);
}

function RecentPanel(props: { transactions: ITransactions[] }) {
  const { transactions } = props;
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
            {transactions.map((data) => createTable(data))}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
}

export default RecentPanel;
