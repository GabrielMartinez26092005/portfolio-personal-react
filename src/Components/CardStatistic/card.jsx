import React from "react";
import { Box, Text, Heading, } from "@chakra-ui/react"


let CardStatistic = ({numero = '99+', descripcion = 'descripcion'}) => {


    return (
        <Box>
            <Heading size={'3xl'}> 
                { numero } 
            </Heading>
            <Text fontSize={'15px'} fontWeight={'semibold'} pt={'10px'}> 
                { descripcion } 
            </Text>

        </Box>
    )
}

export default CardStatistic