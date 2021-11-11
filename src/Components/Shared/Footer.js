import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import logo from '../../images/logo.png';

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#303540', color: 'white', mt: 10, py: 8 }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item md={4}>
                        <Box>
                            <img src={logo} alt="" style={{ width: '230px' }} />
                        </Box>
                        <Box>
                            <Typography variant="body2">
                                The main component of a healthy environment for self esteem is that it needs be nurturing. It should provide unconditional warmth.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={4}>
                        <Typography sx={{ fontWeight: 500 }}>
                            Pages
                        </Typography>

                    </Grid>
                    <Grid item md={4}>
                        <Box sx={{ backgroundColor: 'rgba(94, 94, 94, 0.3)', display: 'flex', flexDirection: 'column', alignItems: 'center', py: 5, borderRadius: 4 }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', width: '280px' }}>
                                <Typography variant="h4">
                                    Newsletter
                                </Typography>
                                <Typography>
                                    Subscribe Our Newsletter
                                </Typography>
                                <TextField
                                    hiddenLabel
                                    id="filled-hidden-label-small"
                                    variant="filled"
                                    size="small"
                                    sx={{ backgroundColor: 'white', borderRadius: 1, mb: 1 }}
                                />
                                <Button variant="outlined" sx={{ color: 'white', borderColor: 'white' }}>Submit</Button>
                                <Typography variant="body2">
                                    Get started for 1 Month free trial No Purchace required.
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;