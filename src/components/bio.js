import {
  Box,
  VStack,
  Heading,
  Text,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";

const events = {
  "1996/11": "Nací en Puebla, México.",
  "2021/06":
    "Completé el programa de Ingeniería en Biotecnología del Instituto Politécnico Nacional.",
  "2022/01":
    "Finalmente mi aventura por el mundo del software tomó sentido al haber googleado y leído sobre un montón de temas, y completar los cursos de CS50 de Introducción a las Ciencias de la Computación e Introducción a la Inteligencia Artificial porque pude comprender muchas cosas!",
  "2022/02":
    "Actualmente estoy desarrollando Chatter y estoy muy intersado en aprender más sobre todo lo relacionado con el desarrollo y operaciones de software que vive en la web.",
};

function Bio({ bioRef }) {
  return (
    <Box ref={bioRef}>
      <Heading variant="section">BIO</Heading>

      <Tabs align="center">
        <TabList>
          {Object.keys(events).map((date, i) => (
            <Tab key={`date-${i}`}>{date}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {Object.values(events).map((description, i) => (
            <TabPanel key={`description-${i}`}>{description}</TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
}
export default Bio;
