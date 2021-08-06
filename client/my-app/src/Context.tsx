import React, { useContext } from "react";
import { Route, RouteComponentProps } from "react-router";
import { SessionContext } from "./sessions";
import Home from "./views/Home";

interface Props {
  Component: React.FC<RouteComponentProps>;
  path: string;
  exact?: boolean;
  isPrivate: boolean;
}
const AppContext = ({
  Component,
  path,
  exact,
  isPrivate,
  ...props
}: Props): JSX.Element => {
  const { session } = useContext(SessionContext);
  return (
    <>
      {isPrivate && session ? (
        <Route path="/welcome" component={Home} />
      ) : (
        <Route path={path} exact render={(props) => <Component {...props} />} />
      )}
    </>
  );
};

export default AppContext;
