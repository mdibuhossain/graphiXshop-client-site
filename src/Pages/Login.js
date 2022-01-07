import React, { useState } from 'react';
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link, useLocation, useHistory } from 'react-router-dom';
import Navigation from '../Components/Shared/Navigation';
import loginImg from '../images/login.jpg';
import useAuth from '../Hooks/useAuth';

const Login = () => {

    const [userData, setUserData] = useState({});
    const { user, logIn, isLoading, error } = useAuth();
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
        logIn(userData?.email, userData?.password, location, history)
        e.preventDefault();
    }

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Container sx={{ mt: 10 }}>
                    <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                        <Grid item xs={12} md={6} sx={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center'
                        }} >
                            <form onSubmit={handleLogIn}>
                                < Typography variant="body1" sx={{ mb: 3, fontWeight: 600 }}>
                                    Login
                                </Typography>
                                <TextField
                                    id="standard-basic"
                                    label="Your Email"
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
                                    label="Your Password"
                                    variant="standard"
                                    sx={{ width: 1, mb: 5 }}
                                    onChange={handleData}
                                />
                                <Button type="submit" variant="contained" sx={{ width: 1 }}>Login</Button>
                                <Link to='/register' style={{ textDecoration: 'none' }}>
                                    <Button variant="text" sx={{ width: 1 }}>Don't have an account?</Button>
                                </Link>
                            </form>
                            {isLoading && <CircularProgress />}
                            {user?.email && <Alert severity="success">Login successfully!</Alert>}
                            {error && <Alert severity="error">{error}</Alert>}
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <img src={loginImg} alt="" style={{ width: '100%' }} />
                        </Grid>
                    </Grid>
                </Container>
            </Box >
        </>
    );
};
export default Login;