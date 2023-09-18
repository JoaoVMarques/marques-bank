// A parte de encontrar a conta deveria ser feito no back-end
// porém por ser um projeto de testes e não vai ser utilizado back-end no momento
import { IAccount } from '../interfaces/account.ts';

const defaultAccount: IAccount = {
  email: 'test@email.com',
  password: '1234',
};

function searchAccount(credentials: IAccount, localStorageAccount: string) {
  const accounts: Array<IAccount> = JSON.parse(localStorageAccount);
  const accountFind = accounts.find(
    ({ email, password }) => credentials.email === email
    && credentials.password === password,
  );

  return !!accountFind;
}

export default function validateLogin(account: IAccount) {
  const accounts = localStorage.getItem('accounts');
  if (!accounts) {
    localStorage.setItem('accounts', JSON.stringify([defaultAccount]));
  }
  return searchAccount(account, accounts!);
}
