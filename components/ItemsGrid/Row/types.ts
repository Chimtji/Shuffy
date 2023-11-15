import { TMiningRecipe, TMiningRecipeIds } from '@/store/mining/types';

export type TRowProps = {
  recipe: TMiningRecipe & { id: TMiningRecipeIds };
};
