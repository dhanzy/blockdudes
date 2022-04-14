import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Avatar,
  Box,
  styled,
  Typography,
  CardActionArea,
} from "@mui/material";

const BlogContainer = styled(Card)(({ theme }) => ({
  "& a": {
    textDecoration: "none",
    color: theme.palette.secondary.main,
    marginTop: "20px",
    fontWeigh: 500,
  },
}));

const BlogCard = () => {
  return (
    <BlogContainer>
      <CardActionArea>
        <CardMedia
          component="img"
          image="https://images.pexels.com/photos/7679726/pexels-photo-7679726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <CardContent>
          <Box display="flex" alignItems="center">
            <Avatar
              src="https://media.istockphoto.com/photos/illustration-of-smiling-happy-man-with-laptop-sitting-in-armchair-picture-id1226886130?b=1&k=20&m=1226886130&s=612x612&w=0&h=POIRcyGpS6RfNP-NLG7lvnqx5stn11diDBQnQE4sDkM="
              sx={{ border: "2px solid #F6416C" }}
            />
            <Box sx={{ ml: 2 }}>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                DARIUS JAMESON
              </Typography>
              <Typography component="p">Jan 20 3 Days Ago</Typography>
            </Box>
          </Box>
          <Box sx={{ mt: 3 }}>
            <Typography component="p" sx={{}}>
              A blockchain engineer is a complete package who can perform the
              operations, designing, development, analyzing, implementing, and
              supporting a distributed blockchain network. They must have the
              ability
            </Typography>
            <a href="#">Read More</a>
          </Box>
        </CardContent>
      </CardActionArea>
    </BlogContainer>
  );
};

export default BlogCard;
