'use client'
import React, { useEffect, useState } from 'react';
import axiosInstance from "@/app/utiliz/axiosInstance";
import { Box, Button, Skeleton } from '@mui/material';
import ProductCard from './ProductCard';
import { FaArrowRight } from 'react-icons/fa';

const ProductsSection = () => {
    const [limit, setLimit] = useState(1);
    const [allProducts, setProducts] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    useEffect(() => {
        const autoGet = async () => {
            setLoading(true);
            const products: any = await axiosInstance.get(`get-loadProducts?limit=${limit}`);
            if (products.data.length >= 1) {
                setProducts(products.data);
                setLoading(false);
            }
        }
        autoGet()
    }, [limit]);

    return (
        <>
            <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 gap-4 mt-12">
                {
                    isLoading ? skeleton.map(i =>
                        <div key={i}>
                            <Skeleton variant="rectangular" height="200px" />
                            <Skeleton className="my-2" />
                            <Skeleton width="60%" />
                        </div>
                    ) :
                        allProducts?.map(product =>
                            <ProductCard product={product} />
                        )
                }
            </Box>
            <div className="flex justify-center"><Button variant="contained" onClick={() => setLimit(limit + 1)} className="bg-secondary transition-all duration-500 hover:bg-[#4fa84f] mt-6 capitalize">Load More <span> <FaArrowRight className='ml-1' /></span></Button></div>
        </>
    )
}

export default ProductsSection