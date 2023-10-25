// A parte de encontrar a conta deveria ser feito no back-end
// porém por ser um projeto de testes e não vai ser utilizado back-end no momento
import { defaultAccount } from './data/defaultAccount.ts';
import { IAccount } from './interfaces/account.ts';

function searchAccount(credentials: IAccount, localStorageAccount: string) {
  const accounts: Array<IAccount> = JSON.parse(localStorageAccount);
  const accountFind = accounts.find(
    ({ email, password }) => credentials.email === email
    && credentials.password === password,
  );

  return !!accountFind;
}

export default function validateLogin(account: IAccount) {
  let accounts = localStorage.getItem('accounts');
  if (!accounts) {
    localStorage.setItem('accounts', JSON.stringify([defaultAccount]));
    accounts = localStorage.getItem('accounts');
  }
  return searchAccount(account, accounts!);
}
