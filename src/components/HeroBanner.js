
import { Box, Paper } from "@mui/material";

export default function HeroBanner() {
  return (
    <Paper square elevation={0} sx={{ p: 0 }}>
    
      <Box
        component="img"
        src="/images/banner.png"          
        alt="IT Saksham Yuva Scheme Banner"
        sx={{
          width: "100%",
          height: "auto",               
          display: "block",               
          userSelect: "none",
          pointerEvents: "none",
        }}
      />
    </Paper>
  );
}
