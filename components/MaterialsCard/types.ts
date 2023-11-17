import { TAreaName, TRecipeItem } from '@/store/materials/types';

export type TMaterialCardItem<A extends TAreaName> = TRecipeItem<A> & {
  variant: 'product' | 'material';
};

export type TMaterialCardProps<A extends TAreaName> = {
  items: TRecipeItem<A>[];
  variant: 'product' | 'material';
  className?: any;
};
