import { removeDuplicates } from '@/utilities';
import {
  TAreaName,
  TAreasState,
  TMaterialItem,
  TMaterialsStore,
  TRecipe,
  TRecipeItem,
} from '@/store/materials/types';
import { TAreas } from '@/store/materials/areas';
import useMaterialsStore from '@/store/materials/store';

export const findMaterial = (id: string, type: string): TMaterialItem | null => {
  const state = useMaterialsStore.getState();
  let result: TMaterialItem | null = null;

  Object.keys(state).forEach((area) => {
    const materials = state[area as TAreaName].materials;
    if (materials) {
      const material = materials[id as keyof typeof materials];
      if (material) {
        const item = material[type as keyof typeof material];
        if (item) {
          result = item as TMaterialItem;
        }
      }
    }
  });

  return result;
};

export const findRecipes = <A extends TAreaName>(
  id: TAreas[A]['materials'],
  type: TAreas[A]['materialTypes'],
  recipes: TAreasState[A]['recipes'],
) => {
  const result: (TRecipe<A> & { id: TAreas[A]['recipes'] })[] = [];

  Object.keys(recipes).forEach((name) => {
    const recipe = recipes[name as keyof typeof recipes];
    const material = recipe.materials.find((m) => m.id === id && m.type === type);
    const product = recipe.product;
    if (material) {
      result.push({ ...recipe, id: name as TAreas[A]['recipes'] });
    }

    if (product.id === id && product.type === type) {
      result.push({ ...recipe, id: name as TAreas[A]['recipes'] });
    }
  });

  return result;
};

export const getAllMaterialsFromRecipes = (
  state: TMaterialsStore,
): (TRecipeItem<TAreaName> & { area: TAreaName })[] => {
  const areas: TAreaName[] = [];

  const result: (TRecipeItem<TAreaName> & { area: TAreaName })[] = [];

  Object.keys(state).forEach((key) => {
    if (typeof state[key as keyof TMaterialsStore] != 'function') {
      areas.push(key as TAreaName);
    }
  });

  areas.forEach((areaName) => {
    Object.keys(state[areaName].recipes).forEach((recipeName) => {
      const recipes = (state[areaName] as TAreasState[typeof areaName]).recipes;
      const recipe = recipes[recipeName as keyof typeof recipes] as TRecipe<typeof areaName>;

      const materials = recipe.materials;
      const product = recipe.product;

      materials.forEach((material) => {
        result?.push({ ...material, area: areaName });
      });

      result?.push({ ...product, area: areaName });
    });
  });

  return removeDuplicates(result, ['id', 'type']) as (TRecipeItem<TAreaName> & {
    area: TAreaName;
  })[];
};
