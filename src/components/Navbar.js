/* eslint-disable react/prop-types */
import React from "react";
import propTypes from "prop-types";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  useTheme,
  useMediaQuery,
  useScrollTrigger,
  Slide,
  styled,
  Container,
  CardMedia,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import Logo from "../assets/images/logo.svg";
import Aside from "./Aside";

const HideOnScroll = ({ children }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {React.cloneElement(children, { elevation: trigger ? 4 : 0 })}
    </Slide>
  );
};

HideOnScroll.propTypes = {
  children: propTypes.element.isRequired,
};

const NavButton = styled("a")(({ theme }) => ({
  color: "#fff",
  textDecoration: "none",
  transition: "all .8s ease",
  marginRight: "10px",
  padding: "5px 10px",
  fontSize: "18px",
  fontWeight: "700",
  "&:hover": {
    background: "none",
    color: theme.palette.primary.main,
  },
}));

const Navbar = ({ timeline }) => {
  let logo = React.useRef(null);
  let menuItems = React.useRef(null);
  const [drawerState, setDrawerState] = React.useState(false);
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down("sm"));

  React.useEffect(() => {
    timeline.from(logo, {
      delay: 0.5,
      duration: 1,
      opacity: 0,
      y: -100,
    });
    timeline.from(
      menuItems,
      {
        duration: 1,
        opacity: 0,
        y: -100,
      },
      "-=.3"
    );
  });
  return (
    <>
      <HideOnScroll>
        <AppBar
          sx={{ backgroundColor: "rgba(0,0,0,0.5)", backgroundImage: "none" }}
          elevation={0}
        >
          <Container maxWidth="xl">
            <Toolbar>
              <IconButton ref={(el) => (logo = el)}>
                <CardMedia
                  component="img"
                  image={Logo}
                  sx={{ width: "56px", height: "56px" }}
                />
              </IconButton>
              <Box sx={{ flexGrow: 1 }} />
              {!small ? (
                <Box ref={(el) => (menuItems = el)}>
                  <NavButton href="#portfolio">Portfolio</NavButton>
                  <NavButton href="#team">Team</NavButton>
                  <NavButton href="#portfolio">Contact</NavButton>
                </Box>
              ) : (
                <IconButton onClick={() => setDrawerState((prev) => !prev)}>
                  <Menu />
                </IconButton>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Aside
        drawerState={drawerState}
        setDrawerState={setDrawerState}
        menuItems={menuItems}
      />
    </>
  );
};

Navbar.propTypes = {
  timeline: propTypes.any,
};

export default Navbar;
