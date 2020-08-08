import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./styles";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography className={classes.title} variant="h6" noWrap>
          Cotecna Inspection
        </Typography>
        <div className={classes.menu}>
          <Button className={classes.button} component={Link} to="/">
            Products
          </Button>
          <Button className={classes.button} component={Link} to="/login">
            Login
          </Button>
          <Button className={classes.button} component={Link} to="/register">
            Register
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
