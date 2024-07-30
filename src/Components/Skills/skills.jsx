import React from "react";
import { Box, Heading, Center, Stack, Image, SimpleGrid } from "@chakra-ui/react"
import CardSkill from "./card";

let Skills = () => {


    return (
        <Box 
        mb={{base: '20px', md: '50px', '2xl': '100px'}} 
        px={['10px', '20px', '40px', '55px']}>
            <Center>
                <Heading 
                fontSize={{base: '25px', md: '30px', lg: '45px', xl: '55px'}}
                fontFamily={'Oswald'}
                pb={['5px', '20px', '30px', '40px']}
                color={'black'}>
                    EXPERIENCIA Y HABILIDADES</Heading>
            </Center>
            <Box 
            pb={['10px', '15px', '25px', '35px']} 
            borderBottom={'1px solid rgba(0, 0, 0, .2)'}>
                <CardSkill
                url={'/public/skills-1.jpg'}
                fecha='24-2024'
                titulo='Desarrolador Web'
                habilidades={['Html', 'Css', 'JavaScript' ]}/>

            </Box>
            <Box pt={['10px', '15px', '25px', '35px']} >
                <CardSkill 
                url={'/public/skills-2.jpg'}
                fecha='24-2024'
                titulo='Desarrollador de Apliaciones de Escritorio'
                habilidades={['C#', '.Net Framework', 'Windows Forms App' ]}/>
            </Box>
        </Box>
    )
}

export default Skills