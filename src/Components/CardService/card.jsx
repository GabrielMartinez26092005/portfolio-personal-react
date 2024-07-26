import React from "react";
import { Box, Text, Heading, } from "@chakra-ui/react"


let CardService = ({numero = '01', titulo = 'Titulo', descripcion = 'descripcion'}) => {


    return (
        <Box pb={'10px'} pl={'15px'} pr={'90px'} borderLeft={'1px solid black'}>
          <Heading size={'2xl'} pb={'100px'}>
            { numero }
          </Heading>
          <Heading size={'1xl'}>
             { titulo }
          </Heading>
          <Text>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nostrum possimus animi enim, adipisci delectus libero dolore tempora quam deserunt quidem pariatur assumenda est asperiores ratione soluta repellat harum saepe. 
          </Text>
        </Box>
    )
}

export default CardService