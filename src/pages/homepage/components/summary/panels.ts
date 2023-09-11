/* eslint-disable import/prefer-default-export */
import { IPanel } from '../../interfaces/summaryInterfaces.ts';
import wallet from '../../../../imgs/svgs/wallet.svg';
import coin from '../../../../imgs/svgs/coin.svg';
import arrowDown from '../../../../imgs/svgs/down-arrow.svg';

export const totalMoney: IPanel = {
  icon: {
    src: wallet,
    size: 35,
    alt: 'icone de carteira de dinheiro',
  },
  title: 'Saldo disponível',
  value: 1000,
};

export const deposit: IPanel = {
  icon: {
    src: arrowDown,
    size: 35,
    alt: 'seta para baixo',
  },
  title: 'Dinheiro depositado',
  value: 500,
};

export const placeholder: IPanel = {
  icon: {
    src: coin,
    size: 35,
    alt: 'icone de moeda',
  },
  title: 'Placeholder',
  value: 0,
};
