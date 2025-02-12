"use client"

import { useState } from 'react'
import {Avatar,Box,Button,Card,CardContent,Container,TextField,Typography,} from "@mui/material";

function page() {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    bio: "Hello",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(user);

    // Gère les changements dans le formulaire
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    // Sauvegarde les modifications
    const handleSave = () => {
      setUser(formData);
      setIsEditing(false);
    };
  return (
    <Container maxWidth="sm">
      <Card sx={{ mt: 4, p: 3, boxShadow: 3 }}>
        <CardContent sx={{ textAlign: "center" }}>
          <Avatar
            sx={{ width: 80, height: 80, margin: "auto", mb: 2 }}
            src="/avatar.jpg"
            alt="User Avatar"
          />
          <Typography variant="h5" fontWeight="bold">
            {user.name}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {user.email}
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            {user.bio}
          </Typography>

          {/* Formulaire de modification */}
          {isEditing && (
            <Box mt={3} display="flex" flexDirection="column" gap={2}>
              <TextField
                label="Nom"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                label="Bio"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                multiline
                rows={3}
                fullWidth
              />
            </Box>
          )}

          {/* Boutons */}
          <Box mt={3}>
            {isEditing ? (
              <Button variant="contained" color="success" onClick={handleSave}>
                Sauvegarder
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={() => setIsEditing(true)}
              >
                Modifier le profil
              </Button>
            )}
          </Box>
        </CardContent>
      </Card>
    </Container>
  )
}

export default page