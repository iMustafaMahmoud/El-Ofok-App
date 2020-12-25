import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountCircle from "@material-ui/icons/AccountCircle";
import GroupIcon from "@material-ui/icons/Group";
import EventNoteIcon from "@material-ui/icons/EventNote";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import IconButton from "@material-ui/core/IconButton";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  iconContainer: {
    "&:hover": {
      background: "#dcdcdc",
    },
  },
  DrawerContainer: {
    "&:hover": {
      color: "red",
    },
  },
});

const Drawer = () => {
  const classes = useStyles();
  const { t, i18n } = useTranslation();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button>
          <ListItemIcon>
            <AccountCircle color="primary" />
          </ListItemIcon>
          <ListItemText primary={t("Admission mail")} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon className={classes.DrawerContainer}>
            <GroupIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary={t("Applicants")} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <EventNoteIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary={t("Dates")} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ExitToAppIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary={t("Sign out")} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            className={classes.iconContainer}
            onClick={toggleDrawer("right", true)}
          >
            <AccountCircle color="primary" />
          </IconButton>
          <SwipeableDrawer
            anchor="right"
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
            onOpen={toggleDrawer("right", true)}
          >
            {list("right")}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Drawer;
