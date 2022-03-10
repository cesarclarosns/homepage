import { Box, VStack, Heading, Text } from "@chakra-ui/react";

function Bio({ bioRef }) {
  return (
    <VStack ref={bioRef}>
      <Heading>Bio</Heading>
      <Text>1996/11 - Nací en Puebla, México.</Text>
      <Text>
        2021/06 - Completé el programa de Ingeniería en Biotecnología del
        Instituto Politécnico Nacional.
      </Text>
      <Text>
        2022/01 - Finalmente mi aventura por el mundo del software tomó sentido
        al haber aprendido de un montón de temas y completar los cursos de CS50
        de Introducción a las Ciencias de la Computación e Introducción a la
        Inteligencia Artificial porque pude comprender muchas cosas!
      </Text>
      <Text>
        2022/02 - Actualmente estoy desarrollando Chatter y estoy muy intersado
        en aprender más sobre todo lo relacionado con el desarrollo y
        operaciones de software que vive en la web.
      </Text>
    </VStack>
  );
}
export default Bio;
