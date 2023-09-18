import { IRecent } from '../../interfaces/recentData.ts';

const recentUser1: Array<IRecent> = [
  {
    id: 1,
    date: '10/09/2023, 19:59',
    user: 'Mercado hoje',
    type: 'Pix',
    quantity: -300,
    status: 'Pendente',
  },
  {
    id: 2,
    date: '10/04/2023, 17:44',
    user: 'Usuario1722',
    type: 'Pix',
    quantity: 100,
    status: 'Completo',
  },
  {
    id: 3,
    date: '11/04/2023, 18:20',
    user: 'Daniel sobrenome',
    type: 'Transferencia',
    quantity: 240,
    status: 'Completo',
  },
  {
    id: 4,
    date: '14/04/2023, 11:52',
    user: 'Sorveteria',
    type: 'Pix',
    quantity: -50,
    status: 'Completo',
  },
  {
    id: 5,
    date: '09/09/2023, 14:22',
    user: 'Daniel sobrenome',
    type: 'Transferencia',
    quantity: 240,
    status: 'Rejeitado',
  },
  {
    id: 6,
    date: '09/09/2023, 14:14',
    user: 'Daniel sobrenome',
    type: 'Transferencia',
    quantity: 100,
    status: 'Rejeitado',
  },
];

export default recentUser1;
