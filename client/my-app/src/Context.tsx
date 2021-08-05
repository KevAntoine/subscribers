import React, { useContext } from "react";
import { Route, RouteComponentProps } from "react-router";
import { Provider } from "./store";

const AppContext = ({
  Component,
  path,
  exact,
  isPrivate,
  ...rest
}: {
  Component: React.FC<RouteComponentProps>;
  path: string;
  exact: boolean;
  isPrivate: boolean;
}): JSX.Element => {
  return (
    <>
      <Provider initialState={{ name: "user" }}>
        <Route path={path} render={(props) => <Component {...props} />}></Route>
      </Provider>
    </>
  );
};

export default AppContext;
