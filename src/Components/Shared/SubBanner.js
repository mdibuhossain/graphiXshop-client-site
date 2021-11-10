import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const SubBanner = () => {
    return (
        <Container>
            <Box sx={{ backgroundColor: '#2231F6', color: 'white', position: 'relative', marginTop: '-35px', py: 4, px: 6 }}>
                <Typography variant="h6">
                    WELCOME
                </Typography>
                <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                    <Grid item md={6} xs={12}>
                        <Typography variant="h3">
                            We are doing the great<br /> creative things.
                        </Typography>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Typography variant="body1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit Nulla accumsan, metus ultrices eleifend gravi, Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default SubBanner;