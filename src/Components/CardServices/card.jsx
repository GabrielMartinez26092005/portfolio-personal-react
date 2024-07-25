

import React from "react";
import { Box, Heading,  Text, Button, Flex,  Image,} from "@chakra-ui/react"

let CardServices = ({ url }) => {


    return (
        <Box>
        <Image src={url} objectFit={'cover'} w={'100%'} borderRadius={'20px'}></Image>
        <Flex justify={'space-between'} align={'center'} pt={'10px'}>
            <Box>
            <Heading>
                Titulo
            </Heading>
            <Text>Descripcion</Text>
            </Box>
            <Button variant={'white_button'} border={'1px solid'} borderColor={'black'}>Click aqui</Button>

        </Flex>
        </Box>
    )
}

export default CardServices