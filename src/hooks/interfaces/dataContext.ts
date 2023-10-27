import { IAccountInfo } from "../../localstorage/interfaces/accountInfo";

export interface IDataContext {
  getUserData: () => IAccountInfo
  setUser: (data : IAccountInfo) => void
}