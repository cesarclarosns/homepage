import { ChakraProvider, Container } from "@chakra-ui/react";
import theme from "../theme";

import "@fontsource/inter";

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.sm">
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
}

export default App;
