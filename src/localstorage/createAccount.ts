import { IAccount, IRegisterAcount } from './interfaces/account.ts';

export function formatAccount(account: IRegisterAcount) {
  return { email: account.email, password: account.password };
}

export function insertAccount(account: IAccount) {
  const accounts = localStorage.getItem('accounts');
  if (!accounts) {
    localStorage.setItem('accounts', JSON.stringify([account]));
    return;
  }

  const parseAccounts = JSON.parse(accounts);
  parseAccounts.push(account);
  localStorage.setItem('accounts', JSON.stringify(parseAccounts));
}
