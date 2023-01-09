import { signIn } from 'next-auth/react'
import { Heading, Box, Button, Text, VStack, Flex, Container } from '@chakra-ui/react';
import { Center } from '@chakra-ui/layout';

const handleLogin = () => {
    signIn("spotify", { callbackUrl: "http://localhost:3000/stats" });
}

export const welcome = () => {

        return (
        <Container>
            <Box textAlign='center'>
                <Heading as='h1' size='4xl'>
                    Share Statistics
                </Heading>
                <Heading as='h1' size='4xl'>
                    with Other Users
                </Heading>
                <Button onClick={handleLogin} shadow='md' padding='7' margin='5'background='brand.100' rounded='full' color='white'>Login on Spotify</Button>
            </Box>
            <Text as='i' fontStyle='bold'>Get statistics about your top artists, songs, and genres from Spotify. Updated daily. Easy to share.</Text>
        </Container>
    )

}

export default welcome;