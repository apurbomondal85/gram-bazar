'use client'
import SectionTitle from "@/app/components/SectionTitle"
import { Box, Button, Container, Grid, Typography } from "@mui/material"
import { IoArrowForwardCircleOutline } from "react-icons/io5"
import nature from '@/public/daily.png'
import Image from "next/image"
import DailySellProduct from "@/app/components/DailySellProduct"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ProductCard from "@/app/components/ProductCard"

const styles = {
    Mt: {
        marginTop: '32px'
    }
}
const DailySellSection = () => {

    return (
        <Container maxWidth="xl" className="my-12">
            <SectionTitle title="Daily Best Sells" />
            <Grid container className="mt-12">
                <Grid item xs={12} lg={3} sx={{ "@media (max-width: 550px)": { display: 'none' } }}>
                    <Box sx={{ "@media (max-width: 1200px)": { display: 'flex', height: '300px', alignItems: 'center' }, lg: { height: '500px', display: 'block' } }} className="p-12 w-full bg-primary rounded-2xl gap-4">
                        <Box>
                            <Typography variant="h3" className="text-2xl lg:text-3xl font-semibold text-white">Bring Nature Into Your Home.</Typography>
                            <Button
                                variant="contained"
                                size='small'
                                className='bg-complementary hover:bg-[#ee451fe0] capitalize'
                                endIcon={<IoArrowForwardCircleOutline fontSize='small' />}
                                style={styles.Mt}
                            >
                                Shop Now
                            </Button>
                        </Box>
                        <Box sx={{ "@media (min-width: 1200px)": { marginTop: '48px' } }}>
                            <Image src={nature} alt="Daily Sells Banner Image" className="w-full h-full" placeholder="blur" />
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} lg={9} sx={{ marginTop: '0', "@media (max-width: 1200px) and (min-width: 550px)": { marginTop: '32px' } }}>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={4}
                        centeredSlides={true}
                        navigation={true}
                        modules={[Navigation]}
                        className='h-full w-full daily-swiper'
                    >

                        <SwiperSlide className="lg:ps-8 pe-1 py-1">
                            <Box sx={{ "@media (max-width: 550px)": { display: 'none' }, "@media (min-width: 550px)": { display: 'grid' } }} className="grid-cols-1 md:grid-cols-2 gap-4">
                                <DailySellProduct />
                                <DailySellProduct />
                                <DailySellProduct />
                                <DailySellProduct />
                            </Box>
                            <Box sx={{"@media (max-width: 550px)": { display: 'grid' },"@media (min-width: 550px)": { display: 'none' }}} className="grid-cols-1">
                                <ProductCard />
                            </Box>

                        </SwiperSlide>
                        <SwiperSlide className="lg:ps-8 pe-1 py-1">
                            <Box sx={{ "@media (max-width: 550px)": { display: 'none' }, "@media (min-width: 550px)": { display: 'grid' } }} className="grid-cols-1 md:grid-cols-2 gap-4">
                                <DailySellProduct />
                                <DailySellProduct />
                                <DailySellProduct />
                                <DailySellProduct />
                            </Box>
                        </SwiperSlide>
                    </Swiper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default DailySellSection