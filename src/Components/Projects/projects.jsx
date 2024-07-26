import React from "react";
import { Box, Heading, Center, Stack, } from "@chakra-ui/react"
import CardProject from "../CardProject/card";

let Projects = () => {

    return (
        <Box mb={'100px'}>
            <Center>
                <Heading size={'2xl'}>
                    PROYECTOS RECIENTES
                </Heading>
            </Center>
            <Stack direction={'row'} spacing={'30px'} pt={'10px'} pl={'55px'} pr={'55px'}>
            <CardProject url={'public/login-page-project.png'}></CardProject>
            <CardProject url={'public/services-project.png'}></CardProject>
            </Stack>
                
        </Box>
            
        
    )
}

export default Projects