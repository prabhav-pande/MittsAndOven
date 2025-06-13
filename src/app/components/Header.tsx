import { Container, Text } from '@mantine/core';
import { OvenKnobNav } from './CircularKnob';

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