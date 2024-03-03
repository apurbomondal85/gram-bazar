import { Box, Container, Divider, IconButton, Typography } from "@mui/material"
import Image from "next/image"
import logo from '@/public/grambazar.webp'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { EmailOutlined, PhoneAndroid } from "@mui/icons-material";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLaptop, FaTwitter, FaYoutube } from "react-icons/fa";
import paypal from '@/public/payment/paypal.webp'
import visa from '@/public/payment/visa.webp'
import master from '@/public/payment/master.webp'

const Footer = () => {
    const hoverStyle: string = "transition-all duration-300 hover:text-complementary";

    return (
        <Container maxWidth="xl" className="mt-12 bg-[#fff]">
            <footer className="pt-8 pb-16 md:pt-12 md:pb-2">
                <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center md:text-left">
                    <Box className="flex flex-col items-center sm:items-start">
                        <Image src={logo} alt="Logo" placeholder="blur" />
                        <Box className="flex gap-2 mt-8">
                            <LocationOnIcon className="text-primary" />
                            <Typography variant="body1">4517 Washington. Manchester, Kentucky</Typography>
                        </Box>
                        <Box className="flex gap-2 mt-3">
                            <PhoneAndroid className="text-primary" />
                            <Typography variant="body1">(+91) - 540-025-124323</Typography>
                        </Box>
                        <Box className="flex gap-2 mt-3">
                            <EmailOutlined className="text-primary" />
                            <Typography variant="body1">example@gmail.com</Typography>
                        </Box>
                    </Box>
                    <Box className="ps-4">
                        <Typography variant="h5" className="text-xl font-medium">Company</Typography>
                        <ul className="mt-4 space-y-2">
                            <li><Link href='' className={hoverStyle}>About Us</Link></li>
                            <li><Link href='' className={hoverStyle}>Contact Us</Link></li>
                            <li><Link href='' className={hoverStyle}>Terms & Conditions</Link></li>
                            <li><Link href='' className={hoverStyle}>Support Center</Link></li>
                        </ul>
                    </Box>
                    <Box className="ps-4">
                        <Typography variant="h5" className="text-xl font-medium">Account</Typography>
                        <ul className="mt-4 space-y-2">
                            <li><Link href='' className={hoverStyle}>Sign In</Link></li>
                            <li><Link href='' className={hoverStyle}>My Wishlist</Link></li>
                            <li><Link href='' className={hoverStyle}>Shipping Details</Link></li>
                            <li><Link href='' className={hoverStyle}>View Cart</Link></li>
                        </ul>
                    </Box>
                    <Box className="ps-4">
                        <Typography variant="h5" className="text-xl font-medium">Follow Us</Typography>
                        <Box className="flex items-center justify-center md:justify-normal gap-3 mt-4">
                            <IconButton className="bg-[#4c4eb1] text-white transition-all duration-300 hover:text-[#4c4eb1]"><FaFacebookF /></IconButton>
                            <IconButton className="bg-[#ff2881] text-white transition-all duration-300 hover:text-[#ff2881]"><FaInstagram /></IconButton>
                            <IconButton className="bg-[#5db2d1] text-white transition-all duration-300 hover:text-[#5db2d1]"><FaTwitter /></IconButton>
                            <IconButton className="bg-[#dd3a3a] text-white transition-all duration-300 hover:text-[#dd3a3a]"><FaYoutube /></IconButton>
                        </Box>
                        <Box className="flex flex-wrap items-center justify-center md:justify-normal gap-4 mt-4 lg:mt-6">
                            <Image src={master} alt="Payment Image" width={60} />
                            <Image src={paypal} alt="Payment Image" width={60} />
                            <Image src={visa} alt="Payment Image" width={60} />
                        </Box>
                    </Box>
                </Box>
                <Divider sx={{ margin: '16px 0' }} />
                <Box className="w-full flex flex-wrap justify-between items-center">
                    <Typography variant="body1" className="text-[14px] font-normal">©2024 <span className="text-secondary">DevTwin</span> All rights reserved</Typography>
                    <Typography variant="body1" className="text-[14px] font-normal text-secondary flex items-center gap-1"><FaLaptop /> By DevTwin</Typography>
                </Box>
            </footer>
        </Container>
    )
}

export default Footer