import { useContext, useEffect } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { AuthRouter } from "./AuthRouter";
import { DasboardRouter } from "./DasboardRouter";
import { PublicRouter } from "./PublicRouter";


export const AppRouter = () => {

  const {renew , auth} = useContext(AuthContext)
  
  useEffect(() => {
    renew()
  }, [renew])
  
  if (auth?.checking === undefined) {
    return <h1>lOADING</h1>
  }
  return (
    <Router>
      <Switch>
        <PublicRouter path="/accounts" component={AuthRouter} />
        <Route path="/" component={DasboardRouter} />
        <Redirect to="/marvel" />
      </Switch>
    </Router>
  );
};
