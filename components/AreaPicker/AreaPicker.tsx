'use client';

import { TAreaName } from '@/store/materials/types';
import useUiStore from '@/store/ui/store';
import { Box, Center, Group, SegmentedControl, rem } from '@mantine/core';
import { IconEye } from '@tabler/icons-react';
import { useShallow } from 'zustand/react/shallow';

export function AreaPicker() {
  const { area, switchArea } = useUiStore(
    useShallow((state) => ({ area: state.area, switchArea: state.switchArea })),
  );

  const handleChange = (e: string) => {
    switchArea(e as TAreaName);
  };

  return (
    <Group justify="center" mt="xl" w="100%">
      <SegmentedControl
        value={area}
        onChange={handleChange}
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
            value: 'tailoring',
            label: (
              <Center>
                <IconEye style={{ width: rem(16), height: rem(16) }} />
                <Box ml={10}>Tailoring</Box>
              </Center>
            ),
          },
          {
            value: 'elements',
            disabled: true,
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
