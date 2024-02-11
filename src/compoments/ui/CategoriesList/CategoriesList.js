import { getAllCategories } from "@/utiles/getAllCategories";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";


const CategoriesList = async () => {
    const {data: AllCategories} = await getAllCategories();
    // console.log( AllCategories);
    return (
        <Box className = "mt-5 bg-gray-100 py-2">
            <Typography variant="h6">Categories</Typography>
            <Divider />
            <Stack rowGap={1} sx={{mt:2.5}}>
                {AllCategories.map((category) => (
                    <Button variant="outlined" key={category.id}>
                        <Link href={`/categories/news?category=${category.title.toLowerCase()}`}>{category.title}
                        </Link>
                    </Button>
              ))}  
     </Stack>
        </Box>
    );
};

export default CategoriesList;