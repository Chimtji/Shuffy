import { Title, Text, Anchor } from '@mantine/core';
import classes from './Credits.module.css';

export function Credits() {
  return (
    <Text c="dimmed" ta="center" size="sm" maw={580} mx="auto" mt="xl" pb="xl">
      Made with 🔥 by <Anchor href="https://github.com/Chimtji">Chimtji</Anchor>
    </Text>
  );
}
