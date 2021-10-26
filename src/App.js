import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";

const Fallback = <div>Loading...</div>;
const Login = lazy(() => import("./pages/login"));
const SignUp = lazy(() => import("./pages/sign_up"));
const NotFound = lazy(() => import("./pages/not_found"));

function App() {
  return (
    <Router>
      <Suspense fallback={Fallback}>
        <Switch>
          <Route path={ROUTES.LOGIN} component={Login} />
          <Route path={ROUTES.SIGN_UP} component={SignUp} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
