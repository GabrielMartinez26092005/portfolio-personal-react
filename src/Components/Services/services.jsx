import React from "react";
import { Box, Heading, Center, Stack, } from "@chakra-ui/react"
import CardService from "./card";

let Service = () => {


    return (
        <Box 
        mb={{base: '20px', md: '50px', '2xl': '100px'}}
        px={['10px', '20px', '40px', '55px']}
        name='toServicios'>
            <Center>
                <Heading 
                fontSize={{base: '25px', md: '30px', lg: '45px', xl: '55px'}}
                fontFamily={'Oswald'}
                color={'black'}
                pb={['10px', '20px', '30px', '40px']}>
                    PUEDO AYUDARTE CON
                </Heading>
            </Center>
            <Stack 
            direction={{base: 'column', sm:'row'}} 
            justify={'space-between'}>
                <CardService
                titulo={'Marca'}
                descripcion={'Creamos una marca fuerte para productos y empresas. Del modelo de marca al sistema de diseño.'}/>
                <CardService
                numero={'02'}
                titulo={'Diseño de Paginas Web'}
                descripcion={'El ciclo completo de servicios para crear y lanzar un sitio web desde cero o rediseñar un sitio.'}/>
                <CardService
                numero={'03'}
                titulo={'Aplicaciones de Escritorio'}
                descripcion={'Creamos una experiencia de usuario elegante para aplicaciones de escritorio que logran objetivos comerciales y hacen felices a los usuarios.'}/>
                <CardService
                numero={'04'}
                titulo={'El Paquete Completo'}
                descripcion={'Obtenga lo mejor de todos los servicios para su sitio web, capture la identidad de su marca y obtenga funciones completamente funcionales.'}/>
            </Stack>
        </Box>
    )
}
export default Service