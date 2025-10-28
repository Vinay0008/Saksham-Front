import { AppBar, Container, Stack, Button, Typography, Link } from "@mui/material";
import JoinButton from "./JoinButton";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function StickyBottomBar() {
  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{
        top: "auto",
        bottom: 0,
        bgcolor: "rgba(255,0,0,0.9)",
        backgroundImage: "linear-gradient(90deg,#ffb36b,#ff0000)",
        py: 1,
      }}
    >
      <Container maxWidth="lg">
        <Stack direction="row" justifyContent="space-between" alignItems="center">
        
          <Button
            startIcon={<WhatsAppIcon />}
            variant="contained"
            sx={{
              backgroundColor: "#25D366",
              color: "#fff",
              fontWeight: 700,
              textTransform: "none",
              borderRadius: 8,
              "&:hover": {
                backgroundColor: "#1EBE5A",
              },
            }}
            href="https://wa.me/919588734088?text=Hello%20I%20want%20to%20know%20more%20about%20IT%20Saksham%20Yuva%20Scheme"
            target="_blank"
            rel="noopener noreferrer"
          >
            Call Now
          </Button>

          {/* Join Button */}
          <JoinButton />
        </Stack>
      </Container>
    </AppBar>
  );
}
