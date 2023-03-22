import React from 'react';
import { Box, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CreativeCard from "../../../CreativeCard/CreativeCard";
import { Grid } from '@mui/material';
import { cardData } from './cardData';




const RightTab = styled("h2")(({ theme }) => ({
    textAlign: 'right',
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(8),
    display: "inline-block",
    fontSize: "40px"
}));

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


const OurWorks = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        console.log(newValue);
        setValue(newValue);
    };


    return (
        <Box sx={{ my: 5, mb: 10 }}>
            {/* heading section */}
            <Text textAlign={"center"} mt={2}>
                Provide Awesome <BoldText>Services</BoldText>
            </Text>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 5
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 2,
                    }}
                >



                    <RightTab textAlign="right">

                        <Tabs
                            value={value}
                            onChange={handleChange}
                            centered
                            sx={{
                                '& .MuiTabs-indicator': {
                                    display: 'none',
                                },
                                '& .Mui-selected': {
                                    color: 'primary.green',
                                    fontWeight: 'bold',
                                },
                                '& .MuiButtonBase-root': {
                                    textTransform: 'capitalize',
                                },
                            }}
                        >
                            <Tab label='All' />
                            <Tab label='Web Design' />
                            <Tab label='Mobile App' />
                        </Tabs>
                        <Box>
                            <IconButton
                                sx={{
                                    border: theme => `1px solid ${value === 0 ? '#959EAD' : theme.palette.primary.main}`,
                                    mr: 2,
                                    color: 'primary.main'
                                }}
                                onClick={() => setValue(value - 1)}
                                disabled={value === 0}
                            >
                                <ArrowBackIcon />
                            </IconButton>
                            <IconButton
                                sx={{
                                    border: theme => `1px solid ${value === 2 ? '#959EAD' : theme.palette.primary.main}`,
                                    color: 'primary.main'
                                }}
                                onClick={() => setValue(value + 1)}
                                disabled={value === 2}
                            >
                                <ArrowBackIcon
                                    sx={{
                                        transform: 'rotate(180deg)',
                                    }}
                                />
                            </IconButton>
                        </Box>




                    </RightTab>




                </Box>
            </Box>

            {/*  card section */}

            <Grid container spacing={3} justifyContent='center'>
                {cardData[value].map((image) => (
                    <Grid item>
                        <CreativeCard image={image} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default OurWorks;
