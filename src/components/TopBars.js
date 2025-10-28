// src/components/TopBars.tsx
import { Box, Container, Stack, Typography, Link, IconButton, Divider } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";

export function BlackUtilityBar() {
  return (
    <Box sx={{ bgcolor: "#000", color: "#fff", py: { xs: 0.5, sm: 0.75 } }}>
      <Container maxWidth="lg" sx={{ px: { xs: 1, sm: 2 } }}>
        {/* On mobile stack into 2 rows to avoid crowding */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent={{ xs: "center", md: "space-between" }}
          alignItems={{ xs: "center", md: "center" }}
          gap={{ xs: 0.75, md: 2 }}
          sx={{ fontSize: { xs: 12, sm: 13 } }}
        >
          {/* Left line */}
          <Stack
            direction="row"
            alignItems="center"
            gap={1}
            flexWrap="wrap"
            sx={{ width: { xs: "100%", md: "auto" }, justifyContent: { xs: "center", md: "flex-start" } }}
          >
            <Typography sx={{ fontSize: { xs: 12, sm: 13 }, whiteSpace: "nowrap" }}>
              पहले आओ पहले पाओ
            </Typography>

            <Divider
              flexItem
              orientation="vertical"
              sx={{ display: { xs: "none", sm: "block" }, borderColor: "rgba(255,255,255,.25)" }}
            />

            <Link
              href="mailto:help@itsakshamyuva.com"
              color="inherit"
              underline="hover"
              sx={{ fontSize: { xs: 12, sm: 13 }, whiteSpace: "nowrap" }}
            >
              help@itsakshamyuva.com
            </Link>
          </Stack>

          {/* Social + helpline block */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignItems="center"
            gap={{ xs: 0.5, sm: 1.25 }}
            sx={{ width: { xs: "100%", md: "auto" } }}
          >
            {/* Social row */}
            <Stack direction="row" alignItems="center" gap={{ xs: 0.25, sm: 0.5 }}>
              <IconButton
                size="small"
                color="inherit"
                component="a"
                href="https://www.facebook.com/Itsakshamyuva"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ p: { xs: 0.5, sm: 0.5 } }}
              >
                <FacebookIcon sx={{ fontSize: { xs: 16, sm: 18 } }} />
              </IconButton>

              <IconButton
                size="small"
                color="inherit"
                component="a"
                href="https://www.instagram.com/itsakshamyuva/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ p: { xs: 0.5, sm: 0.5 } }}
              >
                <InstagramIcon sx={{ fontSize: { xs: 16, sm: 18 } }} />
              </IconButton>

              <IconButton
                size="small"
                color="inherit"
                component="a"
                href="https://www.youtube.com/@ITSakshamYuva"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ p: { xs: 0.5, sm: 0.5 } }}
              >
                <YouTubeIcon sx={{ fontSize: { xs: 16, sm: 18 } }} />
              </IconButton>

              <IconButton
                size="small"
                color="inherit"
                component="a"
                href="https://x.com/itsakshamyuva"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ p: { xs: 0.5, sm: 0.5 } }}
              >
                <XIcon sx={{ fontSize: { xs: 16, sm: 18 } }} />
              </IconButton>

              <IconButton
                size="small"
                color="inherit"
                component="a"
                href="https://in.pinterest.com/itsakshamy/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ p: { xs: 0.5, sm: 0.5 } }}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png"
                  alt="Pinterest"
                  style={{ width: 16, height: 16, display: "block" }}
                />
              </IconButton>

              <IconButton
                size="small"
                sx={{ color: "#25D366", p: { xs: 0.5, sm: 0.5 } }}
                component="a"
                href="https://wa.me/919588734088"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon sx={{ fontSize: { xs: 16, sm: 18 } }} />
              </IconButton>
            </Stack>

            {/* Helpline (wrap nicely on small screens) */}
            <Typography
              sx={{
                fontSize: { xs: 12, sm: 13 },
                fontWeight: 700,
                textAlign: { xs: "center", sm: "left" },
                lineHeight: 1.3,
              }}
            >
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
        py: { xs: 0.75, sm: 1 },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          px: { xs: 1, sm: 2 },
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
        }}
      >
        {/* Left spacer keeps the title perfectly centered */}
        <Box sx={{ visibility: "hidden" }}>Filler</Box>

        {/* Center title */}
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 700,
            fontSize: { xs: 15, md: 17 },
            textAlign: "center",
            whiteSpace: "nowrap",
            mx: "auto",
          }}
        >
          IT Saksham Yuva Scheme
        </Typography>

        {/* Right logo (shrinks on xs, never overflows) */}
        <Box
          component="img"
          src="/images/digitalIndiaLogo.jpg"
          alt="Digital India Logo"
          sx={{
            justifySelf: "end",
            height: { xs: 28, sm: 36, md: 40 },
            width: "auto",
            objectFit: "contain",
            maxWidth: { xs: 120, sm: 160 },
          }}
        />
      </Container>
    </Box>
  );
}
