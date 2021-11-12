import { Container, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Navigation from '../Components/Shared/Navigation';
import useAuth from '../Hooks/useAuth';
import placeOrder from '../images/placeOrder.jpg';

const PurchaseOrder = () => {
    const { user } = useAuth();
    return (
        <>
            <Navigation />
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 5 }}>
                <Container>
                    <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                        <Grid item xs={12} md={6}>
                            <form>
                                <Box sx={{ margin: 'auto' }}>
                                    <Grid container spacing={5} sx={{ flexDirection: 'column' }}>
                                        <Grid item sm={12}>
                                            <TextField
                                                sx={{ width: '100%', margin: 'auto' }}
                                                type="text"
                                                label="Name"
                                                defaultValue={user?.displayName}
                                                variant="standard"
                                            />
                                        </Grid>
                                        <Grid item sm={12}>
                                            <TextField
                                                sx={{ width: '100%', margin: 'auto' }}
                                                type="text"
                                                label="Email"
                                                defaultValue={user?.email}
                                                variant="standard"
                                            />
                                        </Grid>
                                        <Grid item sm={12}>
                                            <TextField
                                                sx={{ width: '100%', margin: 'auto' }}
                                                type="text"
                                                label="Phone number"
                                                variant="standard"
                                            />
                                        </Grid>
                                        <Grid item sm={12}>
                                            <TextField
                                                sx={{ width: '100%', margin: 'auto' }}
                                                label="Description(optional)"
                                                multiline
                                                rows={4}
                                            />
                                        </Grid>
                                    </Grid>
                                </Box>
                            </form>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <img src={placeOrder} alt="" style={{ width: '100%' }} />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default PurchaseOrder;