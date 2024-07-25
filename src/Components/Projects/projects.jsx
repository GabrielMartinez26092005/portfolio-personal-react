import React from "react";
import { Box, Heading, Center, Flex, Stack, } from "@chakra-ui/react"
import CardServices from "../CardServices/card";

let Projects = () => {

    return (
        <Box pt={'30px'}>
            <Center>
                <Heading size={'2xl'}>
                    PROYECTOS RECIENTES
                </Heading>
            </Center>
            <Stack direction={'row'} spacing={'30px'} pt={'10px'} pl={'55px'} pr={'55px'}>
            <CardServices url={'public/login-page-project.png'}></CardServices>
            <CardServices url={'public/services-project.png'}></CardServices>
            </Stack>
                
        </Box>
            
        
    )
}

export default Projects