'use client'
import DailySellProduct from "@/app/components/DailySellProduct"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ProductCard from "@/app/components/ProductCard"
import { Box, Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import axiosInstance from "../utiliz/axiosInstance";
import Loading from "./Loading";

export interface ProductType {
    _id: string
    product_name: string
    product_slug: string
    product_img: string
    description: string
    price: number
    select: string
    stock: string
    discount: number
}

const BestProducts = ({ products }: { products: ProductType[] }) => {
    const [totalSlide, setTotalSlide] = useState<number[]>();
    const [limit, setLimit] = useState(1);
    const [allProducts, setProducts] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const skeleton = [1, 2, 3, 4];

    useEffect(() => {
        const items = [];
        for (let i = 1; i < products.length / 4; i++) {
            items.push(i);
        }
        setTotalSlide(items);

    }, []);

    useEffect(() => {
        const autoGet = async () => {
            setLoading(true);
            const products: any = await axiosInstance.get(`get-slideProducts?limit=${limit}`);
            if (products.data) {
                setLoading(false);
                console.log(products.data);

                setProducts(products.data);
            }
        }
        autoGet()
    }, [limit]);

    if (!totalSlide) {
        return <div className="w-full h-full flex justify-center items-center"><Loading /></div>
    }

    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={4}
            centeredSlides={true}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }}
            modules={[Navigation]}
            className='h-full w-full daily-swiper'
        >

            {
                totalSlide?.map(item =>
                    <SwiperSlide className="lg:ps-8 pe-1 py-1" key={item}>
                        <Box sx={{ "@media (max-width: 550px)": { display: 'none' }, "@media (min-width: 550px)": { display: 'grid' } }} className="grid-cols-1 md:grid-cols-2 gap-4">
                            {
                                isLoading ?
                                    skeleton.map(i =>
                                        <div key={i}>
                                            <Skeleton variant="rectangular" height="200px" />
                                            <Skeleton className="my-2" />
                                            <Skeleton width="60%" />
                                        </div>) :
                                    allProducts?.map(product =>
                                        <DailySellProduct product={product} />
                                    )
                            }
                        </Box>
                        <Box sx={{ "@media (max-width: 550px)": { display: 'grid' }, "@media (min-width: 550px)": { display: 'none' } }} className="grid-cols-1">
                            <ProductCard />
                        </Box>

                    </SwiperSlide>
                )
            }
            <div onClick={() => setLimit(limit + 1)} className="swiper-button-next"></div>
            <div onClick={() => setLimit(limit - 1)} className="swiper-button-prev"></div>
        </Swiper>
    )
}

export default BestProducts