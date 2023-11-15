'use client';

import { Hero } from '../components/Hero/Hero';
import { AreaPicker } from '../components/AreaPicker/AreaPicker';
import ItemsGrid from '@/components/ItemsGrid/ItemsGrid';
import { Container } from '@mantine/core';
import { Credits } from '@/components/Credits/Credits';

export default function HomePage() {
  return (
    <Container size="85em">
      <Hero />
      <AreaPicker />
      <ItemsGrid />
      <Credits />
    </Container>
  );
}
