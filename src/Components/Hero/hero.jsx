import React from "react";
import { Box, Button, Flex, Text, Stack, Heading, Icon } from "@chakra-ui/react";
import { PiRadioButtonFill } from "react-icons/pi";

const Hero = () => {
    return (
        <Box
            name='toInicio'
            background={{
                base: "linear-gradient(to bottom, rgba(255, 253, 244, 1), rgba(255, 228, 190, 1), rgba(255, 253, 244, 1))",
                lg: "linear-gradient(to bottom, rgba(255, 253, 244, 0.2), rgba(255, 228, 190, 0.5), rgba(255, 253, 244, 1)), url('/hero.png')",
                xl: "linear-gradient(to bottom, rgba(255, 253, 244, 0.2), rgba(255, 228, 190, 0.5), rgba(255, 253, 244, 1)), url('/hero.png')",
            }}
            backgroundSize={{
                base: "cover",
                lg: "cover",
                xl: "cover"   
            }}
            backgroundRepeat={{
                base: "no-repeat", 
                lg: "no-repeat",
                xl: "no-repeat"   
            }}
            width="100%"
            px={['10px', '20px', '40px', '55px']}
            pb={['30px', '30px', '40px']}
            mb={{base: '30px', xl: '40px', '2xl': '60px' }}>
            <Flex
                direction={{base: 'column', sm:'row'}}
                justify={'space-between'} 
                align={'center'} 
                textAlign={{base: 'center', sm: 'start'}}  
                pt={['20px', '100px', '150px', '250px']}>
                <Box 
                    w={{base: '100%', sm:'50%'}}
                    pb={{base: '10px', sm: '0px'}}>
                    <Button
                        variant={'white_button'}
                        fontFamily={'Roboto'} 
                        fontWeight={500}
                        fontSize={{base: '10px', md: '15px', xl: '20px'}} 
                        size={{base: 'xs', md: 'md', '2xl': 'lg'}}>
                        <Icon 
                            as={PiRadioButtonFill}  
                            color={'orange'} 
                            mr={'5px'} 
                            fontSize={['10px', '15px', '20px']}
                        />
                        Disponible para nuevas oportunidades
                    </Button>
                </Box>
                <Text 
                    fontSize={{base: '10px', md: '15px', xl: '20px'}} 
                    pl={{ base: '0px', sm:'90px', md: '140px', lg: '200px', xl: '300px', '2xl': '370px' }} 
                    w={{base: '100%', sm:'50%'}}
                    fontFamily={'Roboto'} 
                    fontWeight={500}>
                    Especializado en Desarrollo Web y Desarrollo de Apliciones de Escritorio.
                </Text>
            </Flex>  

            <Flex 
                direction={{base: 'column', sm:'row'}}
                justify={'space-between'} 
                align={{base: 'start', sm:'end'}} 
                pt={{base: '25px', sm: '100px'}}
                textAlign={{base: 'center', sm: 'start'}}>
                <Stack w={{base: '100%', sm:'50%'}}>
                    <Heading 
                        fontSize={{base: '40px', sm: '70px', md: '100px', lg: '120px', xl: '150px'}} 
                        fontFamily='Oswald' 
                        color={'black'}
                        pb={{base: '5px', sm: '0px'}}>
                        YO SOY GARIEL
                    </Heading>
                </Stack>
                
                <Stack 
                    pl={{ base: '0px', sm:'90px', md: '140px', lg: '200px', xl: '300px', '2xl': '370px' }} 
                    w={{base: '100%', sm:'50%'}}>
                    <Heading 
                        fontSize={{md: '30px', lg: '45px', xl: '55px'}} 
                        fontFamily={'Oswald'} 
                        color={'black'}>
                        DESARROLLADOR WEB FULL STACK  
                    </Heading>
                </Stack>
            </Flex>
        </Box>      
    );
}

export default Hero;
