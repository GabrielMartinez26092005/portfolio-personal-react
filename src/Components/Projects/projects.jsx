import React from "react";
import { Box, Heading, Center, Stack, } from "@chakra-ui/react"
import CardProject from "../CardProject/card";

let Projects = () => {

    return (
        <Box mb={'100px'}>
            <Center>
                <Heading size={'3xl'}>
                    PROYECTOS RECIENTES
                </Heading>
            </Center>
            <Stack direction={'row'} justify={'center'} spacing={'30px'} pt={'10px'} pl={'55px'} pr={'55px'}>
                <CardProject 
                urlImage={'public/login-page-project.png'}
                urlLink={'https://github.com/GabrielMartinez26092005/mage-based-web-project-login-page'}>
                </CardProject>
                <CardProject 
                urlImage={'public/services-project.png'}
                urlLink={'https://github.com/GabrielMartinez26092005/mage-based-web-project-services'}>
                </CardProject>
            </Stack>
        </Box>
            
        
    )
}

export default Projects