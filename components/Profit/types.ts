import { TAreas } from '@/store/materials/areas';
import { TAreaName } from '@/store/materials/types';

export type TProfitProps<A extends TAreaName> = { recipe: TAreas[A]['recipes']; className?: any };
