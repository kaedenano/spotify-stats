import { GetServerSideProps } from 'next';
import React, { useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/exnavbar';
import { Container, Box, Grid, GridItem, SimpleGrid, Text, Image } from '@chakra-ui/react'

export const view = ({ data }: any) => {

    console.log(data);

    return (
        <>
            <Navbar />

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

export async function getServerSideProps(ctx: any) {

    const currentUrl = ctx.params.uuid;

    const axiosInstance = axios.create({
        headers: { 'Content-Type': 'text/plain' }
    });

    const data = await axiosInstance.post(process.env.NEXT_PUBLIC_REDIRECT_URI + '/api/select', currentUrl)
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(error => {
            console.log(error);
        });

    if (data == 'not found') {
        return {
            notFound: true
        };
    }

    return { props: { data } };

}


export default view;