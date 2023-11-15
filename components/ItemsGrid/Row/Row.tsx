import { Box, em, useMantineTheme } from '@mantine/core';
import classes from './Row.module.css';
import { IconArrowNarrowRight, IconArrowsRight } from '@tabler/icons-react';
import { TRowProps } from './types';
import MaterialsCard from '@/components/MaterialsCard/MaterialCard';
import Profit from '@/components/Profit/Profit';
import { useMediaQuery } from '@mantine/hooks';

const Row = ({ recipe }: TRowProps) => {
  const theme = useMantineTheme();
  const isSm = useMediaQuery(`(min-width: ${theme.breakpoints.sm})`);

  console.log(isSm);
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
