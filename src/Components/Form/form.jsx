import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Input, Button, Textarea, Text, Icon, Center, Heading, } from  "@chakra-ui/react";
import { PiWarningOctagonFill } from "react-icons/pi";

const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  name: Yup.string().required(),
  surname: Yup.string().required(),
  text_area: Yup.string().required(),
})

const FormLogin = () => {
  const submitForm = (values) => {
    console.log(values);
  };

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      email: '',
      name: '',
      surname: '',
    },
    onSubmit: submitForm,
    validationSchema: schema,

  });

  return (
    <Box 
    mb={['10px', '20px', '30px', '40px']} 
    px={['10px', '20px', '40px', '55px']}
    name='toContactarme'>
      <Center>
        <Heading
        fontSize={{base: '25px', md: '30px', lg: '45px', xl: '55px'}}
        fontFamily={'Oswald'}
        color={'black'}
        pb={['10px', '20px', '30px', '40px']}>
          CONTACTARME
        </Heading>
      </Center>
      <form onSubmit={handleSubmit}>
      <Box pb={['10px', '20px', '30px']}>
          <Input
            type='text'
            placeholder='Nombre'
            name='name'
            onChange={handleChange}
          />
          {errors.name && <Text fontWeight={'thin'} color={'#9B2C2C'}> <Icon as={PiWarningOctagonFill} color={'#9B2C2C'} mr={'3px'} fontSize={'13px'}/>Ingresa un Nombre.</Text>}
        </Box>

        <Box pb={['10px', '20px', '30px']}>
          <Input
            type='text'
            placeholder='Apellido'
            name='surname'
            onChange={handleChange}
          />
          {errors.surname && <Text fontWeight={'thin'} color={'#9B2C2C'}> <Icon as={PiWarningOctagonFill} color={'#9B2C2C'} mr={'3px'} fontSize={'13px'}/>Ingresa un Apellido.</Text>}
        </Box>

        <Box pb={['10px', '20px', '30px', '40px']}>
          <Input
          type='email'
          placeholder='Correo Electronico'
          name='email'
          onChange={handleChange}
        />
          {errors.email && <Text fontWeight={'thin'} color={'#9B2C2C'}> <Icon as={PiWarningOctagonFill} color={'#9B2C2C'} mr={'3px'} fontSize={'13px'}/>Email invalido.</Text>}
        </Box>

        <Box>
          <Textarea 
            type='text'
            placeholder='Mensaje'
            name='text_area'
            onChange={handleChange} 
            />
          {errors.text_area && <Text fontWeight={'thin'} color={'#9B2C2C'}> <Icon as={PiWarningOctagonFill} color={'#9B2C2C'} mr={'3px'} fontSize={'13px'}/>Ingresa un Mensaje.</Text>}
        </Box>

        <Box textAlign={'end'}>
          <Button 
          mt={'10px'}
          type='submit'
          variant={'black_button'}
          size={['xs', 'sm', 'md', 'lg']}>Enviar</Button>
        </Box>

      </form>
    </Box>
  );
};
export default FormLogin