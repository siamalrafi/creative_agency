import React from 'react';
import { styled } from '@mui/material/styles';
import { Button, Grid, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

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


const Item = styled(Paper)(({ theme }) => ({
    marginTop: "50px",
    padding: theme.spacing(1),
    textAlign: 'center',
}));


const Contact = () => {

    const handleSubmit = (event) => {
        event.preventdefault()
        const form = event.target;
        const name = form.name.value;
        console.log(name);
    }
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

            <Box component="form" noValidate onSubmit={handleSubmit}   >
                <Grid direction="column"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }} container columns={14}>
                    <Grid item  >
                        <Item>
                            <TextField name='name' label="Name" type="text" variant="outlined" />
                        </Item>
                    </Grid>
                    <Grid item  >
                        <Item>
                            <TextField name='email' label="Email" type="email" variant="outlined" />
                        </Item>
                    </Grid>
                    <Grid item   >
                        <Item>
                            <TextField name='subject' label="Subject" type="text" sx={{
                                height: "50px", width: "300px", margin: "5px"
                            }} variant="outlined" />
                        </Item>
                        <Item>
                            <TextField name='massage' label="Massage" type="text" sx={{
                                height: "50px", width: "300px", margin: "5px"
                            }} variant="outlined" />
                        </Item>
                    </Grid>
                    <Button type='submit' variant="contained" color='success' sx={{ margin: "40px" }}>
                        Disable elevation
                    </Button>
                </Grid>
            </Box>
        </div>
    );
};

export default Contact;