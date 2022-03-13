import { VStack, Badge, Text, Box, Tooltip } from "@chakra-ui/react";

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

        <Tooltip label="Tristemente solo disponible de 9 am a 9 pm.">
          <Box>
            <IconLink
              icon={LinkExternal}
              to="https://tranquil-ravine-78875.herokuapp.com/"
            />
          </Box>
        </Tooltip>
      </Box>
      <Text>
        Este sitio web de compra de ropa permite a sus usuarios una vez que se
        registran agregar prendas de ropa a su "carrito" y realizar el pago de
        su carrito con su tarjeta de crédito o débito. React, Redux Toolkit,
        Redux-Saga y Chakra UI fueron empleados para el desarrollo del
        front-end.
        <br />
        <br />
        El front-end emplea Firebase como servicio de autenticación y base de
        datos primaria (para guardar el carrito de los usuarios y las prendas de
        ropa) y Stripe como servicio de pagos con tarjeta. NodeJS fue empleado
        para el desarrollo del servidor que alberga el front-end y valida los
        pagos realizados en el front-end con Stripe.
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
