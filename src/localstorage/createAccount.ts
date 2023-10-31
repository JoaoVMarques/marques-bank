import { IRegisterAcount } from './interfaces/account.ts';
import { IAccountInfo } from './interfaces/accountInfo.ts';

export function formatAccount(account: IRegisterAcount) {
  return { email: account.email, password: account.password };
}

// Criar a info da conta apartir do registerAcount
function createAccountInfo(account: IRegisterAcount) {
  const accountInfo: IAccountInfo = {
    email: account.email,
    username: account.username,
    balance: {
      available: 0,
      deposited: 0,
      withdrawn: 0,
      income: 0,
    },
    transactions: [

    ],
  };

  const localstorageInfo = localStorage.getItem('info');
  if(!localstorageInfo) {
    localStorage.setItem('info', JSON.stringify([accountInfo]));
    return;
  }
  const parseAccounts = JSON.parse(localstorageInfo);
  parseAccounts.push(accountInfo);
  localStorage.setItem('info', JSON.stringify(parseAccounts));
  return accountInfo;
}

export function insertAccount(account: IRegisterAcount) {
  const accounts = localStorage.getItem('accounts');
  const formattedAccount = formatAccount(account);
  const accountInfo = createAccountInfo(account);

  if(!accounts) {
    localStorage.setItem('accounts', JSON.stringify([formattedAccount]));
    return accountInfo;
  }

  const parseAccounts = JSON.parse(accounts);
  parseAccounts.push(formattedAccount);
  localStorage.setItem('accounts', JSON.stringify(parseAccounts));
  return accountInfo;
}
