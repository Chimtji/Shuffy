import { Box, Title, Image, Group } from '@mantine/core';
import classes from './Profit.module.css';
import NextImage from 'next/image';
import goldCoinImg from '@/public/coins/gold.gif';
import silverCoinImg from '@/public/coins/silver.gif';
import { TProfitProps } from './types';
import { useEffect, useState } from 'react';
import useMiningStore from '@/store/mining/store';
import { useShallow } from 'zustand/react/shallow';
import useUiStore from '@/store/ui/store';
import { TPrice } from '@/types';

const Profit: React.FC<TProfitProps> = ({ recipe, className }) => {
  const profit = useMiningStore(useShallow((state) => state.calculations[recipe].profit));
  const priceVariant = useUiStore(useShallow((state) => state.priceVariant));

  const [price, setPrice] = useState<TPrice>(profit.price.unit);
  const [hasProfit, setHasProfit] = useState<boolean>(false);

  useEffect(() => {
    if (priceVariant === 'unit') {
      setPrice(profit.price.unit);
    } else {
      setPrice(profit.price.stack);
    }

    if (
      profit.price.unit.copper > 0 ||
      profit.price.unit.silver > 0 ||
      profit.price.unit.gold > 0
    ) {
      setHasProfit(true);
    } else {
      setHasProfit(false);
    }
  }, [priceVariant, profit]);

  return (
    <Box className={`${className} ${classes.root}`}>
      <Group className={classes.content}>
        {hasProfit ? (
          <Group className={classes.withProfit}>
            <Group>
              <Title order={3}>{price.gold}</Title>
              <Image src={goldCoinImg} component={NextImage} alt={''} fit="contain" width={17} />
              <Title order={3}>{price.silver}</Title>
              <Image src={silverCoinImg} component={NextImage} alt={''} fit="contain" width={17} />
            </Group>
            <Group>
              <Title order={3}>{profit.percent}%</Title>
            </Group>
          </Group>
        ) : (
          <Title order={3} c="dark.5">
            No profit
          </Title>
        )}
      </Group>
    </Box>
  );
};

export default Profit;
