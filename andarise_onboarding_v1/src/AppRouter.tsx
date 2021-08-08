import React from "react";
import {
  RouteComponentProps,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { ChakraProvider, theme } from "@chakra-ui/react";
import AppSwitcher from "./AppSwitcher";
import Routes from "./Routes";

const AppRouter = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Switch>
          {Routes.map((route, index) => (
            <AppSwitcher
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
    </ChakraProvider>
  );
};

export default AppRouter;
