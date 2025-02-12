"use client";

import React from "react";
import Link from "next/link";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  TextField,
  Typography,
} from "@mui/material";

export default function Page() {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Connexion en cours...");
  };

  return (
    <Container maxWidth="xs">
      <Box display="flex" justifyContent="center" alignItems="center" height="80vh">
        <Card sx={{ p: 3, boxShadow: 3, borderRadius: 3, width: "100%" }}>
          <CardContent>
            <Typography variant="h5" fontWeight="bold" textAlign="center" mb={2}>
              Connexion
            </Typography>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <TextField label="E-mail" type="email" variant="outlined" required fullWidth />
              <TextField label="Mot de passe" type="password" variant="outlined" required fullWidth />

              <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                Se connecter
              </Button>
            </form>

            <Typography textAlign="center" mt={2}>
              Pas encore de compte ?{" "}
              <Link href="/register" style={{ color: "#1976d2", textDecoration: "none" }}>
                S'inscrire
              </Link>
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
