import React from "react";
import { Box, Flex, Text, useBoolean, Link, Icon } from "@chakra-ui/react";

import { Github, Linkedin } from "@styled-icons/boxicons-logos";

// @styled-icons/ionicons-outline/Close
import { Close, Menu } from "@styled-icons/ionicons-outline";

const Header = (props) => {
  const [open, setOpen] = useBoolean(false);

  let boxBgProps = {
    w: "2rem",
    h: "2rem",
    position: "fixed",
    top: "1.5rem",
    right: "1.5rem",
    zIndex: "1000",
    bgImage: "linear-gradient( #000000 , #000000)",
    borderRadius: "50%",
    transition: "all .8s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    ...(open && { transform: "scale(200)" }),
  };

  let boxToggleProps = {
    cursor: "pointer",
    onClick: setOpen.toggle,
    w: "3rem",
    top: "1rem",
    right: "1rem",
    position: "fixed",
    zIndex: "1500",
    bgColor: "gray.600",
    borderRadius: "50%",
    opacity: "0.8",
    transition: "all .8s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  };

  return (
    <Box>
      <Box {...boxToggleProps}>{open ? <Close /> : <Menu />}</Box>
      <Box {...boxBgProps}>&nbsp;</Box>
      <MenuLinks open={open} headerProps={props} setOpen={setOpen} />
    </Box>
  );
};

function MenuLinks({ open, setOpen, headerProps }) {
  const { bioRef, myStackRef, projectsRef, contactRef } = headerProps;

  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  let boxLinksContainerProps = {
    height: "100vh",
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "1500",

    ...(open ? { opacity: "1" } : { opacity: "0" }),
    transition: "all .8s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  };

  let boxLinksProps = {
    position: "fixed",
    top: "50%",
    left: "50%",

    transform: "translate(-50%, -50%)",
    textAlign: "center",
  };

  let linkProps = {
    ...(open ? { d: "block" } : { d: "none" }),
    fontSize: "1.5rem",
    fontWeight: "400",
    bgSize: "220%",
    p: "1rem 2rem",
    _hover: {
      color: "#60c689",
    },
  };

  let boxIconsContainerProps = {
    ...(!open && { d: "none" }),
  };

  let iconLinkProps = {
    boxSize: "2rem",
    cursor: "pointer",

    _hover: { color: "#60c689" },
  };

  return (
    <Box {...boxLinksContainerProps}>
      <Box {...boxLinksProps}>
        <Link
          {...linkProps}
          onClick={() => {
            setOpen.toggle();
            handleScroll(bioRef.current);
          }}
        >
          Bio
        </Link>
        <Link
          {...linkProps}
          onClick={() => {
            setOpen.toggle();
            handleScroll(myStackRef.current);
          }}
        >
          Stack
        </Link>
        <Link
          {...linkProps}
          onClick={() => {
            setOpen.toggle();
            handleScroll(projectsRef.current);
          }}
        >
          Proyectos
        </Link>
        <Link
          {...linkProps}
          onClick={() => {
            setOpen.toggle();
            handleScroll(contactRef.current);
          }}
        >
          Contacto
        </Link>
      </Box>
      <Box {...boxIconsContainerProps}>
        <Icon as={Github} {...iconLinkProps} />
        <Icon as={Linkedin} {...iconLinkProps} />
      </Box>
    </Box>
  );
}

export default Header;
