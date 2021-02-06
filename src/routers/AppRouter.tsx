import { useContext, useEffect } from "react";
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { AuthRouter } from "./AuthRouter";
import { DasboardRouter } from "./DasboardRouter";
import { PrivateRouter } from "./PrivateRouter";
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
        <PrivateRouter path="/" component={DasboardRouter} />
        <Redirect to="/marvel" />
      </Switch>
    </Router>
  );
};
