import { Box, Button, IconButton, Rating, Typography } from "@mui/material"
import veg from '@/public/card-veg.webp'
import Image from "next/image"
import Link from "next/link";
import { FaEye, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import BoltIcon from '@mui/icons-material/Bolt';
import React from "react"

interface ProductType {
    product_name: string
    product_slug: string
    product_img: string
    description: string
    price: number
    select: string
    stock: number
    _v: number
}

const ProductCard = ({ product }: ProductType | any) => {
    return (
        <Box className="group" sx={{ bgcolor: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0px 0px 2px 1px rgba(0,0,0,0.3)' }}>
            <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                {
                    product?.discount ?
                        <div className="absolute top-0 left-0 py-1 px-4 bg-complementary text-[13px] text-white rounded-ss-[16px] rounded-ee-[16px]">
                            <BoltIcon className="text-[18px]" />
                            <span>{product?.discount}%</span>
                        </div>
                        : ''
                }

                <div className="px-12 py-2">
                    <Image src={product?.product_img} alt="Product" loading="lazy" width={200} height={150} className="w-full h-[100px] sm:h-[150px]" />
                </div>

                <Box className="w-full overflow-hidden bottom-[-50%] transition-all duration-500 group-hover:bottom-[1%] bg-gradient-to-t from-[rgba(0,0,0,0.1)] to-transparent " sx={{ position: 'absolute', padding: '8px 0', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px' }}>
                    <IconButton className="text-white bg-[rgba(0,0,0,0.4)] text-[16px] transition-all duration-500 hover:bg-[rgba(0,0,0,0.5)] p-3" sx={{ boxShadow: '0 0 2px 1px rgba(69,189,50,0.5)', ':hover': { boxShadow: '0 0 2px 2px rgba(69,189,50,0.8)' } }} aria-label="add to shopping cart">
                        <FaShoppingCart />
                    </IconButton>
                    <Link href={`/product-details/${product?.product_slug}`}>
                        <IconButton className="text-white bg-[rgba(0,0,0,0.4)] text-[16px] transition-all duration-500 hover:bg-[rgba(0,0,0,0.5)] p-3" sx={{ boxShadow: '0 0 2px 1px rgba(69,189,50,0.5)', ':hover': { boxShadow: '0 0 2px 2px rgba(69,189,50,0.8)' } }} aria-label="add to shopping cart">
                            <FaEye />
                        </IconButton>
                    </Link>
                    <IconButton className="text-white bg-[rgba(0,0,0,0.4)] text-[16px] transition-all duration-500 hover:bg-[rgba(0,0,0,0.5)] p-3" sx={{ boxShadow: '0 0 2px 1px rgba(69,189,50,0.5)', ':hover': { boxShadow: '0 0 2px 2px rgba(69,189,50,0.8)' } }} aria-label="add to shopping cart">
                        <FaRegHeart />
                    </IconButton>
                </Box>
            </Box>
            <Box sx={{ padding: '8px 16px 18px 16px' }}>
                <Link href={`/product-details/${product?.product_slug}`}><Typography variant="h3" className="text-[14px] sm:text-[16px] font-medium">{product?.product_name}</Typography></Link>
                <p>
                    <span className="text-secondary font-medium me-1 text-[12px] sm:text-[15px]">${(product?.price - (product?.price * product?.discount) / 100).toFixed(2)}</span>
                    {
                        product?.discount ?
                            <span className="text-color-gray text-[12px] font-medium line-through">${product?.price}</span>
                            : ''
                    }
                </p>
                <div className="text-[12px] flex items-center gap-1 mb-3">
                    <Rating name="read-only" size="small" value={4.5} precision={0.5} readOnly />
                    <span>(4.5)</span>
                </div>
                <Button variant="contained" startIcon={<FaShoppingCart className="h-[16px] w-[16px]" />} className="flex py-1 bg-secondary text-[12px] transition-all duration-500 hover:bg-[#4fa84f] capitalize">Add To Card</Button>
            </Box>
        </Box>
    )
}

export default ProductCard