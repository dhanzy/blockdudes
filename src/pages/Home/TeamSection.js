import React from "react";
import propTypes from "prop-types";
import { Container, Box, Typography, Grid } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TeamCard from "../../components/TeamCard";

gsap.registerPlugin(ScrollTrigger);

const TeamSection = ({ teams }) => {
  const teamHeading = React.useRef(null);
  const revealRefs = React.useRef([]);
  revealRefs.current = [];

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  React.useEffect(() => {
    revealRefs.current.forEach((el) => {
      gsap.fromTo(
        el,
        {
          autoAlpha: 0,
        },
        {
          duration: 1,
          autoAlpha: 1,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top center",
          },
        }
      );
    });
  });

  React.useEffect(() => {
    gsap.from(teamHeading.current, {
      duration: 2,
      transform: "scale(0.5)",
      opacity: 0,
      scrollTrigger: {
        trigger: teamHeading.current,
      },
    });
  });

  return (
    <Container maxWidth="xl">
      <Box>
        <Box sx={{ textAlign: "center", my: 5 }} ref={teamHeading}>
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
              <Grid
                item
                lg={3}
                md={6}
                sm={6}
                xs={12}
                key={team.imageUrl}
                ref={addToRefs}
              >
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
