import { Box, VStack, Heading, Text, Badge } from "@chakra-ui/react";

function MyStack({ myStackRef }) {
  return (
    <VStack ref={myStackRef}>
      <Heading variant="section">STACK</Heading>
      <Badge colorScheme="blue" fontSize="1rem">
        Lenguajes de programación
      </Badge>
      <Text>Python, JavaScript, HTML y CSS.</Text>
      <Badge colorScheme="blue" fontSize="1rem">
        Back-end Frameworks
      </Badge>
      <Text>Django REST Framework y NodeJS.</Text>
      <Badge colorScheme="blue" fontSize="1rem">
        Front-end frameworks
      </Badge>
      <Text>React y NextJS (+ Redux).</Text>
      <Badge colorScheme="blue" fontSize="1rem">
        Full-stack frameworks
      </Badge>
      <Text>Django.</Text>
      <Badge colorScheme="blue" fontSize="1rem">
        Bases de datos
      </Badge>
      <Text>Redis, SQL y Firebase.</Text>
      <Badge colorScheme="blue" fontSize="1rem">
        Otros
      </Badge>
      <Text>Git, Stripe, Windows y Linux</Text>
    </VStack>
  );
}

{
  /* <Stack direction="row">
  <Badge>Default</Badge>
  <Badge colorScheme="green">Success</Badge>
  <Badge colorScheme="red">Removed</Badge>
  <Badge colorScheme="purple">New</Badge>
</Stack>; */
}

export default MyStack;
