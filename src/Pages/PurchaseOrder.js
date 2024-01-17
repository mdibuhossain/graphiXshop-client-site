import { Alert, Button, CircularProgress, Container, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import useAuth from '../Hooks/useAuth';
import placeOrder from '../images/placeOrder.jpg';

const PurchaseOrder = () => {
    const [orderSuccess, setOrderSuccess] = useState(false);
    const { user, order } = useAuth();
    const date = new Date().toLocaleDateString();
    const initUserData = {
        userName: user?.displayName,
        email: user?.email,
        phone: '',
        description: '',
        status: 'pending'
    };
    const [userData, setUserData] = useState(initUserData);
    const handleOnBlue = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const updateUserData = { ...userData };
        updateUserData[field] = value;
        updateUserData["data"] = date;
        updateUserData["product"] = order;
        setUserData(updateUserData);
    }

    const handleSubmitOrder = async (e) => {
        fetch(`${import.meta.env.VITE_APP_SERVER_URL}/orders`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setOrderSuccess(true);
                }
            })
        e.preventDefault();
    }

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 5 }}>
                <Container>
                    <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                        {
                            order?._id ? <Grid item xs={12} md={6}>
                                <form onSubmit={handleSubmitOrder}>
                                    <Box sx={{ margin: 'auto' }}>
                                        <Grid container spacing={3} sx={{ flexDirection: 'column' }}>
                                            <Grid item sm={12}>
                                                <TextField
                                                    sx={{ width: '100%', margin: 'auto' }}
                                                    type="text"
                                                    label="Name"
                                                    defaultValue={user?.displayName}
                                                    variant="standard"
                                                    disabled
                                                />
                                            </Grid>
                                            <Grid item sm={12}>
                                                <TextField
                                                    sx={{ width: '100%', margin: 'auto' }}
                                                    type="text"
                                                    label="Email"
                                                    defaultValue={user?.email}
                                                    variant="standard"
                                                    disabled
                                                />
                                            </Grid>
                                            <Grid item sm={12}>
                                                <TextField
                                                    sx={{ width: '100%', margin: 'auto' }}
                                                    type="text"
                                                    label="Phone number"
                                                    name="phone"
                                                    variant="standard"
                                                    required
                                                    onBlur={handleOnBlue}
                                                />
                                            </Grid>
                                            <Grid item sm={12}>
                                                <TextField
                                                    sx={{ width: '100%', margin: 'auto' }}
                                                    type="text"
                                                    label="Date of order"
                                                    variant="standard"
                                                    defaultValue={date}
                                                    disabled
                                                />
                                            </Grid>
                                            <Grid item sm={12}>
                                                <TextField
                                                    sx={{ width: '100%', margin: 'auto' }}
                                                    label="Description(optional)"
                                                    name="description"
                                                    multiline
                                                    rows={4}
                                                    onBlur={handleOnBlue}
                                                />
                                            </Grid>
                                            <Grid item sm={12}>
                                                <Button type="submit" variant="contained">Submit</Button>
                                            </Grid>
                                            <Grid item sm={12}>
                                                {orderSuccess && <Alert severity="success">Order placed successfully!</Alert>}
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </form>
                            </Grid> : <CircularProgress />
                        }
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