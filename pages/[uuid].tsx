import { GetServerSideProps } from 'next';
import React, { useEffect } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios';

import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Stats from '../components/stats';
import { Button, Flex, Container, Box, Grid, GridItem, SimpleGrid, Text, Image } from '@chakra-ui/react'

export const view = ({ data }: any) => {

    console.log(data);

    return (
        <>
            <Head><title>Spotify Stats</title></Head>
            <Navbar />
            <Stats data={data} />
            <Flex bottom={10} position="sticky" justify='center' align='center'>
                <Link href='/'>
                    <Button
                        fontSize='2xl'
                        w='72'
                        h='20'
                        rounded='full'
                        shadow='lg'
                        bg='brand.100'
                    >Back to Top</Button>
                </Link>
            </Flex>
            <Footer />
        </>
    )

}

export async function getServerSideProps(ctx: any) {

    const currentUrl = ctx.params.uuid;

    const axiosInstance = axios.create({
        headers: { 'Content-Type': 'text/plain' }
    });

    const data = await axiosInstance.post(process.env.NEXT_PUBLIC_REDIRECT_URI + '/api/select', currentUrl)
        .then(res => {
            console.log(res.data);
            return res.data;
        })
        .catch(error => {
            console.log(error);
            return 'not found'
        });

    if (data == 'not found') {
        return {
            notFound: true
        };
    }

    return { props: { data } };

}


export default view;