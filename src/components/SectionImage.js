
import { Box, Container, Grid, Paper, Typography } from "@mui/material";

export default function SectionImage() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Section with Image
          </Typography>
          <Typography color="text.secondary">
            This section mirrors the second image area in your recording. Replace the file below with your own local image.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper
            elevation={2}
            sx={{
              overflow: "hidden",
              borderRadius: 2,
              aspectRatio: "16 / 9",
            }}
          >
            <Box
              component="img"
              src="/images/section.png"         
              alt="section"
              sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
