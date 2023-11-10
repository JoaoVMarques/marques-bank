import { IPanel } from '../../interfaces/summaryInterfaces.ts';
import wallet from '../../../../imgs/svgs/wallet.svg';
import arrowDown from '../../../../imgs/svgs/arrow-down.svg';
import arrowUp from '../../../../imgs/svgs/arrow-up.svg';
import piggyBank from '../../../../imgs/svgs/piggy-bank.svg';

// Depois é preciso deixar dinamico a parte dos valores.

const panels: IPanel[] = [
  {
    icon: {
      src: wallet,
      size: 30,
      alt: 'icone de carteira de dinheiro',
    },
    title: 'Saldo disponível',
    balanceType: 'available',
  },

  {
    icon: {
      src: arrowDown,
      size: 30,
      alt: 'seta para baixo',
    },
    title: 'Dinheiro depositado',
    balanceType: 'deposited',
  },

  {
    icon: {
      src: arrowUp,
      size: 30,
      alt: 'seta para cima',
    },
    title: 'Dinheiro retirado',
    balanceType: 'withdrawn',
  },

  {
    icon: {
      src: piggyBank,
      size: 30,
      alt: 'cofrinho de dinheiro em formato de porquinho',
    },
    title: 'Rendimentos obtidos',
    balanceType: 'income',
  },
];

export default panels;
