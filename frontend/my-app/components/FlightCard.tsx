import { Card, CardContent, Container, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";  

export default function FlightCard() {
  const router = useRouter()
  return (
    <Card sx={{ margin: "auto", padding: 2 }}>
      <CardContent sx={{ display: "flex", flexDirection: "column" }}>
        {/* Grid Container */}
        <Container
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: 2, 
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Colonne 1: Hours */}
          <Container sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="body1">Hours</Typography>
          </Container>

          {/* Colonne 2: Fly Number */}
          <Container sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="body1">Fly number</Typography>
          </Container>

          {/* Colonne 3: Siege */}
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: 1,
            }}
          >
            <Typography variant="body1">Siege</Typography>
          </Container>

          {/* Colonne 4: Gate */}
          <Container
            sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            <Typography variant="body1">Gate</Typography>
          </Container>

          {/* Colonne 5: Status */}
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              backgroundColor: "blue",
              padding: "8px",
              borderRadius: "5px",
            }}
          >
            <Typography variant="body1">Status</Typography>
          </Container>
          <Container>
            <Button variant="contained" onClick={() => {router.push('/map')}}>Voir plus</Button>
          </Container>
        </Container>
      </CardContent>
    </Card>
  );
}
