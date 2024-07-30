import React from "react";
import { Box, Icon, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { scroller } from 'react-scroll';

const scrollTo = (to, offset, duration) => {
  scroller.scrollTo(to, {
    duration: duration,
    delay: 0,
    smooth: 'easeInOutQuart',
    offset: offset,
  });
};

const SmallHeader = () => {
  return (
    <Box pt={'5px'} pl={'10px'}>
      <Menu>
        <MenuButton>
          <Icon as={GiHamburgerMenu} color={'black'} fontSize={'25px'} />
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => scrollTo("toInicio", 100, 500)}>
            Inicio
          </MenuItem>
          <MenuItem onClick={() => scrollTo("toTrabajos", -20, 500)}>
            Trabajos
          </MenuItem>
          <MenuItem onClick={() => scrollTo("toServicios", -20, 500)}>
            Servicios
          </MenuItem>
          <MenuItem onClick={() => scrollTo("toAcercaDe", -20, 500)}>
            Acerca de
          </MenuItem>
          <MenuItem onClick={() => scrollTo("toExperiencia", -25, 500)}>
            Experiencia
          </MenuItem>
          <MenuItem onClick={() => scrollTo("toContactarme", -25, 500)}>
            Contactarme
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
}

export default SmallHeader;
