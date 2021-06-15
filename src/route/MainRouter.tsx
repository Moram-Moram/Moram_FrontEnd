import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const MainRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path='/login' />
      </Switch>
    </Router>
  );
};

export default MainRouter;
