import { Box, Button, IconButton, Rating, Typography } from "@mui/material"
import veg from '@/public/card-veg.webp'
import Image from "next/image"
import Link from "next/link";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { FaEye, FaShoppingCart } from "react-icons/fa";
import BoltIcon from '@mui/icons-material/Bolt';
import React from "react"

const ProductCard: React.FC = () => {
    return (
        <Box className="group" sx={{ bgcolor: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0px 0px 2px 1px rgba(0,0,0,0.3)' }}>
            <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                <div className="absolute top-0 left-0 py-1 px-4 bg-complementary text-[13px] text-white rounded-ss-[16px] rounded-ee-[16px]">
                    <BoltIcon className="text-[18px]"/>
                    <span>12%</span>
                </div>
                <Image src={veg} alt="Product" className="w-full h-[250px]" placeholder="blur" />
                <Box className="w-full overflow-hidden bottom-[-50%] transition-all duration-500 group-hover:bottom-[8%]" sx={{ position: 'absolute', padding: '8px 0', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px' }}>
                    <IconButton className="text-white bg-[rgba(0,0,0,0.4)] transition-all duration-500 hover:bg-[rgba(0,0,0,0.5)] p-3" sx={{ boxShadow: '0 0 2px 1px rgba(69,189,50,0.5)', ':hover': { boxShadow: '0 0 2px 2px rgba(69,189,50,0.8)' } }} aria-label="add to shopping cart">
                        <FaShoppingCart />
                    </IconButton>
                    <IconButton className="text-white bg-[rgba(0,0,0,0.4)] transition-all duration-500 hover:bg-[rgba(0,0,0,0.5)] p-3" sx={{ boxShadow: '0 0 2px 1px rgba(69,189,50,0.5)', ':hover': { boxShadow: '0 0 2px 2px rgba(69,189,50,0.8)' } }} aria-label="add to shopping cart">
                        <FaEye />
                    </IconButton>
                    <IconButton className="text-white bg-[rgba(0,0,0,0.4)] transition-all duration-500 hover:bg-[rgba(0,0,0,0.5)] p-3" sx={{ boxShadow: '0 0 2px 1px rgba(69,189,50,0.5)', ':hover': { boxShadow: '0 0 2px 2px rgba(69,189,50,0.8)' } }} aria-label="add to shopping cart">
                        <FavoriteBorderIcon />
                    </IconButton>
                </Box>
            </Box>
            <Box sx={{ padding: '16px' }} className="space-y-2">
                <Link href=''><Typography variant="h3" className="text-[18px] font-medium">Organic Green Cauliflower</Typography></Link>
                <p><span className="text-color-gray text-[15px] font-medium line-through">$22.00</span> <span className="text-secondary font-medium ms-2">$19.99</span></p>
                <Rating name="read-only" size="small" value={4.5} precision={0.5} readOnly />
                <Button variant="contained" startIcon={<FaShoppingCart />} className="flex bg-secondary transition-all duration-500 hover:bg-[#4fa84f] capitalize">Add To Card</Button>
            </Box>
        </Box>
    )
}

export default ProductCard