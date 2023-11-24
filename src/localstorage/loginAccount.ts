// A parte de encontrar a conta deveria ser feito no back-end
// porém por ser um projeto de testes não vai ser utilizado back-end no momento
import { defaultAccount, defaultAccountInfo } from './data/defaultAccount.ts';
import { IAccount } from './interfaces/account.ts';
import findAccountInfo from './findAccountInfo.ts';
import { IAccountInfo } from './interfaces/accountInfo.ts';

function searchAccount(credentials: IAccount, localStorageAccount: string) {
  const accounts: Array<IAccount> = JSON.parse(localStorageAccount);
  const accountFind = accounts.find(
    ({ email, password }) => credentials.email === email
    && credentials.password === password,
  );

  return !!accountFind;
}

function saveLogin(accountEmail: string) {
  const accountInfo = findAccountInfo(accountEmail);
  if(!accountInfo) {
    throw new Error('account dont have Info');
  }
  return accountInfo;
}

function createAccount() {
  localStorage.setItem('accounts', JSON.stringify([defaultAccount]));
  localStorage.setItem('info', JSON.stringify([defaultAccountInfo]));
  return localStorage.getItem('accounts')!;
}

function validateLogin(
  account: IAccount,
  saveAccountAndRedirect: (accountInfo: IAccountInfo) => void,
) {
  let accounts = localStorage.getItem('accounts');
  if(!accounts) {
    accounts = createAccount();
  }

  const accountExists = searchAccount(account, accounts);
  if(accountExists) {
    const accountInfo = saveLogin(account.email);
    saveAccountAndRedirect(accountInfo);
  }
}

export default validateLogin;
