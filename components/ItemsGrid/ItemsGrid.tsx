import { Box } from '@mantine/core';
import classes from './ItemsGrid.module.css';
import Row from './Row/Row';
import RowHead from './Row/RowHead';
import { uuid } from 'uuidv4';
import useMiningStore from '@/store/mining/store';
import { useShallow } from 'zustand/react/shallow';
import { TMiningRecipeIds } from '@/store/mining/types';

const ItemsGrid = () => {
  const recipes = useMiningStore(useShallow((state) => state.recipes));
  return (
    <Box className={classes.grid} w="100%">
      <RowHead />
      {Object.keys(recipes).map((name) => (
        <Row
          key={uuid()}
          recipe={{ ...recipes[name as keyof typeof recipes], id: name as TMiningRecipeIds }}
        />
      ))}
    </Box>
  );
};

export default ItemsGrid;
