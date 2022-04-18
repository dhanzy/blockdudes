import React from "react";
import { styled, Grid, Box, Button, Typography } from "@mui/material";

const PortfolioContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "rgba(0,0,0,0.5)",
  padding: "3rem 2rem",
  position: "relative",
  zIndex: 500,
  [theme.breakpoints.down("sm")]: {
    padding: "3rem .5rem",
  },
}));

const Portfolio = () => {
  return (
    <PortfolioContainer>
      <Grid container spacing={2} className="mobile-grid">
        <Grid item md={6} sm={12}>
          <Box>
            <Typography component="p">
              By thinking globally, we&apos;re a powerful team without
              compromise or regard for borders. This has allowed us to hire the
              top designers, engineers and managers to deliver the very best
              human solutions.
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
              <Typography className="header" variant="h5" color="secondary">
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
  );
};

export default Portfolio;
