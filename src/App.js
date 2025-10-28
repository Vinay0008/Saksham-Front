import { CssBaseline, Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

import { BlackUtilityBar, SlimWhiteHeader } from "./components/TopBars";
import HeroBanner from "./components/HeroBanner";
import Eligibility from "./components/Eligibility";
import WelcomeTwoCol from "./components/WelcomeTwoCol";
import OfferAndCTA from "./components/OfferAndCTA";
import CoursesGrid from "./components/CoursesGrid";
import Testimonial from "./components/Testimonial";
import Disclaimer from "./components/Disclaimer";
import StickyBottomBar from "./components/StickyBottomBar";
import Footer from "./components/Footer";
import JoinButton from "./components/JoinButton";
import { JoinDialogProvider } from "./context/JoinDialogProvider.jsx";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BlackUtilityBar />
      <SlimWhiteHeader />
      <HeroBanner />
      <JoinButton />   
      <Eligibility />
      <WelcomeTwoCol />
      <OfferAndCTA />
      <CoursesGrid />
      <Testimonial />
      <Disclaimer />
      <Box sx={{ height: 56 }} />
      <StickyBottomBar />
      <Footer />

    </ThemeProvider>
  );
}
