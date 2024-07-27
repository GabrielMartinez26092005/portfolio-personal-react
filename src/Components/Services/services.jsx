import React from "react";
import { Box, Heading, Center, Stack, } from "@chakra-ui/react"
import CardService from "../CardService/card";

let Service = () => {


    return (
        <Box mb={'100px'}>
            <Center>
                <Heading size={'3xl'}>
                    SERVICIOS
                </Heading>
            </Center>
            <Stack direction={'row'} justify={'space-between'} pt={'50px'} pl={'55px'} >
                <CardService/>
                <CardService/>
                <CardService/>
                <CardService/>
            </Stack>
        </Box>
    )
}

export default Service