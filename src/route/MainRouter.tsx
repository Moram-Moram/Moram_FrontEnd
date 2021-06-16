import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Signup } from '../components';

const MainRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/signup' component={Signup} />
      </Switch>
    </Router>
  );
};

export default MainRouter;
