import { Grid } from '@mui/material';
import React from 'react';
import ServieTitle from "./serviceTitlte";
import Service from './SingleService'; 
import OurWorks from "../OurWorks/OurWorks";



const Services = () => { 
    const serviceImages = [
        'https://i.ibb.co/HNhykGp/iphone-1.png',
        'https://i.ibb.co/r0gHkvM/color-palette-1.png',
        'https://i.ibb.co/CvQwzKC/coding-1.png',
        'https://i.ibb.co/HNhykGp/iphone-1.png',
        'https://i.ibb.co/r0gHkvM/color-palette-1.png',
        'https://i.ibb.co/CvQwzKC/coding-1.png',
    ];

    return (
        <div>
            <ServieTitle />
            {/* ----------- SingleService ----------- */}
            {/* <SingleService /> */}

            <Grid container spacing={2}>
                {serviceImages.map((image, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Service image={image} key={index} />
                    </Grid>
                ))}
            </Grid>

<OurWorks/>

        </div>
    );
};

export default Services;