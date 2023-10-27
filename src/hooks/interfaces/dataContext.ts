import { IAccountInfo } from '../../localstorage/interfaces/accountInfo.ts';

export interface IDataContext {
  getUserData: () => IAccountInfo
  setUser: (data : IAccountInfo) => void
}
