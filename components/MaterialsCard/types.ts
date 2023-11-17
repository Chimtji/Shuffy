import { TAreaName, TRecipeItem } from '@/store/materials/types';

export type TMaterialCardItem<T extends TAreaName> = TRecipeItem<T> & {
  variant: 'product' | 'material';
};

export type TMaterialCardProps<T extends TAreaName> = {
  items: TRecipeItem<T>[];
  variant: 'product' | 'material';
  className?: any;
};
