'use client'
import React, { useEffect, useState } from 'react';
import axiosInstance from "@/app/utiliz/axiosInstance";
import { Box, Button, CircularProgress, Skeleton } from '@mui/material';
import { FaArrowRight } from 'react-icons/fa';
import { ProductType } from '@/app/components/BestProducts';
import ProductCard from '@/app/components/ProductCard';
import { useSelector, useDispatch } from 'react-redux'

const ShopProductSection = ({ initialProducts }: { initialProducts: ProductType[] }) => {
  const [offset, setOffset] = useState(initialProducts?.length);
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [products, setProducts] = useState(initialProducts);
  const [loading, setLoading] = useState(false);
  const [seenProducts, setSeenProducts] = useState(initialProducts.map(product => product._id));
  const selectedParams = useSelector((state: any) => state.category.data);
  
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axiosInstance.get('filter-products', {
        params: {
          categories: selectedParams.category?.join(','),
          minPrice: selectedParams.minPrice,
          maxPrice: selectedParams.maxPrice,
          rating: selectedParams.rating
        }
      });

      if (response.data.length > 0) {
        return setProducts(response.data);
      }
    };

    if (selectedParams.category?.length > 0 && selectedParams.minPrice >= 0 && selectedParams.maxPrice > 0 && selectedParams.rating >= 0) {
      fetchProducts();
    }
    else {
      setProducts(initialProducts)
      setSeenProducts(initialProducts.map((product: any) => product._id));
    }
  }, [selectedParams, initialProducts]);


  const loadMore = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get('/get-loadProducts', {
        params: {
          offset,
          limit: 12,
          seenProducts: seenProducts.join(',')
        },
      });
      setProducts([...products, ...response.data]);
      setSeenProducts([...seenProducts, ...response.data.map((product: any) => product._id)]);
      setOffset(offset + response.data.length);
    } catch (error) {
      console.error('Error loading more products:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {
          products?.length < 1 ? skeleton.map(i =>
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
      <div className="flex justify-center">
        {
          selectedParams.category?.length < 1 &&
          <Button
          variant="contained"
          onClick={loadMore}
          disabled={loading}
          className="bg-secondary transition-all duration-500 hover:bg-[#4fa84f] mt-6 capitalize"
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : (
            <>
              Load More <FaArrowRight className='ml-1' />
            </>
          )}
        </Button>
        }
      </div>
    </>
  )
}

export default ShopProductSection