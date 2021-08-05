import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Route, RouteComponentProps } from "react-router";
import { SessionContext } from "./sessions";

import Home from "./Home";
const Context = ({
  component,
  path,
  exact,
  isPrivate,
  ...rest
}: {
  component: React.FC<RouteComponentProps>;
  path: string;
  exact: boolean;
  isPrivate: boolean;
}): JSX.Element => {
  const { session } = useContext(SessionContext);
  return (
    <>
      {isPrivate && !Boolean(session) ? (
        <div>
          <Route path="/" component={Home} />
          <div>{component}</div>
        </div>
      ) : null}
    </>
  );
};

Context.propTypes = {
  component: PropTypes.node,
};

export default Context;
