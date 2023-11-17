import * as mining from './mining';
import * as tailoring from './tailoring';

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
};
