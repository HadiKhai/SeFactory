import React from 'react';
import {Grid, Link, Typography} from "@mui/material";

const Footer = () => {
    return (
        <Grid container style={{backgroundColor:'black',padding:'calc(15vmax / 10) 7vw'}}>
            <Grid item xs={12} sm={12} md={3} lg={3}>
                <Link href="#" marginLeft={4}
                      style={{
                          textUnderlineOffset: '0.2em'
                      }}
                >Privacy Policy</Link>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <Typography variant="h6" color="white" textAlign={"center"} fontWeight={"bold"}>
                    Copyright © 2021 SE Factory SAL. All Rights Reserved.
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3}>

            </Grid>
        </Grid>
    );
};

export default Footer;