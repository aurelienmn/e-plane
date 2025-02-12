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
  // Gestion de la soumission du formulaire
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Formulaire soumis !");
  };

  return (
    <Container maxWidth="sm">
      <Box display="flex" justifyContent="center" alignItems="center" height="80vh">
        <Card sx={{ p: 3, boxShadow: 3, borderRadius: 3, width: "100%" }}>
          <CardContent>
            <Typography variant="h5" fontWeight="bold" textAlign="center" mb={2}>
              Inscription
            </Typography>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <TextField label="E-mail" type="email" variant="outlined" required fullWidth />
              <TextField label="Nom d'utilisateur" type="text" variant="outlined" required fullWidth />
              <TextField label="Mot de passe" type="password" variant="outlined" required fullWidth />

              <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                S'inscrire
              </Button>
            </form>

            <Typography textAlign="center" mt={2}>
              Déjà un compte ? <Link href="/connexion" style={{ color: "#1976d2", textDecoration: "none" }}>Se connecter</Link>
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
