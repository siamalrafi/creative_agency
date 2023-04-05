import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const datas = useLoaderData();
    const data = datas.data[0];

    console.log(data);


    return (
        <div>
            <h1>ServiceDetails</h1>
            <h1>ServiceDetails</h1>
            <h1>ServiceDetails</h1>
        </div>
    );
};

export default ServiceDetails;