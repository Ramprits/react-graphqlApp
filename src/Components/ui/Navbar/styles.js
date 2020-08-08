import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  menu: {
    marginLeft: "auto",
  },
  button: {
    textTransform: "none",
    color: "white",
    marginRight: theme.spacing(2),
  },
}));
