"use client";

import { useRouter } from "next/navigation";
import { Box, Paper, Typography, Button } from "@mui/material";

export default function Confirmation() {
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
    <Box sx={{ p: 3 }}>

      <Paper sx={{ p: 4, textAlign: "center" }}>

        <Typography variant="h4" mb={2}>
          🎉 Thank You!
        </Typography>

        <Typography variant="h6" mb={3}>
          Your order has been placed successfully.
        </Typography>

        <Button
          variant="contained"
          onClick={() => router.push("/dashboard")}
        >
          Back to Menu
        </Button>

      </Paper>

    </Box>
    </Box>
  );
}