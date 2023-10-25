export interface IBalance {
  available: number
  deposited: number
  withdrawn: number
  income: number
}

export interface ITransactions {
  id: number
  date: string
  receiver: string
  type: string
  quantity: number
  status: string
}

export interface IAccountInfo {
  email: string
  username: string
  balance: IBalance
  transactions: ITransactions[]
}
