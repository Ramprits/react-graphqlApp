import React from "react";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import theme from "../Components/ui/theme";
import Navbar from "../Components/ui/Navbar";
import { Switch, Route } from "react-router-dom";
import Login from "./auth/login";
import Register from "./auth/register";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Switch>
        <Route exact path="/" component={() => <div>Home</div>}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
      </Switch>
    </ThemeProvider>
  );
};

export default App;
