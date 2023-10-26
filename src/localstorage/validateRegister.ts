import { IRegisterAcount, IAccount } from './interfaces/account.ts';

function verifyEmailExist(accountEmail: string) {
  const localstorageAccount = localStorage.getItem('accounts');
  if (localstorageAccount) {
    const accounts: Array<IAccount> = JSON.parse(localstorageAccount);
    const accountFind = accounts.find(({ email }) => accountEmail === email);
    const accountBoolean = !!accountFind;
    return !accountBoolean;
  }
  return true;
}

export default function validateRegister(account: IRegisterAcount) {
  const emailValid = !!verifyEmailExist(account.email);
  const invalidEmailMessage = { input: 'email', message: 'Email já existe' };
  return emailValid ? invalidEmailMessage : false;
}
