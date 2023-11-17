import { Box } from '@mantine/core';
import classes from './ItemsGrid.module.css';
import Row from './Row/Row';
import RowHead from './Row/RowHead';
import { uuid } from 'uuidv4';
import useMaterialsStore from '@/store/materials/store';
import { useShallow } from 'zustand/react/shallow';
import useUiStore from '@/store/ui/store';
import { TAreas } from '@/store/materials/areas';

const ItemsGrid = () => {
  const area = useUiStore(useShallow((state) => state.area));
  const recipes = useMaterialsStore(useShallow((state) => state[area].recipes));
  return (
    <Box className={classes.grid} w="100%">
      <RowHead />
      {Object.keys(recipes).map((name) => (
        <Row<typeof area>
          key={uuid()}
          recipe={recipes[name as keyof typeof recipes]}
          id={name as TAreas[typeof area]['recipes']}
        />
      ))}
    </Box>
  );
};

export default ItemsGrid;
