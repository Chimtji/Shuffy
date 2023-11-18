'use client';

import { Group, Paper, Text, Tooltip } from '@mantine/core';
import classes from './MaterialCard.module.css';
import { TMaterialCardProps } from './types';
import { uuid } from 'uuidv4';
import MaterialItem from './MaterialItem';

import { TAreaName, TAreasState } from '@/store/materials/types';
import { IconAlertTriangle, IconInfoCircle } from '@tabler/icons-react';
import useMaterialsStore from '@/store/materials/store';
import { useEffect, useState } from 'react';
import { useShallow } from 'zustand/react/shallow';

const MaterialCard = <A extends TAreaName>({
  items,
  variant,
  className,
  requirement,
  area,
  recipe,
}: TMaterialCardProps<A>) => {
  const validation = useMaterialsStore(
    useShallow(
      (state) => (state[area].calculations as TAreasState[A]['calculations'])[recipe].validation,
    ),
  );

  const [valid, setValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (validation?.valid) {
      setValid(true);
      setErrorMessage('');
    } else {
      console.log(validation);
      if (validation?.errorType === 'materialPrice' && variant === 'material') {
        setErrorMessage('This price does not seem correct?');
        setValid(false);
      }
      if (validation?.errorType === 'productPrice' && variant === 'product') {
        setErrorMessage('This price does not seem correct?');
        setValid(false);
      }
    }
  }, [validation]);

  return (
    <Tooltip
      arrowOffset={50}
      arrowSize={8}
      color="red"
      c="white"
      transitionProps={{ transition: 'skew-up', duration: 300 }}
      openDelay={1000}
      closeDelay={1000}
      label={
        <Group>
          <IconAlertTriangle />
          <Text>{errorMessage}</Text>
        </Group>
      }
      withArrow
      opened={!valid}
      position="top"
    >
      <Paper bg="dark.5" className={`${className} ${classes.root}`} data-valid={valid}>
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
    </Tooltip>
  );
};

export default MaterialCard;
