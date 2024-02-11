"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import Logo from '@/assets/news.png';
import Image from 'next/image';
import { IconButton, Stack } from '@mui/material';
import Link from 'next/link';
import Header from './Header';


const navItems = [
    {
        route: "Home",
        pathname: "/",
    },
    {
        route: "Pages",
        pathname: "/pages",
    },
    {
        route: "Category",
        pathname: "/categories/news?category=all-news",
    },
    {
        route: "News",
        pathname: "/news",
    },
    {
        route: "About",
        pathname: "/about",
    },
    {
        route: "Contact",
        pathname: "/contact",
    },
];


function Navbar() {
  

  return (
      <>
          <Header/>
          
    <AppBar position="static" className='bg-black'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
       <Image src={Logo} width={100} height={100} alt="Logo" />
                  
        <Box className="w-full text-center">
                 
            {navItems.map((item) => (
                <Link key={item} href={item.pathname}>
                    <Button className='text-white'>
                        {item.route}
                    </Button>
                </Link>
            ))}
         </Box>
                  
        <Box>
                      <Stack direction="row" sx={{
                          "& svg": {
                color: "white"
            }
        }}>
            <IconButton>
            <FacebookIcon/>
            </IconButton>   
            <IconButton>
            <FacebookIcon/>
            </IconButton>   
            <IconButton>
            <FacebookIcon/>
            </IconButton>   
            <IconButton>
            <FacebookIcon/>
            </IconButton>  
        </Stack> 
        </Box>
          
         
        </Toolbar>
      </Container>
    </AppBar>
      </>
  );
}
export default Navbar;