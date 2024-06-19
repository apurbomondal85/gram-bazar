import SectionTitle from "@/app/components/SectionTitle"
import { Box, Button, Container, Grid, Typography } from "@mui/material"
import { IoArrowForwardCircleOutline } from "react-icons/io5"
import nature from '@/public/daily.png'
import Image from "next/image"
import BestProducts from "@/app/components/BestProducts"
import getProducts from "@/app/utiliz/getProducts"


const styles = {
    Mt: {
        marginTop: '32px'
    }
}
const DailySellSection = async() => {
    const products = await getProducts();

    return (
        <Container maxWidth="xl" className="my-12">
            <SectionTitle title="Daily Best Sells" />
            <Grid container className="mt-12">
                <Grid item xs={12} lg={3} sx={{ "@media (max-width: 550px)": { display: 'none' } }}>
                    <Box sx={{ "@media (max-width: 1200px)": { display: 'flex', height: '300px', alignItems: 'center' }, lg: { height: '500px', display: 'block' } }} className="p-12 w-full bg-primary rounded-2xl gap-4">
                        <Box>
                            <Typography variant="h3" className="text-2xl lg:text-3xl font-semibold text-white">Bring Nature Into Your Home.</Typography>
                            <Button
                                variant="contained"
                                size='small'
                                className='bg-complementary hover:bg-[#ee451fe0] capitalize'
                                endIcon={<IoArrowForwardCircleOutline fontSize='small' />}
                                style={styles.Mt}
                            >
                                Shop Now
                            </Button>
                        </Box>
                        <Box sx={{ "@media (min-width: 1200px)": { marginTop: '48px' } }}>
                            <Image src={nature} alt="Daily Sells Banner Image" className="w-full h-full" placeholder="blur" />
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} lg={9} sx={{ marginTop: '0', "@media (max-width: 1200px) and (min-width: 550px)": { marginTop: '32px' } }}>
                    <BestProducts products={products}/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default DailySellSection