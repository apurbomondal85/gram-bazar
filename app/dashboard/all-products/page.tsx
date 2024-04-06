"use client"
import { useEffect, useState } from "react";
import ProductsTable from "@/app/components/ProductsTable";
import { FaShoppingBag } from "react-icons/fa";
import getProducts from "@/app/utiliz/getProducts";

const Products = () => {
    const [allProducts, setProducts] = useState();
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        const autoGet = async () => {
            const Products = await getProducts();
            setProducts(Products);
        }
        autoGet();
    }, [refresh])



    return (
        <div className="p-12">
            <h1 className="text-2xl font-semibold tracking-wide">All Products</h1>
            <div className="p-12 mt-8 rounded-lg shadow-md bg-white">
                <div className="mb-4">
                    <h1 className="text-xl font-semibold tracking-wide flex items-center gap-2"><FaShoppingBag className="text-[#29b997]"/> Product List</h1>
                </div>
                <ProductsTable allProducts={allProducts} setRefresh={setRefresh} />

            </div>
        </div>
    )
}

export default Products