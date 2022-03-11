import { useState } from "react";

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  SimpleGrid,
  Text,
  Textarea,
  useToast,
  VStack,
} from "@chakra-ui/react";

const Contact = ({ contactRef }) => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(name, value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    // fetch("/api/mail", {
    //   method: "post",
    //   body: JSON.stringify(formData),
    // });

    toast({
      title: "Tu mensaje no fue enviado.",
      description: "Por favor escríbeme a este correo: cesarclarosns@aol.com",
      status: "error",
      duration: 10000,
      isClosable: true,
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  return (
    <Box ref={contactRef} mb="2rem">
      <Heading variant="section">CONTÁCTAME</Heading>
      <Text mb="1rem">
        Envíame un correo si tienes alguna propuesta o solo te gustaría
        saludarme...
      </Text>
      <form onSubmit={handleSubmit} spellCheck="false">
        <VStack w="full">
          <SimpleGrid columns="2" spacing="1rem" w="full">
            <FormControl isRequired w="full">
              <FormLabel>Nombre</FormLabel>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
              ></Input>
            </FormControl>
            <FormControl isRequired w="full">
              <FormLabel>Email</FormLabel>
              <Input
                name="email"
                value={formData.email}
                onChange={handleChange}
              ></Input>
            </FormControl>
          </SimpleGrid>
          <FormControl isRequired w="full">
            <FormLabel>Asunto</FormLabel>
            <Input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            ></Input>
          </FormControl>
          <FormControl isRequired w="full">
            <FormLabel>Mensaje</FormLabel>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </FormControl>
          <Box d="flex" justifyContent="end" w="full" pt="1rem">
            <Button type="submit">Enviar</Button>
          </Box>
        </VStack>
      </form>
    </Box>
  );
};

export default Contact;
