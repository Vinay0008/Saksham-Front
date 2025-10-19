
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

export default function CoursesGrid() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: "#fff" }}>
      <Container maxWidth="xl"> 
        <Typography
          variant="h3"
          align="center"
          sx={{ fontWeight: 800, mb: { xs: 4, md: 6 } }}
        >
          Specially Designed IT Courses
        </Typography>

        <Box
          sx={{
            display: "grid",
            gap: { xs: 2.5, md: 3 },
            gridTemplateColumns: {
              xs: "1fr",    
              sm: "1fr 1fr",  
              md: "repeat(4, 1fr)", 
            },
            alignItems: "stretch",
          }}
        >
          {CARDS.map(({ title, bg, Icon }) => (
            <Paper
              key={title}
              elevation={3}
              sx={{
                height: { xs: 170, md: 190 },   
                bgcolor: bg,
                color: "#fff",
                borderRadius: 3,
                p: { xs: 2.5, md: 3 },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                transition: "transform .22s ease, box-shadow .22s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 10px 24px rgba(0,0,0,.25)",
                },
              }}
            >
              <Stack spacing={2} alignItems="center" sx={{ width: "100%" }}>
                <Avatar
                  sx={{
                    width: 60,
                    height: 60,
                    bgcolor: "rgba(13, 28, 49, .9)",
                    boxShadow: "0 6px 16px rgba(0,0,0,.35)",
                  }}
                >
                  <Icon sx={{ fontSize: 30, color: "#9EC5FF" }} />
                </Avatar>
                <Typography
                  sx={{
                    fontWeight: 700,
                    lineHeight: 1.3,
                    fontSize: { xs: 14.5, md: 15.5 },
                    px: 1,
                  }}
                >
                  {title}
                </Typography>
              </Stack>
            </Paper>
          ))}
        </Box>


        <Box sx={{ display: "flex", justifyContent: "center", mt: { xs: 5, md: 6 } }}>
      <JoinButton />
        </Box>
      </Container>
    </Box>
  );
}
