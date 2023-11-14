import { IBalance } from '../../../localstorage/interfaces/accountInfo.ts';

interface Iicon {
  src: string;
  size: number;
  alt: string;
}

export interface IPanel {
  icon: Iicon;
  title: string;
  balanceType: keyof IBalance;
}
