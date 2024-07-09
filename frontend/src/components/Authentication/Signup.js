import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input';
import { VStack } from '@chakra-ui/layout';
import { useToast } from '@chakra-ui/react';
import axios from "axios";
import { useHistory } from 'react-router-dom';




const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [pic, setPic] = useState('');
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const history = useHistory();

  const handlePasswordClick = () => setShowPassword(!showPassword);
  const handleConfirmPasswordClick = () => setShowConfirmPassword(!showConfirmPassword);

  const postDetails = (file) => {
    setLoading(true);
    if (!file) {
      toast({
        title: 'Please Select an Image!',
        status: 'warning',
        duration: 5000,
        isClosable: true,
        position: 'bottom',
      });
      setLoading(false);
      return;
    }

    if (file.type === 'image/jpeg' || file.type === 'image/png') {
      const data = new FormData();
      data.append('file', file);
      data.append('upload_preset', 'The radiance');
      data.append('cloud_name', 'dqgzemvzv');

      fetch('cloudinary://646415273922441:XwIjqjbQpcXQUbEiUvEZqD8fcgY@dqgzemvzv', {
        method: 'POST',
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.url) {
            setPic(data.url.toString());
          } else {
            console.error('No URL received from Cloudinary');
          }
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      toast({
        title: 'Please Select an Image!',
        status: 'warning',
        duration: 5000,
        isClosable: true,
        position: 'bottom',
      });
      setLoading(false);
    }
  };

  const submitHandler = async() => {
    setLoading(true);
    if (!name || !email ||!password ||!confirmPassword){
      toast({
        title: 'Please Fill all the Fields',
        status: 'warning',
        duration: 5000,
        isClosable: true,
        position: 'bottom',
      });
      setLoading(false);
      return;
    }
    if (password !== confirmPassword){
      toast({
        title: 'Password Do not Match',
        status: 'warning',
        duration: 5000,
        isClosable: true,
        position: 'bottom',
      });
      return;
    }

    try{
      const config = {
        headers:{
          "Content-type" :"application/json",

        },
      };

      const{data} = await axios.post(
        "/api/user",
        {name,email,password,pic},
        config
    );
    toast({
      title: 'Password Do not Match',
      status: 'succes',
      duration: 5000,
      isClosable: true,
      position: 'bottom',
    });


     localStorage.setItem('userInfo',JSON.stringify(data));

     setLoading(false);
     history.push('/chat')
    }catch(error){
      toast({
        title: 'Error Occured!',
        description : error.response.data.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'bottom',
      });
      setLoading(false);
    }
  };

  return (
    <VStack spacing='5px' color='black'>
      <FormControl id='first-name' isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder='Enter Your Name'
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>

      <FormControl id='email' isRequired>
        <FormLabel>Email Address</FormLabel>
        <Input
          type='email'
          placeholder='Enter Your Email'
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>

      <FormControl id='password' isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder='Enter Your Password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='sm' onClick={handlePasswordClick}>
              {showPassword ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl id='confirm-password' isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup>
          <Input
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder='Confirm Password'
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='sm' onClick={handleConfirmPasswordClick}>
              {showConfirmPassword ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl id='pic' isRequired>
        <FormLabel>Upload your Picture</FormLabel>
        <Input
          type='file'
          p={1.5}
          accept='image/*'
          onChange={(e) => postDetails(e.target.files[0])}
        />
      </FormControl>

      <Button
        colorScheme='blue'
        width='100%'
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading={loading}
      >
        Sign Up
      </Button>
    </VStack>
  );
};

export default Signup;

