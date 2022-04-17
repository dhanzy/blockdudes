import React from "react";
import {
  Box,
  Grid,
  Typography,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  AddBusinessOutlined,
  ForumOutlined,
  VolumeUpOutlined,
  AppSettingsAltOutlined,
} from "@mui/icons-material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServiceCard from "../../components/ServiceCard";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    iconComponent: (
      <AddBusinessOutlined fontSize="large" sx={{ color: "secondary.main" }} />
    ),
    title: "ADVANCED BUISNESS STRATEGY",
    content:
      "We have 12 years of experience and the experience to help you plan and develop a winning strategy for your next blockchain project. We've succesfully developed workflow strategies for fortune 500 companies",
  },
  {
    iconComponent: (
      <VolumeUpOutlined fontSize="large" sx={{ color: "secondary.main" }} />
    ),
    title: "Focused Marketing",
    content:
      "We have 12 years of experience and the experience to helo you plan",
  },
  {
    iconComponent: (
      <AppSettingsAltOutlined
        fontSize="large"
        sx={{ color: "secondary.main" }}
      />
    ),
    title: "Technologically Advanced",
    content:
      "We have 12 years of experience and the experience to helo you plan",
  },
  {
    iconComponent: (
      <ForumOutlined fontSize="large" sx={{ color: "secondary.main" }} />
    ),
    title: "Totally Human",
    content:
      "In this industry, those who are successfull are those who listen and solve problem. We're here to truly understand the issue then reverse engineer a solution.",
  },
];

const Services = () => {
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down("sm"));
  const serviceHeader = React.useRef(null);
  const serviceSubHeading = React.useRef(null);
  const serviceSubSubHeading = React.useRef(null);
  const serviceText = React.useRef(null);
  const revealRefs = React.useRef([]);
  revealRefs.current = [];
  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };
  React.useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: serviceHeader.current,
        },
      })
      .from(serviceHeader.current, {
        x: "-50%",
        opacity: 0,
      })
      .from(serviceSubHeading.current, {
        x: "50%",
        opacity: 0,
      })
      .from(serviceSubSubHeading.current, {
        x: "-50%",
        opacity: 0,
      })
      .from(serviceText.current, {
        x: "50%",
        opacity: 0,
      });
  });

  React.useEffect(() => {
    revealRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          autoAlpha: 0,
        },
        {
          duration: 1,
          autoAlpha: 1,
          ease: "none",
          delay: !small ? index + 1 * 1 : 0,
          scrollTrigger: {
            trigger: el,
            start: "top center",
          },
        }
      );
    });
  });
  return (
    <Container maxWidth="xl">
      <Box
        sx={{ backgroundColor: "rgba(0,0,0,0.3)", py: 10, px: small ? 0 : 5 }}
      >
        <Grid container spacing={2}>
          <Grid item lg={6} md={12} sm={12} sx={{ alignSelf: "center" }}>
            <Box>
              <Typography variant="h5" className="header" ref={serviceHeader}>
                LOREM IPSUM
              </Typography>
              <Box sx={{ mt: 5 }}>
                <Typography variant="h3" sx={{ mb: 2 }} ref={serviceSubHeading}>
                  WE DEVELOP BLOCKCHAIN SOLUTIONS
                </Typography>
                <Typography variant="h5" ref={serviceSubSubHeading}>
                  FROM IDEA TO IMPLEMENTATION WE&apos;RE HERE TO HELP
                </Typography>
                <Box sx={{ mt: 5 }}>
                  <Typography component="p" ref={serviceText}>
                    We&apos; are born problem solvers - From to web development
                    and design - <br />
                    launching human solutions is in ourDNA
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={6} md={12} sm={12}>
            <Grid container spacing={2}>
              {services.map((service, index) => (
                <Grid item md={6} key={index} ref={addToRefs}>
                  <ServiceCard
                    iconComponent={service.iconComponent}
                    title={service.title}
                    content={service.content}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Services;
