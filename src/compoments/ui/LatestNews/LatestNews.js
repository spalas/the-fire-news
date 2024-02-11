import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import topNews from "@/assets/food.gif"
import Image from 'next/image';
import { getAllnews } from '@/utiles/getAllNews';


const LatestNews = async () => {
  const { data } = await getAllnews();
  // console.log(data)
    return (
        <Box className = "my-5" >
    <Card >
      <CardActionArea>
            <CardMedia>
              <Image src={data[0].thumbnail_url} width={800} height={ 500} alt="Top news" />
        </CardMedia>
          
        
            <CardContent>
              <p className='
              w-[100px] bg-red-500 text-white px-2
              my-5 rounded

              '>{data[0].category}</p>
          <Typography gutterBottom variant="h5" component="div">
          {data[0].title} 
          </Typography>
          <Typography  className= "text-orange-500 my-3 ">
          {data[0].author.name}-{data[0].author.published_date}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {data[0].details.lenght>200? data[0].details.slice(0,200)+"...":data[0].details}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

{/* second card */}

  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className='py-5'>
          {
            data.slice(0, 4).map(news => (
              <Grid key={news.id}item xs={6}>
            <Card >
           <CardActionArea>
                 <CardMedia>
                      <Image src={news.thumbnail_url} width={800} height={ 500} alt="Top news" />
             </CardMedia>
               
             
                 <CardContent>
                   <p className='
                   w-[100px] bg-red-500 text-white px-2
                   my-5 rounded
     
                   '>{news.category}</p>
               <Typography>
                {news.title}
               </Typography>
               <Typography  className= "text-orange-500 my-3 ">
               {news.author.name}
               </Typography>
               <Typography variant="body2" color="text.secondary">
                    {news.details.lenght>100? news.details.slice(0, 100)+"...": news.details}
               </Typography>
             </CardContent>
           </CardActionArea>
             </Card>
           </Grid>
            ))
       }
      
  </Grid>
  

        </Box>
    );
};

export default LatestNews;