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
  Link,
} from "@chakra-ui/react";

function Bio({ bioRef }) {
  return (
    <Box ref={bioRef}>
      <Heading variant="section">BIO</Heading>

      <Tabs align="center">
        <TabList>
          <Tab>1996/11</Tab>
          <Tab>2021/06</Tab>
          <Tab>2022/01</Tab>
          <Tab>2022/02</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>Nací en Puebla, México.</TabPanel>
          <TabPanel>
            Completé el programa de Ingeniería en Biotecnología del Instituto
            Politécnico Nacional.
          </TabPanel>
          <TabPanel>
            Finalmente mi aventura por el mundo del software tomó sentido al
            haber googleado y leído sobre un montón de temas, y completar los
            cursos de CS50 de{" "}
            <Link
              onClick={() =>
                window.open(
                  "https://www.edx.org/course/introduction-computer-science-harvardx-cs50x"
                )
              }
            >
              Introducción a las Ciencias de la Computación
            </Link>{" "}
            e{" "}
            <Link
              onClick={() =>
                window.open(
                  "https://www.edx.org/course/cs50s-introduction-to-artificial-intelligence-with-python"
                )
              }
            >
              Introducción a la Inteligencia Artificial
            </Link>{" "}
            porque pude comprender muchas cosas!
          </TabPanel>
          <TabPanel>
            Actualmente estoy desarrollando Chatter y estoy muy intersado en
            aprender más sobre todo lo relacionado con el desarrollo y
            operaciones de software que vive en la web.
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
export default Bio;
