import {
  Avatar,
  Box,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import LanOutlinedIcon from "@mui/icons-material/LanOutlined";
import { motion, useReducedMotion } from "framer-motion";
import { useCallback } from "react";
import JoinButton from "./JoinButton";

const CARDS = [
  { title: "Server Administration Microsoft/ Linux", bg: "#2E7D32", Icon: EmojiObjectsOutlinedIcon },
  { title: "Web And Mobile Application Development", bg: "#F5A000", Icon: TimelineOutlinedIcon },
  { title: "Digital Marketing & Social Media Handling", bg: "#E2211C", Icon: GroupsOutlinedIcon },
  { title: "Emerging Technologies", bg: "#4DB6AC", Icon: TrendingUpOutlinedIcon },
  { title: "Secure Coding in Java, DotNet, PHP", bg: "#00BCD4", Icon: PublicOutlinedIcon },
  { title: "DBA in SQL, PostgreSQL", bg: "#1976D2", Icon: CampaignOutlinedIcon },
  { title: "UI/UX Design, Web Design", bg: "#B39DDB", Icon: DesignServicesOutlinedIcon },
  { title: "Networking – Network Support, LAN/ WAN", bg: "#EF6C00", Icon: LanOutlinedIcon },
];

const MotionPaper = motion(Paper);

export default function CoursesGrid() {
  const prefersReduced = useReducedMotion();

  const handleMove = useCallback((e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.setProperty("--rx", `${y / 12}deg`);
    card.style.setProperty("--ry", `${-x / 12}deg`);
  }, []);

  const handleLeave = useCallback((e) => {
    const card = e.currentTarget;
    card.style.setProperty("--rx", "0deg");
    card.style.setProperty("--ry", "0deg");
  }, []);

  return (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        background:
          "radial-gradient(800px circle at 50% 10%, #ffffff 0%, #f5f8ff 60%, #e8efff 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* background accent glows */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          "&::before, &::after": {
            content: '""',
            position: "absolute",
            width: 400,
            height: 400,
            borderRadius: "50%",
            filter: "blur(80px)",
            opacity: 0.25,
          },
          "&::before": {
            top: -120,
            left: -100,
            background: "linear-gradient(45deg, #ff8a00, #e52e71)",
          },
          "&::after": {
            bottom: -100,
            right: -100,
            background: "linear-gradient(45deg, #00c6ff, #0072ff)",
          },
        }}
      />

      <Container maxWidth="xl">
        <Typography
          variant="h3"
          align="center"
          sx={{
            fontWeight: 900,
            letterSpacing: "-0.02em",
            mb: { xs: 5, md: 7 },
            lineHeight: 1.1,
            background: "linear-gradient(90deg,#141E30,#243B55)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Specially Designed IT Courses
        </Typography>

        <Box
          sx={{
            display: "grid",
            gap: { xs: 2.5, md: 3.5 },
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(4, 1fr)" },
            alignItems: "stretch",
          }}
        >
          {CARDS.map(({ title, bg, Icon }, index) => (
            <MotionPaper
              key={title}
              onMouseMove={handleMove}
              onMouseLeave={handleLeave}
              initial={{ opacity: 0, y: 25, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={
                prefersReduced
                  ? {}
                  : { y: -10, scale: 1.03, rotateX: "var(--rx)", rotateY: "var(--ry)" }
              }
              sx={{
                position: "relative",
                height: { xs: 200, md: 220 },
                borderRadius: 4,
                overflow: "hidden",
                transformStyle: "preserve-3d",
                background: `linear-gradient(135deg, ${bg}cc, ${bg}99)`,
                color: "#fff",
                boxShadow: `0 10px 25px ${bg}40, inset 0 1px 0 rgba(255,255,255,.2)`,
                transition: "all .4s ease",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  padding: "2px",
                  borderRadius: 4,
                  background:
                    "conic-gradient(from 0deg, #ff6b00, #ff007f, #7a5cff, #00c2ff, #00ff9d, #ff6b00)",
                  WebkitMask:
                    "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                  animation: "spin 5s linear infinite",
                },
                "@keyframes spin": {
                  to: { transform: "rotate(360deg)" },
                },
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  p: { xs: 2.5, md: 3 },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  backdropFilter: "blur(2px)",
                }}
              >
                <Stack spacing={2.5} alignItems="center">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 250 }}
                  >
                    <Avatar
                      sx={{
                        width: 70,
                        height: 70,
                        bgcolor: "#fff",
                        boxShadow: "0 8px 18px rgba(0,0,0,.35)",
                        border: "3px solid rgba(255,255,255,.4)",
                      }}
                    >
                      <Icon sx={{ fontSize: 34, color: bg }} />
                    </Avatar>
                  </motion.div>

                  <Typography
                    sx={{
                      fontWeight: 800,
                      fontSize: { xs: 15, md: 16 },
                      lineHeight: 1.25,
                      px: 1.5,
                      textShadow: "0 2px 8px rgba(0,0,0,.25)",
                    }}
                  >
                    {title}
                  </Typography>
                </Stack>
              </Box>
            </MotionPaper>
          ))}
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", mt: { xs: 6, md: 8 } }}>
          <JoinButton />
        </Box>
      </Container>
    </Box>
  );
}
