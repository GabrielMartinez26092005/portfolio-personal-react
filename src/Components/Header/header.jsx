import React from "react";
import { Box, Button, Flex, Link, Stack, Heading, } from "@chakra-ui/react"

let Footer = () => {


    return (
    <Flex align="center" justify="space-between" pt={'15px'} pb={'15px'}>
        <Heading pl={55} fontStyle={'italic'} fontWeight={'bold'} size={'1xl'}>
            Gabriel.
        </Heading>
        <Stack direction={"row"} spacing='20px' fontWeight={'500'}>
            <Link>Inicio</Link>
            <Link>Trabajos</Link>
            <Link>Acerca de</Link>
            <Link>Servicios</Link>
            <Link>Recomendaciones</Link>
        </Stack>
        <Box pr={55}>
            <Button variant={'black_button'} >
                Contactar
            </Button>
        </Box>
    </Flex>
    )
}

export default Footer