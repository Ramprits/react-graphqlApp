import React from "react";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(10, 5, 6),
  },
}));
const Login = () => {
  const classes = useStyles();
  return <div className={classes.heroContent}>This is login page</div>;
};

export default Login;
