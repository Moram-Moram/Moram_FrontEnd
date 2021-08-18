import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Signup, Login, Main, Mypage, Post } from '../components';

const MainRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/' component={Main} />
        <Route exact path='/mypage' component={Mypage} />
        <Route exact path='/post/view' component={Post} />
      </Switch>
    </Router>
  );
};

export default MainRouter;
