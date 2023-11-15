import { TPrice } from '@/types';

export type TMiningMaterialIds =
  | 'copper'
  | 'tin'
  | 'silver'
  | 'iron'
  | 'coal'
  | 'gold'
  | 'mithril'
  | 'truesilver'
  | 'thorium'
  | 'bronze'
  | 'steel'
  | 'darkIron';

export type TMiningRecipeIds =
  | 'copperBar'
  | 'tinBar'
  | 'silverBar'
  | 'ironBar'
  | 'steelBar'
  | 'bronzeBar'
  | 'goldBar'
  | 'mithrilBar'
  | 'truesilverBar'
  | 'thoriumBar'
  | 'darkIronBar';

export type TMiningMaterialType = 'ore' | 'bar';

export type TMiningMaterialItem = {
  image: string;
  name: string;
  unitPrice: TPrice;
  stackPrice: TPrice;
  quantity: number;
  recipes: TMiningRecipeIds[];
};

export type TMiningMaterial = {
  [type in TMiningMaterialType]: TMiningMaterialItem;
};

export type TMiningMaterials = { [id in TMiningMaterialIds]: TMiningMaterial };

export type TMiningRecipeItem = {
  id: TMiningMaterialIds;
  type: TMiningMaterialType;
  quantity: number;
};

export type TMiningRecipe = {
  name: string;
  materials: TMiningRecipeItem[];
  product: TMiningRecipeItem;
};

export type TMiningRecipes = { [id in TMiningRecipeIds]: TMiningRecipe };

export type TMiningCalculations = {
  [id in TMiningRecipeIds]: {
    profit: {
      percent: number;
      price: {
        stack: TPrice;
        unit: TPrice;
      };
    };
  };
};
