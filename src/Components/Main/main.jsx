import React from "react";
import Hero from "../Hero/hero";
import Projects from "../Projects/projects";
import { Box } from  "@chakra-ui/react";
import Services from "../Services/services";

let Main = () => {


    return (
        <Box>
        <Hero/>
        <Projects/>
        <Services/>
        </Box>
        
    )
}

export default Main