import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import fishion from "@/assets/Untitled-1.gif"
import Image from 'next/image';

const SideBar = () => {
    return (
    <Box className = "py-5">
        <Card >
      <CardActionArea>
            <CardMedia>
              <Image src={fishion}  width= {800} alt="Top news" />
        </CardMedia>
          
        
            <CardContent>
              <p className='
              w-[100px] bg-red-500 text-white px-2
              my-5 rounded

              '>Food Zoon</p>
          <Typography gutterBottom variant="h5" component="div">
            Number one food in the city in dhaka city 
          </Typography>
          <Typography  className= "text-orange-500 my-3 ">
            Food Zoon 
          </Typography>
          <Typography variant="body2" color="text.secondary">
                Having nice delicious food in the city so find out more
                tategories yehhmm lets go eat full time and enjoy.
                Having nice delicious food in the city so find out more
                tategories yehhmm lets go eat full time and enjoy.
          </Typography>
        </CardContent>
      </CardActionArea>
            </Card> 
            {/* finished */}
            
    </Box>
    );
};

export default SideBar;