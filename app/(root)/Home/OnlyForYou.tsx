import ProductCard from "@/app/components/ProductCard"
import ProductsSection from "@/app/components/ProductsSection"
import SectionTitle from "@/app/components/SectionTitle"
import { Box, Container } from "@mui/material"

const OnlyForYou = async() => {

    return (
        <Container maxWidth="xl" className="my-12">
            <SectionTitle title="Only For You" />
            <ProductsSection />
        </Container>
    )
}

export default OnlyForYou