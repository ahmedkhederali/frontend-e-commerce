import React from 'react';
import { Box, Text, IconButton, Container, ButtonGroup, Stack } from '@chakra-ui/react';
import { Apple, Facebook, Google, Instagram, Twitter, YouTube } from '@mui/icons-material';
import { useColorContext } from '../contexts/ColorContext';

const Footer = () => {
  const { color, setColor } = useColorContext();

  return (
    <Box mt={5} className='footer' bg={color} style={{color:"#fff"}} >
      <Box
        bg='whitesmoke'
        display='flex'
        justifyContent='space-around'
        flexDirection={{ base: 'column', sm: 'row' }}
      >
       
      </Box>
      <Container maxW='1200px'display='flex' py={10} justifyContent='space-between' flexDirection={{base:'column',sm:'row'}}  >
            <Box textAlign={{base:'center',sm:'start'}} py={5} >
              <Text fontSize={24} fontWeight={600} >Help</Text>
              <Text mt={2} _hover={{ textDecoration: 'underline' }} >Frequently Asked Questions</Text>
              <Text mt={2} _hover={{ textDecoration: 'underline' }} >Return And Exchange</Text>
              <Text mt={2} _hover={{ textDecoration: 'underline' }} >Support Team</Text>
            </Box>
            <Box textAlign={{base:'center',sm:'start'}} py={5}>
              <Text fontSize={24} fontWeight={600} >Corporate</Text>
              <Text mt={2} _hover={{ textDecoration: 'underline' }} >Career Opportunities</Text>
              <Text mt={2} _hover={{ textDecoration: 'underline' }} >Our Stores</Text>
              <Text mt={2} _hover={{ textDecoration: 'underline' }} >About Us</Text>
            </Box>
            <Box textAlign={{base:'center',sm:'start'}} py={5} >
              <Text fontSize={24} fontWeight={600} >Policies</Text>
              <Text mt={2} _hover={{ textDecoration: 'underline' }} >Privacy Policies</Text>
              <Text mt={2} _hover={{ textDecoration: 'underline' }} >Terms & Conditions</Text>
              <Text mt={2} _hover={{ textDecoration: 'underline' }} >Return Policies</Text>
            </Box>
      </Container>
      
      <Container>
        <Stack
        pt="8"
        pb="12"
        justify="space-between"
        direction={{ base: 'column-reverse', md: 'row' }}
        align="center"
      >
        <Text fontSize="sm" color="subtle">
          &copy; {new Date().getFullYear()} Edit By Ahmed Ali. All rights reserved.
        </Text>
        <ButtonGroup variant="ghost">
          <IconButton
            as="a"
            href="#"
            aria-label="LinkedIn"
            icon={<Google fontSize="1.25rem" />}
          />
          <IconButton as="a" href="#" aria-label="GitHub" icon={<Instagram fontSize="1.25rem" />} />
          <IconButton as="a" href="#" aria-label="Twitter" icon={<Facebook fontSize="1.25rem" />} />
        </ButtonGroup>
      </Stack>
    </Container>
    </Box>
  )
}

export default Footer;