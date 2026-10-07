"use client";

import { useRouter } from "next/navigation";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";

export default function Checkout() {
  const router = useRouter();

 {/*I havent implemented any of the storing of payments but make more look like it did */}
  const handlePay = () => {
    
    router.push("/Confirmation");
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
        
    <Box sx={{ p: 3 }}>

      {/* Simple navbar that just has the name and the cart */}
      <Paper sx={{ p: 2, mb: 3, textAlign: "center" }}>
        <Typography variant="h6">Giornos Pizzeria</Typography>
      </Paper>

      <Typography variant="h5" align="center" mb={3} color ="Black">
        Your cart
      </Typography>

      {/* I just left it simple as just multuple boxes that just take inputs from user but doesnt store it */}
      <Paper sx={{ maxWidth: 500, mx: "auto", p: 3 }}>

        <Typography>Email address</Typography>
        <TextField fullWidth sx={{ mb: 2 }} />

        <Typography>Delivery address</Typography>
        <TextField fullWidth sx={{ mb: 2 }} />

        <Typography>Payment methods</Typography>
        <TextField fullWidth sx={{ mb: 2 }} />

        <Grid container spacing={2}>
          <Grid size={6}>
            <Typography>Expiry date</Typography>
            <TextField fullWidth />
          </Grid>

          <Grid size={6}>
            <Typography>CVV</Typography>
            <TextField fullWidth />
          </Grid>
        </Grid>

        <Box textAlign="center" mt={3}>
          <Button variant="contained" onClick={handlePay}>
            Pay
          </Button>
        </Box>

      </Paper>
    </Box>
    </Box>
  );
}