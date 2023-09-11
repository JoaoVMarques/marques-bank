/* eslint-disable import/prefer-default-export */
import { IPanel } from '../../interfaces/summaryInterfaces.ts';
import wallet from '../../../../imgs/svgs/wallet.svg';
import coin from '../../../../imgs/svgs/coin.svg';
import arrowDown from '../../../../imgs/svgs/arrow-down.svg';
import arrowUp from '../../../../imgs/svgs/arrow-up.svg';

export const totalMoney: IPanel = {
  icon: {
    src: wallet,
    size: 30,
    alt: 'icone de carteira de dinheiro',
  },
  title: 'Saldo disponível',
  value: 1000,
};

export const deposit: IPanel = {
  icon: {
    src: arrowDown,
    size: 30,
    alt: 'seta para baixo',
  },
  title: 'Dinheiro depositado',
  value: 500,
};

export const withdrawn: IPanel = {
  icon: {
    src: arrowUp,
    size: 30,
    alt: 'seta para cima',
  },
  title: 'Dinheiro retirado',
  value: 200,
};

export const placeholder: IPanel = {
  icon: {
    src: coin,
    size: 30,
    alt: 'icone de moeda',
  },
  title: 'Placeholder',
  value: 0,
};
