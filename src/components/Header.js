
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function Header() {
  return (
    <AppBar position="sticky" color="inherit" elevation={0} sx={{ borderBottom: (t) => `1px solid ${t.palette.divider}` }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: 72 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: "primary.main" }}>
            Saksham
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
