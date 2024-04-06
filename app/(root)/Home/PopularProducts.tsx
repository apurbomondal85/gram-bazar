import PopularProductSlider from "@/app/components/PopularProductSlider"
import SectionTitle from "@/app/components/SectionTitle"
import { Box, Button, Container } from "@mui/material"

const PopularProducts: React.FC = () => {
    return (
        <Container maxWidth="xl" className="mt-12 mb-20">
            <SectionTitle title="Popular Products" />
            <Box sx={{ marginTop: '32px', position:'relative' }}>
                <PopularProductSlider />
            </Box>
        </Container>
    )
}

export default PopularProducts