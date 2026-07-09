import { Delete } from '@mui/icons-material'
import { Avatar, Box, Grid, IconButton, Rating } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'

const ReviewCard = () => {
  return (
    <div className='flex justify-between'>

      <Grid container spacing={9}>

      <Grid size={{xs: 1}}>
        <Box>
          <Avatar className='text-white' sx={{width:56, height:56, bgcolor:"#9155FD"}}>
            Z

          </Avatar>
          </Box> 

      </Grid>
      <Grid size={{xs:9}}>

        <div className='space-y-2'>
          <div>
            <p className='font-semibold text-lg'>John</p>
            <p className='opacity-70'>2026-02-22T15:24:05.478333</p>
          </div>

        </div>
        {/**danh gia so sao */}
        <Rating
        readOnly
        value={4.5}
        precision={.5}
        />
        <p>Value for mony product, great product</p>

        <div>
          <img 
          className='w-24 h-24 object-cover'
          src="https://cdn.hstatic.net/products/1000296652/lt271-6_0707c3fd350e4d118ecf366be8787012_1024x1024.png" 
          alt="" />
        </div>

      </Grid>

      </Grid>
       <div>
        <IconButton>
        <Delete sx={{color:red[700]}}/>
      </IconButton>
       </div>

    </div>
  )
}

export default ReviewCard