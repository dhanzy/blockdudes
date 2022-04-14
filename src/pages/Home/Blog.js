import React from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
import BlogCard from "../../components/BlogCard";

const Blog = () => {
  return (
    <Container maxWidth="xl">
      <Box>
        <Box sx={{ textAlign: "center", my: 2 }}>
          <Typography variant="h3">BLOG POSTS</Typography>
        </Box>
        <Typography variant="h4">RECENT POSTS</Typography>
        <Grid container spacing={5} sx={{ my: 2 }}>
          <Grid item md={4}>
            <BlogCard />
          </Grid>
          <Grid item md={4}>
            <BlogCard />
          </Grid>
          <Grid item md={4}>
            <BlogCard />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Blog;
