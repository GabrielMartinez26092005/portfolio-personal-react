import React from "react";
import { Box, Text, Flex, Heading, Image, UnorderedList, ListItem, Stack } from "@chakra-ui/react";

let CardSkill = ({ url, fecha = 'Fecha', titulo = 'Titulo', habilidades = [] }) => {
  return (
    <Box>
      <Stack spacing={'10%'} direction={'row'} justify={'space-between'} align={'center'} >
        <Box flex={'1 1 20%'}>
          <Image src={url} objectFit={'cover'} borderRadius={'5%'}/>
        </Box>
        <Box flex={'1 1 25%'} >
          <Text>
            {fecha}
          </Text>
        </Box>
        <Box flex={'1 1 30%'} >
          <Heading size={'1xl'}>
            {titulo}
          </Heading>
        </Box>
        <Box flex={'1 1 25%'} >
          <UnorderedList>
            {habilidades.map((habilidad, index) => (
              <ListItem key={index}>{habilidad}</ListItem>
            ))}
          </UnorderedList>
        </Box>
      </Stack>
    </Box>
  );
}

export default CardSkill;
