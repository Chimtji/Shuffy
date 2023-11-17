import { TAreaName } from '../materials/types';

export type TUiStore = {
  area: TAreaName;
  priceVariant: 'unit' | 'stack';
  switchPriceVariant: () => void;
  switchArea: (to: TAreaName) => void;
};
