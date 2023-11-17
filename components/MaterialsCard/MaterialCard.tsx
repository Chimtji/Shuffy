import { Paper } from '@mantine/core';
import classes from './MaterialCard.module.css';
import { TMaterialCardProps } from './types';
import { uuid } from 'uuidv4';
import MaterialItem from './MaterialItem';
import { TAreaName } from '@/store/materials/types';

const MaterialCard = <A extends TAreaName>({
  items,
  variant,
  className,
}: TMaterialCardProps<A>) => {
  return (
    <Paper bg="dark.5" shadow="md" className={`${className} ${classes.root}`}>
      {items.map((material) => (
        <MaterialItem<A> {...material} variant={variant} key={uuid()} />
      ))}
    </Paper>
  );
};

export default MaterialCard;
