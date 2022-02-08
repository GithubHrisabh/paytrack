import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    marginLeft: 20,
  },
});

export default function Header({ icon, change, theme }) {
  const themeToggle = !theme ? "Light" : "Dark";
  const iconToggle = !theme ? "Sun" : "Moon";
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar>
        <IconButton>
          <GitHubIcon />
        </IconButton>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="mode"
          onClick={change}
        >
          {icon}
        </IconButton>

        <Typography className={classes.root}>
          Click on {iconToggle} Icon to change to {themeToggle} theme
        </Typography>
      </Toolbar>
    </AppBar>
  );
}