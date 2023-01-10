import { signIn } from 'next-auth/react'
import { Heading, Box, Button, Text, VStack, Flex, Container } from '@chakra-ui/react';
import { Center, HStack } from '@chakra-ui/layout';
import { motion } from "framer-motion";
import { ScrollImages } from './scrollImages';

const handleLogin = () => {
    signIn("spotify", { callbackUrl: "http://localhost:3000/stats" });
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
                <p>
                    <Text as='i'>
                        Get statistics about your top artists, songs, and genres from Spotify. Updated daily. Easy to share.
                    </Text>
                </p>
            </Box>

            <Box
                marginTop={32}
            >
                <ScrollImages
                    images={[
                        <img src='images/1.jfif' />, 
                        <img src='images/2.jfif' />, 
                        <img src='images/3.jfif' />, 
                        <img src='images/4.jfif' />, 
                        <img src='images/5.jfif' />, 
                        <img src='images/6.jfif' />, 
                        <img src='images/7.jfif' />, 
                    ]} />
            </Box>





            {/* <Box marginTop={'150'}
                textAlign={'center'}
            >
                <Flex justifyContent={'center'} alignContent={'center'}>
                    <motion.div
                        animate={{
                            x: [0, 100, 50]
                        }}>
                        <HStack spacing={10}>

                            <img src='images/1.jfif' />
                            <img src='images/2.jfif' />
                            <img src='images/4.jfif' />
                            <img src='images/5.jfif' />
                            <img src='images/6.jfif' />
                            <img src='images/7.jfif' />
                        </HStack>
                    </motion.div>
                </Flex>
            </Box> */}

        </>


    )

}

export default welcome;