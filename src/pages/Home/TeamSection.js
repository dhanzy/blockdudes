import React from "react";
import propTypes from "prop-types";
import { Container, Box, Typography, Grid } from "@mui/material";
import TeamCard from "../../components/TeamCard";

const TeamSection = ({ teams }) => {
  return (
    <Container maxWidth="xl">
      <Box>
        <Box sx={{ textAlign: "center", my: 5 }}>
          <Typography
            variant="h3"
            sx={{ fontWeight: "800", color: "primary.dark" }}
            className="heading"
          >
            Meet The Members
          </Typography>
          <Typography component="p">
            Each of the people who contributes to the creation of the world
            class organisation
          </Typography>
        </Box>
        <Box>
          <Grid container spacing={2}>
            {teams.map((team) => (
              <Grid item lg={3} md={6} sm={6} xs={12} key={team.imageUrl}>
                <TeamCard
                  name={team.name}
                  position={team.position}
                  imageUrl={team.imageUrl}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

TeamSection.propTypes = {
  teams: propTypes.array,
};

export default TeamSection;
