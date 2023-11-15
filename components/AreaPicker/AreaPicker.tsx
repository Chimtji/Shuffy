'use client';

import { Box, Center, Group, SegmentedControl, rem } from '@mantine/core';
import { IconEye } from '@tabler/icons-react';

export function AreaPicker() {
  return (
    <Group justify="center" mt="xl" w="100%">
      <SegmentedControl
        data={[
          {
            value: 'mining',
            label: (
              <Center>
                <IconEye style={{ width: rem(16), height: rem(16) }} />
                <Box ml={10}>Mining</Box>
              </Center>
            ),
          },
          {
            disabled: true,
            value: 'tailoring',
            label: (
              <Center>
                <IconEye style={{ width: rem(16), height: rem(16) }} />
                <Box ml={10}>Tailoring (Coming..)</Box>
              </Center>
            ),
          },
          {
            disabled: true,
            value: 'elements',
            label: (
              <Center>
                <IconEye style={{ width: rem(16), height: rem(16) }} />
                <Box ml={10}>Elements (Coming..)</Box>
              </Center>
            ),
          },
        ]}
      />
    </Group>
  );
}
