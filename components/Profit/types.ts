import { TAreaName, TAreas } from '@/store/materials/types';

export type TProfitProps<T extends TAreaName> = { recipe: TAreas[T]['recipes']; className?: any };
