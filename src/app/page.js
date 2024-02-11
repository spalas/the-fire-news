import LatestNews from "@/compoments/ui/LatestNews/LatestNews";
import SideBar from "@/compoments/ui/SideBar/SideBar";
import { Grid } from "@mui/material";

const HomePage = () => {
  return (
    <>
  <Grid container spacing={2}>
  <Grid item xs={8}>
   <LatestNews></LatestNews>
  </Grid>
  <Grid item xs={4}>
   <SideBar/>
  </Grid>
  
  
</Grid>
    </>
  );
};

export default HomePage;