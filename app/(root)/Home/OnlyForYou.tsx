import ProductCard from "@/app/components/ProductCard"
import ProductsSection from "@/app/components/ProductsSection"
import SectionTitle from "@/app/components/SectionTitle"
import axiosInstance from "@/app/utiliz/axiosInstance"
import { Box, Container } from "@mui/material"

const OnlyForYou = async() => {
    const res = await axiosInstance.get('/get-loadProducts?offset=0&limit=12');
    const initialProducts = res.data;

    return (
        <Container maxWidth="xl" className="my-12">
            <SectionTitle title="Only For You" />
            <ProductsSection initialProducts={initialProducts}/>
        </Container>
    )
}

export default OnlyForYou