import React from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BlogCard from "../../components/BlogCard";

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
  const revealRef = React.useRef([]);
  revealRef.current = [];

  const addToRef = (el) => {
    if (el && !revealRef.current.includes(el)) {
      revealRef.current.push(el);
    }
  };

  React.useEffect(() => {
    revealRef.current.forEach((el) => {
      gsap.from(el, {
        transform: "scale(0.5)",
        opacity: 0,
        scrollTrigger: {
          trigger: el,
        },
      });
    });
  });

  return (
    <Container maxWidth="xl">
      <Box>
        <Box sx={{ textAlign: "center", my: 2 }}>
          <Typography variant="h3">BLOG POSTS</Typography>
        </Box>
        <Typography variant="h4">RECENT POSTS</Typography>
        <Grid container spacing={5} sx={{ my: 2 }}>
          {Array(3)
            .fill()
            .map((_, index) => (
              <Grid item md={4} key={index} ref={addToRef}>
                <BlogCard />
              </Grid>
            ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Blog;
