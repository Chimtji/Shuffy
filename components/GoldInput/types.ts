import { TAreas } from '@/store/materials/areas';
import { TAreaName } from '@/store/materials/types';

export type TGoldInputProps<A extends TAreaName> = {
  id: TAreas[A]['materials'];
  type: TAreas[A]['materialTypes'];
};
