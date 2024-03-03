import { HeroSlider } from "@/app/components/HeroSlider"
import { Box, Container, Grid, Stack } from "@mui/material"
import offerBanner from '@/public/offer-banner.webp'
import offerBanner2 from '@/public/offer-banner2.webp'
import Image from "next/image"
import Link from "next/link"

const HeroSection = () => {
    return (
        <Container maxWidth='xl' sx={{ marginTop: '1rem' }}>
            <Grid container spacing={2} justifyContent="space-between" className="h-auto" width={'100%'}>
                <Grid item xs={12} md={8}>
                    <Box className='w-full h-full'>
                        <HeroSlider />
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}
                    sx={{
                        "@media (min-width:900px)": {
                            display:'block'
                        },
                        "@media (max-width:900px)": {
                            display:'none'
                        },
                    }}>
                    <Box className='w-full lg:h-full flex flex-col justify-between items-center gap-2'>
                        <Box className='md:h-[200px] w-full'>
                            <Link href=''>
                                <Image src={offerBanner} alt="offer banner" className="w-full h-full" />
                            </Link>
                        </Box>
                        <Box className='md:h-[200px] w-full'>
                            <Link href=''>
                                <Image src={offerBanner2} alt="offer banner" className="w-full h-full" />
                            </Link>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default HeroSection