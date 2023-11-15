import { Box, Group, Text } from '@mantine/core';
import classes from './Row.module.css';
import { IconRefresh } from '@tabler/icons-react';
import useUiStore from '@/store/ui/store';
import { useShallow } from 'zustand/react/shallow';

const RowHead = () => {
  const { priceVariant, switchPriceVariant } = useUiStore(
    useShallow((state) => ({
      priceVariant: state.priceVariant,
      switchPriceVariant: state.switchPriceVariant,
    })),
  );

  return (
    <Box className={`${classes.rowHead}`} mt="xl">
      <Group className={classes.rowHeadMaterial}>
        <Group className={classes.rowHeadContent}>
          <Box className={`${classes.rowHeadImage}`} />
          <Text c="dark.3" className={`${classes.rowHeadMaterialName}`}>
            Ore Name
          </Text>
          <Text c="dark.3" className={`${classes.rowHeadPrice}`}>
            <IconRefresh onClick={switchPriceVariant} cursor="pointer" />
            {priceVariant === 'unit' ? 'Unit Price' : 'Stack Price'}{' '}
          </Text>
          <Text c="dark.3" className={`${classes.rowHeadAmount}`}>
            Amount
          </Text>
        </Group>
      </Group>

      <Box className={`${classes.rowHeadIcon} `} />

      <Group className={classes.rowHeadProduct}>
        <Group className={classes.rowHeadContent}>
          <Box className={classes.rowHeadImage} />
          <Text c="dark.3" className={`${classes.rowHeadMaterialName}`}>
            Bar Name
          </Text>
          <Text c="dark.3" className={`${classes.rowHeadPrice}`}>
            <IconRefresh onClick={switchPriceVariant} cursor="pointer" />
            {priceVariant === 'unit' ? 'Unit Price' : 'Stack Price'}{' '}
          </Text>
          <Box className={`${classes.rowHeadAmount}`} />
        </Group>
      </Group>

      <Box className={`${classes.rowHeadIcon} `} />

      <Group className={`${classes.rowHeadProfit}`}>
        <Text c="dark.3" ta="center">
          Profit
        </Text>
      </Group>
    </Box>
  );
};

export default RowHead;
