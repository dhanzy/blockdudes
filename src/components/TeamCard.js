import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
} from "@mui/material";

const TeamCard = ({ name, position, imageUrl }) => {
  return (
    <Card sx={{ textAlign: "center", background: "transparent" }}>
      <CardActionArea>
        <CardMedia component="img" image={imageUrl} height="500" />
        <CardContent>
          <Typography
            variant="h5"
            sx={{ color: "primary.main", fontWeight: "bold" }}
          >
            {name}
          </Typography>
          <Typography component="p">{position}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

TeamCard.propTypes = {
  name: PropTypes.string,
  position: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default TeamCard;
