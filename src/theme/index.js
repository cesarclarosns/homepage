import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    100: "#60c689",
    200: "#e91e63",
    300: "#c2185b",
    400: "#9c27b0",
    500: "#5727b0",
    600: "#272ab0",
    700: "#276bb0",
    800: "#57acdc",
    900: "#57dcbe",
    1000: "#60c689",
  },
};

const components = {
  Heading: {
    variants: {
      section: {
        color: "brand.100",
        w: "100%",
        textAlign: "left",
        m: "2rem 0 2rem 0",
      },
    },
  },
};

const fonts = {
  heading: "Inter, sans-serif",
  body: "Inter, sans-serif",
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const styles = {
  global: {
    "html, body": {
      m: "0px",
      color: "gray.200",
    },
    "*": {
      m: "0px",
    },
  },
};

const theme = {
  colors,
  components,
  styles,
  config,
  fonts,
};

const customTheme = extendTheme(theme);

export default customTheme;
