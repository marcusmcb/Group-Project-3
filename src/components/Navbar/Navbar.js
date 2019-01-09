import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";


import { Link } from 'react-router-dom'

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

function Navbar(props) {
  const { classes } = props;
  return <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Welcome to Eventageous
          </Typography>
          <Link to="/" style={{ color: "white", textDecoration: "none" }} />

          <Link to="/login" style={{ color: "white", textDecoration: "none" }}>
            <Button color="inherit">Login</Button>
          </Link>
          <Link to="/about" style={{ color: "white", textDecoration: "none" }}>
            <Button color="inherit">About</Button>
          </Link>
          <Link to="/dashboard" style={{ color: "white", textDecoration: "none" }}>
            <Button color="inherit">Dashboard</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>;
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navbar);
