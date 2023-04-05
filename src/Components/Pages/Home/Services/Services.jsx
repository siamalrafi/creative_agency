import { Grid } from '@mui/material';
import React from 'react';
import ServieTitle from "./serviceTitlte";
import Service from './SingleService';
import OurWorks from "../OurWorks/OurWorks";
import { useQuery } from '@tanstack/react-query';



const Services = () => {
    // const OurServices = [
    //     {
    //         "name": "Web development",
    //         "description": "Welcome to our web development services! We are a team of skilled and experienced web developers dedicated to delivering top-notch solutions for all your online needs. Our services encompass a wide range of web development solutions tailored to suit your unique requirements.",
    //         "price": 500,
    //         "status": "available",
    //         "categories": "WebsiteDesignDevelopment",
    //         "url": "https://i.ibb.co/HNhykGp/iphone-1.png"
    //     },
    //     {
    //         "name": "Web & Mobile design",
    //         "description": "Web and mobile design are two interconnected areas of design that focus on creating visually appealing and user-friendly digital experiences. Web design involves designing websites that are accessible through web browsers, while mobile design involves creating interfaces for smartphones and tablets.",
    //         "price": 500,
    //         "status": "available",
    //         "categories": "WebMobiledesign",
    //         "url": "https://i.ibb.co/r0gHkvM/color-palette-1.png"
    //     },
    //     {
    //         "name": "UX/UI Design",
    //         "description": "Web and mobile design are two interconnected areas of design that focus on creating visually appealing and user-friendly digital experiences. Web design involves designing websites that are accessible through web browsers, while mobile design involves creating interfaces for smartphones and tablets.",
    //         "price": 500,
    //         "status": "available",
    //         "categories": "UX/UIDesign",
    //         "url": "https://i.ibb.co/CvQwzKC/coding-1.png"
    //     },
    //     {
    //         "name": "Digital Marketing",
    //         "description": "Digital marketing is the practice of promoting products, services, or brands through digital channels such as search engines, social media, email, and mobile apps. It involves using various digital technologies and tactics to reach and engage with a target audience and drive desired actions such as sales, lead generation, or brand awareness.",
    //         "price": 500,
    //         "status": "available",
    //         "categories": "DigitalMarketing",
    //         "url": "https://i.ibb.co/hfXvSXv/digitalmarketing.png"
    //     },
    //     {
    //         "name": "Branding & Design",
    //         "description": "Branding and design are two closely related fields that focus on creating a distinctive identity for businesses or organizations. As a service provider, branding and design companies work with clients to develop a unique brand image and visual identity that reflects their values, mission, and target audience.",
    //         "price": 500,
    //         "status": "available",
    //         "categories": "BrandingDesign",
    //         "url": "https://i.ibb.co/Xbb14pz/Branding-Design.jpg"
    //     },
    //     {
    //         "name": "Content Creation",
    //         "description": "Content creation is the process of producing valuable and relevant information that engages and informs a specific target audience. The content can take many forms, such as articles, videos, social media posts, infographics, podcasts, and more. The goal of content creation is to attract and retain an audience by delivering content that is informative, entertaining, or both. The process typically involves researching, planning, creating, and distributing content across various channels to reach the intended audience.",
    //         "price": 500,
    //         "status": "available",
    //         "categories": "ContentCreation",
    //         "url": "https://i.ibb.co/DQPkgYq/Content-Creation.jpg"
    //     }
    // ];

    // you should fetch data from server 
    // http://localhost:5000/api/v1/services


    const { data: OurServices = [], refetch, isLoading } = useQuery({
        queryKey: ['OurServices'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/api/v1/services`)
            const data = await res.json();
            return data
        }
    });

    if (isLoading) {
        return <h1 style={{ textAlign: "center" }}>Data is loading....</h1>
    }



    return (
        <div>
            <ServieTitle />

            <Grid container spacing={2}>
                {OurServices.data?.map((Services, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Service Services={Services} key={index} />
                    </Grid>
                ))}
            </Grid>
            <OurWorks />

        </div>
    );
};

export default Services;