import { GetServerSideProps } from 'next';
import React, { useEffect, useState } from 'react';
import Router, { useRouter } from 'next/router';
import axios from 'axios';
import DefaultErrorPage from 'next/error'

export const useView = ({ data }: any) => {

    const [isLoading, setIsLoading] = useState(false);
    const spid = '4u05oslwfcvod6vu0rhhzotxk';

    const handleClick = async () => {

        setIsLoading(true);

        const axiosInstance = axios.create({
            headers: { 'Content-Type': 'text/plain' }
        });

        const res = await axiosInstance.post("/api/delete", spid);

        setIsLoading(false);

    }

    console.log(data);

    return (
        <>
            <button onClick={handleClick}>Delete</button>
        </>
    )

}

export default useView;