import React from "react";
import { Box, Heading, Image, Center, Grid, GridItem, } from "@chakra-ui/react"

let Workstation = () => {


    return (
        <Box 
        mb={{base: '20px', md: '50px', '2xl': '100px'}}
        px={['10px', '20px', '40px', '55px']}
        bgGradient={"linear-gradient(to bottom, rgba(255, 253, 244, 1), rgba(255, 228, 190, 1), rgba(255, 253, 244, 1))"}>
            <Center>
                <Heading 
                fontSize={{base: '25px', md: '30px', lg: '45px', xl: '55px'}}
                fontFamily={'Oswald'}
                color={'black'}
                pb={['5px', '20px', '30px', '40px']}>
                    ESTACIÓN DE TRABAJO
                </Heading>
            </Center>
            <Grid 
            templateRows='repeat(2, 1fr)' 
            templateColumns='repeat(4, 1fr)' 
            gap={{base: '1', sm: '2', md: '4'}}>
                <GridItem rowStart={1} rowEnd={2} colStart={1}>
                    <Image src='workstation1.jpg' objectFit={'cover'} h={'100%'} w={'100%'} borderRadius={'5%'}></Image>
                </GridItem>
                <GridItem rowStart={2} rowEnd={3} colStart={1}>
                    <Image src='workstation2.jpg' objectFit={'cover'} h={'100%'} w={'100%'} borderRadius={'5%'}></Image>
                </GridItem>
                <GridItem rowSpan={2} colStart={2}>
                    <Image src='workstation3.jpg' objectFit={'cover'} h={'100%'} w={'100%'} borderRadius={'5%'}></Image>
                </GridItem>
                <GridItem rowStart={1} rowEnd={2} colStart={3}>
                    <Image src='workstation4.jpg' objectFit={'cover'} h={'100%'} w={'100%'} borderRadius={'5%'}></Image>
                </GridItem>
                <GridItem rowStart={2} rowEnd={3} colStart={3}>
                    <Image src='workstation5.jpg' objectFit={'cover'} h={'100%'} w={'100%'} borderRadius={'5%'}></Image>
                </GridItem>
                <GridItem rowSpan={2} colStart={4}>
                    <Image src='workstation6.jpg' objectFit={'cover'} h={'100%'} w={'100%'} borderRadius={'5%'}></Image>
                </GridItem>
            </Grid>
        </Box>
    )
}

export default Workstation