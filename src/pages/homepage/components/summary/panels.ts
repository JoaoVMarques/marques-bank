/* eslint-disable import/prefer-default-export */
import { IPanel } from '../../interfaces/summaryInterfaces.ts';
import wallet from '../../../../imgs/svgs/wallet.svg';
import arrowDown from '../../../../imgs/svgs/arrow-down.svg';
import arrowUp from '../../../../imgs/svgs/arrow-up.svg';
import piggyBank from '../../../../imgs/svgs/piggy-bank.svg';

// Depois é preciso deixar dinamico a parte dos valores.

export const totalMoney: IPanel = {
  icon: {
    src: wallet,
    size: 30,
    alt: 'icone de carteira de dinheiro',
  },
  title: 'Saldo disponível',
};

export const deposit: IPanel = {
  icon: {
    src: arrowDown,
    size: 30,
    alt: 'seta para baixo',
  },
  title: 'Dinheiro depositado',
};

export const withdrawn: IPanel = {
  icon: {
    src: arrowUp,
    size: 30,
    alt: 'seta para cima',
  },
  title: 'Dinheiro retirado',
};

export const earnedMoney: IPanel = {
  icon: {
    src: piggyBank,
    size: 30,
    alt: 'cofrinho de dinheiro em formato de porquinho',
  },
  title: 'Rendimentos obtidos',
};
