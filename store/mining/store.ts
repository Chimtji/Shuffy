import { produce } from 'immer';
import { create } from 'zustand';
import { TMiningStore } from '../types';
import { persist, subscribeWithSelector, devtools } from 'zustand/middleware';
import { shallow } from 'zustand/shallow';
import {
  calcCopperToPrice,
  calcPriceDifference,
  calcPriceToCopper,
  calcProfitInPrice,
  calcQuantity,
  calcStackPrice,
  calcUnitPrice,
} from '@/helpers/price';
import { TPrice } from '@/types';
import materials from './materials';
import calculations from './calculations';
import { TMiningMaterialIds, TMiningMaterialType, TMiningRecipeIds } from './types';
import { findRecipes, getAllMaterialsFromRecipes, getAllUsedMaterials } from '@/helpers/store';
import recipes from './recipes';

const useMiningStore = create<TMiningStore>()(
  subscribeWithSelector(
    devtools(
      persist(
        (set) => ({
          updateMaterialQuantity: ({ id, type, quantity }) =>
            set(
              produce((state) => {
                const item = state.materials[id][type];
                const stackPrice = calcStackPrice(quantity as number, item.unitPrice as TPrice);

                state.materials[id][type].quantity = quantity;
                state.materials[id][type].stackPrice = stackPrice;
              }),
              false,
              `updateQuantity/${id}`,
            ),
          updatePrice: ({ id, type, price, variant }) =>
            set(
              produce((state) => {
                const item = state.materials[id][type];
                let stackPrice = item.stackPrice;
                let unitPrice = item.unitPrice;

                if (variant === 'unit') {
                  unitPrice = price;
                  stackPrice = calcStackPrice(item.quantity as number, price as TPrice);
                } else {
                  stackPrice = price;
                  unitPrice = calcUnitPrice(item.quantity as number, price);
                }

                console.log('here');
                state.materials[id][type].unitPrice = unitPrice;
                state.materials[id][type].stackPrice = stackPrice;
              }),
              false,
              `updatePrice/${id}`,
            ),
          materials: materials,
          recipes: recipes,
          calculations: calculations,
        }),
        {
          name: 'mining-store',
        },
      ),
      { trace: true },
    ),
  ),
);

getAllMaterialsFromRecipes().forEach(({ id, type, ...recipeMaterial }) => {
  const material = useMiningStore.getState().materials[id][type];
  const recipes = useMiningStore.getState().recipes;
  const relatedRecipes = findRecipes(id, type, recipes);

  useMiningStore.subscribe(
    (state) => state.materials[id][type].quantity,
    (quantity, prevQuantity) => {
      if (quantity === prevQuantity) {
        return;
      }

      relatedRecipes.forEach((recipe) => {
        const recipeProduct = recipe.product;
        const otherMaterials = recipe.materials.filter((m) => m.id !== id);

        const clampedQuantity = calcQuantity(quantity as number, recipeMaterial.quantity);
        const multiplier = clampedQuantity / recipeMaterial.quantity;

        // @TODO: We do not take to account if recipes use different quantities for the same material

        useMiningStore.setState(
          produce((s) => {
            if (clampedQuantity !== quantity) {
              s.materials[id][type].quantity = clampedQuantity;
            }

            const newStackPrice = calcStackPrice(
              clampedQuantity as number,
              s.materials[id][type].unitPrice as TPrice,
            );

            if (newStackPrice !== material.stackPrice) {
              s.materials[id][type].stackPrice = calcStackPrice(
                clampedQuantity as number,
                s.materials[id][type].unitPrice as TPrice,
              );
            }

            otherMaterials.forEach((m) => {
              const newQuantity = multiplier * m.quantity;
              s.materials[m.id][m.type].quantity = newQuantity;
            });

            const productQuantity = multiplier * recipeProduct.quantity;
            s.materials[recipeProduct.id][recipeProduct.type].quantity = productQuantity;
          }),
        );
      });
    },
    { equalityFn: shallow },
  );
  // console.log(item.id);
  useMiningStore.subscribe(
    (state) => [state.materials[id][type].stackPrice, state.materials[id][type].unitPrice],
    () => {
      relatedRecipes.forEach((recipe) => {
        let totalMaterialCost = 0;
        recipe.materials.forEach((material) => {
          const materialState = useMiningStore.getState().materials[material.id][material.type];
          totalMaterialCost += calcPriceToCopper(materialState.stackPrice);
        });

        const productState =
          useMiningStore.getState().materials[recipe.product.id][recipe.product.type];

        const stackProfit = calcPriceDifference(
          calcCopperToPrice(totalMaterialCost),
          productState.stackPrice,
        );

        const unitProfit = calcCopperToPrice(
          calcPriceToCopper(stackProfit) / productState.quantity,
        );

        const profitPercent = (calcPriceToCopper(stackProfit) / totalMaterialCost) * 100;

        useMiningStore.setState(
          produce((s) => {
            s.calculations[recipe.id].profit.price.stack = stackProfit;
            s.calculations[recipe.id].profit.price.unit = unitProfit;
            s.calculations[recipe.id].profit.percent = profitPercent;
          }),
        );
      });
    },
    { equalityFn: shallow },
  );
});

export default useMiningStore;
