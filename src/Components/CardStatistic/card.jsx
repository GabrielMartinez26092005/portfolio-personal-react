import React from "react";
import { Box, Text, Heading, } from "@chakra-ui/react"


let CardStatistic = ({numero = '99+', descripcion = 'descripcion'}) => {


    return (
        <Box>
            <Heading 
            fontSize={{base: '25px', md: '30px', lg: '45px', xl: '55px'}}
            fontFamily={'Oswald'}
            color={'black'}> 
                { numero } 
            </Heading>
            <Text 
            fontSize={{base: '10px', xl: '15px', '2xl': '18px'}} 
            fontWeight={'semibold'} 
            pt={{lg: '5px', '2xl': '10px'}}> 
                { descripcion } 
            </Text>

        </Box>
    )
}

export default CardStatistic