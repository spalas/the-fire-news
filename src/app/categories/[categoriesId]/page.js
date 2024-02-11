import { getCategoryNews } from "@/utiles/getCategoryNews";
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";


const DynamicNewsPage =async({ params, searchParams }) => {
    const {data} = await getCategoryNews(searchParams.category)
// console.log(data)
    return (
        <div className="my-5">
            <h1>Total <span className="font-bold">{searchParams.category}</span> news:{""} {data.length}
            </h1>   

    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className='py-5'>
                {data.map((news) => (
                    <Grid key={news.id } item xs={6}>
                        <Link href={`/${news.category.toLowerCase()}/${news._id}`}>
                        <Card >
                  <CardActionArea>
                                <CardMedia
                                    sx={{
                                       "& img" :{
                                    width: '100%',
                                    height:'250px'
                                        }
                                    }}
                                >
                              <Image src={news.thumbnail_url}
                                      height={800} width={800} alt="Top news" />
                              </CardMedia>
                      
                    
                        <CardContent>
                          <span className='
                           bg-red-500 text-white px-2
                          my-3 rounded
            
                          '>{ news.category}</span>
                      <Typography variant="h6">
                       {news.title.length>30? news.title.slice(0,30)+"...":news.title}
                      </Typography>
                      <Typography  className= "text-orange-500 my-3 ">
                        By {news.author.name}-{news.author.publisher_date}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                          {news.details.length>300? news.details.slice(0,300)+"...":news.details}
                      </Typography>
                    </CardContent>
               </CardActionArea>
                    </Card>
                        </Link>
                  </Grid> 
                ))
                    
       }
       
  </Grid>
            
        </div>



    );
};

export default DynamicNewsPage;