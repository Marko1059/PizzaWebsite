"use client";

import { useRouter } from "next/navigation";
import { Box, Grid, Paper, Stack, Typography, Button } from "@mui/material";

export default function Navbar() {
  const router = useRouter();

  return (
    <Paper sx={{ p: 2, mb: 3 }}>
      <Grid container alignItems="center">
        <Grid size={4}>
          <Stack direction="row" spacing={2}>
            <Button onClick={() => router.push("/login")}>Log in</Button>
            <Button onClick={() => router.push("/register")}>Register</Button>
          </Stack>
        </Grid>

        <Grid size={4} textAlign="center">
          <Typography variant="h6">Giornos Pizzeria</Typography>
        </Grid>

        <Grid size={4} textAlign="right">
          <Button onClick={() => router.push("/viewCart")}>Cart</Button>
        </Grid>
      </Grid>
    </Paper>
  );
}