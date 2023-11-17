import { Box } from '@mantine/core';
import classes from './Row.module.css';
import { IconArrowNarrowRight, IconArrowsRight } from '@tabler/icons-react';
import { TRowProps } from './types';
import MaterialsCard from '@/components/MaterialsCard/MaterialCard';
import Profit from '@/components/Profit/Profit';
import { TAreaName } from '@/store/materials/types';

const Row = ({ recipe }: TRowProps<TAreaName>) => {
  return (
    <Box className={classes.row} mb="lg">
      <MaterialsCard items={recipe.materials} variant="material" className={classes.materials} />
      <IconArrowNarrowRight size={36} className={`${classes.icon} ${classes.convertIcon}`} />
      <MaterialsCard items={[recipe.product]} variant="product" className={classes.product} />
      <IconArrowsRight size={36} className={`${classes.icon} ${classes.resultIcon}`} />
      <Profit recipe={recipe.id} className={classes.profit} />
    </Box>
  );
};

export default Row;
