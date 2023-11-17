export type TMiningMaterials =
  | 'copper'
  | 'tin'
  | 'silver'
  | 'iron'
  | 'coal'
  | 'gold'
  | 'mithril'
  | 'truesilver'
  | 'thorium'
  | 'bronze'
  | 'steel'
  | 'darkIron';

export type TMiningRecipes =
  | 'copperBar'
  | 'tinBar'
  | 'silverBar'
  | 'ironBar'
  | 'steelBar'
  | 'bronzeBar'
  | 'goldBar'
  | 'mithrilBar'
  | 'truesilverBar'
  | 'thoriumBar'
  | 'darkIronBar';

export type TMiningCalculations = TMiningRecipes;

export type TMiningMaterialType = 'ore' | 'bar';
