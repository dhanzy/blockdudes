import React from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  IconButton,
  styled,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Email, Twitter, Telegram } from "@mui/icons-material";
import Scrollspy from "react-scrollspy";
import propTypes from "prop-types";

const SocialLinks = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: "30px",
  left: "12%",
  "& .social-links--container": {
    position: "relative",
    "&::after": {
      position: "absolute",
      content: "' '",
      width: "60vw",
      height: "3px",
      backgroundColor: "#fff",
      bottom: "50%",
      left: "120%",
      transform: "translateY(50%)",
    },
  },
  [theme.breakpoints.down("md")]: {
    left: "5%",
  },
}));

const RightNav = styled(Box)({
  position: "fixed",
  right: "30px",
  top: "45%",
  zIndex: 100,
  "& a .round": {
    width: "15px",
    height: "15px",
    border: "1px solid #00FFED",
    borderRadius: "50%",
    margin: "12px 0px",
    transition: "all .5s ease",
  },
  "& a.is-current .round": {
    transform: "scale(1.5)",
    background: "#00FFED",
    filter: "blur(5px)",
  },
});

const ContentText = styled(Box)(({ theme }) => ({
  "& .scroll-down": {
    position: "absolute",
    bottom: "50px",
    left: "50%",
    height: "50px",
    width: "30px",
    transform: "translate(-50%, -20%)",
    border: `2px solid ${theme.palette.secondary.main}`,
    borderRadius: "50px",
    cursor: "pointer",
    "&::before, &::after": {
      content: "''",
      position: "absolute",
      top: "20%",
      left: "50%",
      height: "10px",
      width: "10px",
      border: `2px solid ${theme.palette.secondary.main}`,
      transform: "translate(-50%, -50%) rotate(45deg)",
      borderTop: "transparent",
      borderLeft: "transparent",
      animation: "scroll-down 1s ease-in-out infinite",
    },
    "&::after": {
      top: "50%",
    },
  },
  [theme.breakpoints.down("md")]: {
    position: "relative",
    height: "100vh",
    width: "100vw",
    margin: "-16px",
    marginTop: "-100px",
    zIndex: 5,
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& p": {
      fontWeight: 400,
      marginTop: "20px",
    },
  },
  [theme.breakpoints.down("sm")]: {},
  ["@keyframes scroll-down"]: {
    "0%": {
      opacity: 0,
    },
    "30%": {
      opacity: 1,
    },
    "60%": {
      opacity: 1,
    },
    "100%": { opacity: 0, top: "90%" },
  },
}));

const CubeContainer = styled(Grid)(({ theme }) => ({
  "& .inner-container": {
    padding: "100px 0px",
  },
  [theme.breakpoints.down("md")]: {
    position: "absolute",
    top: "30%",
    left: "30%",
    transform: "translate(-50%, -50%)",
    zIndex: 2,
  },
}));

const Cube = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "300px",
  height: "300px",
  transformStyle: "preserve-3d",
  transform: "rotateX(-30deg)",
  animation: "animate 4s linear infinite",
  "& .top": {
    width: "300px",
    height: "300px",
    background: "#28899547",
    transform: "rotateX(90deg) translateZ(150px)",
    "&::before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      width: "300px",
      height: "300px",
      background: "#00FFED",
      transform: "translateZ(-400px)",
      filter: "blur(20px)",
      boxShadow:
        "0 0 120px rgba(59,210, 235,0.2), 0 0 200px rgba(59,210, 235,0.4), 0 0 300px rgba(59,210, 235,0.6), 0 0 400px rgba(59,210, 235,0.8), 0 0 500px rgba(59,210, 235,1)",
    },
  },
  "& div": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    transformStyle: "preserve-3d",
    "& span": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "linear-gradient(#37989D, #00FFED)",
      transform: "rotateY(calc(90deg * var(--i))) translateZ(150px)",
    },
  },
  [theme.breakpoints.down("md")]: {
    position: "absolute",
    width: "150px",
    height: "150px",
    transformStyle: "preserve-3d",
    "& .top": {
      width: "150px",
      height: "150px",
      transform: "rotateX(90deg) translateZ(75px)",
      "&::before": {
        width: "150px",
        height: "150px",
        transform: "translateZ(-250px)",
      },
    },
    "& span": {
      transform: "rotateY(calc(90deg * var(--i))) translateZ(75px) !important",
    },
  },
  ["@keyframes animate"]: {
    "0%": {
      transform: "rotateX(-30deg) rotateY(0deg)",
    },
    "100%": {
      transform: "rotateX(-30deg) rotateY(360deg)",
    },
  },
}));

const MainSection = ({ timeline }) => {
  const theme = useTheme();
  const medium = useMediaQuery(theme.breakpoints.down("lg"));
  let socialLink = React.useRef(null);
  let rightNav = React.useRef(null);
  let homeText1 = React.useRef(null);
  let homeText2 = React.useRef(null);
  let cube = React.useRef(null);
  React.useEffect(() => {
    timeline.from(socialLink, {
      x: "-50px",
      opacity: 0,
    });
    timeline.from(rightNav, {
      x: "-50px",
      opacity: 0,
    });
    timeline.from(homeText1, {
      x: "-50px",
      opacity: 0,
    });
    timeline.from(homeText2, {
      x: "50px",
      opacity: 0,
    });
    timeline.from(cube, {
      duration: 1,
      opacity: 0,
    });
  });
  return (
    <>
      <Container maxWidth="xl" sx={{ height: "100%" }}>
        <Grid container spacing={2} sx={{ height: "100%" }}>
          <Grid
            item
            lg={8}
            md={12}
            sm={12}
            sx={{
              display: "flex",
              justifContent: "center",
              alignItems: "Center",
            }}
          >
            <ContentText>
              <Box sx={{ width: "100%", maxWidth: "800px" }}>
                <Typography
                  variant="h2"
                  color="primary"
                  sx={{ fontWeight: "600" }}
                  ref={(el) => (homeText1 = el)}
                >
                  Do you feel like Developing your own contract?
                </Typography>
                <Box>
                  <Typography
                    component="p"
                    ref={(el) => (homeText2 = el)}
                    sx={{
                      mt: 5,
                      width: "100%",
                      maxWidth: "600px",
                      fontSize: "1.3rem !important",
                      margin: medium ? "auto" : "inherit",
                    }}
                  >
                    Wake up to a whole new world of blockchain technology with
                    personal attention from best blockchain engineers.
                  </Typography>
                </Box>
              </Box>
              {medium && (
                <a href="#portfolio">
                  <Box className="scroll-down"></Box>
                </a>
              )}
            </ContentText>
          </Grid>
          <CubeContainer
            item
            lg={4}
            sm={12}
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box className="inner-container" ref={(el) => (cube = el)}>
              <Cube>
                <Box className="top"></Box>
                <Box>
                  <span style={{ "--i": 0 }}></span>
                  <span style={{ "--i": 1 }}></span>
                  <span style={{ "--i": 2 }}></span>
                  <span style={{ "--i": 3 }}></span>
                </Box>
              </Cube>
            </Box>
          </CubeContainer>
        </Grid>
      </Container>
      <Box sx={{ position: "fixed", right: "20px", top: "45%" }}></Box>
      {!medium && (
        <SocialLinks ref={(el) => (socialLink = el)}>
          <Box className="social-links--container">
            <IconButton>
              <Email fontSize="large" />
            </IconButton>
            <IconButton color="primary">
              <Twitter fontSize="large" />
            </IconButton>
            <IconButton>
              <Telegram fontSize="large" />
            </IconButton>
          </Box>
        </SocialLinks>
      )}
      {!medium && (
        <RightNav ref={(el) => (rightNav = el)}>
          <Scrollspy
            items={["home", "portfolio", "team", "contact"]}
            currentClassName="is-current"
          >
            <a href="#home">
              <Box className="round" />
            </a>
            <a href="#portfolio">
              <Box className="round" />
            </a>
            <a href="#team">
              <Box className="round" />
            </a>
            <a href="#contact">
              <Box className="round" />
            </a>
          </Scrollspy>
        </RightNav>
      )}
    </>
  );
};

MainSection.propTypes = {
  timeline: propTypes.any.isRequired,
};
export default MainSection;
