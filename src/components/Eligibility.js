
import { Box, Container, Typography, Stack } from "@mui/material";

export default function EligibilitySection() {
  const eligibilityPoints = [
    "Applicant should be a domicile of Haryana having a valid PPP ID.",
    "Applicant's age should be between 18 to 35 years.",
    "Applicants should not be in any kind of employment e.g., public/government/private sector/quasi-government or self-employment at the time of applying for the scheme.",
    "Applicants, who are graduate or post-graduate (B. Tech./ BCA/ BSc. IT)/ (M.E./M. Tech./ MCA/MSc IT/MBA IT) from recognized institutes/colleges/universities.",
    "The candidates will be eligible for unemployment allowance only if the annual family income of the candidate does not exceed rupees three lakhs (Rs.3 lakhs) from all sources.",
    "The unemployment allowance will only be commenced post 01 month from the Date of issuance of the passing certificate for the assessment test of the course completed."
  ];

  return (
    <Box
      sx={{
        backgroundImage: "url('/images/back.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        py: { xs: 6, md: 8 },
        color: "#111",
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              textAlign: "left",
              color: "#111",
            }}
          >
            Eligibility Criterion under IT Saksham Yuva Scheme
          </Typography>

          <Typography variant="subtitle1" sx={{ color: "#333" }}>
            The eligibility criterion under this scheme is as follows:
          </Typography>

          <Box component="ul" sx={{ pl: 3, m: 0 }}>
            {eligibilityPoints.map((point, idx) => (
              <Typography
                component="li"
                key={idx}
                sx={{
                  fontSize: 16,
                  mb: 1,
                  lineHeight: 1.6,
                  color: "#222",
                }}
              >
                {point}
              </Typography>
            ))}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
