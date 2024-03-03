import { AppBar, Badge, Box, Container, IconButton, Stack, Toolbar, Tooltip, Typography } from "@mui/material"
import Image from "next/image"
// import logo from "@/public/grambazar.webp"
import logo from "@/public/gramBazar.png"
import SearchBar from "../SearchBar"
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Link from "next/link";
import { FavoriteBorder, ShoppingBag } from "@mui/icons-material";

const NavBar = () => {

  return (
    <>
      <AppBar position="static" className="bg-complementary sm:bg-white" sx={{ color: 'black', boxShadow: 'none' }}>
        <Container maxWidth={'xl'} className="px-6">
          <Toolbar disableGutters>
            <Stack direction={"row"} justifyContent={"space-between"} alignItems='center' width={'100%'}>
              <Box className='hidden sm:block'>
                <Link href='/'>
                <Tooltip title="Gram Bazar" arrow>
                  <Image src={logo} alt="Gram Bazar Logo" height={70} />
                </Tooltip>
                </Link>
              </Box>
              <Box className='flex-1'>
                <SearchBar />
              </Box>
              <Box className='hidden sm:block'>
                <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} spacing={2}>
                  <Box className={'flex items-center gap-x-4'}>
                    <Link href=''>
                      <Badge overlap="circular" badgeContent={4} sx={{ '& .MuiBadge-badge': { backgroundColor: 'white', color: '#5A080A', border: '2px solid #44bd32' } }} >
                        <IconButton aria-label="cart">
                          <ShoppingBag />
                        </IconButton>
                      </Badge>
                    </Link>
                    <Link href=''>
                      <Badge overlap="circular" badgeContent={2} sx={{ '& .MuiBadge-badge': { backgroundColor: 'white', color: '#5A080A', border: '2px solid #44bd32' } }}>
                        <IconButton className="text-red-600">
                          <FavoriteBorder />
                        </IconButton>
                      </Badge>
                    </Link>
                  </Box>
                  <Box className={'flex items-center gap-3'}>
                    <Box className={'flex items-center'}>
                      <Link href=''>
                        <IconButton>
                          <PersonOutlineIcon />
                        </IconButton>
                      </Link>
                      <Link href=''><Typography variant="body2" className="text-complementary">Login</Typography></Link>
                    </Box>
                    <div className="h-5 w-[2px] bg-slate-600"></div>
                    <Link href=''><Typography variant="body2">Sing Up</Typography></Link>
                  </Box>
                </Stack>
              </Box>
            </Stack>
          </Toolbar>
        </Container >
      </AppBar >
    </>
  )
}

export default NavBar