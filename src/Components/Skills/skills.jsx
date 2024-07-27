import React from "react";
import { Box, Heading, Center, Stack, Image, SimpleGrid } from "@chakra-ui/react"
import CardSkill from "../CardSkill/card";

let Skills = () => {


    return (
        <Box mb={'100px'} pl={'55px'} pr={'55px'}>
            <Center>
                <Heading as={'h1'} size={'3xl'} mb={'20px'}>EXPERIENCIA Y HABILIDADES</Heading>
            </Center>
            <Box pt={'35px'} pb={'40px'} borderBottom={'1px solid rgba(0, 0, 0, .2)'}>
                <CardSkill
                url={'/public/skills-1.jpg'}
                fecha='24-2024'
                titulo='Desarrolador Web'
                habilidades={['Html', 'Css', 'JavaScript' ]}/>

            </Box>
            <Box pt={'40px'}>
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