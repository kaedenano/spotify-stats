import { signIn } from 'next-auth/react'

import { useState } from 'react'
import { FaSpotify, FaTwitter } from 'react-icons/fa'

import { Heading, Box, Button, Text, VStack, Flex, Container, Image } from '@chakra-ui/react';
import { Center, HStack } from '@chakra-ui/layout';
import { motion } from "framer-motion";

import { ScrollImages } from './scrollImages';

export const useWelcome = () => {

    const handleLogin = () => {
        signIn("spotify", { callbackUrl: process.env.NEXT_PUBLIC_REDIRECT_URI + '/stats' });
    }

    return (
        <>
            <Box
                textAlign='center'
                marginTop={{ md: "100px", sm: "50px" }}
            >
                <Heading as='h1' size='4xl'>
                    Share Statistics
                </Heading>
                <Heading as='h1' size='4xl'>
                    with Other Users
                </Heading>
                <Button
                    onClick={handleLogin}
                    leftIcon={<FaSpotify />}
                    fontSize="2xl"
                    padding='8'
                    margin='8'
                    background='brand.100'
                    rounded='full'
                    color='white'>
                    Login on Spotify
                </Button>
                <p>
                    <Text
                        as='i'
                        color={'gray.400'}
                        mx='5'>
                        Share your most played tracks and artists.
                    </Text>
                </p>
            </Box>

            <Box
                marginTop={32}
            >
                <motion.div
                    whileHover={{
                        scale: 1,
                    }}
                >
                    <ScrollImages
                        images={[
                            <Image key={1} rounded='2xl' shadow='2xl' src='images/1.jfif' />,
                            <Image key={1} rounded='2xl' shadow='2xl' src='images/2.jfif' />,
                            <Image key={1} rounded='2xl' shadow='2xl' src='images/3.jfif' />,
                            <Image key={1} rounded='2xl' shadow='2xl' src='images/4.jfif' />,
                            <Image key={1} rounded='2xl' shadow='2xl' src='images/5.jfif' />,
                            <Image key={1} rounded='2xl' shadow='2xl' src='images/6.jfif' />,
                            <Image key={1} rounded='2xl' shadow='2xl' src='images/7.jfif' />,
                        ]} />
                </motion.div>
            </Box>
            <Box
                textAlign='center'
                mx={5}
                my={32}
            >
                <p>
                    <Text
                        as='basic'
                        color={'gray.500'}
                    >You can easily share via Twitter. <br />
                        If you wish to remove data from the site, you can access the delete page from the navigation bar.
                    </Text>
                </p>
            </Box>
        </>


    )

}

export default useWelcome;