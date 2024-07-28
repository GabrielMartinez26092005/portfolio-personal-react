import React from "react";
import { Box, Heading,  Text, Button, Flex,  Image, Link } from "@chakra-ui/react"

let CardProject = ({ urlImage, urlLink }) => {


    return (
        <Box>
        <Image src={ urlImage } objectFit={'cover'} w={'100%'} borderRadius={'20px'}></Image>
        <Flex justify={'space-between'} align={'center'} pt={'10px'}>
            <Box>
            <Heading>
                Titulo
            </Heading>
            <Text>Descripcion</Text>
            </Box>
            <Link href= { urlLink } isExternal>
                <Button variant={'white_button'} border={'1px solid'} borderColor={'black'}>Click aqui</Button>
            </Link>

        </Flex>
        </Box>
    )
}

export default CardProject