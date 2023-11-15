import { Title, Text, Anchor, Box } from '@mantine/core';
import classes from './Hero.module.css';

export function Hero() {
  return (
    <Box w="100%">
      <Title className={classes.title} ta="center" mt={50}>
        Shuffy
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        This is a helper tool for World of Warcraft Classic Era Auction House. You can insert the
        buyout prices of the materials underneath and see if you can "shuffle" any materials and
        create a profit
      </Text>
    </Box>
  );
}
