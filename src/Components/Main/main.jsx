import React from "react";
import Hero from "../Hero/hero";
import Projects from "../Projects/projects";
import { Box } from  "@chakra-ui/react";
import Services from "../Services/services";
import Statistics from "../Statistics/statistics";

let Main = () => {


    return (
        <Box>
            <Hero/>
            <Projects/>
            <Services/>
            <Statistics/>
        </Box>
        
    )
}

export default Main