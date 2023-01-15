import { GetServerSideProps } from 'next';
import React from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export const view = ({ currentUrl }) => {

    const uuid = currentUrl;
    // console.log(uuid)

    return (
        <>

            <h1 color='white'>{uuid}</h1>

        </>
    )

}

export async function getServerSideProps(ctx) {

    const currentUrl = ctx.params.uuid;

    const axiosInstance = axios.create({
        headers: { 'Content-Type':  'text/plain' }
    });

    axiosInstance.post('http://localhost:3000/api/select', currentUrl)
        .then(response => {
            console.log('running DB SELECT');
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        });


    return { props: { currentUrl } };
}


export default view;