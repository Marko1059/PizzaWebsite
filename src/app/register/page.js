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

export default function Register() {
  const router = useRouter();
  
  {/*This was the hardest one to do and connecting to database and storing the registered users*/}

const [username, setUsername] = useState("");
const [firstname, setFirstname] = useState("");
const [lastname, setLastname] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [adress,SetAdress] = useState("");
  

  const handleRegister = async () => {
    await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({
        username,
        firstname,
        lastname,
        email,
        password,
      }),
    });

    router.push("/login");
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
      <Paper sx={{ p: 2, mb: 4, textAlign: "center" }}>
        <Typography variant="h6">
          Giornos Pizzeria
        </Typography>
      </Paper>

      <Box display="flex" justifyContent="center">
        <Paper sx={{ p: 4, width: 400 }}>
          <Typography variant="h6" textAlign="center" mb={3}>
            Register
          </Typography>


            <Typography>Username</Typography>
          <TextField
            fullWidth
            sx={{ mb: 3 }}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

            <Typography>First name</Typography>
          <TextField
            fullWidth
            sx={{ mb: 3 }}
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />

            <Typography>Last name</Typography>
          <TextField
            fullWidth
            sx={{ mb: 3 }}
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />

          <Typography>Email</Typography>
          <TextField
            fullWidth
            sx={{ mb: 3 }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Typography>Password</Typography>
          <TextField
            fullWidth
            type="password"
            sx={{ mb: 3 }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        
           <Typography>Address</Typography>
          <TextField
            fullWidth
            sx={{ mb: 3 }}
            value={adress}
            onChange={(e) => SetAdress(e.target.value)}
          />
        
          <Box textAlign="center">
            <Button variant="contained" onClick={handleRegister}>
              Register
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  </Box>
  
  );
}