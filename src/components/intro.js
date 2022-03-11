import { Box, Text, Heading, VStack } from "@chakra-ui/react";

function Intro() {
  let boxContainerProps = {
    w: "100%",
    m: "2rem 0 3rem 0",
    p: "1rem",

    borderRadius: "1rem",
  };

  let boxInnerContainerProps = {
    d: "flex",
    flexDir: "column",
    alignItems: "center",
    w: "100%",
  };

  return (
    <VStack {...boxContainerProps}>
      <VStack {...boxInnerContainerProps}>
        <Box mb="2rem">
          <Heading fontSize="5xl" mt="4rem">
            CÉSAR CLAROS
          </Heading>
          <Heading fontSize="2xl" color="gray.400">
            DESARROLLADOR FULL STACK
          </Heading>
        </Box>
        <Text fontSize="xl" textAlign="center" mt="4rem" fontWeight="500">
          ¡Hola mundo!, soy un Desarrollador Full Stack e Ingeniero en
          Biotecnología que vive en México y me encanta construir cosas que
          viven en la web.
        </Text>
      </VStack>
    </VStack>
  );
}

export default Intro;
