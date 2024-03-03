import { AppBar, Box, Button, Container, IconButton, Stack, Toolbar, Tooltip, Typography } from "@mui/material"
import logo from "@/public/grambazar.webp"
import Image from "next/image"
import { Close } from "@mui/icons-material"
import React from "react"
import { FaAngleRight, FaDrumstickBite } from "react-icons/fa"

const MobileMenu: React.FC<{ isOpen: Boolean, setOpen: Function }> = ({ isOpen, setOpen }) => {
    return (
        <Box position="fixed" className={`transition-all duration-500 ${isOpen ? 'w-full left-0' : 'w-full -left-full'} overflow-hidden`} sx={{ height: '100vh', top: 0, zIndex: '9991', backgroundColor: 'white' }}>
            <Container>
                <AppBar position="static" color="inherit" sx={{ boxShadow: 'none', padding: '12px 0', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                    <Toolbar>
                        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} width={'100%'}>
                            <Box>
                                <Tooltip title="Gram Bazar" arrow>
                                    <Image src={logo} alt="Gram Bazar Logo" height={35} />
                                </Tooltip>
                            </Box>
                            <IconButton onClick={() => setOpen(false)} size="small" className="bg-primary text-white hover:bg-primary hover:text-white">
                                <Close />
                            </IconButton>
                        </Stack>
                    </Toolbar>
                </AppBar>
                <Box>
                    <Typography variant="h2" className="text-slate-800 text-xl font-semibold py-4 mt-4 border-b border-primary">All Category</Typography>
                    <Box className="space-y-3 w-full mt-4">
                        <Button className="w-full text-slate-800 font-medium p-1 capitalize hover:text-secondary" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap:'1rem' }}>
                                <span className="bg-slate-100 p-[8px] rounded-full">
                                    <FaDrumstickBite fontSize={'1rem'} />
                                </span>
                                <Typography variant="body2" fontSize={'14px'} color={'inherit'}>Fish & Meat</Typography>
                            </Box>
                            <Box ml={'2rem'}>
                                <FaAngleRight />
                            </Box>
                        </Button>
                        <Button className="w-full text-slate-800 font-medium p-1 capitalize hover:text-secondary" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap:'1rem' }}>
                                <span className="bg-slate-100 p-[8px] rounded-full">
                                    <FaDrumstickBite fontSize={'1rem'} />
                                </span>
                                <Typography variant="body2" fontSize={'14px'} color={'inherit'}>Fish & Meat</Typography>
                            </Box>
                            <Box ml={'2rem'}>
                                <FaAngleRight />
                            </Box>
                        </Button>
                        <Button className="w-full text-slate-800 font-medium p-1 capitalize hover:text-secondary" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap:'1rem' }}>
                                <span className="bg-slate-100 p-[8px] rounded-full">
                                    <FaDrumstickBite fontSize={'1rem'} />
                                </span>
                                <Typography variant="body2" fontSize={'14px'} color={'inherit'}>Fish & Meat</Typography>
                            </Box>
                            <Box ml={'2rem'}>
                                <FaAngleRight />
                            </Box>
                        </Button>
                        <Button className="w-full text-slate-800 font-medium p-1 capitalize hover:text-secondary" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap:'1rem' }}>
                                <span className="bg-slate-100 p-[8px] rounded-full">
                                    <FaDrumstickBite fontSize={'1rem'} />
                                </span>
                                <Typography variant="body2" fontSize={'14px'} color={'inherit'}>Fish & Meat</Typography>
                            </Box>
                            <Box ml={'2rem'}>
                                <FaAngleRight />
                            </Box>
                        </Button>
                        <Button className="w-full text-slate-800 font-medium p-1 capitalize hover:text-secondary" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap:'1rem' }}>
                                <span className="bg-slate-100 p-[8px] rounded-full">
                                    <FaDrumstickBite fontSize={'1rem'} />
                                </span>
                                <Typography variant="body2" fontSize={'14px'} color={'inherit'}>Fish & Meat</Typography>
                            </Box>
                            <Box ml={'2rem'}>
                                <FaAngleRight />
                            </Box>
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default MobileMenu