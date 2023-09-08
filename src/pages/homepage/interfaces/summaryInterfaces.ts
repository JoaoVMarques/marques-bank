interface Iicon {
  src: string;
  size: number;
  alt: string;
}

export interface IPanel {
  icon: Iicon;
  title: string;
  value: number;
}
