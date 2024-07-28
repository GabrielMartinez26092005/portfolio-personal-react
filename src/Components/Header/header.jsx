import React from "react";
import { Box, Button, Flex, Link, Stack, Heading, } from "@chakra-ui/react"

let Header = () => {


    return (
    <Flex align="center" justify="space-between" pt={'15px'} pb={'15px'}>
        <Heading 
        pl={55} 
        fontStyle={'italic'} 
        fontWeight={'bold'}
        size={'1xl'}
        fontSize={{base: '15px', md: '25px', '2xl': '35px'}} 
        fontFamily={'Crimson Text'}>

            Gabriel.
        </Heading>
        <Stack 
        direction={"row"} 
        spacing='20px' 
        fontWeight={'bold'} 
        fontFamily={'Roboto'}
        fontSize={{base: '10px', md: '14px', '2xl': '16px'}} >
            <Link>Inicio</Link>
            <Link>Trabajos</Link>
            <Link>Acerca de</Link>
            <Link>Servicios</Link>
            <Link>Recomendaciones</Link>
        </Stack>
        <Box pr={55}>
            <Button
            fontFamily={'Roboto'}
            fontWeight={'light'}
            variant={'black_button'} 
            fontSize={{base: '8px', sm: '10px', md: '12px', '2xl': '14px'}} 
            size={{base: 'xs', md: 'sm', lg: 'md', xl: 'lg'}}>
                Contactar
            </Button>
        </Box>
    </Flex>
    )
}

export default Header