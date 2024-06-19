'use client'
import React, { useEffect, useState } from 'react';
import axiosInstance from "@/app/utiliz/axiosInstance";
import { Box, Button, Skeleton } from '@mui/material';
import ProductCard from './ProductCard';
import { FaArrowRight } from 'react-icons/fa';
import axios from 'axios';

const ProductsSection = ({ initialProducts }: {initialProducts: any}) => {
    const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    
    const [products, setProducts] = useState(initialProducts);
    const [offset, setOffset] = useState(initialProducts?.length);
    const [seenProducts, setSeenProducts] = useState(initialProducts.map(product => product._id));

    const loadMore = async () => {
        try {
          const response = await axiosInstance.get('/get-loadProducts', {
            params: {
              offset,
              limit: 12,
              seenProducts: seenProducts.join(',')
            },
          });
          setProducts([...products, ...response.data]);
          setSeenProducts([...seenProducts, ...response.data.map(product => product._id)]);
          setOffset(offset + response.data.length);
        } catch (error) {
          console.error('Error loading more products:', error);
        }
      };

    return (
        <>
            <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 gap-4 mt-12">
                {
                    products.length < 1 ? skeleton.map(i =>
                        <div key={i}>
                            <Skeleton variant="rectangular" height="200px" />
                            <Skeleton className="my-2" />
                            <Skeleton width="60%" />
                        </div>
                    ) :
                    products?.map(product =>
                            <ProductCard key={product?._id} product={product} />
                        )
                }
            </Box>
            <div className="flex justify-center"><Button variant="contained" onClick={() => loadMore()} className="bg-secondary transition-all duration-500 hover:bg-[#4fa84f] mt-6 capitalize">Load More <span> <FaArrowRight className='ml-1' /></span></Button></div>
        </>
    )
}

export default ProductsSection