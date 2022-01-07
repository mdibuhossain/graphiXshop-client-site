import React, { useState } from 'react';
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link, useLocation, useHistory } from 'react-router-dom';
import Navigation from '../Components/Shared/Navigation';
import registerImg from '../images/register.jpg';
import useAuth from '../Hooks/useAuth';

const Register = () => {

    const [userData, setUserData] = useState({});
    const { user, isLoading, error, userRegister } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleData = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        const newData = { ...userData };
        newData[fieldName] = fieldValue;
        setUserData(newData);
    }

    const handleLogIn = (e) => {
        if (userData?.password === userData?.password2)
            userRegister(userData?.name, userData?.email, userData?.password, location, history)
        e.preventDefault();
    }

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Container sx={{ mt: 10 }}>
                    <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                        <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                            <form onSubmit={handleLogIn}>
                                <Typography variant="body1" sx={{ mb: 3, fontWeight: 600 }}>
                                    Please Register
                                </Typography>
                                <TextField
                                    id="standard-basic"
                                    label="Enter your Name"
                                    type="text"
                                    name="name"
                                    variant="standard"
                                    sx={{ width: 1, mb: 2 }}
                                    onChange={handleData}
                                />
                                <TextField
                                    id="standard-basic"
                                    label="Enter your Email"
                                    type="email"
                                    name="email"
                                    variant="standard"
                                    sx={{ width: 1, mb: 2 }}
                                    onChange={handleData}
                                />
                                <TextField
                                    id="standard-basic"
                                    name="password"
                                    type="password"
                                    label="Enter your Password"
                                    variant="standard"
                                    sx={{ width: 1, mb: 2 }}
                                    onChange={handleData}
                                />
                                <TextField
                                    id="standard-basic"
                                    name="password2"
                                    type="password"
                                    label="Re-enter your Password"
                                    variant="standard"
                                    sx={{ width: 1, mb: 5 }}
                                    onChange={handleData}
                                />
                                <Button type="submit" variant="contained" sx={{ width: 1 }}>Register</Button>
                                <Link to='/login' style={{ textDecoration: 'none' }}>
                                    <Button variant="text" sx={{ width: 1 }}>Already have an account?</Button>
                                </Link>
                            </form>
                            {isLoading && <CircularProgress />}
                            {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                            {error && <Alert severity="error">{error}</Alert>}
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <img src={registerImg} alt="" style={{ width: '100%' }} />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default Register;