import React from "react";
import propTypes from "prop-types";
import { Card, CardContent, Typography } from "@mui/material";

const ServiceCard = ({ iconComponent, title, content }) => {
  return (
    <Card sx={{ textAlign: "center", background: "transparent" }}>
      <CardContent>
        {iconComponent}
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          {String(title).toUpperCase()}
        </Typography>
        <Typography component="p" sx={{ fontSize: "1.1rem !important", mt: 2 }}>
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

ServiceCard.propTypes = {
  iconComponent: propTypes.node,
  title: propTypes.string,
  content: propTypes.string,
};

export default ServiceCard;
