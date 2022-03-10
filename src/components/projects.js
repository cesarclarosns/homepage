import { Box, Heading, SimpleGrid, VStack } from "@chakra-ui/react";

function Projects({ projectsRef }) {
  return (
    <VStack ref={projectsRef}>
      <Heading>Proyectos</Heading>
      <SimpleGrid>
        <Box>Chatter</Box>
        <Box>Splendor Clothing</Box>
        <Box>CS50</Box>
      </SimpleGrid>
    </VStack>
  );
}

export default Projects;
