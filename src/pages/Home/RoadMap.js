import React from "react";
import { Box, Container, Typography, styled } from "@mui/material";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";

const TimelineContainer = styled(Timeline)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    margin: "16px -15px",
  },
}));

const RoadMap = () => {
  return (
    <Container>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h3" className={["heading", "primary"].join(" ")}>
          Blockdude Road Map
        </Typography>
        <Typography
          component="p"
          sx={{ margin: "auto", maxWidth: "800px", sy: 2 }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
          aperiam? Iusto fugit suscipit consequuntur esse numquam!
        </Typography>
      </Box>
      <Box>
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
