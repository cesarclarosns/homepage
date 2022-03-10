import { extendTheme } from "@chakra-ui/react";

const colors = {
  "red-600": "#e91e63",
  "red-800": "#c2185b",
  "purple-500": "#9c27b0",
  "purple-700": "#5727b0",
  "lila-700": "#272ab0",
  "blue-600": "#276bb0",
  "blue-200": "#57acdc",
  "green-500": "#57dcbe",
  "green-700": "#60c689",
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
    body: {
      userSelect: "none",
    },
  },
};

const theme = {
  styles,
  config,
  fonts,
};

const customTheme = extendTheme(theme);

export default customTheme;
