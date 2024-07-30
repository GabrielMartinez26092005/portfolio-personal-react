import React from "react";
import { Box, Show } from "@chakra-ui/react";
import BigHeader from "./bigHeader";
import SmallHeader from "./smallHeader";

let Header = () => {
  return (
    <Box as='header'>
      <Show above='sm'>
        <BigHeader />
      </Show>
      <Show below='sm'>
        <SmallHeader />
      </Show>
    </Box>
  );
}

export default Header;
