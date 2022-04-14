import React from "react";
import propTypes from "prop-types";
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemText,
  styled,
  ListItemIcon,
} from "@mui/material";
import { Groups, Call, ManageAccounts } from "@mui/icons-material";

const AsideDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiPaper-root": {
    backgroundColor: theme.palette.primary.dark,
    justifyContent: "center",
    alignItems: "center",
    "& .MuiButtonBase-root": {
      margin: "30px 0px",
      "& .MuiTypography-root": {
        fontWeight: 800,
      },
    },
  },
}));

const Aside = ({ drawerState, setDrawerState, menuItems }) => {
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerState(open);
  };
  return (
    <AsideDrawer
      anchor="right"
      open={drawerState}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box sx={{ width: 250 }}>
        <List ref={menuItems}>
          <ListItem button component="a" href="#portfolio">
            <ListItemIcon>
              <ManageAccounts fontSize="large" />
            </ListItemIcon>
            <ListItemText primary="portfolio" />
          </ListItem>
          <ListItem button component="a" href="#team">
            <ListItemIcon>
              <Groups fontSize="large" />
            </ListItemIcon>
            <ListItemText>Team</ListItemText>
          </ListItem>
          <ListItem button component="a" href="#contact">
            <ListItemIcon>
              <Call fontSize="large" />
            </ListItemIcon>
            <ListItemText>Contact</ListItemText>
          </ListItem>
        </List>
      </Box>
    </AsideDrawer>
  );
};

Aside.propTypes = {
  drawerState: propTypes.any,
  setDrawerState: propTypes.any,
  menuItems: propTypes.any,
};

export default Aside;
