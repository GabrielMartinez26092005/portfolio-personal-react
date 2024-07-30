import React from "react";
import { Box, Heading, Center, Stack, IconButton, Icon} from "@chakra-ui/react"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from '@chakra-ui/react'

let Footer = () => {


    return (
        <Box 
        pt={['5px', '15px', '20px', '25px']} 
        pb={['5px', '15px', '20px', '25px']}
        bgGradient={"linear-gradient(to-b, rgba(255, 253, 244, 1), rgba(255, 228, 190, 1))"}>
            <Stack 
            spacing={['30px', '40px', '50px', '80px']} 
            justify={'center'} 
            align={'center'} 
            direction={'row'}>
                <Link 
                href='https://github.com/GabrielMartinez26092005' 
                isExternal>
                    <Icon 
                    as={FaGithub} 
                    color={'black'} 
                    fontSize={['20px', '35px', '40px', '50px']}/>
                </Link>
                <Link 
                href='https://www.linkedin.com/in/gabriel-martinez-a49540319/' 
                isExternal>
                    <Icon 
                    as={FaLinkedin} 
                    color={'black'} 
                    fontSize={['20px', '35px', '40px', '50px']}/>
                </Link>
                <Link 
                href='https://www.instagram.com/gaabi_26/' 
                isExternal>
                    <Icon 
                    as={FaInstagram} 
                    color={'black'} 
                    fontSize={['20px', '35px', '40px', '50px']}/>
                </Link>
            </Stack>
        </Box>
    )
}

export default Footer