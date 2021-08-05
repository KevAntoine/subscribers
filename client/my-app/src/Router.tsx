import { createBrowserHistory } from "history";
import React, { useState } from "react";
import { Router, Switch } from "react-router";
import { getSessionCookie, SessionContext } from "./sessions";

import Routes from "./Routes";
import AppContext from "./Context";

const history = createBrowserHistory();

const AppRouter = () => {
  const [session, setSession] = useState(getSessionCookie());
  return (
    <SessionContext.Provider value={{ session, setSession }}>
      <Router history={history}>
        <Switch>
          {Routes.map((route, index) => (
            <AppContext
              key={index}
              path={route.path}
              isPrivate={route.isPrivate}
              exact
              Component={route.component as React.FC}
            />
          ))}
        </Switch>
      </Router>
    </SessionContext.Provider>
  );
};

export default AppRouter;
