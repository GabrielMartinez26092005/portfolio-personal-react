import React from "react";
import { Box, Heading, Center, Stack, IconButton, Icon} from "@chakra-ui/react"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from '@chakra-ui/react'

let Footer = () => {


    return (
        <Box pt={'25px'} pb={'25px'} pl={'55px'} pr={'55px'} >
            <Stack spacing={'40px'} justify={'center'} align={'center'} direction={'row'}>
                <Link href='https://github.com/GabrielMartinez26092005' isExternal>
                    <Icon as={FaGithub} color={'black'} fontSize={'50px'}/>
                </Link>
                <Link href='https://www.linkedin.com/in/gabriel-martinez-a49540319/' isExternal>
                    <Icon as={FaLinkedin} color={'black'} fontSize={'50px'}/>
                </Link>
                <Link href='https://www.instagram.com/gaabi_26/' isExternal>
                    <Icon as={FaInstagram} color={'black'} fontSize={'50px'}/>
                </Link>
            </Stack>
        </Box>
    )
}

export default Footer