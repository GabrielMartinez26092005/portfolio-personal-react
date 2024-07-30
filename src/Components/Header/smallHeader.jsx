import React from "react";
import { Box, Button, Flex, Link, Stack, Icon, Heading, Center, Menu, MenuButton, MenuList, MenuItem,} from "@chakra-ui/react"
import { GiHamburgerMenu } from "react-icons/gi";

  

let SmallHeader = () => {


    return (
        <Box 
        pt={'5px'}
        pl={'10px'}>
            <Menu> 
                <MenuButton>
                    <Icon 
                    as={GiHamburgerMenu}
                    color={'black'} 
                    fontSize={'25px'}/>
                </MenuButton>
                <MenuList>
                    <MenuItem as='a' href='#'>
                        Link 1
                    </MenuItem>
                    <MenuItem as='a' href='#'>
                        Link 2
                    </MenuItem>
                </MenuList>
            </Menu>
        </Box>
    )
}

export default SmallHeader