"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Badge, Container } from '@mui/material';
import SearchBar from '../SearchBar';

export default function NavBar() {
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="sticky" sx={{ bgcolor: 'transparent', boxShadow: '1px 1px 5px rgba(0,0,0,0.2)', zIndex: '89', top: 0 }}>
                <Container maxWidth="xl">
                    <Toolbar>
                        <div className="w-full flex justify-between items-center">
                            <div className='text-black'>
                                <SearchBar />
                            </div>
                            <div className="flex items-center gap-4">
                                <IconButton
                                    size="medium"
                                    aria-label="show 17 new notifications"
                                    className='text-[#673ab7]'
                                >
                                    <Badge badgeContent={17} className='text-[#673ab7]'>
                                        <NotificationsIcon />
                                    </Badge>
                                </IconButton>
                                {auth && (
                                    <div>
                                        <IconButton
                                            size="medium"
                                            aria-label="account of current user"
                                            aria-controls="menu-appbar"
                                            aria-haspopup="true"
                                            onClick={handleMenu}
                                            className='bg-[#673ab7] text-white hover:bg-[#673ab7] hover:text-white'
                                        >
                                            <AccountCircle />
                                        </IconButton>
                                        <Menu
                                            id="menu-appbar"
                                            anchorEl={anchorEl}
                                            anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            keepMounted
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            open={Boolean(anchorEl)}
                                            onClose={handleClose}
                                        >
                                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                                            <MenuItem onClick={handleClose}>My account</MenuItem>
                                        </Menu>
                                    </div>
                                )}
                            </div>
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}