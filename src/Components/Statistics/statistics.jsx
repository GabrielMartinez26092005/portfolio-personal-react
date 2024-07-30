import React from "react";
import { Box, Heading, Center, Stack, Image, SimpleGrid, Show, } from "@chakra-ui/react"
import CardStatistic from "./card";

let Statistics = () => {


    return (
        <Box 
        mb={{base: '20px', md: '50px', '2xl': '100px'}}
        px={['10px', '20px', '40px', '55px']}
        name='toAcercaDe'
        bgGradient={"linear-gradient(to bottom, rgba(255, 253, 244, 1), rgba(255, 228, 190, 1), rgba(255, 253, 244, 1))"}>
            <Center>
                <Heading 
                fontSize={{base: '25px', md: '30px', lg: '45px', xl: '55px'}}
                fontFamily={'Oswald'}
                color={'black'}
                pb={['10px', '20px', '30px', '40px']}>
                    CAMBIANDO MI VISION
                </Heading>
            </Center>

            <Stack 
            direction={'row'} 
            spacing={'30px'}>
                <Box 
                width={{base: '100%', sm: '50%'}} 
                pr={{base: '0px', md: '50px', xl: '100px', '2xl': '150px'}} 
                pt={{base: '0px', md: '20px', xl: '40px', '2xl': '70px'}}>
                    <Heading fontSize={{base: '15px', xl: '30px', '2xl': '35px'}}>
                        Creando soluciones hechas a medida para todos los proyectos en los que trabajo.
                    </Heading>
                    
                    <SimpleGrid 
                    columns={'2'}  
                    spacingY={{base: '5px', md:'20px', lg: '40px', xl: '60px', '2xl': '80px'}} 
                    pt={{base: '10px', md: '30px', lg: '70px', xl: '100px', '2xl': '150px'}}>
                        <CardStatistic
                        numero={'10+'}
                        descripcion={'Proyectos Completados'}/>
                        <CardStatistic
                        numero={'3+'}
                        descripcion={'Cursos Completados'}/>
                        <CardStatistic
                        numero={'5+'}
                        descripcion={'Lenguajes de Programacion'}/>
                        <CardStatistic
                        numero={'8+'}
                        descripcion={'Tecnologias utilizadas'}/>
                    </SimpleGrid>
                </Box>
                <Show
                above='sm'> 
                    <Box w={'50%'}>
                        <Image src={'./public/setup-grande.jpg'} objectFit={'cover'} borderRadius={'5%'} ></Image>
                    </Box>
                </Show>
            </Stack>
        </Box>
    )
}

export default Statistics