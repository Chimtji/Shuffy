import { TAreas } from '@/store/materials/areas';
import { TAreaName, TRecipeItem } from '@/store/materials/types';

export type TMaterialCardItem<A extends TAreaName> = TRecipeItem<A> & {
  variant: 'product' | 'material';
};

export type TMaterialCardProps<A extends TAreaName> = {
  area: A;
  items: TRecipeItem<A>[];
  recipe: TAreas[A]['recipes'];
  variant: 'product' | 'material';
  className?: any;
  requirement?: string;
};
