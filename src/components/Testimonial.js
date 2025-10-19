
import { Avatar, Box, Container, Paper, Stack, Typography, IconButton } from "@mui/material";
import Slider from "react-slick";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TESTIMONIALS = [
  {
    name: "Mr Rohit Sangwan",
    role: "Alumni, 2024 Cohort",
    text:
      "Exceptional service! They truly understood our vision and brought it to life with incredible detail and creativity. Professional, timely, and highly recommended for anyone seeking top-quality results.",
    avatar: "/images/testimonials/user1.jpg", 
  },
  {
    name: "Neha Sharma",
    role: "B.Tech (CSE)",
    text:
      "The training was practical and industry-aligned. Mentors were supportive and the placement support helped me land interviews quickly.",
    avatar: "/images/testimonials/user2.jpg",
  },
  {
    name: "Aman Verma",
    role: "MCA Graduate",
    text:
      "Loved the curriculum depth and hands-on projects. The program really boosted my confidence with modern tools and workflows.",
    avatar: "/images/testimonials/user3.jpg",
  },
];

function Arrow({ onClick, dir = "left" }) {
  const Icon = dir === "left" ? ChevronLeftIcon : ChevronRightIcon;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: { xs: "unset", md: 32 },
        bottom: { xs: -20, md: "unset" },
        ...(dir === "left" ? { left: { xs: "40%", md: "unset" }, right: { md: 88 } } : { right: 0 }),
        zIndex: 2,
        bgcolor: "#fff",
        boxShadow: 2,
        "&:hover": { bgcolor: "#fff" },
      }}
    >
      <Icon />
    </IconButton>
  );
}

export default function TestimonialCarousel() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4500,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow dir="right" />,
    prevArrow: <Arrow dir="left" />,
    adaptiveHeight: true,
  };

  return (
    <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: (t) => t.palette.grey[50] }}>
      <Container maxWidth="lg">
        <Typography variant="overline">Testimonial</Typography>
        <Typography variant="h3" sx={{ mb: 3, fontWeight: 800 }}>
          What People Says About Our Work
        </Typography>

        <Box sx={{ position: "relative" }}>
          <Slider {...settings}>
            {TESTIMONIALS.map((t, i) => (
              <Box key={i} sx={{ px: { xs: 1, md: 4 } }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 3, md: 5 },
                    borderRadius: 3,
                    backgroundImage: "url('/images/mesh.png')", 
                    backgroundSize: "cover",
                  }}
                >
                  <Stack spacing={2}>
                    <FormatQuoteIcon sx={{ fontSize: 36, color: "text.disabled" }} />
                    <Typography color="text.secondary" sx={{ fontSize: 18, lineHeight: 1.8, fontStyle: "italic" }}>
                      “{t.text}”
                    </Typography>

                    <Stack direction="row" spacing={2} alignItems="center" sx={{ pt: 1 }}>
                      <Avatar
                        src={t.avatar}
                        alt={t.name}
                        sx={{ width: 56, height: 56, bgcolor: "primary.main" }}
                      >
                        {t.name.split(" ").map(w => w[0]).slice(0,2).join("")}
                      </Avatar>
                      <Box>
                        <Typography sx={{ fontWeight: 700 }}>{t.name}</Typography>
                        <Typography variant="body2" color="text.secondary">{t.role}</Typography>
                      </Box>
                    </Stack>
                  </Stack>
                </Paper>
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
}
