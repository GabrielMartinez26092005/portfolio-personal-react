import React from "react";
import { Box } from "@chakra-ui/react";
import Header from "../Header/header";
import Hero from "../Hero/hero";
import Projects from "../Projects/projects";
import Services from "../Services/services";
import Statistics from "../Statistics/statistics";
import Skills from "../Skills/skills";
import Workstation from "../Workstation/workstation";
import FormLogin from "../Form/form";
import Footer from "../Footer/footer";

let Main = () => {
  return (
    <Box>
      <Header />
      <Hero />
      <Projects />
      <Services />
      <Statistics />
      <Skills />
      <Workstation />
      <FormLogin />
      <Footer />
    </Box>
  );
}

export default Main;
