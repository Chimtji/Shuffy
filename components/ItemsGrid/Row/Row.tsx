'use client';

import { Box } from '@mantine/core';
import classes from './Row.module.css';
import { IconArrowNarrowRight, IconArrowsRight } from '@tabler/icons-react';
import { TRowProps } from './types';
import MaterialsCard from '@/components/MaterialsCard/MaterialCard';
import Profit from '@/components/Profit/Profit';
import { TAreaName } from '@/store/materials/types';

const Row = <A extends TAreaName>({ recipe, id, area }: TRowProps<A>) => {
  return (
    <Box className={classes.row} mb="lg">
      <MaterialsCard<A> area={area} recipe={id} items={recipe.materials} variant="material" />
      <IconArrowNarrowRight size={36} className={`${classes.icon} ${classes.convertIcon}`} />
      <MaterialsCard<A>
        items={[recipe.product]}
        variant="product"
        className={classes.product}
        requirement={recipe.requirement}
        area={area}
        recipe={id}
      />
      <IconArrowsRight size={36} className={`${classes.icon} ${classes.resultIcon}`} />
      <Profit recipe={id} className={classes.profit} />
    </Box>
  );
};

export default Row;
