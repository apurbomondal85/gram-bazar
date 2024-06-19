'use client'
import { Box, Button, Skeleton, } from "@mui/material"
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import getProducts from "../utiliz/getProducts";
import axiosInstance from "../utiliz/axiosInstance";


const PopularProductSlider: React.FC = () => {
    const [limit, setLimit] = useState(1);
    const [page, setpage] = useState(0);
    const [allProducts, setProducts] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    useEffect(() => {
        const autoGet = async () => {
            setLoading(true);
            const getProduct = await getProducts();
            setpage(Math.ceil(getProduct.length / 12));
            const products: any = await axiosInstance.get(`get-limitProducts?limit=${limit}`);
            setProducts(products.data);
            if (products.data) {
                setLoading(false);
            }
        }
        autoGet()
    }, [limit]);

    return (
        <div className="popularProducts">
            <Box className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 gap-4">
                {
                    isLoading ?
                    skeleton.map(i =>
                        <div key={i}>
                            <Skeleton variant="rectangular" height="200px" />
                            <Skeleton className="my-2"/>
                            <Skeleton width="60%" />
                        </div>) :

                        allProducts?.map((product: any) =>
                            <ProductCard key={product?._id} product={product} />
                        )
                }
            </Box>
            <div className="flex items-center gap-4 absolute right-0 mt-4">
                <Button variant="contained" disabled={limit <= 1 ? true : false} onClick={() => setLimit(limit - 1)} className="p-3 bg-[rgba(0,0,0,0.3)] hover:bg-[rgba(0,0,0,0.4)] text-white text-base rounded-s-md cursor-pointer"><FaChevronLeft /></Button>

                <Button variant="contained" disabled={limit == page ? true : false} onClick={() => setLimit(limit + 1)} className="p-3 bg-[rgba(0,0,0,0.3)] hover:bg-[rgba(0,0,0,0.4)] text-white text-base rounded-e-md cursor-pointer"><FaChevronRight /></Button>
            </div>
        </div>
    )
}

export default PopularProductSlider