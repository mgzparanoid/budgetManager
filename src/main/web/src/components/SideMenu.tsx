import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";
// import ContactIcon from '@mui/icons-material/Contact';

function SideMenu(props: any) {
  const remainingMonths = [
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  return (
    <Drawer
      anchor="left"
      open={props.isDrawerOpen}
      onClose={props.handleMenuClose}
    >
      <div>
        <List>
          <ListItem button key="home">
            <Link to="/">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </Link>
          </ListItem>

          <ListItem key="about">
            <Link to="/spendings">
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary="Fixed Spendings" />
            </Link>
          </ListItem>

          <ListItem key="contact">
            <Link to="/earnings">
              <ListItemIcon>{/* <ContactIcon /> */}</ListItemIcon>
              <ListItemText primary="Fixed Earnings" />
            </Link>
          </ListItem>
          {remainingMonths.map((el: string) => (
            <Link to={"/status/" + el + ".23"}>
              <ListItem key="contact">
                <ListItemIcon>{/* <ContactIcon /> */}</ListItemIcon>
                <ListItemText primary={el + ".23"} />
              </ListItem>
            </Link>
          ))}

          <ListItem button key="contact">
            <ListItemIcon>{/* <ContactIcon /> */}</ListItemIcon>
            <ListItemText primary="Expected savings calculator" />
          </ListItem>
        </List>
        <Divider />
      </div>
    </Drawer>
  );
}

export default SideMenu;
