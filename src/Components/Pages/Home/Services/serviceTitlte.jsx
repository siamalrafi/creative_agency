import React from 'react';
import { styled } from '@mui/material/styles';


const ServieTitle = () => {

    const Text = styled('div')(({ theme }) => ({
        color: theme.palette.text.primary,
        fontSize: '40px',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '10px'
    }));

    const BoldText = styled("h1")(({ theme }) => ({
        fontSize: "50px",
        display: "inline-block",
        color: theme.palette.primary.green,
    }))



    return (
        <div>
            <Text textAlign={"center"} mt={2}>
                Provide Awesome <BoldText>Services</BoldText>
            </Text>
        </div>
    );
};

export default ServieTitle;