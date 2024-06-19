import Breadcrumb from "@/app/components/shared/Breadcrumb"
import axiosInstance from "@/app/utiliz/axiosInstance"
import { Box, Button, Container, Grid, Rating, Typography } from "@mui/material"
import { FaShoppingCart } from "react-icons/fa"
import { FaSackDollar } from "react-icons/fa6"
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SafetyCheckIcon from '@mui/icons-material/SafetyCheck';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import ProductImageSection from "@/app/components/ProductImageSection"
import RelatedProducts from "./RelatedProducts"


const ProductDetails = async ({ params }: {
    params: { slug: string; bar: string };
}) => {

    const { data } = await axiosInstance.get(`get-product/${params.slug}`);
    const products = await axiosInstance.get(`get-category-product/${data.select}`);
    
    return (
        <>
            <Breadcrumb title="Product Details" />
            <Container maxWidth="lg" className="my-12">
                <Grid container className="bg-white p-8 shadow-md rounded-xl">
                    <Grid item sm={12} lg={6}>
                        <ProductImageSection data={data} products={products.data} />
                    </Grid>
                    <Grid item sm={12} lg={6}>
                        <div className="xl:pl-12 space-y-3">
                            <Typography variant="h3" className="text-[16px] sm:text-[18px] font-semibold">{data?.product_name}</Typography>
                            <p className="text-secondary">
                                <span>Stock: </span>
                                <span>{data?.stock}</span>
                            </p>
                            <p className="text-color-gray">{data?.description.slice(0, 120)}</p>
                            <div className="text-[12px] flex items-center gap-1">
                                <Rating name="read-only" size="small" value={4.5} precision={0.5} readOnly />
                                <span>(4.5)</span>
                            </div>
                            <p>
                                <span className="text-secondary font-medium me-1 text-[16px] sm:text-[18px]">${(data?.price - (data?.price * data?.discount) / 100).toFixed(2)}</span>
                                {
                                    data?.discount ?
                                        <span className="text-color-gray text-[14px] font-medium line-through">${data?.price}</span>
                                        : ''
                                }
                            </p>
                            <Grid container className="w-full gap-y-4">
                                <Grid item xs={12} className="flex items-center gap-4">
                                    <Box className='w-full flex items-center sm:justify-center gap-1 md:gap-2 shadow-sm rounded-md bg-[#e1e1e1]  py-2'>
                                        <LocalShippingIcon sx={{ md: { fontSize: '32px' }, xs: { fontSize: '22px' } }} className="text-primary" />
                                        <Typography variant="h2" className="text-sm md:text-base font-medium text-text-slate-800">Free Delivery</Typography>
                                    </Box>
                                    <Box className='w-full flex items-center sm:justify-center gap-1 md:gap-2 shadow-sm rounded-md bg-[#e1e1e1] py-2'>
                                        <SafetyCheckIcon sx={{ md: { fontSize: '32px' }, xs: { fontSize: '22px' } }} className="text-complementary" />
                                        <Typography variant="h2" className="text-sm md:text-base font-medium text-text-slate-800">Safe Payments</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} className="flex items-center gap-4">
                                    <Box className='w-full flex items-center sm:justify-center gap-1 md:gap-2 shadow-sm rounded-md bg-[#e1e1e1] py-2'>
                                        <LocalOfferIcon sx={{ md: { fontSize: '32px' }, xs: { fontSize: '22px' } }} className="text-blue-800" />
                                        <Typography variant="h2" className="text-sm md:text-base font-medium text-text-slate-800">Price Guaranteed</Typography>
                                    </Box>
                                    <Box className='w-full flex items-center sm:justify-center gap-1 md:gap-2 shadow-sm rounded-md bg-[#e1e1e1] py-2'>
                                        <WorkspacePremiumIcon sx={{ md: { fontSize: '32px' }, xs: { fontSize: '22px' } }} className="text-complementary" />
                                        <Typography variant="h2" className="text-sm md:text-base font-medium text-text-slate-800">Authentic Products</Typography>
                                    </Box>
                                </Grid>
                            </Grid>

                            <div className="flex items-center gap-6">
                                <Button variant="contained" startIcon={<FaShoppingCart className="h-[16px] w-[16px]" />} className="flex py-2 bg-secondary text-[12px] transition-all duration-500 hover:bg-[#4fa84f] capitalize mt-12">Add To Card</Button>
                                <Button variant="contained" startIcon={<FaSackDollar className="h-[16px] w-[16px]" />} className="flex py-2 bg-secondary text-[12px] transition-all duration-500 hover:bg-[#4fa84f] capitalize mt-12">Buy Now</Button>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
            <RelatedProducts category={data.select} productName={data.product_name} />
        </>
    )
}

export default ProductDetails