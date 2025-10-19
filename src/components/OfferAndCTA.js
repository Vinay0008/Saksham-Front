import { Box, Button, Container, Stack, Typography } from "@mui/material";
import JoinButton from "./JoinButton";

export default function OfferAndCTA() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 }, borderTop: (t)=>`1px solid ${t.palette.divider}` }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" sx={{ mb: 2 }}>What We Offer:</Typography>
        <Stack spacing={1.5} sx={{ maxWidth: 1000, mx: "auto" }}>
          <Typography>➤ A placement cell by CRID to facilitate eligible candidates for Government/private opportunities.</Typography>
          <Typography>➤ ₹25,000/month remuneration during deployment for those engaged with departments.</Typography>
          <Typography>➤ ₹10,000/month unemployment allowance during the waiting period post assessment.</Typography>
          <Typography>➤ Merit list for 5000 applicants based on family income/age/education.</Typography>
        </Stack>

        <Stack alignItems="center" sx={{ mt: 4 }}>
          <JoinButton />
        </Stack>
      </Container>
    </Box>
  );
}
