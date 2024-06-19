"use client"
import ProductDetailsSlider from "@/app/components/ProductDetailsSlider"
import { IconButton } from "@mui/material"
import Image from "next/image"
import { ProductType } from "./BestProducts"
import { FaRegHeart } from "react-icons/fa"
import { useState } from "react"

type props = {
    data: ProductType,
    products: ProductType[]
}

const ProductImageSection = ({data, products}: props) => {
    const [product, setProduct] = useState(data);

    return (
        <div className="flex items-center gap-2">
            <div className="bg-[#e6e6e6] rounded-md">
                <ProductDetailsSlider products={products} setProduct={setProduct}/>
            </div>
            <div className="w-full relative">
                <Image src={product?.product_img} alt="Product Image" blurDataURL={''} width={500} height={400} className="w-full h-[450px] rounded-md" />
                <IconButton className="text-white absolute top-4 right-4 bg-[rgba(0,0,0,0.4)] text-[16px] transition-all duration-500 hover:bg-[rgba(0,0,0,0.5)] p-3" sx={{ boxShadow: '0 0 2px 1px rgba(69,189,50,0.5)', ':hover': { boxShadow: '0 0 2px 2px rgba(69,189,50,0.8)' } }} aria-label="add to shopping cart">
                    <FaRegHeart />
                </IconButton>
            </div>
        </div>
    )
}

export default ProductImageSection