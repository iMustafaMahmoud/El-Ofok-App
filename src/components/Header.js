import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Explicit from "@material-ui/icons/Explicit";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { Box } from "@material-ui/core";
import Drawer from "./Drawer";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "50px",
  },
  menuButton: {},
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(65),
  },
  iconContainer: {
    marginRight: theme.spacing(0.5),
    "&:hover": {
      background: "#dcdcdc",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Box>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              className={classes.iconContainer}
              onClick={() => handleClick("en")}
            >
              <Explicit />
            </IconButton>
            <IconButton
              edge="start"
              className={classes.iconContainer}
              aria-label="menu"
              color="primary"
              onClick={() => handleClick("ar")}
            >
              <Explicit />
            </IconButton>
            <Typography>contactus@mcst.edu.sa</Typography>
          </Box>
          <Typography variant="h6" className={classes.title}>
           المعرفة
          </Typography>
          <div>
            <Drawer />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
