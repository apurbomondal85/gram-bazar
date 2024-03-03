'use client'
import { AppBar, Box, Button, Container, IconButton, Stack, Toolbar, Typography } from "@mui/material"
import Link from "next/link"
import { usePathname } from "next/navigation";
import React from "react";
import ListIcon from '@mui/icons-material/List';
import { FaAngleRight, FaDrumstickBite } from "react-icons/fa";
import { styled } from '@mui/material/styles';
import Menu, { MenuProps } from '@mui/material/Menu';

interface NavItem {
    title: string,
    path: string,
}

const StyledMenu = styled((props: MenuProps) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        padding: '1rem',
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    },
}));

const NavMenu: React.FC = () => {
    const path = usePathname();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleMouseOver = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const navItem: NavItem[] = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'Shop',
            path: '/shop'
        },
        {
            title: 'Offers',
            path: '/offers'
        },
        {
            title: 'Contact Us',
            path: '/contact'
        },
    ]

    return (
        <AppBar position="static" className="bg-secondary" sx={{ boxShadow: '0 1px 2px rgba(0,0,0,0.2)' }}>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={"center"} width={'100%'}>
                        <div className='hidden sm:flex items-center cursor-pointer' onClick={handleMouseOver}>
                            <IconButton color="inherit">
                                <ListIcon />
                            </IconButton>
                            <Typography variant="body1" color={'inherit'}>All Categories</Typography>
                        </div>
                        <StyledMenu
                            id="demo-customized-menu"
                            MenuListProps={{
                                'aria-labelledby': 'demo-customized-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                        >
                            <Box className="space-y-3">
                                <Button onClick={handleClose} className="text-slate-800 font-medium p-1 capitalize hover:text-secondary" sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <span className="bg-slate-100 p-[8px] rounded-full">
                                        <FaDrumstickBite fontSize={'1rem'} />
                                    </span>
                                    <Typography variant="body2" fontSize={'14px'} color={'inherit'}>Fish & Meat</Typography>
                                    <Box ml={'2rem'}>
                                        <FaAngleRight />
                                    </Box>
                                </Button>
                                <Button onClick={handleClose} className="text-slate-800 font-medium p-1 capitalize hover:text-secondary" sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <span className="bg-slate-100 p-[8px] rounded-full">
                                        <FaDrumstickBite fontSize={'1rem'} />
                                    </span>
                                    <Typography variant="body2" fontSize={'14px'} color={'inherit'}>Fish & Meat</Typography>
                                    <Box ml={'2rem'}>
                                        <FaAngleRight />
                                    </Box>
                                </Button>
                                <Button onClick={handleClose} className="text-slate-800 font-medium p-1 capitalize hover:text-secondary" sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <span className="bg-slate-100 p-[8px] rounded-full">
                                        <FaDrumstickBite fontSize={'1rem'} />
                                    </span>
                                    <Typography variant="body2" fontSize={'14px'} color={'inherit'}>Fish & Meat</Typography>
                                    <Box ml={'2rem'}>
                                        <FaAngleRight />
                                    </Box>
                                </Button>
                                <Button onClick={handleClose} className="text-slate-800 font-medium p-1 capitalize hover:text-secondary" sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <span className="bg-slate-100 p-[8px] rounded-full">
                                        <FaDrumstickBite fontSize={'1rem'} />
                                    </span>
                                    <Typography variant="body2" fontSize={'14px'} color={'inherit'}>Fish & Meat</Typography>
                                    <Box ml={'2rem'}>
                                        <FaAngleRight />
                                    </Box>
                                </Button>
                                <Button onClick={handleClose} className="text-slate-800 font-medium p-1 capitalize hover:text-secondary" sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <span className="bg-slate-100 p-[8px] rounded-full">
                                        <FaDrumstickBite fontSize={'1rem'} />
                                    </span>
                                    <Typography variant="body2" fontSize={'14px'} color={'inherit'}>Fish & Meat</Typography>
                                    <Box ml={'2rem'}>
                                        <FaAngleRight />
                                    </Box>
                                </Button>
                            </Box>
                        </StyledMenu>
                        <Stack direction={'row'} justifyContent={'center'} alignItems={"center"} className="flex-auto">
                            <Box className='space-x-8'>
                                {
                                    navItem.map(item => <Link className={`text-sm md:text-base ${path === item.path ? 'text-white' : 'text-primary'} font-medium text-primary transition-all duration-500 hover:text-white`} href={item.path} key={item.path}>{item.title}</Link>)
                                }
                            </Box>
                        </Stack>
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default NavMenu