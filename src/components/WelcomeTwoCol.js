
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import JoinButton from "./JoinButton";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function WelcomeTwoCol() {
  
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 2800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
  };

 
  const images = [
    "/images/B4.jpeg",
    "/images/B1.jpeg",
    "/images/B3.jpeg",
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
       
        <Typography
          variant="h3"
          align="center"
          sx={{
            fontWeight: 800,
            mb: 2,
            lineHeight: 1.2,
            background: "linear-gradient(90deg, #ff6b00, #ffb100)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Welcome to IT Saksham Yuva Scheme 2024 in Haryana
        </Typography>

        <Typography
          align="center"
          color="text.secondary"
          sx={{
            maxWidth: 980,
            mx: "auto",
            mb: 6,
            fontSize: { xs: 15, md: 16 },
            lineHeight: 1.7,
          }}
        >
          To fulfill the promise of the Government of Haryana to enhance the IT
          skills of unemployed youth of Haryana State to give them a career
          readiness for the digital world of work.
        </Typography>

        <Grid container spacing={4} alignItems="flex-start">
         
          <Grid item xs={12} md={6}>
            <Stack spacing={2}>
              <Typography sx={{ fontSize: 16, color: "#333", lineHeight: 1.8 }}>
                ➢ The State Government has launched IT Saksham Yuva Scheme 2024
                under which IT skills enhancement training would be given to{" "}
                <strong>5000 youths free of cost.</strong> (A refundable amount
                of ₹5,000 shall be deposited with the government and will be
                reimbursed upon successful completion of the training program.)
              </Typography>

              <Typography sx={{ fontSize: 16, color: "#333", lineHeight: 1.8 }}>
                ➢ The IT Saksham Yuva on completion/passing the training courses
                may be given employment opportunities in various Departments/
                Boards/ Corporations/ Registered Societies/ Agencies in the
                State of Haryana or private entities.
              </Typography>

              <Typography sx={{ fontSize: 16, color: "#333", lineHeight: 1.8 }}>
                ➢ For the first six months, trainees receive{" "}
                <strong>₹20,000/month</strong>; from month seven onward, this
                rises to <strong>₹25,000/month</strong>, paid by the deploying
                agency. If unable to secure deployment, a government-funded
                unemployment allowance of <strong>₹10,000/month</strong> is
                provided.
              </Typography>
            </Stack>

            <Box
              sx={{
                mt: 4,
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <JoinButton />
            </Box>
          </Grid>

          
          <Grid item xs={12} md={6}>
            <Paper
              elevation={22}
              sx={{
             
                overflow: "hidden",
                mx: "auto",
                maxWidth: 560,
              }}
            >
              <Slider {...settings}>
                {images.map((src, idx) => (
                  <Box key={idx}>
                    <Box
                      component="img"
                      src={src}
                      alt={`scheme ${idx + 1}`}
                      sx={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                        transition: "transform 0.6s ease-in-out",
                        "&:hover": { transform: "scale(1.03)" },
                      }}
                    />
                  </Box>
                ))}
              </Slider>
            </Paper>

            <Box sx={{ mt: 3 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 800,
                  background: "linear-gradient(90deg,#ff6b00,#ffb100)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                IT Saksham Yuva Scheme 2024
              </Typography>

              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                The Government of Haryana to enhance the IT skills
              </Typography>

              <Stack spacing={1.5} color="text.secondary">
                <Typography sx={{ fontSize: 16, lineHeight: 1.8 }}>
                  ➢ The scheme will provide IT skills training to 5000 youths in
                  the first phase to graduate/post-graduate applicants from IT
                  backgrounds to enhance their employment opportunities in
                  Government or private sector.
                </Typography>

                <Typography sx={{ fontSize: 16, lineHeight: 1.8 }}>
                  ➢ The youths will undertake the Haryana IT Program free of
                  cost for a minimum duration of 3 months from State
                  skilling/training agencies Haryana State Electronics
                  Development Corporation Limited, Haryana Knowledge Corporation
                  Limited, and Shri Vishwakarma Skill University.
                </Typography>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
