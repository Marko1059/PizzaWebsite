"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  Box,
  Paper,
  Typography,
  Button,
  Grid,
} from "@mui/material";

export default function ViewCart() {
  const router = useRouter();
  const [cart, setCart] = useState([]);

    {/*Took all of the information from the database to print out what has user added*/}
  
  useEffect(() => {
    fetch("/api/getCart")
      .then(res => res.json())
      .then(data => setCart(data));
  }, []);


  const total = cart.reduce((sum, item) => {
    return sum + Number(item.cost || 0);
  }, 0);
    
    {/*Also added remove function as I dont have the cart based by the logged in user so it can infinitelly stack */}
    
    const removeItem = async (id) => {
  await fetch("/api/removeFromCart", {
    method: "POST",
    body: JSON.stringify({ id }),
  });

 
  setCart(cart.filter(item => item._id !== id));
};

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
      
    <Box sx={{ p: 2 }}>

        {/*This is simple nav bar*/}
      
      <Paper sx={{ p: 2, mb: 3, textAlign: "center" }}>
        <Typography variant="h6">
          Giornos Pizzeria
        </Typography>
      </Paper>

      <Typography variant="h5" mb={2} color = "Black" >
        Your Cart
      </Typography>

      {/* Main cart that shows all of the users added items */}
      <Grid container spacing={2}>
       {cart.map((item, i) => (
    <Grid size={12} key={i}>
    <Paper sx={{ p: 2 }}>

      <Typography variant="h6">
        {item.pname || item.productId}
      </Typography>

      <Typography>
        Topping: {item.topping}
      </Typography>

      <Typography>
        Extra: {item.extra}
      </Typography>

      <Typography>
        Price: €{item.cost || "10"}
      </Typography>

      
      <Button
        variant="outlined"
        color="error"
        sx={{ mt: 1 }}
        onClick={() => removeItem(item._id)}
      >
        Remove
      </Button>

            </Paper>
          </Grid>
        ))}
      </Grid>

      
      <Box mt={3}>
        <Typography variant="h6" color="Black">
          Total: €{total}
        </Typography>
      </Box>

     
      <Box mt={3}>
        <Button
          variant="contained"
          onClick={() => router.push("/Checkout")}
        >
          Go to Checkout
        </Button>
      </Box>

    </Box>
    </Box>
  );
}