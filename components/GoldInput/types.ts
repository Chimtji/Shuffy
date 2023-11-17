import { TAreaName, TAreas } from '@/store/materials/types';

export type TGoldInputProps = {
  id: TAreas[TAreaName]['materials'];
  type: TAreas[TAreaName]['materialTypes'];
};
