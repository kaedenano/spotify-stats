import { GetServerSideProps } from 'next';
import React, { useEffect } from 'react';
import axios from 'axios';

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
            <img src={data.artist[0].images[0].url}/>
            <img src={data.artist[1].images[0].url}/>
            <img src={data.artist[2].images[0].url}/>
            <img src={data.artist[3].images[0].url}/>
            <img src={data.artist[4].images[0].url}/>
            <img src={data.artist[5].images[0].url}/>
            <img src={data.artist[6].images[0].url}/>
            <img src={data.artist[7].images[0].url}/>
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