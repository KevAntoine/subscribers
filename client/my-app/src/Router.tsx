import React, { useState } from "react";
import {
  RouteComponentProps,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { getSessionCookie, SessionContext } from "./sessions";

import Routes from "./Routes";
import AppContext from "./Context";

const AppRouter = () => {
  const [session, setSession] = useState(getSessionCookie());
  return (
    <SessionContext.Provider value={{ session, setSession }}>
      <Router>
        <Switch>
          {Routes.map((route, index) => (
            <AppContext
              key={index}
              path={route.path}
              isPrivate={route.isPrivate}
              exact
              Component={
                route.component as unknown as React.FC<RouteComponentProps<{}>>
              }
            />
          ))}
        </Switch>
      </Router>
    </SessionContext.Provider>
  );
};

export default AppRouter;
