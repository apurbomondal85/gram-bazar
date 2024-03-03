import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import healthy1 from '@/public/bg-product/healthy1.png'
import healthy2 from '@/public/bg-product/healthy2.png'
import healthy3 from '@/public/bg-product/mix-juice.png'
import Image from 'next/image'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const HealthySection = () => {
    const styles = {
        Mt: {
            marginTop: "28px"
        }
    };

    return (
        <Container maxWidth="xl" className='my-12'>
            <Box width={'100%'}>
                <Box width={'100%'} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Box>
                        <Box className="h-[400px] lg:h-[250px]  overflow-hidden rounded-md">
                            <Box sx={{ width: '100%', height: '100%' }} className="p-8 grid grid-cols-1 lg:grid-cols-2 items-center bg-[#e3a8f6]">
                                <Box className="space-y-3">
                                    <Typography variant='h2' sx={{ fontSize: '18px', fontWeight: '600' }}>Make your Breakfast Healthy and Easy</Typography>
                                    <Button
                                        variant="contained"
                                        size='small'
                                        className='bg-secondary hover:bg-[rgb(55,110,46)] capitalize'
                                        endIcon={<ArrowForwardIcon fontSize='small'/>}
                                        style={styles.Mt}
                                    >
                                        Shop Now
                                    </Button>
                                </Box>
                                <Box>
                                    <Image src={healthy2} alt='' placeholder='blur' className='w-full h-full' />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box>
                        <Box className="h-[400px] lg:h-[250px] overflow-hidden rounded-md">
                            <Box sx={{ width: '100%', height: '100%' }} className="p-8 grid grid-cols-1 lg:grid-cols-2 items-center bg-[#f6a8d9]">
                                <Box className="space-y-3">
                                    <Typography variant='h2' sx={{ fontSize: '18px', fontWeight: '600' }}>The best Organic Products Online</Typography>
                                    <Button
                                        variant="contained"
                                        size='small'
                                        className='bg-secondary hover:bg-[rgb(55,110,46)] capitalize'
                                        endIcon={<ArrowForwardIcon fontSize='small'/>}
                                        style={styles.Mt}
                                    >
                                        Shop Now
                                    </Button>
                                </Box>
                                <Box>
                                    <Image src={healthy1} alt='' placeholder='blur' className='w-full h-full' />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box>
                        <Box className="h-[400px] lg:h-[250px] overflow-hidden rounded-md">
                            <Box sx={{ width: '100%', height: '100%' }} className="p-8 grid grid-cols-1 lg:grid-cols-2 items-center bg-[#b6a8f6]">
                                <Box className="space-y-3">
                                    <Typography variant='h2' sx={{ fontSize: '18px', fontWeight: '600' }}>Everyday Fresh & Clean with Our Products</Typography>
                                    <Button
                                        variant="contained"
                                        size='small'
                                        className='bg-secondary hover:bg-[rgb(55,110,46)] capitalize'
                                        endIcon={<ArrowForwardIcon fontSize='small'/>}
                                        style={styles.Mt}
                                    >
                                        Shop Now
                                    </Button>
                                </Box>
                                <Box>
                                    <Image src={healthy3} alt='' placeholder='blur' className='w-full h-full' />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default HealthySection