import { Box, Container, Typography } from "@mui/material";
export default function Footer() {
  return (
    <Box sx={{ borderTop: (t)=>`1px solid ${t.palette.divider}`, py: 3, bgcolor: "background.paper", mt: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} IT Saksham Yuva.
        </Typography>
      </Container>
    </Box>
  );
}
