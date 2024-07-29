import React from "react";
import { Box, Heading,  Text, Button, Flex,  Image, Link, Icon, } from "@chakra-ui/react"
import { FiArrowUpRight } from "react-icons/fi";

let CardProject = ({ titulo = 'titulo', descripcion = 'descripcion', urlImage, urlLink }) => {


    return (
        <Box>
            <Image 
            src={ urlImage } 
            objectFit={'cover'} 
            w={'100%'} 
            borderRadius={'20px'}></Image>

            <Flex 
            justify={'space-between'} 
            align={'center'} 
            pt={'10px'}>
                <Box>
                    <Heading fontSize={{base: '20px', xl: '30px', '2xl': '35px'}}>
                        { titulo }
                    </Heading>

                    <Text fontSize={{base: '10px', xl: '15px', '2xl': '18px'}}>
                        { descripcion }
                    </Text>
                </Box>

                <Link href= { urlLink } isExternal>
                    <Button 
                    variant={'white_button'} 
                    border={'1px solid'} 
                    borderColor={'black'}
                    fontSize={{base: '8px', xs: '10px', md: '12px', xl: '15px', '2xl': '18px'}}
                    size={['xs', 'sm', 'md', 'lg']}>
                        Ver Proyecto <Icon as={FiArrowUpRight} color={'black'} ml={'5px'} fontSize={'17px'}/>
                    </Button>
                </Link>
            </Flex>
        </Box>
    )
}

export default CardProject