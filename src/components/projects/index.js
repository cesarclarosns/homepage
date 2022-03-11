import {
  Box,
  Heading,
  Icon,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Text,
  Link,
  SimpleGrid,
} from "@chakra-ui/react";

import IconLink from "../general/iconLink";

import { Github, Linkedin } from "@styled-icons/boxicons-logos";
import { LinkExternal } from "@styled-icons/boxicons-regular";
import { Youtube } from "@styled-icons/boxicons-logos";

import CS50 from "./cs50";
import SplendorClothing from "./splendorClothing";
import Chatter from "./chatter";

function Projects({ projectsRef }) {
  return (
    <Box ref={projectsRef}>
      <Heading variant="section">PROYECTOS</Heading>
      <Tabs align="center">
        <TabList>
          <Tab>CS50</Tab>
          <Tab>Splendor Clothing</Tab>
          <Tab>Chatter</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <CS50 />
          </TabPanel>
          <TabPanel>
            <SplendorClothing />
          </TabPanel>
          <TabPanel>
            <Chatter />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default Projects;
