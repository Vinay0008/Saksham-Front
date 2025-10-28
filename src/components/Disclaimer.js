
import { Box, Container, Typography } from "@mui/material";

export default function DisclaimerSection() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: "#fff" }}>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontWeight: 800,
            mb: 4,
            textTransform: "uppercase",
            color: "#d32f2f",
          }}
        >
          Disclaimer
        </Typography>

        <Typography sx={{ mb: 3, lineHeight: 1.8 ,fontSize:10}}>
          This website belongs to an <strong>Authorized Training Partner</strong> under HKCL
          (Haryana Knowledge Corporation Limited) for the “IT Saksham Yuva Yojna”. The purpose of
          this website is to provide awareness, mobilization, and training-related information.
        </Typography>

        <Typography sx={{ mb: 3, lineHeight: 1.8 ,fontSize:10}}>
          The official government website of the scheme is:{" "}
          <a
            href="https://infotechsakshamyuva.haryana.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#1976d2", textDecoration: "none", fontWeight: 600 ,fontSize:10}}
          >
            https://infotechsakshamyuva.haryana.gov.in/
          </a>
        </Typography>

        <Typography sx={{ mb: 3, lineHeight: 1.8 ,fontSize:10}}>
          Applicants must apply and make any fee payments only through the official government
          portal. Apart from the official channels, no individual or agency is authorized to collect
          money on behalf of the scheme. Any such demand should be treated as fraudulent and
          reported to the authorities.
        </Typography>

        <Typography sx={{ mb: 3, lineHeight: 1.8 ,fontSize:10}}>
          While this website supports training and awareness activities as an authorized partner,
          all rights, benefits, decisions, and responsibilities related to the scheme remain
          exclusively with the <strong>Government of Haryana and HKCL</strong>. This website does not
          substitute the role of the Government or HKCL and cannot guarantee selection, benefits, or
          approvals under the scheme.
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            mt: 5,
            mb: 1.5,
            color: "#212121"
            ,fontSize:10
          }}
        >
          No Guarantee Clause
        </Typography>
        <Typography sx={{ mb: 3, lineHeight: 1.8 ,fontSize:10}}>
          The information provided on this website is for general informational purposes only and
          may change without prior notice. We make no guarantees regarding the completeness,
          accuracy, reliability, or suitability of the content. Applicants should always verify
          details from the official government portal before taking any action.
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            mt: 5,
            mb: 1.5,
            color: "#212121"
            ,fontSize:10
          }}
        >
          No Responsibility for Third-Party Links
        </Typography>
        <Typography sx={{ mb: 3, lineHeight: 1.8 ,fontSize:10}}>
          This website may provide links to third-party websites or resources for user convenience.
          We do not control, endorse, or take responsibility for the content, accuracy, or policies
          of such third-party websites. Visiting such links is at the user’s own risk, and we shall
          not be liable for any damages or consequences.
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            mt: 5,
            mb: 1.5,
            color: "#212121",fontSize:10
          }}
        >
          Data Privacy Clause
        </Typography>
        <Typography sx={{ mb: 3, lineHeight: 1.8 ,fontSize:10}}>
          This website does not automatically collect personally identifiable information. Any
          personal data voluntarily shared (e.g., through forms or communication) will be used only
          for training and mobilization purposes and will not be sold, misused, or shared without
          consent. Users should avoid submitting sensitive personal, financial, or Aadhaar-related
          details on this website. We comply with the IT Act, 2000 and applicable Indian data
          protection rules.
        </Typography>

        <Typography sx={{ lineHeight: 1.8 ,fontSize:10}}>
          By using this website, you acknowledge that you have read, understood, and agreed to this
          disclaimer. For official scheme information, please visit the government portal.
        </Typography>
      </Container>
    </Box>
  );
}
