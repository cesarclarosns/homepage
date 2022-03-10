import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";

function Contact({ contactRef }) {
  return (
    <Box ref={contactRef}>
      <Heading>Contáctame</Heading>
      <form>
        <Text>Nombre</Text>
        <Text>Email</Text>
        <Text>Asunto</Text>
        <Text>Mensaje</Text>
      </form>
    </Box>
  );
}

export default Contact;
