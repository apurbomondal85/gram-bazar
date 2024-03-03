'use client'
import { AppBar, Badge, Box, IconButton, Stack, Toolbar } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { FavoriteBorder, ShoppingBag } from "@mui/icons-material";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";

const MobileBar = () => {
    const [isOpen, setOpen] = useState<Boolean>(false);
    const [openNavbar, setOpenNavbar] = useState<Boolean>(false);

    useEffect(() => {
        function handleScroll() {
          if (window.scrollY > 30) {
            setOpenNavbar(true);
          } else {
            setOpenNavbar(false);
          }
        }
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <>
            <AppBar position="fixed" sx={{ top: 'auto', bottom: 0 }} className={`${openNavbar ? 'block' : 'hidden'} sm:hidden bg-complementary`}>
                <Toolbar>
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} width={'100%'}>
                        <IconButton color="inherit" aria-label="open drawer" onClick={() => setOpen(true)}>
                            <MenuIcon />
                        </IconButton>
                        <Link href=''>
                            <Badge overlap="circular" badgeContent={4} sx={{ '& .MuiBadge-badge': { backgroundColor: 'white', color: '#5A080A', border: '2px solid #5A080A' } }} >
                                <IconButton aria-label="cart" color="inherit">
                                    <ShoppingBag />
                                </IconButton>
                            </Badge>
                        </Link>
                        <Link href=''>
                            <Badge overlap="circular" badgeContent={2} sx={{ '& .MuiBadge-badge': { backgroundColor: 'white', color: '#5A080A', border: '2px solid #5A080A' } }}>
                                <IconButton color="inherit">
                                    <FavoriteBorder />
                                </IconButton>
                            </Badge>
                        </Link>
                        <IconButton color="inherit">
                            <PermIdentityIcon />
                        </IconButton>
                    </Stack>
                </Toolbar>
            </AppBar>
            <MobileMenu isOpen={isOpen} setOpen={setOpen}/>
        </>
    )
}

export default MobileBar