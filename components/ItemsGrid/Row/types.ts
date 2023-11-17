import { TAreas } from '@/store/materials/areas';
import { TAreaName, TRecipe } from '@/store/materials/types';

export type TRowProps<A extends TAreaName> = {
  recipe: TRecipe<A>;
  id: TAreas[A]['recipes'];
};
