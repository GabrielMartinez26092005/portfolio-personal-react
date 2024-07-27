import React from "react";
import { Box, Heading, Center, Stack, Image, SimpleGrid } from "@chakra-ui/react"
import CardStatistic from "../CardStatistic/card";

let Statistics = () => {


    return (
        <Box mb={'100px'} pl={'55px'} pr={'55px'}>
            <Center>
                <Heading size={'2xl'}>
                    CAMBIANDO MI VISION
                </Heading>
            </Center>
            <Stack direction={'row'} spacing={'30px'} pt={'40px'}>
                <Box width={'50%'} pr={'100px'} alignContent={'center'}>
                    <Heading fontSize={'30px'}>
                        Esto es un encabezado de prueba, completamente auxiliar
                    </Heading>
                    <SimpleGrid columns={'2'}  spacingY='80px' pt={'100px'}>
                        <CardStatistic/>
                        <CardStatistic/>
                        <CardStatistic/>
                        <CardStatistic/>
                    </SimpleGrid>
                </Box>
                <Box w={'50%'}>
                    <Image src={'./public/setup-grande.jpg'} objectFit={'cover'} borderRadius={'20px'} ></Image>
                </Box>
            </Stack>
        </Box>
    )
}

export default Statistics