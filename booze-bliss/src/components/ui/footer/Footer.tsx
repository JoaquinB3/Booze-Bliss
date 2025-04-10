import { Box, Container, Typography, Link } from "@mui/material"

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "primary.main", color: "white", py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          Elegance Elixirs
        </Typography>
        <Typography variant="subtitle1" align="center" component="p">
          Descubre el arte de la coctelería clásica con un toque moderno.
        </Typography>
        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          {"Copyright © "}
          <Link color="inherit" href="/">
            Elegance Elixirs
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </Box>
  )
}

