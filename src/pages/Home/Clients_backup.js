import React from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ChainLink from "../../assets/images/ChainLink.svg";
// import Factom from "../../assets/images/Factom.svg";
import Messari from "../../assets/images/Messari_icon_36x36.svg";

gsap.registerPlugin(ScrollTrigger);

const ImageContainer = styled(Box)({
  textAlign: "center",
});

const Portfolio = () => {
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down("md"));
  let portfolioContainer = React.useRef();
  let heading = React.useRef();
  let subheading = React.useRef();
  let leftcontainer = React.useRef();
  let rightcontainer = React.useRef();
  let mobileGrid = React.useRef();
  let gridText = React.useRef();
  let gridChain = React.useRef();

  React.useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: portfolioContainer.current,
          start: "top center",
        },
      })
      .from(heading.current, {
        x: "-50px",
        opacity: 0,
      })
      .from(subheading.current, {
        x: "-50px",
        opacity: 0,
      })
      .from(leftcontainer.current, {
        x: "-50px",
        opacity: 0,
      })
      .from(rightcontainer.current, {
        x: "-50px",
        opacity: 0,
      });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: mobileGrid.current,
          start: "top center",
        },
      })
      .from(gridText.current, {
        x: "-50px",
        opacity: 0,
      })
      .from(gridChain.current, {
        x: "-50px",
        opacity: 0,
      });
  }, []);
  return (
    <Container maxWidth="xl" ref={portfolioContainer}>
      <Box sx={{ textAlign: "center", mb: "20px" }}>
        <Typography variant="h4" className="heading" ref={heading}>
          We are Trusted
        </Typography>
        <Typography
          component="p"
          sx={{ maxWidth: "700px", margin: "auto", my: 2 }}
          ref={subheading}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
          aperiam? Iusto fugit suscipit consequuntur esse numquam!
        </Typography>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Grid container spacing={1}>
          <Grid item md={6} ref={leftcontainer}>
            <Box>
              <Typography
                variant="h3"
                sx={{ fontWeight: "800", textAlign: small && "center" }}
              >
                The most trusted way to build future
              </Typography>
              <Box sx={{ my: 5 }}>
                <Typography component="p">
                  BLOCKDUDES SDK is a state-of-the art blockchain framework that
                  powers the BLOCKDUDES Hub and its rapidly expanding orbit of
                  sovereign chains
                </Typography>
                <Typography component="p" sx={{ mt: 3 }}>
                  BLOCKDUDES SDK is a state-of-the art blockchain framework that
                  powers the BLOCKDUDES Hub and its rapidly expanding orbit of
                  sovereign chains
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item md={6} sm={12} xs={12} ref={rightcontainer}>
            <ImageContainer>
              <img src={Messari} />
            </ImageContainer>
          </Grid>
        </Grid>
        <Grid container className="mobile-grid" ref={mobileGrid}>
          <Grid item md={6} sm={12} xs={12}>
            <ImageContainer ref={gridChain}>
              <img src={ChainLink} />
            </ImageContainer>
          </Grid>
          <Grid item md={6} ref={gridText}>
            <Box>
              <Typography variant="h3" sx={{ fontWeight: "800" }}>
                Uncomporomising Web3 Infrastructure
              </Typography>
              <Box sx={{ my: 5 }}>
                <Typography component="p">
                  BLOCKDUDES SDK is a state-of-the art blockchain framework that
                  powers the BLOCKDUDES Hub and its rapidly expanding orbit of
                  sovereign chains
                </Typography>
                <Typography component="p" sx={{ mt: 3 }}>
                  BLOCKDUDES SDK is a state-of-the art blockchain framework that
                  powers the BLOCKDUDES Hub and its rapidly expanding orbit of
                  sovereign chains
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Portfolio;
