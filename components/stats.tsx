import { Button, Container, SimpleGrid, Text, Image } from '@chakra-ui/react'
export default function stats(data: any) {
    return (
        <>
            <Button
                onClick={handleClick}
                fontSize='32'
                background={'blue.400'}
                w='96'
                h='32'
                m='10'
                rounded='full'
            >Share on Twitter</Button>
            <img src={artists.items[0].images[0].url}></img>
            <img src={artists.items[1].images[0].url}></img>
            <img src={artists.items[2].images[0].url}></img>
            <img src={artists.items[3].images[0].url}></img>
            <img src={artists.items[4].images[0].url}></img>
            <img src={artists.items[5].images[0].url}></img>
            <img src={artists.items[6].images[0].url}></img>

            <Container
                my='20'
                // bg='blue.600'
                maxW='1000px'>
                <Text
                    as='i'
                    fontSize={'96'}
                    color='white' >
                    Top Artists
                </Text>

                <SimpleGrid
                    columns={2}
                    spacing={10}
                    my='3'
                >
                    <Image rounded='2xl' src={data.artist[0].images[0].url} />
                    <Image rounded='2xl' src={data.artist[1].images[0].url} />
                    <Image rounded='2xl' src={data.artist[2].images[0].url} />
                    <Image rounded='2xl' src={data.artist[3].images[0].url} />
                    <Image rounded='2xl' src={data.artist[4].images[0].url} />
                    <Image rounded='2xl' src={data.artist[5].images[0].url} />
                    <Image rounded='2xl' src={data.artist[6].images[0].url} />
                    <Image rounded='2xl' src={data.artist[7].images[0].url} />
                </SimpleGrid>
                <Text
                    as='i'
                    fontSize={'96'}
                    color='white' >
                    Top Tracks
                </Text>

                <SimpleGrid
                    columns={2}
                    spacing={10}
                    my='5'
                >
                    <Image rounded='2xl' src={data.track[0].album.images[0].url} />
                    <Image rounded='2xl' src={data.track[1].album.images[0].url} />
                    <Image rounded='2xl' src={data.track[2].album.images[0].url} />
                    <Image rounded='2xl' src={data.track[3].album.images[0].url} />
                    <Image rounded='2xl' src={data.track[4].album.images[0].url} />
                    <Image rounded='2xl' src={data.track[5].album.images[0].url} />
                    <Image rounded='2xl' src={data.track[6].album.images[0].url} />
                    <Image rounded='2xl' src={data.track[7].album.images[0].url} />
                </SimpleGrid>

            </Container>
        </>
    )
}
