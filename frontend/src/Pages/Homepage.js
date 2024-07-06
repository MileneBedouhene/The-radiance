import React from 'react';
import { Container, Box, Text } from "@chakra-ui/react";

const Homepage = () => {
  return (
    <Container maxW='xl' centerContent>
      <Box
        d='flex'
        justifyContent='center'
        p={3}
        bg='white'
        maxW='400px' // Définir la largeur maximale de la Box
        w='100%'    // Définir la largeur effective de la Box
        m='40px 0 15px 0'
        borderRadius='lg'
        borderWidth='1px'
      >
        <Text textAlign='center' fontWeight='bold' fontSize="4x1" fontFamily = "work sans" >SpackChat</Text>
      </Box>
      <Box>

      </Box>
    </Container>
  );
};

export default Homepage;


