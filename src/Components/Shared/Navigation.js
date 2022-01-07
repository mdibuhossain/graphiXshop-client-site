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
import { makeStyles } from '@mui/styles';
import { Avatar, Divider, Drawer, Fade, List, ListItem, ListItemText, MenuItem, MenuList, Paper, Popover, Popper, useTheme } from '@mui/material';

export default function Navigation() {
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleProfileMenu = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((previousOpen) => !previousOpen);
    };
    const handleClose = () => {
        setOpen(false);
    }

    const { user, logOut } = useAuth();
    const theme = useTheme();
    const useStyle = makeStyles({
        navItem: {
            color: 'white',
            textDecoration: 'none'
        },
        mobileNavItem: {
            color: 'black',
            textDecoration: 'none'
        },
        navContainer: {
            display: 'flex',
            [theme.breakpoints.down('md')]: {
                display: 'none'
            }
        },
        navIcon: {
            [theme.breakpoints.up('md')]: {
                display: 'none'
            }
        }
    })
    const { navItem, navContainer, navIcon, mobileNavItem } = useStyle();

    const list = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
        >
            <List>
                <ListItem button>
                    <ListItemText >
                        <Link className={mobileNavItem} to='/explore' >
                            Products
                        </Link>
                    </ListItemText>
                </ListItem>
                <Divider />
                {user?.email ? <Box>
                    <ListItem button>
                        <ListItemText >
                            <Link className={mobileNavItem} to='/dashboard' >
                                Dashboard
                            </Link>
                        </ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemText >
                            <Button onClick={logOut} color="inherit">Log out</Button>
                        </ListItemText>
                    </ListItem>
                    <Divider />
                </Box> :
                    <ListItem button>
                        <ListItemText >
                            <Link to='/login' className={mobileNavItem}>
                                <Button color="inherit">Login</Button>
                            </Link>
                        </ListItemText>
                    </ListItem>
                }
            </List>
        </Box >
    );

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        {/* <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            className={navIcon}
                            sx={{ mr: 2 }}
                            onClick={() => setState(true)}
                        >
                            <MenuIcon />
                        </IconButton> */}
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Link to='/' style={{ color: 'inherit', textDecoration: 'none' }}>
                                GraphiXshop
                            </Link>
                        </Typography>
                        <Box>
                            <Link to='/explore' className={navItem}>
                                <Button color="inherit">Products</Button>
                            </Link>
                            <Popover
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                            >
                                <Fade in={open}>
                                    <Paper elevation={3} sx={{ width: 1 }}>
                                        <MenuList sx={{ background: 'white' }}>
                                            <Link to="/dashboard" style={{ textDecoration: 'none', color: 'inherit' }}>
                                                <MenuItem>
                                                    Dashboard
                                                </MenuItem>
                                            </Link>
                                            <MenuItem onClick={logOut}>
                                                Log out
                                            </MenuItem>
                                        </MenuList>
                                    </Paper>
                                </Fade>
                            </Popover>
                            {
                                user?.email ?
                                    <Button>
                                        <Avatar onClick={handleProfileMenu} alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                    </Button>
                                    // <Box sx={{ display: 'inline-block' }}>
                                    //     <Link className={navItem} to='/dashboard'>
                                    //         <Button color="inherit">Dashboard</Button>
                                    //     </Link>
                                    //     <Button onClick={logOut} color="inherit">Log out</Button>
                                    // </Box>
                                    :
                                    <Link to='/login' className={navItem}>
                                        <Button color="inherit">Login</Button>
                                    </Link>
                            }
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            {/* <div>
                <React.Fragment>
                    <Drawer
                        open={state}
                        onClose={() => setState(false)}
                    >
                        {list}
                    </Drawer>
                </React.Fragment>
            </div> */}
        </>
    );
}
