import SectionTitle from "@/app/components/SectionTitle"
import { Box, Container, Grid } from "@mui/material"
import CategorySlider from "@/app/components/CategorySlider";

const Categories = async() => {
    
    return (
        <Container maxWidth={"xl"} className="my-12">
            <SectionTitle title="Featured Categories" />
            <Box sx={{ marginTop: '2rem', width:'100%' }}>
                <CategorySlider />
            </Box>
        </Container>
    )
}

export default Categories