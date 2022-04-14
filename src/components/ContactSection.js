import React from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Grid,
  styled,
  Button,
} from "@mui/material";

const TextArea = styled("textarea")(({ theme }) => ({
  border: "none",
  borderBottom: "1px solid white",
  width: "100%",
  marginTop: "20px",
  marginBottom: "8px",
  background: "none",
  outline: "none",
  padding: "4px 0px 5px",
  font: "inherit",
  color: "currentcolor",
  "&:hover": {
    borderBottom: "2px solid white",
  },
  "&:focus": {
    borderBottom: `2px solid ${theme.palette.primary.main}`,
  },
}));

const ContactSection = () => {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={5}>
        <Grid item lg={5} md={6} sm={12}>
          <Box>
            <Typography variant="h5" className="header">
              Contact Us
            </Typography>
            <Typography variant="h3">
              TAKE YOUR COMPANY TO THE NEXT LEVEL
            </Typography>
            <Typography component="p" sx={{ mt: 4 }}>
              Our main goal is to help educate blockchain buisness owners and
              individuals on how to have the best buisness strategy or commit to
              best blockchain practices. Feel free to contact us at any time to
              help guide your buisness to greater success and we will get back
              to you as soon as we can.
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={7} md={6} sm={12} xs={12}>
          <Box>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="standard"
                    type="text"
                    label="Name"
                    margin="normal"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="standard"
                    type="email"
                    label="Email"
                    margin="normal"
                    fullWidth
                  />
                </Grid>
              </Grid>
              <TextField
                margin="normal"
                variant="standard"
                type="text"
                label="Subject"
                fullWidth
              />
              <TextArea placeholder="Message" rows={5} />
              <Box sx={{ mt: 3, textAlign: "center" }}>
                <Button size="large" variant="contained" color="primary">
                  SendMessage
                </Button>
              </Box>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactSection;
