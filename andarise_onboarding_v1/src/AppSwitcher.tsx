import React from "react";
import { Route, RouteComponentProps } from "react-router";

interface Props {
  Component: React.FC<RouteComponentProps>;
  path: string;
  exact?: boolean;
  isPrivate: boolean;
}

const AppSwitcher = ({
  Component,
  path,
  exact,
  isPrivate,
  ...props
}: Props): JSX.Element => {
  return (
    <Route path={path} exact render={(props) => <Component {...props} />} />
  );
};

AppSwitcher.propTypes = {};

export default AppSwitcher;
