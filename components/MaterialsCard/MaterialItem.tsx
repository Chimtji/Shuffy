import GoldInput from '@/components/GoldInput/GoldInput';
import { Image, Box, Text, NumberInput } from '@mantine/core';
import NextImage from 'next/image';
import classes from './MaterialCard.module.css';
import { TMaterialItem } from './types';
import useMiningStore from '@/store/mining/store';
import { useShallow } from 'zustand/react/shallow';
import { useEffect, useState } from 'react';

const MaterialItem: React.FC<TMaterialItem> = ({ id, type, quantity, variant }) => {
  const { material, updateMaterialQuantity } = useMiningStore(
    useShallow((state) => ({
      material: state.materials[id][type],
      updateMaterialQuantity: state.updateMaterialQuantity,
    })),
  );

  const [val, setVal] = useState(1);

  if (!material) {
    return <div>No material</div>;
  }

  useEffect(() => {
    setVal(material.quantity);
  }, [material]);

  return (
    <Box className={classes.item}>
      <Box className={classes.image}>
        <Image
          src={`/items/${material.image}`}
          component={NextImage}
          alt={''}
          fill
          radius="sm"
          sizes="48"
        />
      </Box>
      <Box className={classes.info}>
        <Text fw={700} className={classes.name}>
          {material.name}
        </Text>
        <GoldInput id={id} type={type} />
        <NumberInput
          className={classes.quantity}
          value={val}
          hideControls
          disabled={variant === 'product'}
          onChange={(e) => setVal(e as number)}
          onBlur={(e) => {
            updateMaterialQuantity({
              id: id,
              type: type,
              quantity: val,
            });
          }}
        />
      </Box>
    </Box>
  );
};

export default MaterialItem;
