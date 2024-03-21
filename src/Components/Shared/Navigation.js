import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { makeStyles } from "@mui/styles";
import {
  Avatar,
  Fade,
  MenuItem,
  MenuList,
  Paper,
  Popover,
} from "@mui/material";
import { useLocation } from "react-router-dom";

export default function Navigation() {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleProfileMenu = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const { user, logOut } = useAuth();
  const useStyle = makeStyles({
    navItem: {
      color: "white",
      textDecoration: "none",
    },
  });
  const { navItem } = useStyle();

  const location = useLocation();

  if (!location?.pathname?.includes("dashboard"))
    return (
      <>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link
                  to="/"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  OnlineCarMart
                </Link>
              </Typography>
              <Box>
                <Link to="/explore" className={navItem}>
                  <Button color="inherit">Products</Button>
                </Link>
                <Popover
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                >
                  <Fade in={open}>
                    <Paper elevation={3} sx={{ width: 1 }}>
                      <MenuList sx={{ background: "white" }}>
                        <Link
                          to="/dashboard"
                          onClick={handleClose}
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          <MenuItem>Dashboard</MenuItem>
                        </Link>
                        <Link
                          to="/settings"
                          onClick={handleClose}
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          <MenuItem>Setting</MenuItem>
                        </Link>
                        <Box onClick={logOut}>
                          <MenuItem onClick={handleClose}>Log out</MenuItem>
                        </Box>
                      </MenuList>
                    </Paper>
                  </Fade>
                </Popover>
                {/* {
                                    user?.email ?
                                        <Button>
                                            <Avatar onClick={handleProfileMenu} alt="Remy Sharp" src={user?.photoURL} />
                                        </Button> :
                                        <Link to='/login' className={navItem}>
                                            <Button color="inherit">Login</Button>
                                        </Link>
                                } */}
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
      </>
    );
  return null;
}
