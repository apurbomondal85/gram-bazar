import { Box, Container, Divider, Grid, Typography } from "@mui/material"
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SafetyCheckIcon from '@mui/icons-material/SafetyCheck';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const ServicesSectioon = () => {
    return (
        <Container maxWidth='xl' className="mt-8">
            <Grid container className="bg-[#e3ffdf] rounded-md py-1 px-2 transition-all duration-300 hover:bg-[#c6ffbd] gap-y-4">
                <Grid item xs={6} sm={3}>
                    <Box className='w-full flex items-center sm:justify-center gap-1 md:gap-2 '>
                        <LocalShippingIcon sx={{md:{fontSize:'32px'}, xs:{fontSize:'22px'}}} className="text-primary"/>
                        <Typography variant="h2" className="text-sm md:text-base font-medium text-text-slate-800">Free Delivery</Typography>
                    </Box>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Box className='w-full flex items-center sm:justify-center gap-1 md:gap-2'>
                        <SafetyCheckIcon sx={{md:{fontSize:'32px'}, xs:{fontSize:'22px'}}} className="text-complementary"/>
                        <Typography variant="h2" className="text-sm md:text-base font-medium text-text-slate-800">Safe Payments</Typography>
                    </Box>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Box className='w-full flex items-center sm:justify-center gap-1 md:gap-2'>
                        <LocalOfferIcon sx={{md:{fontSize:'32px'}, xs:{fontSize:'22px'}}} className="text-blue-800"/>
                        <Typography variant="h2" className="text-sm md:text-base font-medium text-text-slate-800">Price Guaranteed</Typography>
                    </Box>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Box className='w-full flex items-center sm:justify-center gap-1 md:gap-2'>
                        <WorkspacePremiumIcon sx={{md:{fontSize:'32px'}, xs:{fontSize:'22px'}}} className="text-complementary"/>
                        <Typography variant="h2" className="text-sm md:text-base font-medium text-text-slate-800">Authentic Products</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default ServicesSectioon