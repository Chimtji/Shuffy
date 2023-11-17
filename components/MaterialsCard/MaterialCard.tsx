import { Box, Group, Paper, Text } from '@mantine/core';
import classes from './MaterialCard.module.css';
import { TMaterialCardProps } from './types';
import { uuid } from 'uuidv4';
import MaterialItem from './MaterialItem';
import { TAreaName } from '@/store/materials/types';
import { IconInfoCircle } from '@tabler/icons-react';

const MaterialCard = <A extends TAreaName>({
  items,
  variant,
  className,
  requirement,
}: TMaterialCardProps<A>) => {
  return (
    <Paper bg="dark.5" shadow="md" className={`${className} ${classes.root}`}>
      {items.map((material) => (
        <MaterialItem<A> {...material} variant={variant} key={uuid()} />
      ))}
      {requirement && (
        <Group className={classes.requirement} gap="xs">
          <IconInfoCircle size="15" />
          <Text c="dimmed" size="sm">
            Requires: {requirement}
          </Text>
        </Group>
      )}
    </Paper>
  );
};

export default MaterialCard;
