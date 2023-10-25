export interface IBalance {
  available: number
  deposited: number
  withdrawn: number
  income: number
}

export interface ITransactions {
  date: string
  receiver: string
  type: string
  qntd: number
  status: string
}

export interface IAccountInfo {
  email: string
  username: string
  balance: IBalance
  transactions: ITransactions[]
}
