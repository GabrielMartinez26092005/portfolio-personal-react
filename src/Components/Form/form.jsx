import React from "react";
import { Box, FormControl, Center, FormHelperText, FormLabel, Input, InputGroup, InputRightElement, Button} from "@chakra-ui/react"
import { Formik } from "formik";

let Formulario = () => {

  


  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return (
    



    <Box mb={'100px'} pl={'55px'} pr={'55px'}>
      <FormControl pb={'30px'}>
        <FormLabel>Correo Electronico</FormLabel>
        <Input type='email' />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>


      <FormControl isRequired pb={'30px'}>
        <FormLabel>Primer Nombre</FormLabel>
        <Input placeholder='First name' type='text' id='firstname' name='firstname' />
      </FormControl>


      <FormControl isRequired pb={'30px'}>
        <FormLabel>Segundo Nombre</FormLabel>
        <Input placeholder='Second name' />
      </FormControl>


      <FormControl isRequired pb={'30px'}>
        <FormLabel>Contraseña</FormLabel>
        <InputGroup size='md'>
          <Input
            pr='4.5rem'
            type={show ? 'text' : 'password'}
            placeholder='Enter password'
          />
          <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='sm' onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </Box>
  )
}

export default Formulario