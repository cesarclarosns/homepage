import { VStack, Badge, Text, Box } from "@chakra-ui/react";

import { Github, Linkedin } from "@styled-icons/boxicons-logos";
import { LinkExternal } from "@styled-icons/boxicons-regular";

import IconLink from "../general/iconLink";

function Chatter() {
  return (
    <VStack spacing="1rem">
      <Badge colorScheme="red" fontSize="1rem">
        Próximamente
      </Badge>
      <Box d="flex" alignItems="center" justifyContent="center">
        <IconLink icon={Github} to="https://github.com/cesarclarosns/chatter" />
      </Box>
      <Text>
        Una aplicación universal (web y móvil) en la cual personas con algún
        impedimiento del habla pueden encontrar compañeros en la misma situación
        y conversar con ellos por llamada o video llamada.
      </Text>
      <Box>
        <Badge colorScheme="blue" fontSize="1rem">
          Stack
        </Badge>
      </Box>
      <Text>Django REST Framework y React Native (Expo).</Text>
    </VStack>
  );
}

export default Chatter;
