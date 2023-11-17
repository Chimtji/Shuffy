import { removeDuplicates } from '@/utilities';
import useMaterialsStore from '@/store/materials/store';
import {
  TAreaName,
  TAreas,
  TMaterialsStore,
  TRecipe,
  TRecipeItem,
  TRecipes,
} from '@/store/materials/types';

export const findRecipes = <T extends TAreaName>(
  id: TAreas[T]['materials'],
  type: TAreas[T]['materialTypes'],
  recipes: TRecipes<T>,
) => {
  const result: (TRecipe<T> & { id: TAreas[T]['recipes'] })[] = [];

  Object.keys(recipes).forEach((name) => {
    const recipe = recipes[name as keyof typeof recipes];
    const material = recipe.materials.find((m) => m.id === id && m.type === type);
    const product = recipe.product;
    if (material) {
      result.push({ ...recipe, id: name as TAreas[T]['recipes'] });
    }

    if (product.id === id && product.type === type) {
      result.push({ ...recipe, id: name as TAreas[T]['recipes'] });
    }
  });

  return result;
};

export const getAllMaterialsFromRecipes = (state: TMaterialsStore) => {
  const areas: TAreaName[] = [];

  const result: { [area in TAreaName]?: TRecipeItem<area>[] } = {};

  Object.keys(state).forEach((key) => {
    if (typeof state[key as keyof TMaterialsStore] != 'function') {
      result[key as TAreaName] = [];
      areas.push(key as TAreaName);
    }
  });

  areas.forEach((area) => {
    Object.keys(state[area].recipes).forEach((recipeName) => {
      const recipes = state[area].recipes;
      const materials = recipes[recipeName as keyof typeof recipes].materials;
      const product = recipes[recipeName as keyof typeof recipes].product;

      materials.forEach((material) => {
        result[area as TAreaName]?.push(material);
      });

      result[area as TAreaName]?.push(product);
    });
  });

  Object.keys(result).forEach((area) => {
    if (result[area as TAreaName]) {
      result[area as TAreaName] = removeDuplicates(
        result[area as TAreaName] as TRecipeItem<TAreaName>[],
        ['id', 'type'],
      ) as TRecipeItem<TAreaName>[];
    }
  });

  return result;
};
