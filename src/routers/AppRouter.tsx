import { useContext, useEffect } from "react";
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { AuthRouter } from "./AuthRouter";
import { DasboardRouter } from "./DasboardRouter";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";

export const AppRouter = () => {
  const { verifiToken, user } = useContext(AuthContext);

  useEffect(() => {
    verifiToken();
  }, [verifiToken]);

  if (user?.checking === undefined) {
    return <h1>Loading</h1>;
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
