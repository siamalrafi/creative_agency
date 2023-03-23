import React from 'react';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';


const Text = styled('div')(({ theme }) => ({
    color: theme.palette.text.primary,
    fontSize: '40px',
    fontWeight: 'bold',
    textAlign: 'center',
}));

const BoldText = styled("h1")(({ theme }) => ({
    fontSize: "50px",
    display: "inline-block",
    color: theme.palette.primary.green,
}))



const Contact = () => {




    return (
        <div>
            <Text textAlign={"center"}  >
                Get In <BoldText>Touch!</BoldText>
            </Text>

            <Text textAlign={"center"}>
            </Text>

            <Typography variant="h4" textAlign={"center"} component="h2">
                We Are Looking Forward To Start A Project With You!
            </Typography>


            <TextField
                id="outlined-uncontrolled"
                label="Uncontrolled"
                defaultValue="foo"
            />


        </div>
    );
};

export default Contact;