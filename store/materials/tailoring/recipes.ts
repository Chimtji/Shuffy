import { TRecipes } from '../types';

const tailoringRecipes: TRecipes<'tailoring'> = {
  boltOfLinenCloth: {
    name: 'Bolt of Linen Cloth Recipe',
    requirement: 'Tailoring Level 1',
    materials: [
      {
        id: 'linen',
        type: 'cloth',
        quantity: 2,
      },
    ],
    product: {
      id: 'linen',
      type: 'bolt',
      quantity: 1,
    },
  },
  boltOfMageweave: {
    name: 'Bolt of Mageweave Recipe',
    requirement: 'Tailoring Level 175',
    materials: [
      {
        id: 'mageweave',
        type: 'cloth',
        quantity: 5,
      },
    ],
    product: {
      id: 'mageweave',
      type: 'bolt',
      quantity: 1,
    },
  },
  boltOfRuneCloth: {
    name: 'Bolt of Runecloth Recipe',
    requirement: 'Tailoring Level 250',
    materials: [
      {
        id: 'rune',
        type: 'cloth',
        quantity: 5,
      },
    ],
    product: {
      id: 'rune',
      type: 'bolt',
      quantity: 1,
    },
  },
  boltOfSilkCloth: {
    name: 'Bolt of Silk Cloth Recipe',
    requirement: 'Tailoring Level 125',
    materials: [
      {
        id: 'silk',
        type: 'cloth',
        quantity: 4,
      },
    ],
    product: {
      id: 'silk',
      type: 'bolt',
      quantity: 1,
    },
  },
  boltOfWoolenCloth: {
    name: 'Bolt of Woolen Cloth Recipe',
    requirement: 'Tailoring Level 75',
    materials: [
      {
        id: 'wool',
        type: 'cloth',
        quantity: 3,
      },
    ],
    product: {
      id: 'wool',
      type: 'bolt',
      quantity: 1,
    },
  },
};

export default tailoringRecipes;
