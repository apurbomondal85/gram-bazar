import PopularProductSlider from "@/app/components/PopularProductSlider"
import SectionTitle from "@/app/components/SectionTitle"
import { Box, Button, Container } from "@mui/material"

const PopularProducts: React.FC = () => {
    return (
        <Container maxWidth="xl" className="my-12">
            <SectionTitle title="Popular Products" />
            <Box sx={{ marginTop: '32px', position:'relative' }}>
                <PopularProductSlider />
                <Button variant="contained" className="bg-secondary transition-all duration-500 hover:bg-[#4fa84f] mt-6 capitalize">View All Products</Button>
            </Box>
        </Container>
    )
}

export default PopularProducts