"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  Box,
  Grid,
  Paper,
  Typography,
  Stack,
  Button,
  Avatar,
} from "@mui/material";

export default function Page() {
  const router = useRouter();
  const [products, setProducts] = useState([]);

{/*Took api from products that stores all of the items with names, pictures, description etc*/}
  useEffect(() => {
    fetch("/api/getProducts")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const pizzas = products.filter(p => p.category === "pizzas");
  const sides = products.filter(p => p.category === "sides");
  const dips = products.filter(p => p.category === "dips");
  const desserts = products.filter(p => p.category === "desserts");

    
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: "url('/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >

     

         <Box sx={{ position: "relative", p: 2 }}>

        {/* This is more like main hub which has the most of the nav bar that takes the user to different pages*/}
        <Paper sx={{ p: 2, mb: 3, borderRadius: 3 }}>
          <Grid container alignItems="center">

            <Grid size={4}>
              <Stack direction="row" spacing={2}>
                <Button onClick={() => router.push("/login")}>
                  Log in
                </Button>
                <Button onClick={() => router.push("/register")}>
                  Register
                </Button>
              </Stack>
            </Grid>

            <Grid size={4} textAlign="center">
              <Typography variant="h6">
                Giornos Pizzeria
              </Typography>
            </Grid>

            <Grid size={4} textAlign="right">
              <Button onClick={() => router.push("/ViewCart")}>
                Cart
              </Button>
            </Grid>

          </Grid>
        </Paper>

        
        <Box textAlign="center" mb={3}>
          <Button
            variant="contained"
            sx={{
              borderRadius: "30px",
              px: 5,
            }}
          >
            Our Menu 🍕
          </Button>
        </Box>

        {/* This is going to be menu for just pizzas*/}
        <Typography
          variant="h5"
          sx={{ mb: 2, color: "Black" }}
        >
          Our Pizzas
        </Typography>

    
        <Grid container spacing={3} mb={4}>
          {pizzas.map((p, i) => (
            <Grid size={3} key={i}>
              <Paper
                sx={{ p: 2 }}>
    
                <Box sx={{ mb: 2 }}>
                  <img src={p.image} width="100%" />
                </Box>

                <h3>{p.pname}</h3>
                <p>{p.description}</p>
                <p>${p.cost}</p>

                <Button
                  variant="contained"
                  fullWidth
                  onClick={() =>
                    router.push(`/Viewproducts?id=${p._id}`)
                  }
                >
                  Customize
                </Button>

              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* This is going to be menu for just sides */}
        <Typography
          variant="h5"
          sx={{ mb: 2, color: "Black" }}
        >
          Our Sides
        </Typography>

        <Grid container spacing={3}>
          {sides.map((p, i) => (
            <Grid size={3} key={i}>
              <Paper
              sx={{ p: 2 }}>

                <Box sx={{ mb: 2 }}>
                  <img src={p.image} width="100%" />
                </Box>

                <Typography variant="h6">
                  {p.pname}
                </Typography>

                <Typography variant="body2" mb={1}>
                  {p.description}
                </Typography>

                <Typography variant="subtitle2" mb={2}>
                  ${p.cost}
                </Typography>

                <Button
                  variant="contained"
                  fullWidth
                  onClick={() =>
                    router.push(`/ViewSides?id=${p._id}`)
                  }
                >
                  Customize
                </Button>

              </Paper>
            </Grid>
          ))}
        </Grid>

        {/*This is going to be menu for just dips*/}
       <Typography
          variant="h5"
          sx={{ mb: 2, color: "Black" }}
        >
          Our Dips 
        </Typography>

        <Grid container spacing={3}>
          {dips.map((p, i) => (
            <Grid size={3} key={i}>
              <Paper
              sx={{ p: 2 }}>

                <Box sx={{ mb: 2 }}>
                  <img src={p.image} width="100%" />
                </Box>

                <Typography variant="h6">
                  {p.pname}
                </Typography>

                <Typography variant="body2" mb={1}>
                  {p.description}
                </Typography>

                <Typography variant="subtitle2" mb={2}>
                  ${p.cost}
                </Typography>

                <Button
                  variant="contained"
                  fullWidth
                  onClick={() =>
                    router.push(`/ViewDips?id=${p._id}`)
                  }
                >
                  Customize
                </Button>

              </Paper>
            </Grid>
          ))}
        </Grid>
            

         {/*This is going to be menu for just desserts*/}
       <Typography
          variant="h5"
          sx={{ mb: 2, color: "Black" }}
        >
          Our Desserts 
        </Typography>

        <Grid container spacing={3}>
          {desserts.map((p, i) => (
            <Grid size={3} key={i}>
              <Paper
              sx={{ p: 2 }}>

                <Box sx={{ mb: 2 }}>
                  <img src={p.image} width="100%" />
                </Box>

                <Typography variant="h6">
                  {p.pname}
                </Typography>

                <Typography variant="body2" mb={1}>
                  {p.description}
                </Typography>

                <Typography variant="subtitle2" mb={2}>
                  ${p.cost}
                </Typography>

                <Button
                  variant="contained"
                  fullWidth
                  onClick={() =>
                    router.push(`/ViewDesserts?id=${p._id}`)
                  }
                >
                  Customize
                </Button>

              </Paper>
            </Grid>
          ))}
        </Grid>
            
                    
                
            

      </Box>
    </Box>
  );
}