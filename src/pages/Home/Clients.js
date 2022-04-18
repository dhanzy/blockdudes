import React from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  styled,
  useMediaQuery,
  useTheme,
  Button,
} from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import ChainLink from "../../assets/images/ChainLink.svg";
// import Factom from "../../assets/images/Factom.svg";
import Messari from "../../assets/images/Messari_icon_36x36.svg";
import Mask from "../../assets/images/mask.svg";
import Vetoken from "../../assets/images/vetoken.svg";
import Aztec from "../../assets/images/Aztec.svg";

gsap.registerPlugin(ScrollTrigger);

const ImageContainer = styled(Box)({
  textAlign: "center",
});

const clients = [
  {
    name: "Messari",
    description:
      "Messari is an organistion which helps investors, regulators and the public make sense of crypto assets by building data tools that will assist during investment and making decision.",
    link: "https://messari.io",
    image: Messari,
  },
  {
    name: "Vetoken Finance",
    description:
      "veToken wraps assets such as CRV to enable Platform features and maintain Liquidity.",
    link: "https://vetoken.finance",
    image: Vetoken,
  },
  {
    name: "Mask",
    description:
      "Mask is an extension that provides a decentraized social, messaging, payment networks and file storage, and file sharing withour leaving the mainstream social media networks.",
    link: "https://mask.io",
    image: Mask,
  },
  {
    name: "Aztec",
    description:
      "On public blockchains, the AZTEC protocol was built to enable privacy. It allows for logical checks on encrypted values without revealing the underlying information to the blockchain.",
    link: "https://aztec.network",
    image: Aztec,
  },
];

const ClientCard = styled(Grid)(({ theme }) => ({
  margin: "30px 0px",
  "& .learn-client-btn": {
    marginTop: "50px",
    // "& a": {
    //   backgroundColor: theme.palette.primary.main,
    //   padding: "10px 15px",
    //   border: "none",
    //   outline: "none",
    //   borderRadius: "5px",
    // },
  },
  "&:nth-of-type(2n + 2)": {
    flexDirection: "row-reverse",
    "& .learn-client-btn": {
      textAlign: "right",
      [theme.breakpoints.down("md")]: {
        textAlign: "center",
      },
    },
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
    "& .MuiGrid-item": {
      paddingLeft: "0px",
    },
    "&:nth-of-type(2n + 2)": {
      flexDirection: "column-reverse",
    },
  },
}));

const Clients = () => {
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down("md"));
  let clientsContainer = React.useRef();
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
          trigger: clientsContainer.current,
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
    <Container maxWidth="xl" ref={clientsContainer}>
      <Box sx={{ textAlign: "center", mb: "20px" }}>
        <Typography variant="h4" className="heading" ref={heading}>
          We are Trusted
        </Typography>
        <Typography
          component="p"
          sx={{ maxWidth: "700px", margin: "auto", my: 2 }}
          ref={subheading}
        >
          Our most recent items are a sample of what we excel at. Our talent and
          abilities are devoted to making technology even better.
        </Typography>
      </Box>
      <Box sx={{ mt: 3 }}>
        {clients.map((client, index) => (
          <ClientCard
            container
            spacing={5}
            key={client.name}
            className={index % 2 == 0 && "mobile-grid"}
          >
            <Grid item md={6} ref={leftcontainer}>
              <Box>
                <Typography
                  variant="h3"
                  sx={{ fontWeight: "800", textAlign: small && "center" }}
                >
                  {client.name}
                </Typography>
                <Box sx={{ my: 5 }}>
                  <Typography component="p">{client.description}</Typography>
                  <Box className="learn-client-btn">
                    <Button
                      variant="contained"
                      component="a"
                      href={client.link}
                      target="blank"
                    >
                      Learn More
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item md={6} sm={12} xs={12} ref={rightcontainer}>
              <ImageContainer>
                <img src={client.image} />
              </ImageContainer>
            </Grid>
          </ClientCard>
        ))}
      </Box>
    </Container>
  );
};

export default Clients;
