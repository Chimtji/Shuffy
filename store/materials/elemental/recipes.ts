import { TRecipes } from '../types';

const tailoringRecipes: TRecipes<'elemental'> = {
  greaterAstral: {
    name: 'Greater Astral Essence Recipe',
    materials: [
      {
        id: 'astral',
        type: 'lesser',
        quantity: 3,
      },
    ],
    product: {
      id: 'astral',
      type: 'greater',
      quantity: 1,
    },
  },
  lesserAstral: {
    name: 'lesser Astral Essence Recipe',
    materials: [
      {
        id: 'astral',
        type: 'greater',
        quantity: 1,
      },
    ],
    product: {
      id: 'astral',
      type: 'lesser',
      quantity: 3,
    },
  },
  greaterEternal: {
    name: 'Greater Eternal Essence Recipe',
    materials: [
      {
        id: 'eternal',
        type: 'lesser',
        quantity: 3,
      },
    ],
    product: {
      id: 'eternal',
      type: 'greater',
      quantity: 1,
    },
  },
  lesserEternal: {
    name: 'lesser Eternal Essence Recipe',
    materials: [
      {
        id: 'eternal',
        type: 'greater',
        quantity: 1,
      },
    ],
    product: {
      id: 'eternal',
      type: 'lesser',
      quantity: 3,
    },
  },
  greaterMagic: {
    name: 'Greater Magic Essence Recipe',
    materials: [
      {
        id: 'magic',
        type: 'lesser',
        quantity: 3,
      },
    ],
    product: {
      id: 'magic',
      type: 'greater',
      quantity: 1,
    },
  },
  lesserMagic: {
    name: 'lesser Magic Essence Recipe',
    materials: [
      {
        id: 'magic',
        type: 'greater',
        quantity: 1,
      },
    ],
    product: {
      id: 'magic',
      type: 'lesser',
      quantity: 3,
    },
  },
  greaterMystic: {
    name: 'Greater Mystic Essence Recipe',
    materials: [
      {
        id: 'mystic',
        type: 'lesser',
        quantity: 3,
      },
    ],
    product: {
      id: 'mystic',
      type: 'greater',
      quantity: 1,
    },
  },
  lesserMystic: {
    name: 'lesser Mystic Essence Recipe',
    materials: [
      {
        id: 'mystic',
        type: 'greater',
        quantity: 1,
      },
    ],
    product: {
      id: 'mystic',
      type: 'lesser',
      quantity: 3,
    },
  },
  greaterNether: {
    name: 'Greater Nether Essence Recipe',
    materials: [
      {
        id: 'nether',
        type: 'lesser',
        quantity: 3,
      },
    ],
    product: {
      id: 'nether',
      type: 'greater',
      quantity: 1,
    },
  },
  lesserNether: {
    name: 'lesser Nether Essence Recipe',
    materials: [
      {
        id: 'nether',
        type: 'greater',
        quantity: 1,
      },
    ],
    product: {
      id: 'nether',
      type: 'lesser',
      quantity: 3,
    },
  },
};

export default tailoringRecipes;
