import { GetServerSideProps } from 'next';
import React, { useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import axios from 'axios';
import DefaultErrorPage from 'next/error'

export const view = ({ data }) => {

    console.log(data);

    // const router = useRouter();

    // if (typeof data === "string") {
    //     router.push('/404');
    //     // return (<DefaultErrorPage statusCode={404} />);
    // }

    return (
        <>
        </>
    )

}

export async function getServerSideProps(ctx) {

    const spid = '4u05oslwfcvod6vu0rhhzotxk';

    const axiosInstance = axios.create({
        headers: { 'Content-Type': 'text/plain' }
    });

    const data = await axiosInstance.post('http://localhost:3000/api/delete', spid)
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(error => {
            console.log(ctx);
        });

    return { props: { data } };

}


export default view;