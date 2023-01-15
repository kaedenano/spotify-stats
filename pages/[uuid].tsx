import { GetServerSideProps } from 'next';
import React from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export const view = ({ data }) => {

    console.log(data);

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

    return { props: { data } };


}


export default view;