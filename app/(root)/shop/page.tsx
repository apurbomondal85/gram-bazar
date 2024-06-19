'use client'
import { Breadcrumbs, Container, FormControl, Grid, InputLabel, Link, MenuItem, Select } from '@mui/material'
import React from 'react'
import ShopSidebar from './ShopSidebar'
import { Home } from '@mui/icons-material'
import ShopProducts from './ShopProducts'
import { Provider } from 'react-redux'
import { store } from '@/globalRedux/store'

const page = () => {
  return (
    <Provider store={store}>
      <>
        <div className='bg-gray-200'>
          <Container maxWidth='xl' className='flex justify-between items-center py-6'>
            <h4 className='text-black text-xl font-semibold'>Shop Page</h4>
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="black" href="/">
                <Home />
              </Link>
              <p className="text-black" >Shop Page</p>
            </Breadcrumbs>
          </Container>
        </div>
        <Container maxWidth="xl" className="mt-4">
          <Grid container>
            <Grid item lg={3}>
              <ShopSidebar />
            </Grid>
            <Grid item lg={9}>
                <ShopProducts />
            </Grid>
          </Grid>
        </Container>
      </>
    </Provider>
  )
}

export default page