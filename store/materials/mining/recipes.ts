import { TRecipes } from '../types';

const miningRecipes: TRecipes<'mining'> = {
  copperBar: {
    name: 'Copper Bar Recipe',
    requirement: 'Mining Level 25',
    materials: [
      {
        id: 'copper',
        type: 'ore',
        quantity: 1,
      },
    ],
    product: {
      id: 'copper',
      type: 'bar',
      quantity: 1,
    },
  },
  tinBar: {
    name: 'Tin Bar Recipe',
    requirement: 'Mining Level 65',
    materials: [
      {
        id: 'tin',
        type: 'ore',
        quantity: 1,
      },
    ],
    product: {
      id: 'tin',
      type: 'bar',
      quantity: 1,
    },
  },
  bronzeBar: {
    name: 'Bronze Bar Recipe',
    requirement: 'Mining Level 65',
    materials: [
      {
        id: 'copper',
        type: 'ore',
        quantity: 1,
      },
      {
        id: 'tin',
        type: 'ore',
        quantity: 1,
      },
    ],
    product: {
      id: 'bronze',
      type: 'bar',
      quantity: 2,
    },
  },
  silverBar: {
    name: 'Silver Bar Recipe',
    requirement: 'Mining Level 75',
    materials: [
      {
        id: 'silver',
        type: 'ore',
        quantity: 1,
      },
    ],
    product: {
      id: 'silver',
      type: 'bar',
      quantity: 1,
    },
  },
  ironBar: {
    name: 'Iron Bar Recipe',
    requirement: 'Mining Level 125',
    materials: [
      {
        id: 'iron',
        type: 'ore',
        quantity: 1,
      },
    ],
    product: {
      id: 'iron',
      type: 'bar',
      quantity: 1,
    },
  },
  steelBar: {
    name: 'Steel Bar Recipe',
    requirement: 'Mining Level 165',
    materials: [
      {
        id: 'coal',
        type: 'ore',
        quantity: 1,
      },
      {
        id: 'iron',
        type: 'bar',
        quantity: 1,
      },
    ],
    product: {
      id: 'steel',
      type: 'bar',
      quantity: 1,
    },
  },
  goldBar: {
    name: 'Gold Bar Recipe',
    requirement: 'Mining Level 155',
    materials: [
      {
        id: 'gold',
        type: 'ore',
        quantity: 1,
      },
    ],
    product: {
      id: 'gold',
      type: 'bar',
      quantity: 1,
    },
  },
  mithrilBar: {
    name: 'Mithril Bar Recipe',
    requirement: 'Mining Level 175',
    materials: [
      {
        id: 'mithril',
        type: 'ore',
        quantity: 1,
      },
    ],
    product: {
      id: 'mithril',
      type: 'bar',
      quantity: 1,
    },
  },
  truesilverBar: {
    name: 'Truesilver Bar Recipe',
    requirement: 'Mining Level 230',
    materials: [
      {
        id: 'truesilver',
        type: 'ore',
        quantity: 1,
      },
    ],
    product: {
      id: 'truesilver',
      type: 'bar',
      quantity: 1,
    },
  },
  thoriumBar: {
    name: 'Thorium Bar Recipe',
    requirement: 'Mining Level 250',
    materials: [
      {
        id: 'thorium',
        type: 'ore',
        quantity: 1,
      },
    ],
    product: {
      id: 'thorium',
      type: 'bar',
      quantity: 1,
    },
  },
  darkIronBar: {
    name: 'Dark Iron Bar Recipe',
    requirement: 'Mining Level 230',
    materials: [
      {
        id: 'darkIron',
        type: 'ore',
        quantity: 8,
      },
    ],
    product: {
      id: 'darkIron',
      type: 'bar',
      quantity: 1,
    },
  },
};

export default miningRecipes;
