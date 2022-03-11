import { Icon, forwardRef } from "@chakra-ui/react";

function IconLink(props) {
  const { icon, to, children } = props;

  let iconLinkStyleProps = {
    boxSize: "1.2rem",
    cursor: "pointer",
    m: "0.2rem",
    _hover: {
      color: "blue.300",
    },
  };

  return (
    <Icon {...iconLinkStyleProps} as={icon} onClick={() => window.open(to)}>
      {children}
    </Icon>
  );
}

export default IconLink;
