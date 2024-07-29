import React from "react";
import { Box, Text, Heading, } from "@chakra-ui/react"


let CardService = ({numero = '01', titulo = 'Titulo', descripcion = 'descripcion'}) => {


    return (
        <Box 
        pb={'10px'} 
        pl={{base:'5px', sm: '10px', md: '15px'}} 
        pr={{base: '5px', sm:'10px', md: '40px', '2xl': '90px'}} 
        borderLeft={'1px solid black'}>
          <Heading
          fontFamily={'Oswald'}
          fontStyle={'italic'}
          fontWeight={'light'}
          color={'gray'} 
          fontSize={{base: '25px', md: '30px', lg: '45px', xl: '55px'}} 
          opacity={'50%'}
          pb={{base: '20px', md: '50px', lg: '100px', xl: '120px', '2xl': '150px'}}>
            { numero }
          </Heading>

          <Heading 
          fontSize={{base: '15px', md: '20px', lg: '25px', '2xl': '30px'}}
          fontFamily={'Roboto'}
          pb={{md: '5px', '2xl': '10px'}}>
             { titulo }
          </Heading>

          <Text 
          fontSize={{base: '8px', sm: '10px', md: '12px', xl: '15px', '2xl': '18px'}}
          fontFamily={'Roboto'}
          opacity={'85%'}>
            { descripcion }
          </Text>
        </Box>
    )
}

export default CardService