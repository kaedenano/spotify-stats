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
            <h1 color='white'>aaa</h1>
        </>
    )

}

export async function getServerSideProps(ctx) {

    const currentUrl = ctx.params.uuid;

    const axiosInstance = axios.create({
        headers: { 'Content-Type': 'text/plain' }
    });

    const data = await axiosInstance.post('http://localhost:3000/api/select', currentUrl)
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(error => {
            console.log(error);
        });
    if (data == 'not found')  {
        return {
            notFound: true
        };
    }

    return { props: { data } };

}


export default view;