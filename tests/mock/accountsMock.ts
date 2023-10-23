export interface IAccount {
  email: string,
  password: string,
}

export const testAccount: IAccount = {
  email: 'correctEmail@email.com',
  password: '1234',
};

export const VALID_ACCOUNT = {
  username: 'usernameTest',
  password: 'passwordT',
  email: 'emailTest@email.com'
}