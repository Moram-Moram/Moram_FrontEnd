import React from 'react';
import Signup from '../../components/signup';
import useSignup from '../../util/hooks/signup';

const SignupContainer = () => {
  const { setState } = useSignup();
  return <Signup {...setState} />;
};

export default SignupContainer;
