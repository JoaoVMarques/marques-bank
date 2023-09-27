export interface IAccount {
  email: string,
  password: string,
}

// TODO: fazer o mock com o teste
// e criar um teste não funcionando entrar com uma conta não existente

const testAccount: IAccount = {
  email: 'correctEmail@email.com',
  password: '1234',
};

export default testAccount