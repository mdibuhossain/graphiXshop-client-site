import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

export default function Navigation() {
    const { user, logOut } = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to='/' style={{ color: 'inherit', textDecoration: 'none' }}>
                            GraphiXshop
                        </Link>
                    </Typography>
                    <Link to='/explore' style={{ color: 'inherit', textDecoration: 'none' }}>
                        <Button color="inherit">Products</Button>
                    </Link>
                    {
                        user?.email ?
                            <Button onClick={logOut} color="inherit">Log out</Button> :
                            <Link to='/login' style={{ color: 'inherit', textDecoration: 'none' }}>
                                <Button color="inherit">Login</Button>
                            </Link>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
}
