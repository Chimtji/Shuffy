export type TAlchemyMaterials = 'fire' | 'living' | 'air' | 'undeath' | 'water' | 'earth';

export type TAlchemyRecipes =
  | 'airToFire'
  | 'waterToAir'
  | 'earthToWater'
  | 'undeathToWater'
  | 'fireToEarth'
  | 'livingToEarth'
  | 'earthToLiving'
  | 'waterToUndeath';

export type TAlchemyCalculations = TAlchemyRecipes;

export type TAlchemyMaterialType = 'essence';
