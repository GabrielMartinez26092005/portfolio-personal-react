import React from "react";
import { Box, Button, Flex, Text, Stack, Heading} from "@chakra-ui/react"

let Hero = () => {


    return (
        <Box 
        bgGradient='linear(to-r, gray.300, yellow.400, pink.200)' 
        pl={'55px'} 
        pr={'55px'} 
        pb={'75px'} 
        mb={{base: '20px', md: '50px', '2xl': '100px'}}>
            <Flex justify={'space-between'} align={'center'} pt={'350px'}> 
                <Box w={'50%'}>
                    <Button
                    variant={'white_button'}
                    fontFamily={'Owslad'} 
                    fontWeight={'semibold'}
                    fontSize={{base: '10px', md: '15px', xl: '20px'}} 
                    size={{base: 'xs', md: 'md', '2xl': 'lg'}}>
                        Disponible para nuevas oportunidades
                    </Button>
                </Box>
                <Text 
                fontSize={{base: '10px', md: '15px', xl: '20px'}} 
                pl={{ base: '30px', sm:'90px', md: '140px', lg: '200px', xl: '300px', '2xl': '420'}} 
                w={'50%'}
                fontFamily={'Owslad'} 
                fontWeight={'semibold'}>
                    Especializado en Desarrollo Web y Desarrollo de Apliciones de Escritorio.
                </Text>
            </Flex>  

            <Flex 
            justify={'space-between'} 
            align={'end'} 
            pt={'100px'}>
                <Stack w={'50%'}>
                    <Heading 
                    fontSize={{base: '40px', sm: '70px', md: '100px', lg: '120px', xl: '150px'}} 
                    fontFamily='Oswald' 
                    color={'black'}>
                        YO SOY
                    </Heading>
                    <Heading 
                    fontSize={{base: '40px', sm: '70px', md: '100px', lg: '120px', xl: '150px'  }} 
                    fontFamily={'Oswald'} 
                    color={'black'}>
                        GARIEL
                    </Heading>
                </Stack>
                
                <Stack 
                pl={{ base: '30px', sm:'90px', md: '140px', lg: '200px', xl: '300px', '2xl': '420'}} 
                w={'50%'}>
                    <Heading 
                    fontSize={{md: '30px', lg: '45px', xl: '55px'}} 
                    fontFamily={'Oswald'} 
                    color={'black'}>
                        DESARROLLADOR 
                    </Heading>
                    <Heading 
                    fontSize={{md: '30px', lg: '45px', xl: '55px'}} 
                    fontFamily={'Oswald'} 
                    color={'black'}>
                        WEB 
                    </Heading>
                    <Heading 
                    fontSize={{md: '30px', lg: '45px', xl: '55px'}} 
                    fontFamily={'Oswald'} 
                    color={'black'}>
                        FULL STACK
                    </Heading>
                </Stack>
            </Flex>
        </Box>      
    )
}

export default Hero