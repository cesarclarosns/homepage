import { Box, VStack, Heading, Text } from "@chakra-ui/react";

function MyStack({ myStackRef }) {
  return (
    <VStack ref={myStackRef}>
      <Heading>Stack</Heading>
      <Text>Lenguajes de programación: Python, JavaScript, HTML y CSS.</Text>
      <Text>Back-end frameworks: Django REST Framework y NodeJS.</Text>
      <Text>Front-end frameworks: React y NextJS (+ Redux).</Text>
      <Text>Full-stack frameworks: Django.</Text>
      <Text>Bases de datos: Redis, SQL y Firebase.</Text>
      <Text>Otros: Stripe.</Text>
    </VStack>
  );
}

export default MyStack;
