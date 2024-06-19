"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { ProductType } from './BestProducts';
import ProductCard from './ProductCard';
import { Skeleton } from '@mui/material';

const RelatedProductSlider = ({ products }: { products: ProductType[] }) => {

    const skeleton = [1, 2, 3, 4, 5, 6];

    return (
        <div className="mt-8">
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    !products ?
                        skeleton.map(i =>
                            <SwiperSlide key={i}>
                                <Skeleton variant="rectangular" height="200px" />
                                <Skeleton className="my-2" />
                                <Skeleton width="60%" />
                            </SwiperSlide>)
                        :
                        products?.map((product:any) =>
                            <SwiperSlide className='p-2'>
                                <ProductCard product={product} />
                            </SwiperSlide>
                        )
                }
            </Swiper>
        </div>
    )
}

export default RelatedProductSlider