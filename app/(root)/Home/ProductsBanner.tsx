
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import mixFruit from '@/public/bg-product/mix-fruits.webp'
import mixJuice from '@/public/bg-product/mix-juice.png'
import mixVeg from '@/public/bg-product/mix-veg.webp'
import fruit from '@/public/bg-product/fruit.webp'
import juice from '@/public/bg-product/juice.webp'
import veg from '@/public/bg-product/veg.webp'
import Image from 'next/image'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ProductsBanner: React.FC = () => {
    const styles = {
        Mt: {
            marginTop: "28px"
        }
    };
    return (
        <Container maxWidth="xl" className='my-12'>
            <Box width={'100%'}>
                <Box  width={'100%'} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    <Box>
                        <Box className="h-[400px] xl:h-[500px] relative z-[1] overflow-hidden rounded-md">
                            <Image src={fruit} alt='' className='h-full w-full absolute top-0 left-0 -z-[1]' placeholder='blur' />
                            <Box sx={{ width: '100%', height: '100%' }} className="p-8 bg-[rgba(255,138,106,0.93)] space-y-2 xl:space-y-4">
                                <Typography variant='body1'>FRUITS</Typography>
                                <Typography variant='h2' sx={{fontSize: "24px", "@media (min-width: 900)":{fontSize: '32px'}, fontWeight: '600' }}>Healthy & Goods Fruits</Typography>
                                <Button
                                    variant="contained"
                                    className='bg-secondary hover:bg-[rgb(55,110,46)]'
                                    endIcon={<ArrowForwardIcon />}
                                    style={styles.Mt}
                                >
                                    Shop Now
                                </Button>
                                <Box>
                                    <Image src={mixFruit} alt='' placeholder='blur' className='w-full h-full' />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box>
                        <Box className="h-[400px] xl:h-[500px] relative z-[1] overflow-hidden rounded-md">
                            <Image src={veg} alt='' className='h-full w-full absolute top-0 left-0 -z-[1]' placeholder='blur' />
                            <Box sx={{ width: '100%', height: '100%' }} className="p-8 bg-[rgba(96,228,213,0.93)] space-y-2 xl:space-y-4">
                                <Typography variant='body1'>JUICES</Typography>
                                <Typography variant='h2' sx={{fontSize: "24px", "@media (min-width: 900)":{fontSize: '32px'}, fontWeight: '600' }}>Best Fruits Juices</Typography>
                                <Button
                                    variant="contained"
                                    className='bg-primary hover:bg-[#3c1819]'
                                    endIcon={<ArrowForwardIcon />}
                                    style={styles.Mt}
                                >
                                    Shop Now
                                </Button>
                                <Box>
                                    <Image src={mixJuice} alt='' placeholder='blur' className='w-full h-full' />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box>
                        <Box className="h-[400px] xl:h-[500px] relative z-[1] overflow-hidden rounded-md">
                            <Image src={juice} alt='' className='h-full w-full absolute top-0 left-0 -z-[1]' placeholder='blur' />
                            <Box sx={{ width: '100%', height: '100%' }} className="p-8 bg-[rgba(165,251,157,0.93)] space-y-2 xl:space-y-4">
                                <Typography variant='body1'>VEGETABLE</Typography>
                                <Typography variant='h2' sx={{fontSize: "24px", "@media (min-width: 900)":{fontSize: '32px'}, fontWeight: '600' }}>Frash & Goods Vegetable</Typography>
                                <Button
                                    variant="contained"
                                    className='bg-complementary hover:bg-[#ff6158]'
                                    endIcon={<ArrowForwardIcon />}
                                    style={styles.Mt}
                                >
                                    Shop Now
                                </Button>
                                <Box>
                                    <Image src={mixVeg} alt='' placeholder='blur' className='w-full h-full' />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default ProductsBanner