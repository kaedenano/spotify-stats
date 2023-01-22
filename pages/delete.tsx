import { GetServerSideProps } from 'next';
import React, { useEffect, useState } from 'react';
import Router, { useRouter } from 'next/router';
import { getSession } from 'next-auth/react'

import axios from 'axios';
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import DefaultErrorPage from 'next/error'

import { Container, Box, Button, Text } from '@chakra-ui/react'

export const useView = ({ res }: any) => {

    const [isLoading, setIsLoading] = useState(false);
    const spid = res?.user?.sub;

    const handleClick = async () => {

        setIsLoading(true);

        const axiosInstance = axios.create({
            headers: { 'Content-Type': 'text/plain' }
        });

        await axiosInstance.post("/api/delete", spid);

        setIsLoading(false);

    }

    return (
        <>
            <Navbar />
            <Container maxW='500px'>
                <Box my='200px' textAlign='center'>
                    <Text fontSize='2xl'>
                        Do you want to delete data?
                    </Text>
                    <Text color='gray.500' mb='5'>
                        Delete personalised pages and retrieved data from the server.
                    </Text>
                    <Button
                        rounded='full'
                        w='24'
                        p='5'
                        onClick={handleClick}
                        bg='red.500'
                    >Delete</Button>
                </Box>
            </Container>
            <Footer />
        </>
    )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {

    const res = await getSession(ctx);
    console.log(res);
    return { props: { res } };

}

export default useView;