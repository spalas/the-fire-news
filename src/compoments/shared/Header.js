import {
    Box,
    Button,
    Container,
    IconButton,
    Stack,
    Typography,
} from "@mui/material";
import Image from 'next/image';
import headingImage from "@/assets/firenews.png";
import {getCurrentDate} from "@/utiles/getCurrentDate";

const Header = () => {
  const currentDate = getCurrentDate();

    return (
        <Box className = "my-5">
            <Container>
            <Image
            src={headingImage}
            width={600}
            height={600}
            alt="logo"
            className=" mx-auto"
          />

         <Typography variant="body2" color="gray" textAlign="center" className="my-2" >
            @2024 published by Spalash.
          </Typography>
         <Typography variant="body2"  textAlign="center">
             {currentDate}
          </Typography>

         
          </Container>
            
        </Box>
    );
};

export default Header;