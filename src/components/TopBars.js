import { Box, Container, Stack, Typography, Link, IconButton } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";

export function BlackUtilityBar() {
  return (
    <Box sx={{ bgcolor: "#000", color: "#fff", py: 0.5  }}>
      <Container maxWidth="lg">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          gap={2}
          sx={{ fontSize: 13 }}
        >
          <Typography sx={{ fontSize: 13 }}>पहले आओ पहले पाओ</Typography>

          <Stack direction="row" alignItems="center" gap={1.5} flexWrap="wrap">
            <Link
              href="mailto:help@itsakshamyuva.com"
              color="inherit"
              underline="hover"
              sx={{ fontSize: 13 }}
            >
              help@itsakshamyuva.com
            </Link>

            <Stack direction="row" gap={0.5}>
              <IconButton size="small" color="inherit"><FacebookIcon fontSize="inherit" /></IconButton>
              <IconButton size="small" color="inherit"><InstagramIcon fontSize="inherit" /></IconButton>
              <IconButton size="small" color="inherit"><YouTubeIcon fontSize="inherit" /></IconButton>
              <IconButton size="small" color="inherit"><XIcon fontSize="inherit" /></IconButton>
              <IconButton size="small" sx={{ color: "#25D366" }}>
                <WhatsAppIcon fontSize="inherit" />
              </IconButton>
            </Stack>

            <Typography sx={{ fontSize: 13, fontWeight: 700 }}>
              Helpline Number: +91-9588734088
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export function SlimWhiteHeader() {
  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1200,
        bgcolor: "#fff",
        borderBottom: (t) => `1px solid ${t.palette.divider}`,
        py: 1,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
       
        <Box sx={{visibility:"hidden"}}>Filler</Box>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 700,
            fontSize: { xs: 15, md: 17 },
          }}
        >
          IT Saksham Yuva Scheme
        </Typography>

       
        <Box
          component="img"
          src="/images/digitalIndiaLogo.jpg"
          alt="Digital India Logo"
          sx={{
            height: 40,
            width: "auto",
            objectFit: "contain",
          }}
        />
      </Container>
    </Box>
  );
}
