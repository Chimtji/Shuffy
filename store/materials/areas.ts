import * as mining from './mining';
import * as tailoring from './tailoring';
import * as elemental from './elemental';

import {
  TMiningCalculations,
  TMiningMaterialType,
  TMiningMaterials,
  TMiningRecipes,
} from './mining/types';
import { TAreasState } from './types';
import {
  TTailoringCalculations,
  TTailoringMaterialType,
  TTailoringMaterials,
  TTailoringRecipes,
} from './tailoring/types';
import {
  TElementalCalculations,
  TElementalMaterialType,
  TElementalMaterials,
  TElementalRecipes,
} from './elemental/types';

export type TAreas = {
  tailoring: {
    materialTypes: TTailoringMaterialType;
    materials: TTailoringMaterials;
    recipes: TTailoringRecipes;
    calculations: TTailoringCalculations;
  };
  mining: {
    materialTypes: TMiningMaterialType;
    materials: TMiningMaterials;
    recipes: TMiningRecipes;
    calculations: TMiningCalculations;
  };
  elemental: {
    materialTypes: TElementalMaterialType;
    materials: TElementalMaterials;
    recipes: TElementalRecipes;
    calculations: TElementalCalculations;
  };
};

export const areasState: TAreasState = {
  tailoring: {
    materials: tailoring.materials,
    recipes: tailoring.recipes,
    calculations: tailoring.calculations,
  },
  mining: {
    materials: mining.materials,
    recipes: mining.recipes,
    calculations: mining.calculations,
  },
  elemental: {
    materials: elemental.materials,
    recipes: elemental.recipes,
    calculations: elemental.calculations,
  },
};
