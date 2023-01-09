import { signIn } from 'next-auth/react'
import { Heading, Box, Button, Text, Center, VStack, Flex } from '@chakra-ui/react';

const handleLogin = () => {
    signIn("spotify", { callbackUrl: "http://localhost:3000/stats" });
}

export const welcome = () => {

    return (
        <Box rounded='3xl' padding='10' margin='10' textAlign='center'>
            <Text as='b' fontSize='100px'>Share Statistics</Text>
            <Text as='b' fontSize='100px'>with Other Users</Text>
            <Button rounded='full' padding='7' background="green.400" color="white" onClick={handleLogin}>Login on Spotify</Button>
            <Text as='i' fontStyle='bold'>Get statistics about your top artists, songs, and genres from Spotify. Updated daily. Easy to share.</Text>
        </Box>
    )
}

export default welcome;