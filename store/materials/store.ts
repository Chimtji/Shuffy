import { produce } from 'immer';
import { create } from 'zustand';
import { TAreaName, TMaterialsStore } from './types';
import { persist, subscribeWithSelector, devtools } from 'zustand/middleware';
import { shallow } from 'zustand/shallow';
import {
  calcCopperToPrice,
  calcPriceDifference,
  calcPriceToCopper,
  calcQuantity,
  calcStackPrice,
  calcUnitPrice,
} from '@/helpers/price';
import { TPrice } from '@/types';
import { findRecipes, getAllMaterialsFromRecipes } from '@/helpers/store';
import { areasState } from './areas';

const useMaterialsStore = create<TMaterialsStore>()(
  subscribeWithSelector(
    devtools(
      persist(
        (set) => ({
          updateMaterialQuantity: ({ area, id, type, quantity }) =>
            set(
              produce((state) => {
                const item = state[area].materials[id][type];
                const stackPrice = calcStackPrice(quantity as number, item.unitPrice as TPrice);

                state[area].materials[id][type].quantity = quantity;
                state[area].materials[id][type].stackPrice = stackPrice;
              }),
              false,
              `updateQuantity/${id}`,
            ),
          updatePrice: ({ area, id, type, price, variant }) =>
            set(
              produce((state) => {
                const item = state[area].materials[id][type];
                let stackPrice = item.stackPrice;
                let unitPrice = item.unitPrice;

                if (variant === 'unit') {
                  unitPrice = price;
                  stackPrice = calcStackPrice(item.quantity as number, price as TPrice);
                } else {
                  stackPrice = price;
                  unitPrice = calcUnitPrice(item.quantity as number, price);
                }

                state[area].materials[id][type].unitPrice = unitPrice;
                state[area].materials[id][type].stackPrice = stackPrice;
              }),
              false,
              `updatePrice/${id}`,
            ),
          ...areasState,
        }),
        {
          name: 'materials-store',
        },
      ),
      { trace: true },
    ),
  ),
);

Object.keys(getAllMaterialsFromRecipes(useMaterialsStore.getState())).forEach((area) => {
  console.log(getAllMaterialsFromRecipes(useMaterialsStore.getState()));
  getAllMaterialsFromRecipes(useMaterialsStore.getState())[area as TAreaName]?.forEach(
    ({ id, type, ...recipeMaterial }) => {
      const state = useMaterialsStore.getState()[area as TAreaName];
      const material = state.materials[id][type];
      const recipes = state.recipes;
      const relatedRecipes = findRecipes(id, type, recipes);

      useMaterialsStore.subscribe(
        (state) => state[area as TAreaName].materials[id][type].quantity,
        (quantity, prevQuantity) => {
          if (quantity === prevQuantity) {
            return;
          }

          console.log('here');

          relatedRecipes.forEach((recipe) => {
            const recipeProduct = recipe.product;
            const otherMaterials = recipe.materials.filter((m) => m.id !== id);

            const clampedQuantity = calcQuantity(quantity as number, recipeMaterial.quantity);
            const multiplier = clampedQuantity / recipeMaterial.quantity;

            // @TODO: We do not take to account if recipes use different quantities for the same material

            useMaterialsStore.setState(
              produce((s) => {
                if (clampedQuantity !== quantity) {
                  s[area].materials[id][type].quantity = clampedQuantity;
                }

                const newStackPrice = calcStackPrice(
                  clampedQuantity as number,
                  s[area].materials[id][type].unitPrice as TPrice,
                );

                if (newStackPrice !== material.stackPrice) {
                  s[area].materials[id][type].stackPrice = calcStackPrice(
                    clampedQuantity as number,
                    s[area].materials[id][type].unitPrice as TPrice,
                  );
                }

                otherMaterials.forEach((m) => {
                  const newQuantity = multiplier * m.quantity;
                  s[area].materials[m.id][m.type].quantity = newQuantity;
                });

                const productQuantity = multiplier * recipeProduct.quantity;
                s[area].materials[recipeProduct.id][recipeProduct.type].quantity = productQuantity;
              }),
            );
          });
        },
        { equalityFn: shallow },
      );
      useMaterialsStore.subscribe(
        (state) => [
          state[area as TAreaName].materials[id][type].stackPrice,
          state[area as TAreaName].materials[id][type].unitPrice,
        ],
        () => {
          relatedRecipes.forEach((recipe) => {
            let totalMaterialCost = 0;
            recipe.materials.forEach((material) => {
              const materialState =
                useMaterialsStore.getState()[area as TAreaName].materials[material.id][
                  material.type
                ];
              totalMaterialCost += calcPriceToCopper(materialState.stackPrice);
            });

            const productState =
              useMaterialsStore.getState()[area as TAreaName].materials[recipe.product.id][
                recipe.product.type
              ];

            const stackProfit = calcPriceDifference(
              calcCopperToPrice(totalMaterialCost),
              productState.stackPrice,
            );

            const unitProfit = calcCopperToPrice(
              calcPriceToCopper(stackProfit) / productState.quantity,
            );

            const profitPercent = Math.round(
              (calcPriceToCopper(stackProfit) / totalMaterialCost) * 100,
            );

            useMaterialsStore.setState(
              produce((s) => {
                s[area].calculations[recipe.id].profit.price.stack = stackProfit;
                s[area].calculations[recipe.id].profit.price.unit = unitProfit;
                s[area].calculations[recipe.id].profit.percent = profitPercent;
              }),
            );
          });
        },
        { equalityFn: shallow },
      );
    },
  );
});

export default useMaterialsStore;
