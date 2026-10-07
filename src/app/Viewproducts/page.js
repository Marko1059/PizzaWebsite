"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import {
  Box,
  Grid,
  Paper,
  Typography,
  Button,
  Radio,
  FormControlLabel,
} from "@mui/material";

export default function page() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const id = searchParams.get("id");
    
  const [user, setUser] = useState("");


{/*Decided to make page that takes from the item id so I wouldnt need to make a lot of pages for each of the items*/}
  const [product, setProduct] = useState(null);
  const [topping, setTopping] = useState("");
  const [extra, setExtra] = useState("");

 
  useEffect(() => {
    fetch("/api/getProducts")
      .then(res => res.json())
      .then(data => {
       const found = data.find(p => p._id.toString() === id);
        setProduct(found);
      });
  }, [id]);

  {/*This is function that lets it add to cart with stored information*/}
  const addToCart = async () => {
    await fetch("/api/addToCart", {
      method: "POST",
      body: JSON.stringify({
        productId: id,
        pname : product.pname,
        cost: product.cost,
        topping,
        extra,
      }),
    });

    router.push("/ViewCart");
  };

  if (!product) return <p>Loading...</p>;

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

      {/*This is simple nav bar and I just added Guest since I couldnt figure out how to keep saved users*/}
      <Paper sx={{ p: 2, mb: 3 }}>
        <Grid container alignItems="center">
          <Grid size={4}>{user || "Guest"}</Grid>

          <Grid size={4} textAlign="center">
            Giornos Pizzeria
          </Grid>

          <Grid size={4} textAlign="right">
            <Button onClick={() => router.push("/ViewCart")}>
              Cart
            </Button>
          </Grid>
        </Grid>
      </Paper>

      
      <Typography textAlign="center" mb={2} color="Black">
        View product
      </Typography>

      <hr />

     
      <Grid container spacing={4} mt={2}>

        
        <Grid size={6}>
          <Paper sx={{ p: 4, textAlign: "center" }}>
            <img src={product.image} width="100%" />
          </Paper>
        </Grid>

        {/* Added options for adding or extras for user */}
        <Grid size={6}>

          <Typography variant="h6" color="Black">Choose toppings</Typography>

          {["Pepperoni", "Cheese", "Mushroom", "Onions"].map((t) => (
            <FormControlLabel
              sx={{color : "black"}}
              key={t}
              control={
                <Radio
                  checked={topping === t}
                  onChange={() => setTopping(t)}
                />
              }
              label={t}
            />
          ))}

          <Typography variant="h6" mt={2} color="Black">
            Extras
          </Typography>

          {["Extra sauce", "Extra cheese", "Extra pepperoni"].map((e) => (
            <FormControlLabel
              sx={{color: "black"}}
              key={e}
              control={
                <Radio
                  checked={extra === e}
                  onChange={() => setExtra(e)}
                />
              }
              label={e}
            />
          ))}

          
          <Box textAlign="right" mt={3}>
            <Button variant="contained" onClick={addToCart}>
              Add to cart
            </Button>
          </Box>

        </Grid>
      </Grid>
    </Box>
    </Box>
  );
}