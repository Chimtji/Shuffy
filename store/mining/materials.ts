import { TMiningMaterials } from './types';

const miningMaterials: TMiningMaterials = {
  copper: {
    ore: {
      image: 'copper_ore.jpg',
      name: 'Copper Ore',
      unitPrice: { gold: 0, silver: 0, copper: 0 },
      stackPrice: { gold: 0, silver: 0, copper: 0 },
      quantity: 1,
      recipes: ['copperBar', 'bronzeBar'],
    },
    bar: {
      image: 'copper_bar.jpg',
      name: 'Copper Bar',
      unitPrice: { gold: 0, silver: 0, copper: 0 },
      stackPrice: { gold: 0, silver: 0, copper: 0 },
      quantity: 1,
      recipes: ['copperBar'],
    },
  },
  tin: {
    ore: {
      image: 'tin_ore.jpg',
      name: 'Tin Ore',
      unitPrice: { gold: 0, silver: 0, copper: 0 },
      stackPrice: { gold: 0, silver: 0, copper: 0 },
      quantity: 1,
      recipes: ['tinBar', 'bronzeBar'],
    },
    bar: {
      image: 'tin_bar.jpg',
      name: 'Tin Bar',
      unitPrice: { gold: 0, silver: 0, copper: 0 },
      stackPrice: { gold: 0, silver: 0, copper: 0 },
      quantity: 1,
      recipes: ['tinBar'],
    },
  },
  silver: {
    ore: {
      image: 'silver_ore.jpg',
      name: 'Silver Ore',
      unitPrice: { gold: 0, silver: 0, copper: 0 },
      stackPrice: { gold: 0, silver: 0, copper: 0 },
      quantity: 1,
      recipes: ['silverBar'],
    },
    bar: {
      image: 'silver_bar.jpg',
      name: 'Silver Bar',
      unitPrice: { gold: 0, silver: 0, copper: 0 },
      stackPrice: { gold: 0, silver: 0, copper: 0 },
      quantity: 1,
      recipes: ['silverBar'],
    },
  },
  iron: {
    ore: {
      image: 'iron_ore.jpg',
      name: 'Iron Ore',
      unitPrice: { gold: 0, silver: 0, copper: 0 },
      stackPrice: { gold: 0, silver: 0, copper: 0 },
      quantity: 1,
      recipes: ['ironBar'],
    },
    bar: {
      image: 'iron_bar.jpg',
      name: 'Iron Bar',
      unitPrice: { gold: 0, silver: 0, copper: 0 },
      stackPrice: { gold: 0, silver: 0, copper: 0 },
      quantity: 1,
      recipes: ['ironBar', 'steelBar'],
    },
  },
  coal: {
    ore: {
      image: 'coal_ore.jpg',
      name: 'Coal',
      unitPrice: { gold: 0, silver: 0, copper: 0 },
      stackPrice: { gold: 0, silver: 0, copper: 0 },
      quantity: 1,
      recipes: ['steelBar'],
    },
    bar: {
      image: '',
      name: '',
      unitPrice: { gold: 0, silver: 0, copper: 0 },
      stackPrice: { gold: 0, silver: 0, copper: 0 },
      quantity: 1,
      recipes: [],
    },
  },
  gold: {
    ore: {
      image: 'gold_ore.jpg',
      name: 'Gold Ore',
      unitPrice: { gold: 0, silver: 0, copper: 0 },
      stackPrice: { gold: 0, silver: 0, copper: 0 },
      quantity: 1,
      recipes: ['goldBar'],
    },
    bar: {
      image: 'gold_bar.jpg',
      name: 'Gold Bar',
      unitPrice: { gold: 0, silver: 0, copper: 0 },
      stackPrice: { gold: 0, silver: 0, copper: 0 },
      quantity: 1,
      recipes: ['goldBar'],
    },
  },
  mithril: {
    ore: {
      image: 'mithril_ore.jpg',
      name: 'Mithril Ore',
      unitPrice: { gold: 0, silver: 0, copper: 0 },
      stackPrice: { gold: 0, silver: 0, copper: 0 },
      quantity: 1,
      recipes: ['mithrilBar'],
    },
    bar: {
      image: 'mithril_bar.jpg',
      name: 'Mithril Bar',
      unitPrice: { gold: 0, silver: 0, copper: 0 },
      stackPrice: { gold: 0, silver: 0, copper: 0 },
      quantity: 1,
      recipes: [],
    },
  },
  truesilver: {
    ore: {
      image: 'truesilver_ore.jpg',
      name: 'Truesilver Ore',
      unitPrice: { gold: 0, silver: 0, copper: 0 },
      stackPrice: { gold: 0, silver: 0, copper: 0 },
      quantity: 1,
      recipes: ['truesilverBar'],
    },
    bar: {
      image: 'truesilver_bar.jpg',
      name: 'Truesilver Bar',
      unitPrice: { gold: 0, silver: 0, copper: 0 },
      stackPrice: { gold: 0, silver: 0, copper: 0 },
      quantity: 1,
      recipes: [],
    },
  },
  thorium: {
    ore: {
      image: 'thorium_ore.jpg',
      name: 'Thorium Ore',
      unitPrice: { gold: 0, silver: 0, copper: 0 },
      stackPrice: { gold: 0, silver: 0, copper: 0 },
      quantity: 1,
      recipes: ['thoriumBar'],
    },
    bar: {
      image: 'thorium_bar.jpg',
      name: 'Thorium Bar',
      unitPrice: { gold: 0, silver: 0, copper: 0 },
      stackPrice: { gold: 0, silver: 0, copper: 0 },
      quantity: 1,
      recipes: [],
    },
  },
  darkIron: {
    ore: {
      image: 'dark_iron_ore.jpg',
      name: 'Dark Iron Ore',
      unitPrice: { gold: 0, silver: 0, copper: 0 },
      stackPrice: { gold: 0, silver: 0, copper: 0 },
      quantity: 1,
      recipes: ['darkIronBar'],
    },
    bar: {
      image: 'dark_iron_bar.jpg',
      name: 'Dark Iron Bar',
      unitPrice: { gold: 0, silver: 0, copper: 0 },
      stackPrice: { gold: 0, silver: 0, copper: 0 },
      quantity: 1,
      recipes: [],
    },
  },
  steel: {
    ore: {
      image: '',
      name: '',
      unitPrice: { gold: 0, silver: 0, copper: 0 },
      stackPrice: { gold: 0, silver: 0, copper: 0 },
      quantity: 1,
      recipes: [],
    },
    bar: {
      image: 'steel_bar.jpg',
      name: 'Steel Bar',
      unitPrice: { gold: 0, silver: 0, copper: 0 },
      stackPrice: { gold: 0, silver: 0, copper: 0 },
      quantity: 1,
      recipes: [],
    },
  },
  bronze: {
    ore: {
      image: '',
      name: '',
      unitPrice: { gold: 0, silver: 0, copper: 0 },
      stackPrice: { gold: 0, silver: 0, copper: 0 },
      quantity: 1,
      recipes: [],
    },
    bar: {
      image: 'bronze_bar.jpg',
      name: 'Bronze Bar',
      unitPrice: { gold: 0, silver: 0, copper: 0 },
      stackPrice: { gold: 0, silver: 0, copper: 0 },
      quantity: 1,
      recipes: ['bronzeBar'],
    },
  },
};

export default miningMaterials;