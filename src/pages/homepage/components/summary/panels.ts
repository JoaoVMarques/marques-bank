/* eslint-disable import/prefer-default-export */
import { IPanel } from '../../interfaces/summaryInterfaces.ts';
import wallet from '../../../../imgs/svgs/wallet.svg';

export const totalMoney: IPanel = {
  icon: {
    src: wallet,
    size: 35,
    alt: 'icone de carteira de dinheiro',
  },
  title: 'Saldo disponível',
  value: 1000,
};
