import React from 'react';
import Signup from '../../components/signup';
import useSignup from '../../util/hooks/signup';

const SignupContainer = () => {
  const { state, setState } = useSignup();
  return <Signup {...state} {...setState} />;
};

export default SignupContainer;
