import { IAccount } from './interfaces/account.ts';
import { IAccountInfo } from './interfaces/accountInfo.ts';

export const defaultAccount: IAccount = {
  email: 'teste@email.com',
  password: '1234',
};

export const defaultAccountInfo: IAccountInfo = {
  email: defaultAccount.email,
  username: 'testeUsername',
  balance: {
    available: 1000,
    deposited: 700,
    withdrawn: 200,
    income: 300,
  },
  transactions: [
    {
      id: 1,
      date: '10/09/2023, 19:59',
      receiver: 'Mercado hoje',
      type: 'Pix',
      quantity: -300,
      status: 'Pendente',
    },
    {
      id: 2,
      date: '10/04/2023, 17:44',
      receiver: 'Usuario1722',
      type: 'Pix',
      quantity: 100,
      status: 'Completo',
    },
    {
      id: 3,
      date: '11/04/2023, 18:20',
      receiver: 'Daniel sobrenome',
      type: 'Transferencia',
      quantity: 240,
      status: 'Completo',
    },
    {
      id: 4,
      date: '14/04/2023, 11:52',
      receiver: 'Sorveteria',
      type: 'Pix',
      quantity: -50,
      status: 'Completo',
    },
    {
      id: 5,
      date: '09/09/2023, 14:22',
      receiver: 'Daniel sobrenome',
      type: 'Transferencia',
      quantity: 240,
      status: 'Rejeitado',
    },
    {
      id: 6,
      date: '09/09/2023, 14:14',
      receiver: 'Daniel sobrenome',
      type: 'Transferencia',
      quantity: 100,
      status: 'Rejeitado',
    },
  ],
};
