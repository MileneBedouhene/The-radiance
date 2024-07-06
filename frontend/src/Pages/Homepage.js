import React from 'react';
import { Container, Box, Text,Tab,Tabs,TabList,TabPanel,TabPanels } from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

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

      <Box d='flex'
        justifyContent='center'
        p={3}
        bg='white'
        maxW='400px'
        w='100%'
        m='40px 0 15px 0'
        mt ="0.1px"
        borderRadius='lg'
        color ="black"
        borderWidth='1px'>

        <Tabs variant='soft-rounded' colorScheme='purple'>
          <TabList mb ='1em'>
            <Tab width ="50%">Login</Tab>
            <Tab  width ="50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel><Login/></TabPanel>
            <TabPanel><Signup/></TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;


