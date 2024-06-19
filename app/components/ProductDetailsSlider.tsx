'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '@/app/css/style.css'
import { Navigation } from 'swiper/modules';
import 'swiper/css/scrollbar';
import { ProductType } from './BestProducts';
import Image from 'next/image';

const ProductDetailsSlider = ({ products, setProduct }: { products: ProductType[], setProduct:any }) => {

    return (
        <div className='relative productDetailsSwiper'>
            <Swiper
                direction={'vertical'}
                slidesPerView={1}
                spaceBetween={30}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                modules={[Navigation]}
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
                className="w-[120px] h-[450px]"
            >
                {
                    products?.map(product =>
                        <SwiperSlide className='px-1 my-1 cursor-pointer' onClick={() => setProduct(product)}>
                            <div className='w-full h-[100px] p-2 bg-white rounded-md'>
                                <Image src={product?.product_img} alt='Product Image' width={100} height={80} className='h-full mx-auto'/>
                            </div>
                        </SwiperSlide>
                    )
                }

            </Swiper>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
        </div>
    )
}

export default ProductDetailsSlider