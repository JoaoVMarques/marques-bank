import { IAccountInfo } from "../../src/localstorage/interfaces/accountInfo";

export interface IAccount {
  email: string,
  password: string,
}

export const account: IAccount = {
  email: 'correctEmail@email.com',
  password: '1234',
};

export const testAccountInfo: IAccountInfo = {
  email: 'correctEmail@email.com',
  username: 'testUsername',
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
  ]
}
export const VALID_ACCOUNT = {
  username: 'usernameTest',
  password: 'passwordT',
  email: 'emailTest@email.com'
}