import React from 'react';
import Login from '../../components/login';
import useAuth from '../../util/hooks/auth';

const AuthContainer = () => {
  const { state, setState } = useAuth();

  return <Login {...state} {...setState} />;
};

export default AuthContainer;
