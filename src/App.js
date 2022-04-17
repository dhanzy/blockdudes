import React from "react";
import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import theme from "./Themes/theme";

gsap.registerPlugin(ScrollTrigger);

function App() {
  let timeline = gsap.timeline();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar timeline={timeline} />
      <Home />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
