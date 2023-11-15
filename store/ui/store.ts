import { create } from 'zustand';
import { persist, subscribeWithSelector, devtools } from 'zustand/middleware';
import { TUiStore } from './types';
import { produce } from 'immer';

const useUiStore = create<TUiStore>()(
  subscribeWithSelector(
    devtools(
      persist(
        (set, get) => ({
          priceVariant: 'unit',
          switchPriceVariant: () => {
            set(
              produce((state) => {
                const newVariant = get().priceVariant === 'unit' ? 'stack' : 'unit';
                state.priceVariant = newVariant;
              }),
            );
          },
        }),
        {
          name: 'ui-store',
        },
      ),
      { trace: true },
    ),
  ),
);
export default useUiStore;
