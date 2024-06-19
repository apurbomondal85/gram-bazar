import { Box, FormControl, Grid, InputLabel, Link, MenuItem, Select, Skeleton } from '@mui/material'
import axiosInstance from "@/app/utiliz/axiosInstance"
import ShopProductSection from "./ShopProductSection";
import { useEffect, useState } from 'react';

const ShopProducts = () => {
    const [initialProducts, setInitialProducts] = useState([]);
    const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    useEffect(() => {
        const getProducts = async () => {
            const res = await axiosInstance.get('/get-loadProducts?offset=0&limit=12');
            setInitialProducts(res.data);
        }
        getProducts();
    }, [])

    if (initialProducts.length < 1) {
        return (
            <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 ms-4">
                {
                    skeleton.map(i =>
                        <div key={i}>
                            <Skeleton variant="rectangular" height="200px" />
                            <Skeleton className="my-2" />
                            <Skeleton width="60%" />

                        </div>
                    )
                }
            </Box>
        )
    }


    return (
        <div className='ms-4'>
            <div className="flex-grow">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-semibold">Products</h1>
                    <FormControl variant="outlined" size="small" className="min-w-[200px]">
                        <InputLabel>Sort By</InputLabel>
                        <Select label="Sort By">
                            <MenuItem value="d"><em>None</em></MenuItem>
                            <MenuItem value="latest">Latest Product</MenuItem>
                            <MenuItem value="price-asc">Price: Low to High</MenuItem>
                            <MenuItem value="price-desc">Price: High to Low</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
            <ShopProductSection initialProducts={initialProducts} />
        </div>
    )
}

export default ShopProducts