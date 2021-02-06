import { useContext, useEffect } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { AuthRouter } from "./AuthRouter";
import { DasboardRouter } from "./DasboardRouter";


export const AppRouter = () => {

  
  return (
    <Router>
      <Switch>
        <Route path="/accounts" component={AuthRouter} />
        <Route path="/" component={DasboardRouter} />
        <Redirect to="/marvel" />
      </Switch>
    </Router>
  );
};
