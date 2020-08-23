import React from "react";
import { Movies } from "./Movies";
import { Movie } from "./Movie";
import { Switch, Route, useRouteMatch } from "react-router-dom";

export const MovieRouter = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/:name`}>
        <Movie />
      </Route>
      <Route path={path}>
        <Movies />
      </Route>
    </Switch>
  );
};
