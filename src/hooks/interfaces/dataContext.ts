import { IAccountInfo } from "../../localstorage/interfaces/accountInfo";

export interface IDataContext {
  userData: IAccountInfo | null
  setUser: (data : IAccountInfo) => void
}