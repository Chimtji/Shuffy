import { TPrice } from '@/types';
import { TAreas } from './areas';

export type TAreaName = keyof TAreas;

export type TStoreFunctions = {
  updatePrice: <A extends TAreaName>({
    area,
    id,
    type,
    price,
    variant,
  }: {
    area: A;
    id: TAreas[A]['materials'];
    type: TAreas[A]['materialTypes'];
    price: TPrice;
    variant: 'unit' | 'stack';
  }) => any;
  updateMaterialQuantity: <A extends TAreaName>({
    area,
    id,
    type,
    quantity,
  }: {
    area: A;
    id: TAreas[A]['materials'];
    type: TAreas[A]['materialTypes'];
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

export type TRecipeItem<A extends TAreaName> = {
  id: TAreas[A]['materials'];
  type: TAreas[A]['materialTypes'];
  quantity: number;
};

export type TMaterial<T extends string> = {
  [type in T]: TMaterialItem;
};

export type TRecipe<A extends TAreaName> = {
  name: string;
  materials: TRecipeItem<A>[];
  product: TRecipeItem<A>;
  requirement?: string;
};

export type TMaterials<A extends TAreaName> = {
  [id in TAreas[A]['materials']]: TMaterial<TAreas[A]['materialTypes']>;
};

export type TRecipes<A extends TAreaName> = { [id in TAreas[A]['recipes']]: TRecipe<A> };

export type TValidationErrorType = 'materialPrice' | 'productPrice' | null;
export type TValidation = {
  valid: boolean;
  errorType: TValidationErrorType;
};
export type TCalculations<A extends TAreaName> = {
  [id in TAreas[A]['calculations']]: {
    validation?: TValidation;
    profit: {
      percent: number;
      price: {
        stack: TPrice;
        unit: TPrice;
      };
    };
  };
};
