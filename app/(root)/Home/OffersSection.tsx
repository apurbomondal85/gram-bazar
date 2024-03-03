import ProductCard from "@/app/components/ProductCard"
import SectionTitle from "@/app/components/SectionTitle"
import { Box, Button, Container } from "@mui/material"

const OffersSection = () => {
    return (
        <Container maxWidth="xl" className="my-12">
            <SectionTitle title="Latest Discounted Products" />
            <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-4 mt-12">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </Box>
            <div className="flex justify-center"><Button variant="contained" className="bg-secondary transition-all duration-500 hover:bg-[#4fa84f] mt-6 capitalize">View All Products</Button></div>
        </Container>
    )
}

export default OffersSection