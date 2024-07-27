import React from "react";
import { Box, Heading, Image, Center, Grid, GridItem, } from "@chakra-ui/react"

let Workstation = () => {


    return (
        <Box mb={'100px'} pl={'55px'} pr={'55px'}>
            <Center>
                <Heading size={'3xl'}>
                    ESTACIÓN DE TRABAJO
                </Heading>
            </Center>
            <Grid pt={'40px'} templateRows='repeat(2, 1fr)' templateColumns='repeat(4, 1fr)' gap={4}>
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