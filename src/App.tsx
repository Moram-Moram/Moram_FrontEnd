import React from 'react';
import { Provider } from 'react-redux';
import store from './modules/redux/store';
import MainRouter from './route';
import GlobalStyle from './style';

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <MainRouter />
    </Provider>
  );
};

export default App;
