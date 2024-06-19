import { Box, Button, IconButton, Rating, Typography } from "@mui/material"
import veg from '@/public/card-veg.webp'
import Image from "next/image"
import Link from "next/link";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { FaEye, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import BoltIcon from '@mui/icons-material/Bolt';
import { ProductType } from "./BestProducts";

const DailySellProduct = ({ product }: { product: ProductType }) => {
    return (
        <Box className="group grid grid-cols-2 h-[240px] w-full" sx={{ bgcolor: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0px 0px 2px 1px rgba(0,0,0,0.3)' }}>
            <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                {
                    product?.discount ?
                        <div className="absolute top-0 left-0 py-1 px-4 bg-complementary text-[13px] text-white rounded-ss-[16px] rounded-ee-[16px]">
                            <BoltIcon className="text-[18px]" />
                            <span>{product?.discount}%</span>
                        </div>
                        : ''
                }
                <Image src={product?.product_img} alt="Product" className="w-full h-full" width={200} height={240} />
                <Box className="h-full overflow-hidden top-0 right-[-50%] transition-all duration-500 group-hover:right-[5%]" sx={{ position: 'absolute', padding: '0 8px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '12px' }}>
                    <IconButton className="text-white bg-[rgba(0,0,0,0.4)] text-[16px] transition-all duration-500 hover:bg-[rgba(0,0,0,0.5)] p-3" sx={{ boxShadow: '0 0 2px 1px rgba(69,189,50,0.5)', ':hover': { boxShadow: '0 0 2px 2px rgba(69,189,50,0.8)' } }} aria-label="add to shopping cart">
                        <FaShoppingCart />
                    </IconButton>
                    <IconButton className="text-white bg-[rgba(0,0,0,0.4)] text-[16px] transition-all duration-500 hover:bg-[rgba(0,0,0,0.5)] p-3" sx={{ boxShadow: '0 0 2px 1px rgba(69,189,50,0.5)', ':hover': { boxShadow: '0 0 2px 2px rgba(69,189,50,0.8)' } }} aria-label="add to shopping cart">
                        <FaEye />
                    </IconButton>
                    <IconButton className="text-white bg-[rgba(0,0,0,0.4)] text-[16px] transition-all duration-500 hover:bg-[rgba(0,0,0,0.5)] p-3" sx={{ boxShadow: '0 0 2px 1px rgba(69,189,50,0.5)', ':hover': { boxShadow: '0 0 2px 2px rgba(69,189,50,0.8)' } }} aria-label="add to shopping cart">
                        <FaRegHeart />
                    </IconButton>
                </Box>
            </Box>
            <Box sx={{ padding: '16px' }} className="space-y-2">
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

export default DailySellProduct