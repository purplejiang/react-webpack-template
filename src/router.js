import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TestPage from 'containers/TestPage';
import NotFoundPage from 'containers/NotFoundPage';


const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={TestPage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
};

export default Router;
