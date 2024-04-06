'use client'
import { Box, CardActionArea, Grid, Skeleton, Typography } from "@mui/material"
import meat from '@/public/meat.png'
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import getCategories from "../utiliz/getCategories";

interface CategoryType {
    _id: string
    category_name: string
    category_slug: string
    category_img: string
}

const CategorySlider = () => {
    const [device, setDevice] = useState<number>(0);
    const [isLoading, setLoading] = useState<Boolean>(true);
    const [allCategories, setCategories] = useState<CategoryType[]>([]);

    useEffect(() => {
        const page = window.innerWidth;
        setDevice(page < 668 ? 2 : page < 993 ? 4 : 7);

        const autoGet = async () => {
            const categories = await getCategories();
            setCategories(categories);
            setLoading(false);
        }
        autoGet();

    }, [isLoading]);

    return (
        <>
            {
                isLoading
                ? 
                <div className="flex items-center justify-center gap-20">
                    <Skeleton variant="rectangular" width={120} height={120} />
                    <Skeleton variant="rectangular" width={120} height={120} />
                    <Skeleton variant="rectangular" width={120} height={120} />
                    <Skeleton variant="rectangular" width={120} height={120} />
                </div>
                :
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

                    {
                        allCategories?.map(category =>
                            <SwiperSlide key={category?._id} className="p-2">
                                <CardActionArea sx={{ borderRadius: '12px', height: '120px', width: '120px', margin: '0 auto', boxShadow: '0 0 1px 1px rgba(0,128,0,0.2)', ':hover': { boxShadow: '0 0 2px 1px rgba(0,128,0,0.3)' } }}>
                                    <Box sx={{ bgcolor: 'white', width: '100%', height: "100%", padding: '6px', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <Image src={category?.category_img} width={120} height={120} alt="Category Meat" />
                                    </Box>
                                </CardActionArea>
                                <Typography variant="body1" className="text-center font-semibold mt-1">{category?.category_name}</Typography>
                            </SwiperSlide>
                        )
                    }

                </Swiper>
            }
        </>
    )
}

export default CategorySlider