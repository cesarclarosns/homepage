import { Box, Text, Link, SimpleGrid, Badge, VStack } from "@chakra-ui/react";

import IconLink from "../general/iconLink";

import { Github, Linkedin } from "@styled-icons/boxicons-logos";
import { LinkExternal } from "@styled-icons/boxicons-regular";
import { Youtube } from "@styled-icons/boxicons-logos";

function CS50() {
  let boxGridStyleProps = {
    borderRight: "1px solid gray",
    borderBottom: "1px solid gray",
    borderTop: "1px solid gray",
    borderLeft: "1px solid gray",

    p: "1rem",
    d: "flex",
    flexDir: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <VStack>
      <Text>
        Algunos de los primeros proyectos de programación web que realizé para
        el curso{" "}
        <Link
          onClick={() =>
            window.open(
              "https://www.edx.org/course/cs50s-web-programming-with-python-and-javascript"
            )
          }
        >
          CS50W
        </Link>
        .
      </Text>

      <SimpleGrid columns="2" p="1rem">
        <Box {...boxGridStyleProps}>
          <Badge fontSize="1rem">Commerce</Badge>
          <Box d="flex" alignItems="center" justifyContent="center">
            <IconLink
              icon={Github}
              to="https://github.com/cesarclarosns/cs50/tree/main/cs50-w/2-commerce"
            />
            <IconLink icon={Youtube} to="https://youtu.be/p4YwIufN_UI" />
          </Box>
          <Box>
            <Badge colorScheme="blue" fontSize="1rem">
              Stack
            </Badge>
            <Text>Django, HTML, CSS y Bootstrap.</Text>
          </Box>
        </Box>
        <Box {...boxGridStyleProps}>
          <Text>
            Sitio de subastas de comercio electrónico similar a eBay que permite
            a los usuarios publicar listados de subastas, hacer ofertas en
            listados, comentar sobre esos listados y agregar listados a una
            "lista de observación".
          </Text>
        </Box>

        <Box {...boxGridStyleProps}>
          <Badge fontSize="1rem">Mail</Badge>
          <Box>
            <IconLink
              icon={Github}
              to="https://github.com/cesarclarosns/cs50/tree/main/cs50-w/3-mail"
            />
            <IconLink icon={Youtube} to="https://youtu.be/jrJ4nc22vws" />
          </Box>
          <Box>
            <Badge colorScheme="blue" fontSize="1rem">
              Stack
            </Badge>
            <Text>Django, JavaScript, HTML, CSS y Bootstrap.</Text>
          </Box>
        </Box>
        <Box {...boxGridStyleProps}>
          <Text>
            Front-end para un cliente de correo electrónico que hace uso de una
            API para enviar y recibir correos.
          </Text>
        </Box>
      </SimpleGrid>
    </VStack>
  );
}

export default CS50;

// function CS50() {
//   return (
//     <Box>
//       <Text>
//         Algunos de los primeros proyectos de programación web que realizé para
//         el curso{" "}
//         <Link onClick={() => window.open("https://cs50.harvard.edu/web/2020/")}>
//           CS50W
//         </Link>
//         .
//       </Text>
//       <SimpleGrid w="full">
//         <Box d="flex" flexDir="row" w="full">
//           <Box
//             d="flex"
//             flexDirection="column"
//             p="1rem"
//             justifyContent="center"
//             alignItems="center"
//           >
//             <Text>Commerce</Text>
//             <Box textAlign="center">
//               <Icon as={Github} onClick={() => window.open("")} />
//               <Icon as={LinkExternal} />
//               <Icon as={Youtube} />
//             </Box>
//           </Box>
//           <Box
//             p="1rem"
//             d="flex"
//             w="full"
//             justifyContent="start"
//             alignItems="center"
//           >
//             Sitio de subastas de comercio electrónico similar a eBay que
//             permitirá a los usuarios publicar listados de subastas, hacer
//             ofertas en listados, comentar sobre esos listados y agregar listados
//             a una "lista de observación".
//             <IconLink icon={Github} to="" />
//           </Box>
//         </Box>
//       </SimpleGrid>
//     </Box>
//   );
// }
