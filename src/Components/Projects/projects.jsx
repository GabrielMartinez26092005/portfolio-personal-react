import React from "react";
import { Box, Heading, Center, Stack, } from "@chakra-ui/react"
import CardProject from "./card";

let Projects = () => {

    return (
        <Box 
        mb={{base: '20px', md: '50px', '2xl': '100px'}}
        px={['10px', '20px', '40px', '55px']}>
            <Center>
                <Heading 
                fontSize={{base: '25px', md: '30px', lg: '45px', xl: '55px'}}
                fontFamily={'Oswald'}
                color={'black'}
                pb={['10px', '20px', '30px', '40px']}>
                    PROYECTOS RECIENTES
                </Heading>
            </Center>
            <Stack direction={'row'} justify={'center'} spacing={'30px'}>
                <CardProject 
                titulo={'Login Page'}
                descripcion={'Diseño de Pagina Web'}
                urlImage={'public/login-page-project.png'}
                urlLink={'https://github.com/GabrielMartinez26092005/mage-based-web-project-login-page'}>
                </CardProject>
                <CardProject 
                titulo={'Services Page'}
                descripcion={'Diseño de Pagina Web'}
                urlImage={'public/services-project.png'}
                urlLink={'https://github.com/GabrielMartinez26092005/mage-based-web-project-services'}>
                </CardProject>
            </Stack>
        </Box>
            
        
    )
}

export default Projects