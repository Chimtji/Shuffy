import { Paper } from '@mantine/core';
import classes from './MaterialCard.module.css';
import { TMaterialCardProps } from './types';
import { uuid } from 'uuidv4';
import MaterialItem from './MaterialItem';

const MaterialCard: React.FC<TMaterialCardProps> = ({ items, variant, className }) => {
  return (
    <Paper bg="dark.5" shadow="md" className={`${className} ${classes.root}`}>
      {items.map((material) => (
        <MaterialItem {...material} variant={variant} key={uuid()} />
      ))}
    </Paper>
  );
};

export default MaterialCard;
