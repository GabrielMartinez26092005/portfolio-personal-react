import React from "react";
import { Box, Button, Flex, Text, Stack, Heading} from "@chakra-ui/react"

let Hero = () => {


    return (
        <Box bgGradient='linear(to-r, gray.300, yellow.400, pink.200)' pl={'55px'} pr={'55px'} pb={'55px'}>
            <Flex justify={'space-between'} align={'center'} pt={'350px'}> 
                <Box >
                    <Button variant={'white_button'}>
                        Disponible para nuevas oportunidades
                    </Button>
                </Box>
                <Text w={'350px'}>
                    Especializado en Desarrollo Web y Desarrollo de Apliciones de Escritorio
                </Text>
            </Flex>  

            <Flex justify={'space-between'} align={'end'} pt={'100px'}>
                <Stack >
                    <Heading size={'4xl'}>
                        YO SOY
                    </Heading>
                    <Heading size={'4xl'}>
                        GARIEL
                    </Heading>
                </Stack>
                
                <Stack >
                    <Heading size={'2xl'}>
                        DESARROLLADOR WEB 
                    </Heading>
                    <Heading size={'2xl'}>
                        FULL STACK
                    </Heading>
                </Stack>
            </Flex>
        </Box>      
    )
}

export default Hero