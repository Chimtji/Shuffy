import { TMiningRecipes } from './types';

const miningRecipes: TMiningRecipes = {
  copperBar: {
    name: 'Copper Bar Recipe',
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
