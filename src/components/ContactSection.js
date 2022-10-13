import React from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Grid,
  styled,
  Button,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import * as emailjs from "emailjs-com";

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
  const [snackOpen, setSnackOpen] = React.useState(false);
  const [message, setMessage] = React.useState({
    status: "success",
    message: "",
  });
  const EMAILJS_SERVICE_ID = "";
  const EMAILJS_TEMPLATE_ID = "";
  const EMAILJS_PUBLIC_KEY = "";
  const handleClose = () => {
    setSnackOpen(false);
  };
  return (
    <Container maxWidth="xl">
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={snackOpen}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={message.status === "success" ? "success" : "error"}
          sx={{ with: "100%" }}
        >
          {message.message}
        </Alert>
      </Snackbar>
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
            <Formik
              initialValues={{
                full_name: "",
                email: "",
                subject: "",
                message: "",
              }}
              validationSchema={Yup.object().shape({
                full_name: Yup.string().required("Your name is required!"),
                email: Yup.string()
                  .email("Must be a valid email")
                  .required("Email is required"),
                subject: Yup.string(),
                message: Yup.string().required("Please put un your message"),
              })}
              onSubmit={(values, { resetForm }) => {
                console.log("running form");
                emailjs
                  .send(
                    EMAILJS_SERVICE_ID,
                    EMAILJS_TEMPLATE_ID,
                    values,
                    EMAILJS_PUBLIC_KEY
                  )
                  .then(
                    (result) => {
                      console.log("sent form");
                      console.log(result.text);
                      setMessage({
                        status: "success",
                        message:
                          "Message sent successfully. We will reach out to you as soon as possible.",
                      });
                      setSnackOpen(true);
                      resetForm({
                        values: {
                          full_name: "",
                          email: "",
                          subject: "",
                          message: "",
                        },
                      });
                    },
                    (error) => {
                      console.log("ERror");
                      console.log(error.text);
                      setMessage({
                        status: "error",
                        message: "Unable to send message",
                      });
                      setSnackOpen(true);
                    }
                  )
                  .catch((error) => {
                    console.log(error);
                  });
              }}
            >
              {({
                values,
                handleChange,
                handleSubmit,
                touched,
                errors,
                isSubmitting,
              }) => (
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="standard"
                        type="text"
                        label="Name"
                        margin="normal"
                        name="full_name"
                        value={values.full_name}
                        onChange={handleChange}
                        error={touched.full_name && Boolean(errors.full_name)}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="standard"
                        type="email"
                        label="Email"
                        margin="normal"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        error={touched.email && Boolean(errors.email)}
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                  <TextField
                    margin="normal"
                    variant="standard"
                    type="text"
                    label="Subject"
                    name="subject"
                    value={values.subject}
                    onChange={handleChange}
                    error={touched.subject && Boolean(errors.subject)}
                    fullWidth
                  />
                  <TextArea
                    name="message"
                    value={values.message}
                    placeholder="Message"
                    onChange={handleChange}
                    rows={5}
                    required
                  />
                  <Box sx={{ mt: 3, textAlign: "center" }}>
                    <Button
                      size="large"
                      variant="contained"
                      color="primary"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? <CircularProgress /> : "SendMessage"}
                    </Button>
                  </Box>
                </form>
              )}
            </Formik>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactSection;
