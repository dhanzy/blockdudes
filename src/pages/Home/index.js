/* eslint-disable react/prop-types */
import React from "react";
import {
  styled,
  Box,
  Typography,
  Container,
  Grid,
  Button,
} from "@mui/material";

import OverLay1 from "../../assets/images/1st.jpg";
import OverLay2 from "../../assets/images/2nd.jpg";
import Services from "./Services";
import Canvas from "../../components/Canvas";
import Portfolio from "./Portfolio";
import TeamSection from "./TeamSection";
import ContactSection from "../../components/ContactSection";
import MainSection from "./MainSection";
import Blog from "./Blog";
import RoadMap from "./RoadMap";

const Section = styled("section")(({ theme }) => ({
  padding: "100px 0px",
  position: "relative",
  backgroundPosition: "center center",
  boxShadow:
    "0 10px 8px 0 rgba(0, 0, 0, 0.5), 0 10px 20px 0 rgba(0, 0, 0, 0.5)",
  backgroundSize: "cover",
  backgroundImage: `url(${OverLay2})`,
  "&:nth-of-type(2n + 1)": {
    backgroundImage: `url(${OverLay1})`,
  },
  "& .header": {
    paddingLeft: "100px",
    position: "relative",
    fontWeight: 400,
    marginBottom: "20px",
    "&::before": {
      position: "absolute",
      content: "''",
      top: "50%",
      left: "0px",
      transform: "transalateY(-50%)",
      lineHeight: 1,
      width: "90px",
      height: "2px",
      backgroundColor: theme.palette.secondary.main,
    },
  },
  "& .heading": {
    position: "relative",
    marginBottom: "30px",
    "&::after": {
      position: "absolute",
      content: "''",
      bottom: "-15px",
      right: "50%",
      transform: "translateX(50%)",
      lineHeight: 1,
      width: "90px",
      height: "4px",
      backgroundColor: theme.palette.secondary.main,
    },
    "&.primary::after": {
      backgroundColor: theme.palette.primary.main,
    },
  },
  [theme.breakpoints.down("md")]: {
    textAlign: "Center",
    "& .mobile-grid": {
      flexFlow: "column-reverse",
      textAlign: "Center",
    },
    "& .header": {
      paddingLeft: "10px",
      width: "fit-content",
      margin: "auto",
      "&::before": {
        width: "40px",
        left: "-40px",
      },
    },
  },
  [theme.breakpoints.down("sm")]: {
    padding: "50px 0px",
  },
}));

const PortfolioContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "rgba(0,0,0,0.5)",
  padding: "3rem 2rem",
  position: "relative",
  zIndex: 500,
  [theme.breakpoints.down("sm")]: {
    padding: "3rem .5rem",
  },
}));

const teams = [
  {
    name: "John Doe",
    position: "Chief Manager",
    imageUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "John Doe",
    position: "Chief Manager",
    imageUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "John Doe",
    position: "Chief Manager",
    imageUrl:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "John Doe",
    position: "Chief Manager",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
];

const Home = ({ timeline }) => {
  return (
    <Box component="main">
      <Section sx={{ minHeight: "100vh" }} id="home">
        <Canvas />
        <MainSection timeline={timeline} />
      </Section>
      <Section id="portfolio">
        <Portfolio />
      </Section>
      <Section>
        <Container maxWidth="xl">
          <PortfolioContainer>
            <Grid container spacing={2} className="mobile-grid">
              <Grid item md={6} sm={12}>
                <Box>
                  <Typography component="p">
                    By thinking globally, we&apos;re a powerful team without
                    compromise or regard for borders. This has allowed us to
                    hire the top designers, engineers and managers to deliver
                    the very best human solutions.
                  </Typography>
                  <Box sx={{ mt: 5 }}>
                    <Button variant="contained" color="secondary">
                      MORE ABOUT US
                    </Button>
                  </Box>
                </Box>
              </Grid>
              <Grid item md={6} sm={12}>
                <Box>
                  <Box color="secondary">
                    <Typography
                      className="header"
                      variant="h5"
                      color="secondary"
                    >
                      LOREM IPSUM
                    </Typography>
                    <Box sx={{ mt: 3 }}>
                      <Typography variant="h2">
                        INTELLIGENCE <br />
                        WITHOUT BORDERS
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </PortfolioContainer>
        </Container>
      </Section>
      <Section>
        <Services />
      </Section>
      <Section id="team">
        <TeamSection teams={teams} />
      </Section>
      <Section>
        <RoadMap />
      </Section>
      <Section id="blog">
        <Blog />
      </Section>
      <Section id="contact">
        <ContactSection />
      </Section>
    </Box>
  );
};

export default Home;
