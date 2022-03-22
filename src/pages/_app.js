import { ChakraProvider, Container } from "@chakra-ui/react";
import theme from "../theme";
import Head from "next/head";

import "modern-normalize";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/900.css";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>César Claros | Desarrollador Full Stack</title>
      </Head>
      <ChakraProvider theme={theme}>
        <Container maxW="container.sm">
          <Component {...pageProps} />
        </Container>
      </ChakraProvider>
    </>
  );
}

export default App;
