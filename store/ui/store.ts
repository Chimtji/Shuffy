import { create } from 'zustand';
import { persist, subscribeWithSelector, devtools } from 'zustand/middleware';
import { TUiStore } from './types';
import { produce } from 'immer';

const useUiStore = create<TUiStore>()(
  subscribeWithSelector(
    devtools((set, get) => ({
      priceVariant: 'unit',
      area: 'mining',
      switchArea: (to) => {
        set(
          produce((state) => {
            state.area = to;
          }),
        );
      },
      switchPriceVariant: () => {
        set(
          produce((state) => {
            const newVariant = get().priceVariant === 'unit' ? 'stack' : 'unit';
            state.priceVariant = newVariant;
          }),
        );
      },
    })),
  ),
);
export default useUiStore;
