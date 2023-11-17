import { TAreaName, TAreas, TRecipe } from '@/store/materials/types';

export type TRowProps<T extends TAreaName> = {
  recipe: TRecipe<T> & { id: TAreas[T]['recipes'] };
};
