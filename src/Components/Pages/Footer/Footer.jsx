
import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <Container>
            <Box
                sx={{
                    width: "100%",
                    mt: "100px",
                    height: "auto",
                    paddingTop: "1rem",
                    paddingBottom: "1rem",
                    bgcolor: "#7AB259"
                }}
            >
                <Container maxWidth="lg">
                    <Grid container direction="column" alignItems="center">
                        <Grid item xs={12}>
                            <Box
                                sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }}
                            >
                                <Link to="/">
                                    <img
                                        src='https://i.ibb.co/JsvBDwD/logo.png'
                                        alt=''
                                        style={{
                                            width: '150px',
                                        }}
                                    />
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography color="textSecondary" variant="subtitle1">
                                Copyright © 2023 Creative Agency
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Container>
    );
};

export default Footer;