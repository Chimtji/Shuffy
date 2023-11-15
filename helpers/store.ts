import recipes from '@/store/mining/recipes';
import useMiningStore from '@/store/mining/store';
import {
  TMiningMaterialIds,
  TMiningMaterialItem,
  TMiningMaterialType,
  TMiningRecipe,
  TMiningRecipeIds,
  TMiningRecipeItem,
  TMiningRecipes,
} from '@/store/mining/types';
import { removeDuplicates } from '@/utilities';

export const findRecipes = (
  id: TMiningMaterialIds,
  type: TMiningMaterialType,
  recipes: TMiningRecipes,
) => {
  const result: (TMiningRecipe & { id: TMiningRecipeIds })[] = [];

  Object.keys(recipes).forEach((name) => {
    const recipe = recipes[name as keyof typeof recipes];
    const material = recipe.materials.find((m) => m.id === id && m.type === type);
    const product = recipe.product;
    if (material) {
      result.push({ ...recipe, id: name as TMiningRecipeIds });
    }

    if (product.id === id && product.type === type) {
      result.push({ ...recipe, id: name as TMiningRecipeIds });
    }
  });

  return result;
};

export const getAllMaterialsFromRecipes = (): TMiningRecipeItem[] => {
  const allMaterials: Record<string, unknown>[] = [];

  Object.keys(recipes).forEach((recipeName) => {
    const materials = recipes[recipeName as keyof typeof recipes].materials;
    const product = recipes[recipeName as keyof typeof recipes].product;

    materials.forEach((material) => {
      allMaterials.push(material);
    });

    allMaterials.push(product);
  });

  const result: TMiningRecipeItem[] = removeDuplicates(allMaterials, [
    'id',
    'type',
  ]) as TMiningRecipeItem[];

  return result;
};

export const getAllUsedMaterials = (): TMiningMaterialItem[] => {
  const allMaterials = getAllMaterialsFromRecipes();

  const result = allMaterials.map((material) => {
    return useMiningStore.getState().materials[material.id][material.type];
  });

  return result;
};

export const sanitizedMaterials = (): TMiningRecipeItem[] => {
  const allMaterials: Record<string, unknown>[] = [];

  Object.keys(recipes).forEach((recipeName) => {
    const materials = recipes[recipeName as keyof typeof recipes].materials;

    materials.forEach((material) => {
      allMaterials.push(material);
    });
  });

  const result: TMiningRecipeItem[] = removeDuplicates(allMaterials, [
    'id',
    'type',
  ]) as TMiningRecipeItem[];

  return result;
};
