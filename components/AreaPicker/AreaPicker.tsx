'use client';

import { TAreaName } from '@/store/materials/types';
import useUiStore from '@/store/ui/store';
import { Box, Center, Group, SegmentedControl, rem } from '@mantine/core';
import { IconFlame, IconFlask, IconMountain, IconNeedleThread } from '@tabler/icons-react';
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
                <IconMountain style={{ width: rem(16), height: rem(16) }} />
                <Box ml={10}>Mining</Box>
              </Center>
            ),
          },
          {
            value: 'tailoring',
            label: (
              <Center>
                <IconNeedleThread style={{ width: rem(16), height: rem(16) }} />
                <Box ml={10}>Tailoring</Box>
              </Center>
            ),
          },
          {
            value: 'elemental',
            label: (
              <Center>
                <IconFlame style={{ width: rem(16), height: rem(16) }} />
                <Box ml={10}>Elements</Box>
              </Center>
            ),
          },
          {
            value: 'alchemy',
            disabled: true,
            label: (
              <Center>
                <IconFlask style={{ width: rem(16), height: rem(16) }} />
                <Box ml={10}>Alchemy (Coming..)</Box>
              </Center>
            ),
          },
        ]}
      />
    </Group>
  );
}
