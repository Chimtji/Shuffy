import { TPrice } from '@/types';
import {
  TMiningCalculations,
  TMiningMaterialIds,
  TMiningMaterialType,
  TMiningMaterials,
  TMiningRecipes,
} from './mining/types';

export type TMiningStoreFunctions = {
  updatePrice: ({
    id,
    type,
    price,
    variant,
  }: {
    id: TMiningMaterialIds;
    type: TMiningMaterialType;
    price: TPrice;
    variant: 'unit' | 'stack';
  }) => any;
  updateMaterialQuantity: ({
    id,
    type,
    quantity,
  }: {
    id: TMiningMaterialIds;
    type: TMiningMaterialType;
    quantity: number;
  }) => any;
};
export type TMiningStore = {
  materials: TMiningMaterials;
  recipes: TMiningRecipes;
  calculations: TMiningCalculations;
} & TMiningStoreFunctions;
