
import { Box, Button, Container, Stack, Typography, Paper } from "@mui/material";

export default function Hero() {
  return (
    <Paper
      square
      elevation={0}
      sx={{
        position: "relative",
        backgroundImage: `url('/images/banner.png')`,  
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: { xs: 320, md: 480 },
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          bgcolor: "rgba(0,0,0,0.35)",
        }}
      />
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Stack spacing={2} sx={{ color: "common.white", maxWidth: 720 }}>
          <Typography variant="h2">Welcome to Saksham</Typography>
          <Typography variant="h6" sx={{ opacity: 0.95 }}>
            A simple single-page demo built with React and MUI.
          </Typography>
          <Stack direction="row" spacing={2} sx={{ pt: 1 }}>
            <Button variant="contained" color="secondary" size="large">
              Get Started
            </Button>
            <Button variant="outlined" size="large" sx={{ color: "common.white", borderColor: "common.white" }}>
              Learn More
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Paper>
  );
}
