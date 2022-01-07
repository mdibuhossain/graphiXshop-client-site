import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

const Footer = () => {
    const location = useLocation();
    console.log(location);
    if (!(location?.pathname?.includes('dashboard')))
        return (
            <Box sx={{ backgroundColor: '#303540', color: 'white', mt: 10, pt: 8 }}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item md={4} xs={12}>
                            <Box>
                                <img src={logo} alt="" style={{ width: '230px' }} />
                            </Box>
                            <Box>
                                <Typography variant="body2">
                                    A graphics card is an expansion card which generates a feed of output images to a display device. Frequently, these are advertised as discrete or dedicated graphics cards, emphasizing the distinction between these and integrated graphics.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <Typography sx={{ fontWeight: 500 }}>
                                Pages
                            </Typography>
                            <Box>
                                <Link to='/' style={{ color: 'white', textDecoration: 'none', display: 'block', marginBottom: '5px' }}>Home</Link>
                                <Link to='/explore' style={{ color: 'white', textDecoration: 'none', display: 'block', marginBottom: '5px' }}>Explore</Link>
                                <Link to='/dashboard' style={{ color: 'white', textDecoration: 'none', display: 'block', marginBottom: '5px' }}>Dashboard</Link>
                            </Box>
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <Box sx={{ backgroundColor: 'rgba(94, 94, 94, 0.3)', display: 'flex', flexDirection: 'column', alignItems: 'center', py: 5, borderRadius: 4 }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', width: '250px' }}>
                                    <Typography variant="h4">
                                        Newsletter
                                    </Typography>
                                    <Typography sx={{ mb: 1 }}>
                                        Subscribe Our Newsletter
                                    </Typography>
                                    <TextField
                                        hiddenLabel
                                        id="filled-hidden-label-small"
                                        variant="filled"
                                        size="small"
                                        sx={{ backgroundColor: 'white', borderRadius: 1, mb: 1 }}
                                    />
                                    <Button variant="outlined" sx={{ color: 'white', borderColor: 'white', mb: 1 }}>Submit</Button>
                                    <Typography variant="body2">
                                        Get started for 1 Month free trial No Purchace required.
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
                <Box sx={{ backgroundColor: 'rgba(20, 21, 22, 0.5)', mt: 5, py: 2, textAlign: 'center', color: 'rgb(198, 198, 198)' }}>
                    <Typography>Copyright © 2021 graphiXshop LTD. All rights reserved.</Typography>
                </Box>
            </Box>
        );
    return null;
};

export default Footer;