import { AppBar, Container, Stack, Button, Typography } from "@mui/material";
import JoinButton from "./JoinButton";

export default function StickyBottomBar() {
  return (
    <AppBar position="fixed" color="transparent" elevation={0}
      sx={{
        top: "auto", bottom: 0,
        bgcolor: "rgba(255,0,0,0.9)",
        backgroundImage: "linear-gradient(90deg,#ffb36b,#ff0000)",
        py: 1
      }}>
      <Container maxWidth="lg">
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography sx={{ color: "#fff", fontWeight: 700 }}>Call Now</Typography>
     <JoinButton />
        </Stack>
      </Container>
    </AppBar>
  );
}
