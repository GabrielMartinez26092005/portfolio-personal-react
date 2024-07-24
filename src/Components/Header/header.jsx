import React from "react";
import { Box, Button, Flex, Spacer, Link, Stack, } from "@chakra-ui/react"

let Footer = () => {


    return (
    <Flex 
    align="center" 
    justify="space-between" 
    pt={5}>
        <Box pl={55} fontStyle={'italic'}>
            Gabriel.
        </Box>
        <Stack direction={"row"} spacing='20px' fontWeight={500}>
            <Link>Inicio</Link>
            <Link>Trabajos</Link>
            <Link>Acerca de</Link>
            <Link>Servicios</Link>
            <Link>Recomendaciones</Link>
        </Stack>
        <Box pr={55}>
            <Button>
                Contactar
            </Button>
        </Box>
    </Flex>
    )
}

export default Footer