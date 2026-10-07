"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
} from "@mui/material";

export default function Login() {
  const router = useRouter();

  {/* This takes in from api that connects to the database and takes in registered users*/}
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const handleLogin = async () => {
    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();

    if (data.success) {
      router.push("/dashboard");
    } else {
      alert("Invalid login");
    }
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
    
    <Box sx={{ p: 4 }}>

      {/*Very simple navbar as I did not seen the point of copying and pasting the same navbar*/}
      <Paper sx={{ p: 2, mb: 4, textAlign: "center" }}>
        <Typography variant="h6">
          Giornos Pizzeria
        </Typography>
      </Paper>

      {/* This is a box that lets user to put their user info and lets them log in*/}
      <Box display="flex" justifyContent="center">
        <Paper sx={{ p: 4, width: 400 }}>

          <Typography variant="h6" textAlign="center" mb={3}>
            Login
          </Typography>

          <Typography>Email</Typography>
          <TextField
            fullWidth
            placeholder="Type here"
            sx={{ mb: 3 }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Typography>Password</Typography>
          <TextField
            fullWidth
            type="password"
            placeholder="Type here"
            sx={{ mb: 3 }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Box textAlign="center">
            <Button variant="contained" onClick={handleLogin}>
              Login
            </Button>
          </Box>

        </Paper>
      </Box>
    </Box>
  </Box>
  );
}