import { Container, Text } from '@mantine/core';
import { OvenKnobNav } from './CircularKnob';

const links = [
  { link: '/about', label: 'Home' },
  { link: '/pricing', label: 'Cakes' },
  { link: '/learn', label: 'Inquiry' },
  { link: '/community', label: 'About Me' },
];

export function HeaderSimple() {
  return (
    <header className="w-full bg-white justify-between items-center">
      <Container fluid className="flex flex-row justify-between h-full">
        <Text>
            Mitts & Oven
        </Text>
        <OvenKnobNav/>
      </Container>
    </header>
  );
}