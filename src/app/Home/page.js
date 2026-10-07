"use client";

import { useRouter } from "next/navigation";
import {
  Box,
  Grid,
  Paper,
  Stack,
  Typography,
  Button,
  TextField,
} from "@mui/material";

export default function Page() {
  const router = useRouter();

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

        {/* Same navbar as for the dashboard*/}
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

        {/* all of those buttons will send the user to the dashboard, it was just created for the looks */}
        <Box textAlign="center" mb={4}>
          <Button
            variant="contained"
            sx={{
              borderRadius: "30px",
              px: 6,
              py: 1.5,
              fontSize: "16px",
            }}
            onClick={() => router.push("/dashboard")}
          >
            Order Pizza Now!
          </Button>
        </Box>

        
        <Grid container spacing={3} justifyContent="center">

          
          <Grid size={4}>
            <Paper sx={{ p: 2, borderRadius: 3 }}>
              <img src="/pizza1.jpg" width="120%" />
            </Paper>
          </Grid>

          
          <Grid size={4}>
            <Paper sx={{ p: 3, borderRadius: 3, textAlign: "center" }}>
              <Typography variant="h6" mb={2}>
                Enter your address
              </Typography>

              <TextField
                fullWidth
                placeholder="Type here"
                sx={{ mb: 3 }}
              />

              <Stack direction="row" spacing={2} justifyContent="center">
                <Button variant="outlined" onClick ={() => router.push("/dashboard")}>Delivery</Button>
                <Button variant="outlined" onClick ={() => router.push("/dashboard")}>Collection</Button>
              </Stack>
            </Paper>
          </Grid>

          
          <Grid size={3.5}>
            <Paper sx={{ p: 2, borderRadius: 3 }}>
              <img src="/pizza2.jpg" width="100%" />
            </Paper>
          </Grid>

        </Grid>

        
        <Paper sx={{ mt: 4, p: 3, textAlign: "center", borderRadius: 3 }}>
          About us | Follow us
        </Paper>

      </Box>
    </Box>
  );
}