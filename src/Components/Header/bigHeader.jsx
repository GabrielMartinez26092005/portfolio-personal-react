import React from "react";
import { Box, Flex, Stack, Heading, Button } from "@chakra-ui/react";
import { Link } from 'react-scroll';

const CustomLink = ({ to, offset, duration, children }) => (
  <Box cursor="pointer" _hover={{ textDecoration: 'underline' }}>
    <Link 
      to={to} 
      spy={true} 
      smooth={true} 
      offset={offset} 
      duration={duration} 
      style={{ textDecoration: 'none' }}
    >
      {children}
    </Link>
  </Box>
);

const BigHeader = () => {
  return (
    <Flex
      align="center"
      justify="space-between"
      py={['5px', '10px', '15px']}
      px={['10px', '20px', '40px', '55px']}
    >
      <Heading
        fontStyle={'italic'}
        fontWeight={'bold'}
        size={'1xl'}
        fontSize={{ base: '15px', md: '25px', '2xl': '35px' }}
        fontFamily={'Crimson Text'}
      >
        Gabriel.
      </Heading>

      <Stack
        direction={"row"}
        spacing={['5px', '10px', '15px', '30px']}
        fontWeight={'bold'}
        fontFamily={'Roboto'}
        fontSize={{ base: '10px', md: '14px', '2xl': '16px' }}
      >
        <CustomLink 
          to="toInicio" 
          offset={100} 
          duration={500}
        >
          Inicio
        </CustomLink>
        <CustomLink 
          to="toTrabajos" 
          offset={-20} 
          duration={500}
        >
          Trabajos
        </CustomLink>
        <CustomLink 
          to="toServicios" 
          offset={-20} 
          duration={500}
        >
          Servicios
        </CustomLink>
        <CustomLink 
          to="toAcercaDe" 
          offset={-20} 
          duration={500}
        >
          Acerca de
        </CustomLink>
        <CustomLink 
          to="toExperiencia" 
          offset={-25} 
          duration={500}
        >
          Experiencia
        </CustomLink>
      </Stack>

      <Box>
        <Link 
          to="toContactarme" 
          spy={true} 
          smooth={true} 
          offset={-25} 
          duration={500}
        >
          <Button
            fontFamily={'Roboto'}
            fontWeight={'light'}
            variant={'black_button'}
            fontSize={{ base: '8px', sm: '10px', md: '12px', '2xl': '14px' }}
            size={{ md: 'sm', lg: 'md', xl: 'lg' }}
          >
            Contactar
          </Button>
        </Link>
      </Box>
    </Flex>
  );
}

export default BigHeader;
