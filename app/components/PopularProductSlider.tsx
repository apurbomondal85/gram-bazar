'use client'
import { Box, } from "@mui/material"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ProductCard from "./ProductCard";


const PopularProductSlider: React.FC = () => {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={4}
            centeredSlides={true}
            navigation={true}
            modules={[Navigation]}
            className='h-full w-full popularProducts'
        >

            <SwiperSlide className="px-2 py-1">
                <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </Box>
            </SwiperSlide>
            <SwiperSlide className="px-2 py-1">
                <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </Box>
            </SwiperSlide>
        </Swiper>
    )
}

export default PopularProductSlider