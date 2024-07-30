import React from "react";
import { Box, Text, Heading, Image, UnorderedList, ListItem, Stack, Show } from "@chakra-ui/react";

let CardSkill = ({ url, fecha = 'Fecha', titulo = 'Titulo', habilidades = [] }) => {
  return (
    <Box>
      <Stack spacing={'10%'} direction={'row'} justify={'space-between'} align={'center'} >
        <Show above='sm'>
          <Box flex={'1 1 20%'}>
            <Image src={url} objectFit={'cover'} borderRadius={'5%'}/>
          </Box>
        </Show>
        <Box flex={'1 1 25%'} >
          <Text
          fontSize={{base: '10px', xl: '15px', '2xl': '18px'}} 
          fontWeight={'semibold'} >
            {fecha}
          </Text>
        </Box>
        <Box flex={'1 1 30%'} >
          <Heading 
          fontSize={{base: '15px', md: '20px', lg: '25px', '2xl': '30px'}}
          fontFamily={'Roboto'}
          pb={{md: '5px', '2xl': '10px'}}>
            {titulo}
          </Heading>
        </Box>
        <Box flex={'1 1 25%'} >
          <UnorderedList>
            {habilidades.map((habilidad, index) => (
              <ListItem 
              fontSize={{base: '10px', xl: '15px', '2xl': '18px'}} 
              fontWeight={'semibold'} 
              pt={{lg: '5px', '2xl': '10px'}}
              key={index}>
                {habilidad}
              </ListItem>
            ))}
          </UnorderedList>
        </Box>
      </Stack>
    </Box>
  );
}

export default CardSkill;
