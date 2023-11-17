import { Group, NumberInput, Image } from '@mantine/core';
import classes from './GoldInput.module.css';
import goldCoinImg from '@/public/coins/gold.gif';
import silverCoinImg from '@/public/coins/silver.gif';
import copperCoinImg from '@/public/coins/copper.gif';
import NextImage from 'next/image';
import { TGoldInputProps } from './types';
import useMaterialsStore from '@/store/materials/store';
import { useShallow } from 'zustand/react/shallow';
import useUiStore from '@/store/ui/store';
import { useEffect, useState } from 'react';
import { TPrice } from '@/types';

const GoldInput: React.FC<TGoldInputProps> = ({ id, type }) => {
  const { priceVariant, area } = useUiStore(
    useShallow((state) => ({ priceVariant: state.priceVariant, area: state.area })),
  );
  const { unitPrice, updatePrice, stackPrice } = useMaterialsStore(
    useShallow((state) => ({
      unitPrice: state[area].materials[id][type].unitPrice,
      stackPrice: state[area].materials[id][type].stackPrice,
      updatePrice: state.updatePrice,
    })),
  );

  const [price, setPrice] = useState<TPrice>(unitPrice || stackPrice);

  if (!price) {
    return <div>no price</div>;
  }

  useEffect(() => {
    if (priceVariant === 'unit') {
      setPrice(unitPrice);
    } else {
      setPrice(stackPrice);
    }
  }, [priceVariant, unitPrice, stackPrice]);

  return (
    <Group className={classes.wrapper}>
      <NumberInput
        hideControls
        classNames={{
          root: classes.inputRoot,
          wrapper: classes.inputWrapper,
          input: classes.input,
          section: classes.section,
        }}
        className={classes.gold}
        onChange={(value) => {
          updatePrice({
            area: area,
            id: id,
            type: type,
            price: { ...price, gold: value as number },
            variant: priceVariant,
          });
        }}
        value={price.gold}
        min={0}
        rightSection={<Image src={goldCoinImg} component={NextImage} alt={''} fit="contain" />}
      />
      <NumberInput
        hideControls
        classNames={{
          root: classes.inputRoot,
          wrapper: classes.inputWrapper,
          input: classes.input,
          section: classes.section,
        }}
        className={classes.silver}
        value={price.silver}
        onChange={(value) => {
          updatePrice({
            area: area,
            id: id,
            type: type,
            price: { ...price, silver: value as number },
            variant: priceVariant,
          });
        }}
        min={0}
        max={99}
        rightSection={<Image src={silverCoinImg} component={NextImage} alt={''} fit="contain" />}
      />
      <NumberInput
        hideControls
        classNames={{
          root: classes.inputRoot,
          wrapper: classes.inputWrapper,
          input: classes.input,
          section: classes.section,
        }}
        className={classes.copper}
        onChange={(value) => {
          updatePrice({
            area: area,
            id: id,
            type: type,
            price: { ...price, copper: value as number },
            variant: priceVariant,
          });
        }}
        value={price.copper}
        min={0}
        max={99}
        rightSection={<Image src={copperCoinImg} component={NextImage} alt={''} fit="contain" />}
      />
    </Group>
  );
};

export default GoldInput;
