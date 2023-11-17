import { Box, Title, Image, Group } from '@mantine/core';
import classes from './Profit.module.css';
import NextImage from 'next/image';
import goldCoinImg from '@/public/coins/gold.gif';
import silverCoinImg from '@/public/coins/silver.gif';
import { TProfitProps } from './types';
import { useEffect, useState } from 'react';
import useMiningStore from '@/store/materials/store';
import { useShallow } from 'zustand/react/shallow';
import useUiStore from '@/store/ui/store';
import { TPrice } from '@/types';
import { TAreaName, TAreasState } from '@/store/materials/types';

const Profit = <A extends TAreaName>({ recipe, className }: TProfitProps<A>) => {
  const { area } = useUiStore(useShallow((state) => ({ area: state.area })));
  const profit = useMiningStore(
    useShallow(
      (state) => (state[area].calculations as TAreasState[A]['calculations'])[recipe].profit,
    ),
  );

  const [percentColor, setPercentColor] = useState<string>('dark.0');
  const [hasProfit, setHasProfit] = useState<boolean>(false);

  useEffect(() => {
    if (
      profit.price.unit.copper > 0 ||
      profit.price.unit.silver > 0 ||
      profit.price.unit.gold > 0
    ) {
      setHasProfit(true);
      if (profit.percent > 0) {
        setPercentColor('red.8');
      }
      if (profit.percent > 5) {
        setPercentColor('pink.8');
      }
      if (profit.percent > 10) {
        setPercentColor('orange.8');
      }
      if (profit.percent > 25) {
        setPercentColor('yellow.8');
      }
      if (profit.percent > 35) {
        setPercentColor('lime.8');
      }
      if (profit.percent > 50) {
        setPercentColor('green.8');
      }
    } else {
      setHasProfit(false);
    }
    // console.log('update component');
  }, [profit]);

  return (
    <Box className={`${className} ${classes.root}`}>
      <Group className={classes.content}>
        {hasProfit ? (
          <Group className={classes.withProfit}>
            <Group className={classes.price}>
              <Title order={3}>{profit.price.stack.gold}</Title>
              <Image src={goldCoinImg} component={NextImage} alt={''} fit="contain" width={17} />
              <Title order={3}>{profit.price.stack.silver}</Title>
              <Image src={silverCoinImg} component={NextImage} alt={''} fit="contain" width={17} />
            </Group>
            <Box className={classes.percent}>
              <Title order={3} c={percentColor}>
                {profit.percent}%
              </Title>
            </Box>
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
