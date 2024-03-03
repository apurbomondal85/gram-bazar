'use client'
import { Box, CardActionArea, Grid } from "@mui/material"
import meat from '@/public/meat.png'
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";

const CategorySlider = () => {
    const [device, setDevice] = useState<number>(0);

    useEffect(() => {
        const page = window.innerWidth;
        setDevice(page < 668 ? 2 : page < 993 ? 4 : 7);
    }, []);

    return (
        <Swiper
            slidesPerView={device}
            spaceBetween={10}
            // centeredSlides={true}
            autoplay={{
                delay: 3000
            }}
            loop={true}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className='h-full w-full category'
        >

            <SwiperSlide className="p-2">
                <CardActionArea sx={{ borderRadius: '12px', height: '120px', width: '120px', margin: '0 auto', boxShadow: '0 0 1px 1px rgba(0,128,0,0.2)', ':hover': { boxShadow: '0 0 2px 1px rgba(0,128,0,0.3)' } }} className="">
                    <Box sx={{ bgcolor: 'white', width: '100%', height: "100%", padding: '6px', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Image src={meat} alt="Category Meat" />
                    </Box>
                </CardActionArea>
            </SwiperSlide>
            <SwiperSlide className="p-2">
                <CardActionArea sx={{ borderRadius: '12px', height: '120px', width: '120px', margin: '0 auto', boxShadow: '0 0 1px 1px rgba(0,128,0,0.2)', ':hover': { boxShadow: '0 0 2px 1px rgba(0,128,0,0.3)' } }} className="">
                    <Box sx={{ bgcolor: 'white', width: '100%', height: "100%", padding: '6px', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Image src={meat} alt="Category Meat" />
                    </Box>
                </CardActionArea>
            </SwiperSlide>
            <SwiperSlide className="p-2">
                <CardActionArea sx={{ borderRadius: '12px', height: '120px', width: '120px', margin: '0 auto', boxShadow: '0 0 1px 1px rgba(0,128,0,0.2)', ':hover': { boxShadow: '0 0 2px 1px rgba(0,128,0,0.3)' } }} className="">
                    <Box sx={{ bgcolor: 'white', width: '100%', height: "100%", padding: '6px', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Image src={meat} alt="Category Meat" />
                    </Box>
                </CardActionArea>
            </SwiperSlide>
            <SwiperSlide className="p-2">
                <CardActionArea sx={{ borderRadius: '12px', height: '120px', width: '120px', margin: '0 auto', boxShadow: '0 0 1px 1px rgba(0,128,0,0.2)', ':hover': { boxShadow: '0 0 2px 1px rgba(0,128,0,0.3)' } }} className="">
                    <Box sx={{ bgcolor: 'white', width: '100%', height: "100%", padding: '6px', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Image src={meat} alt="Category Meat" />
                    </Box>
                </CardActionArea>
            </SwiperSlide>
            <SwiperSlide className="p-2">
                <CardActionArea sx={{ borderRadius: '12px', height: '120px', width: '120px', margin: '0 auto', boxShadow: '0 0 1px 1px rgba(0,128,0,0.2)', ':hover': { boxShadow: '0 0 2px 1px rgba(0,128,0,0.3)' } }} className="">
                    <Box sx={{ bgcolor: 'white', width: '100%', height: "100%", padding: '6px', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Image src={meat} alt="Category Meat" />
                    </Box>
                </CardActionArea>
            </SwiperSlide>
            <SwiperSlide className="p-2">
                <CardActionArea sx={{ borderRadius: '12px', height: '120px', width: '120px', margin: '0 auto', boxShadow: '0 0 1px 1px rgba(0,128,0,0.2)', ':hover': { boxShadow: '0 0 2px 1px rgba(0,128,0,0.3)' } }} className="">
                    <Box sx={{ bgcolor: 'white', width: '100%', height: "100%", padding: '6px', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Image src={meat} alt="Category Meat" />
                    </Box>
                </CardActionArea>
            </SwiperSlide>
            <SwiperSlide className="p-2">
                <CardActionArea sx={{ borderRadius: '12px', height: '120px', width: '120px', margin: '0 auto', boxShadow: '0 0 1px 1px rgba(0,128,0,0.2)', ':hover': { boxShadow: '0 0 2px 1px rgba(0,128,0,0.3)' } }} className="">
                    <Box sx={{ bgcolor: 'white', width: '100%', height: "100%", padding: '6px', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Image src={meat} alt="Category Meat" />
                    </Box>
                </CardActionArea>
            </SwiperSlide>
            <SwiperSlide className="p-2">
                <CardActionArea sx={{ borderRadius: '12px', height: '120px', width: '120px', margin: '0 auto', boxShadow: '0 0 1px 1px rgba(0,128,0,0.2)', ':hover': { boxShadow: '0 0 2px 1px rgba(0,128,0,0.3)' } }} className="">
                    <Box sx={{ bgcolor: 'white', width: '100%', height: "100%", padding: '6px', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Image src={meat} alt="Category Meat" />
                    </Box>
                </CardActionArea>
            </SwiperSlide>
            <SwiperSlide className="p-2">
                <CardActionArea sx={{ borderRadius: '12px', height: '120px', width: '120px', margin: '0 auto', boxShadow: '0 0 1px 1px rgba(0,128,0,0.2)', ':hover': { boxShadow: '0 0 2px 1px rgba(0,128,0,0.3)' } }} className="">
                    <Box sx={{ bgcolor: 'white', width: '100%', height: "100%", padding: '6px', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Image src={meat} alt="Category Meat" />
                    </Box>
                </CardActionArea>
            </SwiperSlide>
        </Swiper>
    )
}

export default CategorySlider