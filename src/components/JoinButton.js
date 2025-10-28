import { Box, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useJoinDialog } from "../context/JoinDialogProvider";

export default function JoinButton() {
  const { openDialog } = useJoinDialog();

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", py: 2 }}>
      <Button
        variant="contained"
        endIcon={<ArrowForwardIcon />}
        onClick={openDialog}
        disableElevation
        sx={{
          borderRadius: "999px",
          fontSize: 18,
          fontWeight: 700,
          px: 5,
          py: 1.3,
          textTransform: "none",
          color: "#fff",
          background: "linear-gradient(90deg,#ffb36b,#ff0000)",
          boxShadow: "0 0 15px rgba(255,0,0,0.4)",
          transition: "all 0.3s ease",
          "&:hover": { boxShadow: "0 0 25px rgba(255,0,0,0.7)", transform: "scale(1.05)" },
        }}
      >
        Join Now!!
      </Button>
    </Box>
  );
}
