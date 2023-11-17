import { TPrice } from '@/types';
import { TAreas } from './areas';

export type TAreaName = keyof TAreas;

export type TStoreFunctions = {
  updatePrice: <T extends TAreaName>({
    area,
    id,
    type,
    price,
    variant,
  }: {
    area: TAreaName;
    id: TAreas[T]['materials'];
    type: TAreas[T]['materialTypes'];
    price: TPrice;
    variant: 'unit' | 'stack';
  }) => any;
  updateMaterialQuantity: <T extends TAreaName>({
    area,
    id,
    type,
    quantity,
  }: {
    area: TAreaName;
    id: TAreas[T]['materials'];
    type: TAreas[T]['materialTypes'];
    quantity: number;
  }) => any;
};

export type TAreasState = {
  [area in TAreaName]: {
    materials: TMaterials<area>;
    recipes: TRecipes<area>;
    calculations: TCalculations<area>;
  };
};
export type TMaterialsStore = TAreasState & TStoreFunctions;

export type TMaterialItem = {
  image: string;
  name: string;
  unitPrice: TPrice;
  stackPrice: TPrice;
  quantity: number;
};

export type TRecipeItem<T extends TAreaName> = {
  id: TAreas[T]['materials'];
  type: TAreas[T]['materialTypes'];
  quantity: number;
};

export type TMaterial<T extends string> = {
  [type in T]: TMaterialItem;
};

export type TRecipe<T extends TAreaName> = {
  name: string;
  materials: TRecipeItem<T>[];
  product: TRecipeItem<T>;
};

export type TMaterials<T extends TAreaName> = {
  [id in TAreas[T]['materials']]: TMaterial<TAreas[T]['materialTypes']>;
};

export type TRecipes<T extends TAreaName> = { [id in TAreas[T]['recipes']]: TRecipe<T> };

export type TCalculations<T extends TAreaName> = {
  [id in TAreas[T]['calculations']]: {
    profit: {
      percent: number;
      price: {
        stack: TPrice;
        unit: TPrice;
      };
    };
  };
};
