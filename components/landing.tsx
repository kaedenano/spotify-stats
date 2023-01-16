import { signIn } from 'next-auth/react'
import { Heading, Box, Button, Text, VStack, Flex, Container, Image } from '@chakra-ui/react';
import { Center, HStack } from '@chakra-ui/layout';
import { motion } from "framer-motion";
import { ScrollImages } from './scrollImages';
// import { LoginButton } from './loginButton';

const handleLogin = () => {
    signIn("spotify", { callbackUrl: process.env.REDIRECT_URI! + '/stats' });
}

export const welcome = () => {

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
                    fontSize="2xl"
                    padding='8'
                    margin='8'
                    background='brand.100'
                    rounded='full'
                    color='white'>
                    Login on Spotify
                </Button>
                {/* <LoginButton/> */}
                <p>
                    <Text
                        as='i'
                        color={'gray.400'}
                        mx='10'>
                        Get statistics about your top artists, songs, and genres from Spotify. Updated daily. Easy to share.
                    </Text>
                </p>
            </Box>

            <Box
                marginTop={32}
            // mx='100px'
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
                mx={{ lg: '500px', sm: '50px' }}
                my={32}
            >
                <p>
                    <Text
                        as='i'
                        color={'gray.400'}
                    >
                        Get stLorem ipsum dolor sit amet,
                        consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                        atistics about your top artists, songs, and genres from Spotify.
                        Updated daily. Easy to share.
                    </Text>
                </p>
            </Box>
        </>


    )

}

export default welcome;