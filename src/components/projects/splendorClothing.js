import { VStack, Badge, Text, Box } from "@chakra-ui/react";

import { Github } from "@styled-icons/boxicons-logos";
import { LinkExternal } from "@styled-icons/boxicons-regular";

import IconLink from "../general/iconLink";

function SplendorClothing() {
  return (
    <VStack spacing="1rem">
      <Box d="flex" alignItems="center" justifyContent="center">
        <IconLink
          icon={Github}
          to="https://github.com/cesarclarosns/splendor-clothing"
        />

        <Box>
          <IconLink
            icon={LinkExternal}
            to="https://tranquil-ravine-78875.herokuapp.com/"
          />
        </Box>
      </Box>
      <Text>
        Este sitio web de compra de ropa permite a sus usuarios una vez que se
        registran agregar prendas de ropa a su "carrito" y realizar el pago de
        su carrito con su tarjeta de crédito o débito.
        <br />
        <br />
        Firebase fue empleado como servicio de autenticación y base de datos
        primaria (para guardar el carrito de los usuarios y las prendas de ropa)
        y Stripe como servicio de pagos con tarjeta. NodeJS fue empleado para el
        desarrollo del servidor que alberga el front-end y valida los pagos
        realizados con Stripe.
      </Text>

      <Box>
        <Badge colorScheme="blue" fontSize="1rem">
          Stack
        </Badge>
      </Box>
      <Text>
        React, Redux Toolkit, Redux-Saga, Chakra UI, Firebase, Stripe, NodeJS y
        Heroku.
      </Text>
    </VStack>
  );
}

export default SplendorClothing;
