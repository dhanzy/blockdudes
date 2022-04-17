import React from "react";
import { Box, Container, Typography, styled } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";

gsap.registerPlugin(ScrollTrigger);

const TimelineContainer = styled(Timeline)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    margin: "16px -15px",
  },
}));

const RoadMap = () => {
  const roadHeader = React.useRef(null);
  const roadSubheader = React.useRef(null);
  const roadTree = React.useRef(null);
  React.useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: roadHeader.current,
          start: "top center",
        },
      })
      .from(roadHeader.current, {
        x: "-50%",
        opacity: 0,
      })
      .from(roadSubheader.current, {
        x: "50%",
        opacity: 0,
      });
  });

  React.useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: roadTree.current,
          start: "top center",
        },
      })
      .from(roadTree.current, {
        x: "-50%",
        opacity: 0,
      });
  });
  return (
    <Container>
      <Box sx={{ textAlign: "center" }}>
        <Typography
          variant="h3"
          className={["heading", "primary"].join(" ")}
          ref={roadHeader}
        >
          Blockdude Road Map
        </Typography>
        <Typography
          component="p"
          sx={{ margin: "auto", maxWidth: "800px", sy: 2 }}
          ref={roadSubheader}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
          aperiam? Iusto fugit suscipit consequuntur esse numquam!
        </Typography>
      </Box>
      <Box ref={roadTree}>
        <TimelineContainer position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Ethereum Blockchain</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Web development</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Smart Contract development</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Solidity</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Ethereum Blockchain</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Web development</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Smart Contract development</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" />
            </TimelineSeparator>
            <TimelineContent>Solidity</TimelineContent>
          </TimelineItem>
        </TimelineContainer>
      </Box>
    </Container>
  );
};

export default RoadMap;
