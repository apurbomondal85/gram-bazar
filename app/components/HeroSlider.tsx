'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import image from '@/public/slider-2_o6aezc.webp'

import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';

export const HeroSlider = () => {
    return (
        <Swiper
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className='h-full w-full'
        >
            <SwiperSlide className='h-full'>
                <Image src={image} alt='image' placeholder='blur' className='h-full w-full'/>
            </SwiperSlide>
            <SwiperSlide className='h-full'>
                <Image src={image} alt='image' placeholder='blur' className='h-full w-full'/>
            </SwiperSlide>
            <SwiperSlide className='h-full'>
                <Image src={image} alt='image' placeholder='blur' className='h-full w-full'/>
            </SwiperSlide>
            <SwiperSlide className='h-full'>
                <Image src={image} alt='image' placeholder='blur' className='h-full w-full'/>
            </SwiperSlide>
        </Swiper>
    )
}
