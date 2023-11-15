import { TMiningRecipeItem } from '@/store/mining/types';
import { TCopper } from '@/types';

export type TMaterialItemChange = { name: string; copper: TCopper };

export type TMaterialItem = TMiningRecipeItem & { variant: 'product' | 'material' };

export type TMaterialCardProps = {
  items: TMiningRecipeItem[];
  variant: 'product' | 'material';
  className?: any;
};
