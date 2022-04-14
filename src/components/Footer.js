import React from "react";
import {
  Box,
  Container,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
  IconButton,
} from "@mui/material";
import { GitHub, Twitter, Telegram } from "@mui/icons-material";

const FooterSection = styled("footer")(({ theme }) => ({
  padding: "20px 0px",
  "& .credits": {
    display: "flex",
    justifyContent: "space-between",
  },
  "& .social": {
    margin: "10px 0px",
  },
  [theme.breakpoints.down("md")]: {
    "& .credits": {
      flexDirection: "column",
      alignItems: "center",
    },
  },
}));

const Footer = () => {
  const theme = useTheme();
  const medium = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <FooterSection>
      <Container maxWidth="xl">
        {medium && (
          <Box display="flex" justifyContent="space-between" className="social">
            <IconButton>
              <GitHub fontSize="large" />
            </IconButton>
            <IconButton>
              <Twitter fontSize="large" />
            </IconButton>
            <IconButton>
              <Telegram fontSize="large" />
            </IconButton>
          </Box>
        )}
        <Box className="credits">
          <Typography variant="h4" sx={{ fontWeight: 800 }}>
            BLOCKDUDES
          </Typography>
          <Typography variant="h5">DESIGNED ETHICALLY</Typography>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            DEVELOPED FOR THE FUTURE
          </Typography>
        </Box>
      </Container>
    </FooterSection>
  );
};

export default Footer;
