import { Flex, Box, Spacer, VStack, TableContainer, Table, Button, Container, SimpleGrid, Text, Image, HStack } from '@chakra-ui/react'

export default function stats({ data }: any) {
    console.log(data);
    return (
        <>
            <Container
                my='20'
                maxW='600px'
            // background='blue.500'
            >
                <Box justifyContent='center' alignItems='center'>
                    <HStack
                        mb='10'
                        spacing='32'>
                        <Image
                            rounded='full'
                            w='32'
                            src={data.artist[2].images[0].url} />
                        <Text
                            as='b'
                            fontSize={32}
                        >aoi</Text>

                    </HStack>
                </Box>

                <Text
                    as='i'
                    fontSize={'32'}
                    color='white' >
                    Top Artists
                </Text>
                <VStack
                    mt='2'
                    justify='center'>
                    <Image
                        rounded='2xl'
                        src={data?.artist[0]?.images[0]?.url}
                        fallbackSrc="https://via.placeholder.com/100?text=fallbackSrc" />
                    <Text as='b'>{data?.artist[0]?.name}</Text>
                    <Spacer />
                    <Image
                        rounded='2xl'
                        src={data.artist[1].images[0].url} />
                    <Text as='b'>{data?.artist[1]?.name}</Text>
                    <Spacer />
                    <Image
                        rounded='2xl'
                        src={data.artist[2].images[0].url} />
                    <Text as='b'>{data?.artist[2]?.name}</Text>
                </VStack>


                <SimpleGrid
                    columns={3}
                    spacing={3}
                    my='20'>
                    <Image rounded='2xl' src={data.artist[3].images[0].url} />
                    <Image rounded='2xl' src={data.artist[4].images[0].url} />
                    <Image rounded='2xl' src={data.artist[5].images[0].url} />
                    <Image rounded='2xl' src={data.artist[6].images[0].url} />
                    <Image rounded='2xl' src={data.artist[7].images[0].url} />
                    <Image rounded='2xl' src={data.artist[8].images[0].url} />

                </SimpleGrid>
                <Text
                    as='i'
                    fontSize={'32'}
                    color='white' >
                    Top Tracks
                </Text>
                <VStack
                    mt='2'
                    justify='center'>
                    <Image
                        rounded='2xl'
                        src={data?.track[0]?.album.images[0]?.url}
                        fallbackSrc="https://via.placeholder.com/100?text=fallbackSrc" />
                    <Text as='b'>{data?.track[0]?.name}</Text>
                    <Spacer />
                    <Image
                        rounded='2xl'
                        src={data?.track[1]?.album.images[0]?.url}
                        fallbackSrc="https://via.placeholder.com/100?text=fallbackSrc" />
                    <Text as='b'>{data?.track[1]?.name}</Text>
                    <Spacer />
                    <Image
                        rounded='2xl'
                        src={data?.track[3]?.album.images[0]?.url}
                        fallbackSrc="https://via.placeholder.com/100?text=fallbackSrc" />
                    <Text as='b'>{data?.track[3]?.name}</Text>
                </VStack>

                <SimpleGrid
                    columns={3}
                    spacing={3}
                    my='20'>
                    <Image rounded='2xl' src={data.track[0].album.images[0].url} />
                    <Image rounded='2xl' src={data.track[1].album.images[0].url} />
                    <Image rounded='2xl' src={data.track[2].album.images[0].url} />
                    <Image rounded='2xl' src={data.track[3].album.images[0].url} />
                    <Image rounded='2xl' src={data.track[4].album.images[0].url} />
                    <Image rounded='2xl' src={data.track[5].album.images[0].url} />
                </SimpleGrid>

                <Flex
                    as="header"
                    position="fixed"
                    backgroundColor="rgba(255, 255, 255, 0.8)"
                    backdropFilter="saturate(180%) blur(5px)"
                    w="100%"></Flex>
                    
                    </Container>
        </>
    )
}
