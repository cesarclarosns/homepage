import { Box, Portal, Link } from "@chakra-ui/react";

function Footer() {
  let boxFooterProps = {
    w: "100%",
    d: "flex",
    justifyContent: "center",
    pb: "0.2rem",
  };

  return (
    <Portal>
      <Box {...boxFooterProps}>
        <Link
          _hover={{
            color: "brand.100",
            textDecor: "underline",
          }}
          onClick={() =>
            window.open("https://github.com/cesarclarosns/homepage")
          }
        >
          Source code
        </Link>
      </Box>
    </Portal>
  );
}

export default Footer;
